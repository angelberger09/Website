# Performance budget feedback

Timestamp: 2026-06-25 02:08 ET

Status: implemented

Source: Current user feedback that the rendered Website interface is horribly unperformant.

## Public-safe summary

The Website visual system became too expensive to render. Recent paper/collage passes added many fixed overlays, blend modes, clip paths, filters, repeated texture backgrounds, pseudo-elements, and animated gloss layers. The site should keep the paper-collage direction but stay fast to scroll and interact with.

## Extracted signal

Performance is now a primary interface constraint. Visual passes should not keep adding layered CSS effects without a render budget. The site needs fewer composited layers, fewer full-screen fixed overlays, simpler shadows, less filter usage, fewer repeated texture stacks, and less animation.

## Target state

- Scrolling feels responsive.
- The page still reads as paper/collage.
- Paper texture remains visible but cheaper to render.
- Expensive effects are centralized and limited.
- Future visual passes do not reintroduce heavy CSS without checking cost.

## Implementation applied

Added `angelberger09/Website/app/performance-budget-pass.css` and imported it last from `angelberger09/Website/app/layout.jsx`.

The pass reduces render cost by:

- removing the fixed full-screen atmosphere overlay from the rendered path,
- disabling animated gloss drift,
- removing blend modes from the root material layer,
- disabling backdrop blur,
- replacing heavy multi-drop-shadow filters with cheaper box shadows,
- simplifying repeated card textures,
- simplifying torn-paper clip paths,
- removing decorative pseudo-elements on card surfaces,
- adding `content-visibility: auto` to large page sections where safe.

## Affected items

- COMP-005 Shared Site Chrome
- DESIGN-019 Paper Material Authenticity
- DESIGN-022 Paper Piece Card Surfaces
- METRIC-018 Paper Material Reads First
- METRIC-021 Paper Cards Not UI Cards

## Future rule

When a visual treatment is expensive, preserve the design intent with a cheaper shared pattern instead of layering more filters, fixed overlays, blend modes, and per-card texture effects.
