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

---

---

# PART 2: TARGET ENTERPRISE ARCHITECTURE

## GOVERNING PRINCIPLE — DESIGN NOW, BUILD WHEN READY

> "The Blueprint must always stay ahead of the implementation."
> — Feishy Felberbaum, OS #8

Every major subsystem must be fully designed in this document before implementation begins.
Future implementation phases execute the design — they do not create it.
Every module built today must align with the long-term enterprise model defined here,
even if that module only implements a subset of the final design.

No section below is a build order. It is the permanent target.
Implementation timing is governed by the Phase Map at the end of this document.

---

## SUBSYSTEM 1: OBJECT MODEL

### Principle
Corestone does not think in pages.
Corestone thinks in Business Objects.
Every screen is simply a view of one or more objects.
The same object renders differently depending on role, context, and visibility rules.

### Universal Object Interface
Every Corestone business object — without exception — must support:

| Capability | Description |
|---|---|
| `id` | UUID — globally unique, immutable |
| `org_id` | Multi-company isolation (future) |
| `project_id` | Job-level scoping |
| `status` | Current lifecycle stage |
| `version` | Optimistic concurrency control |
| `created_at` / `updated_at` | Timestamps |
| `created_by` / `updated_by` | User attribution |
| `comments[]` | Threaded, internal + client-facing |
| `attachments[]` | Files tagged by type |
| `tasks[]` | Assigned work items |
| `messages[]` | Outbound communications |
| `history[]` | Immutable audit trail |
| `visibility{}` | Per-role, per-field rendering rules |
| `permissions{}` | Action-level access control |
| `notifications[]` | Who gets alerted on what |
| `tags[]` | User-defined labels |
| `ai_metadata{}` | AI confidence, flags, recommendations |
| `workflow_state` | Current workflow stage |
| `event_subscriptions[]` | What events this object publishes |

### Complete Business Object Catalog

| # | Object | Key Fields | Spawns | Consumed By |
|---|---|---|---|---|
| 1 | Lead | name, phone, email, source, stage, score | Survey, Client, Call Log, Follow-Up | CRM, Proposals |
| 2 | Client | contact_info, history, credit_score, comm_pref | Projects, Invoices | All modules |
| 3 | Contact | name, role, client_id, phone, email | Messages | CRM, Proposals |
| 4 | Property | address, type, sqft, year_built, parcel | Projects, Inspections | Takeoff, Permits |
| 5 | Project | property_id, client_id, type, phase, budget | All child objects | All modules |
| 6 | Survey | lead_id, questions[], responses[], status | Requirements | Requirements Engine |
| 7 | Requirements | project_id, source, priority, status, linked_estimate | Estimate lines, Selections | Estimate, Proposal, CO |
| 8 | Plan | project_id, file_url, type, version | Takeoff, RFIs | Takeoff, Construction |
| 9 | Takeoff | plan_id, quantities{}, confidence{}, method | Estimate | Estimate |
| 10 | Estimate | project_id, takeoff_id, line_items[], pricing_method | Proposal, Budget | Financial |
| 11 | Estimate Item | estimate_id, trade, CSI, qty, unit, method, markup, tax_flag, photos[], vendor_bids[], confidence_score | Budget lines, PO lines | Estimate, Proposal |
| 12 | Bid Package | estimate_id, scope_items[], invited_subs[], due_date | Vendor Quotes, Subcontractor Awards | Bidding |
| 13 | Vendor Quote | bid_package_id, sub_id, amount, line_items[], submitted_at | Estimate Item (comparison) | Bidding |
| 14 | Proposal | estimate_id, client_id, sections[], visibility_config, payment_schedule | Contract, Job | Signature, Client Portal |
| 15 | Contract | proposal_id, signed_at, signatory, ip, terms | Job | Legal, Financial |
| 16 | Job | project_id, contract_id, phase, budget_id, schedule_id | All execution objects | All Phase 2+ modules |
| 17 | Budget | job_id, estimate_id, lines[], committed[], actual[] | Job Costing | Financial |
| 18 | Budget Line | budget_id, estimate_item_id, budgeted, committed, actual | Job Costing | Financial |
| 19 | Schedule | job_id, phases[], milestones[], critical_path | Tasks, Purchasing, Billing | Construction |
| 20 | Task | schedule_id, assigned_to, trade, due_date, status | Daily Log | Construction |
| 21 | Purchase Order | job_id, vendor_id, line_items[], status | Bills, Inventory | Purchasing |
| 22 | Bill | po_id, vendor_id, amount, due_date, paid_at | AP | Financial |
| 23 | Change Order | job_id, trigger, scope_change, cost_delta, approved_at | Budget, Contract | Construction, Financial |
| 24 | Daily Log | job_id, date, crew[], weather, progress, photos[], notes | Business Brain | Construction |
| 25 | Photo | object_id, object_type, file_url, tagged_trade, ai_flags | Business Brain | All modules |
| 26 | RFI | job_id, question, submitted_by, assigned_to, response, status | Plans, Schedule | Construction |
| 27 | Selection | job_id, category, client_choice, spec, allowance, delta | CO, Purchasing | Construction |
| 28 | Inspection | job_id, type, scheduled_at, result, inspector, photos[] | Schedule, Permits | Construction |
| 29 | Permit | job_id, jurisdiction, type, applied_at, approved_at, status | Schedule | Construction |
| 30 | Invoice | job_id, milestone_id, amount, sent_at, paid_at, status | Payments, AR | Financial |
| 31 | Payment | invoice_id, amount, method, received_at, applied_to | AR, Job Costing | Financial |
| 32 | Lien Waiver | job_id, sub_id, type, amount, signed_at | Bills, AP | Financial, Legal |
| 33 | Subcontractor | company, license, COI_expiry, W9_on_file, performance_score | Bid Packages, POs | Bidding, Purchasing |
| 34 | Vendor | company, contact, categories[], pricing_history[] | POs, Bills | Purchasing |
| 35 | Document | object_id, object_type, file_url, type, version | All objects | Documents |
| 36 | Message | from, to[], body, channel, sent_at, thread_id | Notifications | CRM, Portals |
| 37 | Notification | user_id, trigger_event, read_at, action_url | UI, Email, SMS | All modules |
| 38 | Workflow Instance | workflow_id, object_id, current_step, history[] | Gatekeeper | Workflow Engine |
| 39 | Gatekeeper Item | action_type, payload, status, approved_by, approved_at, ai_reasoning | All execution | Gatekeeper |
| 40 | Audit Entry | object_id, action, old_value, new_value, changed_by, timestamp | All objects | Reporting |

