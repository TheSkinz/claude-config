---
name: usadebusk-vault-ingest
description: "Load this skill when ingesting documents into the obsidian-usadebusk vault. Handles conversion of DOCX and text-layer PDFs to Markdown using MarkItDown, infers vault placement from filename/content, applies frontmatter, and writes to the correct vault folder. Commands: /convert, /ingest, /dry-run. Always load alongside usadebusk-core."
---

# USADeBusk Vault Ingest Skill

## Dependencies
Load alongside:
- `obsidian-cli` — live vault interaction, search, property management
- `obsidian-markdown` — Obsidian Flavored Markdown syntax (wikilinks, callouts, frontmatter)

## Purpose
Convert raw DOCX and PDF documents into vault-ready Markdown files and route them to the correct location in the obsidian-usadebusk vault. All operations default to dry-run mode — no files are written until Jesse explicitly approves the plan.

---

## Environment Setup

### Check and install MarkItDown
```bash
pip show markitdown 2>/dev/null || pip install markitdown --quiet
```

### Vault root
Default: `C:\Users\Jwuts\OneDrive\obsidian-usadebusk`
Confirm with Jesse if session context suggests otherwise.

### Staging folder (drop zone for raw documents)
`[vault-root]\00-inbox\raw-docs\`
Create if it doesn't exist.

---

## Commands

### `/dry-run [path]`
**Default mode. Always run this before `/ingest`.**
- Accepts a single file or a folder path
- Runs inference on each document (filename + first ~500 words of content)
- Outputs a routing plan: proposed target folder, proposed filename, proposed frontmatter
- Does NOT convert or write any files
- Jesse reviews and approves, rejects, or corrects each entry before proceeding

### `/convert [path]`
- Converts DOCX or PDF to raw Markdown only
- Outputs to `00-inbox\raw-docs\converted\` for manual inspection
- Does not route or apply frontmatter
- Use when Jesse wants to inspect conversion quality before committing to vault

### `/ingest [path]`
- Full pipeline: convert → infer → apply frontmatter → write to target folder
- Requires prior dry-run approval for the same files
- If called without a prior dry-run in the session, automatically runs dry-run first and halts for approval

---

## Vault Schema

```
obsidian-usadebusk/
├── 00-inbox/          # capture, staging, raw-docs drop zone
├── 01-context/        # standing context files (auto-loaded by Cowork)
├── 02-facilities/     # facility-level docs
│   └── [Client]/
│       └── [City-State]/
│           ├── [Client-City-State].md        # facility overview
│           └── Unit-[UnitID]-[Service]/      # per-heater subfolder
│               └── [UnitID].md              # heater card
├── 03-jobs/           # job notes
│   └── [Client]/
│       └── USA#####.md                      # one file per job number (US jobs)
│       └── CND#####.md                      # one file per job number (Canadian jobs)
├── 04-knowledge/      # reference / technical knowledge
├── 05-projects/       # system prompts, pipeline, revenue
└── 06-insights/       # insights log
```

### Known clients (32 active)
BASF, BP, Big-West-Oil, Buckeye, CHS, CITGO, Cenovus, Chevron, Delek, Denka, Energy-Transfer, ExxonMobil, FHR, Flint-Hills, Formosa, HCC, HF-Sinclair, Hunt, Ingevity, Invista, Magellan-ONEOK, Marathon, ONEOK, P66, PEMEX, Par-Pacific, PBF, Sniper-Elite, Suncor, Targa, Valero, Westlake

---

## Routing Inference Logic

Run inference in this order. Stop at the first confident match. If no confident match, route to `00-inbox` with `routing: unresolved` in frontmatter.

### Step 1 — Job number match
Patterns:
- US jobs: `USA\d{5}` anywhere in filename or first 500 words
- Canadian jobs: `CND\d{5}` anywhere in filename or first 500 words

Behavior:
- Extract job number and client from content or filename
- Target: `03-jobs/[Client]/USA#####.md` or `03-jobs/[Client]/CND#####.md`
- Canadian jobs route under the client folder same as US jobs — no separate CND folder
- If client cannot be inferred, target `03-jobs/UNKNOWN/[job#].md` and flag

### Step 2 — Heater/unit match
Signals: unit tag (e.g., `210-1401A`, `F-101`, `H-201`), heater type keywords (crude, coker, VDU, reformer, hydrotreater), or explicit unit ID in filename
- Must also match a known client and facility
- Target: `02-facilities/[Client]/[City-State]/Unit-[UnitID]-[Service]/[UnitID].md`
- If unit subfolder doesn't exist, create it automatically and note in dry-run output

### Step 3 — Facility match (no unit)
Signals: client name + city/state/plant name in filename or content, but no specific unit tag
- Target: `02-facilities/[Client]/[City-State]/[Client-City-State].md`
- If the overview file already exists, flag for merge review — do not overwrite

### Step 4 — Knowledge/reference match
Signals: no client or job reference; content is technical reference, industry standard, equipment spec, pigging theory, chemistry, etc.
- Target: `04-knowledge/[inferred-subcategory]/[filename].md`
- Subcategory examples: `equipment`, `chemistry`, `standards`, `heater-types`

### Step 5 — Unresolved
No confident match on any of the above.
- Target: `00-inbox/[original-filename].md`
- Set `routing: unresolved` in frontmatter
- Include a one-line inference note explaining what signals were found and why routing failed

---

