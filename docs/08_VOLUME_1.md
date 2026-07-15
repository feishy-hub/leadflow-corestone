# CORESTONE OS — VOLUME 1: LEAD → ESTIMATING → CONTRACT
**Knowledge Transfer Package — Document 8 (Volume 1 of 6)**
**Version 1.0 — July 15, 2026**

**Template and honesty rule:** same as Volume 0 — see `07_VOLUME_0.md` for the full 19-field definition. Unbuilt/unverified fields marked N/A rather than invented.

---

## V1.01 — Multi-Source Lead Intake
**Purpose:** Capture every lead regardless of source (Angi, Google, Houzz, referral, website, phone, manual) into one pipeline, since a lead lost to inconsistent intake is a lead lost to a competitor.
**Where found:** `pgSales`, lead creation form.
**Triggers:** Manual entry; Angi email paste; screenshot import (per REQ-007). Automatic email intake depends on V0.14/V0.24 (not fully wired).
**Auto-loaded data:** Standard lead fields — confirmed extensive (prior sessions reference 15 fields).
**AI understanding:** `generateLeadAI` runs on save, producing script/objections/follow-up/next action.
**Controls:** Full lead form; duplicate-click guard confirmed built.
**Calculations/rules:** Stage enforcement (new → contacted → proposal_sent → negotiating → signed → lost).
**AI decisions:** Lead scoring (V1.02).
**Automations:** AI generation fires on save.
**Records touched:** Lead record.
**Modules/permissions:** Sales.
**Edge cases:** Financing/competing-bids dropdowns confirmed pre-filled incorrectly (minor, noted in Subsystem Status).
**Role views:** Feishy.
**Lifecycle:** ✅ BUILT, confirmed live-tested for the form itself; pipeline card quick-actions still missing.
**AI Knowledge:** N/A beyond generation above.
**Failure Recovery:** Not independently confirmed.
**System Interactions:** Feeds V1.02–V1.07 (call/scoring/follow-up), eventually V1.08 (survey) and V1.09 (estimate).
**Example Scenario:** An Angi "New Lead Alert" is pasted in; a lead record is created, staged as "new," and AI generates a call script within the same action.

## V1.02 — AI Lead Scoring
**Purpose:** Prioritize which leads to call first — hot leads called within minutes convert at meaningfully higher rates than those called an hour later.
**Where found:** Sales pipeline cards; hot-lead filtering logic (`hotLeads` per stage).
**Triggers:** Post-call analysis, or initial lead data.
**AI decisions:** Hot/warm/cold classification, interest score (1–10 confirmed in prompt structure).
**Automations:** Feeds pipeline sort/filter.
**Edge cases:** Speed-to-contact is **not tracked** — flagged in OS #6 audit as missing (no timer from lead creation to first call attempt).
**Lifecycle:** ✅ BUILT.
**System Interactions:** V1.01, V1.05.
**Example Scenario:** A lead mentioning "ready to start next month" scores hot; the pipeline surfaces it above older, cooler leads.
*(Remaining fields as Volume 0 pattern — not independently expanded further this pass.)*

## V1.03 — Live Call Mode
**Purpose:** Real-time coaching during sales calls so Feishy doesn't need to remember every talking point or objection response under pressure.
**Where found:** Call Mode overlay, triggered from a lead's phone number or a dedicated button.
**Triggers:** Tapping the phone number or Live Call Mode button on a lead in "new" or "contacted" stage.
**Auto-loaded data:** `callIntel` object initialized with lead data; script loads from `ai_call_script`.
**Controls:** 8 real-time situation buttons (confirmed: "too expensive," "about the deposit," "getting other bids," and 5 others not independently itemized this pass).
**Automations:** `callIntel.finish_estimates` calculated from square footage immediately; `buildPermitIntel()` runs from address/notes.
**Edge cases:** No phone number → call button renders as inert text. AI script generation failure → shows "Preparing..." with no fallback script. Mic permission denied → toast error, call cannot start.
**Failure Recovery:** Confirmed gaps — no fallback script, no call-attempt-number logging (was this the 1st or 5th attempt?), no voicemail-specific script.
**Lifecycle:** ⚠️ PARTIAL.
**System Interactions:** V1.04 (transcript), V1.05 (analysis), V1.07 (persistence — the confirmed weak link).
**Example Scenario:** Feishy opens Call Mode for a hot lead; the script loads, and mid-call he taps "getting other bids" to surface the AI's suggested response to that specific objection.

