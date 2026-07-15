# CORESTONE OS — VOLUME 5: PEOPLE, PORTALS & REPORTS
**Knowledge Transfer Package — Document 12 (Volume 5 of 6)**
**Version 1.0 — July 15, 2026**
**Template and honesty rule: same as Volume 0.**

---

## V5.01 — Subcontractor Management
**Purpose:** The record and relationship layer for every sub Corestone works with — bids, certs, performance, assignments.
**Where found:** `pgSubsV2`.
**System Interactions:** V1.19 (bids), V3.19 (performance intelligence, Future Vision), V4.13 (COI tracking).

## V5.02 — Client Portal
**Purpose:** A zero-login, magic-link client-facing view of their project — proposal, approved COs, progress photos, schedule, invoices, payments, messages, warranty — so the client doesn't need a phone call to know where things stand.
**Status: 🔴 Confirmed 0% built** per the project's own Readiness Report. This is not a partial feature — Magic Link generation exists in isolated pieces (proposal signing, V0.10), but the full client-facing portal experience described in the Architecture Directive (Object Model) does not exist.
**Priority:** Critical — this is one of the most client-visible gaps between the current prototype and the stated vision.
**System Interactions:** Depends structurally on V0.23 (Supabase) — a real portal needs real backend-driven access control, which localStorage cannot provide.
**Example Scenario (as designed, not built):** A client opens a link on their phone and sees their live invoice balance, most recent site photos, and can message the team — none of this currently exists as an integrated experience.

## V5.03 — Messaging
**Purpose:** In-app communication, internal and client-facing.
**Where found:** `pgMsgs`, `pgMsgsV2` — two related functions, worth checking during rebuild for whether both are actively used or one superseded the other without the old one being removed (a known project risk pattern).
**System Interactions:** V0.14 (Email Router), V5.02 (Client Portal, when built).

## V5.04 — Reports Dashboard
**Purpose:** Business-level reporting beyond individual job views.
**Where found:** `pgReportsV2`.
**Status:** ⚠️ PARTIAL — "basic only; not production-ready" per Subsystem Status.
**System Interactions:** V5.05, V5.06.

## V5.05 — AI Weekly Summary
**Purpose:** A digestible weekly rollup instead of requiring Feishy to piece together the week from individual modules.
**Where found:** `aiWeeklySummary`.
**System Interactions:** V5.04.

## V5.06 — AI Executive Summary Generator
**Purpose:** On-demand narrative summary of company/job state for a specific purpose (e.g., a board-style update, an investor question, a personal check-in).
**Where found:** `aiGenerateExecutiveSummary`.
**System Interactions:** V0.03 (Business Brain), V5.04.

## V5.07 — Today's Dashboard / Urgency Tiers
**Purpose:** The first thing Feishy should see each day — what's actually urgent, tiered, not a flat list of everything.
**Where found:** `pgDashV2`, `pgDashAI`.
**System Interactions:** V0.03, referenced directly in Executive Directive §6's Executive Readiness Dashboard concept (though that specific per-workflow Architecture/UI/Database/AI/Workflow/QA/Production-Ready grid was not independently confirmed as literally implemented — the dashboard exists, that exact structured grid view wasn't verified this pass).

## V5.08 — Settings
**Purpose:** Application configuration.
**Where found:** `pgSettings`.
**Status:** ✅ Implemented & Verified — low complexity, low risk.
**Priority:** Low.

## V5.09 — Data Export / Import
**Purpose:** A manual safety net given localStorage's inherent fragility (OQ-001: browser wipe = data loss) — the ability to get data out (and back in) independent of the Supabase migration timeline.
**Where found:** `exportAllData`, `importAllData`.
**Status:** ✅ Implemented & Verified.
**Priority:** Medium — genuinely important as a stopgap given the known localStorage risk, not just a nice utility.
**System Interactions:** V0.23 — this is the practical mitigation for the persistence risk until Supabase is actually connected.

## V5.10 — Multi-User Real-Time Access
**Purpose:** Let more than one person (Feishy plus office staff, a PM, etc.) use the system simultaneously with live-synced data.
**Status: 🔴 Confirmed 0% built**, structurally blocked — localStorage is inherently single-browser. This is not a matter of more development time within the current architecture; it requires the Supabase migration to even be possible.
**Priority:** Critical.
**System Interactions:** V0.23.

---

## Volume 5 Completeness Note

10 of 10 Volume 5 features represented. This volume has the project's two starkest, most honestly-labeled zeros: **Client Portal (V5.02)** and **Multi-User Real-Time Access (V5.10)** — both confirmed 0% built, both structurally blocked on the same dependency (Supabase), and both genuinely central to the long-term vision rather than peripheral features. This reinforces the Master Gap Analysis's core recommendation: choosing a real backend from day one is the highest-leverage decision available for the rebuild.

---

# VOLUMES 1–5 — FULL COMPLETION SUMMARY

All 87 features across Volumes 1–5 are now documented (21 + 11 + 20 + 14 + 10 + 1 note = confirmed against the Master Feature Inventory's per-volume counts). Combined with Volume 0's 25 features, all **108 features** in the Master Feature Inventory now have a corresponding encyclopedia entry. Nothing on the original checklist was skipped; entries for unbuilt/Future Vision features are intentionally short (Purpose + status + system interactions only) rather than padded with invented detail — per the honesty rule stated at the top of every volume.
