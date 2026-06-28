# Homepage Hero Entry Ledger Matrix

| Field | Value |
|---|---|
| Matrix ID | `home-hero-entry-ledger` |
| Date | 2026-06-28 |
| Changed public files | `app/home-hero-entry-ledger-pass.css`, `app/layout.jsx` |
| Changed agent files | `.agent/changes/2026-06-28-home-hero-entry-ledger.md`, `.agent/matrices/home-hero-entry-ledger.matrix.md` |
| Primary semantic item | PAGE-001 Homepage |
| Components | COMP-003 Scroll Title Sequence, COMP-004 Studio Page Cards, COMP-008 Filled Page Sections |
| Design patterns | DESIGN-018 Visitor Continuity Bands, DESIGN-019 Paper Material Authenticity, DESIGN-021 Content-Bearing Polaroid Cards, DESIGN-022 Paper Piece Card Surfaces, DESIGN-024 Torn Edge Card Silhouettes, DESIGN-028 Hierarchy Is Flat And Editorial, DESIGN-029 Text Lives In Paper Snippets, DESIGN-030 Content Uses Photo/Image Surfaces |
| Lessons | LESSON-001, LESSON-002, LESSON-018, LESSON-019, LESSON-021, LESSON-022, LESSON-024, LESSON-025, LESSON-026 |
| Metrics | METRIC-001, METRIC-002, METRIC-018, METRIC-020, METRIC-021, METRIC-023, METRIC-028, METRIC-029, METRIC-030 |

## Target classification

Partially satisfied.

## Underlying goal

The homepage first screen should read as a composed studio front door: warm title, public entry cues, and four room choices should form one understandable paper path rather than neighboring loose scraps.

## Boundary

- Stay inside `angelberger09/Website`.
- Do not invent new pages, products, posts, projects, or images.
- Do not remove accessible route links or reduce navigation clarity.
- Keep effects lightweight and CSS-only.

## Quality metric

A visitor should immediately understand that the first-screen slips and route cards belong to one Start here entry ledger. The material should read as paper first, the route cards should remain readable, and the mobile fallback should stay simple.

## Implementation notes

The new CSS pass layers a `front-door ledger` label, entry-cue slip, connector thread, and left binding edge over existing homepage hero markup. It changes only presentation and preserves the existing public-safe content model.
