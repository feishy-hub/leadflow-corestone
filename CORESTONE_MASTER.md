# CORESTONE OS — MASTER DOCUMENT
**Last Updated:** 2026-06-19
**Repo:** feishy-hub/leadflow-corestone
**Live URL:** https://leadflow-corestone.vercel.app
**Stack:** Single HTML file · Vercel · GitHub auto-deploy · Anthropic API via /api/claude proxy

---

## DEPLOYMENT
- **Platform:** Vercel (NOT Lovable, NOT Base44, NOT Netlify — all abandoned)
- **Repo:** feishy-hub/leadflow-corestone (GitHub)
- **Auto-deploy:** Every push to main branch → live in 30-45 seconds
- **API Proxy:** /api/claude.js (Vercel serverless function)
- **API Key:** Set in Vercel Environment Variables as ANTHROPIC_API_KEY
- **GitHub PAT:** Classic token only (fine-grained PATs fail) — stored in memory
- **Database:** localStorage (dbGet/dbIns/dbUpd/dbDel helpers mirror Supabase API)
- **File size:** ~470,000 chars (single index.html)

---

## CRITICAL RULES
1. Claude pushes directly to GitHub — never ask Feishy to download/deploy manually
2. Classic PATs only — fine-grained always fail with 403
3. All updates in ONE push per session — never piecemeal
4. localStorage over Supabase — no spinning/loading issues
5. AI does everything automatically — Feishy only confirms/approves
6. Every form has a 🎙️ mic button — speak instead of type
7. Nothing gets removed — only additions

---

## ARCHITECTURE
- **Navigation:** Buildertrend-identical left sidebar, collapsible, grouped sections
- **AI Brain:** Every transaction flows through aiLogTransaction() → daily log + Gatekeeper
- **Mic System:** micFillField(fieldId, hint) — universal voice input on every form
- **safeJSON():** Robust JSON parser — handles fences, smart quotes, arrays, objects
- **AI Proxy:** /api/claude → Vercel serverless → Anthropic API (CORS safe)

---

## MODULES BUILT (ALL COMPLETE — NO STUBS)

### SALES
- ✅ **Leads** — Pipeline, AI scoring, email scan, call scripts, objection handling
- ✅ **Live Call Mode** — Real-time AI coaching, situation buttons, transcript
- ✅ **Email Scanner** — Paste Angi/Houzz email → AI extracts lead automatically
- ✅ **Proposals** — Status tracking, Sent/Viewed/Signed/Approved pipeline

### PRECONSTRUCTION  
- ✅ **Plan Intelligence** — PDF upload, AI takeoff extraction, cost range
- ✅ **Estimates** — Line items, markup, AI helper, categories
- ✅ **Bidding** — Bid packages to subs, AI bid ranking, voice bid
- ✅ **Selections** — Client selections by category, AI suggestions, status cycling

### PROJECT MANAGEMENT
- ✅ **Schedule** — Phases, Gantt, AI generate, percent complete
- ✅ **Daily Logs** — Voice recording, AI structures log, issues, client updates
- ✅ **Punch List** — AI generates from job scope, priority levels
- ✅ **RFIs** — Log, AI draft, status tracking
- ✅ **Photo Log** — Upload, AI analysis (aiAnalyzePhoto), 360° support
- ✅ **Change Orders** — Full CO lifecycle, AI draft, voice CO, markup calculator, approve flow
- ✅ **Specifications** — Per job, by CSI section, AI generate, voice input

### FINANCIAL
- ✅ **Invoices** — AR, progress billing, AI suggest amount, Mark Paid, overdue detection
- ✅ **Bills / AP** — Vendor bills, pay bill, AI verify, dispute flow
- ✅ **Purchase Orders** — Line items, AI material suggestions, delivery tracking, budget guard
- ✅ **Budget** — Real-time cost vs budget per job, PO committed, CO additions, progress bar
- ✅ **Lien Waivers** — Auto-generation, sub payments

### CLIENT & SUBS
- ✅ **Subcontractors** — Directory, COI/W9 auto-request on add, rating, trade
- ✅ **Messages** — Client/sub threads, AI draft
- ✅ **Warranty** — Claims tracking, AI analysis (covered/not covered), responsibility
- ✅ **Gatekeeper** — All AI-flagged items queue, approve/reject/delegate

