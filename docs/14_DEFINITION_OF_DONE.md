# CORESTONE OS — DEFINITION OF DONE
**Knowledge Transfer Package — Document 14 (Final)**
**Version 1.0 — July 15, 2026**

**Purpose:** One clear answer to "is this feature actually done?" — synthesized from the project's own existing standards (`CORESTONE_TESTING_STANDARD.md`, `CORESTONE_EXECUTIVE_DIRECTIVE.md`) rather than invented fresh, since the project already spent real effort defining this rigorously. This document exists because the single biggest lesson of this entire Knowledge Transfer effort is that "the code exists" and "it's done" are not the same claim — the July 10 Emergency Live-QA session proved that directly, correcting a 95% completion estimate to 62%.

---

## A feature is NOT done because:
- A function with the right name exists in the source code
- It was described as complete in a session's closing summary
- It "should work" based on reading the logic
- A status document says ✅ BUILT (status documents in this project have been wrong before — see Decision Reconciliation DR-001 and DR-004)

## A feature IS done only when ALL of the following are true:

### 1. It passes the Executive Acceptance Testing Standard (reused directly from `CORESTONE_TESTING_STANDARD.md`, QS-001–QS-006)
Every one of the 9 mandatory sections must be satisfied for the relevant business scenario:
1. **Business Scenario** stated in plain business language
2. **What I Should Do** — exact steps, numbered, no ambiguity
3. **What Corestone Should Do Automatically** — every downstream effect listed
4. **What I Should Verify** — exact location + exact expected result for each
5. **What Should NOT Happen** — specific failure conditions named
6. **Edge Cases** — minimum 5, in the `EC-#` format
7. **AI Review** — the AI's reasoning explained in business language, including why it did *not* act if it didn't
8. **Executive Pass/Fail** — a single explicit verdict, marked by the President himself based on direct observation, not by Claude on the President's behalf
9. **Overall Company Feel** — did it feel like running a company or clicking through software (package-level, not per-scenario)

### 2. It was tested live, not read from source (Decision Reconciliation DR-001's core lesson)
Code presence is a necessary but not sufficient condition. The specific action must have actually been clicked/performed by a human (or, at minimum, a scripted live end-to-end test) in the running application.

### 3. It survived the specific failure modes this project has already learned to check for
- Double-click / duplicate submission (`guardAction`/`releaseAction` pattern)
- Browser refresh mid-workflow — no duplicate on reload, no data lost
- Cancel halfway through — no orphaned records, no orphaned Gatekeeper items
- Empty/invalid input — clear error, no silent failure
- Navigate-away mid-action — either completes or cleanly doesn't, never a partial state

### 4. It respects every locked business rule that applies to it
Cross-check against `04_BUSINESS_RULES_CONSTITUTION.md`'s BR- entries. A feature that technically works but silently violates a locked rule (the way PO creation currently bypasses the 3-stage Gatekeeper approval, BR-008) is **not done** — it's a compliance gap wearing a working feature's clothes.

### 5. Every downstream effect actually fires (Executive Directive §5)
Statuses are outcomes of business actions, never manual toggles. If approving a Change Order is supposed to update the budget, notify the PM, and update the client-facing draft — all three must be independently verified, not assumed because the CO's own status field changed.

### 6. It's reflected in the documentation, the same session it's built (Executive Directive §1, §12, ES-001, ES-012)
Blueprint, Master document, Decisions, Open Items, Testing Standard, and subsystem status all updated before the session ends — not left for "next time." This project's own history (Decision Reconciliation DR-001 through DR-005) shows exactly what happens when this step is skipped: documents drift out of sync with reality, sometimes within the same file.

### 7. It meets the Enterprise UX baseline for its page type (Executive Directive §9.2, ES-014)
List pages: search, sort, filter, bulk actions, empty states, export. Detail pages: view/edit/save/cancel/duplicate/archive/delete, comments, related records, audit history, attachments, status indicator. (Note: as of this writing, Universal Comments and Universal Attachments don't exist as platform features yet — see Master Screen Specification — so no page can fully meet this baseline until those are built. This is stated here deliberately: the Definition of Done should not quietly get watered down to match what's currently possible.)

### 8. A human confirmed it felt like running the business, not testing software (QS-002, Section 9)
This is the project's own most distinctive quality bar, and it's subjective by design — it's meant to catch the gap between "technically correct" and "actually usable by a construction company president under real conditions."

---

## What This Means Concretely for the Feature Inventory's Status Labels

Cross-referencing this Definition of Done against `02_MASTER_FEATURE_INVENTORY.md`: **of the 108 features catalogued, only a small number currently qualify as fully "Done" by this standard** — Gatekeeper (V0.05), the Business Cascade Engine (V2.10), Change Orders (V2.07), Bills (V4.01), Invoices (V4.04), Lien Waivers (V4.08), Punch List (V3.03), and RFIs (V3.05) are the strongest candidates, each confirmed ✅ BUILT with real cascading behavior in `CORESTONE_SUBSYSTEM_STATUS.md`. Everything labeled "Implemented (Not Fully Verified)" in the Feature Inventory — the largest category by far — is explicitly **not yet Done** by this definition, even though the underlying code is real. This isn't a criticism of the work; it's the honest gap this whole Knowledge Transfer Package exists to make visible rather than paper over.

---

## Recommendation for the Rebuild

Cursor should treat this Definition of Done as a gate, not a suggestion — a feature doesn't move from "built" to "done" in project tracking until it passes all 8 criteria above. Given how much of this project's own history (5 separate Decision Reconciliation entries) traces back to skipping steps 6 and 2 specifically, those two are worth the most deliberate discipline in whatever process Cursor adopts.

---

# END OF KNOWLEDGE TRANSFER PACKAGE — CORE DOCUMENTS COMPLETE

All 14 documents are now live in `github.com/feishy-hub/leadflow-corestone/docs`:
Index → Master Context → Feature Inventory → Decision Reconciliation → Business Rules & Constitution → Gap Analysis → Requirements Traceability Matrix → Volume 0 → Volumes 1–5 → Master Screen Specification → Definition of Done.

**What remains as recommended (not completed) follow-up work, stated honestly:**
1. A live browser walkthrough of all 37 confirmed pages, to upgrade the Master Screen Specification from a code-verified inventory to a true visual spec
2. Full resolution of the open items tracked in `03_DECISION_RECONCILIATION.md` (DR-003, DR-005) and the 11 Feature Inventory entries marked Needs Owner Review
3. A systematic, full re-verification pass against the Definition of Done for all 108 features — this package identifies what's likely done vs. not, but a complete pass was outside what live-testing (as opposed to documentation work) could accomplish in this session
