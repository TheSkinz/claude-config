---
name: usadebusk-core
description: Load this skill for any task involving USADeBusk work — proposals, SOPs, estimating, field operations, technical documentation, or any question about furnace decoking, pigging, fired heaters, or industrial services. This is the foundational context skill and should be loaded alongside any other USADeBusk skill.
---

# USADeBusk — Core Context

## Company Identity
- **Name:** USADeBusk (also: USA DeBusk, DeBusk Services Group on some accounts)
- **Primary service:** Furnace Decoking > Furnace Pigging/Decoking > Furnace Pigging (preferred order)
- **Base:** Deer Park, TX
- **Markets:** Refineries and chemical/petrochemical plants
- **Key roles:** Jesse (technical sales, PM, proposals, estimation); Jason VP (named on some customer-facing docs)
- **Contract type:** T&M on most jobs. Mob/Demob lump sum on ~95%.
- **Third-party markup:** 10% baseline; contract-dependent.

## Brand Standards
*Canonical authority for all USADeBusk brand, font, type-scale, and color specs. Other surfaces (vault formatting standard, context files, system prompts) defer here.*

| Element | Spec |
|---|---|
| Font | Helvetica (Arial acceptable as fallback for DOCX generation) |
| H1 | 13pt bold `#222222`, gold `#FCC30A` bottom border |
| H2 | 11pt bold `#FCC30A` |
| Body | 10pt `#555555` |
| Footer/header | 8.5pt `#888888` |
| Table header | `#222222` fill |
| Alt row BG | `#F7F7F7` |
| Callout BG | `#FFFBE6` with `#FCC30A` accent |

## Document Numbering
- **DSP#** — Quote number. Format: YYNNN (e.g., DSP26001). Assigned at proposal stage.
- **USA#** — Job number. Format: USAYYNNN (e.g., USA26001). Assigned on award.

---

## What Furnace Decoking Is
Fired heater tubes accumulate petroleum coke (carbon-rich thermal cracking byproduct) on tube walls over time. Buildup reduces heat transfer, raises tube skin temps, increases pressure drop, and causes tube failure or unplanned shutdowns if untreated. Furnace pigging is mechanical removal of coke by propelling progressively sized pigs through the coil using water pressure.

## Core Terminology
| Term | Definition |
|---|---|
| Fired Heater / Furnace | Process vessel containing the tube coil. Interchangeable. |
| Coil | Complete tube assembly — multiple tubes connected by U-bends/return bends |
| Pass / Circuit | One continuous tube circuit. A heater may have multiple passes. |
| Tube | Individual straight pipe section within a coil |
| U-bend / Return bend | 180° fitting connecting adjacent tubes |
| Convection section | Upper section — indirect flue gas heat. Lower skin temps. Smaller or equal tube ID vs. radiant. |
| Radiant section | Lower/inner section — direct flame radiation. Highest heat flux. Hardest fouling. |
| Cross-over | External piping connecting convection outlet to radiant inlet. Contains size reducer when tube IDs differ. |
| Pig | Mechanical cleaning device propelled by water pressure |
| Rig-in | Setup of all surface equipment before pigging |
| Rig-out | Removal of all surface equipment after cleaning |
| Rig-over | Moving equipment between passes or heaters mid-job |
| Stand-by | On-site time, not actively pigging. May be billable. |
| PDT (Plant Down Time) | Facility-caused downtime — generally billable as stand-by |
| Smart pig / ILI | Intelligent inspection pig — UT transducers measure tube wall thickness post-cleaning |
| Flow test | Before/after RPM vs PSI vs GPM pump curve — verifies cleaning effectiveness |
| Effluent | Return water from receiver — clarity indicates fouling removal progress |
| Jumper spool | Temporary 180° spool connecting two radiant outlet flanges to loop two passes |
| SIMOPS | Simultaneous operations on multi-heater jobs — resource overlap must be managed |
| Pitch | Heavy viscous fouling — harder to remove; common in coker/crude units |
| Kicksolve | Chemical additive for mobilizing hardened residual product/pitch |
| Ticket Breakdown | Per-job Excel file: all billable resources, durations, rates |
| Service Receipt | Handwritten daily field doc completed by PM per 12-hour shift |
| TriMax (Triple) / second TriMax / double pumper | Naming lock. The standard pumper unit is a "Triple" (3 independent assemblies); a 2× deployment is a "second TriMax." The "double pumper" is a distinct, rare unit — single trailer, 2 assemblies, no center. Never "dual-pumper." Dead string: 'dual-pumper' / 'dual pumper' / 'Dual pumper' — flag and correct on sight. Equipment specs live in usadebusk-equipment. |

