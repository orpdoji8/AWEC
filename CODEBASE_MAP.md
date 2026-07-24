# Codebase Map

This file describes the repository as it exists on 2026-07-24. The planned architecture in `BLUEPRINT.md` is identified separately and must not be treated as implemented.

## Project identity

- **Name:** meixiedu
- **Official organization/public website name:** American West Educational Center
- **Expected future domain identity:** meixiedu
- **Purpose:** foundation for an informational corporate website concerning international education and overseas opportunities.
- **State:** Day 0 shared shell plus complete structural Home, About Us, Contact, Business Operations, and News pages. Operations and News use typed local collections, reusable listing/detail components, and professional empty states; both collections currently contain no records.

## Runtime and package management

- Node.js 24 is expected by `.nvmrc`.
- pnpm 11.7.0 is pinned by the `packageManager` field in `package.json`.
- `pnpm-lock.yaml` records installed dependency resolution.
- `pnpm-workspace.yaml` preserves build-script approval settings for `sharp` and `unrs-resolver`.
- No dependency was added for the shared-shell implementation.

## Confirmed framework and styling

- Next.js 16.2.11 with the App Router
- React and React DOM 19.2.4
- TypeScript with strict checking and the `@/*` to `src/*` path alias
- Tailwind CSS 4 through `@tailwindcss/postcss`
- ESLint 9 with Next.js Core Web Vitals and TypeScript configurations
- Replaceable CSS custom properties for page, text, surface, border, accent, focus, width, spacing, and typography values
- A provisional dark-green header/footer and green interactive accent system, centralized through CSS custom properties
- A system sans-serif font stack; no external font download or `next/font` integration
- Global box sizing, focus-visible treatment, selection styling, responsive page-container sizing, and reduced-motion handling

## Existing application foundation

- `src/app/layout.tsx` — project metadata and the shared header, main landmark, and footer layout
- `src/app/globals.css` — design tokens and global base styles
- `src/app/page.tsx` — structural homepage with hero, organization introduction, focus areas, Operations and News previews, and a contact call-to-action
- `src/app/favicon.ico` — generated favicon retained pending future branding
- `src/content/site.ts` — official public site identity, technical project identifier, shared metadata copy, and primary/footer navigation records
- `src/content/pages.ts` — clearly marked temporary Home, About, and Contact content for Day 0 review and Day 1 replacement
- `src/content/operations.ts` — typed, currently empty Operations collection, landing-page copy, slug lookup, and static-parameter helper
- `src/content/news.ts` — typed, currently empty News collection, landing-page copy, slug lookup, static-parameter helper, and explicit related-article resolution
- `src/types/content.ts` — small shared image and text-section types used by both local collections

## Current routes

- `/` — complete Day 0 structural homepage with neutral, temporary content
- `/about` — complete Day 0 organization-information structure with overview, direction, focus, background, team, and contact areas
- `/contact` — complete Day 0 contact structure with a disabled form preview, future-channel placeholders, and response-procedure notice; no delivery behavior or real contact details
- `/operations` — complete structural Business Operations landing page with introduction, collection area, empty state, supporting explanation, and contact call-to-action
- `/operations/[slug]` — statically generated operation detail route driven by `src/content/operations.ts`; unknown or unpublished slugs return not found
- `/news` — complete structural News landing page with introduction, collection area, empty state, and About Us call-to-action
- `/news/[slug]` — statically generated semantic article route driven by `src/content/news.ts`; unknown or unpublished slugs return not found

All landing routes are statically generated. The dynamic detail routes use `generateStaticParams` with `dynamicParams = false`, so only slugs in the corresponding local collection can generate pages. Both collections are intentionally empty during Day 0, so no detail pages are currently generated.

## Shared components

- `src/components/layout/SiteHeader.tsx` — site-name home link plus responsive navigation
- `src/components/layout/DesktopNavigation.tsx` — desktop primary navigation
- `src/components/layout/MobileNavigation.tsx` — client-side mobile menu with semantic toggle state, Escape closing, link-selection closing, and focus management
- `src/components/layout/SiteFooter.tsx` — shared descriptive notice, footer navigation, and copyright line
- `src/components/sections/PageIntro.tsx` — shared neutral placeholder-page introduction
- `src/components/sections/SectionIntro.tsx` — shared section eyebrow, heading, and description treatment
- `src/components/sections/TemporaryContentNotice.tsx` — restrained notice for content awaiting approval
- `src/components/sections/CallToAction.tsx` — shared green closing call-to-action section
- `src/components/sections/CollectionEmptyState.tsx` — shared text-based empty state for approved-content collections
- `src/components/forms/ContactFormShell.tsx` — semantic but fully disabled inquiry-form preview with no submission behavior
- `src/components/operations/OperationCard.tsx` — future-ready operation summary and detail link
- `src/components/operations/OperationList.tsx` — semantic operation list with the current empty-state fallback
- `src/components/operations/OperationDetail.tsx` — conditional detail presentation for approved operation content
- `src/components/news/NewsCard.tsx` — future-ready article summary with a semantic publication date
- `src/components/news/NewsList.tsx` — semantic article list with the current empty-state fallback
- `src/components/news/NewsArticle.tsx` — semantic article detail presentation with optional media and related links
- `src/components/ui/BackLink.tsx` — reusable return navigation for collection detail pages
- `src/components/ui/FeatureCard.tsx` — shared restrained card for temporary page information
- `src/components/ui/PageContainer.tsx` — shared constrained responsive container primitive

## Current public assets

`public/` contains the generated starter SVG assets: `file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, and `window.svg`. They are not used by the current pages.

`public/images/` and `public/documents/` are empty organizational directories retained with `.gitkeep`. No company images, documents, logo, or final visual branding exist.

## Empty organizational directories

The following directory is retained with `.gitkeep` and contains no implementation:

- `src/lib/`

## Planned architecture only

`BLUEPRINT.md` remains the source for future approved content and later product work. No CMS, database, authentication, analytics, email integration, or deployment configuration has been added.

## Current verification status

During the 2026-07-24 Operations and News structural session:

- `pnpm lint` passed with no ESLint findings when run with the repository's expected Node 24 runtime on `PATH`.
- `pnpm build` passed outside the restricted sandbox, including compilation, TypeScript checking, page-data collection, and static generation for all landing routes plus `/_not-found`; the two empty collection detail templates were recognized as SSG routes.
- The first sandboxed build attempt failed because Turbopack was not permitted to bind a local port; this was an execution-environment restriction rather than an application error.
- Final diff checks and browser-based responsive and interaction checks are recorded in `DAILY_LOG.md`.