---

## SUBSYSTEM 2: VISIBILITY ENGINE

### Principle
The same data renders differently for every role.
Visibility is not a set of pages — it is a runtime rendering rule applied to every object, field, section, action, and button.
Nothing is visible by accident. Everything is visible by design.

### Visibility Rule Schema

```
VisibilityRule {
  id:           UUID
  org_id:       UUID
  object_type:  string        // "estimate", "proposal", "job", etc.
  field_name:   string | "*"  // specific field or wildcard for whole object
  section_name: string | null // proposal sections, portals sections
  role:         Role          // owner | admin | estimator | pm | sub | client | accounting | architect | inspector | vendor
  can_view:     boolean
  can_edit:     boolean
  can_export:   boolean
  condition:    string | null // e.g. "status === 'approved'" — evaluated at runtime
  overrideable: boolean       // can object-level rules override this?
  created_by:   UUID
  created_at:   DateTime
}
```

### Resolution Order (highest wins)
1. Object-level override (set explicitly on this specific object instance)
2. Project-level override (set for this project)
3. Role-level rule (from VisibilityRule table)
4. System default (safe default per role per object type)

### System Defaults (baseline — overrideable)

| Object | Owner | Admin | Estimator | PM | Sub | Client | Accounting |
|---|---|---|---|---|---|---|---|
| Estimate (full) | ✓ view+edit | ✓ view+edit | ✓ view+edit | view | ✗ | ✗ | view |
| Estimate markup | ✓ | ✓ | ✓ | ✗ | ✗ | ✗ | ✓ |
| Estimate vendor costs | ✓ | ✓ | ✓ | view | ✗ | ✗ | view |
| Proposal total | ✓ | ✓ | ✓ | view | ✗ | ✓ (own) | view |
| Proposal internal notes | ✓ | ✓ | ✓ | view | ✗ | ✗ | ✗ |
| Budget actuals | ✓ | ✓ | view | ✓ | ✗ | ✗ | ✓ |
| Daily Log | ✓ | ✓ | view | ✓ | own | ✗ | ✗ |
| Invoice | ✓ | ✓ | ✗ | view | ✗ | ✓ (own) | ✓ |
| Sub scope | ✓ | ✓ | ✓ | ✓ | ✓ (own) | ✗ | ✗ |

