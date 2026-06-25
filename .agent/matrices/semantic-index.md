# Semantic Index Matrix

Every meaningful project item gets an ID so future work can trace purpose, lessons, relationships, and metrics.

| ID | Type | Name | Location | Purpose | Related Lesson | Status |
|---|---|---|---|---|---|---|
| PAGE-001 | Page | Homepage | `app/page.jsx` | Main public studio entry with filled page doors and next-step continuity | LESSON-001, LESSON-002, LESSON-015, LESSON-018, LESSON-019, LESSON-021, LESSON-022 | active |
| PAGE-002 | Page | About | `app/about/page.jsx` | Public studio orientation page with continuation paths and a short supportive page subtitle | LESSON-001, LESSON-002, LESSON-004, LESSON-018, LESSON-019, LESSON-020, LESSON-022, LESSON-023 | active |
| PAGE-003 | Page | Notes | `app/notes/page.jsx`, `app/notes/NotesPageClient.jsx` | Website-owned published notes index using Blog as source with studio-route continuity, source-readiness guidance, and a short supportive page subtitle | LESSON-002, LESSON-004, LESSON-018, LESSON-019, LESSON-022, LESSON-023 | active |
| PAGE-003A | Page | Notes Post Reader | `app/notes/post/page.jsx`, `app/notes/post/PostReaderClient.jsx` | Website-owned individual note reader | LESSON-002, LESSON-004, LESSON-022 | active |
| PAGE-003B | Page | Blog Compatibility Routes | `app/blog/page.jsx`, `app/blog/post/page.jsx` | Preserve existing Blog route links while reusing Notes reader with the same short supportive Notes subtitle | LESSON-002, LESSON-004, LESSON-018, LESSON-019, LESSON-022, LESSON-023 | active |
| PAGE-004 | Page | Portfolio | `app/portfolio/page.jsx` | First public work/project archive with readiness lanes, future feed contract, staged record states, related route continuity, and a short supportive page subtitle | LESSON-001, LESSON-002, LESSON-004, LESSON-018, LESSON-019, LESSON-022, LESSON-023 | active |
| PAGE-005 | Page | Store | `app/store/page.jsx` | Future shop/product lane doorway with launch checklist, staged availability states, future feed contract, honest readiness, related route continuity, and a short supportive page subtitle | LESSON-001, LESSON-002, LESSON-004, LESSON-018, LESSON-019, LESSON-022, LESSON-023 | active |
| COMP-001 | Component | Floating Header | `app/site-chrome.jsx`, `app/globals.css`, `app/paper-card-pass.css` | Persistent personal identity and direct navigation on a top-attached paper header surface | LESSON-002, LESSON-011, LESSON-015, LESSON-020 | active |
| COMP-002 | Component | Direct Studio Navigation | `app/site-chrome.jsx`, `app/globals.css`, `app/typography.css` | Compact access to top-level Website pages | LESSON-003, LESSON-013, LESSON-015, LESSON-020 | active |
| COMP-003 | Component | Scroll Title Sequence | `app/page.jsx`, `app/globals.css`, `app/hero.css`, `app/typography.css` | Left-docked rotating paper-list arrival title with polaroid material stack | LESSON-012, LESSON-014, LESSON-016, LESSON-019, LESSON-021 | active |
| COMP-004 | Component | Studio Page Cards | `app/page.jsx`, `app/globals.css` | Human-facing links to current public pages | LESSON-002, LESSON-015, LESSON-018, LESSON-019, LESSON-021, LESSON-022 | active |
| COMP-005 | Component | Shared Site Chrome | `app/site-chrome.jsx`, `app/layout.jsx`, `app/paper-card-pass.css` | Header, atmosphere, footer, page intro, and detail card primitives including centralized PageIntro subtitle styling and a paper header material pass | LESSON-001, LESSON-002, LESSON-015, LESSON-019, LESSON-020, LESSON-022, LESSON-023 | active |
| COMP-006 | Component | Notes Reader Client | `app/notes/NotesPageClient.jsx` | Loads published Blog posts into Website-owned Notes page and explains source-readiness expectations | LESSON-002, LESSON-004, LESSON-018, LESSON-022, LESSON-023 | active |
| COMP-007 | Component | Post Reader Client | `app/notes/post/PostReaderClient.jsx` | Loads public Blog post profile and Markdown into Website reader | LESSON-002, LESSON-004, LESSON-022 | active |
| COMP-008 | Component | Filled Page Sections | `app/site-data.js`, `app/store-readiness.js`, `app/source-readiness.js`, `app/portfolio-feed-contract.js`, route files | Route-specific sections, including Portfolio readiness lanes, Portfolio feed contract fields, Store launch readiness, Store feed contract fields, Notes source-readiness fields, and Store availability, that make pages useful before connected repos have full data | LESSON-001, LESSON-002, LESSON-004, LESSON-018, LESSON-019, LESSON-021, LESSON-022 | active |
| COMP-009 | Component | Next Step Band | `app/next-step-band.jsx`, `app/page-continuity.js`, route files | Reusable page-to-page continuity pattern for filled Website rooms | LESSON-002, LESSON-018, LESSON-022 | active |
| DATA-001 | Content Source | Blog Home URL | Blog repo Pages URL | Standalone public notes site | LESSON-004 | active |
| DATA-002 | Content Source | Posts Index URL | Blog repo Pages URL | Readable public post archive | LESSON-004 | active |
| DATA-003 | Content Source | Blog JSON Feed URL | Blog repo Pages URL | Machine-readable notes index | LESSON-004 | active |
| DATA-004 | Content Source | Example Post URL | Blog repo Pages URL | Full example public post | LESSON-004 | active |
| DATA-005 | Content Source | Page Continuity Data | `app/page-continuity.js` | Shared route-to-route next-step copy for major Website pages | LESSON-002, LESSON-018 | active |
| DATA-006 | Content Source | Portfolio Readiness Data | `app/site-data.js` | Shared criteria for ready, preparing, and held Portfolio records before a future Portfolio feed exists | LESSON-002, LESSON-004, LESSON-018 | active |
| DATA-007 | Content Source | Store Readiness Data | `app/store-readiness.js` | Shared checklist and availability states for future Store listings before a Store feed exists | LESSON-002, LESSON-004, LESSON-018 | active |
| DATA-008 | Content Source | Store Feed Contract | `app/store-readiness.js` | Public-safe field shape and rules for future Store repo product data | LESSON-002, LESSON-004, LESSON-018 | active |
| DATA-009 | Content Source | Blog Source Readiness Data | `app/source-readiness.js` | Public-safe feed contract, published-record rules, reader file needs, and fallback guidance for Blog-powered notes | LESSON-002, LESSON-004, LESSON-018 | active |
| DATA-010 | Content Source | Portfolio Feed Contract | `app/portfolio-feed-contract.js` | Public-safe field shape, record states, and rules for future Portfolio repo project data | LESSON-002, LESSON-004, LESSON-018 | active |
| DESIGN-001 | Design Pattern | Warm Cream Background | `app/globals.css` | Soft studio atmosphere | LESSON-001 | active |
| DESIGN-002 | Design Pattern | Large Editorial Type | `app/globals.css`, `app/hero.css`, `app/typography.css` | Authored visual identity | LESSON-012, LESSON-014 | active |
| DESIGN-003 | Design Pattern | Rounded Minimal Cards | `app/globals.css` | Former gentle card base to refine into paper-piece surfaces | LESSON-003, LESSON-022 | active |
| DESIGN-004 | Design Pattern | Floating Header | `app/globals.css`, `app/paper-card-pass.css` | Persistent personal anchor on the shared paper header surface | LESSON-002, LESSON-011, LESSON-020 | active |
| DESIGN-005 | Design Pattern | Sage Accent | `app/globals.css` | Soft active marker | LESSON-001 | active |
| DESIGN-006 | Design Pattern | Human-Facing Copy | `app/page.jsx`, `app/site-data.js` | Friendly orientation language across filled pages and page intro subtitles | LESSON-002, LESSON-023 | active |
| DESIGN-007 | Design Pattern | Gradient Fade-Off Structure | `app/globals.css` | Replace hard borders with soft separation | LESSON-008 | active |
| DESIGN-008 | Design Pattern | Flat Cel-Shaded Atmosphere | `app/globals.css` | Add graphic depth without realistic 3D | LESSON-007 | active |
| DESIGN-009 | Design Pattern | Animated Background Texture | `app/site-chrome.jsx`, `app/globals.css`, `app/hero.css` | Make pages feel alive without clutter | LESSON-006 | active |
| DESIGN-010 | Design Pattern | Tactile Polaroid Depth | `public/atmosphere/*`, `app/globals.css`, `app/hero.css` | Gloss, scratches, torn paper, and subtle depth over content | LESSON-010, LESSON-016, LESSON-019, LESSON-021, LESSON-022 | active |
| DESIGN-011 | Design Pattern | Offscreen Top Emergence | `app/globals.css` | Make the header feel tucked into or entering from above the viewport | LESSON-011, LESSON-020 | active |
| DESIGN-012 | Design Pattern | Unboxed Left-Expanding Menu | `app/site-chrome.jsx`, `app/globals.css`, `app/typography.css` | Direct links sit in the header without a dropdown panel | LESSON-013 | active |
| DESIGN-013 | Design Pattern | Art Lettering Typography | `app/hero.css`, `app/typography.css` | Hero type feels printed, drawn, playful, and studio-made | LESSON-014 | active |
| DESIGN-014 | Design Pattern | Paper List Hero Lockup | `app/page.jsx`, `app/hero.css` | Welcome title reads like a tactile paper note or list | LESSON-014, LESSON-019 | active |
| DESIGN-015 | Design Pattern | Direct Unnumbered Navigation | `app/site-chrome.jsx`, `app/globals.css` | Header nav uses plain labels without decorative markers | LESSON-015, LESSON-020 | active |
| DESIGN-016 | Design Pattern | Soft/Sharp Balance | `app/globals.css`, `app/typography.css` | Add definition so the site does not feel overly soft | LESSON-015 | active |
| DESIGN-017 | Design Pattern | Polaroid Frame Core Motif | `app/page.jsx`, `app/site-chrome.jsx`, `app/hero.css`, `public/atmosphere/*` | Dark backing plus cream torn frame used as reusable material structure | LESSON-016, LESSON-019, LESSON-021, LESSON-022 | active |
| DESIGN-018 | Design Pattern | Visitor Continuity Bands | `app/next-step-band.jsx`, `app/page-continuity.js` | Keep filled pages connected with quiet next-step guidance | LESSON-002, LESSON-018 | active |
| DESIGN-019 | Design Pattern | Paper Material Authenticity | `app/globals.css`, `app/site-chrome.jsx`, `app/paper-card-pass.css`, `public/atmosphere/*` | Make shared surfaces read as handmade paper/collage before translucent UI | LESSON-019, LESSON-022 | active |
| DESIGN-020 | Design Pattern | Paper Header Surface | `app/paper-card-pass.css`, `app/site-chrome.jsx`, `public/atmosphere/*` | Make the shared top bar read as a paper strip laid over the page with texture, shadow, and an uneven lower-edge cue | LESSON-020 | active |
| DESIGN-021 | Design Pattern | Content-Bearing Polaroid Cards | `app/page.jsx`, `app/globals.css`, `app/hero.css`, `public/atmosphere/*` | Use polaroid frames as readable card surfaces with filled centers instead of decoration-only background layers | LESSON-021 | active |
| DESIGN-022 | Design Pattern | Paper Piece Card Surfaces | `app/globals.css`, route card/link components | Make shared cards read as individual paper or polaroid pieces instead of rounded UI panels | LESSON-022 | active |
| DESIGN-023 | Design Pattern | Supportive Page Intro Subtitles | `app/site-chrome.jsx`, route page files | Keep page intro titles short, thin, slightly smaller, and subordinate to the homepage hero | LESSON-023 | active |
| ASSET-001 | Asset | Grain Noise | `public/atmosphere/grain-noise.svg` | Subtle paper/film texture | LESSON-006, LESSON-010, LESSON-019, LESSON-020, LESSON-022 | active |
| ASSET-002 | Asset | Dust Specks | `public/atmosphere/dust-specks.svg` | Photo-surface dust and imperfections | LESSON-010, LESSON-019, LESSON-022 | active |
| ASSET-003 | Asset | Fine Scratches | `public/atmosphere/fine-scratches.svg` | Hairline glossy-surface scratches | LESSON-010, LESSON-022 | active |
| ASSET-004 | Asset | Soft Scratches | `public/atmosphere/soft-scratches.svg` | Larger glass/photo scuffs | LESSON-010 | active |
| ASSET-005 | Asset | Gloss Sweep | `public/atmosphere/gloss-sweep.svg` | Diagonal glossy light sweep | LESSON-009, LESSON-010, LESSON-020 | active |
| ASSET-006 | Asset | Torn Polaroid Frame | `public/atmosphere/polaroid-frame-alpha.svg` | Alpha-ready cream torn photo frame for content-bearing website card surfaces | LESSON-016, LESSON-019, LESSON-020, LESSON-021, LESSON-022 | active |
| ASSET-007 | Asset | Dark Polaroid Backing | `public/atmosphere/polaroid-backing-alpha.svg` | Alpha-ready charcoal backing plate for depth below the frame and behind content-filled card centers | LESSON-016, LESSON-021, LESSON-022 | active |
| INT-009 | Interaction | Scroll-Rotating Hero Lockup | `app/hero.css` | Title rotates subtly during hero scroll | LESSON-012 | active |
| INT-010 | Interaction | Direct Header Navigation | `app/site-chrome.jsx`, `app/globals.css` | Page links are visible without a dropdown or Pages trigger | LESSON-013, LESSON-015, LESSON-020 | active |
| INT-011 | Interaction | Route Continuity Links | `app/next-step-band.jsx`, `app/page-continuity.js` | Each filled page offers two calm related next routes | LESSON-002, LESSON-018, LESSON-022 | active |
| METRIC-007 | Metric | Alive But Not Busy | `.agent/matrices/quality-metrics.matrix.md` | Check atmospheric motion quality | LESSON-006 | active |
| METRIC-008 | Metric | Flat But Tactile | `.agent/matrices/quality-metrics.matrix.md` | Check 2.5D depth stays graphic and performant | LESSON-010 | active |
| METRIC-009 | Metric | Borders Are Not Primary Structure | `.agent/matrices/quality-metrics.matrix.md` | Check gradients, material layers, shadows, and card separation carry structure before borders are added | LESSON-008 | active |
| METRIC-010 | Metric | Offscreen But Usable | `.agent/matrices/quality-metrics.matrix.md` | Check top-edge header effect preserves access and readability | LESSON-011 | active |
| METRIC-011 | Metric | Quick Hero Read | `.agent/matrices/quality-metrics.matrix.md` | Check title reads quickly with reduced scroll | LESSON-012 | active |
| METRIC-012 | Metric | Open Left Without Panel | `.agent/matrices/quality-metrics.matrix.md` | Check menu opens left by default without separate border/background | LESSON-013 | active |
| METRIC-013 | Metric | Artsy Not Poster-Heavy | `.agent/matrices/quality-metrics.matrix.md` | Check hero type feels handmade and readable | LESSON-014 | active |
| METRIC-014 | Metric | Direct Nav With Contrast | `.agent/matrices/quality-metrics.matrix.md` | Check direct nav has no numbers, no helper text, no Pages button, and better contrast | LESSON-015 | active |
| METRIC-015 | Metric | Polaroid Motif Feels Core | `.agent/matrices/quality-metrics.matrix.md` | Check frame/backing stack feels integrated, not pasted on | LESSON-016 | active |
| METRIC-016 | Metric | Feedback Source Validated | `.agent/matrices/quality-metrics.matrix.md` | Check feedback records include validation source and implementation boundary | LESSON-017 | active |
| METRIC-017 | Metric | Filled Page Continuity | `.agent/matrices/quality-metrics.matrix.md` | Check each major page gives useful next routes without clutter | LESSON-018 | active |
| METRIC-018 | Metric | Paper Material Reads First | `.agent/matrices/quality-metrics.matrix.md` | Check shared surfaces read as paper/collage before translucent UI | LESSON-019 | active |
| METRIC-019 | Metric | Paper Header Surface | `.agent/matrices/quality-metrics.matrix.md` | Check header reads as tactile paper over the page with texture, shadow, and readable nav | LESSON-020 | active |
| METRIC-020 | Metric | Content-Bearing Polaroids | `.agent/matrices/quality-metrics.matrix.md` | Check polaroid frames used as cards have filled readable centers and are not only background decoration | LESSON-021 | active |
| METRIC-021 | Metric | Paper Cards Not UI Cards | `.agent/matrices/quality-metrics.matrix.md` | Check shared card surfaces read as paper/polaroid pieces rather than generic rounded UI panels | LESSON-022 | active |
| METRIC-022 | Metric | One-Line Supportive Subtitle | `.agent/matrices/quality-metrics.matrix.md` | Check page intro titles for 2–5 words, one-line fit, thinner weight, slightly smaller scale, and supportive hierarchy | LESSON-023 | active |
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
| LESSON-017 | Lesson | Validate Feedback Against The Actual Website | `.agent/lessons/*` | Source-check visual/current-site feedback before storing or applying it | METRIC-004 | active |
| LESSON-018 | Lesson | Fill Public Pages As Useful Rooms | `.agent/lessons/*` | Make filled pages useful, honest, and connected instead of placeholders | METRIC-016 | active |
| LESSON-019 | Lesson | Make Paper Material Feel Primary | `.agent/lessons/*` | Make shared surfaces read as handmade paper/collage before soft translucent UI | METRIC-018 | active |
| LESSON-020 | Lesson | Make Top Bar Feel Like Layered Paper | `.agent/lessons/*` | Make the shared top bar read as a paper strip laid over the page with asset/shader texture and drop shadow | METRIC-019 | active |
| LESSON-021 | Lesson | Make Polaroid Frames Carry Content | `.agent/lessons/*` | Fill the polaroid center with meaningful content when the motif is used as a card | METRIC-020 | active |
| LESSON-022 | Lesson | Make Shared Cards Read As Paper Pieces | `.agent/lessons/*` | Make shared card surfaces feel like individual paper or polaroid pieces rather than rounded UI panels | METRIC-021 | active |
| LESSON-023 | Lesson | Keep Page Intro Titles Supportive | `.agent/lessons/*` | Keep major page intro titles short, thin, slightly smaller, and one-line so they support instead of compete with the homepage hero | METRIC-022 | active |
