# Components Matrix

| Component ID | Name | Used In | Purpose | Behavior | Visual Rules | Related Lessons | Risks | Status |
|---|---|---|---|---|---|---|---|---|
| COMP-001 | Floating Header | All pages through `app/layout.jsx`, `app/paper-card-pass.css`, and `app/paper-header-pass.css` | Keep personal identity and navigation visible | Fixed at top while scrolling | Top-attached paper material tab with direct links, existing grain/dust/scratch texture, subtle lower-edge irregularity, visible soft drop shadow, and a connected paper-thread/stamp treatment that helps the whole strip read as one tactile placed sheet at screenshot scale; FEEDBACK-011 requires the whole strip to read as paper, not as a smooth UI capsule | LESSON-001, LESSON-002, LESSON-011, LESSON-015, LESSON-020 | Could crowd small screens if too many routes are added or lose readability if paper texture is too strong | active |
| COMP-002 | Direct Studio Navigation | All pages through `app/site-chrome.jsx`, `app/globals.css`, and `app/paper-header-pass.css` | Provide compact access to top-level Website pages | Direct visible links; no `Pages` trigger, edge numbers, or helper text | Unboxed links with stronger contrast on a tactile paper header surface; nav labels should avoid pill-like UI chips and feel like small paper tabs/cuts when visually separated. The header thread pass keeps the labels direct while adding slight cut-paper rotation, label underscoring, and a current-room stamp to the active link. The footer now also gives the active direct route a readable clipped current-room paper slip instead of relying only on background tint. | LESSON-003, LESSON-013, LESSON-015, LESSON-020 | Needs ongoing responsive review and accessible focus states over textured material | active |
| COMP-003 | Scroll Title Sequence | PAGE-001 | Create authored arrival moment | Left-docked sticky title with subtle scroll rotation, a small content-bearing hero polaroid card, and a first-screen route contact sheet | Art-lettering style with polaroid material stack; when the frame appears in the hero, the center carries readable studio-room preview content, and the `home-hero-contact-sheet` now gives visitors immediate mini route-photo cards without waiting for lower door sections | LESSON-001, LESSON-002, LESSON-012, LESSON-014, LESSON-016, LESSON-018, LESSON-021, LESSON-022 | Motion must remain purposeful, frame content and contact-sheet route cards must stay readable, especially on small screens, and the route visuals must avoid fake previews or heavy effects | active |
| COMP-004 | Studio Page Cards | PAGE-001 | Present destinations as friendly doors | First-screen contact-sheet route cards, front-room highlight photo notes, and fuller grid of four linked room cards with entry cues | Homepage route doors now use `home-door-board` and `home-door-card` with honest image-like centers, clipped paper surfaces, visible room labels, and accessible links rather than the broad shared `page-card` treatment; the hero now also repeats those same four destinations as lightweight mini route-photo cards for faster orientation; the front-room highlights now use `home-note-piece__visual` centers so their existing public copy reads as paper/photo notes rather than text-only cards | LESSON-002, LESSON-003, LESSON-015, LESSON-018, LESSON-019, LESSON-021, LESSON-022, LESSON-024, LESSON-025 | Must stay synced with page routes and avoid decorative empty card frames, fake previews, redundant noisy navigation, or overly rounded UI cards | active |
| COMP-005 | Shared Site Chrome | All pages | Keep the page system visually cohesive | Header, atmosphere layer, footer, page intro, detail card, and loaded CSS passes | Reusable cream/paper/polaroid/gloss material language; PageIntro titles now use the shared `page-hero__subtitle` class plus `app/page-intro-subtitle-pass.css` so route titles render as small clipped paper subtitle labels instead of inline hero-scale headings; PageIntro polaroid/photo centers now use `app/page-intro-photo-card-pass.css` so the route-specific cards sit visibly between the dark backing and torn frame with tape, clipped paper, and readable labels instead of behaving like quiet background decals; the PageIntro stack now also carries a `page-hero__room-compass` built in `app/site-chrome.jsx` and styled by `app/page-intro-room-compass-pass.css`, giving each route intro visible Open / Look for / Leave by paper cues that make the shared intro read more like a calm room and less like a standalone decorative photo card; the PageIntro copy side now also renders a `page-hero__room-shelf` whose hero board, featured shelf, source note, and next path pieces include small honest abstract photo cues instead of staying text-only slips; the shared footer now combines an abstract studio mark/photo center, route-photo slips, and an active current-room paper slip from `app/site-footer-nav.jsx` plus `app/footer-current-room-slip-pass.css`, so the current footer room is visible as a readable paper label rather than only a tinted route card; page-specific/shared passes may replace broad panels with custom paper-board compositions when `.agent` supports stronger paper hierarchy. About now opens with an `about-opening-board` paper room map before its note-board sections. The shared continuity area now has `app/continuity-paper-trail-pass.css` so all route next-step sections read as a guided paper trail instead of broad link panels. The footer now uses `studio-footer--paper` markup, `app/footer-paper-trail-pass.css`, and `app/footer-studio-mark-photo-pass.css` so the bottom chrome becomes a clipped paper mark with an honest abstract paper/photo center plus direct unnumbered nav slips instead of a plain text/nav row or text-only identity card. | LESSON-001, LESSON-002, LESSON-010, LESSON-015, LESSON-016, LESSON-018, LESSON-019, LESSON-020, LESSON-021, LESSON-022, LESSON-023, LESSON-024, LESSON-025, LESSON-026 | Shared changes affect every route; PageIntro subtitle sizing, photo-center content, room compass cues, room shelf cues, footer mark content, active footer slip content, and continuity/footer links must stay readable and keyboard-visible over paper texture without implying fake portfolio/product assets | active |
| COMP-006 | Notes Reader Client | PAGE-003, PAGE-003B | Preview published posts from Blog feed | Fetches public posts index with fallback URLs, filters published posts, sorts newest first, highlights the latest note, explains reader states, and renders Blog source-readiness rules from `app/source-readiness.js` | Notes now uses `notes-reader-board`, `notes-paper-stack`, `notes-source-board`, `notes-source-ledger`, `notes-source-detail-strip`, `notes-source-detail-slip`, `notes-source-receipt`, and `notes-fallback-receipt` structures with `app/notes-paper-reader-pass.css`, `app/notes-support-photo-slips-pass.css`, and `app/notes-source-receipts-pass.css` so the index/source sections read as a paper reader board, scrollable note strip, source receipt/photo cards, source requirement slips, fallback receipts, support/state photo slips, and shelf tapes instead of broad generic panels or generic bullet lists; visible copy says studio reading door, public writing source, and quiet backup path instead of Website-owned/raw-feed language | LESSON-002, LESSON-004, LESSON-018, LESSON-019, LESSON-021, LESSON-022, LESSON-026 | Needs live feed validation, date parsing tolerance, clear error states, performance review if the public feed grows large, and continued care that abstract visuals never imply fake note artwork | active |
| COMP-007 | Post Reader Client | PAGE-003A, PAGE-003B | Render a single published note inside Website | Reads slug, fetches public profile and Markdown with fallbacks, checks public status, handles missing/error states, and adds support/continuity sections | The post reader renders as a paper desk and lined reading sheet with clipped reader states, a human-facing public-source slip, taped support notes, softened source copy, profile receipt slips, and a photo-led read/return/continue path shelf so visitors see a studio reading surface and visual route bridge instead of file-viewer or endpoint language | LESSON-002, LESSON-004, LESSON-018, LESSON-019, LESSON-022, LESSON-024, LESSON-026 | Markdown rendering should remain simple, source copy should stay honest but non-technical, abstract path visuals must not imply fake note art, and support cards should not distract from reading | active |
| COMP-008 | Filled Page Sections | PAGE-001, PAGE-002, PAGE-003, PAGE-004, PAGE-005 | Add route-specific depth beyond first-pass cards | Data-driven section arrays render principles, lanes, readiness criteria, details, pathways, Store launch checklist, Store availability states, Store visual preview board, Store scroll gallery shelf, Store feed contract fields, Portfolio readiness/feed/state/process sections, Store promise content, Notes source readiness, and Homepage front-room highlights/status/pillars | Uses material cards, wide cards, lists, soft link rows, stronger paper-collage surface cues, content-filled polaroid treatments, and less uniform rounding; Homepage front-room highlight cards, current-room status, route doors, first-screen route contact sheet, and studio-shape pillars now use custom paper boards/slips/photo centers instead of generic `DetailCard` grids, joining About, Notes, Portfolio, and Store route-specific paper/collage structures. About's first `aboutSections` grid now renders as `about-opening-board` / `about-room-map` / `about-room-piece` paper room-map pieces instead of shared `DetailCard` cards. The latest source-copy pass keeps the same data contracts but changes visible Homepage, Notes, Portfolio, and Store support copy away from repo/raw/Website-owned phrasing toward warmer studio-room and public-source language. | LESSON-001, LESSON-002, LESSON-004, LESSON-018, LESSON-019, LESSON-021, LESSON-022, LESSON-024, LESSON-025, LESSON-026, FEEDBACK-012, FEEDBACK-015, FEEDBACK-016, FEEDBACK-017, FEEDBACK-018 | Keep content public-safe, readable, honest, and clear about non-live inventory or source readiness; avoid repeated styling churn once a target is already partially satisfied | active |
| COMP-009 | Next Step Band | PAGE-001, PAGE-002, PAGE-003, PAGE-004, PAGE-005, PAGE-003B, PAGE-003A | Give each filled page a clear continuation path | Reuses `app/page-continuity.js` route-specific next-step data and `app/next-step-band.jsx` | Now renders as `continuity-paper-trail` with separate copy sheet and two staggered `continuity-paper-step` links styled by `app/continuity-paper-trail-pass.css`; should feel like a guided paper trail rather than a broad `link-card wide-card` panel with generic `pathway-link` rows | LESSON-002, LESSON-018, LESSON-019, LESSON-022, LESSON-024 | Must avoid circular or noisy route suggestions, keep each link accessible, and preserve readable focus/hover states over paper texture | active |

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

