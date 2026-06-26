# CORESTONE BLUEPRINT — MASTER ARCHITECTURE
## Single Source of Truth | Version 1.0 | OS #7 — June 25, 2026
## Last Updated: OS #7 | Updated By: Claude (CTO/Architect)

---

## RULE
This document is read before ANY implementation begins.
Nothing in the system may exist that is not documented here.
Nothing documented here may be removed silently.

---

## PLATFORM LAYERS

| Layer | Systems | Role |
|---|---|---|
| Layer 1: Intelligence | Business Brain, AI Engine, Event Engine | Thinks, decides, recommends — runs 24/7 |
| Layer 2: Revenue | Lead Engine, Call Center, CRM, Proposals, Estimating, Bidding | Converts strangers into signed contracts |
| Layer 3: Delivery | Takeoff, Scheduling, Construction, Purchasing, Permits, Subcontractors | Executes the job from permit to CO |
| Layer 4: Finance | Billing, Invoices, Bills, Purchase Orders, Change Orders, Lien Waivers | Controls money in and money out |
| Layer 5: Platform | Gatekeeper, Documents, Reporting, Notifications, Settings, Admin | Infrastructure every other layer depends on |

---

## ALL 20 SYSTEMS

| # | System | Purpose | Key Dependencies |
|---|---|---|---|
| 01 | Lead Engine | Captures inbound leads from all sources | CRM, Call Center, Follow-Up Engine, Gatekeeper |
| 02 | Call Center | Live call AI co-pilot, script, checklist, commitment capture | Lead Engine, CRM, Gatekeeper, Business Brain |
| 03 | CRM | Full client record: history, intelligence, communication, documents | All systems |
| 04 | Follow-Up Engine | Automated Day 1/3/5/7/14 sequences, AI-drafted messages | Lead Engine, CRM, Notifications, Gatekeeper |
| 05 | Survey | Dynamic client survey triggered on deposit. Captures preferences, timeline, scope | Lead, CRM, Requirements Engine, Estimate |
| 06 | Requirements Engine | Structured capture of all client requirements from any source | Survey, Call Center, Daily Log, Estimate, Proposal |
| 07 | Takeoff | Structured quantity extraction from plans | Estimates, Business Brain |
| 08 | Estimating | Line-item estimates with markup, AI assist, correct tax logic | Takeoff, Proposals, Bidding, Budget |
| 09 | Proposals | 9-section construction agreement, e-signature, client preview | Estimates, CRM, Documents, Gatekeeper |
| 10 | Bidding | Magic Link sub submissions, AI bid ranking, award | Estimates, Subcontractors, Purchasing, Gatekeeper |
| 11 | Subcontractors | COI, W-9, Hold Harmless, lien waivers, performance history | Bidding, Purchasing, Bills, Scheduling |
| 12 | Purchasing | POs linked to estimates, supplier management, delivery confirm | Estimates, Bills, Budget, Scheduling |
| 13 | Permits | Permit status, inspection scheduling, jurisdiction rules | Scheduling, Construction, Gatekeeper |
| 14 | Scheduling | 13-phase Gantt, auto-task triggers, sub coordination | Permits, Construction, Purchasing, Notifications |
| 15 | Construction | Daily logs, photo logs, punch list, RFIs, specs, selections | Scheduling, Documents, Billing, Business Brain |
| 16 | Billing | Invoices to client, draw schedule, milestone triggers | Construction, Financial, CRM, Gatekeeper |
| 17 | Financial | Budget vs actual, cash flow, job costing, AP/AR summary | All financial objects |
| 18 | Documents | Central file store for all objects | All systems |
| 19 | Reporting | KPI engine, job profitability, lead conversion, sub performance | All systems — read only |
| 20 | Business Brain | Continuous AI: pattern recognition, org memory, risk scoring | All systems |

---

## PHASE 1 SCOPE (CURRENT BUILD TARGET)

**Flow:** Lead → Survey → Communication → Requirements → Plan Upload → Takeoff → Estimate → Proposal → Signature

**Modules in scope:**
- Lead Engine
- Survey (dynamic)
- Communication
- Customer Timeline
- Requirements Engine
- Plan Upload
- Takeoff (Manual + AI)
- Estimating
- Proposal
- Signature
- Search
- Notifications
- Permissions
- Audit

**Hard stop:** Proposal signed. No construction. No billing. No additional modules.

---

## BUSINESS OBJECT CATALOG

### UNIVERSAL OBJECT STANDARD
Every object in Corestone OS must support:
- Comments (internal + client-facing)
- Messages
- File attachments
- @Mentions
- Tasks
- History / Timeline
- Search
- Permissions
- Notifications
- Manual workflow
- AI workflow

