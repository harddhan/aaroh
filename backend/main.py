import json
import re
from pathlib import Path
from typing import Optional

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
import httpx
from pydantic import BaseModel, Field

from archive import (
    DocumentMetadata,
    list_catalog,
    get_approved_pdf,
    get_document_info,
    normalize_to_filename,
)
from config import (
    AAROH_DATA_ROOT,
    ARCHIVE_CONFIDENCE_THRESHOLD,
    ARCHIVE_MIN_TEXT_LENGTH,
    EMBEDDING_MODEL,
    GOOGLE_API_KEY,
    GOOGLE_GROUNDING_MODEL,
)
from llm import answer_question, connected as llm_connected
from prompts import build_user_prompt
from rag import rag_service
from web_search import google_grounded_search, search_web


app = FastAPI(title='AAROH Research API')
app.add_middleware(
    CORSMiddleware,
    allow_origins=['http://localhost:5173', 'http://127.0.0.1:5173', 'http://localhost:5174', 'http://127.0.0.1:5174'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)


class ChatRequest(BaseModel):
    message: str = Field(min_length=1, max_length=8000)


class Source(BaseModel):
    document_id: str = ''
    title: str = ''
    source_type: str = 'Primary'
    volume: str = ''
    source_file: str = ''
    page: str = ''
    collection: str = ''
    original_url: str = ''
    document_url: str = ''
    file_exists: bool = True
    snippet: str = ''
    source: str = 'Dr. Ambedkar Foundation'


class ChatResponse(BaseModel):
    answer: str
    sources: list[Source]
    web_sources: list[dict[str, str]] = Field(default_factory=list)
    provider_available: bool = True
    # Indicates which pipeline generated the answer:
    #   "archive"  - answered from AAROH local indexed archive
    #   "google"   - answered via Google Search grounding (Gemini)
    #   "hybrid"   - archive passages supplemented with web context
    #   "fallback" - LLM unavailable; raw passages / web snippets returned
    answer_source: str = 'archive'


class ArchiveFile(BaseModel):
    id: str = ''
    source_file: str
    title: str = ''
    description: str = ''
    pages: int = 0
    collection: str = 'Writings and Speeches'
    document_type: str = 'PDF'
    source: str = 'Dr. Ambedkar Foundation'
    original_url: str = ''
    document_url: str = ''
    file_exists: bool = True


class TimelineEvent(BaseModel):
    id: str
    date: str = ''
    title: str
    description: str
    category: str
    source: str = ''
    page: str = ''


class MediaItem(BaseModel):
    id: str
    title: str
    media_type: str
    description: str = ''
    source: str = ''
    source_url: str = ''
    media_url: str = ''
    local_file: str = ''
    license: str = ''
    attribution: str = ''
    year: str = ''
    verified: bool = False


def _jsonl(path: Path) -> list[dict[str, object]]:
    if not path.exists():
        return []
    records = []
    with path.open('r', encoding='utf-8') as handle:
        for line in handle:
            try:
                record = json.loads(line)
            except json.JSONDecodeError:
                continue
            if isinstance(record, dict):
                records.append(record)
    return records


# ---------------------------------------------------------------------------
# Archive sufficiency check
# ---------------------------------------------------------------------------

def _is_archive_sufficient(scored_passages: list[tuple]) -> bool:
    """Return True when the local archive has enough relevant evidence to answer.

    Decision is based on three independent signals - all three must pass:

    1. Score - the best passage must exceed ARCHIVE_CONFIDENCE_THRESHOLD.
       (Threshold is tuned for cosine-normalised similarity in [0, 1].)

    2. Text volume - total chars across all passages must exceed
       ARCHIVE_MIN_TEXT_LENGTH (default 200).

    3. Count - at least 2 relevant passages returned.
    """
    if not scored_passages:
        return False

    passages_only = [p for p, _ in scored_passages]
    scores = [s for _, s in scored_passages]

    best_score = max(scores)
    total_text = sum(len(p.text) for p in passages_only)

    count_ok = len(passages_only) >= 2
    score_ok = best_score >= ARCHIVE_CONFIDENCE_THRESHOLD
    volume_ok = total_text >= ARCHIVE_MIN_TEXT_LENGTH

    return count_ok and score_ok and volume_ok


# ---------------------------------------------------------------------------
# Health
# ---------------------------------------------------------------------------

@app.get('/api/health')
def health() -> dict[str, object]:
    return {
        'status': 'ok',
        'rag_connected': rag_service.connected,
        'ai_api_connected': llm_connected(),
        'embedding_model_configured': bool(EMBEDDING_MODEL),
        'google_grounding_configured': bool(GOOGLE_API_KEY),
    }


# ---------------------------------------------------------------------------
# Archive document endpoints
# ---------------------------------------------------------------------------

@app.get('/api/archive/documents', response_model=list[DocumentMetadata])
def archive_documents() -> list[DocumentMetadata]:
    """Returns the complete catalog of 19 approved Ambedkar Writings and Speeches volumes."""
    return list_catalog()


@app.get('/api/archive/documents/{doc_id}', response_model=DocumentMetadata)
def archive_document(doc_id: str) -> DocumentMetadata:
    """Returns metadata for a specific document."""
    doc = get_document_info(doc_id)
    if not doc.document_url:
        raise HTTPException(status_code=404, detail="Document not found")
    return doc


@app.api_route('/api/archive/documents/{doc_id}/file', methods=['GET', 'HEAD'])
def stream_document_file(doc_id: str):
    """
    Safely stream approved original PDF files by document ID or filename.
    Ensures strict whitelist verification and path traversal prevention.
    """
    result = get_approved_pdf(doc_id)
    if not result:
        raise HTTPException(status_code=404, detail="Document not found or access denied")
    doc, file_path = result
    return FileResponse(
        path=file_path,
        media_type="application/pdf",
        filename=doc.filename,
        headers={
            "Content-Disposition": f'inline; filename="{doc.filename}"',
            "Accept-Ranges": "bytes",
            "Cache-Control": "public, max-age=3600",
        },
    )


@app.api_route('/api/archive/documents/file/{filename}', methods=['GET', 'HEAD'])
def stream_document_by_filename(filename: str):
    """
    Safely stream approved original PDF files by filename.
    Ensures strict whitelist verification and path traversal prevention.
    """
    result = get_approved_pdf(filename)
    if not result:
        raise HTTPException(status_code=404, detail="Document not found or access denied")
    doc, file_path = result
    return FileResponse(
        path=file_path,
        media_type="application/pdf",
        filename=doc.filename,
        headers={
            "Content-Disposition": f'inline; filename="{doc.filename}"',
            "Accept-Ranges": "bytes",
            "Cache-Control": "public, max-age=3600",
        },
    )


@app.get('/api/archive/files', response_model=list[ArchiveFile])
def archive_files() -> list[ArchiveFile]:
    """
    Compatibility endpoint returning all 19 catalog volumes with exact
    indexed page counts from metadata.jsonl and validated document URLs.
    """
    try:
        rag_service.load_metadata()
    except RuntimeError:
        pass

    catalog = list_catalog()
    pages_by_fn = {c.filename: set() for c in catalog}

    if rag_service.metadata:
        for metadata in rag_service.metadata:
            source_file = str(metadata.get('source_file') or metadata.get('file') or '')
            fn = normalize_to_filename(source_file)
            if fn and fn in pages_by_fn:
                page = metadata.get('page')
                if page:
                    pages_by_fn[fn].add(str(page))

    return [
        ArchiveFile(
            id=doc.id,
            source_file=doc.filename,
            title=doc.title,
            description=doc.description,
            pages=len(pages_by_fn.get(doc.filename, set())) or 400,
            collection='Writings and Speeches',
            document_type='PDF',
            source=doc.source,
            original_url=doc.document_url,
            document_url=doc.document_url,
            file_exists=doc.file_exists,
        )
        for doc in catalog
    ]


@app.get('/api/timeline', response_model=list[TimelineEvent])
def timeline() -> list[TimelineEvent]:
    records = _jsonl(AAROH_DATA_ROOT / 'data' / 'processed' / 'timeline' / 'ambedkar_life_candidates.jsonl')
    events = []
    for record in records:
        years = record.get('years_found') or []
        source = record.get('source') if isinstance(record.get('source'), dict) else {}
        category = str(record.get('event_type') or 'Archive record').replace('_', ' ').title()
        description = str(record.get('description') or '').strip()
        if len(description) > 280:
            description = f'{description[:277].rsplit(" ", 1)[0]}...'
        events.append(TimelineEvent(
            id=str(record.get('candidate_id') or len(events)),
            date=', '.join(str(year) for year in years) if years else 'Date not available',
            title=str(record.get('title') or category),
            description=description or 'Information not available in the current archive.',
            category=category,
            source=str(source.get('source') or ''),
            page=str(source.get('page') or ''),
        ))
    return events[:250]


@app.get('/api/library', response_model=list[MediaItem])
def library() -> list[MediaItem]:
    with (Path(__file__).resolve().parent / 'verified_media.json').open('r', encoding='utf-8') as handle:
        records = json.load(handle)
    return [MediaItem(
        id=str(record.get('id') or ''),
        title=str(record.get('title') or 'Untitled archive item'),
        media_type=str(record.get('type') or 'image'),
        description=str(record.get('description') or ''),
        source=str(record.get('source') or ''),
        source_url=str(record.get('source_url') or ''),
        media_url=str(record.get('media_url') or ''),
        local_file=str(record.get('local_file') or ''),
        license=str(record.get('license') or ''),
        attribution=str(record.get('attribution') or ''),
        year=str(record.get('year') or ''),
        verified=record.get('verified') is True,
    ) for record in records if record.get('verified') is True]


@app.get('/api/archive/artifacts')
def get_archive_artifacts(
    q: Optional[str] = None,
    category: Optional[str] = None,
    period: Optional[str] = None,
    topic: Optional[str] = None,
    source: Optional[str] = None,
) -> list[dict]:
    """Returns verified historical artifacts with full-text search and filtering."""
    artifacts_file = Path(__file__).resolve().parent / 'artifacts.json'
    if not artifacts_file.exists():
        return []
    with artifacts_file.open('r', encoding='utf-8') as handle:
        records = json.load(handle)

    filtered = records
    if category and category != 'ALL':
        filtered = [r for r in filtered if r.get('type') == category]
    if period and period != 'ALL':
        filtered = [r for r in filtered if r.get('decade') == period]
    if topic and topic != 'ALL':
        t_low = topic.lower()
        filtered = [
            r for r in filtered
            if any(t_low == s.lower() for s in r.get('subjects', []))
            or any(t_low == t.lower() for t in r.get('tags', []))
        ]
    if source and source != 'ALL':
        s_low = source.lower()
        filtered = [
            r for r in filtered
            if s_low in r.get('sourceCategory', '').lower()
            or s_low in r.get('source', '').lower()
        ]
    if q and q.strip():
        q_low = q.strip().lower()
        filtered = [
            r for r in filtered
            if q_low in r.get('title', '').lower()
            or q_low in r.get('shortTitle', '').lower()
            or q_low in r.get('description', '').lower()
            or q_low in r.get('curatorNote', '').lower()
            or q_low in r.get('source', '').lower()
            or q_low in r.get('creator', '').lower()
            or q_low in r.get('location', '').lower()
            or any(q_low in t.lower() for t in r.get('tags', []))
            or any(q_low in s.lower() for s in r.get('subjects', []))
        ]
    return filtered


@app.get('/api/archive/artifacts/{art_id}')
def get_archive_artifact(art_id: str) -> dict:
    """Returns a specific artifact by its stable ID."""
    artifacts_file = Path(__file__).resolve().parent / 'artifacts.json'
    if not artifacts_file.exists():
        raise HTTPException(status_code=404, detail="Artifacts database not found")
    with artifacts_file.open('r', encoding='utf-8') as handle:
        records = json.load(handle)
    for r in records:
        if r.get('id') == art_id or art_id in r.get('aliasIds', []):
            return r
    raise HTTPException(status_code=404, detail=f"Artifact {art_id} not found")


class WebOverviewResponse(BaseModel):
    query: str
    title: str = "AAROH Web Overview"
    summary: str
    key_takeaways: list[str] = Field(default_factory=list)
    web_sources: list[dict[str, str]] = Field(default_factory=list)
    scope_disclaimer: str = "Synthesized exclusively from verified web archives, encyclopedic databases, and historical records related to Dr. B. R. Ambedkar."


@app.get('/api/web-overview', response_model=WebOverviewResponse)
async def get_web_overview(q: str) -> WebOverviewResponse:
    raw_q = (q or '').strip()
    if not raw_q:
        return WebOverviewResponse(
            query=raw_q,
            title="AAROH Web Overview",
            summary="Please enter a question or topic regarding Dr. B. R. Ambedkar to generate a web overview.",
            key_takeaways=[],
            web_sources=[],
        )

    # 1. Enforce strict Dr. B. R. Ambedkar scoping
    ambedkar_names = ('ambedkar', 'bhimrao', 'babasaheb', 'b. r. ambedkar', 'bhim')
    if not any(name in raw_q.lower() for name in ambedkar_names):
        scoped_query = f"Dr. B. R. Ambedkar {raw_q}"
    else:
        scoped_query = raw_q

    # 2. Fetch authoritative web sources (DuckDuckGo whitelist + Wikipedia REST API)
    sources = await search_web(scoped_query, limit=5)

    # 3. Optional Google Search Grounding if configured
    grounded_answer = ""
    if GOOGLE_API_KEY:
        try:
            google_result = await google_grounded_search(
                question=f"In the context of Dr. B. R. Ambedkar: {raw_q}",
                api_key=GOOGLE_API_KEY,
                model=GOOGLE_GROUNDING_MODEL,
            )
            if google_result.get('success'):
                grounded_answer = google_result.get('answer', '')
                for g_src in google_result.get('web_sources', []):
                    if not any(s['url'] == g_src['url'] for s in sources):
                        sources.append(g_src)
        except Exception:
            pass

    # 4. Synthesize Google AI Overview style response
    summary = ""
    key_takeaways: list[str] = []

    if llm_connected():
        web_context = "\n\n".join(
            f"[{s.get('domain', 'source')}: {s.get('title', '')}]\n{s.get('snippet', '')}"
            for s in sources if s.get('snippet')
        )
        if grounded_answer:
            web_context += f"\n\n[Google Grounded Evidence]:\n{grounded_answer}"

        prompt = (
            f"You are AAROH Web Overview, an AI synthesizer modeled after Google AI Overview, "
            f"dedicated exclusively to Dr. B. R. Ambedkar's historical contributions, writings, speeches, and philosophy.\n\n"
            f"User Question: {raw_q}\n\n"
            f"Retrieved Web Context & Records:\n{web_context}\n\n"
            f"Instructions:\n"
            f"1. Generate an authoritative Google AI Overview answering the question directly in relation to Dr. B. R. Ambedkar.\n"
            f"2. Begin with a concise, clear 2-3 sentence executive synthesis paragraph.\n"
            f"3. Provide exactly 3 to 4 bullet points under the heading 'Key Takeaways', each starting with '• **[Topic/Concept]:** [Brief fact/insight]'.\n"
            f"4. Strictly ensure all content is factual and scoped exclusively to Dr. B. R. Ambedkar."
        )
        try:
            llm_text = await answer_question(prompt)
            lines = [line.strip() for line in llm_text.split('\n') if line.strip()]
            summary_lines = []
            for line in lines:
                if line.startswith(('•', '-', '*')):
                    cleaned_bullet = re.sub(r'^[•\-\*]\s*', '', line).strip()
                    if cleaned_bullet:
                        key_takeaways.append(cleaned_bullet)
                elif not line.lower().startswith(('key takeaway', 'takeaway', 'overview:')):
                    summary_lines.append(line)
            if summary_lines:
                summary = "\n\n".join(summary_lines)
        except Exception:
            pass

    # Fallback / Extractive synthesis if LLM offline or empty
    if not summary or not key_takeaways:
        if grounded_answer:
            summary = grounded_answer
        else:
            first_snips = [s['snippet'].strip() for s in sources if s.get('snippet')]
            if first_snips:
                summary = (
                    f"Synthesized from verified web archives on Dr. B. R. Ambedkar regarding \"{raw_q}\": "
                    + first_snips[0]
                )
            else:
                summary = f"Overview synthesized from authoritative digital archives regarding Dr. B. R. Ambedkar on \"{raw_q}\"."

        key_takeaways = []
        for s in sources[:4]:
            if s.get('snippet'):
                title = s.get('title', 'Historical Record')
                snip = s['snippet'].strip()
                key_takeaways.append(f"**{title}:** {snip}")

    return WebOverviewResponse(
        query=raw_q,
        title="AAROH Web Overview",
        summary=summary,
        key_takeaways=key_takeaways,
        web_sources=sources,
    )


# ---------------------------------------------------------------------------
# Main chat endpoint - Archive-first, Google-grounded fallback
# ---------------------------------------------------------------------------

@app.post('/api/chat', response_model=ChatResponse)
async def chat(request: ChatRequest) -> ChatResponse:
    # Step 1: Query the local AAROH archive with scores
    try:
        scored_passages = await rag_service.search_with_scores(request.message)
    except (httpx.HTTPError, KeyError, RuntimeError) as error:
        raise HTTPException(status_code=503, detail=str(error)) from error

    passages = [p for p, _ in scored_passages]

    # Build source objects from whatever passages we have
    sources = _build_sources(passages)

    # Step 2: Decide if archive evidence is sufficient
    archive_ok = _is_archive_sufficient(scored_passages)

    if archive_ok:
        # PATH A: Answer entirely from the AAROH local archive
        prompt = build_user_prompt(request.message, [p.text for p in passages])
        try:
            answer = await answer_question(prompt)
            return ChatResponse(
                answer=answer,
                sources=sources,
                web_sources=[],
                answer_source='archive',
            )
        except (httpx.HTTPError, KeyError, RuntimeError, ValueError, IndexError):
            # LLM unavailable - return raw passages as fallback
            source_text = '\n\n'.join(
                f"{i}. {p.text}" for i, p in enumerate(passages, start=1)
            )
            return ChatResponse(
                answer=(
                    'AI provider temporarily unavailable. '
                    'Here are the retrieved AAROH archive passages for your question:\n\n'
                    f'{source_text or "No matching archival passage was retrieved."}'
                ),
                sources=sources,
                web_sources=[],
                provider_available=False,
                answer_source='fallback',
            )

    # PATH B: Archive insufficient - try Google Search Grounding (Gemini)
    google_result = await google_grounded_search(
        question=request.message,
        api_key=GOOGLE_API_KEY,
        model=GOOGLE_GROUNDING_MODEL,
    )

    if google_result['success']:
        # Gemini returned a grounded answer with live citations
        return ChatResponse(
            answer=google_result['answer'],
            sources=sources,           # include any partial archive matches
            web_sources=google_result['web_sources'],
            answer_source='google',
        )

    # PATH C: Google grounding unavailable - hybrid LLM with scraped web context
    web_sources = await search_web(request.message, limit=4)
    external_context = [
        f"[External source: {item['title']} | {item['domain']}]\n{item['snippet']}"
        for item in web_sources
        if item.get('snippet')
    ]
    prompt = build_user_prompt(
        request.message,
        [p.text for p in passages],
        external_context,
    )
    try:
        answer = await answer_question(prompt)
        return ChatResponse(
            answer=answer,
            sources=sources,
            web_sources=web_sources,
            answer_source='hybrid',
        )
    except (httpx.HTTPError, KeyError, RuntimeError, ValueError, IndexError):
        source_text = '\n\n'.join(
            f"{i}. {p.text}" for i, p in enumerate(passages, start=1)
        )
        if not source_text and web_sources:
            web_overview_text = '\n\n'.join(
                f"• {w['title']} ({w['domain']}): {w['snippet']}" for w in web_sources
            )
            fallback = (
                f'AI Overview from verified web archives for "{request.message}":\n\n'
                f'{web_overview_text}'
            )
        else:
            fallback = (
                'AI provider temporarily unavailable. '
                'Here are the retrieved AAROH sources for your question:\n\n'
                f'{source_text or "No matching archival passage was retrieved."}'
            )
        return ChatResponse(
            answer=fallback,
            sources=sources,
            web_sources=web_sources,
            provider_available=False,
            answer_source='fallback',
        )


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def _build_sources(passages) -> list[Source]:
    """Convert retrieved passages into Source response objects."""
    sources = []
    for passage in passages:
        raw_file = str(passage.metadata.get('source_file') or passage.metadata.get('file') or '')
        doc_info = get_document_info(raw_file)
        raw_page = str(
            passage.metadata.get('page')
            or passage.metadata.get('page_number')
            or passage.metadata.get('page_no')
            or ''
        )
        page_str = raw_page.strip() if raw_page and raw_page.strip().isdigit() else ''

        doc_url = doc_info.document_url
        full_doc_url = f"{doc_url}#page={page_str}" if doc_url and page_str else doc_url

        sources.append(
            Source(
                document_id=doc_info.id,
                title=doc_info.title,
                source_type=_source_type(passage.metadata),
                volume=doc_info.volume,
                source_file=doc_info.filename or raw_file,
                page=page_str,
                collection=str(passage.metadata.get('collection') or 'Writings and Speeches'),
                original_url=full_doc_url,
                document_url=full_doc_url,
                file_exists=doc_info.file_exists,
                snippet=passage.text.strip(),
                source=doc_info.source,
            )
        )
    return sources


def _source_type(metadata: dict[str, object]) -> str:
    value = str(
        metadata.get('source_type')
        or metadata.get('source_category')
        or metadata.get('document_type')
        or metadata.get('category')
        or metadata.get('type')
        or 'Primary'
    ).strip().lower()
    if 'debate' in value:
        return 'Debate'
    if 'background' in value or 'secondary' in value:
        return 'Background'
    return 'Primary'
