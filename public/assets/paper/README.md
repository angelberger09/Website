# Paper material assets

These SVG assets are source-ready paper pieces for the Soft Strange Studio Website. They intentionally use a black background so they can be isolated later with alpha clipping, mask extraction, or blend/matte workflows.

## Asset list

| File | Intended use | Notes |
|---|---|---|
| `paper-torn-tape-wide.svg` | Large section boards, homepage intro cards, wide route panels | White torn sheet with masking tape and deep paper shadow. Best for calm hero/support sections that need one strong tactile surface. |
| `paper-aged-deckle-sheet.svg` | About principles, Notes reader panels, long-form copy cards | Warm aged sheet with deckled edges and visible crease lines. Best when the content should feel archival, handwritten, or quiet. |
| `paper-grid-clip-stack.svg` | Process/checklist blocks, readiness ledgers, source-state cards | Layered paper stack with a faint grid backing and paperclip. Best for structured information that should still feel handmade. |
| `paper-torn-tape-deckled.svg` | Store/Portfolio feature cards, route callouts, visual preview boards | Clean cream sheet with torn bottom edge and tape. Similar to the wide taped piece but a little warmer and more deckled. |
| `paper-lilac-polaroid-frame.svg` | Image windows, route preview cards, gallery frames | Cream frame over muted yarn-purple backing with a black clipping center. Best for future artwork/product/project previews. |

## Where these could be used

### Homepage

Use one wide paper piece as the main calm entry surface instead of stacking several competing scraps. `paper-torn-tape-wide.svg` can support a softer hero board or a first-screen route card. The homepage should avoid placing these behind huge type unless the type is scaled down and clearly composed.

### About

Use `paper-aged-deckle-sheet.svg` for studio principles, public-safe memory notes, or a short studio-map panel. It should feel like a real note pinned into the room rather than a generic UI card.

### Notes

Use `paper-grid-clip-stack.svg` for reader states, source-readiness details, or note-loading cards. The grid backing can quietly imply organization without exposing technical repo/feed language.

### Portfolio

Use `paper-lilac-polaroid-frame.svg` for project thumbnails or abstract preview windows. The black center can be replaced or masked later with real project art once the content is public-safe.

### Store

Use `paper-torn-tape-deckled.svg` for product-lane preview cards, availability states, or future shop callouts. It should keep the store honest and handmade without implying live inventory before listings exist.

## Usage guidance

- Use these as large, intentional material moments rather than repeating them everywhere.
- Keep text on top readable: add a cream overlay or separate text slip if the texture competes with the copy.
- Prefer one strong paper/photo surface per section over many small decorative pieces.
- Use the deeper muted purple/lilac tones as yarn-like accents, not pastel decoration.
- Do not use these as empty decals. Each placed paper piece should carry a content job: route label, page preview, product lane, project card, or reader state.

## Paths in the Website

Because these live in `public/`, CSS and JSX can reference them from the deployed site as:

```css
background-image: url('/Website/assets/paper/paper-torn-tape-wide.svg');
```

For local Next rendering, the same asset can usually be referenced as:

```css
background-image: url('/assets/paper/paper-torn-tape-wide.svg');
```

Prefer route-safe helpers or existing repo conventions before hardcoding a path in multiple places.
