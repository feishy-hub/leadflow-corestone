# CORESTONE OS — MASTER CONTEXT DOCUMENT
**Knowledge Transfer Package — Foundation Document 1 of 6+**
**Version 1.1 — corrected after cross-checking against live GitHub source (v1.0 was drafted from conversational memory before the repo was actually read)**

**Purpose of this document:** This is the first document any AI — Claude, ChatGPT, Cursor, or otherwise — must read before doing any work on Corestone OS. It exists so that no future session, and no future rebuild, ever starts from zero.

**Status of this document:** Foundational, approved by Moshe ("Feishy") Felberbaum with ChatGPT review, July 15, 2026. Part of the official Corestone OS Knowledge Transfer Package.

---

## 1. What Corestone OS Is

Corestone OS is a custom, AI-powered construction company operating system, built for Corestone Developers — a residential construction company owned by Moshe Felberbaum, operating in Ulster, Sullivan, and Dutchess Counties, NY.

It is being built to fully replace Buildertrend — starting from Buildertrend's proven feature set (lead intake, proposals, scheduling, financials, client portal, reporting) and adding an AI intelligence layer on top, so the software runs the business rather than the business running the software.

It covers the full job lifecycle: lead → proposal → deposit → survey → takeoff → estimate → bid → award → schedule → daily field operations → change orders → billing → closeout → warranty → referral.

---

## 2. Why It Exists

**Practical:** Buildertrend is generic and costs $299–499/month, and requires a human to manually run almost every workflow. Corestone's business model (cost-plus 20% contractor fee, full financial transparency, $5,000 deposit before proposal work, daily photo/video updates) is specific enough that a generic tool is always a compromise.

**Ambitious:** Feishy doesn't want software that helps him work faster — he wants software that does the work and comes to him only for decisions requiring his judgment. That's an operating company, not project management software.

---

## 3. Project Philosophy — The "2080 Vision"

Built as if the system already exists decades in the future: fully AI-autonomous, Feishy as approver, not operator.

- AI handles 100% of execution; Feishy only approves or rejects.
- Every input — email, photo, text, Zoom call, upload — is auto-ingested, categorized, acted on, logged.
- AI knows the full reason behind every decision, indefinitely.
- Nothing built is ever removed — only upgraded.
- Manual override always exists: if AI hasn't started a flow, Feishy can start it by hand and AI takes over seamlessly.

---

## 4. The One Rule

**Event happens → AI analyzes → AI proposes → Owner approves → System executes → Audit logged.**

AI doesn't ask clarifying questions like a person — it observes, concludes, proposes. The human's only job is Approve/Reject.

---

## 5. The Business Brain

The system's continuous intelligence layer. Builds job context (`buildJobContext`), reasons across it (`aiBrain`, `buildBrainBriefing`), watches for risk (`runBrainRiskMonitor`).

**Verified current state (per `CORESTONE_SUBSYSTEM_STATUS.md`, July 10, 2026):** Status is 📋 **DESIGNED, not built** as a cross-job intelligence system. What exists today (`buildJobContext`, `aiBrain`) works *within* a single job's context — this is real and operational, but it is not the full Business Brain described in the long-term vision. The full Business Brain (cross-job learning, organizational memory, pattern recognition) is explicitly gated to **Phase 3**, requiring multiple completed real jobs plus the Supabase migration.

---

## 6. The Gatekeeper

The founding architectural mechanism — the single queue every AI-generated action must pass through before it becomes real. Verified **✅ BUILT** — `pgGK`, `gkApprove`, `gkReject`, `gkExecuteAction` with 15+ action types, double-click guard on all approvals.

**Important verified exception:** Purchase Orders are supposed to require 3-stage approval (Internal → Customer → Gatekeeper) per a locked, "cannot be reversed" rule (DEC-022). As of the July 10 status, this is confirmed **not yet built** — POs currently do not go through the 3-stage authorization. This is documented honestly in the current Subsystem Status as a known gap targeted for Milestone M2, not a silent violation of the rule.

