# Components Matrix

| Component ID | Name | Used In | Purpose | Behavior | Visual Rules | Related Lessons | Risks | Status |
|---|---|---|---|---|---|---|---|---|
| COMP-001 | Floating Header | All pages through `app/layout.jsx` | Keep personal identity and navigation visible | Fixed at top while scrolling | Top-attached paper material tab with direct links, paper texture, and visible soft drop shadow | LESSON-001, LESSON-002, LESSON-011, LESSON-015, LESSON-020 | Could crowd small screens if too many routes are added or lose readability if paper texture is too strong | active |
| COMP-002 | Direct Studio Navigation | All pages through `app/site-chrome.jsx` | Provide compact access to current Website pages | Direct visible links; no `Pages` trigger, edge numbers, or helper text | Unboxed links with stronger contrast on a tactile paper header surface | LESSON-003, LESSON-013, LESSON-015, LESSON-020 | Needs ongoing responsive review and accessible focus states over textured material | active |
| COMP-003 | Scroll Title Sequence | PAGE-001 | Create authored arrival moment | Left-docked sticky title with subtle scroll rotation | Art-lettering style with polaroid material stack that can become a content-bearing surface when used as a card | LESSON-012, LESSON-014, LESSON-016, LESSON-021 | Motion must remain purposeful and frame content must stay readable | active |
| COMP-004 | Studio Page Cards | PAGE-001 | Present destinations as friendly doors | Grid of four linked cards with entry cues | Card surfaces should feel like individual paper/polaroid pieces, not generic rounded panels; when frames are used, the center holds readable destination content | LESSON-002, LESSON-003, LESSON-015, LESSON-018, LESSON-019, LESSON-021, LESSON-022 | Must stay synced with page routes and avoid decorative empty card frames or overly rounded UI cards | active |
| COMP-005 | Shared Site Chrome | All pages | Keep the page system visually cohesive | Header, atmosphere layer, footer, page intro, and detail card | Reusable cream/paper/polaroid/gloss material language; PageIntro titles should read as short one-line supportive subtitles rather than oversized hero headlines | LESSON-001, LESSON-002, LESSON-010, LESSON-015, LESSON-016, LESSON-019, LESSON-020, LESSON-022, LESSON-023 | Shared changes affect every route; PageIntro subtitle sizing is now centralized in a named style object and can move into shared CSS when a broader CSS pass is useful | active |
| COMP-006 | Notes Reader Client | PAGE-003, PAGE-003B | Preview published posts from Blog feed | Fetches public posts index with fallback URLs, filters published posts, sorts newest first, highlights the latest note, explains reader states, and renders Blog source-readiness rules from `app/source-readiness.js` | Wide reader card plus post cards, source contract cards, fallback rows, and state messages should inherit paper-piece surface cues | LESSON-002, LESSON-004, LESSON-018, LESSON-022 | Needs live feed validation, date parsing tolerance, and clear error states | active |
| COMP-007 | Post Reader Client | PAGE-003A, PAGE-003B | Render a single published note inside Website | Reads slug, fetches public profile and Markdown with fallbacks, checks public status, handles missing/error states, and adds support/continuity sections | Reader card with category/date tags should feel like a paper reader sheet rather than a rounded app panel | LESSON-002, LESSON-004, LESSON-018, LESSON-022 | Markdown rendering should remain simple and support cards should not distract from reading | active |
| COMP-008 | Filled Page Sections | PAGE-001, PAGE-002, PAGE-003, PAGE-004, PAGE-005 | Add route-specific depth beyond first-pass cards | Data-driven section arrays render principles, lanes, readiness criteria, details, pathways, Store launch checklist, Store availability states, Store feed contract fields, Notes source-readiness fields, Portfolio feed contract fields, Portfolio record states, and promises | Uses material cards, wide cards, lists, soft link rows, stronger paper-collage surface cues, content-filled polaroid treatments, and less uniform rounding | LESSON-001, LESSON-002, LESSON-004, LESSON-018, LESSON-019, LESSON-021, LESSON-022 | Keep content public-safe, readable, honest, and clear about non-live inventory or source readiness | active |
| COMP-009 | Next Step Band | PAGE-001, PAGE-002, PAGE-003, PAGE-004, PAGE-005, PAGE-003B, PAGE-003A | Give each filled page a clear continuation path | Reuses `app/page-continuity.js` route-specific next-step data and `app/next-step-band.jsx` | Wide paper-piece surface with pathway link rows that should avoid a generic rounded card look | LESSON-002, LESSON-018, LESSON-022 | Must avoid circular or noisy route suggestions and should remain readable if paper edges become irregular | active |

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

## Addendum — 2026-06-24 19:41 ET

FEEDBACK-009 clarifies that polaroid frames should not remain empty decorative background pieces when they appear in the card system. COMP-003, COMP-004, and COMP-008 should treat the polaroid center as a readable content area for page information, route cues, preview art, or future project/product material.

## Addendum — 2026-06-24 19:44 ET

FEEDBACK-010 clarifies that shared card-like surfaces should not remain smooth rounded UI panels. COMP-004, COMP-005, COMP-006, COMP-007, COMP-008, and COMP-009 should feel like individual paper or polaroid pieces with uneven/cut edge cues, layered backing shadows, paper texture, and content-bearing centers while keeping readability and accessible focus states intact.

## Addendum — 2026-06-24 19:50 ET

COMP-006 and COMP-007 now carry the next reader-depth pass: the notes index highlights the latest published note and the post reader becomes a complete room with source-safe state handling, support cards, and a continuation band.

## Addendum — 2026-06-24 20:09 ET

COMP-008 now carries Portfolio archive readiness lanes so the page can distinguish published cards, preparing records, and offstage private drafts before future Portfolio repo data exists.

## Addendum — 2026-06-24 20:28 ET

COMP-008 now also carries Store launch readiness: a public-safe checklist and staged availability states so the Store page can stay useful before any Store repo feed or live product listings exist.

## Addendum — 2026-06-24 20:41 ET

COMP-008 now includes the future Store feed contract fields and rules. The Store page can explain the shape that future Store repo data should take before the feed is live, keeping the next implementation path clearer without inventing inventory.

## Addendum — 2026-06-24 20:51 ET

COMP-006 and COMP-008 now include a Notes source-readiness layer. The Notes page can explain the Blog feed contract, reader file expectations, and fallback rules before deeper feed automation or live validation work depends on them.

## Addendum — 2026-06-24 21:08 ET

COMP-008 now includes a Portfolio feed contract and staged record states. The Portfolio page can explain the future archive data shape before a Portfolio repo feed exists, keeping the next implementation path clearer without inventing case studies.

## Addendum — 2026-06-24 21:30 ET

COMP-005 now applies LESSON-023 and METRIC-022 directly inside `app/site-chrome.jsx`: shared `PageIntro` titles are constrained to a thinner, smaller, one-line subtitle treatment so route intros no longer inherit the oversized hero-heading scale from `app/globals.css`.

## Addendum — 2026-06-24 21:38 ET

COMP-005 now keeps the PageIntro subtitle treatment in a named `pageIntroTitleStyle` object instead of recreating the style literal inside the JSX. This preserves the current visual target while making the shared subtitle rule easier to find and move into CSS during a broader style-system pass.
