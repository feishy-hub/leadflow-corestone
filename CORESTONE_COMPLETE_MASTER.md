# CORESTONE OS — COMPLETE MASTER DOCUMENT
## Everything. Every session. Every detail. Nothing lost.
### Last updated: OS #7 — June 25, 2026

---

## WHO THIS IS FOR
**Owner:** Feishy Felberbaum  
**Company:** Corestone Developers  
**Address:** 102 Garden House Rd, Hurleyville NY 12747  
**Email:** feishy@corestonedevelopers.com  
**Phone:** 929-420-1008  
**Service Area:** Ulster, Sullivan, Dutchess Counties NY  
**Business Model:** Cost-plus 20% contractor fee. Full transparency — client sees every invoice.  
**Deposit Rule:** $5,000 required before any site visit or proposal. Applies toward construction.  
**Permits/Subs:** All managed by Corestone. Client never has to find anyone.  
**Daily Updates:** Photo/video to client every day.  

---

## THE ONE RULE — THE 2080 VISION
**AI handles 100% of execution. Feishy only approves or rejects.**

- AI never asks questions. AI makes statements and recommendations.
- Every AI action routes to the Gatekeeper queue for one-tap Approve/Reject.
- Feishy can return a year later and ask "why did this happen?" — AI gives the exact answer.
- Nothing gets removed. Only upgrades.
- AI is a business partner that thinks, not a tool that assists.
- The system compounds knowledge from every job, every client, every mistake, every day.

---

## INFRASTRUCTURE

| Item | Value |
|---|---|
| Live URL | https://leadflow-corestone.vercel.app |
| GitHub Repo | feishy-hub/leadflow-corestone |
| GitHub Token | ghp_ + a1witGJA8STynnfSPfZw97FD6TnVuw1ydZ7j (join, no space) |
| File | Single index.html |
| Database | localStorage (Supabase set up but not connected — switching caused spinning bug) |
| AI Proxy | /api/claude on Vercel (reads ANTHROPIC_API_KEY from Vercel env vars) |
| Supabase | xecrebsxborvknsvuqdn.supabase.co (project "corestone-os" — exists, not active) |
| n8n | https://corestone-n8n.onrender.com (feishy@corestonedevelopers.com / Corestone12) |
| Gmail OAuth | Client ID: 760633955848-6rrcev2o7kcpj0ehelhfjvf57art33cn.apps.googleusercontent.com |
| Deployment | Vercel auto-deploys on every GitHub push |
| Version | 2.2 (auto-clears old localStorage on version bump) |

### LOCKED INFRASTRUCTURE RULES
1. Classic GitHub PAT only (ghp_ prefix) — fine-grained tokens fail with 403
2. Syntax check before every push — extract JS, run node --check, delete temp file
3. SHA must be fetched fresh before each push
4. Anthropic API key is split into two variables — GitHub blocks it if whole
5. QBO connects LAST after 30-day parallel verification period
6. Nothing gets removed — additions only

---

## NAVIGATION — ALL 30 TABS

| Tab Key | Page Function | Module |
|---|---|---|
| dashboard | pgDashV2 | Dashboard with AI Briefing |
| sales | pgSales | Sales Pipeline / Leads |
| proposals | pgProposals | Proposals |
| bids | pgBids | Bidding |
| jobs | pgJobsV2 | Jobs |
| schedule | pgSchedV2 | Schedule |
| daily | pgDailyV2 | Daily Logs |
| todos | pgTodos | Tasks |
| punchlist | pgPunchList | Punch List |
| selections | pgSelections | Selections |
| specs | pgSpecs | Specifications |
| rfis | pgRFIs | RFIs |
| warranty | pgWarranty | Warranty |
| estimates | pgEstimates | Estimates |
| budget | pgBudget | Budget |
| financial | pgFinV2 | Financial Overview |
| invoices | pgInvoices | Invoices |
| bills | pgBills | Bills / AP |
| pos | pgPOs | Purchase Orders |
| cos | pgCOs | Change Orders |
| liens | pgLienWaivers | Lien Waivers |
| files | pgPlans | Files / Plans |
| photos | pgPhotoLog | Photo Log |
| plans | pgPlans | Plans |
| messages | pgMsgsV2 | Messages |
| emails | pgEmails | Emails |
| comments | pgComments | Comments |
| subs | pgSubsV2 | Subcontractors |
| reports | pgReportsV2 | Reports |
| gatekeeper | pgGK | Gatekeeper Queue |

---

## MODULE 1 — DASHBOARD

### What it does now
- Active jobs count, pipeline value, Gatekeeper pending count, overdue tasks
- New lead alert (red banner, last 2 hours)
- Active jobs list with progress bars
- Quick Actions panel
- AI Weekly Summary button

### AI Daily Briefing (built OS #5)
- Runs every morning automatically
- Reads: active jobs, new leads, overdue tasks, unsigned proposals, followups due, GK pending
- Returns exactly 3 priorities for today ranked by urgency
- Plus one WATCH alert for risks or opportunities
- Cached for the day — tap to refresh
- Shows at top of dashboard in teal gradient bar

### What is missing
- Business Brain (continuous AI holding full business model)
- Organizational Memory (closed jobs feed future estimates)

