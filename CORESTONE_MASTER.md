# CORESTONE OS — MASTER DOCUMENT
Last Updated: 2026-06-21
Live URL: https://leadflow-corestone.vercel.app
Repo: feishy-hub/leadflow-corestone

SESSION START
Tell Claude: I am Feishy, owner of Corestone Developers. Read the CORESTONE_MASTER.md file in my project files and then tell me you are ready.

PLATFORM
- Vercel (NOT Lovable, NOT Base44, NOT Netlify -- all abandoned)
- GitHub repo: feishy-hub/leadflow-corestone
- Auto-deploys every push to main (30-45 seconds)
- API proxy: /api/claude.js (Vercel serverless)
- API key: ANTHROPIC_API_KEY in Vercel environment variables
- GitHub PAT: Classic token only (fine-grained fail with 403)
  Token prefix: ghp_ followed by a1witGJA8STynnfSPfZw97FD6TnVuw1ydZ7j
- Database: localStorage

CRITICAL RULES
1. Push directly to GitHub -- never ask Feishy manually
2. Classic PAT only
3. All changes in ONE push per session
4. Run node --check before EVERY push
5. Nothing removed -- only additions
6. Every form has mic button (micFillField)
7. Every action shows nextStep() modal
8. Syntax check: extract JS, write to .js, run node --check, push only if return code is 0

TWO-MODE WORK SYSTEM
Big work: This chat (claude.ai Corestone Project)
Bug fixes: Claude Code -- Windows+R, cmd, type claude
- Say: My app is at github.com/feishy-hub/leadflow-corestone, file is index.html. Bug: [describe]. Fix and push to GitHub.

FILE STATS
- Size: ~505,000 chars
- Functions: ~265, Buttons: ~375, AI calls: ~37, Mic buttons: ~20, nextStep calls: ~26
- Syntax: Verified clean by Node.js

KEY ARCHITECTURE FUNCTIONS
micFillField(fieldId, hint) -- voice input with permission check
showMicError(msg) -- visible error banner if mic blocked
startMicRecording(fieldId, hint, callback) -- recording with live preview
nextStep(title, message, actions) -- full-screen modal after every action
safeJSON(str) -- robust JSON parser
aiLogTransaction(type, desc, priority) -- logs every transaction
aiBudgetGuard(jobId) -- fires at 90% of budget
aiCheckOverdue() -- scans invoices on load
runReminderEngine() -- runs 4s after load, checks all pending items
docPreview(table, id, docType, name) -- client view before sending
openEsignRequest(table, id, docType, name, email) -- send for e-signature
docRecall(table, id) -- pull back sent document
confirmEsign(table, id, docType) -- saves signing token, notifies GK
checkSigningLink() -- handles client signing URL on load
showSignPage(doc, table, token) -- client signing canvas experience
submitSig(table, id, token) -- client signs, saves image to record
showBugPanel() -- bug tracker, auto-catches JS errors
reportBug() -- manual bug reporting
aiProcessDailyLog(text, jobId) -- structures log, auto-drafts COs
sendReminder(table, id, docType) -- AI drafts follow-up message
snoozeReminder(key, days) -- snooze reminder in GK

ALL MODULES (ALL COMPLETE)

SALES
- Leads: pipeline, AI scoring, Angi email scan, call scripts, Follow Up button
- Live Call Mode: 9 situation buttons, AI coaching, transcript, back button
- Proposals: Sent/Viewed/Signed/Approved pipeline

FINANCIAL
- Estimates: line items, markup, AI helper, Preview/Send/Recall/Delete
- Change Orders: lifecycle, AI draft, voice, markup calc, Preview/Send/Recall
- Purchase Orders: line items, AI materials, budget guard
- Invoices: AR, AI suggest amount, mark paid, Remind button per row
- Bills/AP: vendor bills, AI verify, dispute, pay bill
- Budget: real-time cost vs budget, Cash Flow and Weekly Summary buttons
- Lien Waivers: AI generate button

PROJECT MANAGEMENT
- Schedule: phases, AI generate, Gantt-style bars
- Daily Logs: voice, AI Process and Auto-CO button, auto-drafts COs from scope
- Punch List: AI generates, priority levels
- RFIs: log, AI draft, status
- Photo Log: upload, AI analysis
- Plans: PDF upload, AI takeoff

