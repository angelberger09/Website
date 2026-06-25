# Content Sources Matrix

| Source ID | Source Name | Repo | Public Path | Data Type | Used By | Status |
|---|---|---|---|---|---|---|
| DATA-001 | Blog Home | `angelberger09/Blog` | `/Blog/` | HTML page | PAGE-001 | active |
| DATA-002 | Posts Index | `angelberger09/Blog` | `/Blog/posts/` | HTML page | PAGE-001 | active |
| DATA-003 | Blog JSON Feed | `angelberger09/Blog` | `/Blog/posts.json` | JSON feed | PAGE-001, PAGE-003, PAGE-003A, PAGE-003B | active |
| DATA-004 | Example Post | `angelberger09/Blog` | `/Blog/posts/learning-to-think-like-a-developer/` | HTML page | PAGE-001 | active |
| DATA-005 | Portfolio Feed | `angelberger09/Portfolio` | TBD | JSON feed | future PAGE-004 | future |
| DATA-006 | Store Feed | `angelberger09/Store` | TBD | JSON feed | future PAGE-005 | future |
| DATA-007 | Store Readiness Data | `angelberger09/Website` | `app/store-readiness.js` | JS data | PAGE-005 | active |

## Fallback rule

If GitHub Pages is not available for a source repo, link to the public GitHub repo or raw public file until Pages is restored.

## Readiness rule

Local Website readiness data can keep a page useful before a connected source repo has a public feed. Do not mark future Portfolio or Store feeds active until those repos expose public data paths.