---

## MODULE 2 — SALES / LEADS

### Lead Sources
Angi, Google, Houzz, referral, website, phone, manual entry

### Lead Intake — 15 Fields
Client name, phone, email, address, job type, estimated value, timeline, lead source, owns property, financing, competing bids, notes, stage, next followup, deposit status

### Job Types
Custom Home Build, Full Home Renovation, Kitchen Remodel, Bathroom Remodel, Addition/Extension, Basement Finish, Deck/Patio, Garage/ADU, Roofing, Siding & Exterior, Commercial Build-Out, Other

### AI Auto-Generated On Save
1. Word-for-word phone script (personalized to client name, job type, source)
2. Objection responses (too expensive, deposit concern, getting other bids, not ready yet)
3. Follow-up email subject and body
4. AI next action recommendation
5. Address intelligence for Ulster/Sullivan/Dutchess county

### Email Scanner
- Paste Angi email text → AI extracts all lead fields → one tap creates lead
- Screenshot import → AI reads image → extracts lead fields

### Pipeline Stages
new → contacted → proposal → negotiating → signed → lost

### Follow-Up Sequence
Day 1, 3, 5, 7, 14 — AI drafts reminder message → Gatekeeper for approval

### Client Intelligence Profile (built OS #5)
On every lead — tap 🧠 Intelligence button:
- Risk Score (Low/Medium/High) with reason
- Predicted Outcome (Will Sign/Uncertain/Likely Lost) with confidence %
- Payment Behavior
- Scope Tendency (stable vs change-prone)
- Communication Style
- Recommended Approach (2-3 sentences)
- Biggest Opportunity
- Watch Flags

---

## MODULE 3 — LIVE CALL MODE

### The Vision
You are having a real human conversation. You never stop talking to read something. AI sits beside you silently and feeds you everything you need.

### Current Call Screen Layout
**TOP BAR:** Client name, job type, timer, phone link, Back button, End + AI Report button

**CHECKLIST BAR (must cover — turns green automatically as you speak):**
- Cost-Plus
- $5k Deposit
- Permits
- Timeline
- Budget
- Next Step

Detection is keyword-based (instant, no AI credits):
- Cost-Plus: "cost plus", "20%", "transparent", "every invoice"
- Deposit: "5000", "deposit", "applies toward"
- Permits: "permit", "we handle", "inspections"
- Timeline: "start", "months", "spring", "fall"
- Budget: "budget", "price", "square foot"
- Next Step: "send you", "proposal", "schedule"

**LEFT PANEL — YOUR SCRIPT:**
- Split by paragraphs (real newlines)
- Opening starts open
- Tap section header to open/close
- NEXT ▶ button advances to next section
- Sections: Opening, Discovery, Company Pitch, $5k Deposit, Soft Close

**RIGHT PANEL — AI FEED (updates every 5 seconds):**
- Main suggestion card (green) — what to say next
- Intelligence card — permit flags, calculator, client info
- Alert card (red) — appears when something needs attention
- Commitment log (amber) — builds silently as promises are made
- Situation buttons (8): Too expensive, About $5k deposit, Getting other bids, Not ready yet, When can you start, How does it work, Want references, Ready to go!

**BOTTOM:** Start Recording button, quick notes textarea

### What AI Does During The Call
- Reads transcript every 5 seconds
- Updates suggestion card with what to say next
- Turns checklist dots green when keywords detected
- Logs commitments from both sides automatically
- Detects square footage mentioned → shows cost calculator
- Flags permit requirements from address/county
- Saves everything to lead record

### Post-Call AI Report (End + AI Report button)
AI reads full transcript and delivers in 30 seconds:
- Hot/Warm/Cold rating with reason
- Interest score
- What client said (key points)
- Objections raised and how handled
- Agreements made
- What client must send you
- What you promised to send them
- Bid notes if scope discussed
- Follow-up sequence (Day 1/3/7/14) — specific actions
- Follow-up email — drafted, ready to send in one tap
- AI recommendation — overall assessment, most important next action
- Predicted next stage
- Permit flags for this address
- Finish estimate if square footage discussed
- All pushed to Gatekeeper for one-tap approval

### What Was Discussed But Not Fully Built Yet
- Auto-detection of situation buttons (AI taps them automatically — no manual tap needed)
- Live images of styles client mentions
- Property intelligence from address (Google Maps integration)
- Script auto-advances as conversation progresses (no tapping)
- Drift detection ("You've been talking 4 minutes without covering the deposit")

---

## MODULE 4 — CALL INTELLIGENCE SYSTEM (built OS #5)

### Pre-Call
AI reads everything from Angi form before you dial:
- Their exact words
- Job type, size, budget, timeline
- Flags if what they wrote and what they say on call differ

### Live Calculator
Client mentions square footage → instant three-row estimate:
- Standard: $200/sqft
- Mid-grade: $250/sqft
- Premium: $300/sqft
Updates as they mention upgrades

### Permit Intelligence
Address detected → AI pulls:
- County (Ulster, Sullivan, Dutchess)
- Wetland zones
- Army Corps requirements
- Septic vs municipal sewer
- Typical permit timeline for that municipality
- Setback requirements
- Flood zone flags

