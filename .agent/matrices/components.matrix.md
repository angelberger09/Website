# Components Matrix

| Component ID | Name | Used In | Purpose | Behavior | Visual Rules | Related Lessons | Risks | Status |
|---|---|---|---|---|---|---|---|---|
| COMP-001 | Floating Header | All pages through `app/layout.jsx` | Keep personal identity and navigation visible | Fixed at top while scrolling | Top-attached paper material tab with direct links, paper texture, and visible soft drop shadow | LESSON-001, LESSON-002, LESSON-011, LESSON-015, LESSON-020 | Could crowd small screens if too many routes are added or lose readability if paper texture is too strong | active |
| COMP-002 | Direct Studio Navigation | All pages through `app/site-chrome.jsx` | Provide compact access to current Website pages | Direct visible links; no `Pages` trigger, edge numbers, or helper text | Unboxed links with stronger contrast on a tactile paper header surface | LESSON-003, LESSON-013, LESSON-015, LESSON-020 | Needs ongoing responsive review and accessible focus states over textured material | active |
| COMP-003 | Scroll Title Sequence | PAGE-001 | Create authored arrival moment | Left-docked sticky title with subtle scroll rotation | Art-lettering style with polaroid material stack | LESSON-012, LESSON-014, LESSON-016 | Motion must remain purposeful | active |
| COMP-004 | Studio Page Cards | PAGE-001 | Present destinations as friendly doors | Grid of four linked cards with entry cues | Rounded material cards with eyebrow, title, description, direct cue, and stronger paper/collage material cues | LESSON-002, LESSON-003, LESSON-015, LESSON-018, LESSON-019 | Must stay synced with page routes | active |
| COMP-005 | Shared Site Chrome | All pages | Keep the page system visually cohesive | Header, atmosphere layer, footer, page intro, and detail card | Reusable cream/paper/polaroid/gloss material language that reads as paper before glass | LESSON-001, LESSON-002, LESSON-010, LESSON-015, LESSON-016, LESSON-019, LESSON-020 | Shared changes affect every route | active |
| COMP-006 | Notes Reader Client | PAGE-003, PAGE-003B | Preview published posts from Blog feed | Fetches public posts index with fallback URLs and explains reader states | Wide reader card plus post cards and state messages | LESSON-002, LESSON-004, LESSON-018 | Needs feed validation and clear error states | active |
| COMP-007 | Post Reader Client | PAGE-003A, PAGE-003B | Render a single published note inside Website | Reads slug, fetches public profile and Markdown with fallbacks | Reader card with category/date tags | LESSON-002, LESSON-004 | Markdown rendering should remain simple | active |
| COMP-008 | Filled Page Sections | PAGE-001, PAGE-002, PAGE-003, PAGE-004, PAGE-005 | Add route-specific depth beyond first-pass cards | Data-driven section arrays render principles, lanes, details, pathways, and readiness promises | Uses existing material cards, wide cards, lists, soft link rows, and stronger paper-collage surface cues | LESSON-001, LESSON-002, LESSON-018, LESSON-019 | Keep content public-safe and avoid overpromising future inventory | active |
| COMP-009 | Next Step Band | PAGE-001, PAGE-002, PAGE-003, PAGE-004, PAGE-005, PAGE-003B | Give each filled page a clear continuation path | Reuses `app/page-continuity.js` route-specific next-step data and `app/next-step-band.jsx` | Wide material card with existing pathway link rows | LESSON-002, LESSON-018 | Must avoid circular or noisy route suggestions | active |

## Addendum — 2026-06-24 02:05 ET

The main Website pages are now filled out as active routes. COMP-001 and COMP-002 moved into shared site chrome so the direct navigation and atmosphere persist across Home, About, Notes, Portfolio, Store, and Blog compatibility routes.

## Addendum — 2026-06-24 19:10 ET

COMP-008 records the expanded page-fill sections added across the homepage, About, Notes, Portfolio, and Store. These sections make the Website feel complete now while leaving connected data repos free to provide deeper material later.

## Addendum — 2026-06-24 19:19 ET

COMP-009 adds a reusable next-step band so filled pages do not feel isolated. It keeps each room connected to the most natural related studio routes using public-safe, human-facing continuity copy.

## Addendum — 2026-06-24 19:38 ET

FEEDBACK-007 showed that the shared About page surface is not papery enough yet. COMP-004, COMP-005, and COMP-008 should carry stronger paper/collage material cues in the next implementation pass: visible fiber, torn/cut edges, layered sheet shadows, scanned imperfections, and paper-first card surfaces.

## Addendum — 2026-06-24 19:41 ET

FEEDBACK-008 narrows the paper material direction onto the shared top bar. COMP-001 should read like a paper strip laid over the top of the page, using texture/material assets or shader-like CSS and a clear soft drop shadow while COMP-002 keeps direct navigation readable.
