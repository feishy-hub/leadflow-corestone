# CORESTONE OS — UI/UX DETAIL ADDENDUM
**Knowledge Transfer Package — Document 16**
**Version 1.0 — July 15, 2026**

**What this is and isn't:** `CORESTONE_COMPLETE_MASTER.md` (OS #7, June 25 — 1,125 lines, "Everything. Every session. Every detail. Nothing lost.") contains granular UI/UX specification well beyond what made it into Volumes 0–5. This addendum captures the most valuable specifics found in a **sampling pass through roughly the first third of that document** (Modules 1–8 of what appears to be a 30-module walkthrough) — it is not a claim of having fully mined all 1,125 lines. That remaining work is named honestly at the end of this document rather than silently skipped.

**Dating caution:** this source document is dated June 25 — three weeks before the Emergency Live-QA session that found major navigation broken. Treat everything below as **documented design intent circa OS #7**, cross-referenced against more recent sources where possible, not as confirmed current behavior.

---

## Live Call Mode — Full Screen Layout (enriches V1.03)

- **Top bar:** client name, job type, timer, phone link, Back, "End + AI Report" button
- **Checklist bar** (6 items, turn green automatically via keyword detection, no AI credits spent): Cost-Plus, $5k Deposit, Permits, Timeline, Budget, Next Step
- **Keyword detection specifics:** Cost-Plus → "cost plus"/"20%"/"transparent"/"every invoice"; Deposit → "5000"/"deposit"/"applies toward"; Permits → "permit"/"we handle"/"inspections"; Timeline → "start"/"months"/"spring"/"fall"; Budget → "budget"/"price"/"square foot"; Next Step → "send you"/"proposal"/"schedule"
- **Left panel (script):** split by paragraph, sections = Opening, Discovery, Company Pitch, $5k Deposit, Soft Close; tap-to-expand, NEXT ▶ to advance
- **Right panel (AI feed, updates every 5 seconds):** main suggestion card (green), intelligence card (permit flags/calculator/client info), alert card (red, appears only when something needs attention), commitment log (amber, builds silently)
- **8 situation buttons, full list:** Too expensive / About $5k deposit / Getting other bids / Not ready yet / When can you start / How does it work / Want references / Ready to go!
- **Explicitly documented as discussed-but-not-built (as of OS #7):** auto-tapping situation buttons without manual input, live reference images during the call, Google Maps property intelligence, script auto-advance, "drift detection" (e.g., "you've been talking 4 minutes without covering the deposit")

## Live Cost Calculator (enriches V1.03/V1.04)

Triggered when a client mentions square footage during a call — instant three-tier estimate:
- Standard: $200/sqft
- Mid-grade: $250/sqft
- Premium: $300/sqft
Updates live as upgrades are mentioned. **This specific pricing structure was not previously captured anywhere in Volumes 0–5** and is a real, concrete business input worth preserving exactly.

## Permit Intelligence — Full Field List (enriches V1.21)

On address detection: county (Ulster/Sullivan/Dutchess), wetland zones, Army Corps requirements, septic vs. municipal sewer, typical permit timeline for that specific municipality, setback requirements, flood zone flags. This is considerably more specific than what V1.21 previously documented — worth treating this list as the target spec for that feature's eventual full build.

## Commitment Logging (enriches V1.04)

Specific worked examples of how commitments should be captured automatically from call language:
- "You'll send them a proposal by Friday" → task with due date
- "They'll send you the survey" → pending item on their file
- "Ballpark $350k" → attaches to estimate
- "Start in spring" → locks into schedule
AI is meant to remind before anything is due — this is the concrete design intent behind the still-broken callIntel persistence gap (V1.07); it illustrates exactly what's being lost when only 4 of 12 fields save.

## Job Profitability Predictor (new — not previously in the Feature Inventory)

Tapped from a job card (📊 icon): shows contract value, costs to date, current margin %, then AI predicts final margin %, final profit $, confidence %, a status (On Track / At Risk / In Trouble), risk factors, opportunities, and a 2-sentence recommendation. **This is a genuinely distinct feature from the Budget vs. Actual tracking already documented as V2.08** — it's predictive/forward-looking rather than a current-state comparison. Recommended as a new Feature Inventory entry (would be V2.12) in any future revision of that document — flagged here rather than silently added, consistent with the package's own rule about not silently modifying a document marked complete.

## Change Order — Full Creation Method List (enriches V2.05/V2.06)

Five distinct creation paths documented: manual entry, daily log AI detection, Zoom transcript, voice dictation, photo evidence. The Feature Inventory's V2.05 entry only explicitly covers "calls/logs/messages" — voice dictation and photo-evidence-triggered COs are additional paths worth preserving.

## Gatekeeper — Full List of What Routes Through It (enriches V0.05)

Beyond the general principle, the specific enumerated list: post-call AI reports, daily log CO detections, lead follow-up reminders (Day 1/3/5/7/14), estimate follow-ups (Day 3/7/14 if unsigned), CO reminders (Day 2/5/10), invoice reminders (Day 3/7/14/21 if unpaid), bid scope from call notes, budget overrun alerts, bill approval/rejection, sub COI expiry alerts, any AI-generated document. This is a much more concrete list than "every AI action" — useful as an actual test-case checklist for Executive Testing.

---

## Honest Accounting of What Remains Unmined

This addendum covers Modules 1–8 of `CORESTONE_COMPLETE_MASTER.md` (Dashboard, Sales/Leads, Live Call Mode, Call Intelligence, Gatekeeper, Jobs, Estimates, Change Orders). **Modules 9 through approximately 30 — covering Bidding, Scheduling, Daily Logs in more depth, Punch List, Selections, Specs, RFIs, Warranty, Financial modules, Subcontractors, Reports, and others — were not reviewed in this pass.** Given this document is already three weeks stale relative to the project's more recent, more rigorously live-tested sources, the marginal value of a full line-by-line mining pass is real but lower than it would have been for a current document — recommended as follow-up work if Feishy wants maximum detail preserved, but not treated here as a blocking gap in the Knowledge Transfer Package's core completeness, since the Feature Inventory, Gap Analysis, and Volumes 0–5 already capture the functional reality (what's built, what's not) independent of this document's additional UI flavor text.
