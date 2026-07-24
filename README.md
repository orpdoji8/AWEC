# meixiedu

meixiedu is the technical project and repository for the American West Educational Center public website. The expected future domain identity remains `meixiedu`. The website will present approved information about the organization, its future work in international education and overseas opportunities, news, and contact options. Company and program details remain subject to client approval.

## Current status

The shared website shell and Day 0 structural Home, About Us, and Contact pages are implemented with centralized temporary copy, responsive navigation, a disabled contact-form preview, and a provisional dark-green visual system. Operations and News structures, final branding, and client-approved organization details remain future work.

## Confirmed stack

- Next.js 16.2.11 with the App Router
- React 19.2.4
- TypeScript
- Tailwind CSS 4
- ESLint 9 with the Next.js configuration
- Local project files for future content
- pnpm 11

## Current scope

The repository currently provides the application foundation, shared layout components, local site configuration, global design tokens, project operating documentation, and empty organizational areas for future feature-specific work. The approved product direction is documented in `BLUEPRINT.md`.

Explicitly excluded from the current architecture are a CMS, database, authentication, client dashboard, payment system, customer portal, and unapproved third-party integrations. These must not be added without an approved scope change.

## Local development on macOS

Requirements:

- macOS with Git installed
- Node.js 24 (see `.nvmrc`)
- pnpm 11.7.0 (pinned in `package.json`)

With `nvm` and Corepack available:

```bash
nvm use
corepack enable
corepack prepare pnpm@11.7.0 --activate
```

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Then open `http://localhost:3000`.

Run project checks:

```bash
pnpm lint
pnpm build
```

## Documentation index

- `BLUEPRINT.md` — product vision, approved scope, and planned architecture; primary source of truth
- `AGENTS.md` — repository rules for coding agents
- `DEV_PROCESS.md` — repeatable developer, ChatGPT, and Codex workflow
- `CODEBASE_MAP.md` — factual map of files and implementation currently present
- `DAILY_LOG.md` — chronological development-session record

## Repository structure

```text
public/                  Generated assets; empty images/ and documents/ areas
src/app/                 Shared layout, three structural pages, and placeholders
src/components/          Shared shell components plus empty feature areas
src/content/             Shared identity, navigation, and temporary page copy
src/lib/                 Empty area for future utilities
src/types/               Empty area for future project types
BLUEPRINT.md             Approved product direction
AGENTS.md                Agent instructions
DEV_PROCESS.md           Development workflow
CODEBASE_MAP.md          Current repository map
DAILY_LOG.md             Session history
```

## Content accuracy

Do not invent company history, services, statistics, testimonials, partners, certifications, team members, or program details. Do not claim that American West Educational Center administers, sponsors, partners with, or holds an official role in the YES program without client-confirmed wording. Planned routes and content in the blueprint are not implemented merely because they are documented.

## Next step

Review the Day 0 Home, About, and Contact structures, then implement the approved Operations and News listing/detail shells without inventing content.
