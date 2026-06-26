# CORESTONE REQUIREMENTS — MASTER INVENTORY
## Version 1.0 | OS #7 — June 25, 2026
## Last Updated: OS #7 | Updated By: Claude (CTO/Architect)

---

## RULE
Nothing may be implemented without a Requirement ID.
Nothing may be removed without updating this document.
Every requirement must have a status before implementation begins.

---

## REQUIREMENT SCHEMA

| Field | Description |
|---|---|
| REQ-ID | Unique identifier (REQ-001, REQ-002...) |
| Title | Short name |
| Description | Full description of what is required |
| Source | Who/what generated this requirement |
| Status | Captured / Reviewed / Approved / Deferred / Implemented / Rejected / Superseded |
| Priority | P1 (must have) / P2 (should have) / P3 (nice to have) |
| Affected Modules | Which systems this touches |
| Decision Reference | Link to CORESTONE_DECISIONS.md entry |
| Implemented Version | Release version when implemented |
| Notes | Any additional context |

---

## PHASE 1 REQUIREMENTS — Lead → Proposal → Signature

### FOUNDATION FIXES (must complete before Phase 1 build)

| REQ-ID | Title | Description | Source | Status | Priority | Affected Modules |
|---|---|---|---|---|---|---|
| REQ-001 | Fix Gatekeeper execution | Gatekeeper approve must execute the intended action, not just change status | OS #6 Audit | Approved | P1 | Gatekeeper, all modules |
| REQ-002 | Fix takeoffToEstimate() | Function must save generated estimate to estimates table in database | OS #6 Audit | Approved | P1 | Takeoff, Estimates |
| REQ-003 | Fix tax calculation | Tax (8%) applies to materials only — not labor, subs, or permits (NY law) | OS #6 Audit | Approved | P1 | Estimates |
| REQ-004 | Fix callIntel persistence | callIntel object must be written to lead record on call end | OS #6 Audit | Approved | P1 | Call Center, Lead Engine |
| REQ-005 | Fix post-call data save | All 12 extracted data arrays must save to correct fields — not dumped as text | OS #6 Audit | Approved | P1 | Call Center, Lead Engine |
| REQ-006 | Wire survey_selections | Survey selections must propagate to: Requirements Engine, Estimate, Selections module, Purchasing | OS #6 Audit | Approved | P1 | Survey, Requirements, Estimates, Purchasing |

### LEAD ENGINE

| REQ-ID | Title | Description | Source | Status | Priority | Affected Modules |
|---|---|---|---|---|---|---|
| REQ-007 | Lead creation — all sources | Lead can be created from: manual entry, Angi email paste, screenshot import, future: email auto-intake | OS #1-5 | Implemented | P1 | Lead Engine |
| REQ-008 | Lead AI generation | On lead save: generate phone script, objection responses, follow-up email, next action, address intel | OS #2 | Implemented | P1 | Lead Engine, AI Engine |
| REQ-009 | Lead pipeline stages | Stages: new → contacted → proposal_sent → negotiating → signed → lost | OS #1 | Implemented | P1 | Lead Engine, CRM |
| REQ-010 | Follow-up sequence | Day 1/3/5/7/14 AI-drafted messages routed to Gatekeeper for approval | OS #2 | Implemented | P1 | Follow-Up Engine, Gatekeeper |
| REQ-011 | Client intelligence profile | Risk score, predicted outcome, payment behavior, scope tendency, recommended approach | OS #5 | Implemented | P1 | Lead Engine, CRM |
| REQ-012 | Email auto-intake | Angi lead emails forwarded → AI classifies → lead created automatically | OS #6 | Approved | P1 | Lead Engine, Email, n8n |

### SURVEY

