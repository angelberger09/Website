# 2026-06-28 11:42 ET — Homepage wordless hero load repair

## Changed

- Reconnected `app/home-hero-wordless-entry-pass.css` in `app/layout.jsx` so the active homepage wordless hero treatment actually loads into the rendered Website.
- Reconnected `app/home-room-choice-left-depth-pass.css` in `app/layout.jsx` so the room-choice board receives the supported left-docked paper-depth refinement.
- Kept homepage copy, route links, public-safe data, and the screen-reader-only homepage title unchanged.

## Why

The current homepage source already uses `scroll-title--quiet`, `title-lockup--entry-only`, and `home-hero-sr`, and the matrix recorded the wordless hero/left-depth pass as active. The stylesheet graph had drifted and no longer imported those two passes, so the intended visible correction could fail to render even though the CSS files existed.

## Satisfaction state

Partially satisfied. This pass repairs the rendering connection for the already-supported homepage hero direction. The next validation pass should confirm the deployed `/Website/` first screen shows only the compact room-choice board, not inherited poster wording or the old front-desk label.

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
- DESIGN-031
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
- METRIC-030
- METRIC-032
