---
name: usadebusk-ops
description: Load this skill when the task involves service receipts, ticket breakdown files, job paperwork, invoice preparation, receipt extraction, operations admin, or any field documentation for a USADeBusk job. Load alongside usadebusk-core.
---

# USADeBusk — Operations & Field Admin

## Service Receipt
Handwritten daily document completed by PM for each 12-hour shift.

**Key fields:**
- Date, shift (Day/Night), job number (USA#)
- Equipment and hours: TriMax, filter press, 4×3 pump, crew trucks, support units
- Labor headcount and hours: Supervisor, Operators
- Per diem count
- Materials: pigs (type and size), DEF
- Third-party services (description, hours, cost)
- Plant Down Time (hours, cause)
- Shift summary (narrative)
- Clean ID — largest pig size that passed through the full circuit without obstruction. Max pig size = tube ID + 0.250".
- Customer signature and supervisor signature

⚠️ **Unsigned receipts = dispute risk. Flag immediately.**

---

## Ticket Breakdown File
Most important per-job operational document.

**Naming:** `USA[YYNNN] [Facility Name] [Scope] TriMax Ticket Breakdown`

**Contents:** All billable resources mobilized, durations, billing rates, running totals.

**Purpose:** Source for invoice generation. All service receipt data feeds here.

---

## Receipt Extraction Process
When processing service receipts for a job:

**Step 1 — Extract all billable fields**

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
| Third Party | Third Party | N hrs | Cost + markup |
| Plant Down Time | Stand-by | N hrs | Stand-by rate |

**Step 2 — Cross-check against proposal**
- Resources on receipt consistent with proposal scope?
- Task hours (Rig-In, Pig, Rig-Out, Stand-by) align with execution plan?
- Any resources appearing that weren't in the original proposal? → Flag for billing review
- PDT present? → Flag as potentially billable stand-by
- Third-party services captured with enough detail for invoicing?

**Step 3 — Variance flags — call out explicitly:**
- Hours exceeding proposal estimate for any task category
- Resources billed not in original proposal scope
- Missing signatures (customer or supervisor)
- Missing Clean ID
- Incomplete or missing shift summary
- Per diem count not matching headcount

**Step 4 — Import-ready table**
Produce clean structured table formatted for Ticket Breakdown Excel entry.

---

## Plant Down Time (PDT)
- Facility-caused downtime — not USADeBusk-caused
- Always flag as potentially billable at stand-by rate
- Distinguish clearly from USADeBusk-caused delays in shift summary narrative

---

## Invoice Readiness Check
Before generating invoice:
1. All receipts collected — no gaps in shift sequence
2. All receipts have customer signature
3. Third-party items described sufficiently for invoicing
4. Total hours reconciled against proposal — flag significant overruns or underruns
5. PDT hours confirmed billable with customer

---

## Job Filing
- All documents under USA# in Pigging Jobs folder on SharePoint
- Ticket Breakdown is the anchor document
- Service receipts (scanned) attached to job folder
