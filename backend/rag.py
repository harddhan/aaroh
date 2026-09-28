import json
from dataclasses import dataclass

import faiss

from config import CHUNKS_PATH, EMBEDDING_MODEL, FAISS_INDEX_PATH, METADATA_PATH, TOP_K


@dataclass
class RetrievedPassage:
    text: str
    metadata: dict[str, object]
    score: float = 0.0  # higher is more relevant (normalised 0-1 for cosine, raw for L2)


class RagService:
    def __init__(self) -> None:
        self.index = None
        self.metadata: list[dict[str, object]] = []
        self.chunks: list[dict[str, object]] = []
        self.embedding_model = None

    @property
    def connected(self) -> bool:
        return FAISS_INDEX_PATH.exists() and METADATA_PATH.exists() and CHUNKS_PATH.exists()

    def _load(self) -> None:
        if self.index is None:
            if not self.connected:
                raise RuntimeError(
                    'RAG files not found. Checked these exact paths:\n'
                    f'- FAISS index: {FAISS_INDEX_PATH}\n'
                    f'- Metadata: {METADATA_PATH}\n'
                    f'- Chunks: {CHUNKS_PATH}'
                )
            self.index = faiss.read_index(str(FAISS_INDEX_PATH))
            with METADATA_PATH.open('r', encoding='utf-8') as metadata_file:
                self.metadata = [json.loads(line) for line in metadata_file if line.strip()]
            with CHUNKS_PATH.open('r', encoding='utf-8') as chunks_file:
                self.chunks = [json.loads(line) for line in chunks_file if line.strip()]

    def load_metadata(self) -> None:
        if not self.connected:
            raise RuntimeError(
                'RAG files not found. Checked these exact paths:\n'
                f'- FAISS index: {FAISS_INDEX_PATH}\n'
                f'- Metadata: {METADATA_PATH}\n'
                f'- Chunks: {CHUNKS_PATH}'
            )
        if not self.metadata:
            with METADATA_PATH.open('r', encoding='utf-8') as metadata_file:
                self.metadata = [json.loads(line) for line in metadata_file if line.strip()]

    def _embed(self, text: str):
        if self.embedding_model is None:
            try:
                from sentence_transformers import SentenceTransformer

                self.embedding_model = SentenceTransformer(
                    EMBEDDING_MODEL,
                    local_files_only=True,
                )
            except Exception as error:
                raise RuntimeError(
                    f'Unable to load the local embedding model {EMBEDDING_MODEL}. '
                    'The model must already be available locally; no model download is attempted.'
                ) from error
        vector = self.embedding_model.encode(text, convert_to_numpy=True).astype('float32')
        if self.index.metric_type == faiss.METRIC_INNER_PRODUCT:
            faiss.normalize_L2(vector.reshape(1, -1))
        return vector

    async def search(self, question: str) -> list[RetrievedPassage]:
        """Return passages without scores (backward-compatible)."""
        results = await self.search_with_scores(question)
        return [p for p, _ in results]

    async def search_with_scores(self, question: str) -> list[tuple['RetrievedPassage', float]]:
        """Return (passage, similarity_score) pairs.

        For inner-product / cosine indices the raw FAISS score is already a
        cosine similarity in [-1, 1].  For L2 indices we convert the squared
        distance to an approximate similarity in [0, 1] so callers always get
        a value where higher == more relevant.
        """
        self._load()
        vector = self._embed(question)
        distances, indices = self.index.search(vector.reshape(1, -1), TOP_K)
        results: list[tuple[RetrievedPassage, float]] = []
        is_ip = self.index.metric_type == faiss.METRIC_INNER_PRODUCT
        for distance, index in zip(distances[0], indices[0]):
            if index < 0 or index >= len(self.metadata):
                continue
            metadata = self.metadata[index]
            chunk = self.chunks[index] if index < len(self.chunks) else {}
            text = str(
                metadata.get('text')
                or metadata.get('content')
                or metadata.get('passage')
                or chunk.get('text')
                or chunk.get('content')
                or chunk.get('chunk')
                or ''
            )
            if not text:
                continue
            # Normalise to [0, 1] – higher always means more relevant.
            if is_ip:
                score = float((distance + 1.0) / 2.0)   # cosine [-1,1] → [0,1]
            else:
                score = float(1.0 / (1.0 + distance))   # L2 distance  → similarity
            passage = RetrievedPassage(text=text, metadata=metadata, score=score)
            results.append((passage, score))
        return results

rag_service = RagService()
