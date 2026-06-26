# 2026-06-26 02:55 ET — Key card fixed scale correction

## Changed

- Added `app/key-card-fixed-scale-pass.css`.
- Imported it after `app/key-card-section-style-pass.css` in `app/layout.jsx`.
- Replaced viewport-scaled paper effects with fixed-scale values:
  - fixed inset frame thickness,
  - fixed section padding range,
  - smaller fixed shadows,
  - fixed texture background sizes,
  - fixed label sizing,
  - fixed inner card padding,
  - mobile-specific compact values.

## Why

The key-card style looked close to the desired paper reference, but the paper effect grew too much as the page/viewport got larger. The section should be allowed to get wider, but the material treatment itself should stay stable. This pass keeps the border, inset window, shadow, curl, texture, and labels visually consistent across viewport sizes.

## Related items

- DESIGN-019
- DESIGN-020
- DESIGN-022
- DESIGN-034
- LESSON-019
- LESSON-022
- METRIC-018
- METRIC-021
