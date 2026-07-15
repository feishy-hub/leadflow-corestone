# CORESTONE OS — MASTER SCREEN SPECIFICATION
**Knowledge Transfer Package — Document 13**
**Version 1.0 — July 15, 2026**

**Purpose:** A page-by-page inventory of the live application, plus the required UI baseline every screen is supposed to meet, so Cursor knows both what pages exist and what standard they're being held to.

**Important limitation, stated honestly rather than glossed over:** this specification was built from (1) a direct scan of the live source code's 37 page-renderer functions, and (2) the project's own written UI standards (Executive Directive §9.2, the Enterprise UX Engine's confirmed capabilities). It was **not** built from live screenshots or hands-on navigation of the running application — the environment this Knowledge Transfer session ran in could not reach the live deployment (blocked by both network egress rules and the site's own robots.txt; a browser-automation tool exists in principle but wasn't invoked for this pass). Every page below is real — confirmed by its function existing in source — but exact visual layout, colors beyond the confirmed teal-accent scheme, and pixel-level detail are not independently verified here. **Recommendation:** before the rebuild begins, a session with live browser access should walk every page in this list and capture actual screenshots — this document provides the checklist for that walkthrough, not a substitute for it.

---

## Required Baseline — Every List Page (Executive Directive §9.2, ES-014)

Confirmed as a real, built platform capability via the Enterprise UX Engine (V0.09): search/filter bar (live), column sort, row click to open, bulk select + bulk actions, empty states, export CSV + print.

**Per Subsystem Status, this baseline is not confirmed uniformly applied to every single list page** — it's a stated standard and a genuine platform capability, but a page-by-page audit of which pages actually use `uxRegister` to opt into it was not performed this pass. Recommended as a specific checklist item for the pre-rebuild live walkthrough.

## Required Baseline — Every Detail Form (Executive Directive §9.2)

View/Edit/Save/Cancel/Duplicate/Archive/Delete; comments thread; related records section; audit history; AI suggestions where appropriate; attachment support; status indicator; auto-save draft for long forms.

**Same caveat applies:** Universal Comments and Universal Attachments are both confirmed **not built** (Subsystem Status) — meaning this baseline is not yet met by any page, since two of its required elements don't exist as reusable platform features yet. This is a real, specific, honestly-stated gap, not a nitpick.

---

## Page Inventory — 37 Confirmed Pages

| Function | Likely Page | Volume | Notes |
|---|---|---|---|
| `pgSales` | Sales / Lead Pipeline | V1 | Kanban + Today views confirmed |
| `pgEstimates` | Estimates List | V1 | |
| `pgProposals` | Proposals | V1 | |
| `pgBids` | Bids | V1 | |
| `pgJobsV2` | Jobs / Command Center | V2 | Grid + list view confirmed |
| `pgSchedV2` | Schedule | V2 | |
| `pgCOs` | Change Orders | V2 | |
| `pgRequirements` | Requirements | V2 | |
| `pgBudget` | Budget | V2 | |
| `pgDailyV2` | Daily Logs | V3 | |
| `pgPunchList` | Punch List | V3 | |
| `pgPLInline` | Punch List (inline/embedded variant) | V3 | Two related functions — check for redundancy in rebuild |
| `pgRFIs` | RFIs | V3 | |
| `pgPhotoLog` | Photo Log | V3 | |
| `pgWarranty` | Warranty | V3 | |
| `pgSelections` | Selections | V3 | |
| `pgSpecs` | Specifications | V3 | |
| `pgSurveyMgr` | Survey Manager | V1 | Corresponds to V1.08 |
| `pgPlans` | Plans | V1 | Entry point to the Visual Markup Tool (V1.11) |
| `pgBills` | Bills | V4 | |
| `pgInvoices` | Invoices | V4 | |
| `pgPOs` | Purchase Orders | V4 | |
| `pgLienWaivers` | Lien Waivers | V4 | |
| `pgLienWaiversInline` | Lien Waivers (inline/embedded variant) | V4 | Two related functions — same note as Punch List |
| `pgFinV2` | Financial Overview | V4 | |
| `pgGK` | Gatekeeper | V0 | |
| `pgSubsV2` | Subcontractors | V5 | |
| `pgMsgs` | Messages | V5 | |
| `pgMsgsV2` | Messages (v2 variant) | V5 | Two related functions — likely a mid-project upgrade; check which is actually live |
| `pgReportsV2` | Reports | V5 | |
| `pgDashV2` | Dashboard | V5 | |
| `pgDashAI` | Dashboard (AI-focused variant) | V5 | |
| `pgTodos` | To-Dos | — | Not independently mapped to a Feature Inventory entry — flagged for the rebuild to confirm scope |
| `pgComments` | Comments | — | Interesting given Universal Comments is separately confirmed NOT BUILT — this may be a page-specific comment thread rather than the universal cross-object system; worth clarifying in the rebuild |
| `pgEmails` | Email (scanner/paste view) | V0 | Corresponds to V0.14 |
| `pgFiles` | Files | — | Similarly worth checking against "Universal Attachments: NOT BUILT" |
| `pgNF` | (function name not self-explanatory — possibly Notifications) | V0 | Flagged for direct confirmation rather than guessed |
| `pgSettings` | Settings | V5 | |

**Pattern worth flagging directly:** several pages exist in two versions (`pgMsgs`/`pgMsgsV2`, `pgLienWaivers`/`pgLienWaiversInline`, `pgPunchList`/`pgPLInline`). This is consistent with the project's own documented history of iterative rebuilds within the single-file architecture — and consistent with the known "duplicate function declaration" risk pattern (last declaration silently wins). **Recommended pre-rebuild step:** confirm which version of each pair is actually the one currently rendered/reachable in the live app, so the rebuild doesn't preserve a dead code path as if it were current.

---

## Design Language — Confirmed Elements

- Primary accent color: teal (referenced directly in source, e.g., `var(--teal)` used in the follow-up sequence UI)
- Status badges with semantic coloring (e.g., `follow_up` stage rendered with a distinct color/background pairing)
- Card-based layouts for Sales pipeline (kanban-style)
- Grid + list view toggle pattern (confirmed on at least Jobs)

**Not independently confirmed this pass:** typography choices, exact spacing/layout grid, full color palette beyond teal, responsive/mobile-specific layout behavior, dark mode (if any).

---

## Recommendation for the Rebuild

This document should be treated as a **starting checklist for a live UI audit**, not a finished visual spec. The highest-value next step — outside the scope of what this session's tools could reach — is a browser-based walkthrough of all 37 pages (or their currently-reachable subset, given the version-pair ambiguity noted above), captured as screenshots and annotated against the Executive Directive §9.2 baseline, page by page. That walkthrough would upgrade this document from "confirmed page inventory" to a true visual specification.
