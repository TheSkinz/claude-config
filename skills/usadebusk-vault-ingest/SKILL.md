---
name: usadebusk-vault-ingest
description: "Load this skill when ingesting documents into the obsidian-usadebusk vault. Handles conversion of DOCX and text-layer PDFs to Markdown using MarkItDown, infers vault placement from filename/content, applies frontmatter, and writes to the correct vault folder. DSPs are dissolved into per-heater cards. Commands: /convert, /ingest, /dry-run. Always load alongside usadebusk-core."
---

# USADeBusk Vault Ingest Skill

## Dependencies
Load alongside:
- `obsidian-cli` — live vault interaction, search, property management
- `obsidian-markdown` — Obsidian Flavored Markdown syntax (wikilinks, callouts, frontmatter)

## Purpose
Convert raw DOCX and PDF documents into vault-ready Markdown files and route them to the correct location in the obsidian-usadebusk vault. DSP proposals are dissolved into individual heater cards — one card per heater. All operations default to dry-run mode — no files are written until Jesse explicitly approves the plan.

---

## Environment Setup

### Check and install MarkItDown
```bash
pip show markitdown 2>/dev/null || pip install "markitdown[docx]" --quiet
```
Note: the base `markitdown` package does not include DOCX support. Always install with `[docx]`.

### Vault root
Default: `C:\Users\Jwuts\OneDrive\obsidian-usadebusk`
Confirm with Jesse if session context suggests otherwise.

