# CORESTONE OS — VOLUME 2: JOB EXECUTION
**Knowledge Transfer Package — Document 9 (Volume 2 of 6)**
**Version 1.0 — July 15, 2026**
**Template and honesty rule: same as Volume 0.**

---

## V2.01 — Job Command Center
**Purpose:** The central hub for an awarded job — everything about that one job, in one place, so nothing requires hunting across disconnected tabs.
**Where found:** `pgJobsV2`.
**Status:** ⚠️ PARTIAL — grid/list view and card click confirmed working (a nested-card bug was fixed OS #8); job-scoped navigation (do all tabs actually show only this job's data?) still needs verification per Subsystem Status.
**System Interactions:** The parent context for nearly every other Volume 2–4 feature — Schedule, Budget, Change Orders, Daily Logs, Financial all nest under a job.
**Example Scenario:** Opening the Goldstein job should scope every subsequent tab (Financial, Schedule, Messages) to Goldstein only — this specific behavior is the one flagged as unverified.

## V2.02 — 13-Phase Schedule
**Purpose:** A standard phase sequence (from the original OS #1 specification) that gives every job a predictable structure, rather than reinventing scheduling logic per project.
**Where found:** `pgSchedV2`.
**Status:** ⚠️ PARTIAL — exists; Gantt-style phase management and job-scoping both need verification.
**System Interactions:** V2.03 (AI generation), V2.04 (auto-task triggers), V3.16 (Inspection Workflow, Future Vision — designed to hook into phase completion).

## V2.03 — AI Generate Schedule
**Purpose:** Produce a first-draft schedule automatically from job scope rather than building one from a blank Gantt chart every time.
**Where found:** `aiGenerateSchedule`.
**System Interactions:** V2.02.
**Lifecycle:** Implemented, not independently live-verified this pass.

## V2.04 — Auto-Task Triggers
**Purpose:** When a phase starts or completes, automatically create the tasks that phase requires, instead of relying on someone remembering to.
**Status:** **Needs Owner Review** — described in the Master Specification; no distinct confirming evidence found in the live source scan this pass, separate from the general Business Cascade Engine (V2.10).
**System Interactions:** V2.02, V2.10.

## V2.05 — Change Order Detection
**Purpose:** Catch scope changes as they happen — in a call, a daily log, a client message — instead of discovering them only when a bill doesn't match expectations.
**Where found:** `aiCOManager`, `aiDetectScope`.
**Status:** ⚠️ PARTIAL — the CO cascade fires correctly on manual approval (✅ BUILT per Subsystem Status); **client message parsing for CO triggers is confirmed not built**, meaning the "detection" half of this feature's name currently understates what's real — it's closer to "CO processing" than true automatic detection from arbitrary sources yet.
**System Interactions:** V2.06, V2.07, V3.18 (Zoom webhook auto-CO, Future Vision).
**Example Scenario:** A client says on a call "let's add the kitchen island" — under the full vision this should trigger CO detection automatically; currently this depends on a human noticing and manually starting the CO.

## V2.06 — AI Draft Change Order
**Purpose:** Once a scope change is identified, draft the CO (pricing, description) rather than starting from a blank form.
**Where found:** `aiDraftCO`.
**System Interactions:** V2.05, V2.07, V1.19 (a real, confirmed pattern: approving a sub's bid can auto-draft a CO priced from that bid).

## V2.07 — Change Order Approval Flow
**Purpose:** Client and/or owner sign-off on a CO before it becomes binding.
**Where found:** `pgCOs`.
**Status:** ✅ Confirmed strong — Subsystem Status rates full Change Orders (create, approve, cascade to budget + contract + PM task + client draft) as ✅ BUILT, one of the most complete subsystems in the project. Marked "Needs Owner Review" in the Feature Inventory only regarding the *schedule-shift-ask* nuance: the system is confirmed to explicitly ask before moving dates on CO approval rather than silently shifting the schedule — worth double-checking this exact UX is preserved in the rebuild, since it's a deliberate, considered design choice, not a default.
**System Interactions:** V0.05 (Gatekeeper), V2.08 (Budget), V2.10 (Cascade).

## V2.08 — Budget vs. Actual Tracking
**Purpose:** See in real time whether a job is on budget, not just at closeout.
**Where found:** `pgBudget`.
**Status:** ⚠️ PARTIAL — exists; budget-vs-actual comparison and per-trade breakdown both confirmed incomplete.
**System Interactions:** V2.09 (Budget Guard), V4.11 (Cash Flow), V4.12 (AI Controller).

## V2.09 — AI Budget Guard
**Purpose:** Warn before a job goes over budget, not after.
**Where found:** `aiBudgetGuard`.
**System Interactions:** V2.08.

## V2.10 — Business Cascade Engine
**Purpose:** The mechanism that makes "one action triggers everything downstream" actually happen — this is the load-bearing piece behind Executive Directive §4/§5's "no isolated buttons" standard.
**Where found:** `runBusinessCascade`.
**Status:** ✅ BUILT — confirmed with 6 real cascade types: Change Order, Payment, Punch List, RFI, Lien Waiver, Bill. This is one of the strongest-verified pieces of the entire system.
**AI Knowledge:** Per Subsystem Status, this is currently the practical stand-in for the fully-designed Event Engine (📋 DESIGNED, Phase 2) — it works via direct function calls rather than a true pub/sub event bus. That's an important distinction for the rebuild: the *behavior* (cascading side effects) is proven and worth preserving; the *mechanism* (direct calls vs. real event bus) is exactly the kind of thing a clean architecture should upgrade.
**System Interactions:** Nearly everything — this is the connective tissue of the whole application.
**Example Scenario:** A payment is recorded → invoice status updates → budget actual updates → dashboard updates → audit entry written — one action, six-plus downstream effects, confirmed real via this engine.

## V2.11 — Requirements Tracking
**Purpose:** Track what the client actually wants, sourced from survey/call/email/daily log/manual entry, so nothing gets built or estimated based on a stale or incomplete understanding of scope.
**Where found:** `pgRequirements`.
**Status:** Exists; the deeper vision (REQ-019 through REQ-024 — status lifecycle, estimate linking, uncosted-requirement flagging, client-visible requirements) is mostly still "Captured" (not built) per the Requirements Traceability Matrix.
**System Interactions:** V1.08 (Survey), V1.09 (Estimate).

---

## Volume 2 Completeness Note

11 of 11 Volume 2 features represented. The standout finding: **the Business Cascade Engine (V2.10) and Change Order flow (V2.07) are genuinely among the strongest, most-verified parts of the entire system** — real multi-step cascading logic, not just status flags. These are high-confidence pieces of business logic worth preserving carefully in the rebuild, even while the underlying mechanism gets upgraded to a true event-driven architecture.