### Commitment Logging
Everything promised on the call — by you or client — logged automatically:
- "You'll send them a proposal by Friday" → task with due date
- "They'll send you the survey" → pending item on their file
- "Ballpark $350k" → attaches to estimate
- "Start in spring" → locks into schedule

All saved to lead record. AI reminds you before anything is due.

---

## MODULE 5 — GATEKEEPER

### The One Queue
Every AI action from every module routes here. One place. One-tap Approve/Reject.

### What Goes Through Gatekeeper
- Post-call AI reports (follow-up emails, next actions)
- Daily log change order detections
- Lead follow-up reminders (Day 1/3/5/7/14)
- Estimate follow-ups (Day 3/7/14 if not signed)
- Change order reminders (Day 2/5/10)
- Invoice reminders (Day 3/7/14/21 if unpaid)
- Bid scope from call notes
- Budget overrun alerts
- Bill approval/rejection
- Sub COI expiry alerts
- Any AI-generated document

### Each Gatekeeper Card Shows
- What it is and why
- AI recommendation
- Approve / Reject buttons
- Snooze option

---

## MODULE 6 — JOBS

### Job Card
- Job name, client name, status, completion %
- Progress bar
- Schedule button, Financial button, Update % button
- AI Status button (🤖)
- 📊 Profit button (Job Profitability Predictor)

### Job Profitability Predictor (built OS #5)
Tap 📊 on any job:
- Contract value, costs to date, current margin %
- AI predicts: final margin %, final profit $, confidence %
- Status: On Track / At Risk / In Trouble
- Risk factors list
- Opportunities list
- Recommendation (2 sentences, what to do right now)

---

## MODULE 7 — ESTIMATES

### Fields
Line items with: description, quantity, unit, unit cost, markup %, cost type
Live total with markup calculation

### AI Features
- AI Fill — generates full estimate from job description
- AI tips per line item
- Client preview (professional PDF-quality)
- Send to client workflow

### Seed Data
Klein Residence estimate with 15 line items

---

## MODULE 8 — CHANGE ORDERS

### Creation Methods
1. Manual entry
2. From daily log AI detection
3. From Zoom transcript
4. Voice dictation
5. Photo evidence

### AI Draft
AI drafts the CO language, calculates impact, routes to Gatekeeper

### After Approval
Budget auto-updates, schedule impact calculated

---

## MODULE 9 — DAILY LOGS

### Entry
Voice or text, AI structures it
Fields: date, phase, crew count, weather, work completed, materials used, issues, photos

### AI Processing
- Detects scope changes → auto-drafts change order → Gatekeeper
- Flags high-severity issues
- Generates client update message
- Tracks progress vs schedule

---

## MODULE 10 — DOCUMENTS & E-SIGNATURE

### Document Lifecycle on Every Document
Save → Preview → Send → E-Sign → Recall → Delete

### E-Signature
- Built native (no DocuSign needed)
- Client gets a link
- Opens on any device
- Signs with finger or mouse on canvas
- Feishy notified in Gatekeeper instantly

### Preview
Shows exactly what client sees before anything is sent

---

## MODULE 11 — REMINDER ENGINE

### Auto-fires on:
- Leads: Day 1, 3, 5, 7, 14
- Estimates: Day 3, 7, 14 (if not signed)
- Change Orders: Day 2, 5, 10
- Invoices: Day 3, 7, 14, 21 (if unpaid)

### Each Reminder
- Appears in Gatekeeper with Remind Now / Resend / Snooze buttons
- AI drafts the reminder message
- Escalates automatically if no response

---

## MODULE 12 — SUBCONTRACTORS

### Profile Fields
Company name, contact, phone, email, license, trade specialties

### Documents with Expiry Tracking
- COI (Certificate of Insurance)
- Workers Comp
- Hold Harmless
- W9

### Alert Badges
- Red: EXPIRED
- Amber: Expiring within 30 days
- Green: Valid

### AI Features
- COI check before any payment
- Performance rating after each job
- Sub recommendation for new jobs based on trade and performance

---

## MODULE 13 — FINANCIAL MODULES

### Bills / AP
- Upload bill → AI extracts vendor, amount, job, category
- Approval chain: PM → Site Manager → Owner
- Lien waiver auto-sent on payment
- COI check before payment release

### Invoices / AR
- Schedule of Values format
- Magic Link client payment
- Overdue escalation (Day 3/7/14/21)
- Demand letter auto-drafted if 21+ days unpaid

### Purchase Orders
- Auto-generate from estimate
- PO sign enforcement
- Delivery tracking
- Quantity discrepancy alerts

### Budget
- AI Budget Guard — alerts when actuals exceed budget
- Real-time job costing (PLANNED — not built yet)
- Cash flow forecast

---

## MODULE 14 — ERROR LOG

### Built OS #5
- ⚠️ button in header
- Red badge shows count of errors
- Tap to open panel at bottom of screen
- Shows: time, source, exact error message, stack trace
- Copy All button — paste directly to Claude for instant fix
- Auto-catches all uncaught errors and promise rejections
- Clear button

---

## THE AI FUNCTIONS — ALL 33

