# 2026-06-27 — Homepage house-rules source slips

## Summary

The homepage House rules cards now render their rule cues as real source-backed paper slips instead of keeping the visible corner cue as a repeated CSS-only `kept close` stamp.

## Satisfaction check

- Target: Homepage House rules rule-card cue labels.
- State before: Partially satisfied. The section was already a paper docket, but each rule card still repeated the same generic pseudo-element label.
- State after: More satisfied. Each card now exposes the specific rule frame label from `app/page.jsx` as a clipped paper slip: `Paper leads`, `Human words`, and `Honest growth`.

## Files changed

- `app/page.jsx`
- `app/layout.jsx`
- `app/home-house-rules-source-slips-pass.css`

## Why

This keeps the homepage aligned with the data-backed cue, paper-first material, text-snippet, flattened hierarchy, and honest public-room guidance without inventing new content, routes, products, photos, or private context.

## Related items

- PAGE-001
- COMP-004
- COMP-008
- DESIGN-006
- DESIGN-015
- DESIGN-019
- DESIGN-022
- DESIGN-024
- DESIGN-029
- DESIGN-030
- LESSON-001
- LESSON-002
- LESSON-015
- LESSON-019
- LESSON-022
- LESSON-024
- LESSON-025
- METRIC-001
- METRIC-002
- METRIC-014
- METRIC-018
- METRIC-021
- METRIC-023
- METRIC-028
- METRIC-029
