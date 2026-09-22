# bryanlim.me

Personal site for Bryan Lim, built with [Astro](https://astro.build). The Journal design is a single page with a small, system-aware light/dark theme toggle.

## Develop

Requires Node.js 22.12.0 or newer.

```sh
npm ci
npm run dev
```

## Deploy

Pushing to `master` auto-deploys to GitHub Pages via `.github/workflows/deploy.yml`.
The custom domain is preserved through `public/CNAME`.

## Site structure

The homepage composes projects, experience, and background sections from `src/components/`. Shared page styles live in `src/styles/global.css`. The old `/projects` URL redirects to the homepage’s projects section.

## Design explorations

Run `npm run preview:variants` and open http://127.0.0.1:4322/ to compare Studio with Flow, Mosaic, and Journal. These standalone previews live in `variants/` and share the project images in `public/`. They are separate from the Astro pages deployed to GitHub Pages.
