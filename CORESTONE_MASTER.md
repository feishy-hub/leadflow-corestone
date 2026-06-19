# CORESTONE OS — MASTER DOCUMENT
**Last Updated:** 2026-06-19
**Live URL:** https://leadflow-corestone.vercel.app
**Repo:** feishy-hub/leadflow-corestone
**Stack:** Single HTML file · Vercel auto-deploy · Anthropic API via /api/claude proxy

---

## SESSION START
Tell Claude: *"I'm Feishy, owner of Corestone Developers. Read the CORESTONE_MASTER.md file in my project files and then tell me you're ready."*

---

## PLATFORM
- Vercel (NOT Lovable, NOT Base44 — both abandoned)
- GitHub repo: feishy-hub/leadflow-corestone
- Auto-deploys on every push to main (~30-45 seconds)
- API proxy: /api/claude.js (Vercel serverless)
- API key: ANTHROPIC_API_KEY in Vercel environment variables
- GitHub PAT: Classic token only (fine-grained PATs fail)
- Database: localStorage (mirrors Supabase-style API)

---

## CRITICAL RULES
1. Push directly to GitHub — never ask Feishy to do it manually
2. Classic PAT only — fine-grained always fail with 403
3. All changes in ONE push per session
4. Run Node.js syntax check before EVERY push
5. Nothing removed — only additions and fixes
6. Every form has mic button (micFillField)
7. Every action shows nextStep modal — nothing disappears silently

---

## NAVIGATION RULE (MOST IMPORTANT)
Every single action in the app shows a nextStep() modal after it completes.
The modal is full-screen centered, stays until user picks an option or dismisses.
20/20 actions verified — all lead somewhere. Never a silent disappear.

---

## FILE STATS
- Size: ~472,000 chars
- Functions: ~270
- Pages: 24 active (7 dead V1 versions removed)
- Syntax: Verified clean by Node.js checker

---

## ALL MODULES (NO STUBS)

### SALES
- Leads — pipeline, AI scoring, email scan, call scripts
- Live Call Mode — real-time AI coaching, 9 situation buttons, transcript
- Proposals — Sent/Viewed/Signed/Approved pipeline

### FINANCIAL
- Estimates — line items, markup, AI helper
- Change Orders — full lifecycle, AI draft, voice, markup calc
- Purchase Orders — line items, AI materials, budget guard
- Invoices — AR, progress billing, AI suggest, mark paid
- Bills/AP — vendor bills, AI verify, dispute flow
- Budget — real-time cost vs budget per job
- Lien Waivers — auto-generation after payment

### PROJECT MANAGEMENT
- Schedule — phases, AI generate, progress bars
- Daily Logs — voice recording, AI structures log
- Punch List — AI generates, priority levels
- RFIs — log, AI draft, status tracking
- Photo Log — upload, AI analysis
- Change Orders — CO log per job modal

### CLIENT & SUBS
- Subcontractors — W9/COI status shown, auto-request on add
- Messages — client/sub threads, AI draft
- Selections — by category, AI suggest, status cycling
- Specifications — AI generate, voice input
- Warranty — claims, AI analysis, responsibility

### INTELLIGENCE
- Gatekeeper — all AI actions queue, Approve/Reject/Delegate
- Reports — KPI dashboard
- AI Weekly Summary — business health
- AI Cash Flow Forecast — 30-day projection
- AI Risk Scorer — per job
- Generate Contract — full construction contract

---

## AI AUTOMATION (RUNS AUTOMATICALLY)
- New sub → W9 + COI request drafted → Gatekeeper
- New lead → AI scores + generates call script
- New job → Onboarding checklist in Gatekeeper
- New CO → Budget guard check
- New PO → Budget guard check
- Invoice overdue → Alert + collection draft
- Payment received → Lien waiver flag
- App opens → Scan all invoices for overdue
- Daily log voice → AI structures and flags issues
- CO approved → Budget + schedule update
- Every transaction → aiLogTransaction → daily log + Gatekeeper

---

## NAVIGATION FLOWS (ALL 20 VERIFIED)
Save lead → Call now / Follow-up email / View leads
Save job → Build estimate / Send bids / Set schedule
Approve CO → Create invoice / Notify client / Check budget
Save CO → Send to client / Approve now / Check budget
Create invoice → Send to client / View invoices / Check budget
Mark paid → Release lien waiver / Request review / Job report
Save PO → Check budget / View POs / Add another
Save bill → Check cash flow / View bills
Pay bill → Lien waiver / View bills / Cash flow
Save sub → Assign to job / Create PO / View subs
Save selection → Add another / View all / Send to client
Save spec → Add another / View all / Send to sub
Save warranty → Call client / Assign to sub / View claims
Save punch item → Add another / Send to sub / View list
Save RFI → Wait for response / Add another / Back to job
Save daily log → Add photos / Send client update / Log issue
Save bid → Wait for bids / AI rank / View packages
Approve GK item → Review more / Dashboard
Delete record → Auto-refresh current page
End call → Back to lead detail

---

## TWO-MODE WORK SYSTEM
**Big work/planning:** This chat (claude.ai Corestone Project)
- Start: "I'm Feishy, read CORESTONE_MASTER.md and tell me you're ready"

**Bug fixes:** Claude Code (black CMD window)
- Open: Windows+R → cmd → claude
- Say: "My app is at github.com/feishy-hub/leadflow-corestone, file is index.html. Bug: [describe]. Fix and push to GitHub."

---

## CREDENTIALS
- GitHub: feishy-hub/leadflow-corestone
- Vercel: leadflow-corestone.vercel.app
- API key: starts with sk-ant-api03... (in Vercel env vars)
- n8n: corestone-n8n.onrender.com
- QBO: Advanced plan (integration deferred — 30 day parallel test first)
