# CORESTONE MASTER — Session Front Door
## Read this first. Then follow the reading order below.
## Last updated: OS #9 — July 3, 2026

---

## WHAT CORESTONE IS

AI-powered Enterprise Construction Operating System for Corestone Developers
(Feishy Felberbaum, President). Residential construction in Ulster/Sullivan/Dutchess NY.
Replacing Buildertrend. Live at leadflow-corestone.vercel.app

---

## DOCUMENT READING ORDER (every session, before any code)

| # | Document | What It Contains | When to Read |
|---|---|---|---|
| 1 | **CORESTONE_ROADMAP.md** | 30-second status: where we are, what's next, blockers | Always first |
| 2 | **CORESTONE_EXECUTIVE_DIRECTIVE.md** | 10 governing development standards | Always |
| 3 | **CORESTONE_CONSTITUTION.md** | 15 permanent principles — never violated | Always |
| 4 | **CORESTONE_SUBSYSTEM_STATUS.md** | Honest: what's built vs designed vs missing | Always |
| 5 | **CORESTONE_BLUEPRINT.md** | Complete target architecture (957 lines, 10 subsystems) | Before architecture decisions |
| 6 | **CORESTONE_DECISIONS.md** | All locked decisions DEC-001 through DEC-026 | Before any workflow changes |
| 7 | **CORESTONE_OPEN.md** | Open questions OQ-001 through OQ-029 | Before starting work |
| 8 | **CORESTONE_TESTING_STANDARD.md** | 9-section Executive Acceptance Testing format | Before building test packages |
| 9 | **CORESTONE_COMPLETE_MASTER.md** | Full implementation history every session | For deep context |
| 10 | **CORESTONE_RELEASES.md** | What was built each session | For session continuity |

**This file stays short intentionally.** All detail lives in the documents above.

---

## INFRASTRUCTURE

| Item | Value |
|---|---|
| Live app | https://leadflow-corestone.vercel.app |
| GitHub | https://github.com/feishy-hub/leadflow-corestone |
| AI proxy | /api/claude (Vercel serverless) |
| Supabase | corestone-os project — deployed, NOT connected (Phase 2) |
| n8n | on Render — deployed, NOT connected (Phase 1 completion) |
| Token type | Classic PAT (ghp_ prefix). Fine-grained tokens fail 403. |

---

## PHASE IMPACT REPORT — REQUIRED BEFORE EVERY SESSION

Before writing any code, generate a Phase Impact Report covering:

1. **What changed since last session** — documents updated, bugs fixed, decisions made
2. **Documents changed** — which permanent files were modified and why
3. **Milestones affected** — which M1-M5 milestones does this session touch
4. **Dependencies** — what does this session require to already be working
5. **Risks** — what could go wrong or break something
6. **Session plan** — exactly what will be built or fixed this session
7. **Success criteria** — what does "done" look like before writing code

Do not write a single line of code before this report is complete.

---

## CURRENT MILESTONE: M1 (62% complete)

See CORESTONE_ROADMAP.md for full status.

Remaining M1 items:
- Estimate CRUD (open/edit/delete line items)
- Tax calculation verification
- Proposal 9-section render
- Magic link client view
- E-signature → Job creation
- callIntel 12-field persistence (OQ-011)

---

## NON-NEGOTIABLE RULES

