# Texture and Overlay Asset Specs

These assets add reusable surface atmosphere to paper, cards, and page sections.

## Shared requirements

- Folder: `public/paper/textures/`
- Final format: transparent PNG when possible
- Preview matte: black background for white/gray marks
- Style: subtle, low contrast, reusable, not grunge-heavy
- Use: CSS background layers, blend modes, hero/card overlays

## `paper-fiber-overlay-01.png`

Purpose: primary paper fiber overlay.

Aspect ratio: 16:9 or square tile.  
Recommended size: 2000 × 1400 px or 1600 × 1600 px.  
Content: fine cream/gray paper fibers on transparency.

Use: over hero panel and cards.

## `paper-fiber-overlay-02.png`

Purpose: alternate stronger paper fiber.

Aspect ratio: 16:9 or square.  
Recommended size: 2000 × 1400 px.  
Content: slightly more visible paper grain/fiber.

## `grain-overlay-soft-01.png`

Purpose: soft film/paper grain.

Aspect ratio: tileable square.  
Recommended size: 1200 × 1200 px.  
Content: very fine speckled grain with transparent background.

## `dust-overlay-soft-01.png`

Purpose: dust specks overlay.

Aspect ratio: 16:9.  
Recommended size: 2200 × 1400 px.  
Content: sparse tiny dust specks and flecks, low opacity, uneven distribution.

## `scratch-overlay-soft-01.png`

Purpose: subtle scratched glossy surface.

Aspect ratio: 16:9.  
Recommended size: 2200 × 1400 px.  
Content: fine white/cream scratches, diagonal and vertical, very low contrast.

## `gloss-overlay-diagonal-01.png`

Purpose: diagonal gloss streak.

Aspect ratio: 16:9.  
Recommended size: 2200 × 1400 px.  
Content: large soft white-to-transparent diagonal light sweep.

Use: hero and polaroid surfaces.

## `gloss-overlay-wide-01.png`

Purpose: wider subtle gloss field.

Aspect ratio: 16:9.  
Recommended size: 2200 × 1400 px.  
Content: broad, barely-there translucent highlight that can cover large sections.

## `smudge-overlay-soft-01.png`

Purpose: soft glass/photo smudge.

Aspect ratio: 16:9.  
Recommended size: 2200 × 1400 px.  
Content: cloudy translucent smudges, not dirty, just tactile.

## Acceptance checklist

- no black background in final overlay unless it is meant to be multiplied
- overlays should not reduce text contrast too much
- texture repeats should not show obvious seams
- each overlay must work at very low opacity
