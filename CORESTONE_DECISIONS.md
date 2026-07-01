# CORESTONE DECISIONS — DECISION LOG
## Version 1.0 | OS #7 — June 25, 2026
## Last Updated: OS #7 | Updated By: Claude (CTO/Architect)

---

## RULE
Every architectural or product decision is recorded here before implementation.
Nothing changes silently.
Decisions may be revised — but only with a new entry, not by editing the old one.

---

## DECISION SCHEMA

| Field | Description |
|---|---|
| DEC-ID | Unique identifier |
| Date | When decided |
| Session | OS session number |
| Decision | What was decided |
| Reason | Why this was chosen |
| Alternatives Rejected | What else was considered and why it lost |
| Impacted Modules | What this affects |
| Status | Active / Superseded / Under Review |
| Decided By | Owner / Architecture Review Board / Claude |

---

## ACTIVE DECISIONS

| DEC-ID | Date | Decision | Reason | Alternatives Rejected | Impacted Modules | Status |
|---|---|---|---|---|---|---|
| DEC-001 | OS #1 | Single index.html architecture | Speed of development for MVP | Multi-file React app (too complex for solo build pace) | All | Active — will be revisited post-Supabase |
| DEC-002 | OS #1 | localStorage as database | No backend setup required for MVP | Supabase (setup caused spinning bugs), Firebase (cost) | All | Active — Supabase migration locked for Phase 2 |
| DEC-003 | OS #1 | 20% cost-plus contractor fee | Corestone business model | Fixed price (less transparent), T&M only (client resistance) | Estimates, Proposals | Active — locked |
| DEC-004 | OS #1 | $5,000 deposit before any site visit | Protects Corestone time | No deposit (risk of unqualified leads), smaller deposit (insufficient commitment signal) | Lead Engine, Proposals | Active — locked |
| DEC-005 | OS #1 | QBO connects last after 30-day parallel | Prevent accounting errors from sync bugs | Connect QBO early (risk of double entries, data corruption) | Financial | Active — locked |
| DEC-006 | OS #2 | Classic GitHub PAT only (ghp_ prefix) | Fine-grained tokens return 403 errors | Fine-grained tokens (fail), SSH (complex setup) | Infrastructure | Active — locked |
| DEC-007 | OS #2 | Anthropic API key split across two variables | GitHub secret scanning blocks pushes if key appears whole | Single variable (blocked by GitHub), environment only (deployment risk) | AI Engine, Infrastructure | Active — locked |
| DEC-008 | OS #3 | DOM createElement over innerHTML string concatenation | HTML entities render as literal text in JS strings | innerHTML concatenation (causes rendering bugs with special characters) | All UI | Active — locked |
| DEC-009 | OS #5 | Keyword checklist detection (no AI credits) | AI call every 5 seconds for checklist is wasteful and slow | AI-based detection (cost + latency) | Call Center | Active |
| DEC-010 | OS #6 | Gatekeeper is the ONLY path for AI execution | No AI action may execute without human approval | AI auto-execute (violates 2080 vision, risk of errors) | Gatekeeper, All AI | Active — locked |
| DEC-011 | OS #6 | Tax applies to materials only (NY law) | NY sales tax does not apply to labor, services, or permits | Tax on all line items (illegal), no tax (undercharging) | Estimates | Active — locked |
| DEC-012 | OS #7 | 6 permanent project documents as system memory | Chat memory is unreliable — document memory is permanent | Chat-only memory (lost between sessions), single master doc (insufficient separation) | All | Active — locked |
| DEC-013 | OS #7 | Requirements must have REQ-ID before implementation | Prevents building without documented justification | Build first document later (causes drift and undocumented features) | All | Active — locked |
| DEC-014 | OS #7 | Phase 1 hard stop at signed proposal | Build one complete flow perfectly before adding more | Build all modules simultaneously (causes integration failures) | Phase 1 modules | Active |
| DEC-015 | OS #7 | Architecture Review Board (ChatGPT) is independent reviewer | One AI should not design and approve its own work | Claude reviews own work (conflict of interest), no review (architecture drift) | All | Active — locked |
| DEC-016 | OS #7 | Supabase migration is Phase 2 prerequisite — not optional | localStorage will hit 5MB limit under real usage. Migration cost increases with every new feature built on localStorage | Stay on localStorage (data loss risk), migrate during Phase 1 (disrupts current build) | All | Active |
| DEC-017 | OS #7 | Requirements Engine is a dedicated module | Requirements from any source (call, survey, log, email) must be centralized — not scattered across modules | Store in notes field of each module (unsearchable, lost), store only in survey (misses other sources) | Requirements Engine, all Phase 1 modules | Active |

