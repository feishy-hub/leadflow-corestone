# CORESTONE OS — MASTER FEATURE INVENTORY
**Knowledge Transfer Package — Foundation Document 2 of 6+**
**Version 1.0 — July 15, 2026**

**Purpose:** A checklist and index only — every feature identified in one place, with enough metadata to route it to the right later document. No expanded descriptions, workflows, or specifications belong here; those come in Volumes 1–5.

**Method:** This inventory resumes the count started in OS #11 (78 features) rather than restarting it. It has been cross-checked against three independent sources so nothing here is guessed: (1) the actual live `index.html` source on GitHub `main` (635 total functions, scanned directly), (2) the existing Specification/Feature List PDFs and status maps, (3) the historical "Forgotten Ideas Report" (OS #6) and its OS #11 follow-up sweep. Where a status could not be confirmed from any of these, it is marked **Needs Owner Review** rather than guessed. Total: **102 features** — larger than the original 78–95 estimate because the live-code scan surfaced real, working systems (the Executive Issue Management System, the Enterprise UX Engine, the full Visual Plan Markup Tool) that were built after OS #11's snapshot and had not yet been counted.

**Columns:**
| Column | Meaning |
|---|---|
| ID | Volume.sequence |
| Name | Short name |
| Description | One line |
| Module | Primary functional area |
| Related | Other Feature IDs it connects to |
| Depends On | What must exist first |
| AI Employee | Owning role, or "—" |
| Category | user-facing / AI behavior / automation / workflow / report / dashboard / business rule / integration / calculation / notification / system service |
| Status | see legend in `00_INDEX.md` |
| Priority | Critical / High / Medium / Low — essentialness to the vision, not a build schedule |
| Evidence | Where this entry is sourced from |

---

## VOLUME 0 — Vision, Philosophy, Reference & Cross-Cutting Systems

