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
