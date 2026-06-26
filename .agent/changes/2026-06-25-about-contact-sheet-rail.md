# 2026-06-25 — About contact sheet rail

## Summary

Added a visible three-slip paper rail to the About contact-sheet section so visitors can read the horizontal frame sequence as an intentional sideways path instead of a quiet scrollable strip.

## Interface change

- `app/about/page.jsx` now renders `aboutContactRail` slips between the About contact-sheet heading and the horizontal frame cards.
- `app/about-contact-sheet-rail-pass.css` styles the slips as clipped paper labels with a subtle thread line and responsive stacked fallback.
- `app/layout.jsx` imports the new pass after the existing About contact-sheet styling.

## Why

The About contact sheet already used native horizontal scrolling and paper/photo cards, but the scroll direction and route purpose were not visibly cued by the interface. This pass strengthens LESSON-026 and METRIC-032 with honest, public-safe paper labels: no fake images, no private content, and no new route structure.

## Affected semantic items

- PAGE-002
- COMP-005
- COMP-008
- DESIGN-019
- DESIGN-022
- DESIGN-030
- DESIGN-031
- LESSON-019
- LESSON-022
- LESSON-026
- METRIC-018
- METRIC-021
- METRIC-029
- METRIC-030
- METRIC-032

## Satisfaction state

Partially satisfied. The rail gives the About contact-sheet gallery a visible paper path cue; deployed review should confirm the slips make the sideways sequence clear at desktop and mobile widths.
