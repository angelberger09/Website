# 2026-06-27 — Store return docket

## Satisfaction check

- Target: `/Website/store/` local next-room path near the bottom of the Store room.
- State: partially satisfied.
- Reason: the Store path already used honest route links and paper/photo cards, but the two exits still repeated the same visible `Open room` cue and scanned as separate cards instead of one composed return path.

## Visible Website change

- Updated `app/store/page.jsx` so Store next-room photo cards now use distinct public-safe cues: `Archive room` and `Studio map`.
- Added `app/store-return-docket-pass.css` to turn the Store path grid into a return docket with a vertical `return docket` slip, dashed connecting thread, deeper paper-field shadow, direct `next room` / `soft return` card labels, and mobile-safe horizontal fallback.
- Loaded the new pass in `app/layout.jsx` after the existing Store path photo/direct-label passes so it visibly refines the established section instead of replacing it.

## Boundary notes

- No fake products, fake listings, fake photos, live inventory, or private planning details were added.
- Existing route destinations, link hrefs, copy meaning, and accessibility labels were preserved.
- The change is visual/interface-facing and bounded to the Website repo.

## Affected semantic items

- PAGE-005
- COMP-008
- COMP-009
- DESIGN-018
- DESIGN-019
- DESIGN-022
- DESIGN-024
- DESIGN-029
- DESIGN-030
- DESIGN-031
- LESSON-002
- LESSON-018
- LESSON-019
- LESSON-022
- LESSON-024
- LESSON-025
- LESSON-026
- METRIC-002
- METRIC-017
- METRIC-018
- METRIC-021
- METRIC-023
- METRIC-028
- METRIC-029
- METRIC-030
- METRIC-032
