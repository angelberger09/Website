# 2026-06-24 21:38 ET — PageIntro style ownership cleanup

## Changed

- Moved the shared `PageIntro` subtitle style object in `app/site-chrome.jsx` out of the JSX tree and into a named `pageIntroTitleStyle` constant.
- Updated `.agent/matrices/components.matrix.md` to record that COMP-005 now has a clearer style ownership path for LESSON-023 and METRIC-022.

## Why

The previous pass satisfied the visual subtitle requirement, but the style lived as an inline object inside the rendered `h1`. This small cleanup keeps the same public Website appearance while making the shared subtitle treatment easier to find, reason about, and later move into the CSS system without re-opening the visual decision.

## Satisfaction state

Partially satisfied: the one-line subtitle visual rule remains satisfied, and style ownership is slightly clearer. A future broader CSS pass may still move the named style into `app/globals.css` when that is useful.

## Related items

- COMP-005
- DESIGN-006
- LESSON-023
- METRIC-022
