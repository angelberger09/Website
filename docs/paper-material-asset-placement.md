# Paper material asset placement guide

The new paper assets are not meant to become another layer of random decoration. They should help the Website move toward a calmer, better-composed studio front room: fewer repeated UI cards, stronger section rhythm, and more intentional tactile surfaces.

## Current design problem these assets should solve

The recent Website direction became too visually noisy because the paper treatment was applied broadly without enough hierarchy. Large type, repeated card surfaces, low-contrast cream layers, and floating scraps started competing with each other.

The fix is not more paper everywhere. The fix is better paper placement.

Use these assets when a section needs one of these jobs:

- a clear room anchor,
- a readable content surface,
- a framed visual preview,
- a calm source/readiness note,
- a tactile transition between sections.

Do not use them as loose decals behind text.

## Recommended placement by asset

### `paper-torn-tape-wide.svg`

Best for the homepage and major page intro boards.

Use it for:

- a toned-down homepage hero board,
- a `Start here` feature area,
- a wide page-opening message,
- one calm route-orientation card.

Avoid using it behind oversized headline text. If used in the hero, the headline should be smaller and the paper should act as a composed board, not a background accident.

### `paper-aged-deckle-sheet.svg`

Best for intimate studio notes.

Use it for:

- About principles,
- studio intent notes,
- explanatory copy panels,
- quiet archive/story sections.

This asset should carry slower, warmer copy. It should not be used for dense navigation or many repeated cards.

### `paper-grid-clip-stack.svg`

Best for structured information.

Use it for:

- Notes source-readiness cards,
- Store launch checklist items,
- Portfolio process/readiness states,
- small system explanations that still need to feel human.

This is the most useful asset for turning technical readiness into a visual ledger without exposing raw implementation language.

### `paper-torn-tape-deckled.svg`

Best for feature cards and prepared-lane panels.

Use it for:

- Store product lane previews,
- Portfolio feature blocks,
- route callouts,
- smaller editorial paper pieces.

It can repeat more safely than the wide taped piece, but still avoid using it for every card on a page.

### `paper-lilac-polaroid-frame.svg`

Best for future image windows.

Use it for:

- portfolio project previews,
- store product image placeholders,
- route preview cards,
- gallery cards with real art later.

The black center is intentional. It can be masked or replaced later once a real public-safe image exists. The muted purple backing should help bring in yarn-like color without making the site pastel.

## Color direction

Use yarn-inspired color rather than pale pastel decoration:

- deep muted plum,
- heather purple,
- dusty mauve,
- oatmeal cream,
- warm kraft beige,
- soft charcoal ink.

The purple should feel like textile, thread, or dyed paper. It should not become neon, candy pastel, or generic lavender UI chrome.

## Implementation notes

The assets live in:

```txt
public/assets/paper/
```

Deployed GitHub Pages paths should use:

```txt
/Website/assets/paper/<filename>.svg
```

When used as CSS backgrounds, pair them with:

- `background-size: contain` for standalone paper pieces,
- `background-size: cover` only for section fields,
- a separate text surface if contrast drops,
- `pointer-events: none` for decorative layers,
- meaningful `aria-hidden="true"` when the asset is purely visual.

## Design rule

One strong paper moment per section is better than five weak paper decals.
