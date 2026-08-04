# Corestone — Orientation for Executive Board Review

**Repository:** `feishy-hub/leadflow-corestone` (single source of truth)
**Branch:** `main`
**Purpose of this document:** orient a reviewing AI (Bolt) on what Corestone is and how it works, before it studies the code. This is not a specification, and it is not a request to rebuild, redesign, or replace anything.

---

## What Corestone is

A single-page construction management application for Corestone Developers, a residential construction company in the Hudson Valley, NY. One `index.html` (~1.2M characters) plus a small set of Vercel serverless functions, backed by a real Postgres database. It replaces manual spreadsheets and a Buildertrend subscription with an integrated system: leads → survey → takeoff → estimate → bid → job → close-out.

## Current product vision

The direction is an AI-assisted system where routine inputs — client selections, phone-call notes, measurements — are captured and routed automatically, with the owner reviewing and approving key decisions rather than manually re-entering the same information into five different places. The system is being built incrementally toward that; it is not there yet, and no part of this document claims otherwise.

## User roles

- **Owner/Contractor** (Feishy) — full access, approves everything meaningful
- **Client** — receives and completes the Survey, receives the Proposal/Estimate, approves Change Orders
- **Subcontractors** — receive Bid Packages, submit pricing and responses (no login/portal yet — communication is one-directional plus a simple message log, not a two-way authenticated portal)

## How information flows through the system (the core loop)

1. A **lead** comes in, a $5,000 deposit is collected before site visits or proposal work
2. The deposit triggers two things in parallel: the **Client Survey** goes out, and initial **Bid Packages** go out to relevant trades
3. Survey answers, and separately anything captured from client phone calls, both become **Requirements** — a unified record, each one tagged with the trade it belongs to
4. **Digital Takeoff** measures the actual plans — every measurement can be tagged with an Item (Roof, Siding, Concrete, etc.) that knows how to calculate itself (pitch for roofs, waste factor, cutouts for windows/doors)
5. Takeoff quantities can be pulled directly into an **Estimate** as priced line items, using default pricing stored on the Item itself where available
6. Requirements show up directly inside the Estimate, so nothing survives only in the Survey — the person pricing the job sees exactly what the client asked for
7. Any Estimate line can be sent out individually for a **Bid** — with a real review step (editable scope, due date, message) before anything goes out — or priced directly by the owner
8. A sub's approved bid price flows back into that exact Estimate line automatically
9. Approved estimates lead to Change Orders (for out-of-scope additions) using the identical send-for-bid-and-approve pattern

## Current AI philosophy

AI is used for well-scoped, specific tasks — not as a general chat layer. Examples: turning one Takeoff measurement into a real material list, estimating a fair market price against Corestone's own historical data, sanity-checking a sub's bid against an expected range, extracting requirements from call notes, auto-detecting rooms on a plan. Every AI call is failure-tolerant — if AI is unavailable, the feature degrades to showing whatever real data it has (historical averages, manual entry) rather than breaking entirely. All AI calls route through one server-side proxy; no API key is ever exposed to the browser.

## Gatekeeper philosophy

Certain actions (deposits received, change order approvals) route through a central approval queue rather than firing automatically — the owner reviews and explicitly acts, rather than the system silently making commitments on his behalf.

## Business rules that must never be weakened

- **Cost-plus 20% contractor fee**, calculated excluding permits
- **8% NY sales tax on materials only** — never on labor, subcontractor costs, or permits
- **$5,000 deposit required** before any site visit or proposal work begins
- **Nothing is ever removed, only added.** The existing product is the floor, not a draft.

## What has already been implemented (high-level, not exhaustive)

Leads/CRM, tiered Client Survey with real photography across Exterior/Interior/Outdoor categories, a unified Requirements system, a full Digital Takeoff tool (scale calibration, multiple measurement tools per item type, an editable Item Library with default pricing, waste factor, cutouts, per-item color/visibility, AI material breakdowns), Estimating (line items, bid status per line, historical/AI price verification, direct Takeoff import), Bidding (reviewed send flow, per-bid messaging, automatic approval-to-estimate sync), Change Orders, Gatekeeper, Jobs, Scheduling, Daily Logs, Documents.

---

## Current review scope — these five areas, as one connected workflow

- **Client Survey**
- **Plans**
- **Digital Takeoff**
- **Estimating**
- **Bid Packages**

These are not five separate features to evaluate in isolation — they are one continuous pipeline (survey answers become requirements → requirements and plans drive takeoff → takeoff drives estimating → estimating drives bidding → bid approval flows back to the estimate). Please review them together, with particular attention to whether information actually reaches every place it needs to, rather than getting re-typed or lost between steps.

Bolt's role here is Product Architect, UI/UX Architect, Construction Operations Consultant, and Workflow Consultant — studying what exists and recommending improvements. Bolt is not being asked to rebuild, redesign the architecture, or replace any part of the product.
