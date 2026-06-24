# Polaroid Asset Specs

These assets define the photo-frame system. Existing `public/atmosphere/polaroid-frame-alpha.svg` and `public/atmosphere/polaroid-backing-alpha.svg` are current SVG prototypes; the PNG assets below are the future full paper kit versions.

## Shared requirements

- Folder: `public/paper/polaroids/`
- Final format: transparent PNG
- Preview matte: black background
- Style: warm cream photo paper, torn or lightly worn edges, transparent photo window when needed
- Use: hero image stack, project previews, gallery framing, blog feature images

## `polaroid-frame-cream-01.png`

Purpose: clean cream polaroid frame.

Aspect ratio: 1:1.  
Recommended size: 1200 × 1200 px.  
Content: classic polaroid-style square frame with thicker bottom margin and empty transparent photo window.

Colors: warm cream `#fff7e8`, subtle paper fiber, slightly darker bottom edge.

Masking: outside transparent; inner photo window transparent.

## `polaroid-frame-cream-02.png`

Purpose: alternate clean polaroid frame.

Aspect ratio: 1:1.  
Recommended size: 1200 × 1200 px.  
Content: slightly rotated-feeling/hand-cut frame, same transparent photo window.

## `polaroid-frame-cream-torn-01.png`

Purpose: torn-edge hero polaroid frame.

Aspect ratio: 1:1.  
Recommended size: 1400 × 1400 px.  
Content: cream polaroid frame with imperfect torn outer edges and transparent photo window.

Use: main hero collage frame.

Acceptance check: should feel like paper, not a clean UI frame.

## `polaroid-backing-charcoal-01.png`

Purpose: dark backing sheet behind polaroid.

Aspect ratio: 1:1.  
Recommended size: 1400 × 1400 px.  
Colors: charcoal, warm black, low contrast paper grain.

Masking: transparent outside torn edges.

## `polaroid-backing-sage-01.png`

Purpose: sage colored backing sheet.

Aspect ratio: 1:1.  
Recommended size: 1400 × 1400 px.  
Colors: sage green, muted olive, cream fiber.

Use: offset behind cream frame.

## `polaroid-stack-double-01.png`

Purpose: pre-built double polaroid stack.

Aspect ratio: 1:1.  
Recommended size: 1600 × 1600 px.  
Content: two offset polaroid frames, slight rotation, transparent windows.

Use: quick decorative frame stack when separate layers are not needed.

## `polaroid-stack-triple-01.png`

Purpose: pre-built triple photo stack.

Aspect ratio: 1:1.  
Recommended size: 1800 × 1800 px.  
Content: three paper photo frames stacked with slight offsets and transparent windows.

## `photo-window-empty-01.png`

Purpose: standalone transparent photo-window mask/placeholder.

Aspect ratio: 4:3.  
Recommended size: 1000 × 750 px.  
Content: soft gray translucent rectangle or empty window surface for placing inside frames.

Use: placeholder when no image is available.

## Alpha rules

- outside of paper must be transparent
- photo windows should be transparent unless intentionally frosted
- black preview background must not remain in final files
- shadows should be subtle and may be separate when the frame needs flexible layering
