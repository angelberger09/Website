# Homepage entry contact sheet

Timestamp: 2026-06-25 09:18 ET

## Intent

Make the homepage first-screen route entry more visibly useful and more aligned with the content-bearing paper/photo direction while staying inside the newer render budget.

## Satisfaction state

Partially satisfied before this pass.

The homepage already had a first-screen Start here route strip, but it still read mostly as a set of text slips. Current `.agent` state says polaroid/photo-like surfaces should carry meaningful route material, and homepage orientation should be immediate, warm, and human-facing.

## Website source changed

- `app/page.jsx`
- `app/home-entry-contact-sheet-pass.css`
- `app/layout.jsx`

## What changed visibly

- The homepage hero route strip now uses `home-hero-contact-sheet` markup.
- Each route link now contains an image-like `home-hero-route-slip__preview` center with the route eyebrow and title.
- The four top-level rooms now read as a compact contact sheet of mini route-photo cards instead of only text snippets.
- Mobile fallbacks keep the links readable in two-column and one-column layouts.

## Performance boundary

The new pass avoids:

- CSS filters,
- blend modes,
- backdrop blur,
- full-screen fixed layers,
- animated overlays,
- fake image assets.

The contact sheet uses gradients, clip paths, grain texture, and box shadows only.

## Public-safety boundary

No fake screenshots, fake portfolio work, fake product photos, private content, or unavailable assets were introduced. The previews are abstract route cards built from existing public route labels.

## Agent files updated

- `.agent/memory.md`
- `.agent/matrices/pages.matrix.md`
- `.agent/matrices/components.matrix.md`
- `.agent/changes/change-log.md`
- `.agent/changes/2026-06-25-homepage-entry-contact-sheet.md`

## Related items

- PAGE-001
- COMP-003
- COMP-004
- COMP-008
- DESIGN-019
- DESIGN-021
- DESIGN-022
- DESIGN-030
- LESSON-001
- LESSON-002
- LESSON-018
- LESSON-019
- LESSON-021
- LESSON-022
- LESSON-026
- METRIC-001
- METRIC-002
- METRIC-017
- METRIC-018
- METRIC-020
- METRIC-021
- METRIC-028
- METRIC-030

## Follow-up

Future homepage hero refinements should keep the contact sheet useful and cheap. Do not replace honest route cards with fake screenshots or heavier image effects unless public assets actually exist and performance remains acceptable.
