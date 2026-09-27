# Codebase Map

This file describes the repository as it exists on 2026-08-21. The planned architecture and content direction in `BLUEPRINT.md` are identified separately and must not be treated as implemented.

## Project identity

- **Name:** meixiedu
- **Official organization/public website name:** American West Educational Center
- **Expected future domain identity:** meixiedu
- **Purpose:** foundation for an informational corporate website concerning international education and overseas opportunities.
- **State:** Day 0 foundation and structural shell complete. Day 1 legacy-content integration is in progress. The six legacy-derived Business Operations categories and 15 historical activity records are implemented, and the public News section is now presented as News & Activities while retaining its existing routes.

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

- `src/app/layout.tsx` — project metadata, keyboard skip link, and the shared header, main landmark, and footer layout
- `src/app/not-found.tsx` — site-level not-found presentation using the root shell and shared page container
- `src/app/globals.css` — design tokens and global base styles
- `src/app/page.tsx` — structural homepage with hero, organization introduction, focus areas, Operations and News previews, and a contact call-to-action
- `src/app/favicon.ico` — generated favicon retained pending future branding
- `src/content/site.ts` — official public site identity, technical project identifier, shared metadata copy, and primary/footer navigation records
- `src/content/pages.ts` — temporary Home, About, and Contact content plus the updated News & Activities homepage preview
- `src/content/operations.ts` — typed collection of six legacy-confirmed operation labels with stable `OP-###` IDs, provisional-status notes, landing-page copy, slug lookup, and static-parameter helper
- `src/content/news.ts` — typed collection of 15 legacy-derived historical activities with stable `HIST-###` IDs, optional dates, category assignments, internal provenance notes, concise source-backed bodies, slug lookup, static-parameter helper, and explicit related-article resolution
- `src/types/content.ts` — small shared image and text-section types used by both local collections

## Current routes

- `/` — complete Day 0 structural homepage with neutral, temporary content
- `/about` — complete Day 0 organization-information structure with overview, direction, focus, background, team, and contact areas
- `/contact` — complete Day 0 contact structure with a disabled form preview, future-channel placeholders, and response-procedure notice; no delivery behavior or real contact details
- `/operations` — Business Operations landing page listing all six provisional legacy-confirmed categories
- `/operations/[slug]` — six statically generated operation detail pages driven by `src/content/operations.ts`; unknown slugs return not found
- `/news` — public News & Activities landing page listing 15 legacy-derived historical records
- `/news/[slug]` — 15 statically generated activity detail pages driven by `src/content/news.ts`; unknown slugs return not found
- Unknown static and dynamic paths — shared site-level not-found page with Home and Contact links

All landing routes are statically generated. The dynamic detail routes use `generateStaticParams` with `dynamicParams = false`, so only the six operation slugs and 15 activity slugs in the local collections generate pages.

## Shared components

- `src/components/layout/SiteHeader.tsx` — site-name home link plus responsive navigation
- `src/components/layout/DesktopNavigation.tsx` — desktop primary navigation with current-page state
- `src/components/layout/MobileNavigation.tsx` — client-side mobile menu with semantic toggle state, Escape closing, link-selection closing, and focus management
- `src/components/layout/SiteFooter.tsx` — shared descriptive notice, footer navigation, and copyright line
- `src/components/sections/PageIntro.tsx` — shared neutral placeholder-page introduction
- `src/components/sections/SectionIntro.tsx` — shared section eyebrow, heading, and description treatment
- `src/components/sections/TemporaryContentNotice.tsx` — restrained notice for content awaiting approval
- `src/components/sections/CallToAction.tsx` — shared green closing call-to-action section
- `src/components/sections/CollectionEmptyState.tsx` — shared text-based empty state for approved-content collections
- `src/components/forms/ContactFormShell.tsx` — semantic but fully disabled inquiry-form preview with no submission behavior
- `src/components/operations/OperationCard.tsx` — operation-category summary and detail link
- `src/components/operations/OperationList.tsx` — semantic operation list with a retained empty-state fallback
- `src/components/operations/OperationDetail.tsx` — conditional detail presentation identifying records as legacy-derived categories
- `src/components/news/NewsCard.tsx` — activity summary with a semantic date only when a source-backed date exists
- `src/components/news/NewsList.tsx` — semantic activity list with a retained empty-state fallback
- `src/components/news/NewsArticle.tsx` — semantic activity detail presentation with optional dates, media, and related links
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

## Implemented Day 1 legacy-content work

Day 1 is **Legacy Content Recovery & Integration**. The previous Google Sites website is an approved provisional recovery source, but its material is not automatically current or client-approved.

- The implemented legacy-derived Business Operations categories are Professional Training, Business Visits, International Exhibitions, Round-table Seminars, Global Branding, and Marketing.
- Fifteen historical activities from the legacy Home page are implemented as recoverable records.
- The public label is **News & Activities** while `/news` and `/news/[slug]` remain unchanged.
- Historical records may omit unknown dates; missing dates and unsupported claims must not be invented.
- Legacy images have not been added and will be recovered and supplied manually by the project owner.
- Client verification remains required before provisional legacy content is treated as final or current.

The records remain provisional and verification-dependent. Company-level legacy data, current-status claims, contact details, and images have not been migrated.

## Client-content preparation

- `CLIENT_CONTENT_INTAKE.md` — existing checklist for client verification and final approval; it has not been treated as completed client approval

## Current verification status

During the final 2026-07-24 Day 0 audit:

- `pnpm lint` passed with no ESLint findings when run with the repository's expected Node 24 runtime on `PATH`.
- `pnpm build` passed outside the restricted sandbox, including compilation, TypeScript checking, page-data collection, and static generation for all landing routes plus the custom `/_not-found`; the two empty collection detail templates were recognized as SSG routes.
- The first sandboxed build attempt failed because Turbopack was not permitted to bind a local port; this was an execution-environment restriction rather than an application error.
- Final diff checks and browser-based responsive and interaction checks are recorded in `DAILY_LOG.md`.

During the 2026-08-21 Day 1 legacy-content implementation:

- `pnpm lint` passed with no ESLint findings.
- `pnpm build` passed outside the restricted sandbox and generated 29 static pages, including six Operations detail pages and 15 News & Activities detail pages.
- Browser checks confirmed collection counts, optional-date rendering, mobile navigation labeling, no horizontal overflow, and no console warnings or errors.
