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
- INT-010 Leftward Default-Open Menu Reveal

### Created lesson

- LESSON-013 Make the Pages menu open left and stay visually unboxed

### Reference image

- `.agent/references/2026-06-23-menu-left-open-transparent-reference.md`
- `.agent/references/2026-06-23-menu-left-open-transparent-reference.jpg.base64`

### Implementation ideas to evaluate

- keep the Pages menu open by default on desktop
- render links to the left of the Pages button
- remove the dropdown panel background and border
- keep focus states visible even without a panel surface
- add a mobile fallback if horizontal space is too limited

## FEEDBACK-005 — Direct nav should not have numbers, extra text, or a Pages button

Timestamp: 2026-06-23 23:50 ET  
Status: converted to active lesson  
Source: Screenshot review of current Website header navigation

### Public-safe summary

The current direct navigation still includes small edge numbers, extra text treatment, and a separate `Pages` button. The desired direction is direct navigation only: destination labels without numbering or redundant controls. The current visual treatment also feels too soft overall and needs more contrast and definition.

### Extracted signal

Do not keep the old `Pages` trigger once the links are visible. The nav should be simpler, sharper, and less padded with decorative metadata.

### Affected semantic items

- COMP-002 Folder Pages Menu
- DESIGN-012 Unboxed Left-Expanding Menu
- DESIGN-013 Direct Unnumbered Navigation
- DESIGN-014 Soft/Sharp Balance
- INT-010 Leftward Default-Open Menu Reveal

### Created lesson

- LESSON-014 Use direct nav labels without extra markers

### Reference image

- `.agent/references/2026-06-23-nav-direct-unboxed-reference.md`
- `.agent/references/2026-06-23-nav-direct-unboxed-reference.jpg.base64`

### Implementation ideas to evaluate

- remove the `01`, `02`, `03`, `04` markers from nav links
- remove the separate `Pages` button in desktop direct-nav mode
- keep only direct destination labels such as Notes, Sample, Source, Home
- reduce excess softness by increasing contrast, using firmer text weight/spacing, or sharpening the material edge
- keep mobile behavior simple and accessible

## FEEDBACK-006 — Validate feedback against the actual Website before acting

Timestamp: 2026-06-24 19:17 ET  
Status: converted to active lesson  
Source: Workflow feedback about screenshots and current-site validation

### Public-safe summary

Future feedback intake should check whether screenshots and visible-site comments belong to the actual Website before creating lessons or implementation targets. Feedback storage should update `.agent/` only unless implementation is explicitly requested.

### Extracted signal

Source validation is part of feedback intake, not an optional later step.

### Affected semantic items

- PROC-001 Live Website Validation Protocol
- LESSON-017 Validate feedback against the actual Website
- METRIC-016 Feedback Source Validated

### Created lesson

- LESSON-017 Validate feedback against the actual Website

### Implementation boundary

Store feedback in `.agent/` first. Let a later implementation run apply it unless Angel explicitly asks for the Website to change now.

## FEEDBACK-007 — About page needs stronger paper material

Timestamp: 2026-06-24 19:38 ET  
Status: converted to active lesson  
Source: Screenshot review of current Website About page

### Validation source

The screenshot maps to the active `/Website/about/` route and current repo source. It shows the shared Website header, About page hero copy, shared detail cards, and the polaroid stack from `app/site-chrome.jsx` and `app/about/page.jsx`.

### Public-safe summary

The page is warm, soft, and layered, but it does not feel papery enough yet. Future visual work should make the full page system read more like handmade paper/collage rather than soft translucent UI with a separate polaroid motif.

### Extracted signal

Paper should be the primary material read. Use visible fiber, torn or uneven edges, cutout/scanned imperfections, layered sheet shadows, collage overlaps, and tactile paper depth across backgrounds, cards, hero stacks, and shared page sections.

### Affected semantic items

- PAGE-001 Homepage
- PAGE-002 About
- COMP-004 Studio Page Cards
- COMP-005 Shared Site Chrome
- COMP-008 Filled Page Sections
- DESIGN-010 Tactile Polaroid Depth
- DESIGN-017 Polaroid Frame Core Motif
- DESIGN-019 Paper Material Authenticity
- METRIC-018 Paper Material Reads First

### Created lesson

- LESSON-019 Make paper material feel primary

### Reference note

- `.agent/references/2026-06-24-about-paper-material-reference.md`

### Implementation boundary

Feedback-only pass: public Website source files should stay unchanged until a later implementation run applies the lesson.
