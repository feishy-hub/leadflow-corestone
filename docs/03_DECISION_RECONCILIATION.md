# CORESTONE OS — DECISION & CONVERSATION RECONCILIATION
**Knowledge Transfer Package — Foundation Document 3 of 6+ (started early, out of strict production order, because findings surfaced while building the Master Context Document — see note below)**

**Purpose:** This document is the permanent, growing record of every place where the project's own history contradicts itself — across documents, across sessions, or between what was believed and what live testing later proved. Per Feishy's explicit rule (July 15, 2026):

> "Do not silently overwrite or replace documents... Preserve the original document. Clearly identify it as superseded. Explain why it became outdated. Reference the later evidence that replaced it. The historical record is valuable and should remain intact."

Every entry below follows the same format: **What was originally believed → What later evidence found → Why the understanding changed → Which version is now current → Status.**

**Note on sequencing:** Feishy's approved order places this document after the Master Feature Inventory. Two entries below (DR-001, DR-002) were found while cross-checking source for the Master Context Document and are recorded here immediately, per Feishy's own instruction not to let discovered contradictions go undocumented. This document will continue to grow through the formal reconciliation pass that comes after the Feature Inventory is complete.

---

## DR-001 — M1 Completion Status: 95% vs. 62%

**What was originally believed:** `CORESTONE_ROADMAP.md` (last updated "OS #8 Phase Completion," July 2, 2026) states Milestone M1 (Lead → Proposal → Job) is **95% complete** and "Ready for Executive Testing," with only two remaining items (an end-to-end test, and callIntel field persistence).

**What later evidence found:** A session titled "Emergency Live-QA + Takeoff Build-Out" (July 10, 2026) — begun specifically because Feishy rejected code-inspection-based readiness claims and demanded real, live click-through proof — found the application **completely non-navigable in production**. The entire navigation layer (`goTab`, `toggleGroup`, `showQuickAdd`, `updateNotifBadge`) and 140+ other call sites pointed at functions that did not exist anywhere in the file. Several core forms (New Lead, New Estimate, Punch List, RFI, Selections, Specifications, Warranty Claim, Lien Waiver, Photo Upload) did not exist at all. The tax/fee calculation engine (`calcEstTotal`) was called in 5 places and defined nowhere. `CORESTONE_SUBSYSTEM_STATUS.md`, updated the same day, corrects M1 to **62% internally QA'd**.

**Why the understanding changed:** The 95% figure was derived from reading source code and assuming referenced functions existed and worked. The 62% figure came from actually operating the live application end to end and finding that a large fraction of what appeared "done" in code was non-functional in the browser.

**Which version is current:** **62%, per the July 10 Emergency Live-QA session.** This is treated as authoritative for the Knowledge Transfer Package because it is (a) more recent and (b) verified through live testing rather than static code review, which the project's own most recent working session explicitly demonstrated is an unreliable method for this codebase.

**Status:** ✅ Resolved for Knowledge Transfer purposes, per Feishy's approval (July 15, 2026). `CORESTONE_ROADMAP.md` itself has **not** been edited or overwritten — it remains in the repo as the historical OS #8 record. A corrective update to `CORESTONE_ROADMAP.md` reflecting the July 10 findings is recommended as a follow-up action, separate from this knowledge-transfer document, since it is the file the project designates as the mandatory first-read status check and is currently the most out-of-date document in the repo relative to its own stated purpose.

---

## DR-002 — AI Employee Count: "10" vs. Named Roster of 6, 7, or 8

**What was originally believed / stated:** `CORESTONE_MASTER.md` states in two places: *"10 AI Employees Defined and Operational"* and, in the Executive Readiness Report table, assigns individual departments to specific named AI Employees. `CORESTONE_RELEASES.md` independently repeats *"10 AI Employees"* in its OS #9/#10 release summary.

**What the evidence actually shows, traced across sessions:**

| Source | Session/Date | Roles named | Count claimed |
|---|---|---|---|
| OS #10 conversation — "Decision 2: The AI Employee Framework" (a proposal drafted *for ChatGPT's review*, not yet confirmed approved) | July 6 | AI Estimator, AI Permit Coordinator, AI Purchasing Manager, AI Scheduler, AI Controller, AI Superintendent, AI Change Order Manager, AI Customer Service | 8 named, no explicit count stated |
| OS #10 conversation — later in the same session, summary language | July 6 | AI Estimator, AI Superintendent, AI Controller, AI CO Manager, AI Customer Service, AI Purchasing Manager | 6 named, but labeled **"10 AI Employees"** |
| `CORESTONE_MASTER.md`, top-of-file summary | Carried forward from OS #9/10 | Same 6 as above | Repeats **"10"** |
| `CORESTONE_MASTER.md`, Executive Readiness Report table (same file, different section) | Same file | Adds **AI Scheduler** as a 7th, assigned to the Schedule department | No count stated here |
| `CORESTONE_RELEASES.md` | Carried forward | Same 6 | Repeats **"10"** |
| OS #11 conversation — Master Feature Inventory, entry V0.04 "AI Employees Model" (the most recent, most deliberate reconciliation attempt to date) | July 14 | Estimator, Superintendent, Controller, CO Manager, Customer Service, Purchasing Manager, Scheduler | Explicitly labeled **"All 7"** |

