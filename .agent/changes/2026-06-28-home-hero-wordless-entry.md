# 2026-06-28 11:03 ET — Homepage hero wordless entry

## Changed

- Removed the visible homepage hero poster wording from `app/page.jsx`:
  - `Soft Strange Studio` kicker
  - `Welcome / To / Soft Strange Studio` title list
  - welcome support slip
  - arrival cue ticket
  - Open rooms side card
- Kept an accessible screen-reader-only `h1` so the page still has a semantic title without showing hero wording.
- Kept the room-choice navigation as the only visible first-screen hero content.
- Removed the failed `app/home-hero-ux-entry-board-pass.css` load from `app/layout.jsx`.
- Added and loaded `app/home-hero-wordless-entry-pass.css` after the current front-desk hero pass so it overrides older hero-wording layout rules.

## Why

Angel said to get rid of all hero wording after the visible implementation still felt broken and over-composed. The corrected direction is to stop making the first screen carry a giant hero message and let it behave as a quiet room-choice entry surface.

## Satisfaction state

Partially satisfied. The visible hero wording is removed from the homepage first screen, while semantic page structure is preserved for accessibility. The homepage still needs visual validation after deployment because many older hero CSS passes remain in the stylesheet graph.

## Related items

- PAGE-001
- COMP-003
- COMP-004
- DESIGN-002
- DESIGN-014
- DESIGN-019
- DESIGN-021
- DESIGN-022
- DESIGN-029
- DESIGN-030
- LESSON-001
- LESSON-002
- LESSON-018
- LESSON-019
- LESSON-021
- LESSON-022
- LESSON-025
- METRIC-001
- METRIC-002
- METRIC-017
- METRIC-018
- METRIC-020
- METRIC-021
- METRIC-028
- METRIC-029
- METRIC-032

## Validation guidance

After deployment, check `/Website/` at laptop size. The first screen should no longer show the oversized hero phrase or support copy; it should show a compact paper entry surface with the studio room choices.
