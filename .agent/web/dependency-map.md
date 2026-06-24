# Dependency Map

## Build dependencies

- `package.json` defines Next.js and React dependencies.
- `next.config.mjs` controls static export behavior for GitHub Pages.
- `.github/workflows/deploy.yml` builds and deploys the site from `main`.

## Runtime/public dependencies

The current homepage links to public Blog URLs. It does not yet fetch data at runtime.

## Source dependencies

- `app/page.jsx` depends on the local `studioPages` array.
- `app/globals.css` defines all current homepage styling.
- Future embedded Blog previews will depend on DATA-003.

## Repo dependencies

- Website is the public homepage shell.
- Blog is the public notes source.
- Portfolio is a future public project source.
- Store is a future public product source.
