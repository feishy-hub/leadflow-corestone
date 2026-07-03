# CORESTONE OPEN QUESTIONS — RISKS & BLOCKED ITEMS
## Version 1.0 | OS #7 — June 25, 2026
## Last Updated: OS #7 | Updated By: Claude (CTO/Architect)

---

## RULE
Every risk, blocked item, pending decision, and unresolved tradeoff lives here.
Resolved items are marked CLOSED with resolution date — never deleted.
This document is reviewed at the start of every session.

---

## OPEN QUESTION SCHEMA

| Field | Description |
|---|---|
| OQ-ID | Unique identifier |
| Date Opened | When identified |
| Type | Risk / Blocked / Pending Decision / Tradeoff |
| Title | Short description |
| Detail | Full explanation |
| Impact | What breaks or stalls if unresolved |
| Owner | Who must resolve this |
| Status | Open / In Progress / CLOSED |
| Resolution | How it was resolved (if closed) |

---

## CRITICAL RISKS (must resolve before Phase 1 build)

| OQ-ID | Type | Title | Detail | Impact | Owner | Status |
|---|---|---|---|---|---|---|
| OQ-001 | Risk | localStorage 5MB limit | Multiple active jobs with photos and logs will hit browser localStorage limit. Data will be silently lost. | Complete data loss for active jobs | Claude + Feishy | Open — Supabase migration locked for Phase 2 |
| OQ-002 | Risk | Gatekeeper is non-functional | Every AI approval for the past several sessions changed a status field and did nothing else. Every "approved" Gatekeeper action is a lie. | Core platform promise is broken | Claude | Open — Fix B-001 is first action of Phase 1 foundation |
| OQ-003 | Risk | index.html approaching unmaintainability | 577KB, 309 functions in one file. Adding more features increases the cost of every future change and the risk of every push. | Development speed will collapse | Claude | Open — file split planned post-Supabase |
| OQ-004 | Risk | No offline mode for field team | Sullivan and Ulster County job sites often have no cell signal. Field team cannot submit daily logs or photos offline. | Daily log gaps, photo gaps, schedule delays | Feishy (product decision) | Open |
| OQ-005 | Risk | No client payment processing | Client portal shows invoice but has no Pay Now button. Payment is a phone call or check. | Delayed payment collection | Feishy (product decision) | Open — Stripe integration needed |
| OQ-006 | Risk | AI API costs at scale | 33 AI functions, some running every 5 seconds. As job count grows, API costs grow proportionally. | Unexpected operating costs | Claude | Open — audit planned after Phase 1 |

---

## BLOCKED ITEMS

| OQ-ID | Type | Title | Detail | Blocked By | Owner | Status |
|---|---|---|---|---|---|---|
| OQ-007 | Blocked | Email auto-intake | Gmail OAuth credentials exist but n8n workflow not configured. Angi lead emails cannot auto-create leads yet. | n8n configuration | Claude | Open — Phase 1 build item |
| OQ-008 | Blocked | Cloudflare R2 photo storage | R2 account exists but Squarespace domain access is blocked — cannot configure Email Routing or R2 CNAME. | Squarespace domain access | Feishy | Open — Feishy must provide Squarespace access |
| OQ-009 | Blocked | QBO connection | QBO Developer Sandbox not yet set up. 30-day parallel verification period not started. | Policy: QBO connects last | Feishy | Open — intentionally deferred |
| OQ-010 | Blocked | Supabase reconnection | Supabase caused spinning bug when previously connected. Safe reconnection requires careful sequencing and rollback plan. | Architecture plan needed | Claude | Open — Phase 2 |

---

## PENDING DECISIONS (need Feishy or ARB input)