### Proposal Section Visibility (one proposal, many audiences)
Every proposal section carries a `visibility` config — togglable before sending:

| Section | Default: Client | Default: Internal |
|---|---|---|
| Cover Page | ✓ | ✓ |
| Company Story | ✓ | ✓ |
| Scope of Work | ✓ | ✓ |
| Payment Schedule | ✓ | ✓ |
| Material Selections | ✓ | ✓ |
| Timeline | ✓ | ✓ |
| Allowances | ✓ | ✓ |
| Optional Upgrades | ✓ | ✓ |
| Warranty | ✓ | ✓ |
| Internal Notes | ✗ | ✓ |
| Vendor Costs | ✗ | ✓ |
| Markup Breakdown | ✗ | ✓ |
| AI Analysis | ✗ | ✓ |
| Scope Risk Flags | ✗ | ✓ |

### Preview-as-Role
Before publishing or sending any object, Corestone renders a complete preview from the perspective of any target role.
No data is changed. No action is taken. The rendering engine re-applies visibility rules for the target role and displays the result.

Supported preview targets:
- Preview as Client
- Preview as Electrical Sub
- Preview as Plumbing Sub
- Preview as Architect
- Preview as Accounting
- Preview as Superintendent
- Preview as Inspector
- Preview as Vendor
- Preview as Owner

### Implementation Phase
Design: Complete (this document).
Build: Phase 2 — requires Supabase for row-level visibility storage.

---

## SUBSYSTEM 3: EVENT ENGINE

### Principle
Every business object change is a published event.
Other modules subscribe to events rather than being hardcoded to call each other.
No module may directly mutate another module's data. It publishes an event. The subscriber decides what to do.

### Event Schema

```
Event {
  id:             UUID
  event_type:     string        // "estimate.approved", "proposal.signed", etc.
  object_type:    string
  object_id:      UUID
  triggered_by:   UUID | "system" | "ai"
  payload:        JSON          // full snapshot of object at time of event
  timestamp:      DateTime
  processed:      boolean
  subscribers_notified: string[]
  retry_count:    int
}
```

### Event Catalog (target)

| Event | Triggered When | Default Subscribers |
|---|---|---|
| `lead.created` | New lead captured from any source | Follow-Up Engine, CRM, Business Brain |
| `lead.stage_changed` | Lead moves between stages | CRM, Notifications |
| `survey.completed` | Client submits survey | Requirements Engine, Estimating |
| `requirements.added` | New requirement from any source | Estimate, Business Brain |
| `takeoff.completed` | AI or manual takeoff finalized | Estimating, Business Brain |
| `estimate.created` | First estimate created | Budget (placeholder), Business Brain |
| `estimate.approved` | Owner approves estimate | Proposal Engine, Business Brain |
| `proposal.sent` | Proposal sent to client | CRM, Follow-Up Engine, Notifications |
| `proposal.viewed` | Client opens proposal | CRM, Notifications (alert owner) |
| `proposal.signed` | E-signature received | Job Engine, Contract, Budget, Billing |
| `job.created` | Job spun up from signed proposal | Schedule Engine, Purchasing, Business Brain |
| `milestone.completed` | Construction phase complete | Billing (invoice prep), Schedule |
| `changeorder.requested` | CO detected or submitted | Gatekeeper, Budget, Client Portal |
| `changeorder.approved` | CO approved | Budget, Contract, Job Costing |
| `bill.received` | Sub or vendor bill ingested | AP, Budget Actuals, Gatekeeper |
| `bill.discrepancy_detected` | Bill doesn't match PO | Gatekeeper (route to root cause) |
| `invoice.sent` | Invoice sent to client | AR, Notifications |
| `payment.received` | Client pays | AR, Job Costing, Notifications |
| `photo.uploaded` | Photo attached to any object | Business Brain (AI analysis) |
| `dailylog.submitted` | Daily log created | Business Brain, Schedule |
| `rfi.opened` | RFI submitted | Architect/Engineer Notification, Schedule |
| `permit.approved` | Permit cleared | Schedule (unblock tasks) |
| `inspection.passed` | Inspection cleared | Schedule, Milestone |
| `lien_waiver.signed` | Sub signs lien waiver | AP, Release Payment |