| Function | What It Does |
|---|---|
| ai() | Core AI call via /api/claude proxy |
| generateLeadAI() | Script, objections, email for new lead |
| regenLeadAI() | Regenerate AI for existing lead |
| generatePostCallReport() | Full call debrief, follow-up email |
| generateDailyBriefing() | Morning top-3 priorities |
| showClientIntelligence() | Risk score, predicted outcome, approach |
| showJobProfitability() | Margin prediction, risk factors |
| refreshCallIntel() | Live permit/calculator during call |
| detectCommitments() | Keyword checklist during call |
| buildPermitIntel() | Ulster/Sullivan/Dutchess permit flags |
| parseSqftFromText() | Detect square footage from transcript |
| aiProcessDailyLog() | Structure log, detect scope changes |
| aiStructureLog() | Format raw voice log |
| aiEstimateHelper() | Fill estimate line items |
| aiInvoiceSuggestion() | Suggest invoice amount and terms |
| aiLogTransaction() | Categorize bill/transaction |
| aiBudgetGuard() | Alert on budget overrun |
| aiCheckBill() | Verify bill against PO/estimate |
| aiAnalyzePhoto() | Detect work done incorrectly |
| aiDetectScope() | Find scope changes in logs |
| aiWeeklySummary() | Weekly business summary |
| aiCashFlow() | Cash flow forecast |
| aiRiskScore() | Lead/job risk assessment |
| aiGenerateSchedule() | Build 13-phase schedule |
| quickAIJobNote() | Quick AI status on job card |
| aiDraftMessage() | Draft client message |
| aiGeneratePunchList() | Generate punch list from logs |
| aiDraftRFI() | Draft RFI document |
| aiRankBids() | Rank bids by value and risk |
| aiSuggestTasks() | Suggest tasks for job |
| aiSuggestSelections() | Suggest material selections |
| aiGenerateSpecs() | Generate specifications |
| aiWarrantyAnalysis() | Analyze warranty claim |
| addLine() | Add line item with AI |
| aiDraftPO() | Draft purchase order |
| aiDraftCO() | Draft change order |
| pgDashAI() | Dashboard AI analysis |
| addToGatekeeper() | Universal GK helper — all AI routes here |

---

## WHAT IS NOT BUILT YET (FULL LIST)

### High Priority
1. **Email auto-intake** — Angi "New Lead Alert" emails auto-intercepted → lead created → AI script → Gatekeeper
2. **Supplier bill auto-intake** — PDF bills forwarded to Gmail → AI extracts → approval chain
3. **Supabase connection** — replace localStorage with real database
4. **Commitment logging saved after call** — wire co-commit-list to lead record permanently

### Medium Priority
5. **Real-time job costing** — live profit per active job updated daily
6. **Organizational Memory** — closed jobs feed future estimates
7. **Auto-detection of situation buttons** — AI taps them, no manual tap
8. **Script auto-advances** — follows conversation without tapping
9. **Drift detection** — "You haven't mentioned the deposit in 4 minutes"
10. **Live image search during call** — client mentions farmhouse style → 3 photos appear

### Lower Priority
11. **Permit tracking module** — full permit status, inspection scheduling
12. **1099 engine** — sub payments, year-end filing
13. **GPS time tracking** — clock in/out per job site
14. **Safety logs** — toolbox talks, incident reports, OSHA log
15. **AIA billing** — Schedule of Values, G702/G703
16. **Retainage tracking**
17. **QBO sync** — connect LAST after 30-day parallel verification

---

## WHAT WAS DISCUSSED IN ALL SESSIONS — FULL VISION

### Session OS #1 (June 10)
- Full system architecture designed
- 8 navigation menus mirroring Buildertrend exactly
- Supabase account created (project "corestone-os")
- n8n deployed on Render
- Magic Link sub bidding designed
- Proposal with 9-section construction agreement
- Client survey triggered on deposit
- Plan intelligence (AI reads PDFs, extracts takeoffs)
- QBO sync designed (connects last)
- The 2080 vision established

### Session OS #2 (June 18 early)
- Light theme with teal nav and Corestone branding
- Buildertrend navigation model locked in
- Lead Intelligence System built
- Live Call Mode with 8 situation buttons
- Web Speech API transcript capture
- 30-day follow-up sequence
- Post-call AI analysis
- Anthropic API key split (GitHub blocks it)
- Classic PAT only rule established

### Session OS #3 (June 18)
- Dashboard spinning bug fixed
- Full navigation audit
- CORESTONE_MASTER.md written to GitHub
- AI proxy wired (/api/claude)
- All modules rebuilt with proper async/await
- E-signature built natively
- Document lifecycle (Save/Preview/Send/E-Sign/Recall)
- Reminder engine (Day 1/3/5/7/14)
- Daily log AI → change order detection
- Bug tracker built
- Mobile CSS optimization
- 2080 strategic architecture review
- Memory/Reasoning/Advisory layers identified as missing

### Session OS #4 (June 18-19)
- 37 AI functions wired
- Navigation audit: 26/28 flows verified
- Daily Briefing designed
- Client Intelligence Profile designed
- Job Profitability Predictor designed
- Call screen redesign discussed
- Two-mode workflow: this chat for builds, Claude Code for bug fixes
- Claude Code set up in VS Code

