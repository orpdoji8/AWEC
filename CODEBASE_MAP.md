# Codebase Map

This file describes the repository as it exists on 2026-07-23. The planned architecture in `BLUEPRINT.md` is identified separately and must not be treated as implemented.

## Project identity

- **Name:** meixiedu
- **Purpose:** foundation for an informational corporate website concerning international education and overseas opportunities.
- **State:** initialized Create Next App starter plus Day 0 documentation and empty organizational directories. No project-specific website shell or client content is implemented.

## Runtime and package management

- Node.js 24 is expected by `.nvmrc`.
- pnpm 11.7.0 is pinned by the `packageManager` field in `package.json`.
- `pnpm-lock.yaml` records installed dependency resolution.
- `pnpm-workspace.yaml` preserves build-script approval settings for `sharp` and `unrs-resolver`.

## Confirmed framework and styling

- Next.js 16.2.11 with the App Router
- React and React DOM 19.2.4
- TypeScript with strict checking and the `@/*` to `src/*` path alias
- Tailwind CSS 4 through `@tailwindcss/postcss`
- ESLint 9 with Next.js Core Web Vitals and TypeScript configurations
- Generated global CSS variables, light/dark color rules, Tailwind import, and starter utility classes
- Geist and Geist Mono are loaded by the generated root layout; the generated body rule currently specifies an Arial/Helvetica fallback stack

## Existing configuration and foundation files

- `.gitignore` — generated ignore rules
- `.nvmrc` — Node major version
- `package.json` and `pnpm-lock.yaml` — scripts, dependencies, and resolution
- `pnpm-workspace.yaml` — pnpm build-script policy
- `tsconfig.json` — TypeScript configuration
- `eslint.config.mjs` — ESLint configuration
- `next.config.ts` — currently contains no project-specific Next.js options
- `postcss.config.mjs` — Tailwind PostCSS plugin
- `BLUEPRINT.md` — approved product direction and planned architecture
- `AGENTS.md`, `DEV_PROCESS.md`, `CODEBASE_MAP.md`, and `DAILY_LOG.md` — Day 0 operating documentation
- `README.md` — project overview and local setup

## Current routes

`src/app/` contains only generated starter files:

- `layout.tsx` — generated root layout and generic Create Next App metadata
- `page.tsx` — generated starter homepage at `/`
- `globals.css` — generated global Tailwind and color setup
- `favicon.ico` — generated favicon

There are no About, Contact, Operations, News, or dynamic routes. Shared navigation, a header, a footer, and project-specific page shells have not been implemented.

## Current public assets

`public/` contains the generated starter SVG assets: `file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, and `window.svg`.

`public/images/` and `public/documents/` are empty organizational directories retained with `.gitkeep`. No company images, documents, logo, or visual content exist.

## Current organizational directories

The following empty directories are retained with `.gitkeep` and contain no implementation:

- `src/components/layout/`
- `src/components/sections/`
- `src/components/operations/`
- `src/components/news/`
- `src/components/forms/`
- `src/components/ui/`
- `src/content/`
- `src/lib/`
- `src/types/`

No components, local content records, utilities, or project types have been created.

## Planned architecture only

`BLUEPRINT.md` proposes Home, About, Contact, Operations, and News routes; operation and news detail routes; reusable layout and feature components; and local content files. These are future plans, not current files or implemented features.

## Current verification status

During the 2026-07-23 Day 0 session:

- `pnpm lint` passed.
- `pnpm build` passed with network access, including compilation, TypeScript checking, page-data collection, and static generation for `/` and `/_not-found`. The initial restricted-network attempt failed because the generated `next/font` setup could not fetch Geist and Geist Mono from Google Fonts; no application change was needed.
- `git status --short` and `git diff --stat` were run after the documentation update; see `DAILY_LOG.md` for the final working-tree summary.