### Subscriber Pattern

```javascript
EventEngine.subscribe("proposal.signed", async (event) => {
  // Create Job
  // Set Budget baseline from estimate
  // Trigger Survey if not completed
  // Notify PM
  // Log to Business Brain
});
```

### Gatekeeper Integration
High-consequence events must pass through Gatekeeper before subscribers act:

```
Event: bill.discrepancy_detected
→ EventEngine publishes
→ Gatekeeper intercepts (holds)
→ AI analyzes root cause
→ Gatekeeper presents: "Bill $4,200 vs PO $3,800. Cause: client-requested upgrade. Recommend CO. Approve?"
→ Owner approves
→ Gatekeeper releases
→ Event Engine notifies subscribers (CO drafted, Budget flagged)
```

### Implementation Phase
Design: Complete (this document).
Build: Phase 2 — requires Supabase for persistent event queue and subscriber registry.
Current state: Stage transitions are hardcoded per-function. EventEngine is the architectural target.

---

## SUBSYSTEM 4: WORKFLOW ENGINE

### Principle (Feishy's addition — OS #8)
Stage transitions in Corestone must not be hardcoded function-to-function.
Every business process is a configurable Workflow: a sequence of steps with triggers, conditions, approvals, and automation.
The same workflow engine drives every process — from Lead to Closeout — with no hardcoding.

### What a Workflow Is

```
Workflow {
  id:             UUID
  name:           string          // "Lead to Signed Proposal", "CO Approval", "Invoice & Collect"
  object_type:    string          // which object this workflow governs
  is_default:     boolean         // system-provided vs user-customized
  steps:          WorkflowStep[]
  created_by:     UUID
  org_id:         UUID
}

WorkflowStep {
  id:             UUID
  workflow_id:    UUID
  order:          int
  name:           string
  trigger:        Trigger         // what starts this step
  conditions:     Condition[]     // must all be true to proceed
  actions:        Action[]        // what happens automatically
  approval:       ApprovalConfig  // optional human approval gate
  on_approve:     StepRef         // next step if approved
  on_reject:      StepRef         // next step if rejected
  timeout:        Duration | null // escalate if no response in N days
  ai_assist:      boolean         // AI prepares recommendation for this step
}
```

### Trigger Types

| Trigger | Example |
|---|---|
| `event` | On `proposal.signed` → start Job Activation workflow |
| `time` | 3 days after `proposal.sent` with no view → trigger Follow-Up |
| `manual` | Owner clicks "Start CO Process" |
| `condition_met` | Budget actual exceeds budgeted by 10% |
| `external` | Email received matching pattern (Gmail intake) |
| `ai_detected` | AI identifies scope creep in Daily Log |

### Condition Types

| Condition | Example |
|---|---|
| `field_equals` | `proposal.status === "signed"` |
| `field_greater_than` | `co.cost_delta > 1000` |
| `role_approved` | Owner has approved in prior step |
| `document_present` | COI on file for this sub |
| `ai_confidence` | `takeoff.confidence_score >= 0.85` |
| `days_since` | 5 days since invoice sent |

### Action Types

| Action | Example |
|---|---|
| `create_object` | Create Job from signed Proposal |
| `update_field` | Set `lead.stage = "proposal_sent"` |
| `send_notification` | Email PM when proposal viewed |
| `send_message` | Send client Day 3 follow-up |
| `call_ai` | AI analyzes daily log for scope changes |
| `queue_gatekeeper` | Create Gatekeeper item for approval |
| `publish_event` | Emit `milestone.completed` event |
| `assign_task` | Assign punch list item to sub |
| `generate_document` | Generate invoice PDF |
| `trigger_workflow` | Start a child workflow |

### Core Default Workflows (system-provided, customizable)

