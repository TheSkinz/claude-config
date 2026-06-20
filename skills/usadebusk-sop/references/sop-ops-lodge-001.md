---
scope: Standalone lodged/stuck-pig removal procedure (SOP-OPS-LODGE-001, REV 0). Ingested from the Canadian-division PDF; applies to US jobs too. Technical steps reproduced as authored — TriMax-worded as the default. REQUEST-ONLY: never auto-included in any estimate or project SOP, never triggered by heater-card data. See suppression gate below.
ingested-from: USADebusk-Lodged Pig Removal SOP-001-REV0.pdf
---

# Lodged / Stuck Pig Removal Procedure — SOP-OPS-LODGE-001

> **HARD SUPPRESSION GATE — REQUEST-ONLY.** This procedure is standalone. It is NEVER auto-included in any estimate or project-specific SOP, and is NEVER triggered by heater-card data — not multiple tube sizes, reducers, pass count, plug headers, or any other characteristic. It is provided ONLY on explicit customer or user request. Mentioning stuck/lodged pigs unprompted spooks facility reps; it is deliberately kept out of estimates and project SOPs. The benign plug-header "hang-up / misalignment" module in the main SOP skill is a separate thing and must never cross-reference this procedure in customer-facing output.

> **Equipment calibration.** The source text is TriMax-worded throughout (≈98% of jobs run a TriMax) and is kept that way. The directional notation ("Red to Blue / Blue to Red", origin/destination launcher) is port-level and applies unchanged to the rare double-pumper job, where each pump side carries its own Red/Blue ports (see `usadebusk-equipment`). The "pump running the affected pass" is the assembly-level reference (L/C/R on a TriMax; L/R on a double pumper). No notation reconciliation is required.

---

| Field | Value |
|---|---|
| Document Number | SOP-OPS-LODGE-001 |
| Revision | REV 0 |
| Document Type | Operational Procedure — Generic (All Jobs) |
| Contractor | USADeBusk |
| Scope | Lodged pig recovery during closed-loop mechanical decoking of fired heaters |
| Applicable Equipment | TriMax Pumping Unit / Third-party auxiliary pressure pump |

**Revision History** — Rev 0, Mar 2026, USADeBusk, Initial release.

## 1. Purpose
This procedure defines the escalating response to a pig becoming lodged or stuck inside a fired heater process coil during closed-loop mechanical decoking operations. It establishes detection criteria, a three-tier escalation structure, and a step-by-step third-party pump deployment sequence.

This is a generic operational procedure. It applies to all USADeBusk fired heater decoking jobs regardless of heater configuration or client facility. Job-specific engineering limits are established during the pre-job meeting and communicated by the facility contact.

## 2. Scope
This procedure covers pig recovery from the point of detection through successful pig removal and return to normal pigging operations. Scope boundaries:
- **In scope:** Detection, operator-level response, Supervisor-level response, third-party pump deployment, post-recovery return to operations.
- **Out of scope:** Thermal softening methods using steam or other heat sources. If third-party pump deployment is insufficient, further recovery options require site-specific engineering consultation and a separate written procedure.

## 3. Safety Precautions
The following safety requirements apply throughout all tiers of this procedure. Do not progress to the next tier without confirming compliance.
- All personnel must be informed of the stuck pig situation before escalation begins.
- Wear all required PPE per the site-specific Job Safety Analysis (JSA) and facility requirements.
- Maintain clear communication and line-of-sight at all times. If an operator cannot be seen, stop all movement.
- Reduce the pump throttle to idle and disengage the pump clutch before breaking any flanged connection during pig recovery operations.
- Verify all pigging system valves are in the correct position before changing flow direction.
- Inspect all hoses, fittings, and connections for leaks or deficiencies before applying pressure.
- Install whip checks on all high-pressure hose connections prior to energizing the third-party pump.
- Use steel fittings only at all third-party pump connections.
- Do not exceed facility engineering limits as communicated by the facility contact.

> **CAUTION.** At Tier 3, barricade the full area around launchers, receivers, and all high-pressure hose runs before energizing the third-party pump. Ensure no non-essential personnel are within the barricaded zone.

