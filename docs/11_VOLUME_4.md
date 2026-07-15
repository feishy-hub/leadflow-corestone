# CORESTONE OS — VOLUME 4: FINANCIAL
**Knowledge Transfer Package — Document 11 (Volume 4 of 6)**
**Version 1.0 — July 15, 2026**
**Template and honesty rule: same as Volume 0.**

---

## V4.01 — Bills / AP Management
**Purpose:** Track money owed to subs/vendors with a real approval chain, not just a list of amounts.
**Where found:** `pgBills`.
**Status:** ✅ BUILT — confirmed strong: "3-stage approval, PO link, discrepancy detection cascade." One of the most complete Financial subsystems.
**System Interactions:** V4.02, V4.06 (PO link), V4.07.

## V4.02 — AI Check Bill
**Purpose:** Automatically flag when a bill doesn't match its PO, instead of relying on manual comparison.
**Where found:** `aiCheckBill`.
**System Interactions:** V4.01, V4.03 (feeds dispute handling when a mismatch is found).

## V4.03 — Bill Dispute Handling
**Purpose:** A structured path for disputing a bill rather than an ad hoc conversation with no record.
**Where found:** `disputeBill`.
**System Interactions:** V4.01, V4.02.

## V4.04 — Invoices
**Purpose:** Bill the client, tied to milestone/draw billing per BR-010.
**Where found:** `pgInvoices`.
**Status:** ✅ BUILT — "Create, send, Record Payment (full modal), cascade on payment." Strong, confirmed subsystem.
**System Interactions:** V4.05, V4.09, V2.10.
**Example Scenario:** Framing milestone completes and is approved → invoice is prepared automatically for review (per BR-010, never auto-sent) → Feishy sends it → status cascades to Sent → follow-up reminder created → dashboard updates → audit entry written. (This exact scenario is the Testing Standard's own worked example, QS-002.)

## V4.05 — AI Invoice Suggestion
**Purpose:** Draft invoice line items/amounts rather than building every invoice manually from scratch.
**Where found:** `aiInvoiceSuggestion`.
**System Interactions:** V4.04.

## V4.06 — Purchase Orders
**Purpose:** Formal commitments to vendors/subs, meant to always route through the 3-stage approval chain before becoming real.
**Where found:** `pgPOs`.
**Status:** ⚠️ PARTIAL — list exists; **the 3-stage authorization itself is confirmed not built** (see V4.07).
**System Interactions:** V4.07, V1.14, V0.05.

## V4.07 — PO 3-Stage Gatekeeper Approval
**Purpose:** Enforce that no PO is ever auto-created — Internal Approval → Customer Approval → Gatekeeper Authorization, in that order, every time.
**Status: 🔴 Confirmed gap, and the single most important compliance-style finding in this entire Knowledge Transfer effort.** This is not a "nice to have" left unbuilt — it's a rule the project's own documentation calls "locked. Cannot be reversed" (DEC-022, in `CORESTONE_SUBSYSTEM_STATUS.md`'s own words). The live system does not currently enforce it. This should not quietly carry into the rebuild as an accepted gap — it's flagged here explicitly, repeatedly, across the Feature Inventory, Business Rules Catalog, Gap Analysis, and here, specifically so it cannot be lost.
**Priority:** Critical.
**System Interactions:** V0.05 (Gatekeeper — the missing integration point), V4.06.

## V4.08 — Lien Waivers
**Purpose:** Legal protection tied to payment — a sub signs a lien waiver in exchange for payment release.
**Where found:** `pgLienWaivers`, `pgLienWaiversInline`.
**Status:** ✅ BUILT — "Sign + check-all + payment release cascade." Strong subsystem.
**System Interactions:** V0.10 (E-signature), V4.09.

## V4.09 — Payment Recording
**Purpose:** Record client/sub payments accurately, tied into the cascade system.
**Where found:** `recordPayment`, `confirmRecordPayment`.
**System Interactions:** V4.04, V2.10.
**Known historical bug, fixed and verified:** "Premature closeout bug (paying first invoice marked job complete)" — confirmed fixed and verified live with a real 3-invoice test in the July 10 session. Worth noting specifically because it's the kind of subtle logic error (conflating "first payment received" with "job complete") that's easy to reintroduce in a rebuild if the underlying business logic isn't understood, not just the symptom.

## V4.10 — 8% Tax — Materials Only (NY)
**Purpose:** Correct statutory tax application — materials taxed, labor/subs/permits not.
**Status: Needs Owner Review.** This is BR-004, a locked business rule, and also the specific calculation engine (`calcEstTotal`) that was found **completely missing** and had to be rebuilt during the July 10 session. Given how recently and dramatically this changed, it should be the first thing live-tested in the rebuild before being trusted, not assumed correct because "it's rebuilt now."
**Priority:** Critical.
**System Interactions:** V1.09.

## V4.11 — AI Cash Flow Forecast
**Purpose:** Project near-term cash position (inflow from invoices due, outflow from bills to pay) so Feishy isn't surprised by a cash crunch.
**Where found:** `aiCashFlow`.
**AI decisions:** Health rating (strong/ok/tight/critical), recommendation, week-by-week forecast.
**System Interactions:** V2.08, V4.12.

## V4.12 — AI Controller
**Purpose:** The financial-reasoning AI Employee — cross-cutting intelligence over bills, invoices, budget, and cash flow rather than siloed per-module logic.
**Where found:** `aiController`.
**System Interactions:** V0.03, V0.04, V4.01–V4.11 broadly.

## V4.13 — COI Expiry Tracking
**Purpose:** Make sure a subcontractor's insurance is current before issuing new work to them — a real compliance/risk-management need, not a nice-to-have.
**Where found:** `aiCheckSubCerts`.
**System Interactions:** V5.01, V4.06 (should ideally block/flag PO issuance to a sub with expired COI, though this specific integration wasn't independently confirmed this pass).

## V4.14 — QBO Integration
**Purpose:** Sync with QuickBooks Online once the business is confident enough in Corestone's own numbers to trust a live connection.
**Status:** Deferred by explicit business rule (BR-014) — 30-day parallel verification required. Intentional pacing.
**System Interactions:** V0.25, V4.12.

---

## Volume 4 Completeness Note

14 of 14 Volume 4 features represented. **V4.07 (PO 3-stage approval) is the single most important flagged gap in this entire volume** — a locked, non-negotiable rule that isn't yet enforced live. Everything else in Financial is comparatively strong: Bills, Invoices, and Lien Waivers are all confirmed ✅ BUILT with real cascading logic, making Financial one of the more production-credible areas of the current prototype outside of this one specific, important exception.
