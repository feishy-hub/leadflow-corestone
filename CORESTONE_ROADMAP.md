# CORESTONE OS — ROADMAP
## 30-second project status. Open this first.
## Updated: OS #8 PHASE COMPLETION — July 2, 2026

---

## WHERE WE ARE RIGHT NOW

**Active Milestone:** M1 — Lead → Proposal → Job (95% complete)
**Overall Phase:** Phase 1 — Foundation (localStorage, single-user)
**App URL:** leadflow-corestone.vercel.app
**Repo:** github.com/feishy-hub/leadflow-corestone

---

## M1 STATUS: 95% Complete — Ready for Executive Testing

### ✅ M1 Items Complete
- Lead form (all fields, AI generation, duplicate guard, audit log)
- Pipeline kanban with correct stage mapping (proposal_sent)
- Lead detail — all buttons working, edit safe, stage enforcement
- Tax calculation — FIXED: materials-only 8% NY law (critical bug was cost_type mismatch)
- Estimate CRUD — open, add/edit/delete line items, live preview, group by trade
- createProposalFromEstimate → 9-section legal proposal with draw schedule
- Proposal view — all 9 sections, draw schedule, client signature block
- E-signature flow — guard, Gatekeeper item, nextStep to Gatekeeper
- sendProposalToClient — stage update, Day 3/5/7 follow-ups, magic link
- proposal_signed Gatekeeper executor — Job + Budget + Deposit Invoice + survey + PM task

### ⚠️ Remaining Before Executive Testing
- [ ] End-to-end ETM test: full Lead → Sign → Gatekeeper → Job flow
- [ ] callIntel post-call 12-field persistence (OQ-011) — currently 4/12 fields

### ✅ New Platform Features Added This Session
- Executive Feedback System (💬 floating button — AI analyzes any issue)
- Notification Center (🔔 bell with unread count, persistent history)
- Global Search (Cmd+K — searches leads, jobs, proposals, estimates, invoices)

---

## MILESTONE MAP

| Milestone | Scope | Status | Blocker |
|---|---|---|---|
| **M1** | Lead → Proposal → Job | 🟢 95% — ETM test remaining | callIntel persistence |
| **M2** | Job → Schedule → POs (3-stage) | 🔴 Not started | M1 must pass Executive Testing |
| **M3** | POs → Bills → Payments | 🔴 Not started | M2 must pass |
| **M4** | Change Orders (full lifecycle) | 🔴 Not started | M3 must pass |
| **M5** | Daily Operations | 🔴 Not started | M4 must pass |

---

## PHASE GATES

| Phase | What It Unlocks | Gate |
|---|---|---|
| **Phase 1 (now)** | Foundation — M1 through M5 milestones | M1-M3 pass Executive Testing |
| **Phase 2** | Supabase, Visibility Engine, Event Engine, Workflow Engine, Portals | M1-M3 complete |
| **Phase 3** | Business Brain, Mobile, QBO sync | Multiple real completed jobs |

---

## CRITICAL BLOCKERS

| Blocker | Impact | Resolution |
|---|---|---|
| callIntel saves only 4/12 fields | Call intelligence data lost | OQ-011, OS #9 priority |
| n8n cold-start on Render free tier | Gmail intake may miss emails | Upgrade before live use |
| Supabase not connected | localStorage only — no multi-user, no persistence guarantee | Phase 2 |

---

## EXECUTIVE APPROVED — LOCKED DECISIONS

| Decision | What Is Locked |
|---|---|
| DEC-025 | Status = workflow outcome, never manual button |
| PO Directive | POs never auto-created. 3-stage Gatekeeper approval. |
| QBO Rule | QBO connects last, after 30-day parallel verification |
| Phase 2 gate | Supabase migration requires M1-M3 complete |
| "stub" rule | Never use "stub" — say "partially implemented" |

---

## DEFERRED ITEMS (Phase 2+)

Visibility Engine | Workflow Engine (configurable) | Event Engine (pub/sub) |
Business Brain | Mobile (offline/PWA) | QBO integration |
Client/Sub Portals | REST API | Enterprise Permissions

---

## NEXT SESSION PRIORITIES (OS #9)

1. **ETM end-to-end test** — full M1 flow in Executive Testing Mode
2. **Fix callIntel 12-field persistence** (OQ-011)
3. **Deliver M1 Executive Testing Package** to Feishy
4. **After M1 passes:** begin M2 (Job → Schedule → PO 3-stage)

---

## HOW TO UPDATE

Update at end of every session. Maximum 2 minutes to read.
Never add architecture here — that lives in CORESTONE_BLUEPRINT.md.

---
*Last updated: OS #8 Phase Completion — July 2, 2026*
*Next update: Start of OS #9*
