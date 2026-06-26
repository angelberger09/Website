# 2026-06-25 — Header paper edge stamps

## Changed

- Added decorative, aria-hidden paper-edge spans to the shared `SiteHeader` in `app/site-chrome.jsx`.
- Added `app/header-paper-edge-stamps-pass.css` so the header now shows visible torn paper edge stamps and a fibrous lower strip without adding nav text, numbers, helper copy, or a new header system.
- Imported the pass from `app/layout.jsx` after the existing header paper passes while preserving the concurrently added `page-intro-foreground-card-pass.css` import.

## Why

`METRIC-019` remained partially satisfied: the shared top bar had paper texture, labels, seams, and route thread cues, but the whole strip could still use a stronger paper read at screenshot scale. This pass makes the physical paper edge more visible across all routes while preserving direct navigation readability and accessibility.

## Satisfaction state

Partially satisfied refinement.

## Related items

- COMP-001
- COMP-002
- COMP-005
- DESIGN-004
- DESIGN-011
- DESIGN-015
- DESIGN-019
- DESIGN-020
- LESSON-011
- LESSON-015
- LESSON-020
- METRIC-010
- METRIC-014
- METRIC-019