| REQ-ID | Title | Description | Source | Status | Priority | Affected Modules |
|---|---|---|---|---|---|---|
| REQ-013 | Survey trigger on deposit | $5,000 deposit received → survey automatically sent to client | OS #1 | Captured | P1 | Survey, Lead Engine |
| REQ-014 | Dynamic survey questions | Questions adapt based on job type (kitchen vs addition vs new build) | OS #7 | Captured | P1 | Survey |
| REQ-015 | Survey Magic Link delivery | Client receives unique link — no login required to complete survey | OS #7 | Captured | P1 | Survey, Notifications |
| REQ-016 | Survey → Requirements propagation | Every survey answer automatically creates or updates a Requirements record | OS #7 | Captured | P1 | Survey, Requirements Engine |
| REQ-017 | Survey completion notification | Owner and PM notified when client completes survey | OS #7 | Captured | P1 | Survey, Notifications |
| REQ-018 | Survey partial save | Client can save progress and return — survey is never lost | OS #7 | Captured | P2 | Survey |

### REQUIREMENTS ENGINE

| REQ-ID | Title | Description | Source | Status | Priority | Affected Modules |
|---|---|---|---|---|---|---|
| REQ-019 | Requirement from any source | Requirements captured from: survey, call, email, daily log, manual entry | OS #7 Directive | Captured | P1 | Requirements Engine |
| REQ-020 | Data entered once propagates | Client says "double-hung windows" → updates: Requirements, Takeoff assumptions, Estimate, Proposal, History | OS #7 Directive | Captured | P1 | Requirements Engine, all Phase 1 modules |
| REQ-021 | Requirement status tracking | Every requirement has a status: captured → reviewed → confirmed → in_estimate → in_proposal → implemented | OS #7 | Captured | P1 | Requirements Engine |
| REQ-022 | Requirement → Estimate link | Each requirement links to one or more estimate line items | OS #7 | Captured | P1 | Requirements Engine, Estimates |
| REQ-023 | Uncosted requirement flag | If requirement exists without an estimate line → flagged for estimator | OS #7 | Captured | P1 | Requirements Engine, Estimates |
| REQ-024 | Client-visible requirements | Client can view their confirmed requirements via portal | OS #7 | Captured | P2 | Requirements Engine, Client Portal |

### CALL CENTER

| REQ-ID | Title | Description | Source | Status | Priority | Affected Modules |
|---|---|---|---|---|---|---|
| REQ-025 | Live AI co-pilot | AI reads transcript every 5 seconds, updates suggestion card | OS #2-5 | Implemented | P1 | Call Center |
| REQ-026 | Checklist auto-detection | 6 checklist items auto-green on keyword detection (no AI credits) | OS #5 | Implemented | P1 | Call Center |
| REQ-027 | Commitment capture | AI logs commitments from both sides automatically during call | OS #5 | Implemented | P1 | Call Center |
| REQ-028 | Post-call report | Full debrief, follow-up email, 12 structured data arrays saved to lead | OS #5, REQ-005 | Approved | P1 | Call Center, Lead Engine |
| REQ-029 | Requirement extraction from call | AI extracts client requirements from call transcript → Requirements Engine | OS #7 | Captured | P1 | Call Center, Requirements Engine |

### PLAN UPLOAD + TAKEOFF

| REQ-ID | Title | Description | Source | Status | Priority | Affected Modules |
|---|---|---|---|---|---|---|
| REQ-030 | PDF plan upload | Architect plans uploaded as PDF → stored in Documents module | OS #1 | Implemented | P1 | Documents, Takeoff |
| REQ-031 | AI takeoff extraction | AI reads PDF plan → extracts structured quantities (concrete CY, rebar LF, windows, doors, outlets, etc.) | OS #6 Gap | Approved | P1 | Takeoff, AI Engine |
| REQ-032 | Manual takeoff entry | PM/Estimator can manually enter or edit any takeoff quantity | OS #7 | Captured | P1 | Takeoff |
| REQ-033 | Takeoff → Estimate save | Approved takeoff automatically populates and saves estimate line items | REQ-002 | Approved | P1 | Takeoff, Estimates |
| REQ-034 | Takeoff confidence scoring | AI flags low-confidence quantities for manual review | OS #6 Blueprint | Captured | P2 | Takeoff |

