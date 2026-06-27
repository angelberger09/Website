# Store Preview Proof Rail Matrix

## Semantic item

- ID: `STORE-PREVIEW-PROOF-RAIL`
- Type: design/component refinement
- Location: `app/store-preview-proof-rail-pass.css`, loaded by `app/layout.jsx`
- Page: `PAGE-005`
- Component: `COMP-008`
- Status: active

## Purpose

Make the Store preview board scan as one guided public-safe proof rail rather than loose staged preview cards, while keeping the existing no-fake-inventory boundary intact.

## State alignment

- Current observed state: Store preview cards already had honest staged photo-like centers and copy that clarified they were mood/readiness cues; the existing proof rail improved grouping but still left the staged card centers without direct public-safety cues inside each visual face.
- Desired target state: the preview board should feel like one composed paper/photo proof docket with a backing sheet, stitch/thread cues, direct proof labels, and visible in-card reminders that the staged visuals are not live inventory.
- Correction signal: strengthen the section backing, keep the proof rail, and add direct clipped cue slips to the staged image centers without changing Store copy or implying products are live.
- Internal state impact: supports the active photo-led content, flattened hierarchy, paper-snippet, no-fake-inventory, and paper-first lessons for the Store page.
- Future implementation guidance: when Store surfaces show preparation states, group them as honest proof/shelf/docket sequences with direct in-surface cues instead of repeated independent cards or ambiguous product-like previews.

## Satisfaction check

- Before: partially satisfied.
- After: improved; visually stronger Store preview proof docket with direct staged-center cue slips.
- Rendered Website should change: yes, on `/Website/store/` around the preview board.

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

## Public safety

No fake product photos, live inventory, shop links, private planning notes, or unavailable product claims were added. The change is CSS-only and uses the existing public-safe Store copy/data.