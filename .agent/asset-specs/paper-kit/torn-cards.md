# Torn Card Asset Specs

These assets are the paper surfaces for Notes, Sample, Source, and future feature cards.

## Shared requirements

- Folder: `public/paper/cards/`
- Final format: transparent PNG
- Preview matte: black background
- Style: handmade torn card, warm cream, subtle surface fiber, slightly varied edges
- Use: replace CSS borders/card backgrounds with image-backed paper panels

## `torn-card-horizontal-01.png`

Purpose: primary horizontal feature card.

Aspect ratio: 2.2:1 to 2.6:1.  
Recommended size: 1300 × 560 px.  
Colors: warm cream, slight beige edge darkening.  
Shape: horizontal torn rectangle with rough top and bottom edges and soft irregular corners.

Masking: transparent outside card; edge fibers should remain visible as semi-transparent alpha.

Use: Notes card.

Acceptance check: has enough quiet blank space for icon, title, short copy, and arrow.

## `torn-card-horizontal-02.png`

Purpose: alternate horizontal feature card.

Aspect ratio: 2.2:1 to 2.6:1.  
Recommended size: 1300 × 560 px.  
Colors: cream with slightly warmer paper tone.  
Shape: bottom edge should have a more obvious torn waviness.

Use: Sample card.

## `torn-card-horizontal-03.png`

Purpose: third horizontal feature card, distinct but aligned with the set.

Aspect ratio: 2.2:1 to 2.6:1.  
Recommended size: 1300 × 560 px.  
Colors: light cream with subtle gray fiber.  
Shape: left/right edges slightly more irregular than 01 and 02.

Use: Source card.

## `torn-card-vertical-01.png`

Purpose: vertical note/article preview card.

Aspect ratio: 3:4.  
Recommended size: 900 × 1200 px.  
Colors: cream, aged beige along edge.

Use: future blog or shop card.

## `torn-card-vertical-02.png`

Purpose: alternate vertical card with more handmade tear.

Aspect ratio: 3:4.  
Recommended size: 900 × 1200 px.  
Colors: slightly darker cream, warm gray shadow at bottom.

Use: future gallery/portfolio card.

## `torn-card-square-01.png`

Purpose: square card surface for icon blocks, thumbnails, and compact page cards.

Aspect ratio: 1:1.  
Recommended size: 1000 × 1000 px.  
Colors: warm cream with visible fiber.

Use: small homepage icons or internal page modules.

## Acceptance checklist for all torn cards

- transparent outside torn edges
- no black matte left in exported file
- no rectangular clipping artifacts
- can support readable text on top
- feels handmade but clean enough for navigation