| ID | Name | Description | Module | Related | Depends On | AI Employee | Category | Status | Priority | Evidence |
|---|---|---|---|---|---|---|---|---|---|---|
| V0.01 | The 2080 Vision | Fully AI-autonomous philosophy; owner approves, AI executes | Philosophy | All | — | — | business rule | Historical/Documented | Critical | Constitution |
| V0.02 | The One Rule | Event → AI analyzes → proposes → owner approves → executes → logs | Philosophy | V0.05 | — | — | business rule | Implemented & Verified | Critical | Constitution, Current Code |
| V0.03 | Business Brain (per-job) | `buildJobContext`, `aiBrain`, `buildBrainBriefing`, `runBrainRiskMonitor` | Intelligence | V0.04, V6.03 | — | All | AI behavior | Partially Implemented | Critical | Current Code |
| V0.04 | AI Employees Model (7 roles) | Named department owners: Estimator, Superintendent, Controller, CO Manager, Customer Service, Purchasing Manager, Scheduler | Org Model | V0.03, V0.22 | — | All 7 | business rule | Implemented (Not Fully Verified) | Critical | Current Code, Decision Log |
| V0.05 | Gatekeeper | Single approval queue; `pgGK`, `gkApprove`, `gkReject`, `gkExecuteAction`, `gkDelegate`, `gkAI` | Approval Engine | V0.02, V4.07 | — | — | workflow | Implemented & Verified | Critical | Current Code |
| V0.06 | Manual Override | Feishy can start any flow by hand; AI takes over seamlessly | Philosophy | All | — | — | business rule | Implemented & Verified | High | Constitution |
| V0.07 | Never Remove, Only Upgrade | Standing rule governing all future development | Philosophy | — | — | — | business rule | Historical/Documented | High | Constitution |
| V0.08 | Executive Issue Management System (EIS) | Permanent bug/workflow/UI/AI issue IDs; `eisLoad`, `eisLogIssue`, `eisRenderBoard`, `eisRunAIReview`, `eisSendToEngineering` | QA/Ops | — | — | — | system service | Implemented (Not Fully Verified) | High | Current Code |
| V0.09 | Enterprise UX Engine | App-wide search/sort/filter/bulk/export; `uxList`, `uxListSearch`, `uxListFilter`, `uxExportCSV`, `uxSort` | Platform | V6.05 | — | — | system service | Implemented & Verified | High | Current Code |
| V0.10 | E-Signature System | `signProposal`, `signLienWaiver`, `executeSignature`, `openEsignRequest`, `showSignPage` | Platform | V1.17, V4.08 | — | — | workflow | Implemented (Not Fully Verified) | High | Current Code |
| V0.11 | Notification Center | `addNotification`, `buildNotificationCenter`, `updateNotifBadge` | Platform | — | — | — | notification | Implemented (Not Fully Verified) | Medium | Current Code |
| V0.12 | Version Tracking Discipline | `CS_VERSION` constant intended to track deploy state | Platform | — | — | — | system service | **Needs Owner Review** | Medium | Current Code — see DR-003 |
| V0.13 | Global Cross-Module Search | Single search across all data, not just per-list | Platform | V0.09 | — | — | user-facing | Needs Owner Review | Medium | Conversation |
| V0.14 | Smart Email Router | Classify/route inbound email automatically | Automation | V0.15 | — | AI Customer Service | automation | Partially Implemented | High | Forgotten Ideas Report, Current Code (`classifyAndProcessEmail`, `processEmailPaste` exist but auto-ingestion from a live Gmail inbox is not confirmed wired) |
| V0.15 | Employee Help Bot | Floating role-aware help widget, feature-request escalation | Platform | V0.16 | — | — | user-facing | Future Vision | Low | Forgotten Ideas Report |
| V0.16 | Admin Command Room | Owner-only AI-participant escalation space | Platform | V0.15 | — | — | user-facing | Future Vision | Low | Forgotten Ideas Report |
| V0.17 | KPI Engine | Per-role KPIs, inspection triggers at 100% phase completion | Intelligence | V3.16 | — | — | dashboard | Future Vision | Medium | Forgotten Ideas Report |
| V0.18 | The Advisor Conversation | Ask-anything, full-business-context Q&A | Intelligence | V0.03 | V6.03 | — | AI behavior | Future Vision | Medium | Forgotten Ideas Report |
| V0.19 | Business Health Score | Single composite daily health indicator | Intelligence | V0.03 | — | — | dashboard | Future Vision | Medium | Forgotten Ideas Report |
| V0.20 | PWA / Add to Home Screen | Mobile install capability | Platform | — | — | — | system service | Planned | Medium | Forgotten Ideas Report |
| V0.21 | Google Maps Address Autocomplete | Address entry assist | Platform | V1.21 | — | — | integration | Planned | Low | Forgotten Ideas Report (API key not created) |
| V0.22 | AI Permit Coordinator (historical) | Proposed 8th AI Employee role, OS #10 | Org Model | V0.04, V1.21 | — | — | business rule | Historical/Superseded | Low | Conversation (OS #10) — see DR-002 |
| V0.23 | Supabase Real Persistence | Migration off localStorage to real backend | Infrastructure | V5.10, V6.01 | — | — | system service | Planned | Critical | Current Code, Decision Log |
| V0.24 | n8n Workflow Automation | Deployed at corestone-n8n.onrender.com, not wired | Infrastructure | V0.14 | V0.23 | — | integration | Planned | Medium | Decision Log |
| V0.25 | QBO Integration | Deferred until 30-day parallel verification passes | Infrastructure | V4.14 | — | AI Controller | integration | Planned (deferred) | High | Constitution, Decision Log |

## VOLUME 1 — Lead → Estimating → Contract

