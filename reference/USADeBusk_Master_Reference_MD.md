---
status: RETIRED
superseded_by: usadebusk-core + domain skills (TheSkinz/claude-config)
retired: 2026-06
note: Not a live layer. Do not load, reference, or treat as canonical. Skills are the source of truth.
---

# USADeBusk Master Reference Document
**Version 1.0 | Last Updated: June 2026**
*Living document — append new insights to Module 10 first, then integrate into the relevant module on periodic cleanup.*

---

# MODULE 1 — COMPANY & COMMERCIAL CONTEXT

## Identity
- **Legal/Operating Name:** USADeBusk (also written USA DeBusk)
- **Customer-facing:** "DeBusk Services Group" on some accounts; "USADeBusk" is standard
- **Primary service:** Furnace Decoking > Furnace Pigging/Decoking > Furnace Pigging (in order of preferred terminology)
- **Operating base:** Deer Park, TX (corporate fleet and equipment staging)
- **Primary markets:** Refineries and chemical/petrochemical plants

## Brand Standards (All Document Outputs)
| Element | Spec |
|---|---|
| Font | Arial throughout (headings and body) |
| H1 | 13pt, bold, `#222222`, gold `#FCC30A` bottom border rule |
| H2 | 11pt, bold, `#FCC30A` |
| Body text | 10pt, `#555555` |
| Footer/header label | 8.5pt, `#888888` |
| Table header fill | `#222222` |
| Alternating row BG | `#F7F7F7` |
| Callout box BG | `#FFFBE6` with `#FCC30A` header accent |

## Document Numbering Conventions
- **DSP# (Quote Number):** Assigned at proposal stage. Format: YYNNN (e.g., DSP26001 = 2026, bid #001). Proposal workup sheets and Excel files lead with this number. Typically filed in Jason's folder on SharePoint.
- **USA# (Job Number):** Assigned upon award. Format: USAYYNNN (e.g., USA26001). All job execution documents filed under this number in Pigging Jobs folder on SharePoint.

## Key Internal Roles
- **Jesse (jutsey@usadebusk.com):** Technical sales, project management, proposal development, cost estimation, field ops support
- **Jason (VP):** Named on customer-facing documents for certain accounts depending on relationship

## Bid Submission Platforms
- ARIBA (used by some major refinery operators)
- GED (used by others)
- Direct email submission on most jobs

## Contract Type
- Time & Materials (T&M) on the majority of projects
- Mob/Demob treated as lump sum on ~95% of jobs

## Third-Party Items
- Line-itemed separately in proposals and invoices
- Standard markup: **10%** on third-party costs

---

# MODULE 2 — INDUSTRY FOUNDATION

## What Furnace Decoking Is
Fired heater tubes in refineries and chemical plants accumulate petroleum coke deposits over time from process fluid passing through them. Coke is a carbon-rich byproduct of thermal cracking — it builds up on tube walls as the process fluid is heated.

**Why refineries need it done:**
- Coke buildup reduces heat transfer efficiency (acts as insulation)
- Increases tube skin temperatures (risk of tube failure)
- Increases pressure drop across the coil
- Eventually causes unplanned unit shutdowns or tube failures if left untreated

**Consequences of neglect:** Tube failure, loss of unit throughput, unplanned outages, potential safety incidents. Refineries typically schedule decoking during planned turnarounds or when pressure drop/temperature data indicates cleaning is needed.

## Industry Terminology & Lingo

