# CORESTONE OS — BUSINESS RULES & CONSTITUTION CATALOG
**Knowledge Transfer Package — Foundation Document 4 of 6+**
**Version 1.0 — July 15, 2026**

**Purpose:** A single indexed catalog of every governing rule, principle, and standard already established for Corestone OS, consolidated from five source documents rather than rewritten. This document does not replace those source documents — they remain in the repository root exactly as they are (per the no-silent-overwrite rule) — it exists so a rebuild in Cursor doesn't have to read all five in full to know what's non-negotiable.

**Source documents consolidated here (all remain unchanged in the repo root):**
- `CORESTONE_CONSTITUTION.md` (15 principles, "the highest architectural authority of the project")
- `CORESTONE_EXECUTIVE_DIRECTIVE.md` (established OS #8, 10 governing directives + UX/BI standard)
- `CORESTONE_ARCHITECTURE_LOCKDOWN.md` (future-proofing directive)
- `CORESTONE_ARCHITECTURE_DIRECTIVE_OBJECT_MODEL.md` (object model, visibility engine, proposal system)
- `CORESTONE_TESTING_STANDARD.md` (9-section Executive Acceptance Testing standard, OS #8)

**Four categories, each with its own ID prefix:**
- **BR-** Business Rules — concrete business logic; get these wrong and the software gives a wrong dollar amount or breaks a real commitment
- **AP-** Architectural Principles — how the system must be structured, not what it calculates
- **ES-** Engineering Standards — process and quality-of-build expectations for every session
- **QS-** QA/Testing Standards — what "tested" is required to mean

---

## BR — BUSINESS RULES

| ID | Rule | Status | Source |
|---|---|---|---|
| BR-001 | Cost-plus pricing model: 20% contractor fee | Active | Conversation (OS #1) |
| BR-002 | Full financial transparency — client sees every invoice | Active | Conversation (OS #1) |
| BR-003 | $5,000 deposit required before any site visit or proposal work; applies toward construction, not an extra fee | Active | Conversation (OS #1), Feature Inventory V1.18 |
| BR-004 | 8% NY sales tax applies to materials only — never labor, subs, or permits | Active | Constitution (implied via Estimate Item structure), prior session notes — **flagged for re-verification, see DR-003/Feature Inventory V4.10** |
| BR-005 | All permits and subcontractors managed by Corestone (not the client) | Active | Conversation (OS #1) |
| BR-006 | Daily photo/video updates to clients | Active | Conversation (OS #1) |
| BR-007 | Service area: Ulster, Sullivan, Dutchess Counties, NY | Active | Conversation (OS #1) |
| BR-008 | Purchase Orders require 3-stage approval (Internal → Customer → Gatekeeper); never auto-created | Active, **not yet enforced in code** | Decision Log (DEC-022, "cannot be reversed"), Feature Inventory V4.07 |
| BR-009 | Statuses are outcomes of business actions, never manual toggle buttons | Active | Executive Directive §5 |
| BR-010 | Milestone/draw billing: on milestone completion + approval, Corestone prepares the invoice for review automatically — never auto-sends unless the configured approval process explicitly allows it | Active | Architecture Directive — Object Model, "Payment Intelligence" |
| BR-011 | One proposal, configurable visibility — never duplicate proposals for different audiences | Active | Architecture Directive — Object Model, "Proposal Generation" |
| BR-012 | Client communications are drafted by AI but require owner review before sending — never auto-sent | Active | Testing Standard, Section 7 example; Gatekeeper principle (V0.05) |
| BR-013 | "Stub" is a banned word in code/docs — conflicts with "subs" (subcontractors); use "Partially Implemented" instead | Active | Executive Directive, "Enterprise Architecture Completion Directive" |
| BR-014 | QBO connects last, only after a 30-day parallel verification period | Active (deferred) | Constitution (implied), Decision Log, Feature Inventory V0.25/V4.14 |
| BR-015 | Nothing built is ever removed — only upgraded | Active | Constitution §15 ("Long-Term Principle"), repeated across every session |

---

## AP — ARCHITECTURAL PRINCIPLES

*(condensed from the 15-principle Constitution and the Object Model directive — each row is a compression of a much fuller source section; read the source document directly for full detail, this is an index, not a replacement)*

| ID | Principle | Summary | Source |
|---|---|---|---|
| AP-001 | Core Mission | Corestone is an AI-powered Enterprise Construction Operating System, not estimating software — one intelligent platform, not disconnected modules | Constitution §1 |
| AP-002 | Enterprise Development Team | Claude permanently acts as CTO/Architect/Engineer/QA/Product/Security/AI Architect simultaneously | Constitution §2 |
| AP-003 | Blueprint Discipline | `CORESTONE_BLUEPRINT.md` is the living architecture; read before coding, update after | Constitution §3 |
| AP-004 | Enterprise Knowledge Engine | The system must never "start over" — every upload strengthens a persistent Project/Business Knowledge Model | Constitution §4 |
| AP-005 | Universal Information Intake | Any reasonable input format (PDFs, photos, video, voice, transcripts, emails, texts, etc.) must be ingestible | Constitution §5 |
| AP-006 | Multi-Modal AI | Never limited to one AI model — combine speech, vision, OCR, document understanding as needed for best result | Constitution §6 |
| AP-007 | Contextual Reasoning | AI reasons using full project context, never isolated words — thinks like an experienced construction executive | Constitution §7 |
| AP-008 | Manual + AI + Any Input | Every capability must work both automatically and manually; the human can always override | Constitution §8 |
| AP-009 | Gatekeeper | AI prepares, humans approve, system executes | Constitution §9, Feature Inventory V0.05 |
| AP-010 | Project Intelligence | AI continuously asks: what changed, what's missing, what conflicts, what risks | Constitution §10 |
| AP-011 | Business Brain | Every completed project improves future recommendations, with confidence levels and stated reasoning | Constitution §11, Feature Inventory V0.03/V6.03 |
| AP-012 | Real Project Validation | Real jobs are the proving ground; document → review architectural impact → update Blueprint → implement. Never bypass architecture for one project | Constitution §12 |
| AP-013 | Self-QA | Developers are the QA team; attempt to break every workflow before the owner sees it | Constitution §13, see QS section below |
| AP-014 | Enterprise Standards Checklist | Every screen reviewed for missing buttons/search/filters/permissions/reports/audit history/etc. | Constitution §14 |
| AP-015 | Long-Term Principle | Never build the fastest solution — build the strongest; optimize for the next ten years | Constitution §15, same as BR-015 |
| AP-016 | Object Model | Corestone thinks in Business Objects (Lead, Client, Project, Estimate, etc.), not pages — each object exists once, everything else is a view of it | Architecture Directive — Object Model |
| AP-017 | Estimate Item as Business Object | A line item is a full object (cost, markup, vendor bids, AI confidence, photos, history) not just a row | Architecture Directive — Object Model |
| AP-018 | Pricing Method Selection | Cost-Plus/Open Book, Fixed Price, Time & Material, Design-Build, GMP — chosen per project, affects entire workflow | Architecture Directive — Object Model |
| AP-019 | Visibility Engine | Every object/field/note/attachment/cost is configurable per role (Owner, Estimator, PM, Client, Sub, Architect, etc.) | Architecture Directive — Object Model |
| AP-020 | User Portals | Each role gets its own experience generated from the same underlying data — no duplicate systems, one source of truth | Architecture Directive — Object Model, Feature Inventory V5.02 |
| AP-021 | Preview Mode | Owner can preview exactly what any role/person will see before sharing anything | Architecture Directive — Object Model |
| AP-022 | Event-Driven Architecture | Every business object notifies dependent modules on change (Estimate Approved → Proposal updates → Job created, etc.) so future modules can subscribe instead of requiring redesign | Architecture Lockdown §6 |
| AP-023 | Future-Proofing Without Building | Modules not yet built (Accounting, Payroll, Fleet, Multi-company, etc.) must still have their business objects/relationships/extension points reserved now | Architecture Lockdown §2 |

---

## ES — ENGINEERING STANDARDS

| ID | Standard | Summary | Source |
|---|---|---|---|
| ES-001 | Documentation First | Update Blueprint/Master/Decisions/Open/Command Center/Testing Standard before writing code each session | Executive Directive §1 |
| ES-002 | Internal QA Before Executive QA | Every button, dropdown, table, workflow, modal, page tested before the President ever sees it | Executive Directive §2, Constitution §13 |
| ES-003 | Enterprise Standard on Every Page | Layout, navigation, search, filters, bulk actions, empty/loading states, confirmations — not just "working" | Executive Directive §3 |
| ES-004 | Every Page Thinks Like a Workflow | No isolated buttons — every action must answer what happens next, who's notified, what updates downstream | Executive Directive §4 |
| ES-005 | Replace Manual Work with Intelligent Workflows | Statuses are outcomes, not toggles (same as BR-009) | Executive Directive §5 |
| ES-006 | Executive Readiness Dashboard | Command Center must show Architecture / UI / Database / AI / Workflow / Internal QA / Executive QA / Production Ready for each of the 20 core business workflow stages | Executive Directive §6 |
| ES-007 | AI Architecture Review | Every major page should self-review for missing workflows/permissions/automation/Blueprint alignment | Executive Directive §7 |
| ES-008 | Executive Testing Mode | Testing panel should feel like running the company, not clicking software — see QS section | Executive Directive §8, Testing Standard (full doc) |
| ES-009 | No Architectural Shortcuts | Build the correct architecture now; no temporary implementations that require rebuilding later | Executive Directive §9 |
| ES-010 | Think Like Owners | Challenge architecture/workflow/UX/AI proactively — don't wait for the President to find shortcomings | Executive Directive §10 |
| ES-011 | Subsystem Status Discipline | Every subsystem rated Not Started / Planned Only / Partially Implemented / Fully Implemented / Internally Tested / Executive Approved — documentation existing ≠ built | Executive Directive, "Enterprise Architecture Completion Directive" |
| ES-012 | End of Session Requirements | Update Blueprint, Master, Command Center, Decisions, Open Items, Testing Standard, subsystem status, then push to GitHub — every time | Executive Directive, "End of Session Requirements" |
| ES-013 | Documentation Handoff | A new chat must be able to continue from the repository alone, with no dependency on prior conversation | Executive Directive, "Documentation Handoff" |
| ES-014 | UX/Business Intelligence Standard (9.1–9.7) | Every page ships by default with search/filter/sort/bulk/export/audit/comments/AI assist — "build like version 10.0, not version 0.1" | Executive Directive §9 (UX standard, established OS #9) |
| ES-015 | Override Level Hierarchy | Company Default → Client Default → Project Default → Estimate Default → Line Item → Change Order | Executive Directive §9.3 |
| ES-016 | Research Requirement | Study Buildertrend/JobTread/Procore/Autodesk/CoConstruct/Houzz Pro strengths and weaknesses before designing — never copy directly | Architecture Directive — Object Model, "Research Requirement" |

---

## QS — QA / TESTING STANDARDS

| ID | Standard | Summary | Source |
|---|---|---|---|
| QS-001 | Tester Identity | Every testing package is written for "the President of a construction company," not a developer — plain business language throughout | Testing Standard, "Who Is The Tester" |
| QS-002 | 9 Mandatory Sections | Business Scenario → What I Should Do → What Corestone Does Automatically → What I Should Verify → What Should NOT Happen → Edge Cases (5+) → AI Review → Executive Pass/Fail → Overall Company Feel | Testing Standard, full doc |
| QS-003 | No Happy-Path-Only Testing | Every package must include failure scenarios: mismatched bills, verbal change orders, unresponsive clients, missed deadlines, scope disputes | Testing Standard, "No Happy-Path Only Testing" |
| QS-004 | Realistic Data Always | Real client names, real Hudson Valley addresses, real dollar amounts, real trade scenarios | Testing Standard, "Realistic Data Always" |
| QS-005 | Live Testing Over Code Inspection | Source-code presence is not proof of a working feature — this is the standard that the July 10 Emergency Live-QA session enforced, correcting a 95%→62% completion estimate. See Decision Reconciliation DR-001. | Testing Standard (implied), Decision Reconciliation DR-001 |
| QS-006 | Test Package Naming | `CORESTONE_TEST_PACKAGE_[##]_[Short Description].html` | Testing Standard, "Naming Convention" |

---

## Notes for Cursor

1. This catalog is an **index**, not a replacement. Where a rule needs its full original context (e.g., the complete Takeoff System requirements in Architecture Lockdown §4, or the full Visibility/Portal role list in the Object Model directive), go to the source document directly — the links above tell you exactly where.
2. **BR-004 and BR-008 are marked Active but flagged** — both are non-negotiable rules whose actual live-code enforcement is currently unverified or confirmed incomplete. Do not assume either is correctly implemented in the current prototype without direct testing. See Decision Reconciliation and Feature Inventory for specifics.
3. No rule in this catalog has been altered from its source meaning — only condensed for indexing. If any summary here appears to conflict with its source document, the source document is authoritative; flag the discrepancy rather than trusting the summary.
