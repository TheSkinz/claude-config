# Document Classification & Routing

Run in this exact order. Stop at first confident match.

The `doc_type` enum for all types lives in the Frontmatter Template section of SKILL.md.

### Priority 1 — Job Report
Signals: `USA\d{5}` or `CND\d{5}` in filename OR first 500 words — takes precedence even if DSP# also present
→ Dissolve into the relevant heater card(s) per `## Job Report Ingestion Logic` in SKILL.md — no standalone job file is created. Job-level commercial data (revenue, PO, cost) stays in the file estate.

**Why job number takes priority:** Job reports frequently reference DSP numbers and contain
technical language. Checking for USA##### first prevents misclassification of job reports as DSPs.

### Priority 2 — DSP / Proposal
Signals: DSP# in filename or content AND "Requested Service" AND "Technical Info/Data" — all three required
→ Dissolve into heater cards per `## DSP Ingestion Logic` in SKILL.md

### Priority 3 — USADeBusk Companion Document
Signals: formal USADeBusk doc number (SOP-*, DCK-*, CO-*) OR authored by USADeBusk/DeBusk
Services Group; client + unit tag present; no USA#, no DSP# triggering full DSP logic
→ `02-facilities/[Client]/[City-State]/[doc-name].md` (flat — alongside heater cards at site level)
→ Use the document number as filename (e.g. `SOP-DCK-F802-001.md`, `CO-USA26022-001.md`)
→ doc_type: `sop`, `change-order`, `pre-job-package`, or `other` as appropriate

### Priority 4 — Client Facility Document
Signals: client-authored (client letterhead or client doc number format); facility/site signals
present; procedural or policy content (permits, access requirements, safety classifications,
contractor requirements, site-specific policies); no unit tag, no USA#, no DSP#
→ `02-facilities/[Client]/[City-State]/[normalized-doc-name].md`
→ Normalize filename: strip client doc numbers, use descriptive slug
  (e.g. `Baytown-Contractor-Safety-Requirements.md`)
→ Do NOT route to the facility overview file — write as a companion file at the facility folder level
→ doc_type: `procedure`, `policy`, or `other` as appropriate

**Distinguishing Client Facility Doc from Facility Overview:** Facility Overview is a
USADeBusk-maintained summary card. Client Facility Docs are external documents — look for
client letterhead, client document numbers, or procedural/policy language as the differentiator.

### Priority 5 — Heater Card (standalone)
Signals: unit tag + tube geometry table, no DSP#, no job number
→ `02-facilities/[Client]/[City-State]/[HeaterTag].md`

### Priority 6 — Facility Overview
Signals: client + city/state, no unit tag, no DSP#, no job number, not procedural in nature
→ `02-facilities/[Client]/[City-State]/_facility.md`

### Priority 7 — Knowledge/Reference
Signals: no client or job reference; technical content only
→ `04-knowledge/[inferred-subcategory]/[filename].md`

### Priority 8 — Unresolved
→ `00-inbox/[original-filename].md` with `routing: unresolved`
