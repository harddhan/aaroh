import os
import re
from pathlib import Path
from typing import Optional
from pydantic import BaseModel
from config import AAROH_DATA_ROOT


class DocumentMetadata(BaseModel):
    id: str
    title: str
    filename: str
    volume: str
    part: Optional[str] = None
    type: str = 'PDF'
    source: str = 'Dr. Ambedkar Foundation'
    indexed: bool = True
    document_url: str
    file_exists: bool = False
    description: str = ''


# Approved directories to look for PDFs
CANDIDATE_PDF_DIRS = [
    Path(AAROH_DATA_ROOT) / 'data' / 'raw' / 'ambedkar' / 'pdf',
    Path(AAROH_DATA_ROOT) / 'data' / 'raw' / 'ambedkar',
    Path('D:/AAROH/data/raw/ambedkar/pdf'),
    Path('D:/AAROH/data/raw/ambedkar'),
]

# 19 Approved Archive Volumes
RAW_CATALOG = [
    {"vol": 1, "part": None, "fn": "Volume_01.pdf"},
    {"vol": 2, "part": None, "fn": "Volume_02.pdf"},
    {"vol": 3, "part": None, "fn": "Volume_03.pdf"},
    {"vol": 4, "part": None, "fn": "Volume_04.pdf"},
    {"vol": 5, "part": None, "fn": "Volume_05.pdf"},
    {"vol": 6, "part": None, "fn": "Volume_06.pdf"},
    {"vol": 7, "part": None, "fn": "Volume_07.pdf"},
    {"vol": 8, "part": None, "fn": "Volume_08.pdf"},
    {"vol": 9, "part": None, "fn": "Volume_09.pdf"},
    {"vol": 10, "part": None, "fn": "Volume_10.pdf"},
    {"vol": 11, "part": None, "fn": "Volume_11.pdf"},
    {"vol": 12, "part": None, "fn": "Volume_12.pdf"},
    {"vol": 13, "part": None, "fn": "Volume_13.pdf"},
    {"vol": 14, "part": "1", "fn": "Volume_14_01.pdf"},
    {"vol": 14, "part": "2", "fn": "Volume_14_02.pdf"},
    {"vol": 15, "part": None, "fn": "Volume_15.pdf"},
    {"vol": 16, "part": None, "fn": "Volume_16.pdf"},
    {"vol": 17, "part": "1", "fn": "Volume_17_01.pdf"},
    {"vol": 17, "part": "2", "fn": "Volume_17_02.pdf"},
]

def _build_title(vol: int, part: Optional[str]) -> str:
    if part:
        return f"Writings and Speeches — Volume {vol}, Part {part}"
    return f"Writings and Speeches — Volume {vol}"

def _build_doc_id(fn: str) -> str:
    base = fn.lower().replace('.pdf', '').replace('_', '-')
    return f"ambedkar-{base}"

def _check_file_exists(filename: str) -> bool:
    for candidate_dir in CANDIDATE_PDF_DIRS:
        try:
            target = (candidate_dir / filename).resolve()
            if target.is_relative_to(candidate_dir.resolve()) and target.is_file():
                return True
        except Exception:
            continue
    return False

def resolve_pdf_path(filename: str) -> Optional[Path]:
    for candidate_dir in CANDIDATE_PDF_DIRS:
        try:
            target = (candidate_dir / filename).resolve()
            if target.is_relative_to(candidate_dir.resolve()) and target.is_file():
                return target
        except Exception:
            continue
    return None

# Build in-memory lookup dictionary
DOCUMENTS_BY_FN: dict[str, DocumentMetadata] = {}
DOCUMENTS_BY_ID: dict[str, DocumentMetadata] = {}

for item in RAW_CATALOG:
    vol = item["vol"]
    part = item["part"]
    fn = item["fn"]
    doc_id = _build_doc_id(fn)
    title = _build_title(vol, part)
    doc_url = f"/api/archive/documents/{doc_id}/file"
    file_exists = _check_file_exists(fn)
    desc = (
        f"Dr. B. R. Ambedkar Writings and Speeches Volume {vol}"
        + (f", Part {part}" if part else "")
        + " published under the auspices of Dr. Ambedkar Foundation."
    )
    doc_meta = DocumentMetadata(
        id=doc_id,
        title=title,
        filename=fn,
        volume=str(vol),
        part=part,
        type="PDF",
        source="Dr. Ambedkar Foundation",
        indexed=True,
        document_url=doc_url,
        file_exists=file_exists,
        description=desc,
    )
    DOCUMENTS_BY_FN[fn] = doc_meta
    DOCUMENTS_BY_ID[doc_id] = doc_meta


def normalize_to_filename(source_str: str) -> Optional[str]:
    """
    Normalizes inputs such as 'Volume_01.pdf', 'Volume_1', 'ambedkar-volume-01',
    'Volume_14_01.pdf', etc., to an approved catalog filename like 'Volume_01.pdf'.
    """
    if not source_str:
        return None
    source_clean = source_str.strip()

    # Check direct match with filename
    if source_clean in DOCUMENTS_BY_FN:
        return source_clean

    # Check direct match with doc_id
    if source_clean in DOCUMENTS_BY_ID:
        return DOCUMENTS_BY_ID[source_clean].filename

    # Match volume regex patterns
    match = re.search(r'volume[_ -]?(\d+)(?:[_ -]?(\d+))?', source_clean, re.IGNORECASE)
    if match:
        vol_num = int(match.group(1))
        part_num = int(match.group(2)) if match.group(2) else None
        if part_num:
            candidate_fn = f"Volume_{vol_num:02d}_{part_num:02d}.pdf"
        else:
            candidate_fn = f"Volume_{vol_num:02d}.pdf"
        if candidate_fn in DOCUMENTS_BY_FN:
            return candidate_fn

    return None


def get_document_info(source_str: str) -> DocumentMetadata:
    """
    Returns DocumentMetadata for a given source string or generic fallback.
    """
    fn = normalize_to_filename(source_str)
    if fn and fn in DOCUMENTS_BY_FN:
        meta = DOCUMENTS_BY_FN[fn]
        # Refresh file_exists status dynamically
        meta.file_exists = _check_file_exists(fn)
        return meta

    # Fallback for arbitrary/unmatched files
    return DocumentMetadata(
        id=source_str or 'archive-document',
        title=source_str or 'Writings and Speeches',
        filename=source_str or '',
        volume='',
        type='PDF',
        source='Dr. Ambedkar Foundation',
        indexed=True,
        document_url='',
        file_exists=False,
        description='Archive document',
    )


def get_approved_pdf(identifier: str) -> Optional[tuple[DocumentMetadata, Path]]:
    """
    Strict security resolution:
    - Resolves doc_id ('ambedkar-volume-01') or filename ('Volume_01.pdf')
    - Checks against approved whitelist
    - Validates file exists and is within approved directories
    - Prevents directory traversal attacks
    """
    fn = normalize_to_filename(identifier)
    if not fn or fn not in DOCUMENTS_BY_FN:
        return None

    doc = DOCUMENTS_BY_FN[fn]
    path = resolve_pdf_path(fn)
    if not path or not path.is_file():
        return None

    return doc, path


def list_catalog() -> list[DocumentMetadata]:
    """
    Returns all 19 catalog items with refreshed file_exists flags.
    """
    items = []
    for item in RAW_CATALOG:
        fn = item["fn"]
        doc = DOCUMENTS_BY_FN[fn]
        doc.file_exists = _check_file_exists(fn)
        items.append(doc)
    return items
