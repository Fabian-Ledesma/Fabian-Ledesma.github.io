## Project Overview

This repository hosts the Serene Eagle Financial Strategies website using the Next.js App Router. The site is deployed as a static export to GitHub Pages. `legacy-site/` is a snapshot of the original V0-generated project for reference; the live code lives in the root `app/`, `components/`, etc.

## Key Configuration

- **`package.json`**
  - `name: "serene-eagle-financial-strategies"` identifies the project in tooling and logs.
  - `"engines": { "node": "20.x" }` ensures local installs match the GitHub Actions runner version.
  - Scripts:
    - `dev` / `build`: standard Next.js commands.
    - `lint`: uses `next lint` so all Next-specific lint rules apply (`eslint-config-next` is required in devDependencies).
    - `export`: aliases `next build` (see `next.config.mjs`) so CI can generate the static bundle with a single command.
  - Dev dependencies include `eslint` and `eslint-config-next` so linting works locally and in CI.

- **`next.config.mjs`**
  - `typescript.ignoreBuildErrors` lets builds succeed even if types aren’t perfect (handy while content is in flux).
  - `images.unoptimized` disables the built-in image optimizer—necessary for static hosting on GitHub Pages.
  - `output: 'export'` tells Next.js to write a fully static bundle (into `out/`) when `next build` runs. The Pages workflow uploads that directory.

- **GitHub Actions Workflow (`.github/workflows/nextjs.yml`)**
  - Installs pnpm, runs `pnpm export`, and deploys the `out/` folder to GitHub Pages.
  - Sets `NEXT_DISABLE_ESLINT_PLUGIN=1` during the export step so lint errors don’t block deployments.

## App Structure

- `app/` uses the App Router:
  - `page.tsx` renders the home experience (hero, services, testimonials, etc.).
  - Subdirectories like `app/about`, `app/services`, `app/contact`, etc., provide additional pages carried over from the legacy design.
  - `layout.tsx` wires fonts, analytics, and the language provider.
  - `globals.css` (under `app/`) defines brand colors, typography, and base styles.

- Shared resources:
  - `components/` includes the header, footer, and a full UI kit (Radix-based components, buttons, dialog primitives, etc.).
  - `contexts/language-context.tsx` provides the English/Spanish switcher and translations used throughout the site.
  - `hooks/` contains reusable client hooks (e.g., `use-mobile`, `use-toast`).
  - `public/` stores images, icons, and other static assets referenced by the App Router pages.

- `legacy-site/` mirrors the original app (same structure as above) to make it easy to compare or recover copy. It is not built or deployed.

## Local Development

```bash
pnpm install       # install dependencies
pnpm dev           # run Next.js dev server (http://localhost:3000)
pnpm lint          # run Next.js lint checks
pnpm export        # static build written to ./out/
```

If you prefer npm, use `npm install --legacy-peer-deps` and `npm run dev`, etc. Note that our workflows assume pnpm, so keep pnpm lockfiles in sync.

## Notes & Maintenance

- Avoid committing generated directories such as `.next/` or `node_modules/`; `.gitignore` already excludes them.
- When adding new pages, follow the App Router pattern (create a folder with its own `page.tsx`) and update navigation links in `components/header.tsx`.
- Update this README when core workflows or tooling choices change so future you (or collaborators) understand how the project is wired together.