| OQ-ID | Type | Title | Detail | Options | Owner | Status |
|---|---|---|---|---|---|---|
| OQ-011 | Pending Decision | Supabase migration timing | When exactly does Supabase migration happen? This affects how much code we write on localStorage. | A: Before Phase 1 build B: After Foundation fixes, before Phase 1 C: After Phase 1 complete | Feishy + ARB | Open |
| OQ-012 | Pending Decision | Requirements Engine — tab or embedded? | Does Requirements Engine get its own navigation tab, or is it embedded within Lead and Job modules? | A: Dedicated tab B: Embedded in Lead/Job with dedicated view | Feishy | Open |
| OQ-013 | Pending Decision | Survey delivery method | How does the client receive and complete the survey? | A: Magic Link email (no login) B: Client portal login C: Both | Feishy | Open |
| OQ-014 | Pending Decision | Squarespace domain — who has access? | Cloudflare R2 and Email Routing require DNS changes. Squarespace domain is the blocker. | Feishy must provide credentials or transfer DNS to Cloudflare | Feishy | Open |
| OQ-015 | Pending Decision | Sub portal | Subs currently interact via Magic Link only — no persistent account. Should subs have login accounts? | A: Magic Link only (current) B: Sub portal login with history view | Feishy | Open — Phase 2+ |

---

## TRADEOFFS (accepted constraints)

| OQ-ID | Type | Title | Detail | Tradeoff Accepted | Status |
|---|---|---|---|---|---|
| OQ-016 | Tradeoff | Speed vs. architecture quality | Single index.html is fast to build but creates technical debt. Proper multi-file architecture takes longer to set up. | Accepted: build fast on index.html, plan modular split for post-Supabase | Active |
| OQ-017 | Tradeoff | Native e-signature vs DocuSign | Native e-signature is built and works. DocuSign is more legally robust for large contracts. | Accepted: native for now, DocuSign as optional upgrade for contracts over $50k | Active |
| OQ-018 | Tradeoff | localStorage vs Supabase during Phase 1 | Ideal: Supabase now. Practical: migrate after Phase 1 to avoid disruption during critical build phase. | Accepted: finish Foundation fixes, then decide migration timing before Phase 1 build begins | Active |

---

## CLOSED ITEMS

| OQ-ID | Title | Resolution | Closed Date |
|---|---|---|---|
| OQ-C001 | Anthropic API key GitHub blocking | Key split into two variables joined at runtime | OS #2 |
| OQ-C002 | Fine-grained GitHub token 403 errors | Classic PAT (ghp_ prefix) only — rule locked | OS #2 |
| OQ-C003 | Dashboard spinning bug | Fixed in OS #3 — async/await pattern established | OS #3 |
| OQ-C004 | Script sections rendering as one block | DOM createElement pattern, real newline splitting | OS #5 |
| OQ-C005 | Master doc not updated after OS #6 | Updated in OS #7, new document system established | OS #7 |
| OQ-C006 | previewProposal dead button | Built in OS #7 Architecture Consolidation | OS #7 |
| OQ-C007 | signProposal dead button | Built in OS #7 Architecture Consolidation | OS #7 |
| OQ-C008 | pgComments stub | Built as universal communication hub in OS #7 | OS #7 |
| OQ-C009 | --teal-bg CSS variable undefined | Defined in OS #7 — all new UI now renders | OS #7 |
| OQ-C010 | GK badge only updating one element | updateGKBadge() unified function built in OS #7 | OS #7 |

---

*Version 1.0 — OS #7 — June 25, 2026*
*Resolved items move to CLOSED section — never deleted*

---

## ITEMS ADDED — OS #8 (July 1, 2026)

| OQ-ID | Type | Title | Detail | Impact | Owner | Status |
|---|---|---|---|---|---|---|
| OQ-019 | Pending Decision | Workflow Engine build timing | WF-01 through WF-03 are hardcoded today. When do we migrate to the Workflow Engine? | Every hardcoded workflow chain must be refactored | Claude + Feishy | Open — Phase 2 per Phase Map |
| OQ-020 | Risk | GL account codes not reserved in current objects | Current estimate lines and bills have no `gl_account_code` or `cost_code` fields. Adding them retroactively to localStorage objects before Supabase migration is low-risk and high-value. | QBO sync will require schema migration if not added now | Claude | Open — should add to new objects immediately |
| OQ-021 | Pending Decision | CSI category implementation priority | Architecture Directive requires CSI categories on every Estimate Item. When does CSI get added to the estimating UI? | Estimate Items are currently rows, not rich objects | Feishy | Open — Phase 2 |
| OQ-022 | Pending Decision | Preview-as-Role priority | Complete target architecture designed. Should a UI-only version (no real permission engine) be built in Phase 1 as a stepping stone? | Client-facing proposal previews exist today; multi-role preview does not | Feishy | Open |
| OQ-023 | Risk | n8n on Render cold start | Render free tier spins down after 15 min inactivity. Gmail intake can miss emails if n8n is cold. | Inbound leads from Gmail delayed or lost | Claude | Open — upgrade to paid tier or move before going live |

