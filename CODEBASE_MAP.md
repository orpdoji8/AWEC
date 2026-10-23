# Codebase Map

This file describes the repository as it exists on 2026-10-23. The planned architecture and content direction in `BLUEPRINT.md` are identified separately and must not be treated as implemented.

## Project identity

- **Name:** meixiedu
- **Official organization/public website name:** American West Educational Center
- **Expected future domain identity:** meixiedu
- **Purpose:** foundation for an informational corporate website concerning international education and overseas opportunities.
- **State:** Day 0 foundation and structural shell complete. Day 1 legacy-content integration is in progress. Two client-named Business placeholders and 15 historical activity records are implemented, and the public News section is now presented as News & Activities while retaining its existing routes.

## Runtime and package management

- Node.js 24 is expected by `.nvmrc`.
- `package.json` also declares Node 24 through `engines`.
- `scripts/setup-windows.ps1` checks Node and Corepack, verifies pinned pnpm, and installs dependencies with the frozen lockfile.
- Windows commands use `corepack pnpm` explicitly to avoid other pnpm versions on PATH; macOS remains supported.
- `corepack pnpm typecheck` generates Next.js route types and runs TypeScript without emitting JavaScript.
- `.gitattributes` standardizes text line endings to LF across platforms.
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
- `src/app/page.tsx` — photo-led homepage with a captioned historical photo, organization introduction, three selected activity previews, and equal Business/Education entry points
- `src/app/favicon.ico` — generated favicon retained pending future branding
- `src/content/site.ts` — official public site identity, technical project identifier, shared metadata copy, and primary/footer navigation records
- `src/content/pages.ts` — temporary Home, About, and Contact content plus the updated News & Activities homepage preview
- `src/content/operations.ts` — typed collection of two client-named placeholder sections with stable `BUS-###` IDs and content-status notes, landing-page copy, slug lookup, and static-parameter helper
- `src/content/news.ts` — typed collection of 15 legacy-derived historical activities with stable `HIST-###` IDs, optional dates, category assignments, internal provenance notes, concise source-backed bodies, slug lookup, static-parameter helper, and explicit related-article resolution
- `src/types/content.ts` — small shared image and text-section types used by both local collections

## Current routes

- `/` — photo-led homepage using existing historical content, with an archive action and selected activity previews
- `/about` — editorial chapters with in-page navigation for overview, direction, focus, and background/people; company copy remains provisional
- `/contact` — split contact layout with unboxed channel rows and a disabled form preview; no delivery behavior or real contact details
- `/business` — numbered directory of Build International Connect and International Exhibition, both empty placeholders
- `/education` — two linked directions: China - US and US - China
- `/education/china-us` — title, empty-content placeholder, and Back to Education link
- `/education/us-china` — title, YES heading, and Back to Education link; no program details
- `/operations` — permanent redirect to `/business`
- `/operations/[slug]` — two statically generated Business placeholder detail pages driven by `src/content/operations.ts`; unknown slugs return not found
- `/news` — landing page linking Historical Activities and Past YES
- `/news/historical-activities` — open photo grid containing all 15 recovered historical records
- `/news/past-yes` — empty placeholder; no activity subsections created yet
- `/news/[slug]` — 15 statically generated activity detail pages driven by `src/content/news.ts`; unknown slugs return not found
- Unknown static and dynamic paths — shared site-level not-found page with Home and Contact links

All landing routes are statically generated. The dynamic detail routes use `generateStaticParams` with `dynamicParams = false`, so only the two Business slugs and 15 activity slugs in the local collections generate pages.

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
- `src/components/operations/OperationCard.tsx` — numbered operation row with a full-row detail link
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

`public/images/activities/` contains 14 event photos; `public/documents/` remains empty with `.gitkeep`. Fourteen matched activity photos now exist as optimized WebP copies under `public/images/activities/`; no final branding or public documents have been integrated.

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
- Fourteen legacy Home photos are matched to HIST-001 through HIST-013 and HIST-015 and displayed on activity cards and detail pages. HIST-014 remains text-only because its source video is inaccessible. Uncaptioned About photos remain unassigned.
- Client verification remains required before provisional legacy content is treated as final or current.

The records remain provisional and verification-dependent. Company-level legacy data, current-status claims, and contact details have not been migrated; matched activity images have been integrated.

## Client-content preparation

- `CLIENT_CONTENT_INTAKE.md` — existing checklist for client verification and final approval; it has not been treated as completed client approval
- `LEGACY_CONTENT_RECOVERY.json` — tracked source-recovery dataset with operation IDs, historical records, source wording, and verification/image status; application pages use the typed collections in `src/content/`.

## Current verification status

During the 2026-09-28 Windows setup:

- Node 24.14.1 and Corepack-selected pnpm 11.7.0 installed dependencies from the unchanged lockfile; the setup script also passed on repeat execution.
- `corepack pnpm lint`, `corepack pnpm typecheck`, and `corepack pnpm build` passed; the production build generated 29 pages.
- HTTP checks passed for all 26 content URLs and three unknown URLs; each content page had one `h1`, the contact form remained disabled, and the activity listing rendered one date.
- The production server logged `Internal: NoFallbackError` for the two unknown dynamic slugs despite returning HTTP 404. This routing diagnostic remains for a separate investigation; successful HTTP checks do not establish an error-free server log.
- Development-server requests to Home, News, and an operation detail page returned HTTP 200. No visual browser audit was performed during environment setup.

