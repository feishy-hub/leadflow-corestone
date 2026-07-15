# CORESTONE OS — KNOWLEDGE TRANSFER PACKAGE — INDEX
**This folder is the permanent, GitHub-based home for the complete Corestone OS Knowledge Transfer Package, authorized by Feishy Felberbaum on July 15, 2026, for the purpose of rebuilding Corestone OS in Cursor on a clean architecture without losing institutional knowledge.**

## Read order for any new AI (Cursor or otherwise)

1. `01_MASTER_CONTEXT.md` ✅ — what this project is, why it exists, current verified status
2. `02_MASTER_FEATURE_INVENTORY.md` ✅ — 108-feature complete checklist across Volumes 0–6
3. `03_DECISION_RECONCILIATION.md` ✅ (living document, growing) — every contradiction found across the project's history, with resolution or an owner-review flag
4. `04_BUSINESS_RULES_CONSTITUTION.md` ✅ — indexed catalog of every business rule, architectural principle, engineering standard, and QA standard
5. `05_MASTER_GAP_ANALYSIS.md` ✅ — built vs. vision, organized by phase gate
6. `06_REQUIREMENTS_TRACEABILITY_MATRIX.md` ✅ — all 53 REQ-IDs mapped to current status and Feature Inventory IDs

8. `08_VOLUME_1.md` ✅ — Lead, Estimating & Contract Pipeline (21 features)
9. `09_VOLUME_2.md` ✅ — Job Execution (11 features)
10. `10_VOLUME_3.md` ✅ — Field Operations (20 features)
11. `11_VOLUME_4.md` ✅ — Financial (14 features)
12. `12_VOLUME_5.md` ✅ — People, Portals & Reports (10 features)

13. `13_MASTER_SCREEN_SPECIFICATION.md` ✅ — 37-page inventory + UI baseline standard (honest about needing a live browser walkthrough to become a true visual spec)
14. `14_DEFINITION_OF_DONE.md` ✅ — final document; synthesizes the existing Testing Standard into one Done/Not-Done gate

# ✅ KNOWLEDGE TRANSFER PACKAGE COMPLETE — 14 documents, all 108 features documented

**Open items requiring Feishy's review (do not resolve by assumption):** DR-003 (CS_VERSION mismatch, 2.7 live vs. 2.10.4 documented); DR-005 (OQ-011 numbering drift; OQ-002 appears resolved but not marked closed); Feature Inventory entries V0.12, V1.07, V1.20, V1.21, V2.04, V2.07, V4.07, V4.10, V6.05, V6.06, V6.07; PO 3-stage Gatekeeper approval (BR-008/V4.07) confirmed not enforced despite being a locked rule (DEC-022); REQ-003/REQ-036 tax calculation needs live re-verification.

**Recurring pattern worth your attention (not tied to one document):** five separate instances now (DR-001 through DR-005) of status/tracking documents not being updated at the same time as the session notes that supersede them. See the Master Gap Analysis, "What This Means for the Rebuild," item 1.

## Status legend used throughout this package

| Tag | Meaning |
|---|---|
| ✅ Implemented & Verified Live | Built and confirmed working by actual click-through testing |
| 🟡 Implemented, Not Verified | Code exists but has not been operated end-to-end by a human |
| ⚙️ Built, Not Wired | Infrastructure exists (e.g., Supabase, n8n) but not connected |
| 📋 Documented / Designed Only | Specified in a document, no code exists |
| 💡 Future Vision | Long-term goal, not yet specified in implementation detail |
| ⚠️ Known Weakness | Confirmed gap or bug, honestly tracked |
| ⭐ Proposed Improvement | New idea surfaced during the knowledge transfer, not yet approved |
| 🔴 Requires Owner Review | An open contradiction or decision Feishy must resolve — never guessed at |

## Historical / superseded material

Nothing is ever deleted from this project's record. Superseded documents remain in the repository at their original location, clearly marked, with the reason for supersession and the replacing evidence documented in `02_DECISION_RECONCILIATION.md`.

---
*Last updated: July 15, 2026 — Foundation phase in progress.*
