# Final performance budget closure

Timestamp: 2026-06-25 09:28 ET

## Intent

Keep the visible paper/collage interface progressing without letting newer visual passes bypass the render budget.

## Source-of-truth signal

`.agent` currently treats performance as part of the interface quality target, not a separate cleanup task. The performance budget pass says it must load last, and the quality metrics require newer homepage, PageIntro, paper-card, and gallery surfaces to stay paper-like without adding expensive repeated filters, blend modes, transforms, or animated decorative layers.

## Satisfaction state

Partially satisfied.

The Website already had a performance budget pass, but `app/layout.jsx` imported `app/page-intro-performance-pass.css` and `app/home-entry-contact-sheet-pass.css` after it. That meant the budget was no longer the final closing layer, and newer route-entry surfaces could escape the shared cheap paper-surface rules.

## Website source changed

- `app/layout.jsx`
- `app/performance-budget-pass.css`

## Visible interface change

The final render pass now closes over the newest visible entry surfaces:

- homepage contact sheet,
- homepage hero route slips,
- route intro photo cards,
- route intro photo-card labels,
- shared PageIntro polaroid layers.

These surfaces should still read as paper/collage, but with cheaper final cuts, backgrounds, shadows, disabled pseudo-elements where appropriate, disabled filters, and content-visibility coverage where safe.

## Why this matters

The current visual direction depends on tactile paper, but performance feedback established that visual richness must stay inside a render budget. This pass keeps the interface visibly papery while making the latest visual additions obey the same final budget as the rest of the Website.

## Related items

- COMP-003 Scroll Title Sequence
- COMP-004 Studio Page Cards
- COMP-005 Shared Site Chrome
- COMP-008 Filled Page Sections
- DESIGN-019 Paper Material Authenticity
- DESIGN-021 Content-Bearing Polaroid Cards
- DESIGN-022 Paper Piece Card Surfaces
- DESIGN-025 Route Photo-Center Cards
- METRIC-007 Alive But Not Busy
- METRIC-018 Paper Material Reads First
- METRIC-021 Paper Cards Not UI Cards
- METRIC-024 Photo Centers Not Empty
