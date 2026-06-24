# Components Matrix

| Component ID | Name | Used In | Purpose | Behavior | Visual Rules | Related Lessons | Risks | Status |
|---|---|---|---|---|---|---|---|---|
| COMP-001 | Floating Header | All pages through `app/layout.jsx` | Keep personal identity and navigation visible | Fixed at top while scrolling | Top-attached cream material tab with direct links | LESSON-001, LESSON-002, LESSON-011, LESSON-015 | Could crowd small screens if too many routes are added | active |
| COMP-002 | Direct Studio Navigation | All pages through `app/site-chrome.jsx` | Provide compact access to current Website pages | Direct visible links; no `Pages` trigger, edge numbers, or helper text | Unboxed links with stronger contrast | LESSON-003, LESSON-013, LESSON-015 | Needs ongoing responsive review | active |
| COMP-003 | Scroll Title Sequence | PAGE-001 | Create authored arrival moment | Left-docked sticky title with subtle scroll rotation | Art-lettering style with polaroid material stack | LESSON-012, LESSON-014, LESSON-016 | Motion must remain purposeful | active |
| COMP-004 | Studio Page Cards | PAGE-001 | Present destinations as friendly doors | Grid of four linked cards | Rounded material cards with eyebrow, title, and description | LESSON-002, LESSON-003, LESSON-015 | Must stay synced with page routes | active |
| COMP-005 | Shared Site Chrome | All pages | Keep the page system visually cohesive | Header, atmosphere layer, footer, page intro, detail card | Reusable cream/polaroid/gloss material language | LESSON-001, LESSON-002, LESSON-010, LESSON-015, LESSON-016 | Shared changes affect every route | active |
| COMP-006 | Notes Reader Client | PAGE-003, PAGE-003B | Preview published posts from Blog feed | Fetches public posts index with fallback URLs | Wide reader card plus post cards | LESSON-002, LESSON-004 | Needs feed validation and clear error states | active |
| COMP-007 | Post Reader Client | PAGE-003A, PAGE-003B | Render a single published note inside Website | Reads slug, fetches public profile and Markdown with fallbacks | Reader card with category/date tags | LESSON-002, LESSON-004 | Markdown rendering should remain simple | active |

## Addendum — 2026-06-24 02:05 ET

The main Website pages are now filled out as active routes. COMP-001 and COMP-002 moved into shared site chrome so the direct navigation and atmosphere persist across Home, About, Notes, Portfolio, Store, and Blog compatibility routes.
