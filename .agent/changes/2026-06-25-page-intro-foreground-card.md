# 2026-06-25 21:25 ET — PageIntro foreground card fix

## Changed

- Added `app/page-intro-foreground-card-pass.css` as a final shared PageIntro correction.
- Imported the pass from `app/layout.jsx` after the existing performance, header, footer, and PageIntro passes.
- Kept the route intro paper/photo card in the foreground so it reads as an intentional content card instead of a random decal behind the page title.
- Reduced the frame/backing opacity and put the readable card above the polaroid material layers while preserving the paper/photo motif.

## Why

The current route intro screenshot showed the PageIntro visual card sitting behind the title area like background decoration. That directly conflicts with the active rule that photo/polaroid centers should carry readable page content and should not be left as random backing decals.

## Related items

- COMP-005
- DESIGN-019
- DESIGN-021
- DESIGN-022
- LESSON-019
- LESSON-021
- LESSON-022
- METRIC-020
- METRIC-021
