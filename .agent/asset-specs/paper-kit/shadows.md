# Shadow Plate Asset Specs

These assets provide consistent depth under paper pieces without tuning CSS shadows every time.

## Shared requirements

- Folder: `public/paper/shadows/`
- Final format: transparent PNG
- Preview matte: black background is not needed, but can be used for QA
- Style: soft warm shadow, no hard rectangular edge
- Use: layered under cards, notes, polaroids, and stacks

## `shadow-soft-card-horizontal-01.png`

Purpose: shadow for horizontal feature cards.

Aspect ratio: 2.6:1.  
Recommended size: 1400 × 540 px.  
Content: soft oval/irregular horizontal shadow, warm gray-brown, fading to transparency.

Use: under torn horizontal cards.

## `shadow-soft-card-square-01.png`

Purpose: shadow for square paper cards.

Aspect ratio: 1:1.  
Recommended size: 1000 × 1000 px.  
Content: soft square-ish paper shadow, blurred corners, transparent edge.

## `shadow-soft-polaroid-01.png`

Purpose: shadow for polaroid/photo frames.

Aspect ratio: 1:1.  
Recommended size: 1200 × 1200 px.  
Content: offset shadow with slight rotation feel, enough depth for stacked photo frames.

## `shadow-soft-note-small-01.png`

Purpose: shadow under small notes/tags.

Aspect ratio: 4:3.  
Recommended size: 900 × 650 px.  
Content: gentle compact shadow, not too dark.

## `shadow-stack-offset-01.png`

Purpose: multi-layer shadow for stacked paper scraps.

Aspect ratio: 4:3.  
Recommended size: 1200 × 900 px.  
Content: two or three overlapping shadow fields with slight offsets.

## Acceptance checklist

- transparent outside shadow
- no visible rectangular bounds
- works on cream, peach, lavender, and sage backgrounds
- feels soft and paper-like, not like a web box-shadow preset
