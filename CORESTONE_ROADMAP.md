# CORESTONE OS — ROADMAP
## 30-second project status. Open this first.
## Updated: OS #8 — July 2, 2026

---

## WHERE WE ARE RIGHT NOW

**Active Milestone:** M1 — Lead → Proposal
**Overall Phase:** Phase 1 — Foundation (localStorage, single-user, no Supabase yet)
**App URL:** leadflow-corestone.vercel.app
**Repo:** github.com/feishy-hub/leadflow-corestone

---

## M1 STATUS: 62% Internally QA'd

### ✅ M1 Items Complete (Internal QA Passed)
- Lead form, creation, AI generation, duplicate-click guard
- Pipeline kanban with correct stage mapping (proposal_sent)
- Lead detail modal — all buttons working, edit fixed, audit log added
- Stage enforcement (proposal_sent/signed are workflow-only)
- sendProposalToClient cascade (stage update + Day 3/5/7 follow-ups)
- proposal_signed Gatekeeper executor (Job + Budget + Deposit + survey + PM task)

### ⚠️ M1 Items Remaining (Must pass before Executive Testing)
- [ ] Estimate CRUD — open estimate, edit line items, delete line items
- [ ] Tax calculation — verify materials-only, 8% Ulster County, no tax on labor/subs/permits
- [ ] createProposalFromEstimate → 9-section proposal renders correctly
- [ ] Magic link client view — all sections visible, signature field present
- [ ] E-signature → proposal_signed Gatekeeper item → approval → Job created
- [ ] callIntel post-call persistence — currently saves 4 of 12 fields (OQ-011)

**M1 cannot go to Executive Testing until all 6 items above pass internal QA.**

---

## MILESTONE MAP

| Milestone | Scope | Status | Blocker |
|---|---|---|---|
| **M1** | Lead → Proposal → Job | 🟡 In Internal QA | 6 items remaining |
| **M2** | Job → Schedule → POs (3-stage) | 🔴 Not started | M1 must pass first |
| **M3** | POs → Bills → Payments | 🔴 Not started | M2 must pass first |
| **M4** | Change Orders (full lifecycle) | 🔴 Not started | M3 must pass first |
| **M5** | Daily Operations (logs, punch, RFIs) | 🔴 Not started | M4 must pass first |

---

## PHASE GATES

| Phase | What It Unlocks | Gate |
|---|---|---|
| **Phase 1 (now)** | Foundation — M1 through M5 milestones | M1-M3 pass Executive Testing |
| **Phase 2** | Supabase, Visibility Engine, Event Engine, Workflow Engine, REST API, Portals | M1-M3 complete |
| **Phase 3** | Business Brain, Mobile, QBO sync, AI Recommendations | Multiple real completed jobs |

---

## CRITICAL BLOCKERS

| Blocker | Impact | Resolution |
|---|---|---|
| M1 estimate CRUD not verified | Can't deliver M1 | Next session priority #1 |
| callIntel saves only 4/12 fields | Call intelligence data lost | OQ-011, fix during M1 QA |
| n8n cold-start on Render free tier | Gmail lead intake misses emails | Upgrade to paid before live use |
| Supabase not connected | No persistent multi-user data | Phase 2 — after M1-M3 complete |

---

## EXECUTIVE APPROVED DECISIONS

These are locked. Cannot be changed without explicit approval:

| Decision | What Is Locked |
|---|---|
| DEC-018 | Design now. Build when ready. Blueprint leads. |
| DEC-023 | Architecture freeze — no Blueprint expansion |
| DEC-024 | Every dev cycle = one complete testable workflow |
| DEC-025 | Status = workflow outcome, never manual button |
| PO Directive | POs never auto-created. 3-stage Gatekeeper approval. |
| QBO Rule | QBO connects last, after 30-day parallel verification |
| Phase 2 gate | Supabase migration requires M1-M3 complete |

---

## DEFERRED ITEMS (explicitly not building yet)

| Item | Deferred Until | Why |
|---|---|---|
| Visibility Engine | Phase 2 | Requires Supabase row-level security |
| Workflow Engine | Phase 2 | Requires persistent workflow instance storage |
| Event Engine (pub/sub) | Phase 2 | Requires Supabase realtime |
| Business Brain | Phase 3 | Requires completed job history |
| Mobile (offline/PWA) | Phase 3 | Requires stable API layer first |
| QBO integration | Phase 3 | After 30-day parallel verification |
| Client/Sub Portals | Phase 2 | Requires Visibility Engine |
| REST API | Phase 2 | Only /api/claude proxy exists now |
| Global Search | M2 | After M1 complete |
| Notification Center | M2 | After M1 complete |

---

## NEXT SESSION PRIORITIES

1. Complete M1 remaining 6 QA items (estimate, proposal, signature, callIntel)
2. Deliver M1 Executive Testing Package to Feishy
3. After M1 passes: begin M2 (Job → Schedule → PO 3-stage authorization)
4. Build CORESTONE_ROADMAP.md updates into every session end

---

## HOW TO UPDATE THIS DOCUMENT

Update this file at the end of every session.
It should never be more than 2 minutes to read.
Move completed items to "Complete."
Move new blockers in immediately.
Never add architecture here — that lives in CORESTONE_BLUEPRINT.md.

---
*Last updated: OS #8 — July 2, 2026*
*Next update: Start of OS #9*