⚠️ TERMINOLOGY FLAG: "Triple" and "second TriMax" are canonical. "Double pumper" is accepted ONLY for the specific 2-assembly single-trailer unit (see usadebusk-equipment) — never as a synonym for the TriMax. Never write "dual-pumper" in any document, internal or customer-facing — customers misread it as a pumper limited to two circuits. The near-homophone collision is deliberate to guard against: double pumper (real, rare) ≠ dual-pumper (banned). Flag and correct on sight.

---

## Fired Heater & Tube Knowledge

### Heater Types
- **Cabin / Box** — rectangular; burners floor/sides; common in crude/VDU
- **Vertical Cylindrical (VC)** — cylindrical shell; burners floor; circular coil pattern
- **Arbor / Wicket** — coil hangs in loops; less common

### Coil Sections
**Convection:** Upper. Horizontal rows. Flue gas convection only. Lower skin temps. Tube ID same size or smaller than radiant — true on 99%+ of heaters. ⚠️ FLAG: If convection ID is larger than radiant ID, stop and confirm with Jesse before proceeding.

**Radiant:** Lower/inner. Direct flame radiation. Highest heat flux. Hardest fouling at radiant outlet. Radiant outlet is most fouling-prone location.

**Cross-over:** External. Convection outlet → radiant inlet. Reducer lives here when tube IDs differ. ⚠️ Known obstruction point when transitioning pig sizes (e.g., 5" conv → 6" rad).

### Tube Geometry
- **Serpentine (standard conv):** Horizontal parallel rows, U-bends alternate ends. Pig reverses direction each tube.
- **Helical (radiant, VC heaters):** Coil wraps around circumference.
- **Return bend:** Cast 180° fitting. Common.
- **Plug header:** Box header with removable plugs at tube ends. Older design.

When reasoning about coil topology — serpentine reversal, conv → crossover → rad order, or where an ID transition can occur — see `references/core-coil-template.md` (Diagram 2). It is a template: tube count is per-job and ID transitions can occur mid-pass between any tubes, not only at the crossover.

### Common Tube Dimensions
| Size | OD | ID |
|---|---|---|
| 4" Sch 40 | 4.500" | 4.026" |
| 5" | — | ~5.047" |
| 6" Sch 40 | 6.625" | 6.065" |

### Metallurgy
- **Carbon steel:** Standard — no modification
- **Stainless steel:** Requires soda ash passivation after mechanical cleaning — passivation and soda ash mixing are customer-performed. Customer typically provides the soda ash. pH target ≥ 10.0 throughout circulation; final flush to neutral. Firewater is avoided by default due to chloride content, but may be permitted if the facility has tested its hydrant supply and confirmed acceptable chloride levels.

### Key Job Variables
Pass/circuit count · Tube ID (conv and rad) · Flange size & rating · Total footage per pass · Tube arrangement (H vs V) · Fouling type · Metallurgy · Loop configuration

---

## Heater Card Schema

The heater card is the canonical structured record for one fired heater and the single source of truth for heater facts. Downstream skills read these as fields rather than inferring them: `usadebusk-estimating`, `usadebusk-sop`, and `usadebusk-vault-ingest` defer to this schema for what fields mean and which behavior they gate, and none of them redefine it. Card instances live in the vault under `02-facilities/<Client>/<City-ST>/<HeaterTag>.md` (flat — no per-heater subfolders). `_facility.md` lives alongside heater cards at the site level. The canonical exemplar is `04-knowledge/_canonical-heater-card.md`; templates and vault-ingest derive their structure from it.

### Fact / decision wall (core principle)
- **Facts** about the heater — tube geometry (including per-section metallurgy, arrangement, and return-bend type), flange details, water supply — live in the technical tables below. A fact is a heater property a drawing or field measurement establishes.
- **Decisions** the customer makes — filtration, smart pigging/inspection — live ONLY in the quarantined Job Options table, recorded as status (Optional / Elected / Declined / TBD), never as a spec. A decision placed in a fact table causes estimating and SOP errors downstream.
- **Pumping-unit type is NOT a card field.** It is a per-job dispatch decision, not a heater property — never recorded or inferred on the card. TriMax is the default unit for essentially all jobs; the double pumper is explicit-only (see `usadebusk-equipment`).

