# Matrix — Homepage Arrival Ticket Room Budget

## Semantic items

| ID | Role in this pass | Status |
|---|---|---|
| PAGE-001 | Homepage first-screen entry room | partially satisfied → refined |
| COMP-003 | Scroll title sequence and hero lockup | refined |
| COMP-004 | Studio page path entry cues | refined |
| DESIGN-014 | Paper-list hero lockup | strengthened |
| DESIGN-019 | Paper material authenticity | strengthened |
| DESIGN-022 | Paper piece card surfaces | strengthened |
| DESIGN-024 | Torn edge card silhouettes | strengthened |
| DESIGN-028 | Flattened hierarchy / paper placement | strengthened |
| DESIGN-029 | Human-readable room sequence | strengthened |
| DESIGN-030 | Terminal render budget | strengthened |

## Lessons applied

| Lesson ID | Applied rule |
|---|---|
| LESSON-001 | Homepage should feel authored, not like a demo shell. |
| LESSON-002 | Use human-facing copy and preserve readable visitor orientation. |
| LESSON-018 | Filled routes need calm continuity and next-step structure. |
| LESSON-019 | Paper material should read before generic UI. |
| LESSON-022 | Shared/card-like surfaces should feel like paper pieces. |
| LESSON-024 | Use torn/cut silhouettes and lifted-paper offsets instead of rounded digital cards. |
| LESSON-025 | Flatten hierarchy away from nested app panels. |

## Metrics affected

| Metric ID | Check |
|---|---|
| METRIC-001 | Homepage feels authored and visitor-ready. |
| METRIC-002 | Visible copy remains human-facing. |
| METRIC-018 | Paper material reads first. |
| METRIC-021 | Paper surfaces avoid generic rounded UI card language. |
| METRIC-023 | Public safety / no fake content boundary is preserved. |
| METRIC-027 | Terminal render budget covers late visual layers. |
| METRIC-028 | Hierarchy is flatter and less nested. |
| METRIC-029 | Room sequence is easier to scan. |
| METRIC-030 | Visual refinements are strong enough to be visible without becoming noisy. |

## Implementation note

`app/home-arrival-ticket-room-budget-pass.css` loads after `app/home-arrival-ticket-terminal-pass.css` so it can calm and organize the latest homepage arrival receipt layer without changing route data or public copy.
