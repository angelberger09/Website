# Shared Room Section Binding Tabs Matrix

## Item

Shared major-route section binding tabs.

## Public files

- `app/shared-room-path-rail-pass.css`

## Change summary

The existing shared room rail stylesheet now styles major `.site-shell.page-layout .studio-pages[id]` sections with small punched paper binding tabs. These tabs visually connect each long room section to the fixed shared room path rail, making About, Notes, Portfolio, Store, and compatibility routes feel less like disconnected stacked boards.

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
- DESIGN-029 Flattened Paper Hierarchy
- DESIGN-030 Text Paper Snippets
- LESSON-019 Make Paper Material Feel Primary
- LESSON-022 Make Shared Cards Read As Paper Pieces
- LESSON-024 Use Torn-Edge Card Silhouettes Instead Of Rounded Corners
- LESSON-033 No Stacked Override Passes
- LESSON-034 Pages Are Rooms, Not Piles Of Cards
- LESSON-039 Visible Change Required For Implementation Runs
- METRIC-017 Filled Page Continuity
- METRIC-018 Paper Material Reads First
- METRIC-021 Paper Cards Not UI Cards
- METRIC-023 Torn Edge Card Silhouette
- METRIC-027 Lifted Paper Depth
- METRIC-028 Hierarchy Is Flat And Editorial
- METRIC-029 Text Lives In Paper Snippets

## Validation notes

- Implementation remains inside `angelberger09/Website`.
- Existing shared stylesheet was refined rather than adding a new stacked override file.
- The decorative tabs use pseudo-elements, pointer-events disabled, and a mobile hide rule to preserve routing, readability, and touch behavior.
- The rendered interface should visibly change on major route sections that use `.site-shell.page-layout .studio-pages[id]`.
