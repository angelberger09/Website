# 2026-06-28 10:56 ET — Homepage hero front-desk repair

## Changed

- Reworked `app/home-hero-front-desk-finish-pass.css` as the final homepage hero repair layer.
- Reduced the first-screen board width and title scale so the hero reads as one usable front desk instead of a large poster.
- Kept the welcome copy, route links, Open rooms card, existing paper assets, and no-fake-content boundaries unchanged.
- Made the desktop contact sheet and Open rooms card smaller and less washed out.
- Added tighter short-viewport rules so the arrival ticket drops before route choices are squeezed or pushed down.

## Why

The previous UX entry board pass improved the intent but still allowed the rendered hero to become too large, washed out, and visually compressed at laptop scale. The active `.agent` direction asks the homepage to prioritize clarity, warmth, orientation, human-readable grouping, and calm paper hierarchy before decorative collage layering.

## Satisfaction state

Partially satisfied and repaired. The homepage hero should now read more calmly above the fold, but the deeper structural cleanup should still happen in a future pass: the hero markup should eventually be simplified into semantic regions with a real `h1`, an intro header, a room-choice nav, and an aside for the Open rooms card instead of continuing to rely on accumulated CSS pass layers.

## Related items

- PAGE-001
- COMP-003
- COMP-004
- DESIGN-002
- DESIGN-014
- DESIGN-019
- DESIGN-021
- DESIGN-022
- DESIGN-029
- DESIGN-030
- LESSON-001
- LESSON-002
- LESSON-018
- LESSON-019
- LESSON-021
- LESSON-022
- LESSON-025
- METRIC-001
- METRIC-002
- METRIC-017
- METRIC-018
- METRIC-020
- METRIC-021
- METRIC-028
- METRIC-029
- METRIC-032

## Validation guidance

After deployment, check `/Website/` around 1280×720, 1440×800, and the wider desktop screenshot size. The studio identity, welcome line, copy slip, route choices, and Open rooms card should be visible as one readable board without the title swallowing the page.
