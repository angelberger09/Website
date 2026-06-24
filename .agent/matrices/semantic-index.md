# Semantic Index Matrix

Every meaningful project item gets an ID so future work can trace purpose, lessons, relationships, and metrics.

| ID | Type | Name | Location | Purpose | Related Lesson | Status |
|---|---|---|---|---|---|---|
| PAGE-001 | Page | Homepage | `app/page.jsx` | Main public studio entry with filled page doors | LESSON-001, LESSON-002, LESSON-015 | active |
| PAGE-002 | Page | About | `app/about/page.jsx` | Public studio orientation page | LESSON-001, LESSON-002, LESSON-004 | active |
| PAGE-003 | Page | Notes | `app/notes/page.jsx`, `app/notes/NotesPageClient.jsx` | Website-owned published notes index using Blog as source | LESSON-002, LESSON-004 | active |
| PAGE-003A | Page | Notes Post Reader | `app/notes/post/page.jsx`, `app/notes/post/PostReaderClient.jsx` | Website-owned individual note reader | LESSON-002, LESSON-004 | active |
| PAGE-003B | Page | Blog Compatibility Routes | `app/blog/page.jsx`, `app/blog/post/page.jsx` | Preserve existing Blog route links while reusing Notes reader | LESSON-002, LESSON-004 | active |
| PAGE-004 | Page | Portfolio | `app/portfolio/page.jsx` | First public work/project archive | LESSON-001, LESSON-002 | active |
| PAGE-005 | Page | Store | `app/store/page.jsx` | Future shop/product lane doorway | LESSON-001, LESSON-002, LESSON-004 | active |
| COMP-001 | Component | Floating Header | `app/site-chrome.jsx`, `app/globals.css` | Persistent personal identity and direct navigation | LESSON-002, LESSON-011, LESSON-015 | active |
| COMP-002 | Component | Direct Studio Navigation | `app/site-chrome.jsx`, `app/globals.css`, `app/typography.css` | Compact access to top-level Website pages | LESSON-003, LESSON-013, LESSON-015 | active |
| COMP-003 | Component | Scroll Title Sequence | `app/page.jsx`, `app/globals.css`, `app/hero.css`, `app/typography.css` | Left-docked rotating paper-list arrival title with polaroid material stack | LESSON-012, LESSON-014, LESSON-016 | active |
| COMP-004 | Component | Studio Page Cards | `app/page.jsx`, `app/globals.css` | Human-facing links to current public pages | LESSON-002, LESSON-015 | active |
| COMP-005 | Component | Shared Site Chrome | `app/site-chrome.jsx`, `app/layout.jsx` | Header, atmosphere, footer, page intro, and detail card primitives | LESSON-001, LESSON-002, LESSON-015 | active |
| COMP-006 | Component | Notes Reader Client | `app/notes/NotesPageClient.jsx` | Loads published Blog posts into Website-owned Notes page | LESSON-002, LESSON-004 | active |
| COMP-007 | Component | Post Reader Client | `app/notes/post/PostReaderClient.jsx` | Loads public Blog post profile and Markdown into Website reader | LESSON-002, LESSON-004 | active |
| DATA-001 | Content Source | Blog Home URL | Blog repo Pages URL | Standalone public notes site | LESSON-004 | active |
| DATA-002 | Content Source | Posts Index URL | Blog repo Pages URL | Readable public post archive | LESSON-004 | active |
| DATA-003 | Content Source | Blog JSON Feed URL | Blog repo Pages URL | Machine-readable notes index | LESSON-004 | active |
| DATA-004 | Content Source | Example Post URL | Blog repo Pages URL | Full example public post | LESSON-004 | active |
| DESIGN-001 | Design Pattern | Warm Cream Background | `app/globals.css` | Soft studio atmosphere | LESSON-001 | active |
| DESIGN-002 | Design Pattern | Large Editorial Type | `app/globals.css`, `app/hero.css`, `app/typography.css` | Authored visual identity | LESSON-012, LESSON-014 | active |
| DESIGN-003 | Design Pattern | Rounded Minimal Cards | `app/globals.css` | Gentle structured navigation | LESSON-003 | active |
| DESIGN-004 | Design Pattern | Floating Header | `app/globals.css` | Persistent personal anchor | LESSON-002, LESSON-011 | active |
| DESIGN-005 | Design Pattern | Sage Accent | `app/globals.css` | Soft active marker | LESSON-001 | active |
| DESIGN-006 | Design Pattern | Human-Facing Copy | `app/page.jsx`, `app/site-data.js` | Friendly orientation language across filled pages | LESSON-002 | active |
| DESIGN-007 | Design Pattern | Gradient Fade-Off Structure | `app/globals.css` | Replace hard borders with soft separation | LESSON-008 | active |
| DESIGN-008 | Design Pattern | Flat Cel-Shaded Atmosphere | `app/globals.css` | Add graphic depth without realistic 3D | LESSON-007 | active |
| DESIGN-009 | Design Pattern | Animated Background Texture | `app/site-chrome.jsx`, `app/globals.css`, `app/hero.css` | Make pages feel alive without clutter | LESSON-006 | active |
| DESIGN-010 | Design Pattern | Tactile Polaroid Depth | `public/atmosphere/*`, `app/globals.css`, `app/hero.css` | Gloss, scratches, torn paper, and subtle depth over content | LESSON-010, LESSON-016 | active |
| DESIGN-011 | Design Pattern | Offscreen Top Emergence | `app/globals.css` | Make the header feel tucked into or entering from above the viewport | LESSON-011 | active |
| DESIGN-012 | Design Pattern | Unboxed Left-Expanding Menu | `app/site-chrome.jsx`, `app/globals.css`, `app/typography.css` | Direct links sit in the header without a dropdown panel | LESSON-013 | active |
| DESIGN-013 | Design Pattern | Art Lettering Typography | `app/hero.css`, `app/typography.css` | Hero type feels printed, drawn, playful, and studio-made | LESSON-014 | active |
| DESIGN-014 | Design Pattern | Paper List Hero Lockup | `app/page.jsx`, `app/hero.css` | Welcome title reads like a tactile paper note or list | LESSON-014 | active |
| DESIGN-015 | Design Pattern | Direct Unnumbered Navigation | `app/site-chrome.jsx`, `app/globals.css` | Header nav uses plain labels without decorative markers | LESSON-015 | active |
| DESIGN-016 | Design Pattern | Soft/Sharp Balance | `app/globals.css`, `app/typography.css` | Add definition so the site does not feel overly soft | LESSON-015 | active |
| DESIGN-017 | Design Pattern | Polaroid Frame Core Motif | `app/page.jsx`, `app/site-chrome.jsx`, `app/hero.css`, `public/atmosphere/*` | Dark backing plus cream torn frame used as reusable material structure | LESSON-016 | active |
| ASSET-001 | Asset | Grain Noise | `public/atmosphere/grain-noise.svg` | Subtle paper/film texture | LESSON-006 | active |
| ASSET-002 | Asset | Dust Specks | `public/atmosphere/dust-specks.svg` | Photo-surface dust and imperfections | LESSON-010 | active |
| ASSET-003 | Asset | Fine Scratches | `public/atmosphere/fine-scratches.svg` | Hairline glossy-surface scratches | LESSON-010 | active |
| ASSET-004 | Asset | Soft Scratches | `public/atmosphere/soft-scratches.svg` | Larger glass/photo scuffs | LESSON-010 | active |
| ASSET-005 | Asset | Gloss Sweep | `public/atmosphere/gloss-sweep.svg` | Diagonal glossy light sweep | LESSON-009 | active |
| ASSET-006 | Asset | Torn Polaroid Frame | `public/atmosphere/polaroid-frame-alpha.svg` | Alpha-ready cream torn photo frame for website layering | LESSON-016 | active |
| ASSET-007 | Asset | Dark Polaroid Backing | `public/atmosphere/polaroid-backing-alpha.svg` | Alpha-ready charcoal backing plate for depth below the frame | LESSON-016 | active |
| INT-009 | Interaction | Scroll-Rotating Hero Lockup | `app/hero.css` | Title rotates subtly during hero scroll | LESSON-012 | active |
| INT-010 | Interaction | Direct Header Navigation | `app/site-chrome.jsx`, `app/globals.css` | Page links are visible without a dropdown or Pages trigger | LESSON-013, LESSON-015 | active |
| METRIC-007 | Metric | Alive But Not Busy | `.agent/matrices/quality-metrics.matrix.md` | Check atmospheric motion quality | LESSON-006 | active |
| METRIC-008 | Metric | Flat But Tactile | `.agent/matrices/quality-metrics.matrix.md` | Check 2.5D depth stays graphic and performant | LESSON-010 | active |
| METRIC-010 | Metric | Offscreen But Usable | `.agent/matrices/quality-metrics.matrix.md` | Check top-edge header effect preserves access and readability | LESSON-011 | active |
| METRIC-011 | Metric | Quick Hero Read | `.agent/matrices/quality-metrics.matrix.md` | Check title reads quickly with reduced scroll | LESSON-012 | active |
| METRIC-012 | Metric | Open Left Without Panel | `.agent/matrices/quality-metrics.matrix.md` | Check menu opens left by default without separate border/background | LESSON-013 | active |
| METRIC-013 | Metric | Artsy Not Poster-Heavy | `.agent/matrices/quality-metrics.matrix.md` | Check hero type feels handmade and readable | LESSON-014 | active |
| METRIC-014 | Metric | Direct Nav With Contrast | `.agent/matrices/quality-metrics.matrix.md` | Check direct nav has no numbers, no helper text, no Pages button, and better contrast | LESSON-015 | active |
| METRIC-015 | Metric | Polaroid Motif Feels Core | `.agent/matrices/quality-metrics.matrix.md` | Check frame/backing stack feels integrated, not pasted on | LESSON-016 | active |
| DEC-006 | Decision | Motion Library Evaluation | `.agent/matrices/decisions.matrix.md` | Decide whether anime.js is needed | LESSON-009 | proposed |
| LESSON-001 | Lesson | Make Homepage Feel Authored | `.agent/lessons/*` | Avoid demo-shell feeling | METRIC-001 | active |
| LESSON-002 | Lesson | Use Human-Facing Copy | `.agent/lessons/*` | Translate technical structure into friendly language | METRIC-002 | active |
| LESSON-003 | Lesson | Keep Navigation Minimal | `.agent/lessons/*` | Keep current navigation simple and clear | METRIC-003 | active |
| LESSON-004 | Lesson | Public Memory Must Be Safe | `.agent/lessons/*` | Store only public-safe distilled context | METRIC-004 | active |
| LESSON-005 | Lesson | Reduce Static Bordered Structure | `.agent/lessons/*` | Use gradients/fades/material layers instead | METRIC-007 | active |
| LESSON-006 | Lesson | Add Animated Atmosphere | `.agent/lessons/*` | Add subtle living motion | METRIC-007 | active |
| LESSON-007 | Lesson | Keep Everything Graphically Flat | `.agent/lessons/*` | Stay illustrative while adding depth | METRIC-008 | active |
| LESSON-008 | Lesson | Prefer Gradients Over Borders | `.agent/lessons/*` | Use fade-offs before outlines | METRIC-007 | active |
| LESSON-009 | Lesson | Animation Should Have Intent | `.agent/lessons/*` | Motion must have a purpose | METRIC-007 | active |
| LESSON-010 | Lesson | Add Tactile 2.5D Depth | `.agent/lessons/*` | Use polaroid-like gloss and distortion | METRIC-008 | active |
| LESSON-011 | Lesson | Make Header Emerge From Offscreen Top | `.agent/lessons/*` | Use top-edge attachment without hiding controls | METRIC-010 | active |
| LESSON-012 | Lesson | Dock Hero Type And Reduce Scroll Length | `.agent/lessons/*` | Use left-docked compact hero title with scroll rotation | METRIC-011 | active |
| LESSON-013 | Lesson | Make Pages Menu Open Left And Stay Visually Unboxed | `.agent/lessons/*` | Use horizontal default-open reveal without dropdown panel | METRIC-012 | active |
| LESSON-014 | Lesson | Make Hero Typography Feel Like Art Lettering | `.agent/lessons/*` | Use softer handmade paper-list display type | METRIC-013 | active |
| LESSON-015 | Lesson | Use Direct Nav Labels Without Extra Markers | `.agent/lessons/*` | Remove nav numbers, helper text, redundant Pages button, and excessive softness | METRIC-014 | active |
| LESSON-016 | Lesson | Use Polaroid Frame Stacks As A Core Material Motif | `.agent/lessons/*` | Layer dark backing and cream torn frame as reusable visual structure | METRIC-015 | active |
