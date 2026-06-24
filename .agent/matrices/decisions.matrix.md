# Decisions Matrix

| Decision ID | Decision | Date | Reason | Alternatives Considered | Impact | Revisit When |
|---|---|---|---|---|---|---|
| DEC-001 | Use Next.js static export for Website | 2026-06-23 | Public GitHub Pages deploy with future app structure | Plain HTML, Vite | Keeps routing/component options open | If build/deploy becomes fragile |
| DEC-002 | Use Astro for Blog | 2026-06-23 | Blog can own static pages and public content feeds | Markdown-only repo, Next Blog | Keeps Blog independently deployable | If Website embeds all content directly |
| DEC-003 | Keep Blog as a separate public repo | 2026-06-23 | Allows Website to pull public data from source repos | Merge Blog into Website | Supports multi-repo content model | If maintenance overhead gets too high |
| DEC-004 | Add public `.agent/` project memory | 2026-06-23 | Preserve project lessons and intent across future edits | Rely on conversation memory only | Makes repo self-explaining | If public memory becomes too noisy |
| DEC-005 | Use root `agent.md` and `start-here.md` | 2026-06-23 | Give humans and assistants obvious entry points | Only `.agent/README.md` | Easier onboarding | If README absorbs this role |
| DEC-006 | Evaluate anime.js for motion | 2026-06-23 | Homepage may need intentional mouse/scroll animation beyond CSS | CSS-only animation, Framer Motion, no library | Keeps motion expressive but should remain lightweight | Before implementing animated atmosphere |
