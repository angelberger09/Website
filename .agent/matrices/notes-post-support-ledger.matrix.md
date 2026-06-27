# Notes Post Support Ledger Matrix

| ID | Type | Location | Purpose | Visual / content rule | Related lessons | Metrics | Status |
|---|---|---|---|---|---|---|---|
| COMP-007A | Reader support subpattern | `app/notes/post/PostReaderClient.jsx`, `app/notes-post-support-ledger-pass.css` | Keep the individual Notes/Blog post support cards connected to the reader sheet as one closing ledger rather than isolated cards | Use one clipped paper field with a readable `reader ledger` label, source slip, subtle support thread, and grouped support notes; preserve public-only Blog content boundaries and avoid fake note art or private material | LESSON-002, LESSON-018, LESSON-019, LESSON-022, LESSON-024, LESSON-026 | METRIC-017, METRIC-018, METRIC-021, METRIC-023, METRIC-028, METRIC-029 | active |

## Boundary

This pass is CSS-only for the rendered post support section. It must not change note Markdown, Blog feed fetch behavior, post profile fields, compatibility routes, or public/private content boundaries.
