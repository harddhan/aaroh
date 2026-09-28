# AAROH Archival Data Sources & Provenance

> **Problem Statement 26096:** *Digital Heritage Archive for Memorials, Manuscripts & Ambedkar: AI-Powered Institutional Archive and Audio-Visual Knowledge Platform.*

AAROH prioritizes archival integrity, historical accuracy, and strict provenance. This document lists the primary repositories, institutional sources, and cataloging standards utilized across the platform.

---

## 1. Verified Archival Repositories

Artifacts cataloged in AAROH are curated from documented historical repositories:

1. **National Archives of India (NAI), New Delhi**
   - Constituent Assembly debates, official government notifications, and draft constitutional resolutions.
2. **Dr. Babasaheb Ambedkar Writings and Speeches (BAWS)**
   - Published by the Higher and Technical Education Department, Government of Maharashtra (Volumes 1–22).
3. **Columbia University Rare Book & Manuscript Library, New York**
   - Academic records (1913–1916), Ph.D. dissertation submission copies, and correspondence with Prof. Edwin R. A. Seligman.
4. **The British Library & London School of Economics (LSE) Archives, London**
   - M.Sc. and D.Sc. thesis records, Grey's Inn admission registers, and Round Table Conference (1930–1932) proceeding transcripts.
5. **Parliament Library & Archives, New Delhi**
   - Photographic documentation of the Constitution presentation ceremony (26 November 1949) and signature registers.
6. **Archaeological Survey of India (ASI) & State Heritage Memorials**
   - Architectural records and photographic documentation for Dr. Ambedkar Nagar (Mhow), Chaitya Bhoomi (Dadar, Mumbai), Deekshabhoomi (Nagpur), and Chavdar Tank (Mahad).

---

## 2. Artifact Taxonomy & Categories

The database includes 85 primary verified artifacts distributed across six categories:

| Category Code | Description | Key Examples |
|---|---|---|
| `manuscripts` | Handwritten drafts, letters, and signed working papers | Columbia thesis notes, Constitution draft annotations, private letters |
| `writings` | Published treatises, political manifestos, and speeches | *Castes in India* (1916), *Annihilation of Caste* (1936), *The Problem of the Rupee* (1923), *Who Were the Shudras?* (1946) |
| `constitution` | Legal instruments, drafts, debates, and resolutions | Preamble calligraphy drafts, Drafting Committee proceedings, 25 Nov 1949 Final Address |
| `photographs` | Rare historical photographic prints and group portraits | LSE student portrait, Round Table Conference delegates, Poona Pact gathering, Parliament signing |
| `places` | Architectural memorials, stupas, and heritage landmarks | Mhow Memorial, Chavdar Tale, Rajgriha Library, Deekshabhoomi, Chaitya Bhoomi |
| `coins-stamps` | Commemorative numismatic and philatelic releases | 1990 Bharat Ratna commemorative coin, 1991 centenary postage stamps |

---

## 3. Metadata Schema

Every record in `frontend/src/data/artifactsDatabase.js` adheres to an institutional cataloging schema:

```json
{
  "id": "AAROH-ART-0001",
  "title": "Title of the Artifact",
  "category": "manuscripts",
  "date": "1916",
  "period": "1910-1925",
  "source": "Columbia University Archives",
  "location": "New York, USA",
  "description": "Scholarly description and historical context...",
  "provenance": "Gifted by Dr. B. R. Ambedkar to the Department of Economics, 1916.",
  "accessionNo": "CU-RBML-1916-042",
  "physicalFormat": "Bound typescript with handwritten marginalia",
  "dimensions": "28 x 21.5 cm",
  "license": "Public Domain (Archival Copy for Scholarly Research)",
  "tags": ["Columbia", "Economics", "Castes", "Manuscript"],
  "image": "/assets/archive/castes-in-india-1917.png",
  "thumbnail": "/assets/archive/castes-in-india-1917.png"
}
```

---

## 4. Fine-Tuned Model Weights (`content/aaroh_qwen3_final`)

The repository contains fine-tuned LoRA adapter parameters trained on the complete corpus of Dr. Ambedkar's published writings and speeches:
- **Base Model:** Qwen-3.8-27B / Qwen-2.5-Coder architecture.
- **Adapter Files:**
  - `adapter_config.json`: LoRA rank, alpha, target modules (`q_proj`, `v_proj`).
  - `adapter_model.safetensors`: 83.3 MB quantized LoRA weights.
  - `tokenizer.json` & `tokenizer_config.json`: Tokenization rules with custom archival terms.