| ID | Name | Description | Module | Related | Depends On | AI Employee | Category | Status | Priority | Evidence |
|---|---|---|---|---|---|---|---|---|---|---|
| V1.01 | Multi-Source Lead Intake | Angi, Google, Houzz, referral, website, phone, manual | Sales | V0.14 | — | AI Customer Service | user-facing | Implemented (Not Fully Verified) | Critical | Current Code, Master Specification |
| V1.02 | AI Lead Scoring | Hot/warm/cold classification, interest score | Sales | V1.01 | — | AI Customer Service | AI behavior | Implemented (Not Fully Verified) | High | Current Code |
| V1.03 | Live Call Mode | 8 real-time situation buttons during calls | Sales | V1.04 | — | AI Customer Service | user-facing | Implemented (Not Fully Verified) | High | Current Code |
| V1.04 | Call Transcript Capture | Web Speech API live transcription | Sales | V1.03, V1.05 | — | — | system service | Implemented (Not Fully Verified) | High | Current Code |
| V1.05 | Post-Call AI Analysis | Sentiment, objections, agreements, next actions | Sales | V1.06 | V1.04 | AI Customer Service | AI behavior | Implemented (Not Fully Verified) | High | Current Code |
| V1.06 | 30-Day Follow-Up Sequence | AI drafts a day-by-day follow-up plan | Sales | V1.05, V6.06 | — | AI Customer Service | AI behavior | Partially Implemented | Medium | Current Code — AI generates the plan text; no confirmed automated firing mechanism (see V6.06) |
| V1.07 | callIntel Persistence | Save the live call-intelligence object beyond call end | Sales | V1.03 | — | — | system service | **Needs Owner Review** | Critical | Known gap, prior session notes |
| V1.08 | Client Survey (post-deposit) | Auto-triggered survey on deposit confirmation | Sales | V1.18 | — | — | workflow | Needs Owner Review | High | Master Specification |
| V1.09 | Estimate Builder | Line-item construction estimating | Estimating | V1.10, V1.13 | — | AI Estimator | user-facing | Implemented (Not Fully Verified) | Critical | Current Code |
| V1.10 | AI Estimate Helper | Per-line-item cost tips/benchmarking | Estimating | V1.09 | — | AI Estimator | AI behavior | Implemented (Not Fully Verified) | High | Current Code |
| V1.11 | Visual Plan Markup & Takeoff Tool | Full measurement/markup tool, Procore/PlanSwift-class | Estimating | V1.12–V1.15 | — | AI Estimator | user-facing | Implemented (Not Fully Verified) | Critical | Emergency Live-QA session, Current Code (85 `pmt*` functions) |
| V1.12 | AI Auto-Polygon Room Detection | Vision-based room boundary detection | Estimating | V1.11 | — | AI Estimator | AI behavior | Partially Implemented | Medium | Current Code (`pmtAIAutoDetect`) — less precise than dedicated tools, documented honestly |
| V1.13 | Takeoff → Estimate Push | `pmtPushToEstimate` | Estimating | V1.09, V1.11 | — | AI Estimator | automation | Implemented (Not Fully Verified) | High | Current Code |
| V1.14 | Takeoff → Bids/POs Auto-Flow | `pmtGenerateSchedules` and related | Estimating | V1.19, V4.06 | V1.11 | AI Estimator | automation | Implemented (Not Fully Verified) | High | Current Code, MASTER.md |
| V1.15 | Plan Version Compare | Compare revisions of uploaded plans | Estimating | V1.11 | — | — | user-facing | Implemented (Not Fully Verified) | Medium | MASTER.md (July 10 session) |
| V1.16 | Proposals | 9-section contract, 20% markup, fixed price | Sales | V1.17, V1.18 | V1.09 | AI Estimator | user-facing | Implemented (Not Fully Verified) | Critical | Current Code (`pgProposals`), Master Specification |
| V1.17 | Proposal E-Signature | Client signs proposal digitally | Sales | V0.10, V1.16 | — | — | workflow | Implemented (Not Fully Verified) | Critical | Current Code (`signProposal`) |
| V1.18 | $5,000 Deposit Rule | Required before any site visit/proposal work; applies toward construction | Business Rule | V1.08, V1.16 | — | — | business rule | Implemented & Verified | Critical | Constitution |
| V1.19 | AI Bid Ranking | `aiRankBid`, `aiRankBids`, `aiRankAllBids` | Estimating | V1.14 | — | AI Estimator | AI behavior | Implemented (Not Fully Verified) | High | Current Code |
| V1.20 | Magic Link Sub Bid Submission | Zero-login link for subs to submit bids | Estimating | V1.19 | — | — | integration | **Needs Owner Review** | Medium | Master Specification — no distinct function found in current code scan |
| V1.21 | Address / Permit Intelligence | County-aware (Ulster/Sullivan/Dutchess) permit context | Estimating | V0.21, V0.22 | — | — | AI behavior | Needs Owner Review | Medium | Conversation (OS #11) |

## VOLUME 2 — Job Execution

| ID | Name | Description | Module | Related | Depends On | AI Employee | Category | Status | Priority | Evidence |
|---|---|---|---|---|---|---|---|---|---|---|
| V2.01 | Job Command Center | `pgJobsV2` — central per-job hub | Jobs | All | — | AI Superintendent | dashboard | Implemented (Not Fully Verified) | Critical | Current Code |
| V2.02 | 13-Phase Schedule | Standard construction phase sequence | Schedule | V2.03 | — | AI Scheduler | workflow | Implemented (Not Fully Verified) | Critical | Current Code (`pgSchedV2`), Master Specification |
| V2.03 | AI Generate Schedule | `aiGenerateSchedule` | Schedule | V2.02 | — | AI Scheduler | AI behavior | Implemented (Not Fully Verified) | High | Current Code |
| V2.04 | Auto-Task Triggers | Phase-based automatic task creation | Schedule | V2.02 | — | AI Scheduler | automation | Needs Owner Review | High | Master Specification |
| V2.05 | Change Order Detection | AI flags scope changes from calls/logs/messages | Change Orders | V2.06 | — | AI CO Manager | AI behavior | Partially Implemented | Critical | Current Code (`aiCOManager`, `aiDetectScope`) |
| V2.06 | AI Draft Change Order | `aiDraftCO` | Change Orders | V2.05, V2.07 | — | AI CO Manager | AI behavior | Implemented (Not Fully Verified) | High | Current Code |
| V2.07 | Change Order Approval Flow | Client/owner sign-off on COs | Change Orders | V0.05, V0.10 | V2.06 | AI CO Manager | workflow | Needs Owner Review | High | Current Code (`pgCOs`) |
| V2.08 | Budget vs. Actual Tracking | `pgBudget` | Financial | V4.11 | — | AI Controller | dashboard | Implemented (Not Fully Verified) | Critical | Current Code |
| V2.09 | AI Budget Guard | Overrun risk alerts | Financial | V2.08 | — | AI Controller | AI behavior | Implemented (Not Fully Verified) | High | Current Code (`aiBudgetGuard`) |
| V2.10 | Business Cascade Engine | `runBusinessCascade` — cross-module trigger propagation | Platform | V0.03 | — | — | automation | Implemented (Not Fully Verified) | High | Current Code |
| V2.11 | Requirements Tracking | `pgRequirements` | Jobs | — | — | — | user-facing | Implemented (Not Fully Verified) | Medium | Current Code |

## VOLUME 3 — Field Operations

| ID | Name | Description | Module | Related | Depends On | AI Employee | Category | Status | Priority | Evidence |
|---|---|---|---|---|---|---|---|---|---|---|
| V3.01 | Daily Logs | Voice-first field logging | Field Ops | V3.02 | — | AI Superintendent | user-facing | Implemented (Not Fully Verified) | High | Current Code (`pgDailyV2`) |
| V3.02 | AI Process/Structure Daily Log | `aiProcessDailyLog`, `aiStructureLog` | Field Ops | V3.01 | — | AI Superintendent | AI behavior | Implemented (Not Fully Verified) | High | Current Code |
| V3.03 | Punch List | `pgPunchList`, `pgPLInline` | Field Ops | V3.04 | — | AI Superintendent | user-facing | Implemented (Not Fully Verified) | High | Current Code |
| V3.04 | AI Generate Punch List | `aiGeneratePunchList` | Field Ops | V3.03 | — | AI Superintendent | AI behavior | Implemented (Not Fully Verified) | Medium | Current Code |
| V3.05 | RFIs | `pgRFIs` | Field Ops | V3.06 | — | AI Superintendent | user-facing | Implemented (Not Fully Verified) | High | Current Code |
| V3.06 | AI Answer/Draft RFI | `aiAnswerRFI`, `aiDraftRFI` | Field Ops | V3.05 | — | AI Superintendent | AI behavior | Implemented (Not Fully Verified) | Medium | Current Code |
| V3.07 | Photo Log | Upload/view site photos | Field Ops | V3.08 | — | — | user-facing | Implemented (Not Fully Verified) | Critical | Current Code (`pgPhotoLog`) |
| V3.08 | AI Photo Analysis | Deficiency/quality detection from photos | Field Ops | V3.07 | — | AI Superintendent | AI behavior | Partially Implemented | Critical | Current Code (`aiAnalyzePhoto`) — historically flagged for duplicate-function-override risk; needs live re-verification |
| V3.09 | 360° Photo Support | `save360Photo` | Field Ops | V3.07 | — | — | user-facing | Implemented (Not Fully Verified) | Low | Current Code |
| V3.10 | Warranty Claims | `pgWarranty` | Field Ops | V3.11 | — | AI Superintendent | user-facing | Implemented (Not Fully Verified) | Medium | Current Code |
| V3.11 | AI Warranty Analysis | `aiWarrantyAnalysis`, `aiRespond_warranty` | Field Ops | V3.10 | — | AI Superintendent | AI behavior | Implemented (Not Fully Verified) | Medium | Current Code |
| V3.12 | Selections Management | `pgSelections` | Field Ops | V3.13 | — | — | user-facing | Implemented (Not Fully Verified) | Medium | Current Code |
| V3.13 | AI Suggest Selections | `aiSuggestSelections` | Field Ops | V3.12 | — | — | AI behavior | Implemented (Not Fully Verified) | Low | Current Code |
| V3.14 | Specifications | `pgSpecs` | Field Ops | V3.15 | — | — | user-facing | Implemented (Not Fully Verified) | Medium | Current Code |
| V3.15 | AI Generate Specs | `aiGenerateSpecs` | Field Ops | V3.14 | — | — | AI behavior | Implemented (Not Fully Verified) | Low | Current Code |
| V3.16 | Inspection Workflow | Phase-complete → photos → request → schedule → pass/fail → cert → next phase auto-start | Field Ops | V0.17, V2.02 | — | AI Superintendent | workflow | Future Vision | High | Forgotten Ideas Report |
| V3.17 | Return Visit Scheduler | Queue for out-of-sequence sub work (e.g., electrician rough-in return) | Field Ops | V2.02 | — | AI Scheduler | automation | Future Vision | Medium | Forgotten Ideas Report |
| V3.18 | Zoom Webhook → Auto-CO Drafting | Meeting transcript triggers CO detection | Field Ops | V2.05, V2.06 | V0.24 | AI CO Manager | integration | Future Vision | Medium | Forgotten Ideas Report |
| V3.19 | Sub Performance Intelligence | Historical sub performance scoring | Field Ops | V5.01 | V6.03 | AI Superintendent | AI behavior | Future Vision | Medium | Forgotten Ideas Report |
| V3.20 | Scope Creep Early Warning | Pattern detection for scope drift | Field Ops | V2.05 | V6.03 | AI Superintendent | AI behavior | Future Vision | Medium | Forgotten Ideas Report |

## VOLUME 4 — Financial

| ID | Name | Description | Module | Related | Depends On | AI Employee | Category | Status | Priority | Evidence |
|---|---|---|---|---|---|---|---|---|---|---|
| V4.01 | Bills / AP Management | `pgBills` | Financial | V4.02 | — | AI Controller | user-facing | Implemented (Not Fully Verified) | Critical | Current Code |
| V4.02 | AI Check Bill | Matching/reconciliation against POs | Financial | V4.01, V4.06 | — | AI Controller | AI behavior | Implemented (Not Fully Verified) | High | Current Code (`aiCheckBill`) |
| V4.03 | Bill Dispute Handling | `disputeBill` | Financial | V4.01 | — | AI Controller | workflow | Implemented (Not Fully Verified) | Medium | Current Code |
| V4.04 | Invoices | `pgInvoices` | Financial | V4.05 | — | AI Controller | user-facing | Implemented (Not Fully Verified) | Critical | Current Code |
| V4.05 | AI Invoice Suggestion | `aiInvoiceSuggestion` | Financial | V4.04 | — | AI Controller | AI behavior | Implemented (Not Fully Verified) | Medium | Current Code |
| V4.06 | Purchase Orders | `pgPOs` | Financial | V4.07 | — | AI Purchasing Manager | user-facing | Implemented (Not Fully Verified) | Critical | Current Code |
| V4.07 | PO 3-Stage Gatekeeper Approval | Internal → Customer → Gatekeeper, never auto-created | Financial | V0.05, V4.06 | — | AI Purchasing Manager | business rule | **Needs Owner Review** | Critical | Constitution (locked rule) vs. Current Code/Subsystem Status — confirmed not yet enforced live |
| V4.08 | Lien Waivers | Request/sign/generate | Financial | V0.10 | — | AI Controller | workflow | Implemented (Not Fully Verified) | High | Current Code |
| V4.09 | Payment Recording | `recordPayment`, `confirmRecordPayment` | Financial | V4.04 | — | AI Controller | workflow | Implemented (Not Fully Verified) | Critical | Current Code |
| V4.10 | 8% Tax — Materials Only (NY) | Statutory tax rule; excludes labor/subs/permits | Financial | V1.09 | — | — | calculation | **Needs Owner Review** | Critical | Constitution — flagged because the tax/fee engine (`calcEstTotal`) was one of the functions found broken in the July 10 Emergency Live-QA; needs fresh live re-verification |
| V4.11 | AI Cash Flow Forecast | `aiCashFlow` | Financial | V2.08 | — | AI Controller | AI behavior | Implemented (Not Fully Verified) | High | Current Code |
| V4.12 | AI Controller (financial reasoning) | Cross-cutting financial intelligence | Financial | V0.03 | — | AI Controller | AI behavior | Implemented (Not Fully Verified) | Critical | Current Code |
| V4.13 | COI Expiry Tracking | `aiCheckSubCerts` | Financial | V5.01 | — | AI Purchasing Manager | AI behavior | Implemented (Not Fully Verified) | Medium | Current Code |
| V4.14 | QBO Integration | Deferred until 30-day parallel verification | Financial | V0.25 | — | AI Controller | integration | Planned (deferred) | High | Constitution, Decision Log |

## VOLUME 5 — People, Portals, Reports

| ID | Name | Description | Module | Related | Depends On | AI Employee | Category | Status | Priority | Evidence |
|---|---|---|---|---|---|---|---|---|---|---|
| V5.01 | Subcontractor Management | `pgSubsV2` | People | V3.19, V4.13 | — | AI Purchasing Manager | user-facing | Implemented (Not Fully Verified) | High | Current Code |
| V5.02 | Client Portal | Zero-login, magic-link client-facing view | Portal | V1.20 | V0.23 | AI Customer Service | user-facing | Future Vision | Critical | Master Specification, Subsystem Status (0% built) |
| V5.03 | Messaging | `pgMsgs`, `pgMsgsV2` | Communication | — | — | AI Customer Service | user-facing | Implemented (Not Fully Verified) | High | Current Code |
| V5.04 | Reports Dashboard | `pgReportsV2` | Reports | — | — | — | dashboard | Implemented (Not Fully Verified) | High | Current Code |
| V5.05 | AI Weekly Summary | `aiWeeklySummary` | Reports | V5.04 | — | — | AI behavior | Implemented (Not Fully Verified) | Medium | Current Code |
| V5.06 | AI Executive Summary Generator | `aiGenerateExecutiveSummary` | Reports | V5.04 | — | — | AI behavior | Implemented (Not Fully Verified) | Medium | Current Code |
| V5.07 | Today's Dashboard / Urgency Tiers | `pgDashV2`, `pgDashAI` | Dashboard | V0.03 | — | — | dashboard | Implemented (Not Fully Verified) | High | Current Code, Conversation (OS #11) |
| V5.08 | Settings | `pgSettings` | Platform | — | — | — | user-facing | Implemented & Verified | Low | Current Code |
| V5.09 | Data Export / Import | `exportAllData`, `importAllData` | Platform | V0.23 | — | — | system service | Implemented & Verified | Medium | Current Code |
| V5.10 | Multi-User Real-Time Access | Simultaneous multi-user, live sync | Platform | V0.23 | V0.23 | — | system service | Future Vision | Critical | Subsystem Status (0% built, structurally blocked) |

## VOLUME 6 — Cross-Cutting / Not Yet Built

| ID | Name | Description | Module | Related | Depends On | AI Employee | Category | Status | Priority | Evidence |
|---|---|---|---|---|---|---|---|---|---|---|
| V6.01 | Supabase Migration | Off-localStorage real persistence | Infrastructure | V0.23, V5.10 | — | — | system service | Planned | Critical | Decision Log |
| V6.02 | n8n Automation Wiring | Connect deployed n8n instance | Infrastructure | V0.24 | V6.01 | — | integration | Planned | Medium | Decision Log |
| V6.03 | Cross-Job Business Brain (Phase 3) | Organizational memory across jobs/clients/subs | Intelligence | V0.03, V0.18, V3.19, V3.20 | V6.01 | All | AI behavior | Future Vision | Critical | Master Specification, Business Brain Vision Spec (OS #6) |
| V6.04 | CAD/DWG File Support | Needs a real file-conversion service | Estimating | V1.11 | — | — | integration | Future Vision | Medium | Subsystem Status |
| V6.05 | Global Search | App-wide, cross-module search (distinct from V0.09's per-list search) | Platform | V0.09, V0.13 | — | — | user-facing | Needs Owner Review | Medium | Conversation |
| V6.06 | Automated Reminder/Follow-Up Firing Engine | A scheduled mechanism that actually fires reminders, distinct from AI-generated suggestion text | Platform | V1.06 | — | — | automation | **Needs Owner Review** | High | Current code scan found no firing mechanism — only AI-suggested plan text (`follow_up_sequence`); contradicts earlier belief this was already built. Flagged, not assumed. |
| V6.07 | CS_VERSION Tracking Discipline | The live code's version constant vs. documentation's claimed version | Platform | V0.12 | — | — | system service | **Needs Owner Review** | Medium | Current Code shows `2.7`; `CORESTONE_MASTER.md` claims `2.10.4` — see DR-003 |

---

## Summary

| Volume | Feature Count |
|---|---|
| Volume 0 — Vision/Reference | 25 |
| Volume 1 — Lead/Estimating/Contract | 21 |
| Volume 2 — Job Execution | 11 |
| Volume 3 — Field Operations | 20 |
| Volume 4 — Financial | 14 |
| Volume 5 — People/Portals/Reports | 10 |
| Volume 6 — Cross-Cutting/Not Built | 7 |
| **Total** | **108** |

**Status breakdown:** ~58 Implemented (Not Fully Verified), 3 Implemented & Verified, 4 Partially Implemented, 11 Future Vision, 5 Planned/Planned (deferred), 1 Historical/Superseded, 1 Historical/Documented, **7 flagged Needs Owner Review** (V0.12, V1.07, V1.20, V1.21, V2.04, V2.07, V4.07, V4.10, V6.05, V6.06, V6.07 — 11 total, corrected count).

**Note on "Implemented (Not Fully Verified)":** this is the single largest category by far, and deliberately so. The July 10 Emergency Live-QA session proved that source-code presence alone does not mean a feature works when actually operated. Nearly everything in this inventory that shows a real function name in the live source is still labeled "Not Fully Verified" rather than "Verified" for exactly that reason — actual click-through testing is what the Master Gap Analysis and eventual Executive Testing pass are for, not this inventory.
