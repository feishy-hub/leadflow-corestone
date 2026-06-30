CORESTONE ARCHITECTURE DIRECTIVE — ENTERPRISE OBJECT MODEL, VISIBILITY ENGINE & PROPOSAL SYSTEM

Before implementing anything in this request:

Review CORESTONE_BLUEPRINT.md, CORESTONE_COMPLETE_MASTER.md, and all previous architecture discussions.
Verify whether these concepts were already discussed or partially implemented.
Do not duplicate or replace existing architecture.
Extend and complete the architecture where necessary.
Update the Blueprint first, then implement.
OBJECT MODEL

Corestone must never think in terms of individual pages.

Corestone must think in terms of Business Objects.

Examples:

Lead
Client
Contact
Property
Project
Estimate
Estimate Item
Proposal
Budget
Bid Package
Vendor Quote
Subcontractor
Purchase Order
Schedule
Task
Change Order
Daily Log
Inspection
Invoice
Payment
RFI
Selection
Photo
Video
Voice Recording
Drawing
Document
Plan
Message
Comment

Each object exists once.

Everything else is simply another view of that same object.

ESTIMATE ITEM

An estimate line is not just a row.

It is a complete business object.

It should contain, when applicable:

Description
Trade
CSI Category
Scope
Quantity
Unit
Unit Cost
Budget Cost
Selling Price
Markup
Tax
Labor
Material
Equipment
Vendor Bids
Historical Costs
AI Suggested Cost
Internal Notes
Client Notes
Photos
Plans
Takeoff References
Specifications
Tasks
RFIs
Change Orders
Messages
Attachments
History
AI Confidence Score
PRICING METHOD

When creating a project, Corestone should ask for the pricing model.

Examples:

Cost Plus / Open Book
Fixed Price
Time & Material
Design-Build
Guaranteed Maximum Price (GMP)

This decision affects the entire workflow.

ESTIMATING

Each estimate item must support multiple pricing methods.

Examples:

Vendor Bid
Budget Allowance
Manual Entry
Historical Cost
AI Estimated
Cost Database
Multiple Vendor Comparison

The estimator chooses which method applies.

PROPOSAL GENERATION

The Proposal must be generated dynamically.

The owner should decide exactly what the client sees.

Every section should have a visibility checkbox.

Examples:

☑ Cover Page
☑ Company Story
☑ Scope of Work
☑ Schedule
☑ Timeline
☑ Payment Schedule
☑ Material Selections
☑ Product Photos
☑ Allowances
☑ Warranty
☑ References
☑ Team
☑ Daily Communication
☑ Optional Upgrades
☐ Internal Notes
☐ Vendor Costs
☐ AI Notes
☐ Internal Markup
☐ Internal Scope

Nothing should require duplicate proposals.

One proposal.

Different visibility.

VISIBILITY ENGINE

Visibility must exist at every level.

Every object.

Every field.

Every note.

Every attachment.

Every photo.

Every document.

Every AI recommendation.

Every cost.

Every markup.

Every section.

Every button.

Every action.

Visibility should be configurable for:

Owner
Administrator
Office
Estimator
Project Manager
Superintendent
Accounting
Client
Architect
Engineer
Inspector
Vendor
Subcontractor
Future Roles

The same object should render differently depending on permissions.

USER PORTALS

Each role should have its own experience generated from the same underlying data.

Examples:

Client Portal

Proposal
Approved Change Orders
Progress Photos
Schedule
Invoices
Payments
Messages
Warranty

Subcontractor Portal

Assigned Scope
Plans
RFIs
Schedule
Purchase Orders
Messages
Files

Accounting Portal

Bills
Invoices
Payments
Lien Waivers
Financial Reports

Project Manager Portal

Tasks
Daily Logs
Schedule
Photos
Change Orders
RFIs
Team Communication

Management Dashboard

Everything.

No duplicate systems.

One source of truth.

PREVIEW MODE

Before publishing or sending anything, Corestone should allow:

Preview as Client
Preview as Electrical Subcontractor
Preview as Plumbing Subcontractor
Preview as Architect
Preview as Accounting
Preview as Superintendent
Preview as Vendor
Preview as Owner

The owner should see exactly what that person will see before anything is shared.

AI PRESENTATION

The AI should automatically recommend:

Best cover image
Best project photos
Best renderings
Best plan view
Best finished project examples
Best timeline presentation
Best optional upgrades
Best proposal layout

The owner can always override the recommendation.

PAYMENT INTELLIGENCE

The payment schedule should support milestone billing.

Example:

20% Deposit
Foundation Complete
Framing Complete
Dry-In Complete
MEP Rough Complete
Drywall Complete
Finish Carpentry Complete
Final Completion

When a milestone is completed and approved (according to the configured workflow), Corestone should prepare the corresponding invoice automatically for review. It should not send invoices automatically unless the configured approval process allows it.

RESEARCH REQUIREMENT

Before implementing these features:

Study the best practices used by leading construction platforms (such as Buildertrend, JobTread, Procore, Autodesk Construction Cloud, Contractor Foreman, CoConstruct, Houzz Pro, and similar enterprise systems).

Do not copy them.

Identify their strengths, weaknesses, and limitations.

Design a Corestone architecture that is more flexible, more intelligent, and more scalable while remaining simple for the end user.

FINAL REQUIREMENT

Do not simply implement these requests.

Challenge the design.

Improve it.

Think like:

A construction company president.
An enterprise software architect.
A senior estimator.
A senior project manager.
A UX designer.
A QA director.

If you identify a better enterprise approach than what is described here, present your recommendation first, explain why it is superior, update the Blueprint, and then implement it after approval.

Corestone should become the benchmark for AI-powered construction operating systems, not merely another construction management application.
