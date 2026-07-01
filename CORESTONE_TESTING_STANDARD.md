# CORESTONE EXECUTIVE ACCEPTANCE TESTING STANDARD
## Permanent QA Governance Document
## Established: OS #8 — July 1, 2026
## Authority: Feishy Felberbaum, President, Corestone Developers

---

## PURPOSE

This document defines the mandatory standard for every Corestone testing package.

Testing packages do not exist to prove that code works.
Testing packages exist to prove that Corestone can successfully operate a real construction company.

Every testing package must make the President of Corestone Developers feel like he completed a real day of work — not like he clicked through software.

---

## WHO IS THE TESTER

The tester is the President of a construction company.

Not a software tester.
Not a developer.
Not a QA engineer.

The President evaluates whether Corestone behaved correctly as a complete business operating system.

---

## MANDATORY SECTIONS — EVERY BUSINESS EVENT

Every business event in every testing package must include all nine sections below. No exceptions.

---

### SECTION 1: BUSINESS SCENARIO

Describe the real-world situation in plain business language.

The President must immediately understand the business context without any technical background.

**Example:**
"The framing subcontractor completed work yesterday. You walked the site this morning and approved the work. Now you need to bill the client for the Framing Complete milestone draw."

No technical language. No developer context. Real business situation only.

---

### SECTION 2: WHAT I SHOULD DO

Give the exact actions to perform, in order, with no ambiguity.

The President should not have to guess, explore, or figure anything out.

**Example:**
1. Go to Jobs tab
2. Open Goldstein job
3. Click Financial tab
4. Click New Invoice
5. Select "Framing Complete — 25% Draw"
6. Confirm amount: $18,009
7. Click Send Invoice

Keep each step to one sentence. Number them. Nothing vague.

---

### SECTION 3: WHAT CORESTONE SHOULD DO AUTOMATICALLY

This is the most important section.

List every automatic action Corestone should execute — without the President doing anything beyond the steps in Section 2.

**Example:**
- Invoice created with correct milestone amount
- Invoice status set to "Sent" (by the send action — not by a separate button)
- Sent timestamp recorded with exact date and time
- Sender identity recorded
- Magic Link generated for client
- Client portal updated with new invoice
- Follow-up reminder created in Gatekeeper (3 days if unpaid)
- Dashboard updated: outstanding invoices balance increases
- Audit log entry written: who sent, when, what amount
- AI drafts follow-up communication in Messages (labeled DRAFT)

Nothing should be hidden. Nothing should require a second manual action.

---

### SECTION 4: WHAT I SHOULD VERIFY

Tell the President exactly where to look and exactly what to expect at each location.

**Example:**

| Location | What to Open | What You Should See |
|---|---|---|
| Gatekeeper | Gatekeeper tab | "Invoice sent: Goldstein — $18,009. Follow up in 3 days if unpaid." |
| Financial | Job → Financial tab | Invoice row showing status SENT, date today, amount $18,009 |
| Dashboard | Summary tab | Outstanding invoices balance increased by $18,009 |
| Messages | Messages tab | [DRAFT] Follow-up message ready for Goldstein |
| Audit | (internal) | Entry: invoice_sent, object_id = invoice ID, timestamp, changed_by = owner |

No guessing where to look. No "check around and see if it worked."

---

### SECTION 5: WHAT SHOULD NOT HAPPEN

List every condition that would indicate a bug.

**Example:**
- Clicking Send twice creates two invoices (double-submit bug)
- Invoice status remains "Draft" after sending
- Gatekeeper item missing
- Sent timestamp is null or wrong date
- Dashboard balance does not update
- No audit log entry
- Messages tab shows no draft communication
- Client portal not updated
- Second click on Send opens a second modal instead of being blocked

Be specific. The President should be able to confirm "none of these happened" as part of passing the test.

---

### SECTION 6: EDGE CASES

Every scenario must include at least five edge case tests.

