# Anime Wiki · Astro

Static Astro site to catalog anime titles and characters, ready for GitHub Pages deploy.

## Quick start

```sh
npm install
npm run dev
```

Requires Node >=20 (see `.nvmrc` / `package.json` engines).

## Content model

- Update sample data in `src/data/anime.ts` and `src/data/characters.ts`.
- Place cover images in `public/images/anime/` and `public/images/characters/` (filenames should match the `cover`/`avatar` fields).
- Home is rendered from `src/pages/index.astro` using `BaseLayout` and the sample data.

## Configure for GitHub Pages

1) Edit `astro.config.mjs`:

```
site: 'https://<username>.github.io'
base: '/anime-wiki'
```

Replace `<username>` with your GitHub handle. If you deploy to a custom domain, set `site` to that domain and keep/remove `base` as needed.

2) Build locally to verify paths resolve:

```sh
npm run build
npm run preview
```

3) Use the provided workflow at `.github/workflows/deploy.yml` to publish to Pages.

## Scripts

- `npm run dev` — start local dev server.
- `npm run build` — build static site to `dist/`.
- `npm run preview` — serve the built site locally.

## Roadmap

- Add search/filter over anime and characters.
- Generate sitemap/robots and Open Graph metadata.
- Expand to collection-based content (Markdown/MDX) if desired.