### Identity
Card-level facts only. Anything that can differ by section (metallurgy, return bend type) does NOT belong here. Fields: Client, Facility, Unit ID, Heater type, Configuration.

### Tube geometry
One table, one row per physical segment in flow order. A heater with a single-ID radiant section gets one Radiant row; multi-segment radiant sections (e.g. 210-1403A, 210-1404B) get one row per pipe-size segment, labeled "segment N of M."

| Section | Arrangement | Metallurgy | OD (in) | Sched | Wall (in) | ID (in) | Tubes/Circuit | Avg Length (ft) | Length/Circuit (ft) | Return Bend Type | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|

- `ID` is what pig sizing keys off; `OD` + `Sched` are how ID is verified against a drawing. Record all three when available — never drop OD/Sched.
- `Tubes/Circuit` = tube count in ONE circuit of that geometry. Circuit count is not a column here — the Config Rollup carries it.
- **Arrangement:** Convection defaults to Horizontal. Radiant has NO default — state explicitly or `(not recorded)`; genuinely ~50/50 across heater types.
- **Metallurgy and Return Bend Type are PER-SECTION, not card-level.** Mixed-metallurgy heaters exist (e.g. carbon convection / stainless radiant). Do not promote either to Identity or a card-level Connection Info row. "Stainless" without a specific grade is a complete fact, not a placeholder — triggers passivation/filtration handling regardless of alloy.
- **`(not recorded)` is the universal honest placeholder** for missing data. Customers don't always supply full tube specs. Never silently omit a key — make the gap explicit.

### Config Rollup (estimating reference)
Two rows always present — not alternatives, not "current vs. historical." A heater's coil/loop arrangement is a permanent physical fact, not a per-job choice.

| Scale | Section | Pipe ID(s) (in) | Total Tubes | Total Length (ft) | Notes |
|---|---|---|---|---|---|
| Per circuit | | | | | |
| Heater total | | | | | State loop arrangement, e.g. "10 coils looped to 5 passes" |

- **Per circuit** = single-circuit base unit; matches Tube Geometry's Tubes/Circuit and Length/Circuit exactly. This is the estimating multiplication base.
- **Heater total** = full installed total accounting for the actual loop arrangement. The variable is SCALE (per-unit vs. total), not TIME (past vs. present).
- Edge case: when circuits sharing a pipe ID have unequal tube counts, the single-circuit figure is an average — flag it rather than dividing blindly.
- Total Length (heater total) feeds the cleaning-rate duration estimate.
- If loop arrangement is unstated in source data, Notes = `(not recorded)` — do not infer from job duration or TriMax count.
- Physical reconfiguration (rare, flaw-driven) updates the Heater total row in place with the new arrangement and job/date; prior arrangement logged in Field Notes.

### Connection info (facts)
Launcher flange (size / rating# / type, e.g. RFWN) · Receiver flange · Water supply source · Max pig OD (governing tube ID + 0.250″, computed from the smallest ID across all sections/segments). Return-bend type and metallurgy are per-section — they live in Tube Geometry, not here.

### Pig Specifications
Own section — not folded into Connection Info. Estimating/tooling reference: pig sizes, types, quantities, unit cost, billing basis, and source quote for this heater.

### Job Options (quarantined decisions)
Status only, never facts. Filtration · Smart pigging / inspection. Status ∈ {Optional, Elected, Declined, TBD}. Estimating and SOP read election status here; they never read a decision from a fact table.

---

## Customer-Side Contacts (Typical)
- Maintenance / Turnaround — scheduling and execution
- Procurement / Contracts — bid intake, PO
- Process / Mechanical Engineering — technical review (common at ExxonMobil-tier)
- Operations — isolation, permitting

---

## Role Boundaries
Apply on every job regardless of which domain skill is loaded.
- **Lifting:** USADeBusk does not perform lifts. All rigging and lifting is the customer's lifting contractor's scope.
- **Adapters:** When heater flange size or rating differs from the launcher, the customer fabricates the required adapters.

---

## Customer-Facing Language
- Never expose internal billing constructs — cost basis, markup, internal rates, stand-by/idle rate logic — in any customer-facing output.