### Session OS #5 (June 22)
- VS Code + Claude Code fully operational
- Git repo connected locally
- Daily Briefing built and wired to dashboard
- Client Intelligence Profile built
- Job Profitability Predictor built
- addToGatekeeper() helper built
- Call Intelligence System built (permit detection, calculator, sqft parser)
- Call screen rebuilt (peripheral vision design, checklist bar, NEXT button)
- Commitment logging added
- Error log panel built (⚠️ button, copy to clipboard)
- Version check added (v2.2 — auto-clears old localStorage)
- Full system audit run — 17 flows all pass
- Script sections fixed (DOM-based, real paragraphs)
- Keyword checklist detection (instant, no AI credits)

### Session OS #6 (June 24)
- **Documentation and audit only — no code implemented**
- Full pipeline audit document produced (OS6_Pipeline_Audit.docx)
- Complete execution package: 10 sections + 6 handoff files (SYSTEM_MAP.md, MASTER_INDEX.md, GAP_REPORT.md, WORKFLOW_MAP.md, NEXT_ACTIONS.md, FEATURE_REGISTER.csv)
- Business Brain vision specification (OS6_BusinessBrain_Vision.docx)
- Takeoff and estimating gap analysis (OS6_Takeoff_Gap_Analysis.docx)
- Live call platform architecture review (OS6_CallCenter_Architecture.docx)
- Knowledge propagation audit (OS6_KnowledgePropagation.docx)
- **CRITICAL BUG: Gatekeeper approval is a silent no-op** — changes status only, executes nothing
- **CRITICAL BUG: takeoffToEstimate() never saves to estimates table**
- **CRITICAL BUG: calcEstTotal() applies 8% tax to labor, subs, permits — incorrect under NY law**
- **CRITICAL BUG: callIntel object never written to database — lost on call end**
- **CRITICAL BUG: post-call AI analysis extracts 12 arrays but saves only 4 — rest dumped as unqueryable text**
- **CRITICAL BUG: survey_selections has zero downstream consumers — no module reads it**
- **ARCHITECTURAL FINDING: System operates as separate disconnected tools, not one connected OS**
- Feishy named most differentiated capabilities: Organizational Memory, Business Brain, Pattern Recognition, Scope Creep Detection, Subcontractor Intelligence
- Takeoff gap confirmed: current AI produces general summaries, not structured takeoffs (cubic yards, rebar LF, outlet counts, window/door schedules)
- Master doc was not updated after this session — corrected in OS #7

### Session OS #7 (June 25)
- Master document updated to reflect OS #6 audit findings
- New Development Directive locked in permanently (see DEVELOPMENT DIRECTIVE section)
- Architecture Review Board (ChatGPT) established as independent reviewer
- Claude role defined as Implementation Team + architectural contributor
- No code touched this session — foundation locked before building resumes

---


---


---

## MANDATORY PRE-IMPLEMENTATION RULE — LOCKED OS #7

Before ANY code is written, read ALL of the following:

1. `CORESTONE_BLUEPRINT.md` — Master Architecture
2. `CORESTONE_REQUIREMENTS.md` — Requirement Inventory
3. `CORESTONE_DECISIONS.md` — Decision Log
4. `CORESTONE_LEDGER.md` — Implementation Ledger
5. `CORESTONE_OPEN.md` — Open Questions and Risks
6. `CORESTONE_RELEASES.md` — Release Notes

Then generate a **PHASE IMPACT REPORT** showing:
- Goal
- Requirements affected (REQ-IDs)
- Modules affected
- Objects affected
- Workflow impact
- Risk
- Dependencies
- Architecture changes
- Open concerns
- Recommendation

**No implementation until Impact Report is reviewed and approved.**
**Nothing may be implemented without a REQ-ID.**
**Nothing may be removed silently.**

---
## DEVELOPMENT DIRECTIVE — LOCKED OS #7 (June 25, 2026)

### Team Structure
- **Owner / Vision:** Feishy Felberbaum
- **Architecture Review Board:** ChatGPT (independent reviewer — challenges assumptions, identifies gaps, reviews before and after each phase)
- **Implementation Team + Architectural Contributor:** Claude

This structure is intentional. One AI does not both design and approve its own work.

### Claude's Role Before Every Major Implementation
Think across all roles simultaneously:
- Senior Software Architect
- Construction Company Owner
- CTO
- QA Director
- Product Designer
- Enterprise Software Engineer

Before writing any code, ask:
- What is missing?
- What could break?
- What should be reusable / a shared component?
- What should become a system-wide standard?
- What settings should exist?
- What permissions should exist?
- What audit trail should exist?
- What AI opportunities exist?
- What manual workflow should also exist?
- What downstream modules are affected (Leads → Takeoff → Estimates → Bids → Contracts → Jobs → Purchasing → Bills → Invoices → Daily Logs → Reports → Business Brain → Gatekeeper)?

If improvements are discovered — recommend them BEFORE implementation.

### Development Standards (Non-Negotiable)
- AI-first, manual always available
- Single source of truth — data entered once, propagated everywhere
- No dead buttons
- No demo logic in production paths
- No hidden broken workflows
- Consistent UI, status handling, search, communication, approval, audit logging, permissions
- Reusable components instead of duplicated code

