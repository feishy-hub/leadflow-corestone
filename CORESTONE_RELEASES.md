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

### Version 2.3.0 — OS #7 (June 25, 2026) — Foundation Fixes
**REQ-IDs:** REQ-001, REQ-002, REQ-003, REQ-004, REQ-005, REQ-006

**Features / Fixes:**
- STORAGE ABSTRACTION LAYER: UI → Services → Repository → StorageAdapter → localStorage. No business logic touches localStorage directly. Migration hook ready for Supabase swap.
- Export/Import/Backup functions added (exportAllData, importAllData, showStorageStatus)
- B-001 FIXED: Gatekeeper is now an execution engine. gkApprove() dispatches to gkExecuteAction() which runs the actual action based on action_type. Audit record written on every execution.
- B-002 FIXED: takeoffToEstimate() now saves complete estimate to estimates table with correct tax calculation before routing to Gatekeeper
- B-003 FIXED: calcEstTotal() now applies 8% tax to materials only. Returns subtotal_materials, subtotal_labor, subtotal_subs, subtotal_permits, contractor_fee (20%), grand_total separately.
- B-004 FIXED: callIntel.call_duration_seconds and call_ended_at captured in endCallOnly() before clearing. Full callIntel snapshot saved to lead on call end.
- B-005 FIXED: generatePostCallReport() now saves all 12 structured data arrays individually: ai_interest_score, ai_what_client_said, ai_objections_raised, ai_agreements_made, ai_what_client_must_send, ai_what_we_must_send, ai_bid_notes, ai_permit_flags, ai_timeline_impact, ai_finish_estimate_recommendation, ai_follow_up_sequence, ai_recommendation
- B-006 FIXED: Survey save now creates individual Requirements records for every selection and routes to Gatekeeper with action_type='survey_review'

**Breaking Changes:** None — all fixes are additive

**Known Issues:** None from this release. Storage abstraction layer uses same lsAll/lsSave interface — backward compatible.

---

## NEXT PLANNED RELEASE: 2.4.0 — Phase 1 Build
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

---

### Version 2.4.0 — OS #7 Architecture Consolidation (June 25, 2026)

**Phase A — Foundation & Critical Fixes:**
- CSS --teal-bg variable defined (was used 8x, never defined — all new UI was broken)
- previewProposal() built — print-ready proposal with signature lines
- signProposal() built — in-office signing modal
- calcEstTotal() defensive JSON.parse — string line_items now handled everywhere
- Proposal list cards now open openProposal(), show real total_price, 3 action buttons
- pgComments() built — universal communication hub replacing stub
- Estimate summary panel shows full breakdown: labor, materials, subs, permits, 8% tax (materials only), 20% fee
- Universal component library: statusBadge(), priorityBadge(), actionMenu(), emptyState(), sectionHeader()
- Storage widget in header: live % used, Backup button always visible
- Global search upgraded: real dropdown searching leads, jobs, estimates, proposals, requirements, subs

**Phase B — Module Completions & Workflow Wiring:**
- 3-stage bill approval chain: Stage 1 PM → Stage 2 Site Manager → Stage 3 Owner pays
- Bill cards show smart stage-aware action buttons
- Budget reads budget_baseline || contract_price || budget (jobs from proposals now costed correctly)
- Quick Add expanded: Requirements, Survey, Email Intake, Backup
- Lead cards show survey status, deposit indicator, last call date
- Dashboard Phase 1 pipeline health row: surveys to send, surveys awaiting, reqs needing estimate, proposals unsigned, bills ready to pay
- GK badge unified: updateGKBadge() syncs both sidebar and topbar badges
- Requirements auto-created from call intelligence (preferences + commitments)
- addToGatekeeper() now sets action_type properly for gkExecuteAction dispatcher
- auditLog() helper added — unified audit logging with required fields
- Page title updated to Enterprise Construction Operating System

**Breaking Changes:** None — all additive

**Known Issues:** None from this release
