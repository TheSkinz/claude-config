---
name: usadebusk-estimating
description: Load this skill when the task involves building a proposal, analyzing an RFQ, estimating job costs or duration, pricing a scope of work, developing a heater card, calculating mob/demob, or any commercial/sales workflow for USADeBusk furnace decoking jobs. Load alongside usadebusk-core.
---

# USADeBusk — Estimating & Proposals

## Primary Estimating Drivers
1. **Pass / circuit count** → equipment qty, launcher/receiver sets, job duration
2. **Tube ID** → pig sizing, launcher size, adapter requirements
3. **Total footage per pass** → primary pigging duration driver
4. **Expected fouling type** → standard coke vs. hard coke/pitch (coker/crude)
5. **Equipment profile** → 1×, 2×, or 3× TriMax (sets asset count and crew size)
6. **Travel distance** → mob/demob mileage
7. **Crew size** → labor and per diem

*Metallurgy does not significantly change the estimate. Customer handles soda ash.*

---

## Duration Model
- All projects built on **12-hour shift cycles**
- Operations run **24/7** — Day and Night shift handovers
- **Total duration = Rig-In + Pigging Hours + Rig-Out ± Rig-Over + Stand-By**
- Mob/Demob: 12-hour simultaneous Day and Night events (fixed)

**Pigging duration benchmark:** ~100 ft/hour per pass (nominal fouling)
- 3,000 ft coil = ~30 pigging hours
- **Reduce the ft/hour rate (more hours required) for:** harder fouling (coker/crude), pitch presence, tube restrictions, first-time clean with no prior data
- Adjust using: prior cleaning data for same heater, job walk observations, loop configuration

**Rig-In / Rig-Out:** Fixed events. Duration varies by pass count and access complexity.

**SIMOPS:** Multi-heater jobs require overlapping heater timeline visibility — resource stacking and scheduling commitments visible across all heater cards simultaneously.

---

## Pricing Structure
| Category | Type | Line Items |
|---|---|---|
| Equipment | Hourly task-based | TriMax Pumper (Rig-In / Pig / Smart Pig / Stand-By rates) |
| Support equipment | Hourly fixed | 4×3 Pump, Filter Press (pumping / non-pumping), Support Units, Crew Trucks |
| Labor | 12-hr Day Rate | PM, Supervisor (Day/Night), Operator (Day/Night) |
| Per Diem | Daily per person | 1 PD per 12-hr shift |
| Materials | Unit rate | Pigs (by size/type), DEF (per shift) |
| Third Party | Cost + markup | Vac truck, light plant, compressor, rental, flights |
| Mob/Demob | Lump sum (95%) | Equipment miles + crew travel labor + driver per diem |

**Filter Press billing:** Two rates
- Pumping rate: TriMax actively pigging
- Non-pumping/stand-by rate: rig-in, rig-out, stand-by

**Third-party markup:** 10% baseline; contract-dependent. Confirm applicable contract markup before finalizing any proposal or invoice; some facilities contract as low as 5%.

---

## Baseline Rate Table
*Generic rates for new facilities without contract rates. Replace with contract rates before finalizing.*

| Category | Description | Rate | Unit |
|---|---|---|---|
| Third Party | Cost + markup | 5–10% | Mark-up (10% baseline) |
| Mob/Equipment | TriMax Travel | $3.00 | Mile |
| Mob/Equipment | Support Travel | $3.00 | Mile |
| Mob/Equipment | Crew Truck Travel | $3.00 | Mile |
| Mob/Labor | Driver Travel | $58.00 | Hour |
| Per Diem | Per Diem | $150.00 | Day |
| Equipment | Pumper: Rigging | $500.00 | Hour |
| Equipment | Pumper: Pig | $500.00 | Hour |
| Equipment | Pumper: Smart Pig | $500.00 | Hour |
| Equipment | Pumper: Stand-by | $500.00 | Hour |
| Equipment | Support Unit | $30.00 | Hour |
| Equipment | Filtration | $200.00 | Hour |
| Equipment | Filter Stand-by | $150.00 | Hour |
| Equipment | Crew Truck | $15.00 | Hour |
| Equipment | 4×3 Trash Pump | $50.00 | Hour |
| Labor | Project Manager | $80.00 | Hour |
| Labor | Supervisor | $74.00 | Hour |
| Labor | Operator | $64.00 | Hour |
| Materials | DEF | $125.00 | Shift |
| Materials | 4" Pigs | $59.00 | Each |
| Materials | 4.25" Pigs | $64.90 | Each |
| Materials | 5" Pigs | $89.70 | Each |
| Materials | 5.25" Pigs | $94.40 | Each |
| Materials | 6" Pigs | $118.00 | Each |
| Materials | 6.25" Pigs | $129.80 | Each |
| Materials | 6.5" Pigs | $142.80 | Each |
| Materials | 8" Pigs | $230.10 | Each |
| Materials | 8.25" Pigs | $247.80 | Each |
| Materials | 10" Pigs | $483.80 | Each |
| Materials | 10.25" Pigs | $531.00 | Each |

---

## Cost Categories (Proposal Structure)
**Mobilization | Demobilization | Equipment | Labor | Materials | Per Diem**

## Heater Card Format
**Rig-In → Pig → [Rig-Over] → [additional Pig passes] → [Smart Pig] → [Stand-By] → Rig-Out**
*Rig-Over occurs between passes or heaters mid-job, not before pigging begins.*

---

## RFQ Intake — Required Inputs
Before building any proposal, confirm:
1. Facility name and customer
2. Heater tag and service name
3. Pass/circuit count and coil pairing
4. Tube ID — convection and radiant (OD and schedule if available)
5. Total footage per pass
6. Inlet/outlet flange size and rating (e.g., 4" 300#, 6" 150#)
7. Tube arrangement (horizontal / vertical / helical)
8. Tube metallurgy (carbon steel or stainless)
9. Expected fouling type (standard coke, hard coke, pitch/resid)
10. Water source (BFW / fresh condensate / demineralized / firewater)
11. Launcher access and elevation constraints
12. Jumper spool requirements
13. Applicable customer standards

---

## Proposal Document Structure
- Cover / transmittal
- Scope of work
- Equipment to be utilized
- Assumptions and exclusions
- Commercial / pricing summary
- Terms and conditions (reference)

## Estimation Workup Tool
Excel workup template is a work in progress. Explain estimating logic from this skill when asked — do not attempt to replicate the workup structure until the template is documented here.

## DSP# Assignment
Assign at proposal start. Format: YYNNN (e.g., DSP26015).

## Submission Platforms
ARIBA, GED, or direct email per customer requirement.

## Customer Types
- **ExxonMobil / major operators:** High documentation requirements, pre-execution packages, engineering review, NACE/customer spec references
- **Mid-tier refineries:** Standard format, less overhead
- **Smaller/independent:** Often relationship-driven, simpler scope