## 4. Detection Criteria
The operator monitors the pump controlling the active pass. A lodged pig is confirmed when all three of the following conditions are observed simultaneously:
- Flow meter reading drops to zero.
- No water return visible at the Effluent Diverter.
- Pressure spike observed on the pump gauge. Note: pressure will fluctuate with throttle inputs — confirm the pig is lodged, not transitioning through a tight section.

Upon confirmation, the operator immediately notifies the Supervisor, who assumes responsibility for the response procedure.

## 5. Escalation Procedure
Each tier must be fully exhausted before escalating. The minimum attempt period at Tiers 1 and 2 is 15 minutes before escalation is authorized.

| Tier | Authorization | Technique | Escalation Trigger |
|---|---|---|---|
| 1 | Operator | Reverse direction + throttle pressure surging | Pig not released after 15 minutes of attempts |
| 2 | Supervisor | Takes over TriMax — more aggressive throttle pressure surging | Pig still lodged after 15 minutes of Supervisor-level attempts |
| 3 | Project Manager + Facility Contact approval | Third-party pump via Fig 200 adapter tool | Pig not recovered — refer to facility engineering |

### 5.1 Tier 1 — Operator Response: Reverse and Pressure Surging
The operator responds first using the controls for the pump running the affected pass. The Supervisor is notified and present. Flow direction is reversed immediately.
1. Confirm the pig is lodged using all three detection criteria in Section 4.
2. Reduce the throttle (potentiometer) to idle RPM.
3. Reverse flow direction using the Directional Switch — away from the restriction, opposite to the direction the pig was traveling when it became stuck.

> **CAUTION.** Return lodged pigs to the origin launcher via reverse flow. Never attempt to force a stuck pig forward through a restriction. Reversing direction moves the pig away from the blockage and into a known clear run.

4. Begin water hammer / pressure surging attempts:
   - Increase throttle from idle to maximum RPM/pressure.
   - Hold maximum RPM briefly (approximately two seconds), then reduce throttle back to idle.
   - Repeat — idle to max to idle — sustaining pressure surges to dislodge the pig.
5. If the pig releases, flow will resume at the Diverter and the flow meter will recover. Return to normal pigging operations.
6. If the pig remains lodged after 15 minutes of pressure surging, reduce throttle to idle and notify the Supervisor. Escalate to Tier 2.

### 5.2 Tier 2 — Supervisor Response: Escalated Pressure Surging
The Supervisor takes direct control of the pump running the affected pass and repeats the pressure surging procedure with a more aggressive approach. Same technique — increased intensity and persistence. Minimum 15 minutes before escalating to Tier 3.
1. Supervisor assumes direct control of the pump running the affected pass.
2. Confirm the directional valves remain set away from the restriction, as established in Tier 1.
3. Execute pressure surging aggressively — maximum throttle cycling, sustained effort for a minimum of 15 minutes.
4. If the pig releases, flow will resume. Return to normal pigging operations.
5. If the pig remains lodged after 15 minutes of Supervisor-level pressure surging, reduce throttle to idle, disengage the pump clutch, and notify the Project Manager. Escalate to Tier 3.

### 5.3 Tier 3 — Third-Party Pump Deployment
The Project Manager notifies the facility contact, and approval to proceed is expected and is typically given without issue.

> **WARNING.** Before energizing the third-party pump, conduct a toolbox meeting covering this section with all personnel on shift. Barricade the full area around launchers, receivers, and all high-pressure lines. Remove all non-essential personnel from the barricaded zone.

**Determining the correct tool installation point:** The third-party pump tool is always installed on the destination launcher — the launcher the pig was traveling toward when it became stuck. Flow is directed away from the restriction, pushing the pig back in the opposite direction of travel.

> **CAUTION.** Action: Return lodged pigs to the origin launcher via reverse flow. Warning: Never attempt to force a stuck pig forward through a restriction. Reversing direction moves the pig away from the blockage and into a known clear run.

**Example** — pig stuck running Red to Blue: The restriction is between the pig and the Blue launcher. Install the tool on the Blue launcher. Set directional valves Blue to Red. The third-party pump pushes the pig back approximately 1–3 feet toward the Red launcher, clearing the restriction. Pig stuck running Blue to Red: tool goes on the Red launcher, valves set Red to Blue.