### Staging folder (drop zone for raw documents)
`[vault-root]\00-inbox\raw-docs\`
Create if it doesn't exist.

### OneDrive vault safety
Before any recursive vault read, move, or delete, follow `references/vault-onedrive-safety.md`
(pin state, delete-propagation, conflict sweep). Non-negotiable for OneDrive-backed paths.

---

## Commands

### `/dry-run [path]`
**Default mode. Always run this before `/ingest`.**
- Accepts a single file or a folder path
- Runs inference on each document (filename + first ~500 words of content)
- Outputs a routing plan: proposed target folder, proposed filename, proposed frontmatter
- For DSPs: lists each heater card that will be created or updated
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

## City-State Naming Convention

**CRITICAL — apply this normalization to every city/state string before folder matching or creation.**

Format: `[City-hyphenated]-[2-letter-state-abbrev]`

Rules:
- Replace all spaces in city name with hyphens
- Use standard 2-letter state abbreviation (TX, LA, OK, CA, etc.)
- Never spell out the state name
- Examples: `Ponca-City-OK`, `Garyville-LA`, `Port-Arthur-TX`, `Corpus-Christi-TX`
- If city/state cannot be confidently normalized, flag and route to `00-inbox`

---

## Document Type Detection

**Detection runs in this exact order. Stop at first match.**

| Priority | Type | Detection Signals |
|----------|------|-------------------|
| 1 | Job Report | `USA\d{5}` or `CND\d{5}` in filename OR first 500 words — takes precedence even if DSP# also present |
| 2 | DSP / Proposal | DSP# in filename or content AND "Requested Service" AND "Technical Info/Data" — all three required |
| 3 | USADeBusk Companion Doc | Formal USADeBusk doc number (SOP-*, DCK-*, CO-*) OR authored by USADeBusk/DeBusk Services Group; client + unit tag present |
| 4 | Client Facility Doc | Client-authored; facility/site signals present; procedural or policy content (permits, access, safety, contractor requirements); no unit tag, no USA#, no DSP# |
| 5 | Facility Overview | Client + city/state, no unit tag, no DSP#, no job number, not procedural in nature |
| 6 | Heater Card | Unit tag + tube geometry table, no DSP#, no job number |
| 7 | Knowledge/Reference | No client or job reference; technical content only |
| 8 | Unresolved | No confident match |

**Why job number takes priority:** Job reports frequently reference DSP numbers and contain technical language. Checking for USA##### first prevents misclassification of job reports as DSPs.

**Distinguishing Client Facility Doc from Facility Overview:** Facility Overview is a USADeBusk-maintained summary card. Client Facility Docs are external documents — look for client letterhead, client document numbers, or procedural/policy language as the differentiator.

---

## DSP Ingestion Logic

DSPs are NOT stored as standalone files. They are dissolved into per-heater cards.

### Step 1 — Extract header data
From the quotation or cover page:
- DSP# (e.g. DSP#26030)
- Client name
- Facility name and location → normalize to City-State format immediately
- Bid date
- Contract type (T&M / Lump Sum / hybrid)
- DSP total value
- Execution window (if stated)

### Step 2 — Identify all heaters on the DSP
Scan Technical Info/Data section. Each labeled coil data table = one heater card.
- Extract unit ID from table header (e.g. "COIL DATA H-28" → unit ID: H-28)
- Note sibling heaters on the same DSP for shared pricing notation
- Note which heaters are grouped per truck (for execution hour splitting in Step 4)

### Step 3 — Extract per-heater technical data
For each heater, extract into the Tube Geometry table:
- Section (Convection / Radiant)
- Total coils
- Pipe OD, Schedule, Wall thickness, Pipe ID
- Tubes per coil
- Tube length
- Ft per section / total footage
- Multiple rows per section if mixed IDs present (common on Vac heaters)

Also extract at heater or scope level:
- Metallurgy (may be shared across heaters in a scope table)
- Configuration (Horizontal / Vertical Cylindrical / Cabin)
- Launcher sizes
- Filtration required (Yes/No)
- Inspection (Yes/No)

### Step 4 — Extract execution plan hours (per-heater)

Execution plans are structured per truck, not per heater. Apply this logic:

**If one heater per truck:** assign all truck hours directly to that heater card.

**If multiple heaters share a truck (sequential execution):**
- Extract the truck-level total hours
- Do NOT attempt to split hours automatically
- Flag in dry-run output: "Truck X hours are shared across [heater list] — hours shown are truck-level totals, not per-heater"
- Record hours on each card as `[truck-level estimate — shared with siblings]`

**If no execution plan present:** skip estimated hours, note absence in dry-run output. Card is still valid without them.

Flag all extracted hours as `[estimated]` — these are DSP estimates, not actuals.

Fields to extract per truck:
- Rig-in hours
- Pig hours
- Rig-out hours
- Total hours

### Step 5 — Reconcile unit IDs
DSPs sometimes use inconsistent unit tags across pages (e.g. "210-1401A" on cover, "210-1401 A" in tables, "210-1401A/B" in scope). Reconcile to a single canonical tag. Store variants in frontmatter `aliases` field. If unresolvable, flag as LOW confidence and list all variants found.

### Step 6 — Route to heater cards
For each heater:
- Target: `02-facilities/[Client]/[City-State]/Unit-[UnitID]-[Service]/[UnitID].md`
- If card does not exist: create full card using heater card template below
- If card exists: see Tube Geometry Conflict Detection below
- If unit subfolder does not exist: create it automatically for known clients

---

## Tube Geometry Conflict Detection

When a heater card already exists and incoming DSP data differs from existing data:

1. Compare each Tube Geometry field: OD, Sched, Wall, ID, Tubes/Coil, Tube Length, Ft/Section
2. If incoming value matches existing → no action
3. If incoming value differs from existing → flag in dry-run output:
   ```
   ⚠ TUBE GEOMETRY CONFLICT on [UnitID]:
     Field: Pipe ID (Radiant)
     Existing: 6.065"
     Incoming (DSP#26058): 6.125"
     Action required: Jesse must confirm which is correct before ingest proceeds
   ```
4. Do NOT auto-update conflicting fields. Hold for Jesse confirmation.
5. If existing field is empty → populate automatically, no flag needed

---

## Heater Card Template

```markdown
---
title: [UnitID] — [Client] [City-State]
client: [client]
facility: [City-State]
unit_id: [canonical tag]
aliases: [variant tags from DSP if different]
service: [crude | coker | vac | reformer | hydrotreater | other]
configuration: [Horizontal | Vertical Cylindrical | Cabin]
metallurgy: [e.g. SA-234/SA-106 Gr. B | Carbon Steel | Stainless]
date_created: [YYYY-MM-DD]
last_updated: [YYYY-MM-DD]
tags: []
---

## Overview
| Field         | Value |
|---------------|-------|
| Client        | |
| Facility      | |
| Unit ID       | |
| Service       | |
| Configuration | |
| Metallurgy    | |
| Launchers     | |
| Filtration    | Yes / No |
| Inspection    | Yes / No |

## Tube Geometry
| Section    | Coils | OD | Sched | Wall | ID | Tubes/Coil | Tube Length | Ft/Section |
|------------|-------|----|-------|------|----|------------|-------------|------------|
| Convection |       |    |       |      |    |            |             |            |
| Radiant    |       |    |       |      |    |            |             |            |

## Bid History
| DSP#  | Date | Scope | Contract Type | Value | Status |
|-------|------|-------|---------------|-------|--------|

> **Shared pricing note:** When a DSP covers multiple heaters and pricing is not broken out
> per heater, record the DSP total and note sibling heaters. Example:
> `Shared with H-29 — DSP total: $145,000 (T&M)`

> **Status note:** Status defaults to `pending` on DSP ingest. Jesse updates manually
> to `awarded` or `lost`. The skill never sets status beyond `pending`.

## Execution History
| USA#  | Date | Duration (hrs) | Rigs | PM |
|-------|------|----------------|------|----|

## Field Notes

### Pre-Execution Estimate — DSP#[XXXXX]
**Task Durations:** rig-in X hrs [estimated] / pig X hrs [estimated] / rig-out X hrs [estimated]
> Note if hours are truck-level shared estimates rather than per-heater

### [USA#####] — [Month Year]
**Task Durations:** rig-in X hrs / pig X hrs / rig-out X hrs
**Pigs Ran:** [sizes and sequence]
**Obstacles:** [fouling severity, stuck pigs, delays, anything abnormal]
**Facility Procedures:** [site-specific policies, access requirements, permit conditions worth flagging next bid]
```

**Field Notes structure:**
- DSP ingest creates a `### Pre-Execution Estimate — DSP#XXXXX` subsection with estimated hours
- Job report ingest APPENDS a new `### USA##### — Month Year` subsection with actuals
- The Pre-Execution Estimate subsection is never overwritten — it stays as historical record
- Never delete or modify existing Field Notes subsections

---

## Job Report Ingestion Logic

Job reports (USA#####) update two places:

### 1. Job card — `03-jobs/[Client]/USA#####.md`
Append or create with:
- Job number, client, facility, execution dates
- Resources deployed
- Field reports as subsections under `## Field Reports`

### 2. Heater card(s) — for each heater worked on the job
To identify which heaters a job touches:
1. Scan job report for explicit unit tags (e.g. H-28, 210-1401A) — primary signal
2. If no unit tags found, check job card metadata for linked heaters
3. If still unresolved, flag and ask Jesse before writing to any heater card

For each identified heater:
- Append a row to `## Execution History`
- Append a new `### USA##### — Month Year` subsection under `## Field Notes` with actuals
- Do not modify Pre-Execution Estimate subsections
- Do not alter Tube Geometry or Overview unless new data contradicts existing (flag per conflict detection rules above)

---

## Routing Inference Logic

Run in this exact order. Stop at first confident match.

### Step 1 — Job number match (highest priority)
Pattern: `USA\d{5}` or `CND\d{5}` in filename or first 500 words
→ `03-jobs/[Client]/USA#####.md` or `03-jobs/[Client]/CND#####.md`
→ Also update relevant heater cards per job report ingestion logic
→ Classify as job report even if DSP# also present in document

### Step 2 — DSP detection
Signals: DSP# AND "Requested Service" AND "Technical Info/Data" — all three required
→ Dissolve into heater cards per DSP ingestion logic above

### Step 3 — USADeBusk companion document
Signals: formal USADeBusk doc number (SOP-*, DCK-*, CO-*) OR authored by USADeBusk/DeBusk Services Group; client + unit tag present; no USA#, no DSP# triggering full DSP logic
→ `02-facilities/[Client]/[City-State]/[existing-unit-folder]/[doc-name].md`
→ Use the document number as filename (e.g. `SOP-DCK-F802-001.md`, `CO-USA26022-001.md`)
→ If unit subfolder does not exist, create automatically for known clients
→ doc_type: `sop`, `change-order`, `pre-job-package`, or `other` as appropriate

### Step 4 — Client facility document
Signals: client-authored (client letterhead or client doc number format); facility/site signals present; procedural or policy content (permits, access requirements, safety classifications, contractor requirements, site-specific policies); no unit tag, no USA#, no DSP#
→ `02-facilities/[Client]/[City-State]/[normalized-doc-name].md`
→ Normalize filename: strip client doc numbers, use descriptive slug (e.g. `Baytown-Contractor-Safety-Requirements.md`)
→ Do NOT route to the facility overview file — write as a companion file at the facility folder level
→ doc_type: `procedure`, `policy`, or `other` as appropriate

### Step 5 — Heater/unit match (standalone)
Signals: unit tag, tube geometry data, no DSP#, no job number
→ `02-facilities/[Client]/[City-State]/Unit-[UnitID]-[Service]/[UnitID].md`

### Step 6 — Facility match (no unit)
Signals: client + city/state, no unit tag, no DSP#, no job number, not procedural in nature
→ `02-facilities/[Client]/[City-State]/[Client-City-State].md`

### Step 7 — Knowledge/reference
Signals: no client or job reference; technical content
→ `04-knowledge/[inferred-subcategory]/[filename].md`

### Step 8 — Unresolved
→ `00-inbox/[original-filename].md` with `routing: unresolved`

---

## Collision & Revision Handling

### Heater cards
- Update in place per Tube Geometry Conflict Detection rules
- Append to Bid History, Execution History, Field Notes — never overwrite

### Job cards
- Append field reports as subsections under `## Field Reports`

### Other files
- Append revision suffix (`-r2`, `-r3`) on collision

### Revised proposals (DSP# with revision suffix e.g. DSP24021.2)
- Re-run DSP ingestion logic against existing heater cards
- Overwrite Bid History row for that DSP# with updated data
- Flag any Tube Geometry conflicts per conflict detection rules

### Known DSP# corrections
- DSP#26012 → ExxonMobil Baytown
- DSP#25012 → CITGO Corpus Christi

---

## New Client Subfolder Creation
Create automatically for known clients. Flag and route to `00-inbox` for unknown clients.

---

## Frontmatter Template (non-heater-card files)

```yaml
---
title: [inferred or filename-derived]
date_added: [YYYY-MM-DD]
source_file: [original filename with extension]
source_type: [docx | pdf]
client: [client name or UNKNOWN]
facility: [City-State — normalized format]
job_number: [USA##### or CND##### or null]
job_region: [US | CA | null]
unit_id: [tag or null]
service: [crude | coker | vac | reformer | hydrotreater | pigging | other | null]
doc_type: [job-note | heater-card | facility-overview | sop | change-order | pre-job-package | procedure | policy | inspection-report | data-sheet | proposal | quote | reference | field-report | other]
revision: [integer or null]
routing: [resolved | unresolved]
routing_note: [one line]
tags: []
---
```

---

## Dry-Run Output Format

### For DSPs — show one block per heater card:
```
DSP: DSP#26030 — P66 Ponca City
HEATERS IDENTIFIED: H-28, H-29
TRUCK STRUCTURE: Truck 1 → H-28 + H-29 (shared hours)
─────────────────────────────
HEATER     : H-28
TARGET PATH: 02-facilities/P66/Ponca-City-OK/Unit-H-28-Coker/H-28.md
STATUS     : new card (will create)
             ⚠ OR: card exists — Tube Geometry conflicts listed below
TECH DATA  : Conv 4 coils / 2.90" ID | Rad 4 coils / 2.90" + 3.826" ID
BID ENTRY  : DSP#26030 | 6-Mar-2026 | T&M | pending | Shared with H-29 — DSP total: $145,000
EST. HOURS : rig-in 8 hrs [estimated, truck-level shared] / pig 40 hrs [estimated, truck-level shared] / rig-out 8 hrs [estimated, truck-level shared]
CONFIDENCE : HIGH
ISSUES     : none
             ⚠ OR: Tube Geometry conflict — [field]: existing [X] vs incoming [Y]
─────────────────────────────
```

### For all other documents:
```
FILE: [original filename]
─────────────────────────────
SOURCE TYPE : docx / pdf
TARGET PATH : 03-jobs/Valero/USA26025.md
STATUS      : new file (safe to write)
              ⚠ OR: collision — will write as USA26025-r2.md
              ⚠ OR: field report — will merge into existing job card
HEATERS     : [unit tags found in document, or "none identified"]
CONFIDENCE  : HIGH / MEDIUM / LOW
ISSUES      : [any flags, or "none"]
─────────────────────────────
```

### Summary block (after all files):
```
TOTAL: N documents → N heater card operations, N job cards, N other files
  HIGH confidence  : N
  MEDIUM confidence: N
  LOW confidence   : N
  Unresolved       : N
  Conflicts requiring Jesse input: N

Ready to ingest? Reply /ingest to proceed, or correct entries above.
Note: Conflicts must be resolved before /ingest will proceed on affected cards.
```

---

## Confidence Scoring

| Level  | Criteria |
|--------|----------|
| HIGH   | DSP# or job number found in filename AND confirmed in content; client matches known list; heater tags consistent across pages |
| MEDIUM | Client and facility inferred from content only; or minor tag inconsistency reconciled |
| LOW    | Single weak signal; tag inconsistency unresolvable without Jesse input |

Flag LOW confidence items individually. Do not ingest without explicit per-item approval.

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
    content = re.sub(r'\n{3,}', '\n\n', content)
    output_path.write_text(content, encoding='utf-8')
    return content
```

Post-conversion cleanup:
- Collapse 3+ consecutive blank lines to 2
- Remove page number artifacts
- Preserve all tables as Markdown tables
- Do not alter headings or bullet structure

---

## Failure Modes — Flag and Stop

- Client not in known list → flag as `client: UNKNOWN`, route to `00-inbox`
- DSP has no Technical Info/Data section → flag, ask Jesse whether to skip or route as reference
- DSP has no execution plan → note in dry-run, proceed without estimated hours
- Heater tag inconsistent and unresolvable → flag as LOW confidence, list all variants found
- Tube Geometry conflict on existing card → flag with old vs new values, hold for Jesse confirmation
- City/state string cannot be normalized confidently → flag, route to `00-inbox`
- Client facility doc cannot be confidently distinguished from a facility overview → flag, ask Jesse before writing
- USADeBusk companion doc has unit tag but unit folder does not exist and client is unknown → flag, route to `00-inbox`
- Job report heater identification fails → flag, ask Jesse before writing to any heater card
- Conversion produces <100 words → flag as possible extraction failure
- Image-only PDF → flag, tell Jesse to run through Gemini

---

## Behavior Rules

- **Never write files during dry-run.**
- **Never overwrite existing Tube Geometry fields** without Jesse confirmation when conflict exists.
- **Never overwrite Field Notes subsections.** Append only. Pre-Execution Estimate subsections are permanent historical record.
- **Never route a client facility doc into the facility overview file.** Client procedures and policies are always separate companion files at the facility folder level.
- **Never create new client folders for unknown clients.** Flag unknowns.
- **Create missing subfolders for known clients automatically.** Note in dry-run output.
- **Never set Bid History status beyond `pending`.** Jesse updates manually.
- **Batch limit:** 20 input files per session. Note: one DSP with 4 heaters = 4 card operations. Flag and prompt before continuing if card operation count exceeds 40.
- **Always confirm vault root path** at session start if not established in context.
- **Conflicts block ingest.** Any flagged Tube Geometry conflict or unresolved heater identification must be resolved by Jesse before /ingest proceeds on the affected card. Other cards in the batch may proceed.