**Format:**
| # | Edge Case | Expected Behavior |
|---|---|---|
| EC-1 | Double-click Send | Second click blocked by guardAction — one invoice created only |
| EC-2 | Refresh browser mid-workflow | Invoice already saved — no duplicate on reload |
| EC-3 | Cancel halfway through New Invoice modal | No invoice created, no Gatekeeper item, no audit entry |
| EC-4 | Send with amount field empty | Error: "Amount required" — no invoice created |
| EC-5 | Navigate away during send | Invoice saves before navigation — no data lost |

---

### SECTION 7: AI REVIEW

After every scenario, explain what the AI concluded and why.

The AI reasoning must be understandable to a construction company president — not a developer.

**Example:**
The AI created a follow-up reminder because:
- The invoice was sent but no payment was received
- Client payment history for this job shows only the deposit
- Outstanding balance is 75% of the contract
- The AI applied the standard "follow up in 3 days on unpaid invoices" rule

The AI drafted a client communication because:
- A financial action was taken that the client needs to know about
- The draft was not auto-sent because all client communications require owner review before sending (Gatekeeper principle)

If AI took no action for a scenario, explain why that was the correct behavior.

---

### SECTION 8: EXECUTIVE PASS / FAIL

Single summary at the end of every scenario.

**PASS** if ALL of the following are true:
- The business process completed correctly
- Every downstream workflow executed automatically
- No duplicate actions occurred
- Financial impact was correct
- Communication was drafted (not auto-sent)
- Gatekeeper behaved correctly
- AI reasoning was correct and understandable
- Audit trail is complete

**FAIL** if ANY ONE of those conditions is not met.

The President marks this himself based on what he observed. If FAIL, describe exactly which condition failed and what was wrong.

---

### SECTION 9: OVERALL COMPANY FEEL (end of package only)

Mandatory at the end of every testing package.

Ask:

> "Did this feel like running a construction company, or did it feel like clicking through software?"

**If it felt like running a company:** State why. What made it feel real?

**If it felt like clicking software:** State exactly what was missing and what should be improved. Be specific — "the CO approval didn't update the budget automatically" is more useful than "it didn't feel right."

This feedback drives the next development cycle.

---

## ADDITIONAL REQUIREMENTS

### Proactive Test Coverage
Do not wait for the President to identify missing tests.

Think like:
- A QA Director: find every path that could fail
- A CTO: find every architectural gap
- A Construction Company President: find every business scenario that happens in a real job
- An Enterprise Systems Architect: find every place where modules fail to connect

If there are business events, edge cases, or downstream workflows that the President did not mention but should be tested, include them automatically.

### Business Language Throughout
No technical language in testing packages.
- Say "the system recorded who approved" not "the audit_log table received an entry"
- Say "Corestone prepared an invoice" not "dbIns was called on the invoices table"
- Say "the budget updated automatically" not "dbUpd was called on jobs.contract_price"

### Realistic Data Always
Every testing package uses realistic construction company data:
- Real client names
- Real addresses (Hudson Valley, NY)
- Real dollar amounts appropriate to the project type
- Real trade names and subcontractor scenarios
- Real business situations that actually happen on job sites

### No Happy-Path Only Testing
Every testing package must include scenarios where things go wrong:
- Bills that don't match POs
- Change orders that arrive verbally (not in writing)
- Clients who don't respond to proposals
- Subcontractors who miss deadlines
- Scope disputes

Real construction companies deal with problems constantly. Corestone must handle them.

---

## TESTING PACKAGE NAMING CONVENTION

`CORESTONE_TEST_PACKAGE_[##]_[Short Description].html`

Examples:
- `CORESTONE_TEST_PACKAGE_01_Lead_to_Proposal.html`
- `CORESTONE_TEST_PACKAGE_02_Run_Your_Company.html`
- `CORESTONE_TEST_PACKAGE_03_Full_Job_Lifecycle.html`

---

## REVISION HISTORY

| Version | Date | Session | Change |
|---|---|---|---|
| 1.0 | July 1, 2026 | OS #8 | Initial standard established by Feishy Felberbaum |

---

*This document is permanent. It governs every future testing package without exception.*
*The standard may be upgraded — never downgraded.*