### ESTIMATING

| REQ-ID | Title | Description | Source | Status | Priority | Affected Modules |
|---|---|---|---|---|---|---|
| REQ-035 | Line item estimate | Full estimate with type, qty, unit, rate, markup, tax flag per line | OS #1-5 | Implemented | P1 | Estimates |
| REQ-036 | Tax rule locked | Materials: 8% tax. Labor: 0%. Subs: 0%. Permits: 0%. Locked. NY law. | REQ-003 | Approved | P1 | Estimates |
| REQ-037 | 20% contractor fee | Fee applied to subtotal (after tax). Displayed separately. | OS #1 | Implemented | P1 | Estimates |
| REQ-038 | Estimate versioning | Every estimate revision saves as new version — no version is ever lost | OS #7 | Captured | P1 | Estimates |
| REQ-039 | Estimate → Proposal one click | Approved estimate generates proposal draft in one action | OS #7 | Captured | P1 | Estimates, Proposals |
| REQ-040 | Uncosted requirements flag | Estimate shows warning if any requirement has no estimate line | REQ-023 | Captured | P1 | Estimates, Requirements Engine |

### PROPOSAL + SIGNATURE

| REQ-ID | Title | Description | Source | Status | Priority | Affected Modules |
|---|---|---|---|---|---|---|
| REQ-041 | 9-section construction agreement | Proposal includes: scope, schedule, payment, permits, subs, changes, warranty, dispute, termination | OS #3 | Implemented | P1 | Proposals |
| REQ-042 | E-signature native | Typed name + IP capture + timestamp — legally binding | OS #3 | Implemented | P1 | Proposals, Signature |
| REQ-043 | Proposal viewed tracking | System records when client opens proposal (timestamp + IP) | OS #3 | Implemented | P1 | Proposals |
| REQ-044 | Proposal revision | PM can revise and resend proposal — all versions saved | OS #7 | Captured | P1 | Proposals |
| REQ-045 | Signature → Job creation | Signed proposal automatically triggers: Job created, Budget baseline set, Team notified | OS #7 | Captured | P1 | Proposals, Jobs, Gatekeeper |
| REQ-046 | Proposal expiration | Proposal expires after 30 days if unsigned — configurable | OS #6 Blueprint | Captured | P2 | Proposals |

### PLATFORM (all Phase 1 modules)

| REQ-ID | Title | Description | Source | Status | Priority | Affected Modules |
|---|---|---|---|---|---|---|
| REQ-047 | Universal object standard | Every object: comments, messages, files, mentions, tasks, history, search, permissions, notifications | OS #7 Directive | Captured | P1 | All modules |
| REQ-048 | Audit trail — every change | Every field change, status change, AI action logged with old value, new value, who, when, why | OS #7 Blueprint | Captured | P1 | All modules |
| REQ-049 | Gatekeeper — all AI routes here | No AI action executes without Gatekeeper approval. Owner only approves. | OS #1 | Implemented (broken — REQ-001) | P1 | Gatekeeper |
| REQ-050 | Search — universal | Search by client name, address, job number, amount, date across all modules | OS #7 Blueprint | Captured | P1 | Search, All modules |
| REQ-051 | Notifications — every event | Push + in-app + email for every significant event | OS #7 Blueprint | Captured | P1 | Notifications |
| REQ-052 | Test accounts + demo data | Owner, Employee, Customer, Subcontractor test accounts with realistic seed data | OS #7 Directive | Captured | P1 | All modules |
| REQ-053 | Voice input — all forms | Mic button on every text field system-wide | OS #3 | Partial | P2 | All forms |

---

## REQUIREMENTS STATISTICS

| Status | Count |
|---|---|
| Implemented | 11 |
| Implemented (broken) | 2 |
| Approved (ready to build) | 8 |
| Captured (needs review) | 32 |
| Deferred | 0 |
| Rejected | 0 |
| **Total** | **53** |

---

*Version 1.0 — OS #7 — June 25, 2026*
*Every implementation must reference a REQ-ID*
