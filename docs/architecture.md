# AAROH Technical Architecture & System Design

> **Problem Statement 26096:** *Digital Heritage Archive for Memorials, Manuscripts & Ambedkar: AI-Powered Institutional Archive and Audio-Visual Knowledge Platform.*

This document details the architectural principles, component structure, data flow, and retrieval mechanisms powering AAROH.

---

## 1. System Overview

AAROH employs a decoupled, modular architecture designed for high responsiveness, offline museum resilience, and scholarly accuracy:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        AAROH Client (Vite + React)                     │
├────────────────────────────────────────────────────────────────────────┤
│  ┌─────────────────┐  ┌─────────────────┐  ┌────────────────────────┐  │
│  │ Archive Engine  │  │ Vertical        │  │ Real Historical Map    │  │
│  │ (85 Artifacts)  │  │ Timeline        │  │ (D3-Geo + GeoJSON)     │  │
│  └────────┬────────┘  └────────┬────────┘  └───────────┬────────────┘  │
│           │                    │                       │               │
│           └────────────────────┼───────────────────────┘               │
│                                │                                       │
│                     ┌──────────▼──────────┐                            │
│                     │  Archival Research  │                            │
│                     │  Desk (AI Assistant)│                            │
│                     └──────────┬──────────┘                            │
└────────────────────────────────┼───────────────────────────────────────┘
                                 │ HTTP /api/chat & /api/web-overview
┌────────────────────────────────▼───────────────────────────────────────┐
│                      FastAPI AI Backend Engine                         │
├────────────────────────────────────────────────────────────────────────┤
│  ┌───────────────────────┐                  ┌───────────────────────┐  │
│  │   AAROH RAG Engine    │                  │  Google Gemini Web    │  │
│  │ (FAISS + Embeddings)  │                  │  Search Grounding     │  │
│  └───────────┬───────────┘                  └───────────┬───────────┘  │
│              │                                          │              │
│              └─────────────────┬────────────────────────┘              │
│                                │ Contextual Injection                  │
│                     ┌──────────▼──────────┐                            │
│                     │  Cerebras Qwen 3.8  │                            │
│                     │  + LoRA Fine-Tuning │                            │
│                     └─────────────────────┘                            │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Frontend Subsystems

### 2.1 Archival Data Model (`artifactsDatabase.js`)
The client houses 85 verified historical artifacts structured around Dublin Core and MODS metadata schemas:
- `id`: Unique institutional accession code (e.g., `AAROH-ART-0001`).
- `category`: Classification (`manuscripts`, `writings`, `constitution`, `photographs`, `places`, `coins-stamps`).
- `provenance`: Originating institution (National Archives of India, Columbia University, British Library, Bombay High Court, etc.).
- `metadata`: Extended archival details including physical format, dimensions, accession number, and copyright status.

### 2.2 Timeline Subsystem (`VerticalTimeline.jsx`)
- 12 pivotal historical epochs mapped chronologically from 1891 to 1956.
- Dual-mode summary tabs:
  - **Archival Perspective:** Primary source analysis and constitutional context.
  - **Live Web Overview:** Synthesized historical background with key takeaways and external citations.

### 2.3 Geospatial Cartography (`RealHistoricalMap.jsx`)
- Utilizes `d3-geo` Mercator projection with SVG rendering.
- Consumes clean TopoJSON/GeoJSON polygons (`india_states.geojson`, `india_outline.geojson`, `world.geojson`).
- Geographic coordinate projection seamlessly maps historical points of interest (Mhow Cantonment, Chavdar Tank, Round Table Conferences London, Columbia University New York, Deekshabhoomi Nagpur) onto responsive map containers.

---

## 3. Backend Retrieval Pipeline (RAG + AI)

The backend exposes an asynchronous FastAPI service delivering verified historical answers:

### 3.1 Retrieval Augmented Generation (RAG)
1. **Corpus Indexing:** Archival artifacts are indexed using `sentence-transformers` embeddings into a local FAISS vector space.
2. **Similarity Matching:** User queries are vectorized and compared against artifact title, description, and transcript chunks using cosine distance.
3. **Confidence Scoring:** If similarity score exceeds `ARCHIVE_CONFIDENCE_THRESHOLD` (default 0.45) and evidence length is sufficient, the local archival context is injected into the model prompt.

### 3.2 Google Search Grounding Fallback
- For queries regarding recent commemorations, historiography, or context beyond the curated corpus, `web_search.py` calls Google Gemini 2.0 Flash Grounding.
- Citations are parsed and presented as verifiable external reference links.

### 3.3 LLM Inference
- Powered by high-throughput Cerebras inference running `qwen-3.8-27b`.
- Custom LoRA adapter parameters trained specifically on historical writings and speeches are preserved in `content/aaroh_qwen3_final/`.

---

## 4. Kiosk & Museum Touchscreen Architecture

AAROH incorporates specific design patterns for high-traffic physical kiosks:
- **Zero Default Scrollbars:** Custom CSS suppresses native browser scrollbars while keeping touch gesture momentum scrolling fully active.
- **Generous Touch Targets:** All buttons, filters, and cards adhere to minimum 48px touch bounding boxes.
- **Fail-Safe Client Operation:** All primary catalog browsing, timeline exploration, and map navigation functions execute client-side with zero network dependency.
