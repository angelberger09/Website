# Performance budget pass

Timestamp: 2026-06-25 02:08 ET

## Intent

Fix the rendered Website performance issue without abandoning the paper-collage direction.

The user reported that the Website was horribly unperformant. Review of current source showed that the visual system had accumulated many expensive CSS layers and effects.

## Why it was slow

The expensive patterns included:

- `angelberger09/Website/app/layout.jsx` importing many stacked visual pass CSS files.
- `angelberger09/Website/app/globals.css` using a fixed background attachment and fixed full-screen atmosphere spans.
- animated full-screen gloss overlay.
- mix-blend-mode on large fixed texture layers.
- backdrop blur on the fixed header.
- many card-level clip paths, pseudo-elements, multi-layer textures, and CSS `filter: drop-shadow(...)` stacks.
- Store-specific visual passes adding more clipped surfaces, filters, pseudo-elements, and texture layers.

These are visually aligned with the paper direction but expensive because they create many repaint/compositing layers during scroll.

## Website source changed

- `angelberger09/Website/app/performance-budget-pass.css`
- `angelberger09/Website/app/layout.jsx`

## What changed

Added `performance-budget-pass.css` and imported it last so it overrides the earlier heavy material passes.

The new pass:

- disables the fixed full-screen atmosphere layer,
- switches root background attachment to scroll,
- removes animated gloss from the active render path,
- removes blend modes from the active root texture path,
- disables backdrop blur on the header,
- replaces heavy drop-shadow filters with cheaper box shadows,
- simplifies repeated card texture stacks,
- simplifies torn-paper clip-path shapes,
- hides decorative per-card pseudo-elements,
- uses `content-visibility: auto` on large content regions.

## Agent records changed

- `angelberger09/Website/.agent/feedback/2026-06-25-performance-budget.md`
- `angelberger09/Website/.agent/changes/2026-06-25-performance-budget-pass.md`

## Related items

- COMP-005
- DESIGN-019
- DESIGN-022
- METRIC-018
- METRIC-021

## Follow-up

Future visual passes should check performance before adding more filters, blend modes, fixed layers, animated overlays, or repeated texture stacks.
