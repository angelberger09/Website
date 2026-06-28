# Homepage Front Room Highlight Ledger Matrix

## Semantic target

- PAGE-001 — Homepage
- COMP-003 — Scroll Title Sequence / homepage arrival path
- COMP-004 — Studio Page Cards
- COMP-008 — Filled Page Sections

## Implementation

- Public source: `app/home-front-room-highlight-ledger-pass.css`
- Loader: `app/layout.jsx`
- Surface: `.home-note-board--highlights` and nested `.home-note-piece` highlight cards

## In-bounds mismatch

The front-room highlight notes were already public-safe and useful, but the cluster still scanned as neighboring note cards rather than one composed opening ledger for the homepage room.

## Visible correction

The pass adds a shared paper backing, `front room ledger` label, stronger material shadow, connecting edge tabs, tighter stagger, and mobile fallback so the first highlight set reads as one calmer bound surface while preserving the existing copy and route structure.

## Satisfaction state

Partially satisfied. The homepage had paper pieces, but this front-room cluster needed a clearer shared ledger read.

## Related lessons

- LESSON-001 — Make homepage feel authored
- LESSON-002 — Use human-facing copy
- LESSON-019 — Make paper material feel primary
- LESSON-022 — Make shared cards read as paper pieces
- LESSON-024 — Use torn-edge card silhouettes instead of rounded corners
- LESSON-025 — Render photo centers instead of background decals

## Related metrics

- METRIC-001 — Authored Studio Feel
- METRIC-002 — Human-Facing Copy
- METRIC-018 — Paper Material Reads First
- METRIC-021 — Paper Cards Not UI Cards
- METRIC-023 — Torn Edge Card Silhouette
- METRIC-027 — Paper Feels Crinkled
- METRIC-028 — Hierarchy Is Flat And Editorial
- METRIC-029 — Text Lives In Paper Snippets
- METRIC-030 — Content Uses Photo/Image Surfaces

## Public-safety boundary

No fake products, fake posts, fake portfolio work, fake photos, private content, or raw private context were added. The change is CSS-only plus loader wiring.
