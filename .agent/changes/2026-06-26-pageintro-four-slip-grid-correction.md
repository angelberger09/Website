# 2026-06-26 — PageIntro four-slip grid correction

## Source-of-truth basis

This pass followed the feedback-alignment harness and used current `.agent` state instead of inventing a new visual direction.

## Mismatch

The shared `PageIntro` data in `app/site-chrome.jsx` renders four room-shelf slips for each route: `Open`, `Read`, `Trust`, and `Continue`. The active trust-spine matrix also defines the desired four-part rhythm as hero board, featured shelf, source note, and next path.

However, `app/page-intro-calm-focus-pass.css` still described the shelf as a three-step path and forced `grid-template-columns: repeat(3, minmax(0, 1fr))`. That made the fourth rendered slip feel like an accidental extra cue instead of part of the intentional room model.

## Satisfaction state

Partially satisfied → refined.

## Visible Website change

Updated `app/page-intro-calm-focus-pass.css` so the shared PageIntro room shelf now lays out as:

- four compact slips on desktop,
- two-by-two slips on narrower route intros,
- one stacked slip per row on small screens.

The correction keeps the existing content, routes, accessibility labels, and trust/source semantics. It does not add a new cue rail, fake content, fake product imagery, or private material.

## Public source files changed

- `app/page-intro-calm-focus-pass.css`

## `.agent` files changed afterward

- `.agent/matrices/page-intro-trust-spine.matrix.md`
- `.agent/changes/2026-06-26-pageintro-four-slip-grid-correction.md`

## Related items

- PAGE-002
- PAGE-003
- PAGE-003B
- PAGE-004
- PAGE-005
- COMP-005
- COMP-005A
- DESIGN-018
- DESIGN-019
- DESIGN-021
- DESIGN-022
- DESIGN-023
- DESIGN-029
- LESSON-018
- LESSON-019
- LESSON-021
- LESSON-022
- LESSON-023
- METRIC-017
- METRIC-018
- METRIC-020
- METRIC-021
- METRIC-022
- METRIC-029
