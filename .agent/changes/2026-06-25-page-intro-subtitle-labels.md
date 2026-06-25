# PageIntro subtitle labels

Timestamp: 2026-06-25 05:31 ET

## Intent

Apply the active PageIntro subtitle rule as a visible shared Website interface change.

## Mismatch

The route intro titles were already short, but the shared `PageIntro` title treatment still lived as an inline style in `app/site-chrome.jsx`. That made the titles less reusable and still visually close to the route hero-heading system rather than a clearly subordinate subtitle label.

## Satisfaction state

Partially satisfied.

## Website source changed

- `app/site-chrome.jsx`
- `app/layout.jsx`
- `app/page-intro-subtitle-pass.css`

## Visible result

Major route intros now render their titles with a named `page-hero__subtitle` class. The new CSS pass makes the title a smaller clipped paper label with lighter weight, one-line behavior on larger screens, paper texture, and a soft lifted shadow. This should visibly affect About, Notes, Portfolio, Store, and Blog compatibility route intros that use `PageIntro`.

## Agent records changed

- `.agent/matrices/pages.matrix.md`
- `.agent/matrices/components.matrix.md`
- `.agent/matrices/quality-metrics.matrix.md`
- `.agent/changes/2026-06-25-page-intro-subtitle-labels.md`

## Related items

- PAGE-002
- PAGE-003
- PAGE-003B
- PAGE-004
- PAGE-005
- COMP-005
- DESIGN-023
- DESIGN-030
- LESSON-023
- METRIC-022

## Follow-up

Review the deployed routes at screenshot scale. The title should read as a supportive subtitle label beneath the route eyebrow, not as a second homepage-style hero headline.
