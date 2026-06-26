# CORESTONE RELEASE NOTES
## Version 1.0 | OS #7 — June 25, 2026
## Last Updated: OS #7 | Updated By: Claude (CTO/Architect)

---

## RULE
Every deployment to production is recorded here.
Known issues are documented honestly — never hidden.
Versions are never deleted.

---

## RELEASE SCHEMA

| Field | Description |
|---|---|
| Version | Semantic version (major.minor.patch) |
| Release Date | Date pushed to production |
| Session | OS session |
| Features | New capabilities added |
| Fixes | Bugs resolved |
| Breaking Changes | Anything that changes existing behavior |
| Known Issues | Confirmed bugs not yet fixed |
| Deployment Notes | SHA, commit message, anything unusual |

---

## RELEASE HISTORY

### Version 1.0.0 — OS #1 (June 10, 2026)
**Features:**
- Full application scaffolded — all 30 navigation tabs
- Lead Engine: manual entry, 15 fields, pipeline stages
- Supabase account created (not connected)
- n8n deployed on Render (not configured)
- Basic estimates, proposals, jobs structure

**Known Issues at Release:**
- All data in localStorage — no persistence across browsers or devices
- Supabase not connected

---

### Version 1.1.0 — OS #2 (June 18, 2026)
**Features:**
- Lead AI generation (script, objections, follow-up email, next action)
- Live Call Center with 8 situation buttons
- Web Speech API transcript capture
- 30-day follow-up sequence
- Post-call AI analysis (partial)

**Known Issues at Release:**
- Anthropic API key causing GitHub push failures (fixed mid-session: key split)
- Post-call data save incomplete

---

### Version 1.2.0 — OS #3 (June 18, 2026)
**Fixes:**
- Dashboard spinning bug resolved
- AI proxy (/api/claude) fully wired

**Features:**
- E-signature built natively
- Document lifecycle (Save/Preview/Send/E-Sign/Recall)
- Reminder engine (Day 1/3/5/7/14)
- Daily log AI → change order detection
- Bug tracker built
- Mobile CSS optimization

**Known Issues at Release:**
- Gatekeeper approval executes nothing (B-001) — display only

---

### Version 1.3.0 — OS #4 (June 18-19, 2026)
**Features:**
- 37 AI functions wired to UI
- Navigation audit: 26/28 flows verified
- Claude Code set up in VS Code

**Known Issues at Release:**
- Multiple AI buttons present but save not confirmed for all paths
- B-001 through B-005 all present

---

### Version 2.2.0 — OS #5 (June 22, 2026)
**BREAKING:** Version bump to 2.2 — clears all localStorage on first load (intentional — old data structure incompatible)

**Features:**
- AI Daily Briefing on dashboard (morning auto-run, top 3 priorities)
- Client Intelligence Profile (risk score, predicted outcome, approach)
- Job Profitability Predictor (margin prediction, risk factors)
- addToGatekeeper() helper built — all AI routes here
- Call Intelligence System (permit detection, cost calculator, sqft parser)
- Call screen rebuilt (peripheral vision layout, checklist bar, NEXT button)
- Commitment logging during calls
- Error log panel (⚠️ button, copy to clipboard)
- Keyword checklist detection (instant — no AI credits)

**Known Issues at Release:**
- B-001: Gatekeeper approval is no-op
- B-002: takeoffToEstimate() never saves
- B-003: Tax applied to labor/subs/permits (incorrect)
- B-004: callIntel lost on call end
- B-005: Post-call saves 4/12 arrays only
- B-006: survey_selections no consumers

---

### Version 2.2.1 — OS #7 (June 25, 2026) — Documents Only
**Note:** No application code changed. Document memory system established.

**Documents Created:**
- CORESTONE_BLUEPRINT.md
- CORESTONE_REQUIREMENTS.md
- CORESTONE_DECISIONS.md
- CORESTONE_LEDGER.md
- CORESTONE_OPEN.md
- CORESTONE_RELEASES.md

**CORESTONE_COMPLETE_MASTER.md updated:**
- OS #6 session added (was missing)
- OS #7 session added
- Development Directive added
- Pre-implementation rule added (read 6 documents + Impact Report)

**Known Issues Carried Forward:**
- B-001 through B-006 all unresolved — next session priority

---

## NEXT PLANNED RELEASE: 2.3.0 — Foundation Fixes
**Target:** Next implementation session
**Scope:**
- Fix B-001: Gatekeeper execution
- Fix B-002: takeoffToEstimate() save
- Fix B-003: Tax calculation (materials only)
- Fix B-004: callIntel persistence
- Fix B-005: Post-call 12-array save
- Fix B-006: survey_selections propagation

**Pre-conditions:**
- Phase Impact Report approved
- Architecture Review Board consulted on Gatekeeper execution architecture
- All 6 REQ-IDs confirmed (REQ-001 through REQ-006)

---

*Version 1.0 — OS #7 — June 25, 2026*
*Every production push gets a release entry*
