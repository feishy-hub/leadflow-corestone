# CORESTONE OS — MASTER GAP ANALYSIS
**Knowledge Transfer Package — Foundation Document 5 of 6+**
**Version 1.0 — July 15, 2026**

**Purpose:** Where the current prototype actually stands versus the full vision — organized so Cursor knows what to preserve as-is, what to rebuild better, and what to build for the first time. This document reuses `CORESTONE_SUBSYSTEM_STATUS.md` (July 10, 2026, Emergency Live-QA session) as its primary source, since that document is itself the project's most rigorous, live-tested self-assessment — not re-derived from scratch. Every row below is cross-referenced to a Feature Inventory ID where one exists.

**Status legend (matches `CORESTONE_SUBSYSTEM_STATUS.md`'s own convention):**
✅ BUILT — implemented, tested, production-quality · ⚠️ PARTIAL — exists but missing key functionality or has known bugs · 📋 DESIGNED — architecture documented, not implemented · ❌ NOT BUILT — does not exist in any form · 🔒 BLOCKED — waiting on a specific dependency

---

## Executive Summary

The honest headline, stated once here rather than buried: **Corestone OS is a real, substantial, partially-working prototype, not the AI-autonomous enterprise system the vision describes yet.** A significant fraction of what looks "done" in the source code has not been proven to work when actually operated by a human — this is not a guess, it's what the project's own July 10 Emergency Live-QA session demonstrated directly (M1 corrected from a claimed 95% to a tested 62%; see Decision Reconciliation DR-001). The gap between "the function exists" and "the workflow actually works end-to-end for the President" is the single most important thing this document tries to make visible.

**What's genuinely strong today:** Gatekeeper, the Business Cascade Engine, Change Orders, Invoices, Bills, Lien Waivers, Punch List, RFIs, and the newly-built Visual Plan Markup & Takeoff Tool are all rated ✅ BUILT or close to it, with real cascading logic behind them (not just forms).

**What's designed but structurally blocked, not just unfinished:** The Visibility Engine, Event Engine, Workflow Engine, Enterprise Permissions, and the full Business Brain all require the Supabase migration (or, for Business Brain, real completed job history) before they can be built at all — they are not behind on effort, they are behind on a dependency.

**What's a real, honest zero:** Client/Sub Portals, Global Search, Universal Comments, Universal Attachments, and true multi-user access do not exist in any form yet.

---

## Gap Analysis by Phase Gate

### Phase 1 (Current) — Foundation + M1–M3
**Gate:** Lead → Proposal → Job → Bills → Payments works end-to-end.
**Status: 62% of M1 internally QA'd (live-tested, not code-read). M2–M3 not started.**

| Area | Status | Gap | Feature Inventory |
|---|---|---|---|
| Sales Pipeline | ⚠️ PARTIAL | Card quick-action buttons missing | V1.01–V1.02 |
| Lead Form | ✅ BUILT | Minor: financing/bid-competition dropdowns pre-filled wrong | V1.01 |
| Call Intelligence | ⚠️ PARTIAL | Post-call persistence: only 4 of 12 fields saved (open item OQ-011) | V1.03–V1.07 |
| Client Intelligence | ⚠️ PARTIAL | Not connected to Business Brain; no historical data | V0.03 |
| Estimates | ⚠️ PARTIAL | Line item full CRUD needs verification | V1.09 |
| Tax Calculation | ⚠️ PARTIAL | Materials-only 8% logic exists but needs re-verification after the tax engine (`calcEstTotal`) was found completely missing and rebuilt this session | V4.10, BR-004 |
| Proposals | ⚠️ PARTIAL | 9-section render and Magic Link client view both need verification | V1.16, V1.20 |
| E-Signature | ⚠️ PARTIAL | `proposal_signed` Gatekeeper item creation needs Executive Testing Mode verification | V1.17, V0.10 |
| Gatekeeper | ✅ BUILT | Fully working, including double-click guard | V0.05 |
| Jobs List/Detail | ⚠️ PARTIAL | Job-scoped navigation (all tabs must show only the selected job's data) unverified | V2.01 |
| Schedule | ⚠️ PARTIAL | Phase management, Gantt view need job-scoping verification | V2.02 |
| Daily Logs | ⚠️ PARTIAL | AI analysis hook and photo attach need verification | V3.01–V3.02 |
| Punch List | ✅ BUILT | Photo-required completion, cascades to final inspection | V3.03 |
| RFIs | ✅ BUILT | Includes plan-revision detection cascade | V3.05 |
| Warranty | ⚠️ PARTIAL | Items not auto-populated from final-payment cascade | V3.10 |
| Invoices | ✅ BUILT | Create, send, record payment, cascades on payment | V4.04 |
| Bills | ✅ BUILT | 3-stage approval, PO link, discrepancy detection cascade | V4.01 |
| Purchase Orders | ⚠️ PARTIAL | List exists; **3-stage Gatekeeper authorization not built** — locked rule DEC-022 not yet enforced | V4.06–V4.07, BR-008 |
| Change Orders | ✅ BUILT | Create, approve, full cascade (budget + contract + PM task + client draft) | V2.05–V2.07 |
| Lien Waivers | ✅ BUILT | Sign + check-all + payment-release cascade | V4.08 |
| Budget | ⚠️ PARTIAL | Budget-vs-actual comparison, per-trade breakdown incomplete | V2.08 |
| Visual Plan Markup & Takeoff | ⚠️ PARTIAL / mostly ✅ BUILT | Full tool built this session; almost none of it human-tested yet | V1.11–V1.15 |

### Phase 2 (Next) — Supabase Migration + Enterprise Engine
**Unlocks:** Visibility Engine, Event Engine, Workflow Engine, REST API, Client/Sub Portals
**Gate:** All M1–M3 milestones pass Executive Testing. **Dependency: Supabase migration.**

| Area | Status | Gap | Feature Inventory |
|---|---|---|---|
| Storage Abstraction / Database Layer | ⚠️ PARTIAL | StorageAdapter wraps localStorage; Supabase adapter not wired | V0.23, V6.01 |
| Object Model | ⚠️ PARTIAL | 40 objects defined in Blueprint, implemented as flat arrays; no enforced relationships; universal comments/attachments/audit/visibility not applied uniformly | AP-016 |
| Visibility Engine | 📋 DESIGNED | Needs Supabase row-level security | AP-019 |
| Event Engine | 📋 DESIGNED | Simulated via direct function calls (`runBusinessCascade`); no real pub/sub | V2.10, AP-022 |
| Workflow Engine | 📋 DESIGNED | 10 workflows designed (WF-01–WF-10), currently hardcoded transitions, no persistent workflow instances | — |
| Enterprise Permissions | 📋 DESIGNED | Flat role model only; no runtime evaluation engine | AP-019 |
| API Architecture | 📋 DESIGNED | Only `/api/claude` exists; no full REST API | — |
| Client Portal | 📋 DESIGNED / ❌ effectively not built | Magic link generated, but client-side render of full proposal, invoices, schedule not confirmed | V5.02 |
| Sub Portal | 📋 DESIGNED | Not built | — |
| n8n / Integration Framework | ⚠️ PARTIAL | Deployed, not connected; Gmail/Twilio/Stripe adapters designed, not wired | V0.24, V6.02 |
| Global Search | ❌ NOT BUILT | High priority per Executive Directive; every record should be searchable | V6.05 |
| Notification Center | ⚠️ PARTIAL | Real functions exist; effectively toast-only in practice — real panel/history not confirmed | V0.11 — corrected per DR-004 |
| Audit Trail Viewer | ⚠️ PARTIAL | Entries are written; no UI to view them | — |
| Universal Comments | ❌ NOT BUILT | Comments on any object — not built | — |
| Universal Attachments | ❌ NOT BUILT | Files on any object — not built | — |
| AI Review System (per-page self-review) | ❌ NOT BUILT | Distinct from the EIS issue-tracker's `eisRunAIReview` — this is Executive Directive §7's page-level self-review, not yet built | ES-007 |

### Phase 3 — Intelligence + Scale
**Unlocks:** Business Brain (real, cross-job), Mobile Architecture, QBO sync, AI Recommendation Engine
**Gate:** Phase 2 complete + real completed job history.

| Area | Status | Gap | Feature Inventory |
|---|---|---|---|
| Business Brain (cross-job) | 📋 DESIGNED | Requires multiple completed real jobs + Supabase; today's `buildJobContext`/`aiBrain` work only within one job | V0.03, V6.03 |
| Mobile Architecture | 📋 DESIGNED | PWA offline mode, sync queue, biometric auth all designed, none built | V0.20 |
| QBO Sync | Deferred by design | 30-day parallel verification required first — this is a business rule, not a delay to fix | V4.14, BR-014 |
| AI Recommendation Engine (org-wide) | 📋 DESIGNED | Depends on Business Brain Phase 3 | V0.03 |

---

## Cross-Cutting Gaps (not tied to one phase)

| Gap | Why It Matters | Feature Inventory |
|---|---|---|
| CS_VERSION tracking discipline broken | Version label (2.7) doesn't match documentation's claimed version (2.10.4) — undermines trust in any version-based status claim | V0.12, DR-003 |
| PO 3-stage Gatekeeper approval not enforced | This is a **locked rule** (DEC-022, "cannot be reversed") — currently not built, meaning the live system can violate its own non-negotiable financial control | V4.07, BR-008 |
| CAD/DWG file support | Would need a real file-conversion service; not attempted | V6.04 |
| True AI auto-polygon room detection | Basic vision-based version exists; less precise than dedicated tools (Togal.ai, Kreo-class) | V1.12 |
| Reminder/follow-up firing engine | AI generates a suggested follow-up plan (text only); no confirmed automated mechanism actually fires reminders on schedule | V6.06 |
| Duplicate function declaration risk | Known, recurring bug class in this single-file architecture — last declaration silently wins, meaning a correct function can be invisibly overridden by a later, worse one. Not a feature gap, but an architectural risk worth Cursor designing around from day one (e.g., module boundaries, linting for duplicate top-level function names) | — |

---

## What This Means for the Rebuild

1. **Trust the live-tested status, not the code-presence status.** Nearly every "✅ BUILT" claim in this project's history that was later actually click-tested needed correction. Cursor should build its own equivalent of the Executive Testing Mode / Testing Standard (`QS-001`–`QS-006`) early, not late.
2. **The single-file localStorage architecture is not a design flaw to inherit — it was always meant to be temporary.** Multiple subsystems (Visibility Engine, Event Engine, Permissions, real multi-user, Client/Sub Portals) are 📋 DESIGNED but structurally blocked purely because they require a real backend. This is the single highest-leverage architectural decision for a clean rebuild: choose the real backend from day one rather than reproducing the localStorage-first path.
3. **The things already rated ✅ BUILT and cascade-tested (Gatekeeper, Change Orders, Bills, Invoices, Lien Waivers, Punch List, RFIs) represent the most-proven business logic in the project.** These are the highest-confidence pieces to preserve the *logic* of, even while rebuilding the implementation.
4. **PO 3-stage approval (BR-008) is the one confirmed case of a locked business rule not being enforced in the live system.** This should not quietly persist into the rebuild — it's flagged here explicitly so it isn't lost.