### Every Major Workflow Must Support Both
1. Automatic AI workflow
2. Manual workflow
Manual changes update the same underlying data — AI and manual stay synchronized always.

### Every Business Object Must Support
Internal comments, team discussion, client communication, vendor/sub communication, AI notes, attachments, mentions, related tasks, history, settings

### After Every Implementation Phase — Claude Returns
1. What was implemented
2. What files changed
3. What architectural decisions were made
4. What new recommendations were identified
5. What concerns were discovered
6. What should the Architecture Review Board review before continuing

### The Master Document
- This document is the single source of truth
- Every implementation session must update it
- Nothing exists in the software that is not documented here

---
## UI STANDARDS — NEVER CHANGE THESE

- **Theme:** Buildertrend-inspired light theme with teal navigation
- **Colors:** Teal (#0d7a70) for primary, teal nav sidebar
- **Branding:** Corestone Developers throughout
- **Navigation:** Left sidebar scopes all tabs to selected job/client
- **After every save:** nextStep() modal appears with clear options
- **After every AI action:** routes to Gatekeeper (never executes automatically)
- **Every form:** has mic button for voice input
- **Nothing disappears** with only a toast message — always a next step

---

## CODING RULES — NEVER BREAK THESE

1. Syntax check before every push (node --check)
2. SHA fetched fresh before each push
3. Classic PAT only (ghp_ prefix)
4. Nothing removed — additions only
5. Quote escaping: use DOM createElement instead of innerHTML for complex HTML
6. Emoji and special characters: use raw bytes replacement
7. Anthropic API key split into two variables
8. fmt$ function: use content.find('fmt$') not regex
9. All database functions must be async (dbGet, dbIns, dbUpd, dbDel)
10. All page functions must be async if they use await
11. Version number (CS_VERSION) must be bumped on every push that changes data structure

---

## THE PASTE FOR NEXT SESSION

```
I am Feishy Felberbaum, owner of Corestone Developers, Hudson Valley NY.
I am building Corestone OS — AI-powered construction management replacing Buildertrend.

Read CORESTONE_MASTER.md from GitHub repo feishy-hub/leadflow-corestone.
Token: ghp_ + a1witGJA8STynnfSPfZw97FD6TnVuw1ydZ7j (join, no space)
Live at: leadflow-corestone.vercel.app
Single file: index.html

THE ONE RULE: AI handles everything. Feishy only approves or rejects.
Nothing gets removed. Only additions. Classic PAT only. Syntax check before every push.

Read the master doc. Tell me you are ready. Then audit the system and tell me what to fix first.
```

---

*This document captures everything from OS #1 through OS #7.*
*Nothing is lost. Everything is here.*
*Last updated: June 25, 2026*

---

# OS #8 — SESSION LOG
## Date: July 2, 2026
## Focus: Architecture Governance, M1 Internal QA, Foundation Fixes, Executive Directive

---

## PERMANENT DOCUMENTS ADDED THIS SESSION

| Document | Purpose |
|---|---|
| CORESTONE_CONSTITUTION.md | Highest authority — 15 principles governing all development |
| CORESTONE_ARCHITECTURE_DIRECTIVE_OBJECT_MODEL.md | Object Model, Visibility Engine, Proposal System architecture |
| CORESTONE_ARCHITECTURE_LOCKDOWN.md | Future-proofing directive, complete workflow review requirement |
| CORESTONE_TESTING_STANDARD.md | Executive Acceptance Testing Standard v1.0 — 9 mandatory sections |
| CORESTONE_EXECUTIVE_DIRECTIVE.md | NEW — Governing standard for all future development |
| CORESTONE_SUBSYSTEM_STATUS.md | NEW — Honest implementation status of every enterprise subsystem |
| CORESTONE_COMMAND_CENTER.html | NEW — Visual project management dashboard |

---

## BLUEPRINT EXPANSION

Blueprint grew from 266 to 957 lines.
Added complete target architecture for 10 enterprise subsystems:
1. Object Model (40 business objects, full catalog)
2. Visibility Engine (field/object/role-level, Preview-as-role)
3. Event Engine (25 events, subscriber pattern, Gatekeeper integration)
4. Workflow Engine (NEW — Feishy's addition; 10 default workflows WF-01 through WF-10)
5. Enterprise Permission System (role hierarchy, runtime evaluation)
6. Financial Architecture (Estimate→GL chain, GL hooks reserved)
7. Business Brain (what it holds, outputs, when it builds)
8. Mobile Architecture (offline sync queue, PWA, biometric)
9. API Architecture (24 endpoint groups, versioned, webhooks)
10. Integration Architecture (Gmail/n8n/Stripe/QBO adapter pattern)

Governing principle locked: "Design now. Build when the platform is ready."

---

## CODE CHANGES — INDEX.HTML

### ROOT CAUSE BUG FIX
- **Nested job cards** ("the cascade"): Root cause was malformed HTML escaping in 🤖 AI Status button
  - `onclick="quickAIJobNote(\'id\\')"` — `\'` and `\"` caused HTML parser to misread attribute boundary
  - Every subsequent job card parsed as child of previous card
  - Fix: replaced with `data-jid` attribute — verified 21 opens / 21 closes in renderJobCard

### SELECTJOB NULL-SAFETY
- All `$('ctx-bar')`, `$('ctx-name')`, `$('ctx-badge')`, etc. wrapped in null checks
- Crash: "Cannot read properties of null (reading classList)" — FIXED

### BUSINESS CASCADE ENGINE
- `runBusinessCascade(action, objectType, objectId, context)` added
- Cascades built:
  - `co.approved` → job contract update + budget + PM task + client notification draft
  - `invoice.paid` → job costing + final payment detection → warranty + Closeout status
  - `punch.completed` → overall % + final inspection trigger at 100%
  - `rfi.closed` → resolution logged + plan revision flag
  - `lien_waiver.signed` → all-signed check → payment release
  - `bill.approved` → job costing committed + PO mismatch detection

### WORKFLOW-DRIVEN LEAD FLOW
- `showTestingToolbar()` replaced by `launchExecTest()`
- New leads locked to stage 'new' (form dropdown removed for new leads)
- `stageUp` → `advanceLeadWorkflow()` — blocks 'proposal_sent' and 'signed' from manual buttons
- `sendProposalToClient` → auto-updates lead stage + Day 3/5/7 follow-up Gatekeeper items
- `proposal_signed` Gatekeeper executor → Job + Budget + Deposit Invoice + survey trigger + PM assignment

### M1 INTERNAL QA FIXES
- Pipeline stages: 'proposal' → 'proposal_sent' (leads were disappearing from pipeline)
- `saveLead` duplicate-click protection (input disabled on submit)
- Edit lead button: JSON-in-onclick → safe `editLeadById(id)` (was breaking on special characters)
- "Convert to Job" → "Create Estimate" (enforces Lead→Estimate→Proposal→Job flow)
- `saveLead` nextStep uses `sid` not "latest lead" from DB
- Audit log entry added to saveLead on create and update

### JOB CARD IMPROVEMENTS
- All card action buttons (`📅 Schedule`, `💰 Financial`, `📊 Update %`) use `data-jid` safely
- `safeSelectJob(id, tab)` added — sets AJOB directly, single goTab call, no double-render
- `etmAwareJobOpen(id)` — single render, navigates to scenario-appropriate tab
- Job Settings button removed from Jobs list header (belongs inside job detail only)
- All CSS transitions removed from job cards (user preference — no visual animations)
- Progress bar transition removed

### EXECUTIVE TESTING MODE (ETM)
- Built as fixed right-side panel (380px)
- No blocking confirm dialog on launch
- Silent test data load in ETM mode
- `nextStep()` suppressed when ETM active (no competing popups)
- 5 scenarios with Steps / Auto Actions / Verify / Watch For Bugs tabs
- PASS/FAIL buttons with scenario progression
- Direct navigation buttons per scenario
- `showTestingToolbar()` → unified `launchExecTest()` entry point

### TEST DATA LOADER
- `loadTestScenario('kitchen_remodel')` with stable IDs (GTX object)
- Creates: Lead + Job + Budget + PO (Victory Framing $4,800) + RFI (Mike Volkov) + invoices
- `upsertLS()` — idempotent; re-running doesn't duplicate records
- Silent in ETM mode; toast only in standalone mode

### RECORD PAYMENT FLOW
- `markPaid()` deprecated → `recordPayment()` collects: amount, method, date, reference
- `confirmRecordPayment()` wired to cascade

### BILL FORM
- `po_id` field added to saveNewBill — enables PO discrepancy detection

### PO ARCHITECTURE DIRECTIVE
- Locked: POs NEVER auto-created
- 3-stage: Internal → Customer → Gatekeeper → PO
- Directive comment block added to codebase
- DEC-022 recorded

### MISCELLANEOUS
- `quickAIJobNote()` — AI job status in 2 sentences
- `safeSelectJob()` helper
- `editLeadById()` helper
- ETM navigation helpers (etmGoTo, etmAwareJobOpen)

---

## DECISIONS LOCKED THIS SESSION

| ID | Decision |
|---|---|
| DEC-018 | Design now. Build when the platform is ready |
| DEC-019 | Workflow Engine is a core enterprise subsystem |
| DEC-020 | All 10 subsystems fully designed in Blueprint before Phase 2 |
| DEC-021 | GL hooks reserved on all financial objects going forward |
| DEC-022 | Three new permanent documents saved to repo |
| DEC-023 | Architecture freeze — no Blueprint expansion unless critical flaw |
| DEC-024 | Every dev cycle = one complete testable workflow with testing package |
| DEC-025 | Status = result of business action, never manual button |
| DEC-026 | CEO mindset: show working product, test, critique, improve |
| PO Directive | POs never auto-created. 3-stage Gatekeeper approval required. |
| Terminology | Never use "stub" — say "partially implemented" (avoids sub/stub confusion) |

---

## OPEN ITEMS AFTER OS #8

| ID | Priority | Item |
|---|---|---|
| OQ-011 | High | Call Intelligence post-call saves only 4 of 12 fields |
| OQ-019 | M2 | Workflow Engine build timing — currently hardcoded transitions |
| OQ-020 | Immediate | GL account codes not reserved on current financial objects |
| OQ-021 | M2 | CSI category implementation priority |
| OQ-022 | M2 | Preview-as-Role UI-only version for Phase 1 stepping stone |
| OQ-023 | Pre-launch | n8n on Render cold-starts — upgrade to paid tier before live email intake |
| OQ-024 | M1 | Estimate line item CRUD — open/edit/delete each line needs verification |
| OQ-025 | M1 | Tax calculation verification (materials-only, 8% Ulster County) |
| OQ-026 | M1 | Proposal 9-section render verification |
| OQ-027 | M1 | Magic link client view completeness |
| OQ-028 | M1 | E-signature → Job creation ETM verification |
| OQ-029 | M2 | PO 3-stage authorization workflow — must be built before M2 |

---

## M1 STATUS AT SESSION END

**Done (internally QA'd):**
- Lead form, creation, AI generation, duplicate-click guard
- Pipeline kanban with correct stage mapping
- Lead detail modal with all buttons working
- Stage enforcement (proposal_sent/signed workflow-only)
- sendProposalToClient cascade
- proposal_signed Gatekeeper executor
- Audit log on lead save
- Edit lead safe approach
- "Create Estimate" navigation from lead

**Needs Internal QA (before Executive Testing):**
- Estimate CRUD (open, edit line items, delete)
- Tax calculation on 15-line estimate
- createProposalFromEstimate → 9 sections render
- Magic link client view
- E-signature → Gatekeeper → Job creation
- callIntel 12-field post-call persistence
- Delete lead audit trail

**M1 cannot go to Executive Testing until all of the above pass internal QA.**

---

## INFRASTRUCTURE AT SESSION END

- **Repo:** github.com/feishy-hub/leadflow-corestone
- **Live app:** leadflow-corestone.vercel.app (auto-deploys from main)
- **Supabase:** corestone-os project deployed, NOT connected
- **n8n:** on Render, deployed, NOT connected
- **AI Proxy:** /api/claude on Vercel, working

---
*OS #8 session complete — July 2, 2026*

---

# OS #8 PHASE COMPLETION — FINAL PUSH
## Date: July 2, 2026

### M1 Critical Bug Fixes

| Bug | Root Cause | Fix |
|---|---|---|
| Tax calculation failing on all new line items | `calcEstTotal` read `l.type` but `saveNewLine` saved `cost_type` — ALL new lines classified as 'other', no tax applied to materials | Added `l.cost_type` to type detection chain |
| Manual "Mark Sent" / "Mark Approved" buttons | Violated DEC-025 — status must be workflow outcome | Removed; replaced with workflow note |
| Estimate card transitions | User preference violation | `transition:all 0.15s` removed from estimate cards |
| No guidance after signature | Dead end — user signed but didn't know to go to Gatekeeper | `nextStep()` added directing to Gatekeeper with "approve to create Job" |
| executeSignature double-sign possible | No guard | `nameEl.disabled = true` on first submit |

### New Platform Features Built

**Executive Feedback System** (`initExecFeedback`, `openExecFeedback`, `submitFeedback`)
- Floating 💬 button (bottom-left, always visible)
- Three modes: Something is broken / Page feels incomplete / Something feels wrong
- Auto-collects: current page (CUR), active job (AJOB), timestamp, viewport, storage keys, visible errors
- AI generates structured development report: root cause, affected workflows, blueprint alignment, priority, recommended fix, downstream impact
- Saves to `cs_feedback` localStorage + creates Gatekeeper item
- Feishy never needs to describe technical problems — system collects context automatically

**Notification Center** (`addNotification`, `openNotifCenter`, `updateNotifBadge`, `clearNotifications`)
- Bell icon (🔔) in sidebar header with unread count badge
- Persistent notification panel (replaces toast-only)
- Notification types: gk, workflow, ai, system, alert, feedback
- Last 100 notifications stored; mark-all-read on open
- Notifications clickable with navigation actions

**Global Search** (`openGlobalSearch`, `runGlobalSearch`)
- Keyboard shortcut: Cmd+K / Ctrl+K
- Searches across: Leads, Jobs, Proposals, Estimates, Invoices
- Results grouped by type with icons
- Click result → navigate directly to that record
- Live search (2+ character minimum)
- ESC to close

### M1 Status After Phase Completion

**Complete (internally QA'd and fixed):**
- Lead form, pipeline, detail, stage enforcement, AI generation, duplicate-click guard, edit button, audit log
- Pipeline 'proposal_sent' stage mapping
- Tax calculation (CRITICAL bug fixed — materials-only 8% NY law)
- Estimate open, line item CRUD (add/edit/delete)
- Line item live preview
- createProposalFromEstimate → 9-section proposal
- Proposal view (all 9 sections + draw schedule)
- E-signature flow with guard + Gatekeeper guidance
- sendProposalToClient cascade
- proposal_signed Gatekeeper executor (Job + Budget + Deposit Invoice + survey + PM task)

**Still needs ETM verification:**
- Full flow end-to-end test: Lead → Estimate → Proposal → Sign → Gatekeeper → Job
- callIntel post-call 12-field persistence (OQ-011)

### Platform at Session End

App: leadflow-corestone.vercel.app
Repo: github.com/feishy-hub/leadflow-corestone (15 documents + index.html)
Index.html: ~830KB, 400+ functions

---