**Third-party pump setup sequence:**
1. Verify the Trimax pump is at idle and the pump / clutch is disengaged.
2. At the destination launcher (tool installation point): close the launcher valve, trapping water inside the coil. Remove the 3" jetting hose from this launcher. The origin launcher valve and hose connection are left undisturbed.
3. Install the adapter tool on the 3" Fig 200 connection at the destination launcher.
4. Connect the third-party pump to the adapter tool using a pressure-rated hose. Install whip checks on all connections. Use steel fittings only.
5. Verify that bleeder valves on the adapter tool and launcher are functional and accessible.
6. Confirm barricade is in place and all non-essential personnel are clear.
7. Set directional valves to run away from the restriction — toward the origin launcher. Example: tool on Blue launcher, set valves Blue to Red.
8. Open the destination launcher valve.
9. Energize the third-party pump. Assign one operator to remain at the pump gauge for the duration.
10. Slowly ramp pressure. Monitor the gauge continuously. Do not leave the gauge unattended. Do not exceed facility engineering limits as communicated by the facility contact.
11. Continue increasing pressure until the pig is dislodged. The gauge will drop immediately when the pig releases. Shut down the third-party pump as soon as the pressure drop is observed.

> **CAUTION.** If pressure approaches facility engineering limits before the pig is dislodged, shut down the third-party pump immediately. Contact facility engineering before any further pressure escalation.

**Post-release sequence:**
1. Confirm the third-party pump is shut down and de-energized.
2. Use bleeder valves on the adapter tool and launcher to safely vent all residual pressure before disconnecting any fitting.
3. Close the destination launcher valve.
4. Disconnect the third-party pump hose. Remove the adapter tool from the Fig 200 connection.
5. Reconnect the 3" jetting hose to the destination launcher.
6. Re-engage the Trimax pump / clutch. Place the pump in bypass and bring it to operating RPM.
7. Open both launcher valves. Confirm directional valves are set to run away from the restriction — toward the origin launcher, same direction used during third-party pump operation.
8. Disengage bypass. Run the freed pig to the origin launcher and remove it. The restriction is avoided by running the pig in the opposite direction of original travel.

## 6. Post-Recovery Inspection and Strategy Review
Once the pig has been recovered, a full inspection and strategy review must be completed before resuming the decoking sequence.
- Inspect the recovered pig for dimensional changes, damage, or deformation.
- Determine the cause of the lodgment — oversized pig, heavy deposit restriction, tube damage, or reducer. The cause determines the corrective action.
- Develop a sizing strategy before resuming. Do not resume with the same diameter that produced the lodgment without understanding why it stuck.

## 7. Documentation
Field log — Supervisor is responsible for recording the following at minimum:
- Time and duration of the stuck pig event.
- Method by which the pig was ultimately dislodged.
- Condition of recovered pig.
- Root cause determination and corrective action taken.

## 8. Definitions
| Term | Definition |
|---|---|
| Effluent Diverter | Discharge point on the TriMax unit where returning water and pig exit the closed-loop system for observation. |
| Pressure Surging | Operator technique: throttle (potentiometer) is increased from idle to maximum RPM (held approximately two seconds), then reduced back to idle. Repeated over a sustained period to dislodge a lodged pig. Always performed with flow directed away from the restriction. |
| Directional Switch | Valve manifold control on the TriMax unit (Red to Blue / Blue to Red) that reverses water flow direction through the heater circuit. |
| Fig 200 | 3-inch hammer union fitting used at the pump outlets for launcher hose connections. |
| Third-Party Pump | Auxiliary high-pressure pump (diaphragm, pressure washer, or HP unit) deployed when the operator's pump lacks sufficient pressure to dislodge a lodged pig. |
| Adapter Tool | Fitting installed on the Fig 200 connection at the destination launcher to interface the third-party pump with the launcher. |
| Bleeder Valve | Pressure relief valves located on the adapter tool and launcher used to safely vent system pressure after pig recovery. |
| Supervisor | Senior USADeBusk employee on shift. Assumes control of pig recovery response, escalation decisions, and field log documentation. |
| Origin Launcher | The launcher the pig was running from when it became stuck. The pig is recovered to this launcher via reverse flow. |
| Destination Launcher | The launcher the pig was running toward when it became stuck. The third-party pump adapter tool is installed here. |
| Bypass (Plunger) | Control that diverts pump output back to the dirty water tank, used to safely shift flow direction or de-energize the system. |