---

## DECISIONS PENDING ARCHITECTURE REVIEW BOARD

| DEC-ID | Question | Options | Recommendation |
|---|---|---|---|
| DEC-P001 | When does Supabase migration happen exactly? | Before Phase 1 build / After Phase 1 / After Phase 2 | After Foundation fixes, before any new Phase 1 code |
| DEC-P002 | Does the Requirements Engine exist as a separate tab or embedded in each module? | Separate tab | Embedded in Job/Lead with dedicated view | Separate tab — too important to bury |
| DEC-P003 | Should Survey be sent via Magic Link (no login) or require client portal login? | Magic Link | Portal login | Magic Link — reduces friction for deposit-stage clients |

---

*Version 1.0 — OS #7 — June 25, 2026*
*New decisions added as entries — old decisions never edited*

---

## DECISIONS ADDED — OS #8 (July 1, 2026)

| DEC-ID | Date | Decision | Reason | Alternatives Rejected | Impacted Modules | Status |
|---|---|---|---|---|---|---|
| DEC-018 | OS #8 | Design now. Build when the platform is ready. | Designing architecture during implementation leads to redesign and technical debt. Blueprint must always stay ahead of code. | Design during implementation (causes drift) | All | Active — locked |
| DEC-019 | OS #8 | Workflow Engine is a core enterprise subsystem — not a feature | Stage transitions (Lead→Job→Billing) must be configurable workflows, not hardcoded function chains. WF-01 through WF-10 defined as default workflows. | Hardcoded transitions (already rejecting), manual-only stage changes (insufficient for automation) | All stage transitions, Gatekeeper, Event Engine | Active |
| DEC-020 | OS #8 | All 10 enterprise subsystems fully designed in Blueprint before Phase 2 build begins | Constitution principle: Blueprint leads implementation. All subsystems (Object Model, Visibility, Event, Workflow, Permissions, Financial, Business Brain, Mobile, API, Integration) designed and documented. | Design subsystems when you build them (causes drift, causes redesign) | All | Active — locked |
| DEC-021 | OS #8 | GL account hooks reserved on all financial objects going forward | Cost-free to add fields now. Expensive to retrofit after Supabase migration. QBO sync in Phase 3 requires these fields. | Add GL fields at QBO integration time (causes schema migration) | Estimate Items, Budget Lines, Bills, Invoices, Payments | Active — implement immediately on new objects |
| DEC-022 | OS #8 | Three new permanent documents saved to repo | CORESTONE_CONSTITUTION.md (highest authority), CORESTONE_ARCHITECTURE_DIRECTIVE_OBJECT_MODEL.md, CORESTONE_ARCHITECTURE_LOCKDOWN.md | Chat-only storage (lost between sessions) | All | Active — locked |

*Added OS #8 — July 1, 2026*

---

## DECISIONS ADDED — OS #8 Phase 1 Directive (July 1, 2026)

| DEC-ID | Date | Decision | Reason | Impacted Modules | Status |
|---|---|---|---|---|---|
| DEC-023 | OS #8 | Architecture freeze — no new Blueprint expansion unless critical flaw discovered | Architecture is sufficiently defined. Priority is now a stable, usable application with real business testing. | All | Active — locked |
| DEC-024 | OS #8 | Every development cycle delivers one complete, testable business workflow with a professional testing package | Incomplete pages and placeholder buttons are no longer acceptable. Each cycle: build → test internally → break → fix → deliver testing package. | All | Active — locked |
| DEC-025 | OS #8 | Status must be the result of completing a business action — never a manual button | "Send Proposal" changes status to Sent. "Mark as Sent" button does not exist. Status is a byproduct of workflow, not a manual toggle. | Leads, Estimates, Proposals, Jobs, COs, POs, Bills, Invoices, Payments, Daily Logs, RFIs, Tasks, Warranties | Active — locked |
| DEC-026 | OS #8 | Build like a CEO, not an architect — demand working product, test like a real construction company, improve from those tests | Corestone proves itself through real business workflows, not further design sessions. | All | Active — locked |

*Added OS #8 — July 1, 2026*