| # | Workflow | Object | Steps |
|---|---|---|---|
| WF-01 | Lead Intake & Qualification | Lead | Capture → Score → Assign → Follow-Up Day 1/3/5/7 → Survey trigger |
| WF-02 | Estimate → Proposal | Estimate | Draft → Internal Review → Owner Approve → Generate Proposal → Send |
| WF-03 | Proposal → Contract | Proposal | Send → View Alert → Follow-Up → Signed → Job Creation → Deposit Request |
| WF-04 | Job Activation | Job | Contract received → Budget set → Schedule built → PM assigned → Kickoff |
| WF-05 | Change Order | Change Order | Detected → AI Analysis → Draft CO → Client Approval → Budget Update → CO Executed |
| WF-06 | Sub Bidding | Bid Package | Package created → Subs invited → Bids received → AI Rank → Owner Award → PO issued |
| WF-07 | Milestone Billing | Invoice | Milestone complete → Photo verification → Invoice prepared → Owner approve → Send → Track |
| WF-08 | Bill Intake & Payment | Bill | Bill received → Match PO → Discrepancy check → Approve → Schedule payment → Lien waiver |
| WF-09 | CO Root Cause | Bill Discrepancy | Discrepancy detected → AI root cause → Route: CO / Internal / Absorb → Execute |
| WF-10 | Project Closeout | Job | Punch list complete → Final inspection → Final invoice → Lien waivers → Warranty start → Business Brain learns |

### Workflow Engine API (target interface)

```javascript
WorkflowEngine.start(workflow_id, object_id, context)
WorkflowEngine.advance(instance_id, step_result)
WorkflowEngine.pause(instance_id, reason)
WorkflowEngine.cancel(instance_id, reason)
WorkflowEngine.getStatus(instance_id)
WorkflowEngine.getHistory(instance_id)
WorkflowEngine.listActive(object_type, object_id)
```

### Implementation Phase
Design: Complete (this document).
Build: Phase 2 — requires Supabase for persistent workflow instance storage.
Current state: WF-01, WF-02, WF-03 are partially implemented as hardcoded function chains. Migration to Workflow Engine is Phase 2.

---

## SUBSYSTEM 5: ENTERPRISE PERMISSION SYSTEM

### Principle
Permissions in Corestone are not a lookup table. They are a runtime evaluation engine.
Every action against every object is evaluated at execution time — not assumed at page load.
Permissions compose: role permissions + project permissions + object permissions + visibility rules.

### Role Hierarchy

```
Owner
  └── Admin
        ├── Estimator
        ├── Sales
        ├── Project Manager
        │     └── Superintendent
        ├── Accounting
        └── Office
External:
  ├── Subcontractor (per-project, per-scope)
  ├── Architect (per-project)
  ├── Inspector (per-job)
  ├── Vendor (per-PO)
  └── Client (per-job)
```

### Permission Schema

```
Permission {
  subject_type: "role" | "user" | "team"
  subject_id:   UUID | Role
  object_type:  string        // "estimate", "proposal", etc.
  object_id:    UUID | "*"    // specific object or all
  project_id:   UUID | "*"    // scoped to project or global
  actions:      Action[]      // ["view", "edit", "delete", "send", "approve", "export"]
  conditions:   Condition[]   // optional runtime conditions
  granted_by:   UUID
  expires_at:   DateTime | null
}
```

### Action Registry
Every button, function, and API endpoint maps to one Action.
No action executes without evaluating: `can(user, action, object)`.

```javascript
// Evaluation at runtime — never cached
can(user, "estimate.approve", estimate) → boolean
can(user, "proposal.send", proposal) → boolean
can(user, "job.view", job) → boolean
```

### Implementation Phase
Design: Complete (this document).
Build: Phase 2 — current flat-role model is the stepping stone. Enterprise permission engine replaces it post-Supabase.

---

## SUBSYSTEM 6: FINANCIAL ARCHITECTURE

### Principle
Corestone is not accounting software. But Corestone must be accounting-ready.
Every financial object built today must expose the correct hooks for a future General Ledger without requiring refactoring.

### Financial Object Chain

```
Estimate Line Item
    ↓ (approved)
Budget Line
    ↓ (PO issued)
Committed Cost
    ↓ (bill received + approved)
Actual Cost
    ↓ (compared)
Job Costing Variance
    ↓ (invoiced)
AR Balance
    ↓ (paid)
Job Profit / Loss
    ↓ (posted — future QBO)
General Ledger Entry
```

