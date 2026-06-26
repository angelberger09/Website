# Store checklist direct cues

Timestamp: 2026-06-26 13:39 ET

## Source-of-truth basis

Read the required Website source-of-truth files and current `.agent` feedback/lesson/matrix state before implementation. The active guidance still asks filled pages to reduce decorative numbering, use direct labels, put supporting text into paper snippets, and keep Store surfaces honest without fake inventory.

## Satisfaction classification

Partially satisfied.

## Mismatch

The Store launch checklist already rendered as taped paper notes with abstract visual centers, but each note still carried a decorative numeric pin. That left one visible checklist surface less aligned with direct-label and paper-snippet guidance.

## Interface change

Added `app/store-checklist-direct-cues-pass.css` and loaded it from `app/layout.jsx`. The pass replaces the visible numeric pins on the three Store checklist notes with clipped paper cues:

- `Source ready`
- `Delivery note`
- `Ready link`

The change preserves the existing checklist copy, Store readiness data, and no-fake-inventory boundary.

## Affected semantic items

- PAGE-005
- COMP-008
- DESIGN-015
- DESIGN-019
- DESIGN-022
- DESIGN-030
- DESIGN-032
- LESSON-015
- LESSON-018
- LESSON-019
- LESSON-022
- METRIC-014
- METRIC-017
- METRIC-018
- METRIC-021
- METRIC-029
- METRIC-031
