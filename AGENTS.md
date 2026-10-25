# Project Instructions for Coding Agents

These instructions apply to all coding-agent work in this repository. More specific instructions in an assigned task take precedence when they do not conflict with approved project scope.

## Required context

Before relevant implementation work:

1. Read `AGENTS.md`, `BLUEPRINT.md`, `DEV_PROCESS.md`, and `CODEBASE_MAP.md`.
2. Read the latest entry in `DAILY_LOG.md`.
3. Inspect the existing repository, including the files, routes, configuration, and Git status related to the task.
4. Determine the current project stage from the repository, blueprint, assigned task, codebase map, and latest daily-log entry. Do not rely on permanent stage wording in any single document.

`BLUEPRINT.md` is the primary source of truth for approved product direction. `CODEBASE_MAP.md` describes what currently exists; planned blueprint files and routes are not implemented merely because they are documented.

## Working rules

- Work only within the assigned task and its acceptance criteria.
- Preserve the established architecture, conventions, and existing user work.
- Keep changes narrow and reviewable; avoid unrelated refactoring or scope expansion.
- Inspect before editing and reuse existing patterns where appropriate.
- Do not replace established documentation or architecture without justification and approval.
- Run the checks required by the task and relevant checks for changed code.
- Use browser review of the running website for page verification. Do not routinely create page PDFs or inspect PDF exports; the owner now reviews the live website. Create or review page PDFs only when explicitly requested. Continue reading supplied source PDFs when needed for an assigned content task.
- After every approved change to local website code, content, or public assets, run `corepack pnpm build`. If the build succeeds, deploy the generated static site to Firebase Hosting with `firebase deploy --only hosting --project awec-1d59e`. Do not deploy when the build fails; report the failure and stop before deployment.
- After approved development work, update `DAILY_LOG.md` with factual results.
- Update `CODEBASE_MAP.md` whenever repository structure or implementation status changes.
- Report every file created or changed, checks performed and their results, assumptions, blockers, and incomplete work.

## Content safeguards

- Do not invent company information, history, statistics, testimonials, partners, certifications, services, programs, or team members.
- Do not make unsupported claims about the company’s role in the YES program, including claims of sponsorship, administration, partnership, or official affiliation.
- Clearly distinguish approved content, neutral placeholders, and future plans.

## Scope and dependency safeguards

Without explicit approval, do not add:

- a CMS or database;
- authentication, a client dashboard, or a payment system;
- a major dependency, service, or integration;
- new product scope beyond the assigned task.

## Git safeguards

- Do not perform destructive Git operations.
- Do not commit, push, reset, rebase, delete branches, or modify remotes unless explicitly requested.
- Preserve unrelated working-tree changes and report any conflict that prevents safe work.

## Completion report

At handoff, state:

- what was completed;
- all files created and modified;
- verification commands and results;
- assumptions and decisions;
- blockers, failures, and remaining work.