During the final 2026-07-24 Day 0 audit:

- `pnpm lint` passed with no ESLint findings when run with the repository's expected Node 24 runtime on `PATH`.
- `pnpm build` passed outside the restricted sandbox, including compilation, TypeScript checking, page-data collection, and static generation for all landing routes plus the custom `/_not-found`; the two empty collection detail templates were recognized as SSG routes.
- The first sandboxed build attempt failed because Turbopack was not permitted to bind a local port; this was an execution-environment restriction rather than an application error.
- Final diff checks and browser-based responsive and interaction checks are recorded in `DAILY_LOG.md`.

During the 2026-08-21 Day 1 legacy-content implementation:

- `pnpm lint` passed with no ESLint findings.
- `pnpm build` passed outside the restricted sandbox and generated 29 static pages, including six Operations detail pages and 15 News & Activities detail pages.
- Browser checks confirmed collection counts, optional-date rendering, mobile navigation labeling, no horizontal overflow, and no console warnings or errors.

## Legacy source archive (updated 2026-09-29)

`old content/` contains the three legacy Google Sites pages as original and refreshed HTML snapshots, readable Markdown, full-text extracts, 33 downloaded images, a provenance/download manifest, a resumable recovery script, and a recovery report. The application does not import this folder. All 35 unique content-image references are accounted for: 33 saved and two skipped (Google sign-in for the video thumbnail; HTTP 403 for one About image). The embedded video returned HTTP 401 and remains unretrieved. The resumed pass refreshed expired image links and added 18 images without using an account. See `old content/README.md`; archived statements are not current client approval.

## Event-image integration (2026-09-29)

`old content/EVENT_IMAGE_MAP.md` and `event-image-map.json` record caption-based matches, archived source hashes, public paths, dimensions, and descriptive alt text. `image-inventory.jpg` is the visual inspection sheet. Fourteen optimized WebP files (1,498,000 bytes total) are referenced through the existing `featuredImage` fields in `src/content/news.ts`. Cards use contained images and responsive sizes; detail images preserve their natural proportions. Archive originals remain unchanged. The logo, stock/background image, Contact map, and 16 uncaptained About photos are not assigned to events.

## Distinct page layouts (2026-10-05)

The five main pages now use different compositions while sharing the green palette, type scale, header, and footer. Home is photo-led; About uses chapters and anchor navigation; Operations is a numbered directory; News uses open photo articles; Contact pairs channel rows with its disabled form. Repeated boxed sections and repeated full-width calls to action were reduced. `.eyebrow`, `.page-title`, and `.text-link` are small shared presentation classes in `globals.css`. No routes, content collections, dependencies, or form behavior changed. The raw `old content/` archive remains local/untracked; the optimized activity images are committed.

## Business and Education split (2026-10-23)

- `src/content/areas.ts` defines the two homepage entry points and the editorial selection of HIST-011/HIST-012 for Education; this does not reclassify the historical source data or assert current programs.
- `src/app/business/page.tsx` reuses the existing directory presentation. `src/app/education/page.tsx` uses a split introduction and existing NewsList photo articles.
- Header/mobile/footer navigation now lists Business and Education separately. Six category detail URLs remain at `/operations/[slug]`, with return links to `/business`.
- Professional Training remains in Business pending specific client direction; the UCLA training activity is also presented as a historical learning example in Education.
- Content remains provisional; contact delivery, hosting, authentication, and deployment are unchanged.

## Business placeholders (2026-10-23, supersedes the initial split above)

Business now lists only Build International Connect and International Exhibition. Their detail routes are `/operations/build-international-connect` and `/operations/international-exhibition`, each with an explicit currently-empty message. The six old category detail URLs now return 404. The Business landing page no longer includes the legacy archive aside. The homepage Business description reflects the new pair. Education and historical activity records are unchanged; legacy category classifications in those records remain archival data, not current Business offerings.

## Education directions (2026-10-23, supersedes the initial split above)

`src/content/areas.ts` now defines the two Education links and their travel-direction descriptions. The old historical selection was removed from Education only; both source articles and images remain in News & Activities. `src/app/education/page.tsx` displays two open text links; `src/app/education/china-us/page.tsx` and `src/app/education/us-china/page.tsx` are static detail pages. China - US has an empty-content placeholder, while US - China has only a YES heading below its page title. No new program facts or affiliations are asserted.

## Activity collections (2026-10-23)

`newsSections` in `src/content/news.ts` supplies the two collection links. Historical Activities contains all existing records without changing their IDs, slugs, dates, content, or images. The existing `/news/[slug]` article URLs remain valid and return to Historical Activities. Homepage archive links now point directly to that collection. Past YES is a static empty page, ready for future nested routes under `src/app/news/past-yes/`; no future subsection names or content have been invented. Business and Education remain unchanged.
