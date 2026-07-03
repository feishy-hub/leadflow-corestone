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
