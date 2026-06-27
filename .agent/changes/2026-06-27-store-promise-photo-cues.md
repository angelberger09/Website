# 2026-06-27 — Store promise photo cues

## Summary

Restored the Store promise note photo centers as real markup so the closing promise docket keeps its content-bearing paper/photo read after the later docket pin styling.

## Satisfaction check

- Target: Store promise notes on `/Website/store/`
- State: partially satisfied
- Mismatch: the Store promise section already had a promise docket and an older photo-center pass, but the later docket CSS reused `.store-promise-note::after` for pins, which made the promised photo centers fragile and effectively too quiet.
- Correction: moved the visual centers into explicit `.store-promise-note__photo` markup with direct public-safe cue labels and styled the existing docket pass so the visual centers, pin, and copy can coexist.

## Public source changed

- `app/store/page.jsx`
- `app/store-promise-docket-pass.css`

## Agent files changed

- `.agent/changes/2026-06-27-store-promise-photo-cues.md`
- `.agent/matrices/store-promise-photo-cues.matrix.md`
- `.agent/changes/change-log.md`

## Affected semantic items

- PAGE-005
- COMP-008
- DESIGN-019
- DESIGN-021
- DESIGN-022
- DESIGN-024
- DESIGN-029
- DESIGN-030
- DESIGN-031
- LESSON-019
- LESSON-021
- LESSON-022
- LESSON-024
- LESSON-025
- LESSON-026
- METRIC-018
- METRIC-020
- METRIC-021
- METRIC-023
- METRIC-028
- METRIC-029
- METRIC-030
- METRIC-032

## Public-safety note

No fake products, fake listings, fake product photos, external shop links, private planning details, or unavailable inventory were added. The new visual centers are abstract paper/photo cues tied to existing public Store promise copy.
