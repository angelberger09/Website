# DetailCard context face pass

Timestamp: 2026-06-26 14:30 ET

## Interface change

Shared `DetailCard` paper faces now use the card's actual status/title/eyebrow context instead of repeating a generic `paper note` caption. The visual face is also slightly larger, darker, and more shadowed so the contextual caption is readable at route-section scale.

## Why

The active paper-snippet and content-bearing-card guidance asks visible paper/photo surfaces to carry meaningful content structure instead of generic decorative labels. The prior shared `DetailCard` face had a useful paper shape but still repeated non-specific text, so it was only partially satisfying the direct-label and paper-card metrics.

## Files changed

- `app/site-chrome.jsx`
- `app/detail-card-paper-face-pass.css`

## Affected semantic items

- COMP-005
- COMP-008
- DESIGN-019
- DESIGN-022
- DESIGN-024
- DESIGN-029
- DESIGN-030
- DESIGN-034
- LESSON-019
- LESSON-022
- LESSON-024
- METRIC-018
- METRIC-021
- METRIC-023
- METRIC-029

## Safety notes

This pass does not add fake products, fake posts, fake portfolio work, fake photos, private content, new routes, or new data claims. It reuses already-rendered public card context and keeps `aria-hidden` on the decorative paper face so semantic heading/body structure remains unchanged.
