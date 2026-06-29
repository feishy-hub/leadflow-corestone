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
