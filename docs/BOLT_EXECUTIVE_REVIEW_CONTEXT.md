# Corestone OS — Executive Review Context

**Repository:** `feishy-hub/leadflow-corestone` (single source of truth — the earlier V2 rebuild has been abandoned and consolidated back into this repo)
**Live app:** leadflow-corestone.vercel.app
**Prepared:** as an honest snapshot of current state, not a sales document.

## What Corestone OS is

A single-page construction management application (one `index.html`, ~1.2M characters, plus a small set of Vercel serverless functions in `/api`) for Corestone Developers, a residential construction company in the Hudson Valley, NY. It replaces manual spreadsheets/Buildertrend with an integrated, AI-assisted system covering leads, surveys, takeoff, estimating, bidding, scheduling, and job management.

## Product vision

The long-term direction ("2080 vision") is an AI-driven system where inputs (emails, client selections, phone calls, measurements) are ingested and routed automatically, with the owner approving/rejecting via a Gatekeeper queue rather than manually pushing every workflow forward. The current state is a real, working step toward that — not there yet, and this document does not claim otherwise.

## Workflow references — used for inspiration only

**Buildertrend** (which Corestone currently uses) — referenced for the rough-estimate → detailed-takeoff → proposal → job-costing flow, and Send-for-Bid patterns.
**Procore** — referenced for Cost Catalog / default pricing patterns and "reset to original takeoff quantity" behavior.
**Kreo** — referenced for the Takeoff tool's measurement UX (item library, draw-then-assign flow, per-item color/visibility, cutouts).

These are workflow references only. Nothing was copied; each pattern was independently reasoned about and reimplemented to fit this app's own architecture and business rules.

## Major modules — current real state

- **Leads / CRM** — real, in production use
- **Client Survey** — tiered (Standard/Premium/Luxury + custom-upload) selection survey across Exterior/Interior/Outdoor categories, all real photos (sourced, verified, licensed for commercial use), deposit-triggered
- **Requirements** — unified hub fed by both Survey selections and phone-call intelligence, each tagged with an inferred trade
- **Takeoff (Plan Markup Tool)** — real measuring tool: scale calibration, multiple drawing tools per item (rectangle/polygon/etc.), an editable Item Library with default methods and default pricing, waste factor, cutouts/deductions, per-item color and visibility, AI-generated material breakdowns, AI room auto-detect
- **Estimating** — cost-plus-20% business rule, line items with per-line bid status, price verification against historical data and AI, Takeoff import (pull measured quantities directly into priced lines), Requirements panel
- **Bidding** — Send-for-Bid with an explicit review step (scope, due date, message) before sending, per-bid messaging thread, sub response intake, approval flows back to the originating estimate line automatically
- **Gatekeeper** — approval queue for key actions (deposits, change orders, etc.)
- **Change Orders, Jobs, Scheduling, Daily Logs, Documents, Command Center** — pre-existing modules, not modified in the recent work described below unless noted

## Critical business rules (locked)

- Cost-plus 20% contractor fee (excluding permits)
- 8% NY sales tax on materials only, never labor/subs/permits
- $5,000 deposit required before site visits or proposal work
- Nothing is ever removed from the product, only added — the original built system is the minimum baseline

## Current AI usage

All AI calls route through `/api/claude.js`, a server-side proxy that reads the API key from an environment variable — never exposed client-side. Used for: material breakdowns, price estimates, bid sanity checks, call-intelligence extraction, room auto-detection, line-item suggestions.

**Known open item:** AI-dependent features have been observed failing in at least one session, most likely due to `ANTHROPIC_API_KEY` not being configured (or lacking credits) specifically on the `leadflow-corestone` Vercel project. This was not independently re-verified as part of this audit — it requires checking Vercel's environment variables directly, which this sandbox cannot access.

## Current data layer

Real Neon Postgres database (`neon-cerulean-lantern`), connected via Vercel. A generic `app_data` table (table_name, JSONB data) backs the existing `StorageAdapter` pattern the whole app was already built on — every module's data now syncs to the real database in the background while keeping instant localStorage writes, with hydration on load for cross-device access. Plan files (PDFs/images) themselves remain browser-local (IndexedDB) — not yet synced; this is a known, previously flagged gap (large-file storage needs a dedicated service like Vercel Blob, not the JSON API used for everything else).

## What this document is not

This is not a claim that the product is feature-complete or bug-free. It is a factual snapshot, prepared for review, of what exists and how it fits together. Specific known gaps (AI credentials, plan file sync, several items on an active build list covering rough estimating, cost codes, taxable flags, bulk actions, Excel import) are tracked separately and intentionally not hidden here.
