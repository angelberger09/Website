# Performance budget follow-up

Timestamp: 2026-06-25 06:29 ET

## Intent

Keep visible Website progress aligned with the performance-budget feedback after newer paper/collage passes were added.

## Mismatch found

The project memory says `app/performance-budget-pass.css` should be imported last so expensive visual patterns remain centralized and limited. Current `app/layout.jsx` had newer `page-intro` and `footer` visual passes loading after the performance budget, meaning later surfaces could bypass the budget.

The budget also did not cover newer rendered paper pieces added after the original pass, including homepage paper cards, Notes reader cards/sheets, continuity trail steps, and the paper footer slips.

## Website source changed

- `app/layout.jsx`
- `app/performance-budget-pass.css`

## Visible interface change

The performance budget now loads after every visual pass and standardizes newer paper/collage pieces onto a cheaper shared paper cut/background/shadow treatment.

Affected visible surfaces include:

- homepage front-room notes, room slips, route doors, and pillar notes,
- Notes note cards, source cards, state/support notes, and post reader sheet,
- shared continuity trail links,
- shared footer mark and nav slips,
- existing shared card and Store paper surfaces.

The page should still read as paper/collage, but the repeated card-like surfaces should look slightly cleaner, less over-layered, and more consistent because the final budget pass now wins again.

## Agent records changed

- `.agent/matrices/quality-metrics.matrix.md`
- `.agent/changes/2026-06-25-performance-budget-followup.md`

## Related items

- COMP-005 Shared Site Chrome
- COMP-008 Filled Page Sections
- COMP-009 Next Step Band
- DESIGN-019 Paper Material Authenticity
- DESIGN-022 Paper Piece Card Surfaces
- METRIC-007 Alive But Not Busy
- METRIC-018 Paper Material Reads First
- METRIC-021 Paper Cards Not UI Cards

## Follow-up

Review the deployed site at scroll speed. Future visual passes should be inserted before the performance budget or explicitly update the budget when they add new repeated paper/card selectors.
