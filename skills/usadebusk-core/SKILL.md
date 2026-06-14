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
| Element | Spec |
|---|---|
| Font | Arial throughout |
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

### Common Tube Dimensions
| Size | OD | ID |
|---|---|---|
| 4" Sch 40 | 4.500" | 4.026" |
| 5" | — | ~5.047" |
| 6" Sch 40 | 6.625" | 6.065" |

### Metallurgy
- **Carbon steel:** Standard — no modification
- **Stainless steel:** Requires soda-ash PTA neutralization (per NACE SP0170) after mechanical cleaning. Customer typically provides soda ash. pH target ≥ 10.0 throughout circulation. 1–2 ft/s velocity. 4–6 hours. Final flush to neutral. Firewater prohibited in stainless coils. Chloride SCC (water-spec governed, NOT SP0170): default ≤50 ppm, fired coils <1 ppm, 500 ppm is CS-only. PTA-SCC: soda-ash wash per NACE SP0170, decode before/with wash.

### Key Job Variables
Pass/circuit count · Tube ID (conv and rad) · Flange size & rating · Total footage per pass · Tube arrangement (H vs V) · Fouling type · Metallurgy · Loop configuration

---

## Customer-Side Contacts (Typical)
- Maintenance / Turnaround — scheduling and execution
- Procurement / Contracts — bid intake, PO
- Process / Mechanical Engineering — technical review (common at ExxonMobil-tier)
- Operations — isolation, permitting
