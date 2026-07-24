# Development Process

This workflow coordinates the developer, ChatGPT, and Codex. It favors small, reviewable tasks and prohibits unrelated scope expansion.

## 1. Define the task

Each task should specify:

- **Goal:** the outcome to achieve.
- **Included work:** files, routes, behavior, or documentation that may change.
- **Excluded work:** explicit scope boundaries.
- **Acceptance criteria:** observable conditions for completion.
- **Required inspection:** documentation and repository areas to review first.
- **Required checks:** commands and manual review needed for verification.

ChatGPT may help turn a requirement into a narrow task. The developer approves scope and content decisions. Codex implements and verifies only the approved task.

## 2. Inspect before editing

Read `AGENTS.md`, `BLUEPRINT.md`, `DEV_PROCESS.md`, `CODEBASE_MAP.md`, and the latest `DAILY_LOG.md` entry as relevant. Inspect the current files, routes, configuration, dependencies, and Git status related to the task. Confirm whether described architecture is existing or merely planned.

## 3. Implement narrowly

- Make the smallest coherent change that satisfies the acceptance criteria.
- Follow current architecture and conventions.
- Preserve unrelated work and avoid speculative abstractions.
- Do not add dependencies, services, content, or features outside the approved scope.
- Stop and report when a required decision would materially alter scope or content accuracy.

## 4. Verify

Run the checks named in the task plus checks appropriate to the changed area. Typical project checks are:

```bash
pnpm lint
pnpm build
git status --short
git diff --stat
```

For visual or interactive changes, also inspect affected routes at relevant viewport sizes and check keyboard use, semantics, and obvious regressions. Record exact commands and results; never report an unrun check as passed.

## 5. Handle failed checks

Investigate whether the failure was introduced by the task. Fix in-scope causes and rerun the check. Do not refactor unrelated code to obtain a clean result. Report the failing command, useful error summary, likely cause, investigation performed, and whether verification remains incomplete.

## 6. Human review

The developer and ChatGPT review the diff and, when applicable, rendered pages or screenshots. Review covers scope, content accuracy, accessibility, responsive behavior, architecture, and acceptance criteria. Requested corrections become a new narrow iteration when they are not part of the original acceptance criteria.

## 7. Update documentation

After approved development work:

- add a factual entry to `DAILY_LOG.md`;
- update `CODEBASE_MAP.md` when structure or implementation status changes;
- update `BLUEPRINT.md` only when the developer approves a product, scope, or architecture decision;
- update setup documentation when commands, versions, dependencies, services, or environment requirements change.

## 8. Git review and commit workflow

1. Review `git status --short` and `git diff --stat`.
2. Review the complete diff for scope and accidental changes.
3. The developer completes or explicitly requests staging and committing after human review.
4. Use a focused commit message that describes the approved task.

Agents must not commit, push, reset, rebase, delete branches, or modify remotes unless explicitly requested. A failed check or incomplete acceptance criterion must be disclosed before any requested commit.

## 9. Assumptions and blockers

Use a low-risk, reversible assumption only when it stays within established scope, and report it. Ask for a decision when an assumption could invent client facts, change product behavior, add cost or dependencies, or expand scope. Report blockers promptly with their impact and the smallest decision needed to proceed. Never silently omit incomplete work.

## Reusable Codex task template

```text
Repository: meixiedu

Goal
[One concrete outcome.]

Included work
- [Allowed file, route, or behavior]

Excluded work
- [Explicit boundary]

Acceptance criteria
- [Observable completion condition]

Required inspection
- AGENTS.md
- BLUEPRINT.md
- DEV_PROCESS.md
- CODEBASE_MAP.md
- Latest DAILY_LOG.md entry
- [Relevant files/routes/configuration]
- Current Git status

Implementation constraints
- Keep the change narrow and preserve existing architecture.
- Do not invent company or program information.
- Do not add dependencies or expand scope without approval.

Verification
- [Command or manual check]

Documentation updates
- Update DAILY_LOG.md after approved work.
- Update CODEBASE_MAP.md if structure or implementation status changes.

Final report
- Summary
- Files created and modified
- Checks and results
- Assumptions
- Blockers or incomplete work
- Git status summary
```
