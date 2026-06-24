# 2026-06-24 00:05 ET — Docked rotating hero title

## Changed

- Replaced the three full-screen hero title panels with one left-docked title lockup.
- Reduced the hero scroll length so the full Welcome → To → Soft Strange Studio message appears faster.
- Added `app/hero.css` for the hero-specific layout and motion rules.
- Imported `app/hero.css` from the root layout.
- Added subtle scroll-linked rotation for the hero lockup.
- Added reduced-motion fallback for the hero animation.

## Why

The hero title needed to feel more immediately readable and less scroll-heavy while still keeping intentional motion. The new direction keeps the title docked to the left and lets the title rotate gently during the scroll.

## Related items

- FEEDBACK-004
- LESSON-012
- PAGE-001
- COMP-003
- DESIGN-002
- DESIGN-009
- INT-009
- METRIC-011