### GL Account Hooks (reserved for future QBO)
Every financial object carries `gl_account_code` and `cost_code` fields — even if unpopulated today.
These fields ensure QBO sync is an export operation, not a restructuring project.

| Object | GL Hook Fields |
|---|---|
| Estimate Line | `cost_code`, `gl_account_code`, `tax_code` |
| Budget Line | `cost_code`, `gl_account_code` |
| Bill | `gl_account_code`, `ap_account`, `payment_account` |
| Invoice | `gl_account_code`, `ar_account`, `revenue_account` |
| Payment | `gl_account_code`, `deposit_account` |

### Job Costing Target Model
Per project, per trade, per CSI category:
- Budgeted (from estimate)
- Committed (from POs)
- Actual (from approved bills)
- Variance (actual − budgeted)
- Forecast at completion (trend-based)
- Margin at completion (projected)

### Implementation Phase
Design: Complete (this document).
Financial hooks: Add to all new objects immediately (costs nothing, prevents refactoring).
Full job costing UI: Phase 2.
QBO sync: Phase 3 — after 30-day parallel verification period.

---

## SUBSYSTEM 7: BUSINESS BRAIN

### Principle
The Business Brain is a continuously running AI context that holds the complete state of the company.
It is not a chatbot. It is not a report. It is an always-on intelligence layer that monitors, learns, flags, and recommends.
Every completed project makes the Business Brain smarter for every future project.

### What Business Brain Holds

| Category | Data |
|---|---|
| Company Baseline | Average cost per sqft by project type, average margin, average timeline, most common scope changes |
| Client Intelligence | Payment history, change order tendency, communication style, dispute history, satisfaction score |
| Subcontractor Intelligence | On-time rate, quality score, pricing trends, dispute history, specialty strengths |
| Vendor Intelligence | Pricing trends, delivery reliability, quality history |
| Project Patterns | Which scope items are most often missed, which trades run over budget, which client types generate most COs |
| Risk Model | Live risk score per active job, trend-based variance warnings |
| Scope Intelligence | When client says X, they usually mean Y. When we bid X, it usually costs Y. |

### Business Brain Outputs

| Output | Trigger | Recipient |
|---|---|---|
| Scope gap warning | Takeoff complete — item present in similar jobs but absent here | Estimator |
| Budget risk flag | Budget actual trending 8%+ over budgeted | PM + Owner |
| CO probability | Client message contains language matching prior CO triggers | Owner |
| Sub recommendation | New bid package created | Estimator |
| Follow-up recommendation | Lead has not responded in 5 days | Sales |
| Margin alert | Estimate margin below company average for this project type | Owner |
| Duplicate scope detected | Estimate item appears to duplicate a prior line | Estimator |
| Cash flow warning | Projected draws vs projected bills show negative week | Owner |

### Implementation Phase
Design: Complete (this document).
Build: Phase 3 — requires job history (multiple completed projects), Supabase, and a persistent AI context store.

---

## SUBSYSTEM 8: MOBILE ARCHITECTURE

### Principle
Field teams work without desks and often without reliable cell service.
The mobile experience must be first-class — not a shrunk desktop.

### Mobile-First Requirements

| Requirement | Design |
|---|---|
| Offline mode | Service Worker + IndexedDB sync queue. Actions taken offline sync when connection restores. |
| Photo capture | Native camera access. Photos tagged to job/trade/object at capture time. |
| Voice input | Web Speech API → auto-fill any field. |
| Daily log | One-tap log start. Voice-to-text entry. Photo attach. GPS location stamp. |
| Punch list | Checkbox-driven. Photo required to mark complete. |
| Push notifications | PWA push for approvals, milestone alerts, client messages. |
| Biometric auth | Face ID / fingerprint for field login — no password on job site. |

### Offline Sync Queue Schema

```
SyncQueueItem {
  id:           UUID
  action:       string   // "dailylog.create", "photo.upload", etc.
  payload:      JSON
  created_at:   DateTime
  synced_at:    DateTime | null
  retry_count:  int
  error:        string | null
}
```

### Implementation Phase
Design: Complete (this document).
Build: Phase 3 — after Supabase migration and core workflow stabilization.

---

## SUBSYSTEM 9: API ARCHITECTURE