**Why the understanding is inconsistent:** No document anywhere in the project — conversation or repo file — ever names 10 distinct AI Employees. The highest number ever actually named is 8 (the OS #10 proposal, which included **AI Permit Coordinator**, a role that does not appear again in any later document or conversation). The "10" figure appears to have entered the record as an uncorrected error at some point in OS #10 and was then copied forward verbatim into `CORESTONE_MASTER.md` and `CORESTONE_RELEASES.md` without anyone re-counting the actual list beside it. Separately, **AI Scheduler** is used operationally (assigned to a real department in the Readiness Report) in the same document that omits it from the "AI Employees" bullet list two sections above — an internal inconsistency within a single file, not just across files.

**Which version is most defensible right now:** **7 named AI Employees** (Estimator, Superintendent, Controller, CO Manager, Customer Service, Purchasing Manager, Scheduler), per the OS #11 Master Feature Inventory's explicit "All 7" — the most recent, most deliberate, and only place in the project's history where the count and the name list actually agree with each other.

**Status:** ✅ **Resolved by Feishy, July 15, 2026 (with ChatGPT review).** Ruling:
- **Official current AI Employee roster: 7** — AI Estimator, AI Superintendent, AI Controller, AI CO Manager, AI Customer Service, AI Purchasing Manager, AI Scheduler.
- **AI Permit Coordinator** is documented as: proposed during OS #10; never formally approved or implemented; **not** part of the current official roster; preserved here and in Volume 0 as a historical proposal and a possible future enhancement, not as a live or pending role.
- The "10 AI Employees" language in `CORESTONE_MASTER.md` and `CORESTONE_RELEASES.md` is acknowledged as a documentation error that was never caught — no new employees were invented to justify it, and no evidence exists that 10 were ever actually defined. The two source files are left untouched (per the no-silent-overwrite rule); this entry is the permanent record of the correction for Knowledge Transfer purposes.

---

## DR-003 — CS_VERSION: Documentation Claims 2.10.4, Live Code Shows 2.7

**What was originally believed:** `CORESTONE_MASTER.md` states plainly, twice: *"Last updated: Emergency Live-QA & Takeoff Build-Out Session — CS v2.10.4 — July 10, 2026"* and *"Current version: CS v2.10.4 — supersedes the CS v2.6 status above, which is now stale."* This was carried into `01_MASTER_CONTEXT.md` v1.1 as the current version.

**What later evidence found:** A direct scan of the live `index.html` on the GitHub `main` branch (pulled fresh, July 15, 2026, via `raw.githubusercontent.com` — not from documentation, not from memory) shows:
```
CS_VERSION = '2.7'
```
Despite this, the same live-source scan **did** confirm the presence of the specific capabilities the "v2.10.4" narrative describes — the full Visual Plan Markup & Takeoff Tool (85 `pmt*` functions), the Executive Issue Management System (19 `eis*` functions), the Enterprise UX Engine (19 `ux*` functions), the Gatekeeper, and the Business Brain functions all genuinely exist in the current live file. So this is not a case where the described work never happened — the work is real and present. It's specifically the version-number label that doesn't match.

**Why the understanding changed:** The documentation's version number is being tracked and incremented independently of the actual `CS_VERSION` constant in the code. Either the constant itself was never bumped past 2.7 despite substantial feature work landing on top of it, or a later edit reset/overwrote it — plausibly related to the known risk (documented in the project's own tooling notes) that concurrent sessions working on the same repo risk conflicting edits.

**Which version is current:** For the Knowledge Transfer Package, feature presence is being verified by direct function-level source inspection (as done for the Master Feature Inventory), not by trusting the `CS_VERSION` string. The string itself should not be relied on as an accurate freshness indicator until this is resolved.

**Status:** 🟡 **Requires owner review.** This doesn't block the Knowledge Transfer Package — the actual capability inventory (Master Feature Inventory) was built from real function presence, not from the version string — but it's worth your attention because it means version-number claims elsewhere in the documentation set may also be unreliable, and because a rebuild in Cursor should not use `CS_VERSION` as a trustworthy checkpoint marker without first understanding why it fell out of sync.

---

## DR-004 — Status Table Staleness Within `CORESTONE_SUBSYSTEM_STATUS.md` Itself

**What was originally stated:** The "AI & Intelligence" module table in `CORESTONE_SUBSYSTEM_STATUS.md` lists **AI Photo Analysis: ❌ NOT BUILT** and **Notification Center: ❌ NOT BUILT ("Toast-only right now")**.

