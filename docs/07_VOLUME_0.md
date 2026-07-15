# CORESTONE OS — VOLUME 0: VISION, PHILOSOPHY, REFERENCE & CROSS-CUTTING SYSTEMS
**Knowledge Transfer Package — Document 7 (Volume 0 of 6)**
**Version 1.0 — July 15, 2026**

**Purpose:** This is the encyclopedia's front matter — every concept a developer needs before touching any workflow-specific volume (1–5). It uses the 19-field template agreed in OS #11 so that every feature is documented the same way, everywhere, permanently.

**The 19-field template (reused exactly as agreed, not redesigned):**
1. Feature Name · 2. Purpose (the *why*, not just the *what*) · 3. Where the user finds it · 4. What triggers it · 5. What data loads automatically · 6. What the AI immediately understands · 7. Every button/menu/option/field/checkbox/dropdown/popup/keyboard shortcut · 8. Every calculation/validation/business rule · 9. Every AI decision/recommendation · 10. Every automation/notification · 11. Every record created/updated · 12. Every module affected/permission/approval required · 13. Every possible outcome/exception/edge case · 14. What each role sees (owner/office/superintendent/client/sub) · 15. Feature Lifecycle · 16. AI Knowledge · 17. Failure Recovery · 18. System Interactions (full chain reaction) · 19. Example Scenario

**Honesty rule applied throughout:** where a feature is not yet built (Future Vision, Planned, or Historical/Superseded per the Feature Inventory), the operational fields (7, 9, 10, 13, 15–18) are marked **N/A — not yet built** rather than invented. Fabricating UI details for unbuilt features would actively mislead a rebuild. Only Purpose, source, and design intent are populated for those entries.

---

## V0.01 — The 2080 Vision
**Purpose:** The organizing philosophy behind every other decision in this project: build as if the system already operates 50+ years in the future, fully AI-autonomous, so that every design choice defaults toward "AI does it" rather than "add a manual step." Without this framing, Corestone OS is just another construction app; with it, every feature gets asked "could AI have done this without being told?"
**Where found:** Not a UI element — governs all UI design decisions.
**Triggers:** N/A — a design principle, not a runtime feature.
**Auto-loaded data:** N/A.
**AI understanding:** Every AI function in the system is written to propose rather than ask — this is the direct behavioral consequence of V0.01.
**Controls:** N/A.
**Calculations/rules:** N/A.
**AI decisions:** N/A (this entry governs *how* other AI decisions are made, not a decision itself).
**Automations:** N/A.
**Records touched:** N/A.
**Modules/permissions:** All.
**Edge cases:** The main real-world edge case is Feishy needing to work faster than AI can propose — this is why Manual Override (V0.06) exists as the escape valve.
**Role views:** N/A.
**Lifecycle:** Permanent — established OS #1, never revised.
**AI Knowledge:** This principle is why the Business Brain (V0.03) is expected to eventually explain its own reasoning with confidence levels, not just output answers.
**Failure Recovery:** N/A.
**System Interactions:** Every other Volume 0 entry is a specific implementation of this principle.
**Example Scenario:** A client texts asking for a kitchen island. Under V0.01, the system should detect this, evaluate whether it triggers a Change Order, draft one, and present it to Gatekeeper — not simply log the text message and wait for a human to notice it.

---

