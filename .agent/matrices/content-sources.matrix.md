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
| DATA-008 | Store Feed Contract | `angelberger09/Website` | `app/store-readiness.js` | JS data contract | PAGE-005, future Store feed | active |
| DATA-009 | Blog Source Readiness Data | `angelberger09/Website` | `app/source-readiness.js` | JS data contract | PAGE-003, PAGE-003B, DATA-003 | active |
| DATA-010 | Portfolio Feed Contract | `angelberger09/Website` | `app/portfolio-feed-contract.js` | JS data contract | PAGE-004, future Portfolio feed | active |

## Fallback rule

If GitHub Pages is not available for a source repo, link to the public GitHub repo or raw public file until Pages is restored.

## Readiness rule

Local Website readiness data can keep a page useful before a connected source repo has a public feed. Do not mark future Portfolio or Store feeds active until those repos expose public data paths.

## Feed contract rule

Future connected feeds should expose only public-safe fields that the Website needs to render calm visitor-facing cards. Raw planning, private drafts, and unavailable buying paths stay out of feed-shaped data.

## Blog source contract rule

The Notes reader should name the expected Blog feed shape in the Website before deeper automation depends on it: a public posts array, published-only records, slug/title/date/context fields, and profile plus Markdown files for individual notes.

## Portfolio source contract rule

The Portfolio page should name the expected future Portfolio feed shape before deeper archive automation depends on it: public-safe project records with slug, title, status, summary, role, optional preview, optional source, and staged record states.
