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
| DATA-008 | Store Future Shelf Shape | `angelberger09/Website` | `app/store-readiness.js` | Public card-part rules | PAGE-005, future Store shelf | active |
| DATA-009 | Blog Writing Shelf Shape | `angelberger09/Website` | `app/source-readiness.js` | Public note-shape rules | PAGE-003, PAGE-003B, DATA-003 | active |
| DATA-010 | Portfolio Future Archive Shelf | `angelberger09/Website` | `app/portfolio-feed-contract.js` | Public archive-card rules | PAGE-004, future Portfolio shelf | active |

## Fallback rule

If GitHub Pages is not available for a source repo, link to the public GitHub repo or raw public file until Pages is restored.

## Readiness rule

Local Website readiness data can keep a page useful before a connected source repo has a public feed. Do not mark future Portfolio or Store feeds active until those repos expose public data paths.

## Feed contract rule

Future connected feeds should expose only public-safe fields that the Website needs to render calm visitor-facing cards. Raw planning, private drafts, and unavailable buying paths stay out of feed-shaped data.

## Blog source contract rule

The Notes reader should keep the Blog connection explicit before deeper automation depends on it, but the visible labels should stay human-facing: public writing shelf, published notes, readable title/date/context, public profile, note body, and quiet backup shelf.

## Portfolio source contract rule

The Portfolio page should name the expected future archive shelf shape before deeper archive automation depends on it, but the visible ledger labels and section copy should stay visitor-facing: archive shelf, public-facing cards, framed material, card parts, public rhythm, preview surface, and staged record states.

## Store source contract rule

The Store page should name the expected future Store shelf shape before live shop links exist, but the visible ledger labels and section copy should stay visitor-facing: future shelf shape, public handle, piece name, availability, short note, preview place, delivery note, and calm public parts.
