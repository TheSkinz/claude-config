---
name: usadebusk-sop
description: Load this skill when the task involves writing a procedure, SOP, pre-execution package, process flow diagram, technical documentation, or any procedural/engineering document for a USADeBusk furnace decoking job. Also load for questions about the decoking process sequence, pig travel path, flow diagrams, or operational parameters. Load alongside usadebusk-core and usadebusk-equipment.
---

# USADeBusk — SOPs & Technical Documentation

**Canonical authority:** usadebusk-sop is the single source of truth for USADeBusk procedural and SOP content across all surfaces. On any conflict over procedural/SOP content between this skill and a project prompt, vault note, or other layer, this skill governs. Scope: procedural/SOP content only — it does not claim authority over output formatting (the vault SOP formatting standard remains canonical) or behavior (CLAUDE.md remains canonical).

## Full Decoking Sequence

**Rig-In (12-hour fixed, simultaneous Day/Night)**
1. Position TriMax, clean tank, dirty tank adjacent to heater
2. Install pig launchers on convection inlet flanges (adapters as required)
3. Install pig receivers on radiant outlet flanges (adapters as required)
4. Route Fig. 200 jetting hoses from TriMax rear ports to launcher/receiver
5. Connect filtration circuit: dirty tank → 4×3 pump → filter press → clean tank
6. Fill system and pressure test
7. Confirm valve manifold positions
8. **Run BEFORE flow test** (RPM vs PSI vs GPM baseline) — before first pig launch

**Pigging Operations (24/7 with shift handovers)**
1. Load pig into launcher, close and pressure up
2. Open launch valve — TriMax water pressure propels pig through coil
3. Pig exits at receiver, collected
4. Return water: Fig. 200 port → ceiling pipe → diverter → clean tank (clear) or dirty tank (cloudy)
5. Filtration loop runs concurrently: dirty tank → 4×3 pump → filter press → clean tank
6. Load next pig (same or next size up), repeat
7. Continue until completion criteria met
8. **Run AFTER flow test** at pigging completion
9. Log all data on service receipt

> **Pigging diagrams:** See `references/sop-pigging-diagrams.md` for the looped jumper-spool circuit (D4)
> and the smallest-ID-first pig progression + larger-ID reversal procedure (D7), extracted verbatim from B1.
> **Draft:** D7's reversal control-action sequence (throttle → directional switch → re-throttle) is
> field-unconfirmed pending operator verification — do not treat that step order as canon.

**Rig-Out (12-hour fixed)**
- Remove launchers, receivers, all hoses and surface equipment
- Reconnect customer flanges, clean site

---

## Flow Path (Standard — Conv-to-Rad Direction)
```
TriMax Clean Tank → Waterous Pump → Fig.200 CONV port → Jetting Hose →
Pig Launcher (Conv. Inlet) → Convection Tubes → Cross-over →
Radiant Tubes → Pig Receiver (Rad. Outlet) →
Jetting Hose → Fig.200 RAD port → Ceiling pipe →
Diverter → Clean Tank (clear) / Dirty Tank (cloudy)
```
*Reversed direction (rad-to-conv): return enters via CONV port. Valve manifold controls direction — no hose swapping.*

**Filtration loop (concurrent):**
```
Dirty Tank → 3" Camlock → 4×3 Pump → 3" Camlock →
Filter Press (100 PSI) → 3" Camlock → Clean Tank
```
*Filtration operates independently — does not influence coil pressure or pig travel.*

---

## Looped Circuit (Jumper Spool)
- 180° jumper spool connects Rad. Outlet Pass 1 to Rad. Outlet Pass 2
- Pig path: Conv. Inlet P1 → P1 coil → Rad. Outlet P1 → Jumper → Rad. Outlet P2 → P2 coil (reversed) → Conv. Inlet P2
- Longer circuit — extended pig transit and blind period. Transit is a function of footage, pipe ID, and GPM — observed ~6–30 min across looped jobs, not a fixed range.
- Final pig size may need to be larger for wall contact through the longer combined circuit (e.g., 6.5" vs. 6.25")

---

## Cleaning Completion Criteria
- Effluent discharge time ≤ 3–5 seconds per pig pass
- Effluent runs consistently clear
- Before/after flow tests show measurable pressure drop improvement at equivalent GPM

---