BIDDING AND SUBS
- Bidding: packages, AI ranking, voice bid
- Subcontractors: W9/COI status shown, auto-request on add
- Selections: AI suggest, status cycling
- Specifications: AI generate, voice
- Warranty: AI analysis (covered/not/responsible)

INTELLIGENCE
- Gatekeeper: ALL AI actions here, Approve/Reject/Delegate, Remind/Resend/Snooze on reminders
- Reports: KPI, AI Weekly Summary, Cash Flow buttons
- Bug Tracker: auto-catches errors, manual reporting

DOCUMENT LIFECYCLE
Save, Preview, Send, E-Sign (built-in, no DocuSign), Recall, Delete
- Client gets URL, signs with finger or mouse on canvas
- Signature saved as image to record
- Feishy notified in Gatekeeper
- Reminders auto-fire at Day 3/7/14 if not signed/paid

REMINDER SYSTEM (auto on load)
Leads: Day 1, 3, 5, 7, 14
Estimates: Day 3, 7, 14 if not signed
Change Orders: Day 2, 5, 10 if not signed
Invoices: Day 3, 7, 14, 21 if unpaid
All appear in Gatekeeper with Remind Now / Resend / Snooze

AI AUTOMATION (NO BUTTON PRESS NEEDED)
- New sub: W9+COI drafted, Gatekeeper
- New lead: AI scores + call script generated
- New job: Onboarding checklist in GK
- CO/PO saved: Budget guard fires
- App opens: Overdue scan + Reminder engine
- Daily log: AI structures, detects scope, auto-drafts CO
- Photo uploaded: AI analysis, issues to GK
- JS error: Auto-logged to bug tracker
- Every transaction: aiLogTransaction

LIVE CALL MODE
- Opens from any lead
- Script auto-generates if missing
- Mic permission checked first
- 9 situations: Price/Deposit/Bids/NotReady/Timeline/Credentials/Permit/Scope/Ready
- 50+ trigger phrases auto-detect
- Back button to lead

STRATEGIC VISION -- 2080 AI ARCHITECTURE (June 21 Review)

Three Missing Layers:
1. Memory Layer -- closed jobs teach future jobs
2. Reasoning Layer -- AI runs continuously, not only when asked
3. Advisory Layer -- ranked priorities surfaced, not raw data

Top 5 Evolution Priorities:
1. Business Brain -- continuously running AI with full business model
2. Organizational Memory -- institutional knowledge from every job
3. Predictive Job Profitability -- live final profit prediction
4. Client Intelligence Profile -- behavior, payment, scope patterns
5. Daily Briefing -- 3 things that matter every morning

Core Insight:
Corestone must become a business partner that knows more about Corestone
than any human employee. Not software. A partner that compounds knowledge
from every job, every client, every mistake -- every single day.

25 Ranked Ideas (from architecture review):
1. The Business Brain
2. Predictive Job Profitability
3. Organizational Memory
4. Client Intelligence Profile
5. Sub Performance Intelligence
6. Scope Creep Early Warning
7. Cash Flow Intelligence (CFO-level)
8. Competitive Intelligence
9. Schedule Intelligence (live prediction)
10. Estimation Engine (from history)
11. Collections Intelligence
12. Job Risk Score per Job
13. Photo Intelligence
14. Opportunity Detection
15. Contract Intelligence
16. Pattern Recognition Engine
17. Predictive Sub Availability
18. Autonomous Daily Briefing
19. The Advisor Conversation
20. Client Sentiment Tracking
21. Permit Intelligence
22. Material Price Intelligence
23. Learning Proposal
24. Warranty Pattern Intelligence
25. Business Health Score

CREDENTIALS
- GitHub: feishy-hub/leadflow-corestone
- Vercel: leadflow-corestone.vercel.app
- Anthropic API key: sk-ant-api03... (in Vercel env vars)
- n8n: corestone-n8n.onrender.com (planned)
- QBO: Advanced plan (deferred -- 30 day parallel test first)
- Google Maps API: needed for address autocomplete (not yet set up)
- DocuSign: NOT needed -- e-signature built into app

NEXT PRIORITIES
1. Gmail integration (OAuth credentials exist)
2. Address autocomplete (needs Google Maps API key -- free)
3. QBO sync (after 30 days parallel)
4. Mobile PWA -- Add to Home Screen
5. Business Brain -- continuously running AI
6. Organizational Memory
7. Client Intelligence Profiles
8. n8n automation workflows
