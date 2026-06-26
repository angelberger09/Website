# 2026-06-26 — Paper asset shell implementation pass

## Changed

- Added `app/paper-asset-shell-pass.css` with shared paper shell roles:
  - `.paper-shell--hero`
  - `.paper-shell--board`
  - `.paper-shell--note`
  - `.paper-shell--frame`
  - `.paper-shell--stack`
  - `.paper-shell__inner`
- Added `app/paper-asset-card-pass.css` with restrained asset-backed card and photo/window role mappings.
- Imported both passes from `app/layout.jsx` after the existing paper/key-card passes so they act as the next material layer.
- Added `docs/paper-asset-system.md` to explain how the generated paper SVGs should be used as live site shells.
- Applied the first asset-shell mapping to existing homepage, PageIntro, Notes, About, Portfolio, Store, and continuity board classes without changing public copy.

## Why

The previous paper direction relied too heavily on CSS gradients, pseudo-element creases, and viewport-scaled material effects. The next implementation direction is a hybrid system: real generated paper assets carry the visual paper character while CSS handles layout, shadows, tint, and responsive behavior.

## Implementation notes

The generated paper SVGs have black mattes because they were created for later alpha clipping and mask workflows. This pass uses CSS background blending so the black matte does not appear as a visible rectangle on the live cream site while the paper texture, tape, deckle, grid, clip, frame, and muted yarn-purple accents still influence the surface.

## Related items

- PAGE-001
- PAGE-002
- PAGE-003
- PAGE-004
- PAGE-005
- COMP-005
- COMP-008
- DESIGN-019
- DESIGN-022
- DESIGN-026
- DESIGN-028
- DESIGN-029
- DESIGN-034
- ASSET-008
- ASSET-009
- ASSET-010
- ASSET-011
- ASSET-012
- LESSON-019
- LESSON-022
- LESSON-024
- METRIC-018
- METRIC-021
- METRIC-025
- METRIC-027
- METRIC-028