---

## 7. The AI Employees

**⚠️ This section has a confirmed internal inconsistency across the project's own documents — flagged for your review rather than guessed at. See the companion Decision & Conversation Reconciliation document, entry DR-002, for the full trace.** The short version: one document claims "10 AI Employees," but no document anywhere names more than 8, and the most recent explicit reconciliation (OS #11, Master Feature Inventory entry V0.04) settles on **7**: AI Estimator, AI Superintendent, AI Controller, AI CO Manager, AI Customer Service, AI Purchasing Manager, AI Scheduler. An 8th role, **AI Permit Coordinator**, was proposed once (OS #10) and never confirmed dropped or kept — pending your decision.

Each named employee is a functional AI role — not separate software — routing proposed actions through the same Gatekeeper and reasoning over the same Business Brain job context.

---

## 8. Current Project Status — VERIFIED, not assumed

**The current build is a prototype, not the final product.** Its purpose from here forward is to serve as the knowledge source for a clean-architecture rebuild.

**Architecture:**
- Single `index.html` file, currently **13,322 lines / ~903KB+** (CS_VERSION 2.10.4 as of the most recent session read)
- `localStorage`-based, no real persistence guarantee (cleared on browser wipe)
- GitHub (`feishy-hub/leadflow-corestone`) → Vercel auto-deploy
- AI calls via a Vercel serverless proxy (`/api/claude`) to the Anthropic API — confirmed working
- Supabase (`corestone-os` project) and n8n (on Render) both deployed but deliberately **not connected** — intentionally deferred until the software is proven complete
- QBO integration deferred until a 30-day parallel verification period completes

**Verified functional status — this is the important correction from v1.0 of this document:**

There are two dated status readings in the repo that disagree, and the more recent, more rigorously-tested one is the one that should be trusted (full detail in the Decision Reconciliation document, entry DR-001):