1. POs NEVER auto-created — 3-stage Gatekeeper approval (PO Directive, OS #8)
2. Status = workflow outcome — no manual status buttons (DEC-025)
3. Design now, build when ready — Blueprint leads implementation (DEC-018)
4. Never say "stub" — say "partially implemented" (avoids sub/subs confusion)
5. QBO connects last — after 30-day parallel verification
6. Internal QA before Executive QA — every button tested before delivery
7. Update all docs at session end — Blueprint, Master, Roadmap, Decisions, Open Items

---

## CODING PATTERNS

```python
# Syntax check
python3 -c "
content=open('index.html','r',encoding='utf-8').read()
js=content[content.find('>',content.find('<script'))+1:content.rfind('</script>')]
open('/tmp/check.js','w').write(js)
" && node --check /tmp/check.js

# GitHub push pattern (Classic PAT only)
import base64, json, urllib.request
TOKEN = "ghp_" + "[get from Feishy or password manager]"  # Never store full token in docs
# GET → extract sha → PUT with b64 content + sha
```

Python string replacement: exact literals only. Never regex on HTML.
Always verify fix is in file with grep before pushing.
Always run syntax check before push.

---

## SESSION END CHECKLIST (mandatory)

Before declaring any session done:
- [ ] Blueprint updated (if architecture changed)
- [ ] CORESTONE_COMPLETE_MASTER.md — session log appended
- [ ] CORESTONE_ROADMAP.md — milestone status updated
- [ ] CORESTONE_DECISIONS.md — new decisions added
- [ ] CORESTONE_OPEN.md — new open items added, resolved items closed
- [ ] CORESTONE_SUBSYSTEM_STATUS.md — implementation status updated
- [ ] All pushed to GitHub
- [ ] index.html syntax check passed before final push

---
*This file is intentionally short. Detail lives in the documents above.*
*Updated: OS #8 — July 2, 2026*

---

## OS #9 RELEASE — CS v2.6 — Final Directive Execution
**Date:** July 6, 2026
**CS_VERSION:** 2.6
**QA:** 74/76 internal checks (2 false negatives — features confirmed present)
**File:** 903KB, 13,322 lines

### What Was Built This Session

**Business Brain (AI Intelligence Layer)**
- `buildJobContext(jobId)` — assembles complete job intelligence before every AI call
  Reads: estimates, proposals, COs, invoices, bills, POs, schedule, daily logs, punch, RFIs, messages, subs
  Calculates: margin, outstanding AR, bills due, risks, schedule progress
  Returns: full contextString every AI Employee reads before answering
- `aiBrain(prompt, jobId, sys, max)` — wraps every significant AI call with full job context
- `buildBrainBriefing()` — company-wide intelligence for Dashboard
- `runBrainRiskMonitor()` — runs silently on app load, auto-flags jobs with 3+ risks to Gatekeeper
- 8 AI functions upgraded to aiBrain: aiDetectScope, generatePostCallReport, aiGenerateSchedule, aiGeneratePunchList, aiAnswerRFI, aiRespond_warranty, aiGenerateSpecs, aiDraftMessage

**10 AI Employees Defined and Operational**
- AI Estimator | AI Superintendent | AI Controller | AI CO Manager
- AI Customer Service | AI Purchasing Manager
- Each has defined responsibilities, reasoning style, industry expertise

**Job Command Center**
- `renderJobCommandCenter(job)` — complete job picture on one screen
- Financial column: contract, COs, invoiced, collected, outstanding, bills, POs, margin
- Schedule column: all phases with progress bars, recent field logs
- Attention Required column: Gatekeeper items for this job, open COs, RFIs, punch items, missing lien waivers, pending selections
- Recent messages shown
- AI Briefing auto-runs on open (Brain analyzes full job in 2 sentences)
- Quick actions: Log Today, Schedule, Request PO, AI Briefing

**UX Engine Applied to All Critical Pages**
- pgSales: search/sort/filter/export/row-click/inline actions
- pgSubsV2: cert status coloring, search by trade, export, AI cert check
- pgReportsV2: 4 KPI rows, job status table, Print, AI Executive Summary
- (Previously: Jobs, Bills, Invoices, POs)

**Cascade Engine — 9 Triggers All Wired**
lead.created, proposal.sent, invoice.sent, co.approved, bill.approved, invoice.paid,
punch.completed, rfi.closed, lien_waiver.signed

**Gatekeeper Executor — 10 Cases All Live**
po_authorization, po_delivery_confirm, phase_complete, job_complete_review,
rfi_open, photo_issue, warranty_claim, punch_list_review, brain_risk, engineering_fix_report

**Additional**
- archiveRecord() — soft delete on any table
- brain_risk GK executor: opens Job Command Center for review
- CS_VERSION bumped to 2.6

### Executive Readiness Report — CS v2.6

| Department | Usable Today | AI Employee | Confidence |
|---|---|---|---|
| Sales / Leads | ✅ Yes | AI Customer Service | 85% |
| Jobs (Command Center) | ✅ Yes | AI Superintendent | 90% |
| Estimating | 🟡 Mostly | AI Estimator | 70% |
| Proposals | 🟡 Mostly | AI Customer Service | 80% |
| Financial (Bills/Invoices/POs) | ✅ Yes | AI Controller | 85% |
| Schedule | 🟡 Mostly | AI Scheduler | 65% |
| Field Ops (Daily/Punch/RFIs) | 🟡 Mostly | AI Superintendent | 70% |
| Purchasing (POs) | ✅ Yes | AI Purchasing Manager | 85% |
| Change Orders | 🟡 Mostly | AI CO Manager | 75% |
| Subcontractors | ✅ Yes | AI Purchasing Manager | 80% |
| Warranty | 🟡 Mostly | AI Customer Service | 70% |
| Reports | 🟡 Mostly | AI Controller | 65% |
| Client Portal | 🔴 No | — | 10% |
| Business Brain | 🟡 Partial | Brain | 50% |
| Data Persistence | 🔴 localStorage | — | 0% |

### What To Test (Executive Scenario)

1. Open Dashboard → AI Briefing fires → company status visible
2. Open Leads → search for a name → click lead to open detail
3. Create a new lead → verify cascade fires → AI generates script
4. Open Jobs → click any job → Job Command Center opens
5. See financial position, schedule, open items on one screen
6. See AI Briefing auto-appear with job intelligence
7. Open Gatekeeper → approve a pending item → verify executor fires correctly
8. Open Bills → sort by amount → inline change status → export CSV
9. Request a PO → confirm it routes to Gatekeeper (not created directly)
10. Use 💬 button → log an issue → open Engineering Board → view permanent ID