**What later evidence in the same document found:** Further down the same file, the "corrected this session" section (July 10, Emergency Live-QA) states plainly that photo/video AI analysis existed and had a real bug fixed: *"Was silently auto-escalating; now shows a review checklist first, only acts on what's approved."* A live source-code scan independently confirms an `aiAnalyzePhoto` function and six distinct notification-related functions exist. So both features are real, at least partially — the module tables at the top of the document were not updated to reflect the session's own findings lower in the same file.

**Why the understanding changed:** Same root cause as DR-001 — a status table not being refreshed at the same time as the narrative session notes below it, within a single document this time rather than across two documents.

**Which version is current:** Treat AI Photo Analysis and the Notification Center as **Partially Implemented**, not Not Built — matching how they're now recorded in `02_MASTER_FEATURE_INVENTORY.md` (V3.08, V0.11).

**Status:** ✅ Resolved for Knowledge Transfer purposes — noted here, not silently edited into the source file. Recommended follow-up (separate from this package): a full internal-consistency pass on `CORESTONE_SUBSYSTEM_STATUS.md`'s own tables the next time it's updated.

---

## DR-005 — Open Question Cross-Reference Drift, and OQ-002's Apparent (Undocumented) Resolution

**Finding A — numbering drift:** `CORESTONE_SUBSYSTEM_STATUS.md`'s Call Intelligence row cites "OQ-011 open" as the tracking item for callIntel persistence (only 4 of 12 fields saved). But `CORESTONE_OPEN.md`'s actual OQ-011 is titled "Supabase migration timing" — an unrelated topic. Either the callIntel issue was originally tracked under a different OQ number that was later renumbered without updating the cross-reference in Subsystem Status, or the citation was simply mistyped. **Status: Needs owner review** — not resolved, since it's not clear which OQ (if any) currently tracks callIntel persistence. The underlying issue itself (V1.07 in the Feature Inventory) is real regardless of which ID tracks it.

**Finding B — OQ-002 appears resolved but isn't marked closed:** `CORESTONE_OPEN.md`'s OQ-002 states, as of its writing: *"Gatekeeper is non-functional... Every AI approval for the past several sessions changed a status field and did nothing else. Every 'approved' Gatekeeper action is a lie."* It's marked "Open — Fix B-001 is first action of Phase 1 foundation." However, `CORESTONE_REQUIREMENTS.md`'s REQ-001 ("Fix Gatekeeper execution") is marked Approved, and the much more recent `CORESTONE_SUBSYSTEM_STATUS.md` (July 10) rates the Gatekeeper Queue and Gatekeeper Executor both ✅ BUILT, with `gkExecuteAction` handling 15+ action types. This is strong evidence the fix landed — but `CORESTONE_OPEN.md` itself was not updated to close OQ-002. **Status: Likely resolved, flagged rather than assumed** — recommend Feishy or a future session explicitly close OQ-002 in `CORESTONE_OPEN.md` once confirmed, rather than this document silently declaring it closed.

**Pattern note:** This is now the fifth instance (DR-001 through DR-005) of the same underlying issue — status/tracking documents not being updated at the same time as the narrative session notes that supersede them. This pattern itself is worth Feishy's attention as a process matter, independent of any single instance: see the Master Gap Analysis's "What This Means for the Rebuild" section.

---

## DR-006 — Blueprint's 4-Phase Map vs. Subsystem Status's 3-Phase Map (Minor)

**Finding:** `CORESTONE_BLUEPRINT.md` (OS #7/#8) specifies four implementation phases, ending with a Phase 4 ("Business Brain trained → predictive estimating, autonomous scheduling, AI-generated proposals, sub performance AI"). `CORESTONE_SUBSYSTEM_STATUS.md` (July 10, more recent, and the basis for `05_MASTER_GAP_ANALYSIS.md`) only describes three phases.

**Assessment:** Not a true contradiction — Phase 4 isn't disputed anywhere, just not repeated in the shorter, more operationally-focused July 10 document. Does not meet the bar for a full stop (no business/architecture decision needed to resolve it).

**Status:** ✅ Noted, not treated as a blocker. Full detail in `15_ARCHITECTURE_REFERENCE.md`. Recorded here specifically so Phase 4 — a real, previously-designed part of the roadmap — doesn't quietly disappear from the record.

---

## Reconciliation entries pending (to be completed during the formal Decision & Conversation Reconciliation pass, after the Master Feature Inventory)

- Full chronological pass through OS #1–#11 for additional forgotten/replaced/conflicting items beyond the two above
- Reconciliation of the Lovable-era vision documents against current architecture (explicitly superseded, but not yet catalogued item-by-item)
- Cross-check of `CORESTONE_DECISIONS.md` (DEC-001 through DEC-026) for any internal contradictions between earlier and later decisions
- Cross-check of `CORESTONE_OPEN.md` (OQ-001 through OQ-029) against what has since been resolved but not marked closed, or vice versa

*This document is permanent and cumulative. Entries are never deleted, only appended to or marked resolved.*
