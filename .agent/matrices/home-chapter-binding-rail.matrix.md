# Homepage Chapter Binding Rail Matrix

## Semantic target

- PAGE-001 — Homepage
- COMP-003 — Scroll Title Sequence
- COMP-004 — Studio Page Cards
- COMP-008 — Filled Page Sections
- DESIGN-018 — Visitor Continuity Bands
- DESIGN-019 — Paper Material Authenticity
- DESIGN-022 — Paper Piece Card Surfaces
- DESIGN-024 — Torn Edge Card Silhouettes
- DESIGN-028 — Crinkled Paper Material
- DESIGN-029 — Flattened Paper Hierarchy
- DESIGN-030 — Text Paper Snippets

## Implementation

- Public source file: `app/home-chapter-spine-notes-pass.css`
- Existing loaded pass refined; no new import was added.
- The visible homepage chapter notes now have a stronger left-docked binding rail treatment using the existing rendered `home-docket-step` and `home-docket-note` elements.

## Feedback alignment

- Underlying goal: make the homepage read as a calm, organized studio path rather than scattered paper scraps.
- Boundary: do not invent fake content, add redundant route systems, or create another decorative-only layer.
- Quality metric: visitors should see a clearer left-side chapter rail that binds the long homepage into a human-readable editorial sequence.
- Satisfaction state: partially satisfied, refined.

## Affected lessons and metrics

- LESSON-001 — Make Homepage Feel Authored
- LESSON-002 — Use Human-Facing Copy
- LESSON-018 — Fill Public Pages As Useful Rooms
- LESSON-019 — Make Paper Material Feel Primary
- LESSON-022 — Make Shared Cards Read As Paper Pieces
- LESSON-024 — Use Torn-Edge Card Silhouettes Instead Of Rounded Corners
- LESSON-026 — Use Alternating Scrollable Image Galleries
- METRIC-001 — Homepage feels authored
- METRIC-002 — Copy is human-facing
- METRIC-017 — Filled Page Continuity
- METRIC-018 — Paper Material Reads First
- METRIC-021 — Paper Cards Not UI Cards
- METRIC-023 — Torn Edge Card Silhouette
- METRIC-028 — Hierarchy Is Flat And Editorial
- METRIC-029 — Text Lives In Paper Snippets

## Verification expectation

The rendered homepage should visibly change: each section marker and note should feel more like part of one left-docked paper chapter rail, with clearer focus/target states and mobile fallbacks.