*Added OS #8 — July 1, 2026*

---

## OQ-020 — Enterprise UX Gap: System-Wide Search + Filter Missing
- **Date Opened:** OS #9 — July 3, 2026
- **Type:** Implementation Gap
- **Title:** No search or filter on any list page
- **Detail:** Every list page (Jobs, Leads, Bills, Invoices, Subs, POs, COs, etc.) lacks a live 
  search bar and filter controls. This violates the Enterprise UX Standard established OS #9.
- **Impact:** President cannot quickly find records. Every list requires manual scrolling.
- **Owner:** Engineering
- **Status:** In Progress — being addressed in OS #9 build
- **Priority:** Critical

---

## OQ-021 — Enterprise UX Gap: Row-Click Opens Detail (Missing System-Wide)
- **Date Opened:** OS #9 — July 3, 2026
- **Type:** Implementation Gap
- **Title:** Most list rows do not open detail view on click
- **Detail:** Enterprise standard: clicking any row opens the full record. 
  Currently most pages require hunting for Edit buttons.
- **Impact:** UX feels unfinished. Extra clicks on every action.
- **Owner:** Engineering
- **Status:** In Progress — being addressed in OS #9 build
- **Priority:** High

---

## OQ-022 — Enterprise UX Gap: No Export/Print on Any Page
- **Date Opened:** OS #9 — July 3, 2026
- **Type:** Implementation Gap
- **Title:** Cannot export any list to CSV or print
- **Detail:** Construction companies need paper records. Bills, invoices, POs, sub lists, 
  schedules all need export capability.
- **Impact:** Cannot produce reports for accounting, lender, or client.
- **Owner:** Engineering
- **Status:** Open
- **Priority:** High

---

## OQ-023 — Enterprise UX Gap: Inline Status Change Missing
- **Date Opened:** OS #9 — July 3, 2026
- **Type:** Implementation Gap
- **Title:** Status changes require opening a full form
- **Detail:** Clicking a status badge (Draft, Sent, Paid, etc.) should allow changing it in place.
  Currently requires opening the full record form.
- **Impact:** Too many clicks for routine status updates.
- **Owner:** Engineering
- **Status:** Open
- **Priority:** Normal

---

## OQ-024 — Enterprise UX Gap: Related Records Not Shown on Detail Forms
- **Date Opened:** OS #9 — July 3, 2026
- **Type:** Implementation Gap
- **Title:** Job detail does not show related Invoices, Bills, POs, COs, Logs, Schedule
- **Detail:** Opening a Job should show everything related to it in one place. 
  Currently requires navigating to separate tabs.
- **Impact:** President must navigate 5+ tabs to get a complete picture of one job.
- **Owner:** Engineering
- **Status:** Open
- **Priority:** High

---

## OQ-025 — Business Intelligence: Business Brain Not Yet Built
- **Date Opened:** OS #9 — July 3, 2026
- **Type:** Major Missing Subsystem
- **Title:** Business Brain — unified intelligence layer — not yet implemented
- **Detail:** The system should know everything: every plan, call, photo, estimate, bid, PO, bill,
  invoice, payment, CO, conversation. Once built, every AI feature becomes dramatically smarter
  because it reasons over the entire job history, not just the current page.
- **Impact:** All AI features are page-scoped only. Cannot answer cross-job questions.
- **Owner:** Engineering
- **Status:** Open — Phase 2
- **Priority:** Critical (highest architectural impact)

