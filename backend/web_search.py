import asyncio
import re
from html import unescape
from urllib.parse import parse_qs, quote, unquote, urlparse
from typing import Any

import httpx


ALLOWED_DOMAINS = (
    'drambedkarwritings.gov.in',
    'constitutionofindia.net',
    'gov.in',
    'nic.in',
    'ac.in',
    'archive.org',
    'wikipedia.org',
)

HEADERS = {
    'User-Agent': 'AAROH-Museum-Digital-Archive/1.0 (contact: archive@aaroh.heritage)'
}


async def search_web(question: str, limit: int = 3) -> list[dict[str, str]]:
    query = question.strip()
    if not query:
        return []

    results: list[dict[str, str]] = []

    # 1. Try DuckDuckGo HTML endpoint
    try:
        ddg_query = f'B R Ambedkar {query}'
        async with httpx.AsyncClient(timeout=3.0, follow_redirects=True) as client:
            response = await client.get(
                'https://html.duckduckgo.com/html/',
                params={'q': ddg_query},
                headers=HEADERS,
            )
            if response.status_code == 200:
                blocks = re.findall(r'<div class="result__body".*?</div>\s*</div>', response.text, re.DOTALL)
                for block in blocks:
                    link_match = re.search(r'class="result__a"[^>]+href="([^"]+)"[^>]*>(.*?)</a>', block, re.DOTALL)
                    if not link_match:
                        continue
                    url = _unwrap_url(unescape(link_match.group(1)))
                    domain = urlparse(url).netloc.lower().removeprefix('www.')
                    if not domain or not any(domain == allowed or domain.endswith(f'.{allowed}') for allowed in ALLOWED_DOMAINS):
                        continue
                    title = _clean(link_match.group(2))
                    snippet_match = re.search(r'class="result__snippet"[^>]*>(.*?)</a?>', block, re.DOTALL)
                    snippet = _clean(snippet_match.group(1)) if snippet_match else ''
                    results.append({'title': title, 'url': url, 'domain': domain, 'snippet': snippet})
                    if len(results) >= limit:
                        break
    except Exception:
        pass

    # 2. If results are sparse, fall back to authoritative Wikipedia API
    if len(results) < limit:
        is_hindi = bool(re.search(r'[\u0900-\u097F]', query))
        lang = 'hi' if is_hindi else 'en'
        wiki_query = query if is_hindi else f'B. R. Ambedkar {query}'

        try:
            async with httpx.AsyncClient(timeout=3.0, follow_redirects=True) as client:
                search_resp = await client.get(
                    f'https://{lang}.wikipedia.org/w/api.php',
                    params={
                        'action': 'query',
                        'list': 'search',
                        'srsearch': wiki_query,
                        'format': 'json',
                        'utf8': 1,
                    },
                    headers=HEADERS,
                )
                if search_resp.status_code == 200:
                    data = search_resp.json()
                    hits = data.get('query', {}).get('search', [])
                    for hit in hits:
                        if len(results) >= limit:
                            break
                        title = hit.get('title', '')
                        if not title:
                            continue
                        clean_snip = re.sub(r'<[^>]+>', '', hit.get('snippet', '')).strip()

                        # Try to get high-quality article summary extract
                        extract = clean_snip
                        try:
                            sum_resp = await client.get(
                                f'https://{lang}.wikipedia.org/api/rest_v1/page/summary/{quote(title.replace(" ", "_"))}',
                                headers=HEADERS,
                            )
                            if sum_resp.status_code == 200:
                                page_sum = sum_resp.json()
                                if page_sum.get('extract'):
                                    extract = page_sum['extract']
                        except Exception:
                            pass

                        page_url = f'https://{lang}.wikipedia.org/wiki/{quote(title.replace(" ", "_"))}'
                        results.append({
                            'title': title,
                            'url': page_url,
                            'domain': f'{lang}.wikipedia.org',
                            'snippet': extract[:320] if len(extract) > 320 else extract,
                        })
        except Exception:
            pass

    return results[:limit]


def _unwrap_url(url: str) -> str:
    parsed = urlparse(url)
    if parsed.path.startswith('//duckduckgo.com/l/'):
        return unquote(parse_qs(parsed.query).get('uddg', [url])[0])
    return url


def _clean(value: str) -> str:
    return re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', ' ', unescape(value))).strip()


# ---------------------------------------------------------------------------
# Google Search Grounding via Gemini generateContent
# ---------------------------------------------------------------------------

async def google_grounded_search(
    question: str,
    api_key: str,
    model: str = 'gemini-2.0-flash',
    timeout: float = 12.0,
) -> dict[str, Any]:
    """Call Gemini with Google Search grounding enabled.

    Returns a dict with:
        answer      - grounded natural-language answer (str)
        web_sources - list of {title, url, domain, snippet} dicts
        success     - bool; False when the call failed / key missing
    """
    if not api_key:
        return {'answer': '', 'web_sources': [], 'success': False}

    endpoint = (
        f'https://generativelanguage.googleapis.com/v1beta/models/'
        f'{model}:generateContent?key={api_key}'
    )
    payload = {
        'contents': [{'parts': [{'text': question}], 'role': 'user'}],
        'tools': [{'google_search': {}}],
        'generationConfig': {
            'temperature': 0.2,
            'maxOutputTokens': 1024,
        },
    }
    try:
        async with httpx.AsyncClient(timeout=timeout) as client:
            resp = await client.post(endpoint, json=payload)
            resp.raise_for_status()
            data = resp.json()
    except Exception:
        return {'answer': '', 'web_sources': [], 'success': False}

    # Extract answer text
    try:
        answer_text: str = (
            data['candidates'][0]['content']['parts'][0]['text']
        ).strip()
    except (KeyError, IndexError, TypeError):
        return {'answer': '', 'web_sources': [], 'success': False}

    # Extract grounding citations
    web_sources = _extract_grounding_citations(data)

    return {'answer': answer_text, 'web_sources': web_sources, 'success': True}


def _extract_grounding_citations(data: dict[str, Any]) -> list[dict[str, str]]:
    """Parse Gemini grounding metadata into a flat list of web source dicts."""
    sources: list[dict[str, str]] = []
    try:
        metadata = (
            data['candidates'][0]
            .get('groundingMetadata', {})
        )
        chunks = metadata.get('groundingChunks', [])
        for chunk in chunks:
            web = chunk.get('web', {})
            raw_url = web.get('uri', '')
            title = web.get('title', '')
            if not raw_url:
                continue
            domain = urlparse(raw_url).netloc.lower().removeprefix('www.')
            sources.append({
                'title': title or domain,
                'url': raw_url,
                'domain': domain,
                'snippet': '',
            })
    except (KeyError, IndexError, TypeError):
        pass
    return sources
