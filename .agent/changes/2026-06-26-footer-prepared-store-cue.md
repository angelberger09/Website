# Footer prepared Store cue

Date: 2026-06-26 19:40 ET

## Changed

- Updated `app/site-footer-nav.jsx` so the shared footer trail Store photo cue reads `Prep` instead of `Shop`.
- Updated the active Store footer state from `Current store path` to `Current prepared store path`.
- Preserved the same Store route link, footer nav structure, active route detection, and accessible `aria-current` behavior.

## Why

The Store page is intentionally a prepared future-studio path, not a live shop or product inventory. Current public-safety, direct-navigation, and no-fake-inventory guidance supports keeping the footer route visible while making its compact paper/photo cue avoid implying open shop links.

## Satisfaction state

Partially satisfied. The shared footer already had useful paper route receipts and a direct nav trail, but the compact Store cue still used shop language. This pass makes that footer cue match the prepared Store boundary.

## Related items

- PAGE-005
- COMP-002
- COMP-005
- DESIGN-006
- DESIGN-015
- DESIGN-018
- DESIGN-021
- LESSON-002
- LESSON-004
- LESSON-015
- LESSON-018
- LESSON-025
- METRIC-002
- METRIC-014
- METRIC-017
- METRIC-020