## Smart Pig / ILI (Post-Decoking)
- Run after mechanical cleaning is complete
- USADeBusk provides water propulsion (TriMax); inspection vendor controls tool
- Target velocity: 1.0–2.0 ft/s (constant speed required for UT data quality)
- 4" ID pipe: ~40–70 GPM typical range at inspection velocity; at 1.5 ft/s ≈ 54 GPM
- Vendor specifies exact flow envelope in writing — do not set pump independently of vendor spec

---

## SOP Document Structure (Standard)
1. Header block: document ref, title, subtitle, revision, client, contractor, date
2. Scope: heater tag, coils, service
3. Safety / PPE requirements
4. Equipment to be used
5. Operating parameters table
6. Process flow path (arrow notation, per circuit)
7. Pig progression sequence (start size through final size)
8. Step-by-step procedure
9. Flow test procedure (before/after)
10. Completion sign-off

---

## Operating Parameters Table (Standard)
| Parameter | Specification |
|---|---|
| Cleaning Medium | Fresh condensate / demineralized water / BFW — confirm per metallurgy |
| System Operating Pressure | 100–200 PSI nominal; 150–400 PSI hard fouling |
| Maximum Pig OD | Tube ID + 0.250" |
| Pig Sizing Increment | 1/8" per successful pass |
| Completion Criterion | Effluent time ≤ 3–5 seconds; effluent clear |
| Maximum System Pressure | 600 PSI absolute; over-pressure checklist required above 500 PSI |

---

## SOP Variants

**Variant A — Standard (Carbon Steel)**
Standard pigging procedure. Fresh condensate or equivalent. No passivation.

**Variant B — Stainless Steel**
Same mechanical procedure plus:
- Soda ash solution circulation post-cleaning
- pH monitoring throughout (target ≥ 10.0)
- Nitrogen purge — confirm source (customer or USADeBusk)
- Final rinse to neutral pH
- Reference NACE SP0170 or applicable customer spec
- **Firewater prohibited.** Confirm water source before writing.

---

## Required Inputs Before Writing Any SOP
Do not generate until confirmed:
1. Facility name and customer
2. Heater tag and service
3. Pass/circuit count and coil pairing
4. Tube ID — convection and radiant
5. Total footage per pass
6. Inlet/outlet flange size and rating
7. Tube arrangement
8. **Tube metallurgy** — determines entire SOP variant. Never assume.
9. **Water source** — firewater prohibited in stainless. Never assume.
10. Launcher access and elevation
11. Jumper spool requirements
12. Applicable standards (NACE SP0170, customer spec)

If inputs come from a drawing or data sheet, extract all variables and present in a confirmation table before drafting.

---

## Pre-Execution Technical Package (ExxonMobil-Tier)
- Job-specific SOP (Variant A or B)
- Process Flow Diagram with equipment blocks and connection annotations
- Equipment data sheets (TriMax, filter press, launchers/receivers)
- Chemical data (if Kicksolve or soda ash)
- Risk assessment / JSA
- Relevant certifications

---

## Process Flow Diagram Output Format
When Jesse requests a PFD, produce:

**Header:** Document ref (PFD-DCK-[job#]-REV[X]), title, subtitle: CLOSED-LOOP · [direction] · FLOW REVERSIBLE, client, contractor, date

**Two-process layout:**
- P1 PIGGING: TriMax → Launcher → Heater Circuit → Receiver → Diverter → Clean/Dirty Tank
- P2 FILTRATION: Dirty Tank → 4×3 Pump → Filter Press → Clean Tank

**Equipment blocks (L to R):** Fired Heater | TriMax Pumper | 4×3 Pump | Filter Press

**Connection annotations:**
- Fig. 200 (3") at TriMax rear — CONV and RAD ports, valve manifold
- 3" Camlock — all P2 filtration connections
- Hose size and connection type for every segment

---

## Jumper Spool Documentation
- Quantity, size, flange rating
- Installation: radiant outlet flanges
- Function statement: "Connects [Pass X] Rad. Outlet to [Pass Y] Rad. Outlet to create continuous single-pass cleaning circuit"

---

## Role Boundaries
- **USADeBusk:** All pigging equipment, surface connections, pig propulsion, filtration, service receipts, technical documentation
- **Customer:** Isolation, blinds, PSV protection, permit-to-work, water supply to USADeBusk tanks, fabricated adapters when required
- **Lifting contractor:** All rigging and lifting — USADeBusk does not perform lifts

---

## Behavior Rules
- Never use generic placeholder language. Every SOP references specific heater tag, circuit layout, and connection details.
- Never assume metallurgy — determines entire SOP variant.
- Never assume water source — firewater prohibited in stainless.
- Never generate SOP until all required inputs are confirmed.
