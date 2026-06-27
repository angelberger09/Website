# 2026-06-27 — About principle sequence ledger

## Summary

Added a visible About working-principles refinement that binds the three principle notes into one `promise ledger` sequence instead of leaving them to scan as separate paper cards.

## Public Website change

- Added `app/about-principle-sequence-ledger-pass.css`.
- Loaded it through `app/about-principles-promise-docket-pass.css`, which is already imported by `app/layout.jsx`.
- Added a shared clipped paper backing field, top `promise ledger` label, horizontal/vertical stitch thread, direct note cue slips (`human first`, `public only`, `clear doors`), and mobile/reduced-motion fallbacks.

## Why

The About working-principles board already had a stronger heading docket, but the individual principle notes could still read as three neighboring cards. This pass makes the section visibly closer to the calm-room, paper-first, flattened-hierarchy, text-snippet, and section-background goals without changing public copy, routes, accessibility labels, source data, or inventing private/fake content.

## Affected semantic items

- PAGE-002
- COMP-008
- DESIGN-019
- DESIGN-022
- DESIGN-024
- DESIGN-026
- DESIGN-028
- DESIGN-029
- DESIGN-030
- LESSON-019
- LESSON-022
- LESSON-024
- METRIC-018
- METRIC-021
- METRIC-023
- METRIC-025
- METRIC-028
- METRIC-029

## Satisfaction check

- Before: partially satisfied — the heading docket was strong, but the principle notes still scanned as separate cards.
- After: partially satisfied, improved — the note group now has a shared promise-ledger surface and direct cue slips while staying public-safe and readable.
