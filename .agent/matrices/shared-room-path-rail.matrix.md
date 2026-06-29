# Shared Room Path Rail Matrix

## Item

Shared major-page shell path rail.

## Public files

- `app/shared-room-path-rail-pass.css`
- `app/layout.jsx`

## Change summary

The shared `.site-shell.page-layout` surface now receives a consistent left-edge paper rail on major Website routes. The rail uses existing grain and scratch assets, clipped paper shape, subtle shadow depth, and mobile-safe fallback to help the filled pages read as connected public rooms rather than isolated page stacks.

## Satisfaction state

Partially satisfied → refined.

## Affected semantic IDs

- PAGE-002 About
- PAGE-003 Notes
- PAGE-003A Notes Post Reader
- PAGE-003B Blog Compatibility Routes
- PAGE-004 Portfolio
- PAGE-005 Store
- COMP-005 Shared Site Chrome
- COMP-008 Filled Page Sections
- DESIGN-018 Visitor Continuity Bands
- DESIGN-019 Paper Material Authenticity
- DESIGN-022 Paper Piece Card Surfaces
- DESIGN-024 Torn Edge Card Silhouettes
- DESIGN-026 Section Paper Fields
- DESIGN-027 Grainy Root Paper
- DESIGN-029 Flattened Paper Hierarchy
- DESIGN-030 Text Paper Snippets
- LESSON-018 Fill Public Pages As Useful Rooms
- LESSON-019 Make Paper Material Feel Primary
- LESSON-022 Make Shared Cards Read As Paper Pieces
- LESSON-024 Use Torn-Edge Card Silhouettes Instead Of Rounded Corners
- METRIC-017 Filled Page Continuity
- METRIC-018 Paper Material Reads First
- METRIC-021 Paper Cards Not UI Cards
- METRIC-023 Torn Edge Card Silhouette
- METRIC-025 Section Background Has Presence
- METRIC-026 Root Reads As Grainy Paper
- METRIC-028 Hierarchy Is Flat And Editorial
- METRIC-029 Text Lives In Paper Snippets

## Validation notes

- Implementation remains inside `angelberger09/Website`.
- No content inventory, notes, project case studies, screenshots, or product availability claims were invented.
- The visible interface should change on major `.site-shell.page-layout` routes.
- The rail is decorative and pointer-events disabled, so it should not intercept navigation or reader links.
