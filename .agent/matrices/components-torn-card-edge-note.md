# Components note — torn card edge pass

Timestamp: 2026-06-24 22:45 ET

## Purpose

Record the component-level intent for the shared card edge implementation.

## Component impact

- `COMP-004` Studio Page Cards
- `COMP-005` Shared Site Chrome
- `COMP-006` Notes Reader Client
- `COMP-007` Post Reader Client
- `COMP-008` Filled Page Sections
- `COMP-009` Next Step Band

## Rule

Shared card-like surfaces should not read as rounded UI panels. They should use squared, cut, or torn paper silhouettes with edge shadows and lifted-paper offsets.

## Implementation

The implementation lives in `angelberger09/Website/app/paper-card-pass.css`.

It applies to:

- `.page-card`
- `.detail-card`
- `.source-link`
- `.link-card`
- `.reader-card`
- `.pathway-link`
- `.next-step-band`
- `.reader-state`
- card labels and status/tag pieces

## Related items

- FEEDBACK-011
- LESSON-022
- LESSON-024
- DESIGN-022
- DESIGN-024
- METRIC-021
- METRIC-023
