# 2026-06-27 03:31 ET — Homepage hero data-backed room cues

## Changed

- Updated `app/site-data.js` so each top-level `siteNavPages` item carries a public-facing `roomCue` value.
- Updated `app/page.jsx` so the first-screen homepage hero route slips render `page.roomCue` directly instead of repeating `Open room` in source.
- Updated `app/home-entry-contact-sheet-pass.css` so the visible cue text is normal rendered content rather than hidden text replaced by nth-child pseudo-content.

## Why

The homepage hero contact sheet was visually improved by an earlier CSS pass, but the JSX still repeated `Open room` for every route. That made the direct room cues fragile, order-dependent, and less aligned with the direct-label, human-facing, and accessibility goals. This pass keeps the same visible cue language while making it data-backed, source-readable, and safer for future route reuse.

## Satisfaction check

- Target state: partially satisfied.
- Reason: the visible homepage hero cards already displayed distinct room cues, but the underlying source and accessible text still carried repeated generic wording.
- Visible result: the same direct cues should remain visible, now backed by real route data.

## Related items

- PAGE-001
- COMP-003
- COMP-004
- COMP-008
- DESIGN-006
- DESIGN-015
- DESIGN-021
- DESIGN-022
- LESSON-001
- LESSON-002
- LESSON-015
- LESSON-021
- LESSON-022
- METRIC-001
- METRIC-002
- METRIC-014
- METRIC-020
- METRIC-021
