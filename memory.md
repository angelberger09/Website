# Website Memory

## Purpose

Soft Strange Studio is a public Next.js site for studio notes, art, shop paths, and an about page.

## Architecture

- Next.js App Router source lives in `app/`.
- Shared site chrome lives in `app/site-chrome.jsx`.
- Page content is rendered by route-level React components.
- Static GitHub Pages output is produced by `npm run build` into `out/` and copied to `dist/`.

## Homepage Convention

- The homepage uses the Gemini reference composition: green torn-paper header, centered script wordmark, warm cream sheet, and four taped editorial cards.
- Homepage card content is defined as data in `app/page.jsx`; each card has a stable destination, label, description, and illustration kind.
- Homepage-specific styling is isolated in `app/home-gemini-reference-pass.css` and imported last from `app/layout.jsx` so it takes precedence without changing shared route styling.
- Non-home routes keep the existing floating header and footer. The home route renders its dedicated header and uses the copyright line as its footer.

## Validation

- Run `npm run dev` and open `/Website/` locally.
- Run `node scripts/audit-website.mjs --base=http://localhost:3000/Website/ --routes=/ --out=logs/<run-name> --no-trace` for desktop and mobile screenshot, status, and overflow checks.