- An older reading (`CORESTONE_ROADMAP.md`, dated OS #8 / July 2) claims M1 is 95% complete and ready for Executive Testing.
- A newer reading (`CORESTONE_MASTER.md` and `CORESTONE_SUBSYSTEM_STATUS.md`, both dated "Emergency Live-QA + Takeoff Build-Out," July 10) found the app **completely non-navigable in production** when actually clicked through rather than read as source — the entire navigation layer, several core forms, and the tax/fee calculation engine were calling functions that did not exist anywhere in the file. This session corrected the real M1 completion to **62%**, and fixed the discovered issues.

**Milestone framework:** M1 (Lead → Proposal → Job) through M5 (Daily Operations). M1 is current, at **62% internally QA'd** as of the most recent verified reading. M2–M5 have not started.

**Department-level readiness (per the July 6 Executive Readiness Report, the most detailed department-by-department confidence snapshot currently in the repo):**

| Department | Usable Today | Confidence |
|---|---|---|
| Sales / Leads | ✅ Yes | 85% |
| Jobs (Command Center) | ✅ Yes | 90% |
| Financial (Bills/Invoices/POs) | ✅ Yes | 85% |
| Subcontractors | ✅ Yes | 80% |
| Proposals | 🟡 Mostly | 80% |
| Estimating | 🟡 Mostly | 70% |
| Change Orders | 🟡 Mostly | 75% |
| Field Ops (Daily/Punch/RFIs) | 🟡 Mostly | 70% |
| Warranty | 🟡 Mostly | 70% |
| Schedule | 🟡 Mostly | 65% |
| Reports | 🟡 Mostly | 65% |
| Business Brain | 🟡 Partial | 50% |
| Client Portal | 🔴 No | 10% |
| Data Persistence (real, multi-user) | 🔴 No | 0% |

*Note: these confidence numbers predate the July 10 Emergency Live-QA session's discovery of the non-navigable production state, so several of them (especially Sales/Leads at 85% and Jobs at 90%) are themselves now suspect and should be treated as historical, not current, pending a fresh Executive Testing pass. This is flagged, not silently corrected — see Decision Reconciliation DR-001.*

**Notable, freshly-built but explicitly unverified-by-humans capability:** A full Visual Plan Markup & Takeoff Tool was built in the July 10 session to match Procore/PlanSwift/Bluebeam feature parity (scale methods, measurement tools, assemblies, markup/annotation layer, CSV export). The session's own closing note states plainly: *"Almost none of tonight's new Markup Tool surface area has been clicked by a human yet. This is the single most important thing to live-test before relying on it for a real bid."*

**Known, honestly-labeled gaps (not forgotten, deliberately not yet attempted):**
- CAD/DWG file support (needs a real file-conversion service)
- True AI auto-polygon room detection (a basic vision-based version exists, less precise than dedicated tools like Togal.ai/Kreo)
- Real multi-user simultaneous access (structurally blocked until Supabase)
- PO 3-stage Gatekeeper authorization (targeted for M2)

---

## 9. Major Master Documents That Already Exist

**GitHub governing documents** (`feishy-hub/leadflow-corestone`, repo root — verified by direct listing, July 15, 2026):
`CORESTONE_MASTER.md`, `CORESTONE_ROADMAP.md`, `CORESTONE_EXECUTIVE_DIRECTIVE.md`, `CORESTONE_CONSTITUTION.md`, `CORESTONE_SUBSYSTEM_STATUS.md`, `CORESTONE_BLUEPRINT.md`, `CORESTONE_DECISIONS.md`, `CORESTONE_OPEN.md`, `CORESTONE_TESTING_STANDARD.md`, `CORESTONE_COMPLETE_MASTER.md`, `CORESTONE_RELEASES.md`, `CORESTONE_REQUIREMENTS.md`, `CORESTONE_LEDGER.md`, `CORESTONE_ARCHITECTURE_DIRECTIVE_OBJECT_MODEL.md`, `CORESTONE_ARCHITECTURE_LOCKDOWN.md`.

**Other gathered artifacts (project knowledge base):** `Corestone_OS_Specification.pdf`, `Corestone_OS_Feature_List_1.pdf`, `corestone-os-master-plan.html`, `corestone_full_schema_1.sql`, `corestone_all_pages.html`, plus the original Lovable-era build prompts (`Corestone_OS_Master_Lovable_Prompt_FINAL.txt`, `Tomorrow_Lovable_Master_Prompt.txt`) — historical, pre-dating the current GitHub/Vercel architecture.

**Also part of the source of truth, being systematically reconciled:** the full run of working sessions (OS #1 through OS #11 and counting).

---

## 10. Long-Term Vision

A fully AI-autonomous construction company OS where the Business Brain learns across every job/client/sub, every department is genuinely run by its AI Employee, Supabase enables true real-time multi-user operation, QBO is safely integrated, and the system is provably solid enough to hand to another owner or market.

---

## 11. Current Phase of the Project

**Documentation & Knowledge Transfer.** Not building, not patching the prototype further. The current `index.html` is the knowledge source being mined for a clean-architecture rebuild in Cursor.

---

## 12. Immediate Objective

Complete the Knowledge Transfer Package foundation documents (Master Context → Feature Inventory → Decision Reconciliation → Business Rules/Constitution → Gap Analysis → Requirements Traceability Matrix), then the Volume 0–5 encyclopedia, Master Screen Specification, and Definition of Done — all pushed permanently to GitHub under `/docs`, with every open contradiction surfaced to Feishy rather than silently resolved.

---

## Document Change Log

| Version | Date | Change | Reason |
|---|---|---|---|
| 1.0 | July 15, 2026 | Initial draft | Written before repo access; based on conversational history only |
| 1.1 | July 15, 2026 | Corrected Sections 5, 6, 7, 8 | Cross-checked against actual GitHub source; found and preserved (not silently fixed) two material contradictions — see `02_DECISION_RECONCILIATION.md` |

*This document should be corrected, not replaced, if anything here is found wrong later — nothing about this project gets thrown away, only upgraded.*
