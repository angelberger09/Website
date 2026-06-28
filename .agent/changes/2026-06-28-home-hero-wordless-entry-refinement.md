# 2026-06-28 11:12 ET — Homepage hero wordless entry refinement

## Changed

- Refined `app/home-hero-wordless-entry-pass.css` so inherited hero styling cannot leak a visible `front desk` pseudo-label into the wordless first screen.
- Narrowed the wordless entry board from the previous 43rem max width to a quieter 38rem max width.
- Tightened hero padding, route-card gaps, route-card scale, and contact-sheet shadows so the first screen stays compact instead of feeling like another over-composed poster.
- Added a short-viewport fallback that hides the smallest room-cue microcopy before the entry surface becomes crowded.

## Why

The current source removes the major visible hero wording from `app/page.jsx`, but older hero CSS still creates a `title-lockup::after` label. Because the active direction is a wordless first-screen entry with only room choices visible, that inherited pseudo-wording needed to be suppressed and the remaining route surface needed to be smaller and calmer.

## Satisfaction state

Partially satisfied. The inherited visible pseudo-wording is now suppressed and the first-screen entry is tighter. Live visual validation is still needed after GitHub Pages deploys the latest build.

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

After deployment, check `/Website/` at laptop size. The first screen should not show the old `front desk` pseudo-label, the oversized welcome phrase, support copy, arrival ticket, or Open rooms card. It should show only the compact room-choice paper entry surface plus the shared site chrome.
