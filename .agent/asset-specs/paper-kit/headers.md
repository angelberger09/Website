# Header Paper Asset Specs

These assets build the top navigation as a torn paper strip instead of a CSS pill. Previews may be generated on black, but final files should use transparency around the torn edges.

## Shared requirements

- Folder: `public/paper/headers/`
- Final format: transparent PNG
- Preview matte: black background for edge checking
- Style: warm cream handmade paper, slightly uneven bottom tear, subtle fiber, soft shadow separated into its own asset when possible
- Color range: warm cream `#fff7e8`, aged paper `#eadcc2`, soft gray shadow `rgba(47,38,35,.22)`
- Edge: irregular torn bottom, cleaner top edge, soft feathered paper fibers

## `header-strip-torn-wide-01.png`

Purpose: primary navigation paper strip for the top bar.

Aspect ratio: 10:1 to 12:1.  
Recommended size: 2400 × 220 px.  
Content: a long warm cream torn strip with a mostly straight top edge and organic torn bottom edge. The bottom edge should have tiny rises and dips, like real handmade paper pulled from a pad. The strip should be mostly empty so HTML navigation can sit on top.

Masking: transparent outside the paper shape. Generate/preview on black, then remove black fully. Torn bottom fibers should retain soft alpha, not a hard cutout.

Use: header background image behind `Angel Berger`, nav labels, and Pages label.

Acceptance check: text remains readable; strip does not look like a rectangle; bottom edge feels handmade but not messy.

## `header-strip-torn-wide-02.png`

Purpose: rougher alternate header strip for more handmade variation.

Aspect ratio: 10:1 to 12:1.  
Recommended size: 2400 × 240 px.  
Content: same long cream paper strip but with a more visible uneven bottom tear and slight wave across the full width.

Color: slightly warmer and more aged than 01, with faint beige pooling near torn edge.

Masking: transparent outside paper. Preserve fibery bottom edge.

Use: alternate header test if the current nav feels too clean.

Acceptance check: rougher, but not distracting under nav text.

## `header-strip-torn-wide-03.png`

Purpose: cleaner alternate header strip for calmer pages.

Aspect ratio: 10:1 to 12:1.  
Recommended size: 2400 × 200 px.  
Content: smoother cream strip with a gentle torn bottom edge and less texture than 01.

Color: pale cream, low contrast fibers.

Masking: transparent outside paper.

Use: pages that need a more minimal header while keeping paper language.

Acceptance check: reads as paper, but feels elegant and quiet.

## `header-shadow-soft-wide.png`

Purpose: reusable shadow layer under the header strip.

Aspect ratio: 10:1 to 12:1.  
Recommended size: 2400 × 260 px.  
Content: only a soft horizontal shadow, transparent everywhere else. It should look like paper hovering slightly above the background.

Color: warm dark gray/brown, low opacity.

Masking: transparent PNG with blur fading to 0 alpha.

Use: placed underneath header strip or applied independently for consistent depth.

Acceptance check: no rectangular edges; shadow is visible on cream background but not muddy.