## V0.02 — The One Rule
**Purpose:** The single behavioral contract every workflow must satisfy: Event → AI analyzes → AI proposes → Owner approves → System executes → Audit logged. This exists so that no matter how many modules get built, they all behave predictably the same way from the owner's perspective.
**Where found:** Implemented structurally via the Gatekeeper (V0.05) — every AI-initiated action in the live system funnels through `pgGK`/`gkApprove`/`gkReject`/`gkExecuteAction`.
**Triggers:** Any business event the system detects (new lead, bill received, photo uploaded, client message, etc.).
**Auto-loaded data:** Full relevant job/client context via `buildJobContext`.
**AI understanding:** The AI's job is to reach a proposal, not a question — confirmed by the near-total absence of "ask the user a clarifying question" patterns in the AI prompt library (`aiBrain`, `aiEstimator`, `aiController`, etc. all return structured proposals, not questions).
**Controls:** Approve / Reject / Snooze / Delegate, on every Gatekeeper card.
**Calculations/rules:** N/A directly — this rule governs *when* calculations trigger approval, not the calculations themselves.
**AI decisions:** Every `ai*` function in the codebase (38 confirmed) is an implementation of this rule's "AI analyzes → proposes" half.
**Automations:** `gkExecuteAction` is the "system executes" half, confirmed to handle 15+ distinct action types.
**Records touched:** An audit-relevant record for every approved action (though a dedicated, viewable Audit Trail UI is confirmed **not built** — entries are written but there's no viewer; see Gap Analysis).
**Modules/permissions:** All.
**Edge cases:** What happens when AI proposes something wrong? Currently: Feishy rejects it via Gatekeeper — there is no confirmed "AI learns from rejection" feedback loop yet (that would require the cross-job Business Brain, V6.03, which isn't built).
**Role views:** Feishy sees every Gatekeeper card; no other role currently has a Gatekeeper-equivalent queue (Subcontractor/Client portals aren't built — V5.02).
**Lifecycle:** Permanent, established OS #1.
**AI Knowledge:** This is the rule the entire AI Employee model (V0.04) operates under — no AI Employee is permitted to bypass Gatekeeper for financial or contractual actions.
**Failure Recovery:** If a Gatekeeper action fails mid-execution, current behavior is not independently confirmed — this is a real open question for Executive Testing (see Testing Standard, QS-002, Section 5 "What Should NOT Happen").
**System Interactions:** Governs V0.03 (Business Brain), V0.04 (AI Employees), V0.05 (Gatekeeper) directly, and indirectly every workflow in Volumes 1–5.
**Example Scenario:** A bill arrives that doesn't match its PO. `aiCheckBill` detects the mismatch → `pgGK` shows a card explaining the discrepancy and a recommended resolution → Feishy approves or rejects → `gkExecuteAction` updates the bill status accordingly.

---

## V0.03 — Business Brain (Per-Job)
**Purpose:** To give the AI a full, current picture of one job's reality — budget, schedule, risk, client sentiment — so recommendations are grounded in that job's actual state rather than generic advice.
**Where found:** Powers AI-generated content across Jobs, Financial, and Field Ops pages; not a standalone screen itself.
**Triggers:** Called by other functions needing job context (e.g., before generating a briefing, before risk-checking a budget).
**Auto-loaded data:** Everything `buildJobContext` assembles: budget vs. actual, schedule position, open Gatekeeper items, recent daily logs, photo history.
**AI understanding:** `aiBrain` is the reasoning layer that consumes `buildJobContext`'s output.
**Controls:** N/A directly — surfaces through other pages' AI-assist buttons.
**Calculations/rules:** Risk scoring logic lives in `runBrainRiskMonitor` — specific thresholds not independently verified this pass.
**AI decisions:** `buildBrainBriefing` produces the daily-priorities style output referenced in Executive Directive §6 (Executive Readiness Dashboard).
**Automations:** N/A confirmed beyond the functions above — no scheduled/cron trigger confirmed.
**Records touched:** Reads broadly; writes are not clearly separated from the modules it draws context from.
**Modules/permissions:** Jobs, Financial, Field Ops.
**Edge cases:** A brand-new job with no history yet — behavior not independently confirmed.
**Role views:** Feishy-facing only, currently.
**Lifecycle:** Phase 1 (per-job) is live; Phase 3 (cross-job) is Future Vision — see V6.03.
**AI Knowledge:** This is explicitly **not** the full Business Brain described in Constitution §11 — that requires learning across completed jobs, which requires the Supabase migration and real job history.
**Failure Recovery:** Not independently confirmed.
**System Interactions:** Feeds V0.04 (AI Employees), each of whom reasons using Business Brain context for their domain.
**Example Scenario:** Before answering "how is the Goldstein job doing," `aiBrain` pulls current budget-vs-actual, open RFIs, and schedule position via `buildJobContext`, then reasons over that specific data rather than answering generically.

---

## V0.04 — AI Employees Model
**Purpose:** To organize AI capability around the same mental model a human staff would use — named roles with clear departmental ownership — rather than a flat pile of unrelated AI functions, so the system's own architecture mirrors how a construction company actually thinks about work.
**Where found:** Distributed across every module — each AI Employee's functions live wherever their department's work happens (Estimator functions in Estimating, Controller functions in Financial, etc.).
**Triggers:** Each employee's individual functions have their own triggers (see relevant Volume 1–5 entries).
**Auto-loaded data:** Business Brain job context (V0.03), per employee.
**AI understanding:** Each employee's prompts are scoped to their department's business logic (e.g., `aiController`'s prompts reference cost-plus/tax rules; `aiEstimator`'s reference takeoff/CSI categories).
**Controls:** N/A directly.
**Calculations/rules:** N/A directly — see each employee's domain module.
**AI decisions:** One representative function per employee, confirmed live: `aiEstimator`, `aiSuperintendent`, `aiController`, `aiCOManager`, `aiCustomerService`, `aiPurchasingManager`. No dedicated `aiScheduler` function was found in the live source scan — the Scheduler role's actions appear to route through `aiGenerateSchedule` and related schedule functions rather than a single named function, worth noting for Cursor.
**Automations:** N/A directly.
**Records touched:** N/A directly — see each department's Volume entry.
**Modules/permissions:** All departments.
**Edge cases:** Overlap between employees on cross-functional actions (e.g., a Change Order touches both AI CO Manager and AI Controller) — resolved by the Business Cascade Engine (V2.10), not by employee-to-employee negotiation.
**Role views:** Feishy-facing; employees don't have distinct "personas" visible in the UI beyond their functional outputs.
**Lifecycle:** Roster finalized 7 employees, per Decision Reconciliation DR-002.
**AI Knowledge:** AI Permit Coordinator (proposed OS #10) was never implemented — see historical note below.
**Failure Recovery:** N/A directly.
**System Interactions:** Every AI Employee routes proposed actions through Gatekeeper (V0.05).
**Example Scenario:** AI Purchasing Manager (`aiCheckSubCerts`) flags an expiring COI on a subcontractor before a new PO would be issued to them.

*Historical note, preserved per DR-002: **AI Permit Coordinator** was proposed alongside the other 7 roles in OS #10 but never implemented or formally approved. Permit/inspection tracking for Ulster/Sullivan/Dutchess counties remains a real, valued, unbuilt capability (see V1.21, V3.16) — this role may be worth reviving as an actual 8th employee in the rebuild, but that's Feishy's call, not assumed here.*

---

## V0.05 — Gatekeeper
**Purpose:** The single point where every AI-proposed action becomes real. This is the mechanism that makes "AI does 100% of execution, owner only approves" actually safe rather than reckless.
**Where found:** `pgGK` — its own dedicated page/tab.
**Triggers:** Any AI function proposing an action that has financial, contractual, or client-facing consequence.
**Auto-loaded data:** The proposed action, the AI's reasoning, relevant job context.
**AI understanding:** `gkAI` — AI assist within the Gatekeeper page itself (e.g., summarizing a batch of pending items).
**Controls:** Approve, Reject, Delegate, Snooze — confirmed via `gkApprove`, `gkReject`, `gkDelegate`, and a snooze UI referenced in the Constitution.
**Calculations/rules:** None inherent to Gatekeeper itself — it displays whatever the proposing function calculated.
**AI decisions:** The proposing decision happens upstream (by whichever `ai*` function generated the item); Gatekeeper itself doesn't decide, it presents.
**Automations:** `gkExecuteAction` — confirmed to handle 15+ action types, executing whatever the approved item specifies.
**Records touched:** Varies per action type — a proposal signature, a bill payment, a change order approval, etc.
**Modules/permissions:** All modules feed into this one queue.
**Edge cases:** Double-click guard confirmed built (`guardAction`/`releaseAction` per Subsystem Status) — prevents duplicate execution on rapid double-approval.
**Role views:** Feishy only, currently — no delegated-approval role UI confirmed distinct from Feishy's own view.
**Lifecycle:** Built and reasonably mature — the most-verified subsystem in the project (✅ BUILT across Queue, Executor, and Double-Click Guard per Subsystem Status).
**AI Knowledge:** N/A beyond what's covered above.
**Failure Recovery:** Not independently confirmed for mid-execution failures (see V0.02's Failure Recovery note — same open question).
**System Interactions:** Downstream of every AI Employee (V0.04) and every workflow in Volumes 1–5; the PO 3-stage approval gap (V4.07) is specifically a **missing** integration with Gatekeeper, not a flaw in Gatekeeper itself.
**Example Scenario:** See V0.02's example — the bill/PO mismatch scenario is a Gatekeeper item end to end.

---

## V0.06 — Manual Override
**Purpose:** To ensure Feishy is never blocked from acting just because AI hasn't gotten to something yet — the system augments a human who can still act directly, it doesn't replace that ability.
**Where found:** Every "New [X]" button across the app is itself an instance of manual override — the human-initiated equivalent of what AI would otherwise propose.
**Triggers:** Feishy directly creating/editing a record instead of waiting for an AI-detected trigger.
**Auto-loaded data:** Standard form data for whatever's being created.
**AI understanding:** AI is expected to "seamlessly take over" a manually-started flow — confirmed as a design principle, not independently verified as a specific behavior in code (i.e., there's no evidence of a distinct "AI notices this was manually created and takes over" mechanism; more likely the same downstream automations simply fire regardless of how the record originated).
**Controls:** Every manual creation form in the system.
**Calculations/rules:** Same as whatever module is being manually operated.
**AI decisions:** N/A — this is specifically the non-AI path.
**Automations:** Downstream cascades (V2.10) should fire the same way regardless of manual vs. AI-initiated origin.
**Records touched:** Same as the relevant module.
**Modules/permissions:** All.
**Edge cases:** N/A beyond standard form validation.
**Role views:** Feishy.
**Lifecycle:** Permanent principle since OS #1.
**AI Knowledge:** N/A.
**Failure Recovery:** N/A.
**System Interactions:** Every module.
**Example Scenario:** Feishy manually creates a Change Order from a phone call instead of waiting for `aiDetectScope` to catch it from a transcript — the CO then flows through the same approval/cascade path as an AI-detected one.

---

## V0.07 — Never Remove, Only Upgrade
**Purpose:** A standing engineering discipline: nothing that works today should be broken or deleted by future work — everything is additive.
**Where found:** N/A — governs process, not a UI feature.
**Lifecycle:** Permanent, Constitution §15.
**System Interactions:** This is *why* the Knowledge Transfer Package itself exists — a clean rebuild is the one context where "starting over" is permitted, and even then, this document exists specifically so nothing gets lost in that process.
*(Remaining fields N/A — this is a process principle, not a runtime feature.)*

---

## V0.08 — Executive Issue Management System (EIS)
**Purpose:** A permanent, structured way to track every bug, workflow gap, UI issue, and AI issue discovered during development — with IDs stable enough to reference across sessions (BUG-####, WF-####, UI-####, AI-####).
**Where found:** A floating action button/panel confirmed via `eisOpenPanel`, `eisOpenBoard`.
**Triggers:** Manual issue logging (`eisLogIssue`), or captured automatically during a testing session (`eisCaptureContext`).
**Auto-loaded data:** Module/workflow context via `eisDetectModule`, `eisDetectWorkflow`.
**AI understanding:** `eisRunAIReview` — AI reviews logged issues, likely for triage or duplicate detection (exact logic not independently verified).
**Controls:** Type selector (`eisTypeBtn`), comment thread (`eisAddComment`), board view (`eisRenderBoard`), clear-closed (`eisClearClosed`).
**Calculations/rules:** ID generation via `eisNextId` — sequential per type (BUG-0001, WF-0001, etc., inferred from naming convention described in memory/prior sessions).
**AI decisions:** AI review pass on issues, via `eisRunAIReview`.
**Automations:** `eisSendToEngineering` — routes an issue directly into a form Claude can act on in a future session.
**Records touched:** Issue records, presumably persisted in localStorage alongside other app data (no distinct persistence layer confirmed).
**Modules/permissions:** All — issues can reference any module.
**Edge cases:** Not independently verified this pass.
**Role views:** Feishy/Claude (internal QA tool, not client-facing).
**Lifecycle:** Built in a recent session (exact session not confirmed — post-dates OS #11's Feature Inventory snapshot, since EIS wasn't in that count).
**AI Knowledge:** N/A beyond above.
**Failure Recovery:** N/A.
**System Interactions:** This is the mechanism that should, going forward, prevent the kind of undiscovered gap the Emergency Live-QA session found the hard way — routine EIS use during future development is a direct mitigation for the "trust live-testing over code-reading" lesson (Gap Analysis, "What This Means for the Rebuild," item 1).
**Example Scenario:** During a testing pass, a broken button is logged as `UI-0042` with module/workflow auto-detected, then sent to engineering for the next session to fix.

---

## V0.09 — Enterprise UX Engine
**Purpose:** To give every list/table in the app the same baseline of search, sort, filter, bulk actions, and export — matching Executive Directive §9.2's "every screen must feel complete" standard — without rebuilding that logic per module.
**Where found:** Applied across most list pages (Jobs, Bills, Leads, etc.) via shared functions.
**Triggers:** Any list page render calls `uxRegister` to opt in.
**Auto-loaded data:** The list's current dataset.
**AI understanding:** N/A directly — this is a UX utility layer, not an AI feature.
**Controls:** `uxListSearch`, `uxListFilter`, `uxSort`, `uxToggleSelect`, `uxSelectAll`, `uxExportCSV`, inline edit via `uxMakeEditable`.
**Calculations/rules:** N/A.
**AI decisions:** N/A.
**Automations:** N/A.
**Records touched:** N/A — read/display layer only, though `uxMakeEditable` does write.
**Modules/permissions:** Applied wherever a list page exists.
**Edge cases:** `uxListFilterDelegated`/`uxListSearchDelegated`/`uxListClearDelegated` suggest a delegation pattern for pages with non-standard list structures — exact scope not independently verified.
**Role views:** Feishy (internal use); not confirmed whether this extends to any future client/sub portal.
**Lifecycle:** Confirmed ✅ BUILT — the most complete "platform utility" in the current codebase.
**AI Knowledge:** N/A.
**Failure Recovery:** N/A.
**System Interactions:** Underpins nearly every list-based page across all Volumes.
**Example Scenario:** Filtering the Bills list to show only disputed bills over $5,000, then bulk-exporting that filtered set to CSV.

---

## V0.10 — E-Signature System
**Purpose:** Native, legally-usable electronic signature so proposals and lien waivers don't require a third-party tool for every signing event.
**Where found:** Embedded in Proposal (`signProposal`) and Lien Waiver (`signLienWaiver`) flows; standalone signing page via `showSignPage`.
**Triggers:** `openEsignRequest` — initiated when a document needs signature.
**Auto-loaded data:** The document being signed, client/recipient info.
**AI understanding:** N/A directly.
**Controls:** Signature capture UI (exact input method — typed name vs. drawn signature — not independently confirmed this pass; prior documentation references "typed name + IP capture + timestamp").
**Calculations/rules:** N/A beyond capturing identity/timestamp evidence.
**AI decisions:** N/A.
**Automations:** `confirmEsign` → `executeSignature` — completes the signing and presumably triggers downstream Gatekeeper/cascade actions (e.g., signed proposal → job creation, per REQ-045).
**Records touched:** The signed document's status; a Gatekeeper item per REQ-045.
**Modules/permissions:** Proposals, Lien Waivers, potentially Change Orders (not independently confirmed for COs).
**Edge cases:** `checkSigningLink` suggests link-validity checking (expired/invalid links) — exact behavior not independently verified.
**Role views:** Client-facing signing page; Feishy sees signed status.
**Lifecycle:** Confirmed present; end-to-end verification (e.g., "does `proposal_signed` actually create the Gatekeeper item") flagged as needing Executive Testing per Subsystem Status.
**AI Knowledge:** N/A.
**Failure Recovery:** Not independently confirmed.
**System Interactions:** Feeds V1.16 (Proposals), V1.17, V4.08 (Lien Waivers).
**Example Scenario:** Client opens a Magic Link, reviews the proposal, signs — `executeSignature` fires, and per REQ-045 this should create the job and notify the team (verification status: not independently confirmed).

---

## V0.11 — Notification Center
**Purpose:** A persistent, in-app record of significant events, distinct from one-off toast messages that disappear.
**Where found:** `buildNotificationCenter`, `toggleNotificationCenter`.
**Triggers:** `addNotification` called by other functions on significant events.
**Auto-loaded data:** Notification history.
**AI understanding:** N/A directly.
**Controls:** Toggle open/closed, badge count (`updateNotifBadge`/`updateNotificationBadge` — two similarly-named functions exist, worth a duplicate-check during rebuild).
**Calculations/rules:** N/A.
**AI decisions:** N/A.
**Automations:** N/A confirmed beyond being called reactively.
**Records touched:** Notification records.
**Modules/permissions:** All.
**Edge cases:** Per Subsystem Status and DR-004: in practice this is closer to toast-only than a full panel with history — the functions exist, but real persistent-and-browsable notification history is not confirmed live.
**Role views:** Feishy.
**Lifecycle:** Partially built — see DR-004.
**AI Knowledge:** N/A.
**Failure Recovery:** N/A.
**System Interactions:** Called from across the app wherever `addNotification` is invoked.
**Example Scenario:** A bill dispute is logged; a notification should appear in the center, not just as a passing toast.

---

## V0.12 — Version Tracking Discipline (CS_VERSION)
**Purpose:** A single constant meant to indicate the current deploy state, referenced in documentation to track what's "current."
**Status:** **Needs Owner Review — see DR-003.** Live code shows `2.7`; documentation claims `2.10.4`. This entry exists specifically to make sure that mismatch isn't lost in the rebuild.
*(Operational fields N/A — this is a tracking mechanism, not a feature with behavior of its own.)*

---

## V0.13 — Global Cross-Module Search
**Purpose:** Find any record (by client name, address, job number, amount, date) from anywhere in the app — distinct from V0.09's per-list search, which only searches within one already-open list.
**Status:** **Confirmed ❌ NOT BUILT** per Subsystem Status ("Global Search: NOT BUILT — High priority per Executive Directive"). This matches REQ-050.
*(Fields 7, 9, 10, 13, 15–18 are N/A — not yet built.)*
**Priority note:** Executive Directive §9.2 lists search as a *required* baseline for every list page — V0.09 partially satisfies that per-list, but true global/cross-module search remains a real, explicitly flagged gap.

---

## V0.14 — Smart Email Router
**Purpose:** Every inbound email automatically classified and routed — new lead, client message, sub message, invoice, permit-related — with AI drafting the appropriate action, without a human triaging the inbox.
**Where found:** Partial implementation via `classifyAndProcessEmail`, `processEmailPaste`, `showEmailScanner`.
**Triggers:** Manual paste/scan is confirmed; automatic live-inbox ingestion is **not confirmed** — n8n (the piece that would watch a real Gmail inbox) is deployed but not wired (V0.24).
**Auto-loaded data:** Whatever email content is pasted/scanned.
**AI understanding:** `classifyAndProcessEmail` — category detection logic not independently verified in depth.
**Controls:** `showEmailPaste`, `showEmailScanner`.
**Calculations/rules:** N/A confirmed.
**AI decisions:** Classification category + suggested action.
**Automations:** `createFromEmail` — presumably creates the relevant record (lead, bill, etc.) from classified email content.
**Records touched:** Depends on classification (Lead, Bill, Message).
**Modules/permissions:** Sales, Financial, Messaging.
**Edge cases:** Per Subsystem Status: "Email classification: was using a broken API format (likely non-functional the whole time it existed), fixed" this session (July 10) — meaning this feature's real-world reliability has a very recent and rocky history. Treat with extra caution before assuming it works end-to-end.
**Role views:** Feishy (internal processing, not client-facing).
**Lifecycle:** Partially implemented; the "Smart" auto-routing half described in the original OS #1 spec (full Gmail OAuth auto-intake) is not confirmed active.
**AI Knowledge:** N/A beyond above.
**Failure Recovery:** The July 10 fix itself is evidence this system can silently fail without anyone noticing — worth deliberate failure-mode design in the rebuild (e.g., a dead-letter queue for unclassifiable emails).
**System Interactions:** Would feed Leads (V1.01), Bills (V4.01), Messaging (V5.03) if fully wired.
**Example Scenario:** An Angi "New Lead Alert" email is forwarded/pasted in; the system should classify it as a new lead and create the lead record automatically — manual paste path confirmed, automatic inbox-watching path not confirmed.

---

## V0.15 — Employee Help Bot
**Purpose:** A floating, role-aware assistant available on every page, so staff don't need training to use the system — proposed in OS #1, never built.
**Status:** **Future Vision.** *(All operational fields N/A.)*
**System Interactions:** Related to V0.16 (Admin Command Room) — Help Bot was designed to escalate unresolved questions there.

---

## V0.16 — Admin Command Room
**Purpose:** An owner-only space where escalated questions (from Help Bot) and system changelog live, with an AI participant available for discussion.
**Status:** **Future Vision.** *(All operational fields N/A.)*

---

## V0.17 — KPI Engine
**Purpose:** Per-role KPIs that automatically trigger real actions — the specific example from OS #1 is a phase hitting 100% completion automatically triggering an inspection request.
**Status:** **Future Vision.** *(All operational fields N/A.)*
**System Interactions:** Directly connects to V3.16 (Inspection Workflow) — the two were designed together and probably should be built together.

---

## V0.18 — The Advisor Conversation
**Purpose:** An ask-anything interface where Feishy can pose an open business question and get an answer grounded in full company context — the natural conversational front-end to the Business Brain (V0.03/V6.03).
**Status:** **Future Vision.** Depends on V6.03 (cross-job Business Brain) to be genuinely useful — asking broad business questions against only single-job context would be a weaker version of this idea.
*(Operational fields N/A.)*

---

## V0.19 — Business Health Score
**Purpose:** One composite number/indicator summarizing overall company health for a daily glance — synthesizing cash flow, schedule risk, client sentiment, and open issues into a single signal.
**Status:** **Future Vision.** *(Operational fields N/A.)*
**System Interactions:** Would likely live on the Today's Dashboard (V5.07) once built.

---

## V0.20 — PWA / Add to Home Screen
**Purpose:** Let field staff install Corestone as an app-like icon on their phone rather than navigating to a URL each time.
**Status:** **Planned**, not built. *(Operational fields N/A.)*

---

## V0.21 — Google Maps Address Autocomplete
**Purpose:** Faster, more accurate address entry across lead/job forms.
**Status:** **Planned**; API key not even created per the Forgotten Ideas Report. *(Operational fields N/A.)*

---

## V0.22 — AI Permit Coordinator (Historical)
**Purpose (historical):** An 8th AI Employee role proposed in OS #10 to own permit tracking and inspection scheduling.
**Status:** **Historical/Superseded — not part of the current 7-employee roster.** See V0.04's historical note and Decision Reconciliation DR-002 for the full resolution. Preserved here specifically so this doesn't get silently reinvented or silently lost during the rebuild — Feishy should make an explicit call on whether to revive it, not have it happen by default either way.
*(Operational fields N/A — never implemented.)*

---

## V0.23 — Supabase Real Persistence
**Purpose:** Replace localStorage (single-browser, no backup, ~5MB practical limit per OQ-001) with a real, multi-user-capable backend.
**Where found:** Project `corestone-os` exists in Supabase; not connected to the app.
**Status:** ⚠️ PARTIAL infrastructure exists; **not wired**. Deliberately deferred per standing decision — this is a sequencing choice, not an oversight.
**System Interactions:** This is the single dependency blocking the largest number of other Volume 0 and cross-cutting entries: Visibility Engine, Event Engine, Workflow Engine, Enterprise Permissions, Client/Sub Portals, real multi-user access, and Business Brain Phase 3 all wait on this.
**Recommendation for the rebuild (flagged, not a directive):** the Master Gap Analysis already states this explicitly — choosing the real backend from day one, rather than reproducing the localStorage-first path, is the single highest-leverage architectural decision available to Cursor.

---

## V0.24 — n8n Workflow Automation
**Purpose:** External workflow automation (starting with email intake) running outside the main app.
**Where found:** Deployed at `corestone-n8n.onrender.com`.
**Status:** ⚠️ PARTIAL — deployed, not connected. Known operational risk (OQ-023): Render's free tier cold-starts after 15 minutes idle, which could cause missed inbound leads if/when this is wired to live Gmail intake.
*(Remaining operational fields N/A — not active.)*

---

## V0.25 — QBO Integration
**Purpose:** Sync with QuickBooks Online, which currently runs live against Buildertrend.
**Status:** Deferred by explicit business rule (BR-014) — 30-day parallel verification required before connection, using a QBO Developer Sandbox for all testing. This is intentional pacing, not a technical gap.
*(Operational fields N/A — not yet started.)*

---

## Volume 0 Completeness Note

25 of 25 Volume 0 features from the Master Feature Inventory are represented above. Depth is intentionally uneven: built, Critical/High-priority systems (Gatekeeper, Business Brain, AI Employees, EIS, UX Engine) received full operational detail; Future Vision and Historical entries received Purpose + status + system interactions only, since inventing operational detail for something that doesn't exist would misrepresent the current state — exactly the mistake this whole Knowledge Transfer effort exists to correct.
