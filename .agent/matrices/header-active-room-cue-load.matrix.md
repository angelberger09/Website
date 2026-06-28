# Header Active Room Cue Load Matrix

| Field | Value |
|---|---|
| Change ID | 2026-06-28-header-active-room-cue-load |
| Primary target | Shared header direct-navigation active state |
| Public file | `app/layout.jsx` |
| Supporting CSS | `app/header-active-room-pass.css` |
| Satisfaction state | partially satisfied before load; satisfied for this bounded mismatch after load |
| Visible effect | The current page link in the shared header should use the lifted paper-tab active state instead of looking like every other header label. |

## Semantic relationships

| ID | Relationship |
|---|---|
| COMP-001 | Floating header surface now loads the active-room cue layer. |
| COMP-002 | Direct studio navigation can visually identify the current route without a Pages button, numbers, or helper text. |
| COMP-005 | Shared site chrome now includes the active-route header styling in the root layout import chain. |
| DESIGN-004 | Header remains the persistent navigation anchor. |
| DESIGN-011 | Top-edge header treatment remains intact while the current-room marker becomes visible. |
| DESIGN-015 | Direct unnumbered navigation gains a clearer current-route state. |
| DESIGN-020 | Paper header surface includes the active paper-tab marker already defined by the CSS pass. |
| INT-010 | Current route interaction state is visible through `aria-current="page"` and the active class. |
| LESSON-015 | Supports direct nav labels without extra markers by using the link itself as the marker. |
| LESSON-020 | Supports the paper header lesson by making the active tab look like a lifted paper slip. |
| METRIC-014 | Improves direct nav contrast by distinguishing the current room. |
| METRIC-019 | Improves paper header readability at route scale. |

## Boundary

No new visible copy, product claims, portfolio claims, private details, or raw logs were added.