### INTELLIGENCE
- ✅ **Reports** — KPI dashboard, job performance
- ✅ **AI Story Tracker** — Full job lifecycle narrative
- ✅ **AI Weekly Summary** — Business health, priorities, risks, wins
- ✅ **AI Cash Flow Forecast** — 30-day inflow vs outflow
- ✅ **AI Risk Scorer** — Per job risk assessment
- ✅ **AI Scope Detector** — Detects scope changes in messages/transcripts → auto-drafts CO

### AUTOMATION (RUNS AUTOMATICALLY — NO BUTTON PRESS)
- ✅ New sub added → W9 + COI request drafted → Gatekeeper
- ✅ New lead → AI scores + generates call script
- ✅ New job → Onboarding checklist in Gatekeeper
- ✅ New CO → Budget guard check
- ✅ New PO → Budget guard check  
- ✅ Invoice overdue → Alert + collection draft
- ✅ Payment received → Lien waiver flag
- ✅ App opens → Scan all invoices for overdue
- ✅ Daily log voice → AI structures and flags issues
- ✅ CO approved → Budget + schedule update

---

## AI FUNCTIONS (ALL TESTED LIVE)
| Function | What it does |
|---|---|
| generateLeadAI | Call script, objections, questions, next action |
| scanEmail | Extract lead from Angi/Houzz email paste |
| analyzeCallLive | Real-time coaching during phone call |
| runPlanAI | Extract takeoff from blueprint description |
| takeoffToEstimate | Convert takeoff to line-item estimate |
| aiGenerateSchedule | Full phase schedule with dates |
| aiGeneratePunchList | End-of-job punch list |
| aiDraftRFI | Professional RFI document |
| aiDraftMessage | Client/sub communication |
| aiDraftCO | Change order from voice/notes |
| aiGenerateSpecs | Technical specifications |
| aiSuggestSelections | Client finish suggestions |
| aiWarrantyAnalysis | Covered/not covered + responsibility |
| aiCheckBill | Bill reasonableness verification |
| aiAnalyzePhoto | Photo issue detection |
| aiDetectScope | Scope change detection in messages |
| aiWeeklySummary | Weekly business health summary |
| aiCashFlow | 30-day cash flow forecast |
| aiRiskScore | Job risk assessment |
| generateContract | Full construction contract |
| sendClientUpdate | Progress update to client |
| aiLogTransaction | Every transaction logged |
| aiBudgetGuard | Budget alert at 90% committed |
| aiCheckOverdue | Invoice overdue detection |
| aiStructureLog | Voice log → structured report |
| gkAI | Gatekeeper approval recommendations |

---

## 23-STEP FULL BUSINESS SIMULATION — ALL PASSING
Lead intake → address/zoning → scoring → call script → live coaching → plan takeoff → estimate → bids → bid ranking → proposal → schedule → daily log → issue detection → CO draft → punch list → invoice → overdue collection → lien waiver → job story → review request → 1099 → warranty → profitability report

---

## ACCOUNTS & CREDENTIALS
- **GitHub:** feishy-hub/leadflow-corestone
- **Vercel:** leadflow-corestone.vercel.app  
- **Anthropic API:** Key in Vercel env vars (sk-ant-api03...)
- **Gmail OAuth:** Client ID 760633955848-6rrcev2o7kcpj0ehelhfjvf57art33cn.apps.googleusercontent.com
- **QBO:** Advanced plan (integration planned — last after 30 days parallel testing)
- **n8n:** corestone-n8n.onrender.com (planned automation workflows)
- **Test accounts:** corestone.test.client@gmail.com, corestone.test.sub@gmail.com

---

## NEXT PRIORITIES (NOT YET BUILT)
1. Email integration — real Gmail scanning (OAuth ready, not wired)
2. QBO sync — after 30 days parallel verification
3. n8n workflows — automated email routing
4. GPS time tracking — clock in/out per job site
5. Client portal — client-facing view of their job
6. PDF export — proper PDF generation for contracts/invoices
7. Push notifications — OneSignal integration
8. Permit tracking module
9. Safety / toolbox talks module
10. Mobile optimization improvements

---

## HOW TO START EACH SESSION
Tell Claude: "I'm Feishy, owner of Corestone Developers. Read the CORESTONE_MASTER.md file in my project files and then tell me you're ready."
Then Claude reads this file and is immediately up to speed on everything.