## Collision & Revision Handling

### File already exists (collision)
- Do not overwrite silently
- Append revision suffix: `USA26058.md` → `USA26058-r2.md`, `USA26058-r3.md`, etc.
- Note collision and suffix assignment in dry-run output

### Revised proposals (DSP# with revision suffix e.g. DSP24021.2, DSP25113.1)
- Overwrite the existing file with updated content
- Add `revision:` field to frontmatter (e.g. `revision: 2`)
- Prepend a revision note at the top of the file body:
  ```
  > **Revision 2** — [date_added]. Supersedes previous version.
  ```
- Do not create separate files per revision — Git history serves as version control

### Field reports for completed jobs (multiple reports → one job card)
- Merge field reports as subsections into the existing job card (`USA#####.md`)
- Append under a `## Field Reports` section if not already present
- Each report becomes a `### [date or shift label]` subsection
- Do not create separate files per report

### Known DSP# corrections
- DSP#26012 → ExxonMobil Baytown (not CITGO Corpus)
- DSP#25012 → CITGO Corpus Christi
- If a file's DSP# conflicts with its content client/facility, flag and apply the correct number before routing

---

## New Client Subfolder Creation
If a known client exists in the client list but their subfolder is missing in `03-jobs/` or `02-facilities/`, create it automatically during ingest. Note creation in dry-run output. Do not create folders for unknown clients — flag those instead.

---

## Frontmatter Template

Apply to every ingested file. Omit fields that genuinely cannot be inferred — do not fabricate values.

```yaml
---
title: [inferred or filename-derived]
date_added: [YYYY-MM-DD]
source_file: [original filename with extension]
source_type: [docx | pdf]
client: [client name or UNKNOWN]
facility: [City-State or UNKNOWN]
job_number: [USA##### or CND##### or null]
job_region: [US | CA | null]
unit_id: [tag or null]
service: [crude | coker | VDU | reformer | hydrotreater | pigging | other | null]
doc_type: [job-note | heater-card | facility-overview | sop | proposal | quote | reference | field-report | other]
revision: [integer or null]
routing: [resolved | unresolved]
routing_note: [one line — how the target was inferred, or why it failed]
tags: []
---
```

---

## Dry-Run Output Format

For each document, output a single block:

```
FILE: [original filename]
─────────────────────────────
SOURCE TYPE : docx / pdf
TARGET PATH : 03-jobs/Valero/USA26025.md
STATUS      : new file (safe to write)
              ⚠ OR: collision — will write as USA26025-r2.md
              ⚠ OR: revised proposal — will overwrite, revision: 2
              ⚠ OR: field report — will merge into existing job card
              ⚠ OR: DSP# mismatch corrected (see routing_note)
FRONTMATTER :
  title       : Valero Port Arthur Job Notes
  client      : Valero
  facility    : Port-Arthur-TX
  job_number  : USA26025
  job_region  : US
  doc_type    : job-note
  revision    : null
  routing     : resolved
  routing_note: USA26025 in filename; Valero inferred from content header
CONFIDENCE  : HIGH / MEDIUM / LOW
ISSUES      : [any flags, or "none"]
─────────────────────────────
```

After all files are shown, output a summary:
```
TOTAL: N files
  HIGH confidence  : N
  MEDIUM confidence: N
  LOW confidence   : N
  Unresolved       : N

Ready to ingest? Reply /ingest to proceed, or correct any entries above.
```

---

## Confidence Scoring

| Level  | Criteria |
|--------|----------|
| HIGH   | Job number or unit tag found in filename AND confirmed in content; client matches known list |
| MEDIUM | Client and facility inferred from content only, no explicit tag; or one signal missing |
| LOW    | Single weak signal (client name only, or generic keywords); target folder inferred by elimination |

Flag LOW confidence items individually. Do not batch-ingest LOW confidence files without explicit approval per file.

---

## Conversion Rules (MarkItDown)

```python
from markitdown import MarkItDown
from pathlib import Path
import re

md = MarkItDown()

def convert_document(source_path: Path, output_path: Path):
    result = md.convert(str(source_path))
    content = result.text_content
    # Strip blank line runs > 2
    content = re.sub(r'\n{3,}', '\n\n', content)
    output_path.write_text(content, encoding='utf-8')
    return content
```

Post-conversion cleanup:
- Collapse 3+ consecutive blank lines to 2
- Remove page number artifacts (`Page N of N`, running headers if repeated)
- Preserve all tables as Markdown tables
- Do not alter headings or bullet structure

---

## Failure Modes — Flag and Stop

- Client not in known list → flag as `client: UNKNOWN`, route to `00-inbox`
- Conversion produces <100 words → flag as possible extraction failure, show raw output snippet
- File is image-only PDF (no text layer) → flag immediately, tell Jesse to run through Gemini instead
- DSP# in filename conflicts with client/facility in content → flag and apply known correction if one exists

---

## Behavior Rules

- **Never write files during dry-run.** Read and infer only.
- **Never overwrite an existing vault file silently.** Use revision suffix or merge per collision rules above.
- **Never create new client folders for unknown clients.** Only scaffold folders for the 32 known clients. Flag unknowns.
- **Create missing subfolders for known clients automatically.** Note creation in dry-run output.
- **Batch limit:** Process up to 20 files per session. If more are queued, process first 20, report, and prompt before continuing.
- **Always confirm vault root path** at session start if not already established in context.
