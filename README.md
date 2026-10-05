# meixiedu

meixiedu is the technical project and repository for the American West Educational Center public website. The expected future domain identity remains `meixiedu`. The website presents provisional legacy-derived information about historical business operations and activities while current company and program details remain subject to client confirmation.

## Current status

Day 0 — Foundation and Structural Shell is complete. Day 1 legacy-content integration now includes six provisional Business Operations categories and 15 historical records in the public **News & Activities** section. The `/news` route architecture is unchanged. Fourteen activities now have source-matched legacy photos. The Techtextil video remains unavailable; current-status confirmation, final branding, contact details, and legal material remain pending.

## Confirmed stack

- Next.js 16.2.11 with the App Router
- React 19.2.4
- TypeScript
- Tailwind CSS 4
- ESLint 9 with the Next.js configuration
- Local project files for future content
- pnpm 11

## Current scope

The repository currently provides the application foundation, shared layout components, local site configuration, global design tokens, project operating documentation, and populated local Operations and News & Activities collections. The approved product direction is documented in `BLUEPRINT.md`.

Explicitly excluded from the current architecture are a CMS, database, authentication, client dashboard, payment system, customer portal, and unapproved third-party integrations. These must not be added without an approved scope change.

## Local development on Windows

Requirements:

- Windows with Git and PowerShell installed
- Node.js 24 (see `.nvmrc`)
- pnpm 11.7.0 (pinned in `package.json`)

With Node 24 and Corepack available, run this from the repository folder in PowerShell:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\scripts\setup-windows.ps1
```

The script checks Node 24, selects pnpm 11.7.0 through Corepack, and installs locked dependencies. The execution-policy override applies only to that process. It does not change the machine's policy or global package-manager configuration.

On a new PC, install Node.js 24 and Git for Windows, then reopen PowerShell. If Corepack is missing, run `npm.cmd install --global corepack` before running setup.

Use `corepack pnpm` for this project because a bare `pnpm` command may resolve to another tool's version. To reinstall dependencies manually:

```powershell
corepack pnpm install --frozen-lockfile
```

Start the development server:

```powershell
corepack pnpm dev
```

Then open `http://localhost:3000`.

Run project checks:

```powershell
corepack pnpm lint
corepack pnpm typecheck
corepack pnpm build
```

To preview a successful production build, run `corepack pnpm start`. Stop either server with Ctrl+C before switching modes. No service credentials or environment variables are required for the current local-content website; the contact form remains disabled.

Dependencies (`node_modules`) and generated output (`.next`) are local and ignored by Git. Install them separately on each computer rather than copying them from macOS.

## macOS compatibility

The application remains cross-platform. On macOS, select Node 24 with `nvm use`, ensure Corepack is available, and use the same `corepack pnpm` commands above. `.gitattributes` keeps text files at LF across operating systems.

## Documentation index

- `BLUEPRINT.md` — product vision, approved scope, and planned architecture; primary source of truth
- `AGENTS.md` — repository rules for coding agents
- `DEV_PROCESS.md` — repeatable developer, ChatGPT, and Codex workflow
- `CODEBASE_MAP.md` — factual map of files and implementation currently present
- `DAILY_LOG.md` — chronological development-session record
- `CLIENT_CONTENT_INTAKE.md` — structured checklist for gathering and approving Day 1 client material

## Repository structure

```text
public/                  Generated assets; empty images/ and documents/ areas
scripts/                 Windows dependency-setup script
src/app/                 Shared layout, five structural pages, and two dynamic detail routes
src/components/          Shared shell, page-section, Operations, and News components
src/content/             Shared identity, temporary page copy, and populated typed collections
src/lib/                 Empty area for future utilities
src/types/               Shared local content types
CLIENT_CONTENT_INTAKE.md Day 1 client-material and approval checklist
BLUEPRINT.md             Approved product direction
AGENTS.md                Agent instructions
DEV_PROCESS.md           Development workflow
CODEBASE_MAP.md          Current repository map
DAILY_LOG.md             Session history
```

## Content accuracy

Do not invent company history, services, statistics, testimonials, partners, certifications, team members, or program details. Do not claim that American West Educational Center administers, sponsors, partners with, or holds an official role in the YES program without client-confirmed wording. Planned routes and content in the blueprint are not implemented merely because they are documented.

## Next step

Review the 14 illustrated historical activities and their source mapping in `old content/EVENT_IMAGE_MAP.md`. Confirm client content and image usage before final launch; uncaptained About photos remain unassigned and Techtextil media remains unavailable.