COMP-008 now carries Store launch readiness: a public-safe checklist and staged availability states so the Store page can stay useful before any Store repo feed or live product listings exist.

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

## Addendum — 2026-06-24 22:20 ET

COMP-001 now applies FEEDBACK-008 / LESSON-020 through `app/paper-card-pass.css` and the dedicated `app/paper-header-pass.css` override imported by `app/layout.jsx`. The shared header keeps the existing fixed top-edge structure but replaces the earlier soft-glass surface with a cream paper layer, existing grain/dust/scratch texture, stronger layered shadow, and subtle uneven lower-edge cue. The intent was to implement stored paper-header feedback without changing navigation structure or adding a competing header system.

## Addendum — 2026-06-25 05:31 ET

COMP-005 now carries a shared PageIntro room compass through `app/site-chrome.jsx` and `app/page-intro-room-compass-pass.css`, giving every major route intro three clipped Open / Look for / Leave by cues beside the photo stack so the shared intro reads as a navigable paper room rather than a decorative card cluster.

## Addendum — 2026-06-26 04:20 ET

COMP-005 now carries small abstract paper/photo cues inside the shared PageIntro room shelf. The Hero board, Featured shelf, Source note, and Next path pieces remain text-readable but no longer behave as text-only slips, keeping the shared route intro aligned with content-bearing paper/photo lessons without inventing screenshots, project images, product photos, or private material.

## Addendum — 2026-06-26 04:49 ET

COMP-002 and COMP-005 now carry a visible active-room slip inside the shared footer route trail. The current footer route no longer depends only on background tint; it shows a clipped paper label such as `Current writing shelf` while preserving direct unnumbered route links, route-photo centers, and accessible `aria-current` state.