## V1.04 — Call Transcript Capture
**Purpose:** Capture what was actually said, both for real-time AI coaching and post-call analysis, without Feishy needing to take notes while talking.
**Where found:** Inside Live Call Mode.
**Triggers:** "Start Recording" tap.
**Requires:** Chrome or Edge browser (Web Speech API dependency — will not work in Safari/Firefox, a real platform constraint worth carrying into the rebuild).
**Automations:** `analyzeCallLive()` fires every 10 seconds; `autoAnalyzeTranscript()` on every new chunk; `detectCommitments()` every 6 chunks.
**Edge cases:** Speech recognition errors trigger auto-restart. AI timeout shows "AI unavailable — use your script" instead of blocking the call. Internet drop mid-call: AI calls fail but transcript capture continues (no data lost on the transcript side).
**Failure Recovery:** Confirmed gap — no speaker diarization (transcript doesn't distinguish Feishy's words from the client's), no talk-ratio metric.
**Lifecycle:** ⚠️ PARTIAL — real, working, with known specific gaps rather than vague uncertainty.
**System Interactions:** V1.03, V1.05, V1.07.
**Example Scenario:** During a call, the transcript accumulates in `liveWords[]`; every 10 seconds the AI re-reads it and updates its suggestion panel.

## V1.05 — Post-Call AI Analysis
**Purpose:** Turn a raw transcript into structured, usable sales intelligence — sentiment, objections, agreements, and a concrete next-action plan — instead of leaving Feishy to remember and re-type it all afterward.
**AI decisions:** Sentiment (hot/warm/cold), interest score + reason, objections raised, agreements made, what each side must send, follow-up sequence (day-by-day), draft follow-up email, next pipeline stage, priority.
**Automations:** Structured JSON extraction confirmed via a detailed prompt (the largest single AI prompt found in the source scan).
**Records touched:** Should populate 12 structured data fields on the lead — see V1.07 for the confirmed gap.
**Lifecycle:** ✅ Analysis logic BUILT; ❌ persistence of the output is the confirmed weak link.
**System Interactions:** V1.06 (follow-up sequence), V1.07 (persistence).
**Example Scenario:** After a call, AI concludes: sentiment warm, biggest objection was price, next action is to send a detailed scope breakdown within 24 hours — but per V1.07, only a fraction of this structured output currently survives being saved to the lead record.

## V1.06 — 30-Day Follow-Up Sequence
**Purpose:** Make sure no lead goes cold from simple neglect — a day-by-day follow-up plan drafted automatically after every call.
**AI decisions:** A day-by-day plan (Day 1, 3, 7, 14 confirmed pattern) with action + detail per day, plus a draft follow-up email.
**Status: ⚠️ Partially Implemented — corrected down from "Implemented" in the original Requirements doc.** The AI reliably *generates* this plan as text (confirmed in live source). What's **not confirmed** is any automated mechanism that actually fires reminders on the stated schedule — see V6.06. This is a materially important distinction: a beautifully-written follow-up plan that nobody is reminded to execute has limited value.
**System Interactions:** V1.05, V6.06.
**Example Scenario:** AI drafts "Day 3: second call, focus on addressing the budget objection" — but confirming that Day 3 actually produces a reminder for Feishy requires V6.06 to exist, which it currently does not.

## V1.07 — callIntel Persistence
**Purpose:** Preserve the rich, structured data captured during and after a call — this is infrastructure, not a feature with its own UI.
**Status: ❌ Confirmed broken — "only 4 of 12 fields saved" per Subsystem Status.** This is one of the most consequential single gaps in the whole system: real-time AI coaching and post-call analysis both work, but most of what they produce evaporates.
**Priority:** Critical — flagged this way specifically because so much *other* work (V1.03–V1.06) depends on this one persistence layer actually working.
**System Interactions:** V1.03–V1.06 all write to this; none of it matters if this doesn't hold.
**Recommendation for rebuild:** this is a strong candidate for the very first thing to get right in a clean architecture — a properly-typed, properly-persisted call record, built once, correctly.

## V1.08 — Client Survey (Post-Deposit)
**Purpose:** Once a client commits with a deposit, get detailed project requirements from them directly, in their own words, rather than relying entirely on what was captured during sales calls.
**Triggers (per design):** $5,000 deposit confirmed received.
**Status: Needs Owner Review** — REQ-013 through REQ-018 (survey trigger, dynamic questions, Magic Link delivery, Requirements propagation, completion notification, partial save) are all still marked "Captured" (not yet built) in the Requirements doc, and no independent evidence of a built survey system was found in the live source scan this pass.
**System Interactions:** Would feed V2.11 (Requirements Engine) directly per REQ-016.
**Example Scenario (as designed, not yet confirmed live):** Deposit clears → survey auto-sent via Magic Link → client answers job-type-specific questions → each answer creates or updates a Requirements record.

## V1.09 — Estimate Builder
**Purpose:** The core pricing tool — line-item construction estimating that becomes the financial backbone of the proposal and, later, the budget.
**Where found:** `pgEstimates`.
**Status:** ⚠️ PARTIAL — list renders; full line-item CRUD (add/edit/delete) needs verification per Subsystem Status.
**Calculations/rules:** Tax (materials only, 8%, BR-004) and 20% contractor fee (BR-001) both confirmed to have real logic, both flagged for re-verification after the tax engine was found completely missing and rebuilt in the July 10 session.
**System Interactions:** V1.10 (AI help), V1.13 (Takeoff push), V1.16 (Proposal generation).
**Example Scenario:** An estimator builds a line-item estimate for a kitchen remodel; the system calculates materials tax and the 20% fee automatically as lines are added.

## V1.10 — AI Estimate Helper
**Purpose:** Per-line-item cost guidance so an estimator isn't pricing purely from memory or gut feel.
**AI decisions:** Cost tips/benchmarking per line (`aiEstimateHelper`).
**System Interactions:** V1.09.
**Lifecycle:** Implemented, not independently live-verified this pass.

## V1.11 — Visual Plan Markup & Takeoff Tool
**Purpose:** Let Corestone read and measure architectural plans directly — competing with Procore/PlanSwift/Bluebeam-class tools — so takeoffs don't require a separate paid product.
**Where found:** `showPlanMarkupTool`, a dedicated full-screen tool (confirmed via 85 distinct `pmt*` functions — the single largest functional cluster in the entire codebase).
**Triggers:** Opening a plan from the Plans module.
**Controls (extensive, confirmed in source):** 4 scale-calibration methods; Linear/Rectangle/Polygon/Count/Wall/Perimeter/Freehand/Volume measurement tools; right-click context menu; drag-to-edit; Assemblies (`pmtApplyAssembly`, `pmtSaveNewAssembly`); Groups with color/line-width/visibility/lock; Markup/annotation layer (`pmtAddAnnotation`, stamps, callouts, text); Zoom/Ortho/Snap; Thumbnails; CSV export; Undo/History (`pmtShowHistory`).
**AI decisions:** `pmtAIAutoDetect` (room/polygon auto-detection), `pmtAskAI` (in-tool AI assist), `pmtAISuggestCountNames`.
**Automations:** Autosave (`pmtAutoSave`).
**Lifecycle:** Built almost entirely in the July 10 Emergency Live-QA + Takeoff Build-Out session. **The session's own closing note is the single most important caveat here: "Almost none of tonight's new Markup Tool surface area has been clicked by a human yet."** This is extensive, real, working code by every static measure — and simultaneously the least human-verified major feature in the whole project. Both things are true at once.
**System Interactions:** V1.12 (AI detection specifically), V1.13 (push to estimate), V1.14 (push to bids/POs), V1.15 (version compare).
**Example Scenario:** A plan PDF is uploaded; scale is calibrated; walls and rooms are measured (manually or AI-assisted); the resulting quantities push directly into a new estimate.

## V1.12 — AI Auto-Polygon Room Detection
**Purpose:** Speed up takeoffs by having AI propose room boundaries instead of requiring every wall to be traced by hand.
**Where found:** `pmtAIAutoDetect`.
**Status:** ⚠️ Partially Implemented — a real, vision-based version exists but is explicitly documented (by the project itself) as less precise than dedicated computer-vision takeoff tools like Togal.ai or Kreo. This is an honest, deliberate positioning, not a hidden weakness.
**System Interactions:** V1.11.

## V1.13 — Takeoff → Estimate Push
**Purpose:** Eliminate manually re-entering measured quantities into the estimate.
**Where found:** `pmtPushToEstimate`.
**Status:** ✅ Confirmed — "Built, verified live" per Subsystem Status; resolves REQ-002 and REQ-033.
**System Interactions:** V1.09, V1.11.

## V1.14 — Takeoff → Bids/POs Auto-Flow
**Purpose:** Once quantities are known, generate bid requests and purchase orders from the same data rather than re-deriving them.
**Where found:** `pmtGenerateSchedules` and related functions.
**Status:** Built per MASTER.md's July 10 session notes; not independently live-verified this pass.
**System Interactions:** V1.19 (bid ranking), V4.06 (Purchase Orders) — **note:** flows into POs, but POs themselves still lack the 3-stage Gatekeeper approval (V4.07) — the auto-flow producing a PO does not mean that PO bypasses the required approval chain; it should still land in Gatekeeper once V4.07 is actually built.

## V1.15 — Plan Version Compare
**Purpose:** When an architect issues revised plans, show what actually changed rather than requiring a manual side-by-side read-through.
**Status:** Built per MASTER.md, not live-tested.
**System Interactions:** V1.11.

## V1.16 — Proposals
**Purpose:** The formal, signable offer to the client — a 9-section construction agreement (scope, schedule, payment, permits, subs, changes, warranty, dispute, termination) reflecting the cost-plus 20% model.
**Where found:** `pgProposals`, `createProposalFromEstimate()`.
**Status:** ⚠️ PARTIAL — the underlying generation function exists; full 9-section render and the Magic Link client-facing view both need verification per Subsystem Status.
**System Interactions:** V1.09 (source estimate), V1.17 (signature), V1.18 (deposit rule embedded in payment terms).
**Example Scenario:** An approved estimate generates a proposal draft in one action (REQ-039, confirmed likely resolved); the client views it via Magic Link and can sign natively.

## V1.17 — Proposal E-Signature
**Purpose:** Legally-binding client sign-off without a third-party e-signature tool.
**Where found:** `signProposal`, tied into V0.10.
**Status:** Component functions confirmed present; end-to-end flow (signature → Gatekeeper item → job creation per REQ-045) not independently confirmed this pass.
**System Interactions:** V0.05 (Gatekeeper), V0.10, V2.01 (Job creation).

## V1.18 — $5,000 Deposit Rule
**Purpose:** Ensures Corestone is never doing unpaid proposal/design work — the deposit is required before any site visit or proposal preparation, and applies toward construction rather than being a separate fee.
**Status:** ✅ Implemented & Verified as a business rule (BR-003) — this is policy, consistently referenced across every session since OS #1, though the specific *enforcement mechanism* in code (does the system actually block proposal work before deposit confirmation, or is this currently just a documented policy humans follow?) was not independently re-verified this pass.
**System Interactions:** V1.08 (survey trigger), V1.16.

## V1.19 — AI Bid Ranking
**Purpose:** Compare subcontractor bids on more than just price — help Feishy make a genuinely informed award decision quickly.
**Where found:** `aiRankBid`, `aiRankBids`, `aiRankAllBids` — three related functions, worth checking for redundancy/overlap during the rebuild.
**System Interactions:** V1.14, V4.06.

## V1.20 — Magic Link Sub Bid Submission
**Purpose:** Let subcontractors submit bids without needing a full account/login.
**Status:** **Needs Owner Review** — described extensively in the original Master Specification, but no distinct function was found for this specific flow in the live source scan (Magic Link infrastructure exists for proposals/lien waivers, V0.10, but a *sub-facing bid submission* instance of it wasn't independently confirmed).
**System Interactions:** V1.19.

## V1.21 — Address / Permit Intelligence
**Purpose:** County-aware (Ulster/Sullivan/Dutchess) context that flags permit requirements/risk early, before they become schedule surprises.
**Status:** **Needs Owner Review** — referenced in OS #11 conversation and via a `buildPermitIntel()` function called during Live Call Mode (V1.03), but the depth/accuracy of that intelligence wasn't independently verified this pass.
**System Interactions:** V1.03, V0.21 (address autocomplete, still Planned), V0.22 (AI Permit Coordinator, historical).

---

## Volume 1 Completeness Note

21 of 21 Volume 1 features represented. The single most consequential finding in this volume: **V1.07 (callIntel Persistence)** is a small-sounding infrastructure gap with outsized impact — it silently undermines the value of V1.03 through V1.06, all of which work individually but whose output mostly doesn't survive. This is flagged as a top rebuild priority in the Master Gap Analysis for exactly this reason.
