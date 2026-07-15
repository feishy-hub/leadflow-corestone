# CORESTONE OS — REQUIREMENTS TRACEABILITY MATRIX
**Knowledge Transfer Package — Foundation Document 6 of 6**
**Version 1.0 — July 15, 2026**

**Purpose:** Connects every formally tracked requirement (`CORESTONE_REQUIREMENTS.md`, REQ-001–REQ-053, established OS #7) to its Feature Inventory ID and its most recently verified status — since the Requirements document itself is now three weeks stale (OS #7, June 25) relative to the Emergency Live-QA session (July 10) and the Feature Inventory (July 15). This is a traceability layer on top of existing documents, not a replacement for them.

**Status column meanings:** carried forward from `CORESTONE_REQUIREMENTS.md`'s own schema (Captured / Reviewed / Approved / Deferred / Implemented / Rejected / Superseded), with a second column showing what's changed since, where evidence exists. Where no independent updated evidence was found this pass, the original OS #7 status is carried forward unchanged and marked *(not re-verified this pass)* — this is intentional, per the quality standard of not guessing.

---

## FOUNDATION FIXES

| REQ-ID | Title | OS #7 Status | Updated Status (July 15, 2026) | Feature ID |
|---|---|---|---|---|
| REQ-001 | Fix Gatekeeper execution | Approved | ✅ Resolved — Gatekeeper Queue + Executor both ✅ BUILT per Subsystem Status, 15+ action types confirmed in live source (`gkExecuteAction`). See DR-005 (OQ-002 likely resolved but not marked closed). | V0.05 |
| REQ-002 | Fix takeoffToEstimate() | Approved | ✅ Resolved — "Takeoff → Estimate auto-flow: Built, verified live" per Subsystem Status | V1.13 |
| REQ-003 | Fix tax calculation | Approved | ⚠️ Partially resolved — `calcEstTotal` was found completely missing and was rebuilt in the July 10 session, but the Estimating module table still separately says materials-only/8% logic "needs verification." **Needs Owner Review.** | V4.10, BR-004 |
| REQ-004 | Fix callIntel persistence | Approved | ❌ Still open — "only 4 of 12 fields saved" per Subsystem Status. See DR-005 Finding A (tracking ID mismatch). | V1.07 |
| REQ-005 | Fix post-call data save | Approved | Same underlying issue as REQ-004 — not independently re-verified this pass | V1.06 |
| REQ-006 | Wire survey_selections | Approved | *(not re-verified this pass — Client Survey overall is V1.08, itself flagged Needs Owner Review)* | V1.08 |

## LEAD ENGINE

| REQ-ID | Title | OS #7 Status | Updated Status | Feature ID |
|---|---|---|---|---|
| REQ-007 | Lead creation — all sources | Implemented | *(not re-verified this pass)* | V1.01 |
| REQ-008 | Lead AI generation | Implemented | ✅ Confirmed — `generateLeadAI()`-equivalent logic present, matches Sales Pipeline ✅/⚠️ split in Subsystem Status | V1.02 |
| REQ-009 | Lead pipeline stages | Implemented | *(not re-verified this pass)* | V1.01 |
| REQ-010 | Follow-up sequence | Implemented | ⚠️ Downgraded — AI generates the follow-up plan text, but no confirmed automated firing mechanism exists (see Feature Inventory V6.06). "Implemented" as originally stated overstates what's live. | V1.06, V6.06 |
| REQ-011 | Client intelligence profile | Implemented | ⚠️ Downgraded — Subsystem Status: "Client Intelligence: PARTIAL — not connected to Business Brain, no historical data" | — |
| REQ-012 | Email auto-intake | Approved | ⚠️ Partial — `classifyAndProcessEmail` exists in source, but live Gmail-inbox auto-ingestion (n8n wiring) not confirmed active | V0.14 |

## SURVEY

| REQ-ID | Title | OS #7 Status | Updated Status | Feature ID |
|---|---|---|---|---|
| REQ-013 | Survey trigger on deposit | Captured | *(not re-verified this pass)* | V1.08 |
| REQ-014 | Dynamic survey questions | Captured | *(not re-verified this pass)* | V1.08 |
| REQ-015 | Survey Magic Link delivery | Captured | ⚠️ Related capability (Magic Link for bids, V1.20) marked Needs Owner Review — no distinct survey Magic Link function confirmed | V1.08, V1.20 |
| REQ-016 | Survey → Requirements propagation | Captured | *(not re-verified this pass)* | V1.08 |
| REQ-017 | Survey completion notification | Captured | *(not re-verified this pass)* | V0.11 |
| REQ-018 | Survey partial save | Captured | *(not re-verified this pass)* | V1.08 |

## REQUIREMENTS ENGINE

| REQ-ID | Title | OS #7 Status | Updated Status | Feature ID |
|---|---|---|---|---|
| REQ-019 | Requirement from any source | Captured | *(not re-verified this pass)* | V2.11 |
| REQ-020 | Data entered once propagates | Captured | Related to Business Cascade Engine, which is ✅ BUILT per Subsystem Status — likely partially realized, not independently confirmed for Requirements specifically | V2.10, V2.11 |
| REQ-021 | Requirement status tracking | Captured | *(not re-verified this pass)* | V2.11 |
| REQ-022 | Requirement → Estimate link | Captured | *(not re-verified this pass)* | V2.11, V1.09 |
| REQ-023 | Uncosted requirement flag | Captured | *(not re-verified this pass)* | V2.11 |
| REQ-024 | Client-visible requirements | Captured | 🔴 Blocked — depends on Client Portal, confirmed 0% built per Readiness Report | V2.11, V5.02 |

## CALL CENTER

| REQ-ID | Title | OS #7 Status | Updated Status | Feature ID |
|---|---|---|---|---|
| REQ-025 | Live AI co-pilot | Implemented | *(not re-verified this pass)* | V1.03 |
| REQ-026 | Checklist auto-detection | Implemented | *(not re-verified this pass)* | V1.03 |
| REQ-027 | Commitment capture | Implemented | Related to REQ-004/callIntel persistence gap — capture may work live but persistence past call-end is confirmed broken | V1.07 |
| REQ-028 | Post-call report | Approved | Same persistence gap as above | V1.05, V1.07 |
| REQ-029 | Requirement extraction from call | Captured | *(not re-verified this pass)* | V1.05, V2.11 |

## PLAN UPLOAD + TAKEOFF

| REQ-ID | Title | OS #7 Status | Updated Status | Feature ID |
|---|---|---|---|---|
| REQ-030 | PDF plan upload | Implemented | *(not re-verified this pass)* | V1.11 |
| REQ-031 | AI takeoff extraction | Approved | ✅ Substantially resolved — "AI reads whole PDF → structured takeoff JSON: Built, verified live" per Subsystem Status, and the full Visual Plan Markup Tool (85 functions) confirmed in live source | V1.11 |
| REQ-032 | Manual takeoff entry | Captured | ✅ Confirmed — extensive manual markup/edit functions (`pmtEditItemValue`, `pmtSaveManualEntry`, etc.) in live source | V1.11 |
| REQ-033 | Takeoff → Estimate save | Approved | ✅ Resolved — same as REQ-002 | V1.13 |
| REQ-034 | Takeoff confidence scoring | Captured | *(not re-verified this pass — AI Auto-Polygon Detection, V1.12, is confirmed Partially Implemented, less precise than dedicated tools)* | V1.12 |

## ESTIMATING

| REQ-ID | Title | OS #7 Status | Updated Status | Feature ID |
|---|---|---|---|---|
| REQ-035 | Line item estimate | Implemented | ⚠️ Subsystem Status: "Line Item CRUD: PARTIAL — edit/delete need verification" | V1.09 |
| REQ-036 | Tax rule locked | Approved | ⚠️ Same as REQ-003 — needs re-verification post-rebuild | V4.10, BR-004 |
| REQ-037 | 20% contractor fee | Implemented | ⚠️ Subsystem Status: "20% Contractor Fee: PARTIAL — applied to correct subtotal needs verification" | BR-001 |
| REQ-038 | Estimate versioning | Captured | *(not re-verified this pass)* | V1.09 |
| REQ-039 | Estimate → Proposal one click | Captured | ✅ Likely resolved — `createProposalFromEstimate()` confirmed to exist per Subsystem Status | V1.09, V1.16 |
| REQ-040 | Uncosted requirements flag | Captured | *(not re-verified this pass)* | V2.11 |

## PROPOSAL + SIGNATURE

| REQ-ID | Title | OS #7 Status | Updated Status | Feature ID |
|---|---|---|---|---|
| REQ-041 | 9-section construction agreement | Implemented | ⚠️ Subsystem Status: "9-section render needs verification" | V1.16 |
| REQ-042 | E-signature native | Implemented | *(not re-verified this pass — component functions confirmed present)* | V1.17, V0.10 |
| REQ-043 | Proposal viewed tracking | Implemented | *(not re-verified this pass)* | V1.16 |
| REQ-044 | Proposal revision | Captured | *(not re-verified this pass)* | V1.16 |
| REQ-045 | Signature → Job creation | Captured | *(not re-verified this pass)* | V1.17, V2.01 |
| REQ-046 | Proposal expiration | Captured | *(not re-verified this pass)* | V1.16 |

## PLATFORM (all Phase 1 modules)

| REQ-ID | Title | OS #7 Status | Updated Status | Feature ID |
|---|---|---|---|---|
| REQ-047 | Universal object standard | Captured | ❌ Still largely not built — Universal Comments and Universal Attachments both confirmed NOT BUILT per Subsystem Status | AP-016, AP-017 |
| REQ-048 | Audit trail — every change | Captured | ⚠️ Partial — "Audit entries written; no UI to view them" per Subsystem Status | — |
| REQ-049 | Gatekeeper — all AI routes here | Implemented (broken — REQ-001) | ✅ Resolved — same evidence as REQ-001 | V0.05 |
| REQ-050 | Search — universal | Captured | ❌ Still not built — "Global Search: NOT BUILT — High priority" per Subsystem Status | V6.05 |
| REQ-051 | Notifications — every event | Captured | ⚠️ Partial — effectively toast-only per Subsystem Status; see DR-004 | V0.11 |
| REQ-052 | Test accounts + demo data | Captured | *(not re-verified this pass)* | — |
| REQ-053 | Voice input — all forms | Partial | *(not re-verified this pass)* | — |

---

## Summary Statistics — Updated vs. Original

| Status | OS #7 Count | July 15 Assessment |
|---|---|---|
| Confirmed Resolved/Implemented | 11 | 6 confirmed with fresh evidence (REQ-001, 002, 031, 032, 033, 049); rest carried forward unverified |
| Confirmed Still Broken/Partial | 2 | Expanded to at least 8 with fresh evidence (REQ-003, 004, 010, 011, 035, 037, 041, 051) |
| Not Independently Re-Verified This Pass | — | 39 of 53 — carried forward from OS #7 without new evidence; **do not assume these are current** |

**The core finding of this matrix:** almost a month separates `CORESTONE_REQUIREMENTS.md`'s last update (OS #7, June 25) from this pass (July 15), during which the Emergency Live-QA session fundamentally changed what's known about the codebase's real behavior. A full requirement-by-requirement re-verification pass (not just the subset with clear secondary evidence, as done here) is recommended as a near-term follow-up — separate from the Knowledge Transfer Package itself, since it requires live testing, not documentation work.