| Term | Definition |
|---|---|
| Furnace / Fired Heater | The process vessel containing the tube coil. Used interchangeably. |
| Coil | The complete tube assembly inside a heater — several tubes connected by U-bends or return bends in a series |
| Pass / Circuit | One continuous tube circuit through the heater. A heater can have multiple passes (coils). |
| Tube | Individual straight pipe section within a coil |
| U-bend / Return bend | 180° fitting connecting two adjacent tubes, allowing pig to reverse direction |
| Convection section | Upper section of the heater — tubes receive indirect heat from flue gas |
| Radiant section | Lower/inner section of the heater — tubes receive direct radiant heat from the burners. Higher heat flux. Typically harder fouling. |
| Cross-over | External piping connecting the convection outlet to the radiant inlet |
| Tube ID / tube bore | Inner diameter of the tube — determines pig sizing and launcher size |
| Tube OD | Outer diameter |
| Schedule (Sch) | Wall thickness designation (e.g., Sch 40, Sch 80) |
| Decoking | Mechanical removal of coke deposits from tube interior |
| Pig | Mechanical cleaning device propelled through the tube by water pressure |
| Pigging | The act of driving pigs through the coil to clean the tubes |
| Rig-in | Setting up all surface equipment — launchers, receivers, hoses, tanks, pumper — prior to pigging |
| Rig-out | Disassembling and removing all surface equipment after cleaning is complete |
| Rig-over | Moving equipment between passes or heaters on multi-heater jobs |
| Stand-by | Time on site but not actively pigging — may be billable depending on cause |
| Plant Down Time (PDT) | Facility-caused downtime (not USADeBusk-caused) — generally billable as stand-by |
| Smart pig / ILI tool | Intelligent inspection pig — runs after mechanical cleaning to measure tube wall thickness via UT transducers |
| Flow test | Before/after pump curve test (RPM vs PSI vs GPM) to verify cleaning effectiveness |
| Effluent | Return water exiting the receiver — clarity and duration of dirty effluent indicates fouling removal progress |
| Diverter | Operator-controlled valve on TriMax that directs return water to dirty tank (when cloudy) or clean tank (when clear) |
| Fig. 200 | Specific hose connection fitting type used at TriMax rear ports (3" size) |
| Camlock | Quick-connect hose fitting used throughout filtration circuit (3" standard) |
| Jumper spool | Temporary 180° loop spool connecting two radiant outlet flanges to create a combined circuit |
| SIMOPS | Simultaneous operations — multi-heater jobs where timing and resource overlap must be managed |
| Pitch | Heavy, viscous fouling variant — harder to remove than standard coke; common in coker/crude units |
| Hard coke | Petroleum coke that has thermally consolidated — requires progressive pig sizing to remove |
| Kicksolve | Chemical additive used to mobilize hardened residual product/pitch |
| T&M | Time and Materials — standard contract type |
| Ticket Breakdown | Per-job Excel file tracking all billable resources, durations, and rates |
| Service Receipt | Handwritten daily field document completed by PM for each 12-hour shift |

## Customer-Side Contacts
Typical stakeholders at a refinery:
- **Maintenance / Turnaround:** Primary point of contact for scheduling and execution
- **Procurement / Contracts:** Bid intake, contract terms, purchase orders
- **Process / Mechanical Engineering:** Technical review, pre-execution package approval (common at ExxonMobil-tier accounts)
- **Operations:** Unit availability, isolation confirmation, safety permitting

---

# MODULE 3 — FIRED HEATER & TUBE KNOWLEDGE

## Heater Types
| Type | Description |
|---|---|
| Cabin / Box | Rectangular structure; burners on floor or sides; common in crude/VDU service |
| Vertical Cylindrical (VC) | Cylindrical shell; burners on floor; coil arranged in circular pattern around center; common in smaller applications |
| Arbor / Wicket | Coil hangs in loops; less common |

## Coil Sections
**Convection section:** Upper section. Tubes arranged in horizontal rows. Heated by flue gas convection only. Lower tube skin temps. Convection tube ID is the same size as or smaller than radiant tube ID on virtually all heaters USADeBusk services (confirmed across 23+ years of field experience — exceptions exist but are extremely rare, less than 1%). Standard: horizontal tube orientation.

**⚠️ FLAG BEHAVIOR:** If a job's heater data shows convection tube ID *larger* than radiant tube ID, flag it immediately before proceeding with any SOP, proposal, or pig sizing work. This is anomalous and must be confirmed with Jesse before continuing.

**Radiant section:** Lower section. Tubes receive direct flame radiation. Highest heat flux in the system. Hardest fouling typically found here. Radiant outlet is the hottest point and most fouling-prone location.

**Cross-over:** External piping between convection outlet flange and radiant inlet flange. Contains the tube size reducer when convection and radiant tube IDs differ (e.g., 5" convection → 6" radiant through reducer on the cross-over).

## Key Variables Driving Job Approach

| Variable | Why It Matters |
|---|---|
| Pass / circuit count | Determines qty of equipment, launcher/receiver sets, job duration |
| Tube ID (convection and radiant) | Sets pig sizing, launcher/receiver size, required adapters |
| Inlet/outlet flange size & rating | Determines launcher model and any customer-fabricated adapters needed |
| Total tube footage per pass | Primary driver of pigging duration estimate |
| Tube arrangement (H vs. V) | Affects equipment placement, launcher access, rig-in complexity |
| Expected fouling type | Hard coke vs. pitch vs. soft coke — affects pig progression strategy |
| Tube metallurgy | Carbon steel = standard; Stainless steel = requires soda-ash PTA neutralization (per NACE SP0170) |
| Coil pairing / loop configuration | Which passes can be looped together with 180° jumper spools to create combined circuits |

## Tube Dimensions — Common Reference
- 4" Sch 40: OD = 4.500", ID = 4.026"
- 5" (convection typical in some units): ID ~5.047"
- 6" Sch 40: OD = 6.625", ID = 6.065"
- 8" Sch 40: OD = 8.625", ID = 7.981"
- 10" Sch 40: OD = 10.750", ID = 10.020"
- Tube wall schedule (Sch 40 is common; heavier wall in high-temp radiant zones)

## Metallurgy — Passivation
- **Carbon steel:** Standard process — no modification needed
- **Stainless steel:** Requires soda-ash PTA neutralization (per NACE SP0170) after mechanical cleaning. Soda ash solution mixed and circulated through coil. Customer typically provides soda ash or pre-mixes before USADeBusk arrives. USADeBusk can supply if required. pH monitoring required throughout.
  - Target pH: maintained above ~10.0 during circulation
  - Circulation velocity: ~1–2 ft/s
  - Duration: typically 4–6 hours
  - Final flush to neutral pH before job closeout

**Two corrosion mechanisms govern stainless decoking (DRAFTED-NOT-CANONICAL — verify against specific customer stainless spec before treating ppm numbers as final):**

1. **Chloride SCC** (water-spec governed, NOT NACE SP0170): Default limit ≤50 ppm Cl⁻ per ASME PCC / API 650 App.S / API 570. Fired coils that cannot drain-and-dry → target <1 ppm. ≤250 ppm acceptable only with approximately 72-hour contact cap plus immediate drain/dry. 500 ppm = carbon steel only — never stainless. Chlorides concentrate at hot walls; failures reported as low as 10 ppm.

2. **PTA-SCC** (the SP0170 mechanism): Requires soda-ash alkaline wash before opening the coil to atmosphere, or N₂/dry-air purge. pH ≥10.0 throughout. Final rinse to neutral. Decode tube ID before or concurrent with the alkaline wash — alkaline wash applied over coke is ineffective per SP0170. Confirm N₂ source.

## Tube Coil Geometry for Diagramming
**Serpentine (standard convection):**
- Horizontal tubes in parallel rows
- Connected by 180° U-bends at alternating ends
- Pig travels left→right in Tube 1, reverses at U-bend, right→left in Tube 2, etc.

**Helical (radiant, vertical cylindrical heaters):**
- Tubes arranged in a helical coil around the circumference
- Common in VC heaters

**Return bend vs. plug header:**
- Return bend: cast 180° fitting welded to tube ends — common
- Plug header: box header with removable plugs at each tube end — older design; plugs removable for inspection or rodding

---

# MODULE 4 — PROCESS FLOW & PIG TRAVEL

## Full Decoking Sequence: Rig-In to Rig-Out

**Rig-In (12-hour fixed event, simultaneous Day and Night shift)**
1. Position TriMax pumper, clean tank, dirty tank adjacent to heater
2. Install pig launchers on convection inlet flanges (adapters as required)
3. Install pig receivers on radiant outlet flanges (adapters as required)
4. Route Fig. 200 jetting hoses from TriMax rear ports to launcher/receiver connections
5. Connect filtration circuit: dirty tank → 4×3 pump → filter press → clean tank
6. Fill system and pressure test
7. Confirm valve manifold positions (direction of pig travel)
8. **Run BEFORE flow test** (RPM vs PSI vs GPM baseline) — must occur before first pig launch

**Pigging Operations (24/7 with shift handovers)**
Progressive pig sizing from small to line size and oversized:
1. Load first pig into launcher, close and pressure up
2. Open launch valve — water pressure from TriMax propels pig through coil
3. Pig exits at receiver end, collected
4. Return water enters TriMax via Fig. 200 port → ceiling pipe → diverter
5. Operator monitors effluent clarity: cloudy → throw diverter to dirty tank; clear → clean tank
6. Dirty tank → 4×3 pump → filter press → clean tank (filtration loop runs concurrently)
7. Load next pig (same size or next size up) and repeat
8. Repeat until effluent discharge time ≤ 3–5 seconds and effluent runs clear
9. **Run AFTER flow test** (same RPM vs PSI vs GPM curve) — run at pigging completion
10. Log all data on service receipt

**Rig-Out (12-hour fixed event)**
- Remove launchers, receivers, all hoses and surface equipment
- Reconnect customer flanges
- Clean site

## Pig Progression Strategy
- Start with foams or undersized TCs to open the path
- Progress by 1/8" increments per successful pass
- Line-size pig (tube ID): removes bulk of coke
- Oversized pig (tube ID + 0.125" to 0.250"): final cleanup, wall contact for residual removal
- Example (6.065" ID tube): start 6.0" TC → progress to 6.25" TC (final standard) → 6.5" TC if heavy fouling or looped circuit with long transit
- Swabs used for final verification or in larger tube sections

## Flow Path (Standard Single Pass — Convection-to-Radiant Direction)
```
TriMax Clean Tank → Pump Assembly → Fig.200 CONV port → Jetting Hose → 
Pig Launcher (Conv. Inlet Flange) → Convection Tubes (serpentine) → 
Cross-over → Radiant Tubes → Pig Receiver (Rad. Outlet Flange) → 
Jetting Hose → Fig.200 RAD port → Internal ceiling pipe → 
Diverter → Clean Tank (clear) or Dirty Tank (cloudy)
```
*For reversed direction (radiant-to-convection), return water comes back via the CONV port instead. Valve manifold on TriMax controls direction.*

**Filtration loop (concurrent):**
```
Dirty Tank → 3" Camlock → 4×3 Pump → 3" Camlock → Filter Press (100 PSI) → 
3" Camlock → Clean Tank
```

## Flow Reversibility
- Pig can be launched from either direction (convection-to-radiant or radiant-to-convection)
- Direction controlled by valve manifold on TriMax — no manual hose swapping required

## Looped Circuit (Jumper Spool Configuration)
When two passes are looped:
- 180° jumper spool connects Radiant Outlet of Pass 1 to Radiant Outlet of Pass 2
- Pig travels: Conv. Inlet Pass 1 → full Pass 1 coil → Rad. Outlet Pass 1 → Jumper Spool → Rad. Outlet Pass 2 → full Pass 2 coil (reverse direction) → Conv. Inlet Pass 2
- Creates longer circuit — pig transit time varies with footage, internal pipe diameter, and GPM (the three inputs to pig velocity). Observed range on looped circuits: ~6 to ~30 minutes. Treat as derived per job, not fixed.
- Requires careful monitoring due to longer blind period between launches

## Supply Configurations

**Option A — No Filtration (Open Loop):**
Supply: Fire hydrant → fire hose → each TriMax clean tank. Return: each TriMax dirty tank → 3" camlock → coke pit drain / oily water sewer. Used when filtration is not required or water discharge to drain is permitted by site.

**Option B — Filtration (Closed Loop):**
Supply: Frac tank → TriMax clean tank(s); no hydrant required. Return routes through filtration: dirty tank → 4×3 trash pump → filter press → clean tank. When running 2× TriMax: 2× filter presses + 2× 4×3 pumps when customer requires and a second press is available; otherwise 1× shared filter press + 1× shared 4×3 pump serving both units. See usadebusk-equipment for filtration detail and T-connection configuration.

## Cleaning Completion Criteria
- Effluent discharge time ≤ 3–5 seconds per pig pass
- Effluent runs consistently clear
- Before/after flow tests show measurable pressure drop improvement at equivalent GPM

## Smart Pig / ILI Inspection (Post-Decoking)
- Run after mechanical cleaning confirms tube walls are clean
- USADeBusk provides water propulsion (TriMax pumper) for the inspection vendor
- Target velocity: 1.0–2.0 ft/s (slow, constant speed required for UT data quality)
- For 4" ID pipe: approximately 40–70 GPM target range at inspection velocity
- Vendor (Quest Integrity, TEAM, Cokebusters, etc.) specifies exact flow envelope in writing — do not set pump independently of vendor spec
- Vendor controls tool; USADeBusk controls pump speed on vendor instruction

---

# MODULE 5 — EQUIPMENT LIBRARY

## TriMax Pumper Unit
**What it is:** USADeBusk's proprietary trailer-mounted pigging pumper. The TriMax is a TRIPLE — one trailer contains 3 independent pumping assemblies, each with its own engine, gearbox, pump, and valve manifold. Three operator stations occupy the control cab, one per assembly. All three assemblies share one clean tank (3,000 gal) and one dirty tank (2,000 gal). Each assembly cleans one circuit independently — direction, flow state, and progress are tracked separately per assembly. Scope determines how many assemblies are active; unused assemblies sit idle.

**Physical layout (left to right):**
- Control cab (3 operator stations, far left)
- Dirty tank (2,000 gallons, shared)
- Clean tank (3,000 gallons, shared)
- 3× pump/engine assemblies (far right)

**Internal routing:**
- Routing order (per assembly): clean tank → suction strainer → pump → flow meter → valve manifold → Fig. 200 port
- Return water from receiver enters via Fig. 200 RAD port at trailer rear
- Routes via fixed pipe along trailer ceiling toward clean tank
- Diverter (90° plunger, operator-controlled from cab) sits at junction above dirty/clean tank
  - Default: water flows to clean tank
  - Thrown (when effluent cloudy): water diverts to dirty tank
- Pump inlet: right side of clean tank
- Pump discharge: right side of pump → out to launcher via Fig. 200 CONV port

**Rear connections:**
- Two Fig. 200 (3") ports at rear of trailer, side by side
- One labeled CONV (convection), one labeled RAD (radiant)
- Both serve as either feed or return depending on selected pig travel direction
- Valve manifold on TriMax controls direction from cab — no hose swapping

**Operating note:** High-volume / low-pressure system relative to jetting or hydro-blasting equipment. High volume is the distinguishing characteristic — pigs are propelled by flow, not by pressure alone. Pressure range: 100–600 PSI system limit; typical operating range 100–400 PSI depending on fouling. Not a high-pressure jetting unit.

## Filter Press
- **DeBusk Filter Press:** 73 polypropylene plates
- Surface area: 1,243.4 ft²
- Operating pressure: 100 PSI
- Capacity: 400 GPM
- Non-gasketed filter cloths
- Trailer-mounted, significantly larger than 4×3 pump

## 4×3 Centrifugal Pump (Trash Pump)
- Standalone trailer-mounted centrifugal pump
- 3" camlock inlet and outlet
- Drives dirty water from dirty tank through filter press
- Operates concurrently with pigging — independent process, does not affect coil pressure

## Pig Launchers / Receivers
- Attached directly to convection inlet flanges (launcher) and radiant outlet flanges (receiver)
- Same form factor — labeled by function and location
- Flange size matches heater flange (adapters fabricated by customer when flange rating/size differs)
- Fig. 200 hose connection at rear of TriMax connects to launcher/receiver via jetting hose

**Launcher/Receiver Inventory (standard across all furnace pigging companies):**
- USADeBusk carries 10+ launchers of each size, sizes 3" through 12"
- 3", 4", 6", 8": all have **300# connections** on barrel and valve
- 10", 12": all have **150# connections** on barrel and valve
- This flange rating standard is consistent industry-wide — not USADeBusk-specific

## Pig Types

| Type | Description | Use Case |
|---|---|---|
| Foam | Soft foam cylinder — no abrasive elements | Opening passes, initial flow establishment, verification |
| TC (Tungsten Carbide Pin) | Urethane body (84A Duro typical, 78A special), TC pins embedded during molding | Primary coke removal — main workhorse pig |
| HR (High-Recovery / Hard Rubber) | Harder durometer body, aggressive cleaning | Heavy fouling, pitch-laden tubes |
| Swab | Oversized soft urethane | Final cleanup, verification, larger tube sections |

**TC Pig mechanics:**
- Pins are embedded in urethane body — cast in mold with chemical hardener
- When pig OD ≤ tube ID: pins extend and dig into coke deposits
- When pig OD > tube ID (oversized): urethane body compresses; pins lay back and compress inward — differential hardness means pins cut coke but deflect off harder tube wall without damage
- Progressive sizing: 1/8" increments per successful pass; line-size then oversized for final passes

## Hoses & Connections
| Component | Type | Size | Notes |
|---|---|---|---|
| TriMax to launcher/receiver | Fig. 200 jetting hose | 3" | Connects rear TriMax ports to coil endpoints |
| Filtration circuit (all legs) | Camlock | 3" | Dirty tank → pump → filter press → clean tank |
| Dirty tank vac access | Camlock | 3" | T-branch on dirty tank outlet for vac truck access |

## Valve Manifold
- Located on TriMax, operator-controlled from cab
- Controls pig travel direction (convection-to-radiant vs. radiant-to-convection)
- Eliminates manual hose reconfiguration between direction changes

## Support Equipment
| Equipment | Purpose |
|---|---|
| Crew Truck | Crew transport and tool/supply hauling |
| Support Unit | Additional equipment/supply transport trailer |
| DEF (Diesel Exhaust Fluid) | Fuel additive for equipment compliance; billed per shift |
| Vac Truck | Third-party; residual chemical/product disposal from dirty tank |
| Light Plant | Third-party; night lighting for rig-in/out or poorly lit areas |
| Air Compressor | Third-party; pig loading assistance or pneumatic tools |

---

# MODULE 6 — ESTIMATING & PRICING LOGIC

## Primary Estimating Drivers
1. **Pass / circuit count** — number of coils to clean → equipment qty and job duration
2. **Tube ID** — pig sizing, launcher size, adapter requirements
3. **Total footage per pass** — primary pigging duration driver
4. **Expected fouling type** — standard coke vs. hard coke/pitch (coker/crude units)
5. **Equipment profile** — 1x, 2x, or 3x TriMax (profile sets asset count and default crew size)
6. **Travel distance** — mob/demob mileage
7. **Crew size** — headcount drives labor, per diem

**Note:** Metallurgy does not significantly change the estimate. Customer typically handles soda ash.

## Duration Model
- All projects built on **12-hour shift cycles**
- Operations run **24/7** with Day and Night shift handovers
- **Mob/Demob:** 12-hour simultaneous Day and Night events (fixed)
- **Total duration = Rig-In + Pigging Hours + Rig-Out ± Rig-Over + Stand-By**

**Pigging duration benchmark:** ~100 ft/hour per pass (nominal fouling baseline)
- 3,000 ft coil = ~30 pigging hours for that pass
- **Reduce the ft/hour rate (more hours required) for:** harder fouling (coker/crude), pitch presence, tube restrictions, first-time cleans with no prior data
- Adjust using: prior cleaning data for the same heater when available, job walk observations, coil loop configuration

**Rig-In / Rig-Out:** Fixed events. Duration varies by pass count and access complexity.

**SIMOPS (multi-heater jobs):** Overlapping heater timeline visibility required — resource stacking and scheduling commitments must be visible across all heater cards simultaneously.

## Pricing Structure

| Category | Pricing Type | Line Items |
|---|---|---|
| Equipment | Hourly task-based | TriMax Pumper (rates vary: Rig-In / Pigging / Stand-By) |
| Support equipment | Hourly fixed | 4×3 Trash Pump, Filter Press (pumping rate / non-pumping rate), Support Units, Crew Trucks |
| Labor | 12-hour Day Rate | Supervisor/Lead (Day), Supervisor/Lead (Night), Technician/Operator (Day), Technician/Operator (Night) |
| Per Diem | Fixed daily allowance | 1 PD per 12-hour shift per person |
| Materials | Unit rate | Pigs (Foam, HR, TC, Swab — per pig), DEF (per shift) |
| Third Party | Cost + 10% markup | Vac truck, light plant, compressor, rental vehicles, flights |
| Mob/Demob | Lump sum (95%) or mileage-based | Equipment (per mile), crew trucks (per mile), labor travel hours, driver/non-driver per diem |

**Filter Press billing:** Two rates
- Pumping rate: when TriMax is actively pigging
- Non-pumping / stand-by rate: during rig-in, rig-out, stand-by

## Baseline Rate Table
These are generic baseline rates used for new facilities without established contract rates. Use as a starting estimate only — replace with actual contract rates before finalizing any proposal. Exact rates fluctuate by facility and contract.

*Note: Third-party markup is contract-dependent. Baseline (no contract) = 10%. The generic rate table below uses 5% as a conservative starting point for new facilities — adjust to 10% if no contract rate exists.*

| Category | Description | Rate | Unit |
|---|---|---|---|
| Third Party | Cost + markup | 5–10% | Mark-up (contract-dependent; 10% baseline) |
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
All proposals broken into: **Mobilization | Demobilization | Equipment | Labor | Materials | Per Diem**

## Heater Card Format
Each heater in a proposal gets a card with the task sequence:
**Rig-In → Pig → [Rig-Over] → [additional Pig passes] → [Smart Pig] → [Stand-By] → Rig-Out**

*Rig-Over occurs between passes or heaters mid-job, not before pigging begins.*

---

# MODULE 7 — PROPOSALS & SALES WORKFLOW

## RFQ Intake
Customer sends a Request for Quote containing some or all of:
- Heater tag(s) and unit identification
- Coil/pass count
- Tube ID and footage (sometimes from drawings, sometimes approximate)
- Requested scope (pigging only, pigging + smart pig, pigging + PTA neutralization)
- Requested schedule / turnaround dates
- Applicable customer standards or specifications

**Common input formats:** Email, Ariba/GED bid package, P&ID, tube data sheets, informal conversation

## Scope Development
1. Parse heater data: passes, tube IDs, footage, flange sizes
2. Determine equipment profile (1x / 2x / 3x TriMax)
3. Build heater card(s) with task sequence
4. Calculate pigging hours per pass
5. Calculate crew size and shift count
6. Calculate mob/demob (mileage, crew count)
7. Apply pricing structure → generate billable line items
8. Add third-party items with 10% markup
9. Apply margin targets

## Estimation Workup Tool
The actual Excel estimation workup template is a work in progress. Claude should be able to explain the estimating logic (rates, duration model, cost categories) from Module 6 without the template. When the template is finalized, document its tab structure, input cells, and calculation logic here.

## DSP# Assignment
Assign DSP# at the start of workup. Format: YYNNN (e.g., DSP26015). Used as the document reference throughout the proposal process.

## Proposal Document Structure (Customer-Facing)
- Cover / transmittal
- Scope of work (technical description of what will be done)
- Equipment to be utilized
- Assumptions and exclusions
- Commercial / pricing summary
- Terms and conditions (reference)

## Formatting
Follow Module 1 brand standards. Arial font throughout. Gold/charcoal color scheme. Tables for pricing.

## Customer Types & Behaviors
- **ExxonMobil / major operators:** High documentation requirements. Pre-execution technical packages expected. Engineering review of procedures. Reference NACE and customer-specific standards.
- **Mid-tier refineries:** Standard proposal format, less documentation overhead
- **Smaller/independent refineries:** Often relationship-driven, simpler scope

## Submission
ARIBA, GED, or direct email per customer requirement.

## Decoking Information Request Form — Key Fields
When customers request a quote, these are the inputs needed to build an accurate scope:

**Required:**
1. Facility name and customer
2. Heater tag and service name (e.g., H-101, Crude Preheat)
3. Pass/circuit count and coil pairing
4. Tube ID — convection and radiant (with OD and schedule if available)
5. Total footage per pass
6. Inlet/outlet flange size and rating (e.g., 4" 300#, 6" 150#)
7. Tube arrangement (horizontal / vertical / helical)
8. Tube metallurgy (carbon steel or stainless — specify grade)
9. Expected fouling type (standard coke, hard coke, pitch/resid)
10. Water source available on site (BFW / fresh condensate / demineralized / firewater)
11. Launcher access location and elevation constraints
12. Jumper spool requirements (qty, size, rating, location)
13. Applicable customer standards or compliance references

---

# MODULE 8 — SOPs & TECHNICAL DOCUMENTATION

## SOP Structure (Standard)
1. **Header block:** Document reference, title, subtitle, revision, client, contractor, date
2. **Scope:** What heater, what coils, what service
3. **Safety / PPE requirements**
4. **Equipment to be used** (launchers, pumper, filtration)
5. **Operating parameters table** (cleaning medium, pressure range, max pig OD, sizing increment, completion criterion)
6. **Process flow path description** (full pig travel path using arrow notation per circuit)
7. **Pig progression sequence** (starting size through final size)
8. **Step-by-step procedure**
9. **Flow test procedure** (before/after)
10. **Completion sign-off**

## Operating Parameters Table (Standard)
| Parameter | Specification |
|---|---|
| Cleaning Medium | Fresh condensate / demineralized water / BFW — confirm per metallurgy |
| System Operating Pressure | Job-specific (e.g., 100–200 PSI nominal, 150–400 PSI hard fouling) |
| Maximum Allowable Pig OD | Tube ID + 0.250" (confirm per job) |
| Pig Sizing Increment | 1/8" per successful pass |
| Cleaning Completion Criterion | Effluent discharge time ≤ 3–5 seconds per pass; effluent runs clear |
| Maximum System Pressure | 600 PSI absolute limit; formal over-pressure checklist required above 500 PSI |

## Pressure Range Logic
- Carbon steel, nominal fouling: 100–200 PSI typical
- Harder fouling (coker/crude): 150–400 PSI
- Hard limit: 600 PSI

## SOP Variants
**Variant A — Standard (Carbon Steel):**
Standard pigging procedure, fresh condensate or equivalent water source, no passivation.

**Variant B — Stainless Steel (PTA Neutralization Required):**
Same mechanical procedure plus:
- Soda ash solution circulation post-cleaning
- pH monitoring throughout (target ≥ 10.0)
- Nitrogen purge (customer-provided or USADeBusk-supplied — confirm)
- Final rinse to neutral pH
- Reference NACE SP0170 or applicable customer spec

## Pre-Execution Technical Package (ExxonMobil-Tier)
Required components:
- Job-specific SOP (Variant A or B)
- Process Flow Diagram (PFD) with equipment blocks and connection annotations
- Equipment data sheets (TriMax specs, filter press specs, launcher/receiver specs)
- Chemical data (if Kicksolve or soda ash used)
- Risk assessment / JSA
- Relevant certifications

## Launcher / Receiver Documentation
For each launcher:
- Size and flange rating
- Connection type (Fig. 200 / jetting hose)
- Launcher elevation and access notes

## Jumper Spool Documentation
For each circuit using 180° jumper spools:
- Quantity, size, and flange rating
- Installation location (radiant outlet flanges)
- Function: "Connects [Pass X] Radiant Outlet to [Pass Y] Radiant Outlet to create continuous single-pass cleaning circuit"

## Filtration Loop Statement (Standard Block)
*"The filtration loop operates independently from the main pigging process and does not influence process coil pressure or pig travel. Flow path: Dirty Tank → 4×3 Trash Pump (3" camlock suction) → Filter Press → Clean Tank → TriMax supply."*

## Role Boundaries (USADeBusk vs. Customer/Lifting Contractor)
- **USADeBusk responsible for:** All pigging equipment, surface connections, pig propulsion, filtration, service receipts, technical documentation
- **Customer responsible for:** Isolation, blinds, PSV protection, permit-to-work, water supply connections to USADeBusk tanks, launcher/receiver fabricated adapters when required
- **Lifting contractor responsible for:** All rigging and lifting of equipment — USADeBusk does not perform lifts

---

# MODULE 9 — OPERATIONS & FIELD ADMIN

## Service Receipt
Handwritten daily document completed by Project Manager for each 12-hour shift.

**Key fields:**
- Date, shift (Day/Night), job number (USA#)
- Equipment mobilized and hours (TriMax, filter press, 4×3 pump, crew trucks, support units)
- Labor headcount and hours (Supervisor, Operators)
- Per diem count
- Materials used (pigs by type and size, DEF)
- Third-party services (description, hours, cost)
- Plant Down Time (hours, cause)
- Shift summary (narrative of activities)
- Clean ID (largest pig size that passed through the full circuit without obstruction — required for progress tracking. Maximum pig size run through any coil is tube ID + 0.250". Example: 5.000" ID tube → 5.25" max pig; 6.065" ID tube → 6.25" standard final / 6.5" max in heavy fouling.)
- Customer signature and supervisor signature

**Unsigned receipts = dispute risk.** Flag immediately.

## Ticket Breakdown File
Most important per-job operational document.

**Naming:** `USA[YYNNN] [Facility Name] [Scope] TriMax Ticket Breakdown`

**Contents:** All billable resources mobilized, durations on project, billing rates, running totals.

**Purpose:** Source for invoice generation. All service receipt data feeds here.

## Receipt Extraction Process
When processing handwritten service receipts for a job:
1. Extract all billable fields per the table below
2. Cross-check against proposal: flag resources not in scope, PDT for billable stand-by, unsigned receipts, missing Clean ID
3. Produce import-ready table for Ticket Breakdown file

**Import-ready table format:**
| Line Item | Category | Hours/Qty | Rate Basis |
|---|---|---|---|
| TriMax Pumper | Equipment | N hrs | Hourly task-based |
| Filter Press | Equipment | N hrs | Pumping / non-pumping |
| 4×3 Pump | Equipment | N hrs | Hourly |
| Support Unit | Equipment | N hrs | Hourly |
| Crew Truck | Equipment | N hrs | Hourly |
| DS Supervisor | Labor | N hrs | Day Rate |
| NS Supervisor | Labor | N hrs | Day Rate |
| Operator | Labor | N hrs | Day Rate |
| Per Diem | Labor | N count | Daily |
| DEF | Materials | N shifts | Per shift |
| Pigs | Materials | qty/type | Unit rate |
| Third Party | Third Party | N hrs | Cost + 10% |
| Plant Down Time | Stand-by | N hrs | Stand-by rate |

## Plant Down Time (PDT)
- Facility-caused downtime (not USADeBusk-caused)
- Always flag on receipt as potentially billable at stand-by rate
- Distinguish clearly from USADeBusk-caused delays in shift summary

## Invoice Readiness Check
Before generating invoice:
1. All service receipts collected (no gaps in shift sequence)
2. All receipts have customer signature
3. Third-party items have sufficient description for invoicing
4. Total hours reconciled against proposal — flag significant overruns or underruns for review
5. PDT hours confirmed billable with customer

## Job Number Filing
- All documents under USA# in Pigging Jobs folder on SharePoint
- Ticket Breakdown is the anchor document
- Attach service receipts (scanned) to job folder

---

# MODULE 10 — INSIGHTS & REFINEMENTS LOG

*Format for new entries:*
*`[Date] | [Module Reference] | Insight or refinement`*

---

**[2026-03] | Module 4 | Crossover reducer:** The reducer between convection outlet and radiant inlet sits on the cross-over piping (external). A significant obstruction point — has been encountered as a blockage location when transitioning from 5" convection pigs to 6" radiant pigs. Must be addressed explicitly in pig progression planning for mixed-ID heaters.
[2026-03] | Module 1 | Third-party markup clarification: 10% is the baseline (no contract). Some facilities have contract rates as low as 5%. Always confirm applicable rate before invoicing or finalizing a proposal.