### Principle
Every Corestone capability is available via API.
The web app is just one client of the Corestone API.
Mobile, integrations, automation tools, and future AI agents all consume the same API.

### API Design Standards

| Standard | Value |
|---|---|
| Style | RESTful + WebSocket for real-time |
| Versioning | `/api/v1/...` — breaking changes increment version |
| Authentication | JWT (user sessions) + API Key (integrations) |
| Rate Limiting | Per-key, per-endpoint, per-minute |
| Pagination | Cursor-based (not offset) for large datasets |
| Response Format | `{ success, data, meta, errors }` — always consistent |
| Error Codes | Standard Corestone error code registry |
| Webhooks | Every published event available as outbound webhook |

### Core API Endpoint Groups (target)

```
/api/v1/leads
/api/v1/clients
/api/v1/projects
/api/v1/surveys
/api/v1/requirements
/api/v1/takeoffs
/api/v1/estimates
/api/v1/proposals
/api/v1/contracts
/api/v1/jobs
/api/v1/schedules
/api/v1/purchase-orders
/api/v1/bills
/api/v1/invoices
/api/v1/payments
/api/v1/change-orders
/api/v1/daily-logs
/api/v1/photos
/api/v1/rfis
/api/v1/gatekeeper
/api/v1/workflows
/api/v1/events
/api/v1/reports
/api/v1/webhooks
```

### Implementation Phase
Design: Complete (this document).
Build: Phase 2 — current Vercel `/api/claude` proxy is AI-only. Full REST API builds post-Supabase.

---

## SUBSYSTEM 10: INTEGRATION ARCHITECTURE

### Principle
Corestone integrates — it does not depend.
Every integration is optional, additive, and removable without breaking the core system.
Integrations are adapters — they translate between Corestone objects and external systems.

### Integration Registry (target)

| Integration | Direction | Trigger | Status |
|---|---|---|---|
| Gmail | Inbound | Scheduled poll | Planned — n8n on Render |
| Twilio | Outbound | Message action | Planned |
| Stripe | Bidirectional | Invoice payment | Planned — Phase 2 |
| QuickBooks Online | Outbound | Approved financial objects | Planned — Phase 3 (QBO connects last) |
| Cloudflare R2 | Outbound | Photo/file upload | Blocked — DNS access needed |
| Angi | Inbound | Lead webhook | Planned — n8n |
| DocuSign | Bidirectional | Contract over $50k | Optional upgrade |
| Google Calendar | Bidirectional | Schedule sync | Planned — Phase 2 |
| Procore (import only) | Inbound | Historical project import | Future |

### Integration Adapter Pattern

```javascript
IntegrationAdapter {
  name:           string
  direction:      "inbound" | "outbound" | "bidirectional"
  object_type:    string        // which Corestone object this maps to
  transform_in:   (external) => CorestoneObject
  transform_out:  (CorestoneObject) => external
  on_error:       ErrorHandler
  retry_policy:   RetryConfig
}
```

### n8n as Orchestration Layer
n8n running on Render (`corestone-n8n.onrender.com`) is the integration bus for external inbound signals.
Gmail → n8n → Corestone Lead API
Angi webhook → n8n → Corestone Lead API
Twilio SMS → n8n → Corestone Message API

### Implementation Phase
Design: Complete (this document).
Gmail/Angi via n8n: Phase 1 (OQ-007).
Stripe: Phase 2.
QBO: Phase 3 — after 30-day parallel period.

---

## IMPLEMENTATION PHASE MAP

| Phase | Prerequisite | Target Subsystems |
|---|---|---|
| **Phase 1** (current) | Foundation bug fixes complete | Lead→Signature flow, Gatekeeper execution, callIntel persistence, post-call AI, email intake via n8n |
| **Phase 2** | Supabase migration | Event Engine, Visibility Engine, Workflow Engine, Enterprise Permissions, REST API, Portals, Stripe |
| **Phase 3** | Multiple completed real jobs | Business Brain, Mobile (offline), QBO sync, Reporting Engine, Advanced Job Costing |
| **Phase 4** | Business Brain trained | Predictive estimating, autonomous scheduling, AI-generated proposals, sub performance AI |

---

*Part 2 added: OS #8 — July 1, 2026*
*Governing principle: Design now. Build when the platform is ready.*
*Every module built today must align with this architecture, even if it implements only a subset.*
