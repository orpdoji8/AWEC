# meixiedu

meixiedu is the repository for a corporate informational website focused on presenting the company, its future work in international education and overseas opportunities, news, and contact information. Company and program details remain subject to client approval.

## Current status

The project is in Day 0 foundation setup. Create Next App has generated a runnable homepage, but the meixiedu website shell, project-specific routes, shared navigation, components, content, and visual design have not been implemented.

## Confirmed stack

- Next.js 16.2.11 with the App Router
- React 19.2.4
- TypeScript
- Tailwind CSS 4
- ESLint 9 with the Next.js configuration
- Local project files for future content
- pnpm 11

## Current scope

The repository currently provides the generated application foundation, project operating documentation, and empty directories for future components, content, utilities, types, images, and documents. The approved product direction is documented in `BLUEPRINT.md`.

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
src/app/                 Generated App Router root layout, homepage, and globals
src/components/          Empty organizational areas for future components
src/content/             Empty area for future approved local content
src/lib/                 Empty area for future utilities
src/types/               Empty area for future project types
BLUEPRINT.md             Approved product direction
AGENTS.md                Agent instructions
DEV_PROCESS.md           Development workflow
CODEBASE_MAP.md          Current repository map
DAILY_LOG.md             Session history
```

## Content accuracy

Do not invent company history, services, statistics, testimonials, partners, certifications, team members, or program details. Do not claim that meixiedu administers, sponsors, partners with, or holds an official role in the YES program without client-confirmed wording. Planned routes and content in the blueprint are not implemented merely because they are documented.

## Next step

Review and approve the Day 0 foundation, then define a separate, narrow task for the initial shared website shell. That task should preserve the content safeguards and avoid presenting planned company or program information as confirmed.
