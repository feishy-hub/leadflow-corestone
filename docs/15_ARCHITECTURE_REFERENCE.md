# CORESTONE OS — ARCHITECTURE REFERENCE
**Knowledge Transfer Package — Document 15**
**Version 1.0 — July 15, 2026**

**What this document is:** A structured index into `CORESTONE_BLUEPRINT.md`'s "Part 2: Target Enterprise Architecture" — the most detailed, most rigorous design document in the entire project, and one that hadn't been fully incorporated into this Knowledge Transfer Package until this pass. This is exactly the "data-model reference" that Volume 0 was originally supposed to include (per the OS #11 planning conversation) but didn't get built out — this document closes that gap.

**Reuse, not rewrite:** everything below is drawn directly from `CORESTONE_BLUEPRINT.md`, condensed for indexing. The source document remains the authoritative, complete version — go there for anything this index doesn't fully capture.

**Critical framing, stated by the Blueprint itself:** *"No section below is a build order. It is the permanent target... Design now. Build when the platform is ready."* Almost everything in this document is Design: Complete, Build: Phase 2/3/4. Do not mistake the presence of a detailed schema for something being built — cross-reference against `05_MASTER_GAP_ANALYSIS.md` for actual build status.

---

## The 40-Object Business Object Catalog

Every object shares a **Universal Object Interface**: `id`, `org_id` (future multi-company), `project_id`, `status`, `version` (optimistic concurrency), timestamps + attribution, `comments[]`, `attachments[]`, `tasks[]`, `messages[]`, `history[]`, `visibility{}`, `permissions{}`, `notifications[]`, `tags[]`, `ai_metadata{}`, `workflow_state`, `event_subscriptions[]`.

**This universal interface is the formal specification behind V0.09's Enterprise UX Engine and the confirmed-not-built Universal Comments/Attachments (see Master Screen Specification).** The gap between this design and today's flat localStorage arrays (Subsystem Status: "Object Model: PARTIAL — 40 objects defined in Blueprint, implemented as flat arrays, no relationships enforced") is precisely the gap the Supabase migration is meant to close.

**The 40 objects, in dependency order:** Lead → Client → Contact → Property → Project → Survey → Requirements → Plan → Takeoff → Estimate → Estimate Item → Bid Package → Vendor Quote → Proposal → Contract → Job → Budget → Budget Line → Schedule → Task → Purchase Order → Bill → Change Order → Daily Log → Photo → RFI → Selection → Inspection → Permit → Invoice → Payment → Lien Waiver → Subcontractor → Vendor → Document → Message → Notification → Workflow Instance → Gatekeeper Item → Audit Entry.

Full field-level detail for each (key fields, spawns, consumed-by relationships) is in `CORESTONE_BLUEPRINT.md`, "Complete Business Object Catalog" table — not duplicated here in full to avoid the two documents drifting out of sync with each other. **Recommendation for Cursor:** this table is close to being a literal database schema proposal already — it's a strong starting point for the actual Supabase/Postgres schema design, not just documentation.

---

## Event Catalog (23 core events, target architecture)

The Blueprint specifies a full pub/sub Event Engine — `lead.created`, `survey.completed`, `estimate.approved`, `proposal.signed`, `job.created`, `milestone.completed`, `changeorder.approved`, `bill.discrepancy_detected`, `payment.received`, and 14 others — each with default subscribers listed.

**Confirmed current reality (per Subsystem Status and V2.10):** none of this pub/sub infrastructure exists yet. `runBusinessCascade()` is the live approximation — direct function calls simulating what real event subscription would do. The Blueprint is explicit about this itself: *"Current state: Stage transitions are hardcoded per-function. EventEngine is the architectural target."*

**Worth preserving specifically:** the "Gatekeeper Integration" pattern shown for `bill.discrepancy_detected` — event published → Gatekeeper intercepts and holds → AI analyzes root cause → presents a specific recommendation → owner approves → event releases to subscribers. This is a clean, well-thought-through pattern for how high-consequence events should always route through Gatekeeper before subscribers act, and it matches what V2.10's cascade engine already does in practice, just without the formal pub/sub layer underneath.

---

## Workflow Catalog — 10 Named Workflows (WF-01–WF-10)

| ID | Workflow | Steps |
|---|---|---|
| WF-01 | Lead Intake & Qualification | Capture → Score → Assign → Follow-Up Day 1/3/5/7 → Survey trigger |
| WF-02 | Estimate → Proposal | Draft → Internal Review → Owner Approve → Generate Proposal → Send |
| WF-03 | Proposal → Contract | Send → View Alert → Follow-Up → Signed → Job Creation → Deposit Request |
| WF-04 | Job Activation | Contract received → Budget set → Schedule built → PM assigned → Kickoff |
| WF-05 | Change Order | Detected → AI Analysis → Draft CO → Client Approval → Budget Update → CO Executed |
| WF-06 | Sub Bidding | Package created → Subs invited → Bids received → AI Rank → Owner Award → PO issued |
| WF-07 | Milestone Billing | Milestone complete → Photo verification → Invoice prepared → Owner approve → Send → Track |
| WF-08 | Bill Intake & Payment | Bill received → Match PO → Discrepancy check → Approve → Schedule payment → Lien waiver |
| WF-09 | CO Root Cause | Discrepancy detected → AI root cause → Route: CO / Internal / Absorb → Execute |
| WF-10 | Project Closeout | Punch list complete → Final inspection → Final invoice → Lien waivers → Warranty start → Business Brain learns |

**Confirmed current reality:** per the Blueprint's own note, "WF-01, WF-02, WF-03 are partially implemented as hardcoded function chains. Migration to Workflow Engine is Phase 2." WF-04 through WF-10 are design-only. This is the single clearest, most concrete target for what a real Workflow Engine needs to eventually support — a strong candidate for exactly what Cursor should build toward once the backend migration is done.

---

## Permission Model

**Role hierarchy:** Owner → Admin → (Estimator, Sales, Project Manager → Superintendent, Accounting, Office); external: Subcontractor (per-project/scope), Architect (per-project), Inspector (per-job), Vendor (per-PO), Client (per-job).

**Confirmed current reality:** Subsystem Status rates this 📋 DESIGNED — "flat role model only, runtime evaluation engine not built." The Blueprint's target is a true `can(user, action, object)` runtime evaluation, composing role + project + object + visibility rules — not a lookup table. This directly extends V0.19 (Visibility Engine, Architecture Reference AP-019) with the actual permission schema behind it.

---

## Financial Architecture — GL Hooks

**Principle, worth preserving exactly as written:** *"Corestone is not accounting software. But Corestone must be accounting-ready. Every financial object built today must expose the correct hooks for a future General Ledger without requiring refactoring."*

Concretely: every financial object (Estimate Line, Budget Line, Bill, Invoice, Payment) should carry `gl_account_code` and `cost_code` fields **now**, even unpopulated, specifically so the eventual QBO sync (V4.14) is an export operation rather than a schema migration.

**Recommendation for Cursor:** this is a low-cost, high-value discipline to carry into the rebuild from day one — reserving these fields costs nothing today and directly prevents a much more expensive retrofit later, exactly as the Blueprint argues.

---

## Business Brain — Full Target Design

Beyond what Volume 0 (V0.03/V6.03) already covers, the Blueprint specifies exactly what the Business Brain should hold once built: Company Baseline (avg cost/sqft by project type, avg margin, avg timeline, common scope changes), Client Intelligence (payment history, CO tendency, communication style, dispute history), Subcontractor Intelligence (on-time rate, quality score, pricing trends), Vendor Intelligence, Project Patterns, Risk Model, and Scope Intelligence — plus a specific output catalog (Scope gap warning, Budget risk flag, CO probability, Sub recommendation, Follow-up recommendation, Margin alert, Duplicate scope detected, Cash flow warning), each with its trigger and intended recipient.

This is considerably more specific than the Constitution's high-level description and should be treated as the authoritative target spec for V6.03's eventual build.

---

## Mobile Architecture (Phase 3 target)

Offline mode via Service Worker + IndexedDB sync queue (with a specific `SyncQueueItem` schema: id, action, payload, timestamps, retry_count, error), native photo capture tagged to job/trade at capture time, voice input via Web Speech API auto-fill on any field, one-tap daily log with GPS stamp, checkbox-driven punch list with required photo, PWA push notifications, biometric auth for field login.

**This is meaningfully richer than V0.20's current "PWA / Add to Home Screen" entry** — that entry undersold the full design. Treat this document's Mobile Architecture section as the authoritative target, not V0.20 alone.

---

## API Architecture (Phase 2 target)

RESTful + WebSocket, `/api/v1/...` versioning, JWT + API Key auth, cursor-based pagination, consistent `{success, data, meta, errors}` response format, full webhook support. A complete target endpoint list exists in the Blueprint (leads, clients, projects, surveys, requirements, takeoffs, estimates, proposals, contracts, jobs, schedules, purchase-orders, bills, invoices, payments, change-orders, daily-logs, photos, rfis, gatekeeper, workflows, events, reports, webhooks).

**Confirmed current reality:** only `/api/claude` (AI proxy) exists today.

---

## Integration Registry (target)

| Integration | Direction | Status |
|---|---|---|
| Gmail | Inbound | Planned — n8n |
| Twilio | Outbound | Planned |
| Stripe | Bidirectional | Planned — Phase 2 |
| QuickBooks Online | Outbound | Planned — Phase 3, connects last |
| Cloudflare R2 | Outbound | Blocked — DNS access needed |
| Angi | Inbound | Planned — n8n |
| DocuSign | Bidirectional | Optional upgrade (contracts over $50k) |
| Google Calendar | Bidirectional | Planned — Phase 2 |
| Procore (import only) | Inbound | Future |

**This meaningfully expands what the Feature Inventory's Volume 0 entries captured** — V0.24/V0.25 only covered n8n and QBO. Stripe, Cloudflare R2, DocuSign, Google Calendar, and Procore-import are all real, previously-designed integrations not yet reflected as their own Feature Inventory entries. Flagged here rather than silently added to the Feature Inventory, since expanding a "finished" foundation document mid-package should be visible, not silent.

---

## Implementation Phase Map — Cross-Check Against the Gap Analysis

The Blueprint (OS #7/#8) specifies **4 phases**:
- Phase 1 (current): Foundation bug fixes, Lead→Signature flow, Gatekeeper execution, callIntel persistence, post-call AI, email intake
- Phase 2: Supabase migration → Event Engine, Visibility Engine, Workflow Engine, Enterprise Permissions, REST API, Portals, Stripe
- Phase 3: Multiple completed real jobs → Business Brain, Mobile (offline), QBO sync, Reporting Engine, Advanced Job Costing
- Phase 4: Business Brain trained → Predictive estimating, autonomous scheduling, AI-generated proposals, sub performance AI

`05_MASTER_GAP_ANALYSIS.md` (built from the more recent `CORESTONE_SUBSYSTEM_STATUS.md`, July 10) only describes **3 phases**, ending at what the Blueprint calls Phase 3.

**This is a minor, not a major, discrepancy** — Phase 4 isn't contradicted by the July 10 document, it's simply not repeated there, likely because the shorter status document focuses on near-term gates rather than restating the full long-term roadmap. It doesn't meet the bar for a full Decision Reconciliation stop (no business/architecture decision required to resolve it), but it's noted here so Phase 4 — a real, previously-designed part of the roadmap — doesn't quietly disappear just because a more recent document didn't happen to mention it.

---

## Cross-Validation: The "Critical Broken Items" List Matches the Requirements Traceability Matrix Exactly

The Blueprint's "CRITICAL BROKEN ITEMS" list (B-001 through B-006, dated OS #7) maps one-to-one to `06_REQUIREMENTS_TRACEABILITY_MATRIX.md`'s REQ-001 through REQ-006:

| Blueprint ID | Requirements ID | Issue |
|---|---|---|
| B-001 | REQ-001 | Gatekeeper approval was a no-op |
| B-002 | REQ-002 | `takeoffToEstimate()` never saved |
| B-003 | REQ-003 | Tax applied to labor/subs/permits (illegal under NY law) |
| B-004 | REQ-004 | callIntel never written to database |
| B-005 | REQ-005 | Post-call saves only 4 of 12 arrays |
| B-006 | REQ-006 | survey_selections had zero downstream consumers |

**This is a positive finding, not a contradiction** — two independently-maintained documents agree exactly on what was broken. It's good corroborating evidence for the Requirements Traceability Matrix's accuracy, included here so that agreement is visible rather than assumed.
