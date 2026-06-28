# 2026-06-27 — Store feed article rule slips

## Interface change

Updated `app/store-feed-shelf-docket-pass.css` so the current Store future-shelf rule markup, `.store-feed-rule-slip`, receives the visible clipped paper-slip treatment.

## Why

The Store feed boundary rules had already moved from older list-item markup to source-backed `article` slips in `app/store/page.jsx`, but the loaded shelf docket CSS still primarily targeted `li`. That left the boundary rules partially satisfied: the data-backed labels existed, but the articles could miss the stronger paper-slip styling that proves the public boundary is a placed, readable Store surface.

This pass keeps the same public-safe no-fake-inventory copy and future Store feed contract while making the rendered article slips visibly match the paper/collage system.

## Files changed

- `app/store-feed-shelf-docket-pass.css`

## Related semantic items

- PAGE-005
- COMP-008
- DESIGN-015
- DESIGN-019
- DESIGN-022
- DESIGN-024
- DESIGN-028
- DESIGN-029
- DESIGN-030
- LESSON-002
- LESSON-004
- LESSON-015
- LESSON-019
- LESSON-022
- LESSON-024
- METRIC-002
- METRIC-014
- METRIC-018
- METRIC-021
- METRIC-023
- METRIC-027
- METRIC-028
- METRIC-029
