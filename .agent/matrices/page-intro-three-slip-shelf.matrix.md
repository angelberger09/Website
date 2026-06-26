# PageIntro Three-Slip Shelf Matrix

| ID | Type | Location | Visible change | Related lessons | Related metrics | Status |
|---|---|---|---|---|---|---|
| COMP-005 | Component | `app/site-chrome.jsx` shared `PageIntro` | Shared route intro shelf renders three slips: `Open`, `Read`, and `Continue` | LESSON-019, LESSON-022, LESSON-023, LESSON-025, LESSON-026 | METRIC-018, METRIC-021, METRIC-022, METRIC-024, METRIC-028, METRIC-029 | partially satisfied |
| PAGE-002 | Page | `/Website/about/` | About intro inherits the calmer three-slip shelf | LESSON-019, LESSON-022, LESSON-023, LESSON-025 | METRIC-018, METRIC-021, METRIC-022, METRIC-024 | active |
| PAGE-003 | Page | `/Website/notes/` | Notes intro inherits the calmer three-slip shelf | LESSON-019, LESSON-022, LESSON-023, LESSON-025 | METRIC-018, METRIC-021, METRIC-022, METRIC-024 | active |
| PAGE-003B | Page | `/Website/blog/` | Blog compatibility intro inherits the calmer three-slip shelf where `PageIntro` is reused | LESSON-019, LESSON-022, LESSON-023, LESSON-025 | METRIC-018, METRIC-021, METRIC-022, METRIC-024 | active |
| PAGE-004 | Page | `/Website/portfolio/` | Portfolio intro inherits the calmer three-slip shelf | LESSON-019, LESSON-022, LESSON-023, LESSON-025 | METRIC-018, METRIC-021, METRIC-022, METRIC-024 | active |
| PAGE-005 | Page | `/Website/store/` | Store intro inherits the calmer three-slip shelf | LESSON-019, LESSON-022, LESSON-023, LESSON-025 | METRIC-018, METRIC-021, METRIC-022, METRIC-024 | active |

## Implementation note

The extra `Trust` slip was removed from the shelf because the status/trust copy remains visible in the existing PageIntro room-key card. This keeps trust information present while reducing the shelf to the three-column rhythm already defined by `app/page-intro-calm-focus-pass.css`.
