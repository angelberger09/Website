# 2026-06-27 — Store preview proof docket

## Source-of-truth files read

- `agent.md`
- `start-here.md`
- `.agent/start-here.md`
- `.agent/memory.md`
- `.agent/feedback/state-alignment.md`
- `.agent/feedback/README.md`
- `.agent/feedback/live-website-validation.md`
- `.agent/feedback/intake-protocol.md`
- `.agent/feedback/extraction-rubric.md`
- `.agent/feedback/feedback-to-lesson-workflow.md`
- `.agent/feedback/feedback-log.md`
- `.agent/feedback/feedback-inbox.md`
- `.agent/lessons/active-lessons.md`
- `.agent/lessons/lesson-log.md`
- `.agent/matrices/semantic-index.md`
- `.agent/matrices/pages.matrix.md`
- `.agent/matrices/quality-metrics.matrix.md`
- `.agent/matrices/store-preview-proof-rail.matrix.md`
- `.agent/changes/change-log.md`

## Satisfaction check

- Target: Store preview board proof rail on `/Website/store/`.
- State before this pass: partially satisfied.
- Mismatch: the preview rail had honest staged paper/photo cards, but the card image centers still needed more direct in-surface cueing so they would read as a bound proof docket rather than possible product imagery.
- Boundary: do not add fake products, fake product photos, live inventory claims, shop links, or private planning content.

## Website change

Updated `app/store-preview-proof-rail-pass.css` to strengthen the existing Store preview board with:

- a larger clipped paper backing sheet behind the whole proof board;
- stronger paper-field depth on the preview rail;
- direct clipped cue slips inside each staged visual center: `not inventory`, `proof only`, and `public later`;
- mobile-safe sizing for the new cue slips.

## Why

This keeps the Store page aligned with the paper-first, photo-led, snippet-based, flattened room structure while making the no-fake-inventory boundary visible inside the preview visuals themselves.

## Files changed

### Public Website source

- `app/store-preview-proof-rail-pass.css`

### `.agent` ledger

- `.agent/changes/2026-06-27-store-preview-proof-docket.md`
- `.agent/matrices/store-preview-proof-rail.matrix.md`

## Related IDs

- `PAGE-005`
- `COMP-008`
- `DESIGN-019`
- `DESIGN-021`
- `DESIGN-022`
- `DESIGN-024`
- `DESIGN-029`
- `DESIGN-030`
- `DESIGN-031`
- `LESSON-019`
- `LESSON-021`
- `LESSON-022`
- `LESSON-024`
- `LESSON-025`
- `LESSON-026`
- `METRIC-018`
- `METRIC-020`
- `METRIC-021`
- `METRIC-023`
- `METRIC-028`
- `METRIC-029`
- `METRIC-030`
- `METRIC-032`
