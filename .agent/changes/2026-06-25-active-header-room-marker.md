# Active header room marker

Timestamp: 2026-06-25 11:50 ET

## Intent

Make the shared direct navigation show which public Website room the visitor is currently in, without adding a `Pages` button, route numbers, helper text, dropdown chrome, or heavier visual effects.

## Source state read

This implementation followed the current `.agent` state that says:

- navigation should stay direct, minimal, unnumbered, and readable,
- the header should read as layered paper rather than a smooth UI capsule,
- page-to-page continuity should help visitors understand where they are inside the public rooms,
- performance-sensitive visual work should prefer cheap shared effects over more overlays or filters.

## Satisfaction classification

Partially satisfied before this pass.

The header already had direct paper-tab navigation, but it did not visibly identify the current route. Visitors could move between About, Notes, Portfolio, and Store, but the top chrome did not mark the active room.

## Website source changed

- `app/site-header-nav.jsx`
- `app/site-chrome.jsx`
- `app/header-active-room-pass.css`
- `app/layout.jsx`

## Visible interface change

The shared header navigation now renders through a small client-side `HeaderNav` component that uses the current pathname to set `aria-current="page"` on the active public room.

The new CSS pass turns that active link into a stronger current-room paper tab using a warm paper gradient, cheap grain texture, a small dark underline mark, and a slightly lifted paper shadow.

Blog compatibility routes are mapped to the Notes tab so `/Website/blog/` and `/Website/blog/post/...` still show the visitor as being inside the public Notes room.

## Boundary notes

- No new routes were added.
- No fake content, products, posts, portfolio work, photos, or private material were introduced.
- The direct nav still has only the four existing destination labels.
- The cue uses `aria-current="page"` for accessibility.
- The visual pass avoids filters, blend modes, fixed overlays, or animation.

## Related IDs

- COMP-001 Floating Header
- COMP-002 Direct Studio Navigation
- COMP-005 Shared Site Chrome
- DESIGN-015 Direct Unnumbered Navigation
- DESIGN-016 Soft/Sharp Balance
- DESIGN-019 Paper Material Authenticity
- DESIGN-020 Paper Header Surface
- INT-010 Direct Header Navigation
- LESSON-002 Use Human-Facing Copy
- LESSON-003 Keep Navigation Minimal
- LESSON-015 Use Direct Nav Labels Without Extra Markers
- LESSON-018 Fill Public Pages As Useful Rooms
- LESSON-020 Make Top Bar Feel Like Layered Paper
- METRIC-003 Navigation Is Minimal
- METRIC-014 Direct Nav With Contrast
- METRIC-017 Filled Page Continuity
- METRIC-019 Paper Header Surface
