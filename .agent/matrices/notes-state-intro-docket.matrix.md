# Notes State Intro Docket Matrix

## Item

- Name: Notes state intro docket
- Public source: `app/notes-state-intro-docket-pass.css`, `app/layout.jsx`
- Route: `/Website/notes/`, `/Website/blog/`
- Status: active

## Purpose

Make the Notes reader-behavior intro visibly behave like part of the paper room system instead of plain heading copy above an otherwise paper-like state tray.

## Underlying goal

Reader states should feel clear, calm, and physically placed in the Notes room. The intro should frame loading, unavailable, and public-only behavior as a small state path, not as a detached UI label.

## Boundary

- Keep the existing public-safe Notes copy.
- Do not invent private notes, fake posts, screenshots, or unavailable content.
- Do not add heavy motion or noisy effects that hurt readability.
- Preserve mobile and reduced-motion behavior.

## Satisfaction state

Partially satisfied → refined.

The cards and cue slips were already tactile; this pass makes the intro itself a composed paper docket with a backing field, title sheet, eyebrow slip, and status-path slip.

## Affected semantic items

- PAGE-003 — Notes
- PAGE-003B — Blog Compatibility Routes
- COMP-006 — Notes Reader Client
- COMP-008 — Filled Page Sections
- DESIGN-019 — Paper Material Authenticity
- DESIGN-022 — Paper Piece Card Surfaces
- DESIGN-024 — Torn Edge Card Silhouettes
- DESIGN-028 — Crinkled Paper Material
- DESIGN-029 — Flattened Paper Hierarchy
- DESIGN-030 — Text Paper Snippets
- LESSON-002 — Use Human-Facing Copy
- LESSON-019 — Make Paper Material Feel Primary
- LESSON-022 — Make Shared Cards Read As Paper Pieces
- LESSON-024 — Use Torn-Edge Card Silhouettes Instead Of Rounded Corners
- METRIC-002 — Human-Facing Copy
- METRIC-018 — Paper Material Reads First
- METRIC-021 — Paper Cards Not UI Cards
- METRIC-023 — Torn Edge Card Silhouette
- METRIC-028 — Hierarchy Is Flat And Editorial
- METRIC-029 — Text Lives In Paper Snippets

## Quality check

The rendered Notes state section should now show a stronger paper-docket heading with tactile grain, uneven edges, and a readable state-path slip before the state cards.