### OBJECT: LEAD
| Attribute | Value |
|---|---|
| Purpose | Potential client from any inbound source |
| Fields | id, client_name, phone, email, address, job_type, estimated_value, lead_source, timeline, owns_property, financing, competing_bids, notes, stage, next_followup, deposit_status, created_at, assigned_to |
| Statuses | new → contacted → proposal_sent → negotiating → signed → lost |
| Relationships | spawns: CRM Record, Survey, Proposal, Call Log, Follow-Up Sequence |
| AI Fields | risk_score, predicted_outcome, payment_behavior, scope_tendency, comm_style, recommended_approach, watch_flags, next_action |
| Permissions | Owner/Admin: full \| Sales/Estimator: view+edit \| PM: view \| Client: none |

### OBJECT: SURVEY
| Attribute | Value |
|---|---|
| Purpose | Dynamic client questionnaire triggered after deposit. Captures all preferences before any design or estimating begins. |
| Fields | id, lead_id, client_id, triggered_at, completed_at, responses[], preferences{}, timeline_preference, budget_range, style_preferences, special_requirements, status |
| Statuses | not_sent → sent → in_progress → completed → expired |
| Relationships | triggered by: Lead (on deposit) \| feeds: Requirements Engine, Estimate, Selections, CRM |
| AI Fields | preference_summary, requirement_flags, scope_complexity_score, estimated_budget_range |
| Permissions | Owner/Admin/PM: full \| Client: complete own survey only |

### OBJECT: REQUIREMENTS
| Attribute | Value |
|---|---|
| Purpose | Single structured record of every client requirement from every source. Never lost. Always current. |
| Fields | id, job_id, client_id, requirement_id, title, description, source (survey/call/log/manual), status, priority, category, captured_at, captured_by, linked_estimate_line, linked_selection, notes |
| Statuses | captured → reviewed → confirmed → in_estimate → in_proposal → implemented → change_order |
| Relationships | source: Survey, Call Center, Daily Log, Client message \| feeds: Estimate, Proposal, Selections, CO |
| AI Fields | scope_risk_flag, cost_implication_estimate, change_order_risk |
| Permissions | Owner/Admin/PM/Estimator: full \| Client: view confirmed requirements only |

### OBJECT: TAKEOFF
| Attribute | Value |
|---|---|
| Purpose | Structured quantity extraction from architectural plans |
| Fields | id, job_id, plan_file_id, extracted_at, concrete_cy, rebar_lf, framing_bf, drywall_sf, roofing_sq, windows[], doors[], outlets, switches, fixtures, plumbing_fixtures, notes, confidence_score |
| Statuses | pending → processing → complete → reviewed → approved |
| Relationships | source for: Estimate line items \| linked to: Plan files, Job |
| AI Fields | confidence_score per quantity, flagged_items, suggested_adjustments, comparison_to_similar_jobs |
| Permissions | Owner/Admin/Estimator: full \| PM: view \| others: none |

### OBJECT: ESTIMATE
| Attribute | Value |
|---|---|
| Purpose | Complete cost breakdown. Single source of truth for all pricing. |
| Fields | id, job_id, takeoff_id, version, line_items[], subtotal_labor, subtotal_materials, subtotal_subs, subtotal_permits, subtotal_other, tax_amount (materials ONLY — NY law), contractor_fee (20%), total, status, sent_at, approved_at, notes |
| Statuses | draft → reviewed → sent → approved → revised → archived |
| Tax Rule | Materials: 8% \| Labor: 0% \| Subs: 0% \| Permits: 0% (NY law — LOCKED) |
| Relationships | source for: Proposal, Budget, Bids \| linked to: Takeoff, Job, Client |
| AI Fields | margin_prediction, risk_factors, cost_per_sqft_comparison, scope_gap_flags |
| Permissions | Owner/Admin/Estimator: full \| PM: view \| Client: view approved version only |

### OBJECT: PROPOSAL
| Attribute | Value |
|---|---|
| Purpose | Client-facing document combining scope, estimate, and 9-section construction agreement |
| Fields | id, job_id, estimate_id, client_id, version, sections[9], total_price, deposit_amount, payment_schedule, sent_at, viewed_at, signed_at, signatory_name, signatory_ip, status |
| Statuses | draft → sent → viewed → signed → recalled → expired |
| Relationships | source for: Job (on signing), Deposit trigger \| linked to: Estimate, Client |
| AI Fields | predicted_sign_rate, optimal_send_time, negotiation_risk_flags |
| Permissions | Owner/Admin: full \| Sales/Estimator: create+send \| Client: sign only |

---

## EVENT ENGINE

### EVENT: Client states window preference
1. CAPTURE — Call transcript / Survey response
2. CLASSIFY — Material Selection preference
3. STORE — Requirements Engine record created
4. PROPAGATE — Estimate line flagged, Selections updated, Takeoff assumption updated
5. GATEKEEPER — "Window preference captured. Add to estimate and selections?" → Approve/Reject
6. NOTIFY — PM notified

