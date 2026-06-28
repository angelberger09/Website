# 2026-06-27 — Feed receipt terminal budget

## Summary

Added a final shared terminal-budget layer for the newest Store and Portfolio public receipt/seal surfaces.

## Interface change

- Added `app/feed-receipt-terminal-budget-pass.css`.
- Loaded it in `app/layout.jsx` immediately after the Store and Portfolio feed receipt seal passes.
- Calmed receipt/seal shadows, opacity, label spacing, tape marks, card shadows, mobile transforms, and reduced-motion behavior for:
  - Store future feed receipt seals.
  - Store public/private boundary rule slips.
  - Portfolio future archive receipt seals.
  - Portfolio public/private rule slip receipts.

## Why

The Store and Portfolio feed receipt seal passes made their public-safe future-feed boundaries more visible, but those new layers loaded after the earlier terminal budget passes. That made the latest receipt labels and tape marks able to feel heavier than the surrounding calm room system. This pass keeps the public-safety receipt read while making both feed-contract sections quieter, flatter, and more consistent with the terminal paper budget.

## Satisfaction state

Partially satisfied → refined.

## Public-safety boundary

No fake products, fake portfolio projects, fake screenshots, private drafts, or private plans were added. The change only adjusts visible material styling around existing public-safe feed-contract language.

## Related semantic items

- PAGE-004
- PAGE-005
- COMP-008
- DESIGN-019
- DESIGN-022
- DESIGN-024
- DESIGN-029
- DESIGN-030
- LESSON-002
- LESSON-004
- LESSON-018
- LESSON-019
- LESSON-022
- LESSON-024
- METRIC-002
- METRIC-018
- METRIC-021
- METRIC-023
- METRIC-027
- METRIC-028
- METRIC-029
