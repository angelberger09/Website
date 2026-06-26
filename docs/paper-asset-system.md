# Paper asset shell system

This pass turns the generated paper pieces into the primary material layer for the Website’s largest section boards.

## Goal

The site should feel like a composed paper studio room, not a set of stretched CSS gradients. Real paper art should carry the outer sheet, tape, deckle, grid, clip, and frame character. CSS should only support placement, readability, shadows, tint, and responsive behavior.

## Core utilities

The shared shell roles are:

```css
.paper-shell--hero
.paper-shell--board
.paper-shell--note
.paper-shell--frame
.paper-shell--stack
.paper-shell__inner
```

These are available for future JSX, but this pass also maps the same material roles onto the current route classes so the next visible implementation step does not require rewriting every page component.

## Asset roles

| Role | Asset | Use |
|---|---|---|
| Hero / wide board | `paper-torn-tape-wide.svg` | Home hero, PageIntro, large calm section anchors |
| Quiet note | `paper-aged-deckle-sheet.svg` | About notes, slower copy, intimate studio sections |
| Structured stack | `paper-grid-clip-stack.svg` | Notes source boards, readiness ledgers, checklists |
| Feature board | `paper-torn-tape-deckled.svg` | Store lanes, Portfolio feature pieces, route callouts |
| Frame / image window | `paper-lilac-polaroid-frame.svg` | Gallery/image-like preview surfaces and route-photo centers |

## Live black-matte handling

The generated SVGs intentionally contain black backgrounds for future alpha clipping and mask workflows. The live CSS implementation does not expose that black matte as a rectangle.

Instead, it layers each paper SVG above a cream field with:

```css
background-blend-mode: screen, normal, multiply;
```

That makes the black matte visually disappear into the field while keeping the lighter paper texture, tape, fold character, deckled edge tone, and muted purple/yarn accents available as a real asset layer.

## Implementation files

- `app/paper-asset-shell-pass.css`
- `app/paper-asset-card-pass.css`

The shell pass handles large section boards. The card pass defines the same roles for smaller content-bearing paper pieces and selected photo/window surfaces.

## Placement rule

Use one strong paper moment per section. Do not scatter these assets as loose decals behind content.

A section should normally have:

1. one real paper shell or board,
2. readable copy on top,
3. CSS shadow for lift,
4. a fixed, human-scale texture feel,
5. no oversized viewport-scaled fake folds.

## Current live mapping

The pass applies first to the largest existing surfaces:

- homepage hero and main chapter sections,
- shared `PageIntro`,
- Notes reader/source/gallery/state boards,
- About opening/contact/principle/path boards,
- Portfolio archive/gallery/readiness/feed/state/process boards,
- Store lane/gallery/checklist/availability/feed/promise/path boards,
- shared continuity paper trail.

Smaller cards receive the first restrained asset-backed treatment where they already carry content, such as route slips, note cards, archive cards, store lanes, checklist notes, and photo centers.

## Future rule

If a future page adds a new major board, prefer assigning one of the shared shell roles before creating another custom gradient-only paper surface.