### EVENT: Scope change detected
1. CAPTURE — Daily Log / Client message
2. CLASSIFY — Out-of-scope work
3. STORE — Requirements Engine flagged as change_order risk
4. GATEKEEPER — "Scope change detected. Draft CO?" → Approve
5. PROPAGATE — CO drafted, sent to client, Budget updated on approval

### EVENT: Proposal signed
1. CAPTURE — E-signature received
2. STORE — Proposal status → signed, signatory_ip + timestamp recorded
3. PROPAGATE — Job created, Budget baseline set, Survey triggered (if not done), Phase 1 complete
4. GATEKEEPER — "Proposal signed. Create job and activate project?" → Approve
5. NOTIFY — Owner, PM, Client confirmation

---

## SHARED COMPONENT LIBRARY

| Component | Purpose | Used By |
|---|---|---|
| StatusBadge | Consistent status rendering | All systems |
| CommentThread | Threaded comments, @mentions, internal/client toggle | All objects |
| ActivityTimeline | Chronological event feed, audit trail | All objects |
| FileAttachment | Upload, preview, download, tagged by type | All systems |
| AIActionPanel | Gatekeeper card: recommendation + Approve/Edit/Reject | Gatekeeper + every module |
| SearchBar | Universal search across all objects | All modules |
| ApprovalChain | Multi-stage approval with stage tracking | Bills, COs, Proposals, POs |
| MagicLinkForm | Tokenized external form for subs and clients | Bidding, Lien Waivers, E-Signature, Survey |
| VoiceInput | Mic button + Web Speech API + auto-fill | All forms |
| CostLineItem | Estimate line item: type, qty, unit, rate, markup, tax flag | Estimates, COs, POs, Bills |
| SignatureBlock | Typed name + IP + timestamp = legally binding | Proposals, COs, Lien Waivers |
| JobContextBar | Active job name, phase, client, budget at top of module | All modules |

---

## PERMISSION MODEL

| Action | Owner | Admin | Estimator | Sales | PM | Sub | Client |
|---|---|---|---|---|---|---|---|
| View all leads | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ | ✗ |
| Edit leads | ✓ | ✓ | ✓ | ✓ | ✗ | ✗ | ✗ |
| Create estimates | ✓ | ✓ | ✓ | ✗ | ✗ | ✗ | ✗ |
| Approve estimate | ✓ | ✓ | ✗ | ✗ | ✗ | ✗ | ✗ |
| Send proposal | ✓ | ✓ | ✓ | ✓ | ✗ | ✗ | ✗ |
| Sign proposal | ✓ | ✗ | ✗ | ✗ | ✗ | ✗ | ✓ |
| Complete survey | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✓ |
| View requirements | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ | ✓ (own) |
| Approve Gatekeeper | ✓ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ |
| Change settings | ✓ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ |

---

## AUDIT SYSTEM

Every change to every object is recorded. Append-only. Never deleted.

| Field | Type | Description |
|---|---|---|
| id | UUID | Unique audit record |
| object_type | String | Lead, Estimate, Proposal, etc. |
| object_id | UUID | Object that changed |
| action | String | created, updated, status_changed, approved, rejected, sent, signed |
| field_changed | String | Specific field (null if created) |
| old_value | Text | Previous value |
| new_value | Text | New value |
| changed_by_user | UUID | User ID (null if AI) |
| changed_by_ai | Boolean | True if AI initiated |
| ai_reasoning | Text | AI stated reason |
| gatekeeper_item_id | UUID | Authorizing Gatekeeper approval |
| timestamp | DateTime | Exact UTC timestamp |
| rollback_available | Boolean | Whether change can be reversed |

---

## INFRASTRUCTURE

| Item | Value |
|---|---|
| Live URL | https://leadflow-corestone.vercel.app |
| GitHub Repo | feishy-hub/leadflow-corestone |
| Database | localStorage (Supabase migration: Phase 2 prerequisite) |
| AI Proxy | /api/claude on Vercel |
| Deployment | Auto-deploy on GitHub push |

---

## CRITICAL BROKEN ITEMS (must fix before Phase 1 build)

| # | What Is Broken | Impact |
|---|---|---|
| B-001 | Gatekeeper approval is a no-op — changes status only | Every AI approval for past sessions did nothing |
| B-002 | takeoffToEstimate() never saves to estimates table | Takeoff → Estimate flow is broken |
| B-003 | calcEstTotal() applies tax to labor, subs, permits | Illegal under NY law |
| B-004 | callIntel never written to database | All live call intelligence lost on call end |
| B-005 | Post-call saves only 4 of 12 data arrays | 8 arrays of client data permanently lost |
| B-006 | survey_selections has zero downstream consumers | Survey data collected but never used |

---

*Version 1.0 — OS #7 — June 25, 2026*
*Next update required after any architectural change*
