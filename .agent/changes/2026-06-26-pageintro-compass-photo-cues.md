# 2026-06-26 — PageIntro compass photo cues

## Changed

- Refined `app/page-intro-room-compass-pass.css` so the shared PageIntro room compass now renders each Open / Look for / Leave by slip as a small paper/photo cue card.
- Added direct abstract cue faces for `Door`, `Map`, and `Path` through CSS pseudo-elements, preserving the existing accessible text from `app/site-chrome.jsx`.
- Kept the change shared and responsive so About, Notes, Portfolio, Store, and Blog compatibility route intros inherit the stronger room-orientation treatment without inventing fake screenshots, portfolio work, product photos, or private material.

## Why

The active room-structure, paper/photo, and content-bearing-card lessons were only partially satisfied in the shared route intro: the PageIntro room compass was useful, but it still read mostly like text slips beside the photo stack. The visible Website needed that shared compass to feel more like the rest of the composed paper/photo room system while keeping navigation and copy truthful.

## Related items

- COMP-005
- DESIGN-019
- DESIGN-021
- DESIGN-022
- DESIGN-025
- DESIGN-030
- DESIGN-031
- LESSON-019
- LESSON-021
- LESSON-022
- LESSON-025
- LESSON-026
- METRIC-018
- METRIC-020
- METRIC-021
- METRIC-024
- METRIC-029
- METRIC-030
