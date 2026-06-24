# Feedback Log

This log records public-safe feedback signals with timestamps so design intent can be tracked over time.

## Timestamp standard

Use local project time in `America/New_York` and include both date and time.

Format:

```txt
YYYY-MM-DD HH:mm ET
```

## FEEDBACK-001 — Reduce static structure and add animated atmosphere

Timestamp: 2026-06-23 23:09 ET  
Status: converted to active lessons  
Source: Homepage visual feedback

### Public-safe summary

The homepage currently feels too static, too bordered, and too empty. Future visual work should reduce hard outlines, keep the style flat, and add subtle animated atmosphere through gradients, fade-offs, CSS shading, and intentional motion.

### Extracted signal

Move from static bordered UI toward a living flat studio atmosphere.

### Affected semantic items

- PAGE-001 Homepage
- COMP-001 Floating Header
- COMP-003 Scroll Title Sequence
- COMP-004 Studio Page Cards
- DESIGN-001 Warm Cream Background
- DESIGN-002 Large Editorial Type
- DESIGN-003 Rounded Minimal Cards

### Created lessons

- LESSON-005 Reduce static bordered structure
- LESSON-006 Add animated atmosphere
- LESSON-007 Keep everything graphically flat
- LESSON-008 Prefer gradients over borders
- LESSON-009 Animation should have intent

### Implementation ideas to evaluate

- anime.js for intentional motion choreography
- mouse-reactive background particles
- CSS-based cel-shaded atmosphere
- gradient fade-offs instead of hard bordered panels
- reduced or removed border radius where gradients can carry the shape

## FEEDBACK-002 — Add tactile polaroid-like depth

Timestamp: 2026-06-23 23:10 ET  
Status: converted to active lesson  
Source: Follow-up homepage visual feedback

### Public-safe summary

The visual direction should not be empty-flat. It should keep a graphic/flat art language while adding tactile depth, like a polaroid/photo surface with gloss, subtle scratches, and transparent distortion over the content behind it.

### Extracted signal

Use 2.5D material illusion: flat graphic surfaces with photo-like depth, gloss overlays, scratches, and refraction-style distortion, without becoming heavy realistic 3D.

### Affected semantic items

- PAGE-001 Homepage
- COMP-003 Scroll Title Sequence
- COMP-004 Studio Page Cards
- DESIGN-007 Gradient Fade-Off Structure
- DESIGN-008 Flat Cel-Shaded Atmosphere
- DESIGN-010 Tactile Polaroid Depth

### Created lesson

- LESSON-010 Add tactile 2.5D depth without losing flat art direction

### Implementation ideas to evaluate

- glossy overlay layers
- subtle scratch/noise textures
- translucent polaroid/photo-panel surfaces
- CSS gradients and blend modes
- light distortion over background content
- flat cel-shaded highlights instead of realistic 3D rendering

## FEEDBACK-003 — Header should emerge from offscreen top

Timestamp: 2026-06-23 23:30 ET  
Status: converted to active lesson  
Source: Screenshot review of current Website header

### Public-safe summary

The current floating header reads as a complete rounded pill placed inside the viewport. Future header work should make the bar feel like it is entering from the top edge or partially tucked beyond the visible screen.

### Extracted signal

Use the viewport edge as an active design surface. The header can feel clipped, tucked, or pulled in from above while staying usable.

### Affected semantic items

- COMP-001 Floating Header
- COMP-002 Folder Pages Menu
- DESIGN-004 Floating Header
- DESIGN-011 Offscreen Top Emergence
- INT-008 Top Edge Entry

### Created lesson

- LESSON-011 Make the header emerge from offscreen top

### Reference image

- `.agent/references/2026-06-23-header-offscreen-top-reference.md`
- `.agent/references/2026-06-23-header-offscreen-top-reference.jpg.base64`

### Implementation ideas to evaluate

- negative top offset
- mask or clip the top edge of the header surface
- retain readable identity text and a fully reachable Pages button
- keep keyboard focus rings visible
- avoid hiding controls purely for style

## FEEDBACK-004 — Pages menu should expand left, stay open, and be unboxed

Timestamp: 2026-06-23 23:40 ET  
Status: converted to active lesson  
Source: Screenshot review of current Website Pages menu

### Public-safe summary

The current Pages menu opens downward into a large bordered/background panel. Future menu work should make it open by default, expand left from the Pages control, and remove the separate panel border/background treatment.

### Extracted signal

Use horizontal, edge-aware navigation reveal instead of a dropdown card. The Pages links should feel integrated into the header line rather than placed in a separate overlay.

### Affected semantic items

- COMP-002 Folder Pages Menu
- DESIGN-012 Unboxed Left-Expanding Menu
- INT-009 Leftward Default-Open Menu Reveal

### Created lesson

- LESSON-012 Make the Pages menu open left and stay visually unboxed

### Reference image

- `.agent/references/2026-06-23-menu-left-open-transparent-reference.md`
- `.agent/references/2026-06-23-menu-left-open-transparent-reference.jpg.base64`

### Implementation ideas to evaluate

- keep the Pages menu open by default on desktop
- render links to the left of the Pages button
- remove the dropdown panel background and border
- keep focus states visible even without a panel surface
- add a mobile fallback if horizontal space is too limited
