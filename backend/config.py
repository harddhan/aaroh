import os
from pathlib import Path

from dotenv import load_dotenv


ROOT_DIR = Path(__file__).resolve().parents[1]
load_dotenv(Path(__file__).resolve().parent / '.env')

AAROH_DATA_ROOT = Path(os.getenv('AAROH_DATA_ROOT', ROOT_DIR)).expanduser()
DATA_ROOT = AAROH_DATA_ROOT
PROCESSED_ROOT = DATA_ROOT / 'data' / 'processed'
VECTOR_DB_ROOT = PROCESSED_ROOT / 'vector_db'
FAISS_INDEX_PATH = VECTOR_DB_ROOT / 'aaroh.faiss'
METADATA_PATH = VECTOR_DB_ROOT / 'metadata.jsonl'
CHUNKS_PATH = PROCESSED_ROOT / 'aaroh_chunks_clean.jsonl'
LLM_API_KEY = os.getenv('LLM_API_KEY', '')
LLM_BASE_URL = os.getenv('LLM_BASE_URL', '').rstrip('/')
LLM_MODEL = os.getenv('LLM_MODEL', '')
EMBEDDING_MODEL = os.getenv('EMBEDDING_MODEL', '')
TOP_K = int(os.getenv('RAG_TOP_K', '3'))

# ---- Google Search Grounding (Gemini) ----
# Used when AAROH local archive lacks sufficient evidence.
# Get a free key at https://aistudio.google.com
GOOGLE_API_KEY = os.getenv('GOOGLE_API_KEY', '')
GOOGLE_GROUNDING_MODEL = os.getenv('GOOGLE_GROUNDING_MODEL', 'gemini-2.0-flash')

# Minimum average similarity score (0-1) required for archive to be considered
# "sufficient".  Lower = trust archive more; higher = fall back to Google more.
# Default 0.45 works well for all-MiniLM-L6-v2 cosine similarity.
ARCHIVE_CONFIDENCE_THRESHOLD = float(os.getenv('ARCHIVE_CONFIDENCE_THRESHOLD', '0.45'))
# Minimum *total* useful text length (chars) across all passages.
ARCHIVE_MIN_TEXT_LENGTH = int(os.getenv('ARCHIVE_MIN_TEXT_LENGTH', '200'))
