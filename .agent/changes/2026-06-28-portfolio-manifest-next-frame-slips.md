# Portfolio Manifest Next-Frame Slips

Timestamp: 2026-06-28 23:31 ET

## Source-of-truth basis

Read the required Website source-of-truth files, including active lessons, the source-review lesson supplement, semantic index, feedback log/inbox, workflow-packets README, and the existing Portfolio manifest matrix.

## Workflow packet check

Checked `.agent/feedback/workflow-packets/`. The connector resolved the README and no named unresolved packet appeared in repository search, so no workflow/process repair blocked this visual implementation pass.

## Satisfaction check

- Target: Portfolio project manifest cards should use one data source and visibly explain what each named shell needs next.
- State before: partially satisfied. A single `app/portfolio-projects.js` manifest existed and rendered named shells, but the visible cards only carried title, lane, state, and cue.
- State after: partially satisfied, improved. Each manifest record now includes a `nextNeed` field, and the Portfolio page renders it as a small clipped “Next public frame” slip inside each project manifest card.

## Public Website change

- Updated `app/portfolio-projects.js` so the manifest owns the next public framing need for every named shell.
- Updated `app/portfolio/page.jsx` to render `project.nextNeed` from the manifest inside each manifest card.
- Updated `app/portfolio-project-manifest-pass.css` to style the new next-frame slip as a small paper fragment, preserving the existing manifest shelf instead of adding a new override pass.

## Public boundary

The new field names only broad public framing needs such as “route premise,” “system role,” or “character frame.” It does not add fake screenshots, live links, client claims, finished case studies, or unavailable assets.

## Affected IDs

- PAGE-004
- COMP-008
- DATA-011
- DESIGN-019
- DESIGN-021
- DESIGN-022
- DESIGN-030
- LESSON-018
- LESSON-019
- LESSON-021
- LESSON-022
- LESSON-024
- LESSON-038
- LESSON-039
- METRIC-018
- METRIC-020
- METRIC-021
- METRIC-023
- METRIC-029
- METRIC-030

## Render impact

The rendered Portfolio page should visibly change in the Project manifest shelf: each project shell card now includes a small “Next public frame” paper slip with manifest-backed readiness text.
