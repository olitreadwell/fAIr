# hotosm/fAIr context
> refreshed 2026-09-09 | upstream default: develop @ 44f70229

## Identity & policies
- upstream: hotosm/fAIr, default branch `develop`, primary language TypeScript (frontend) + Python (backend). English-first (yes).
- CLA/DCO: **CLA required** — `.github/workflows/contribution-agreement.yml` (added 2026-09-08, commit 3c284cb5) runs `hotosm/gh-workflows` contributor_agreement on `pull_request_target`; contributors must comment "I have read the CONTRIBUTING.md document and I hereby sign and agree with the guidelines". `signed-contributors.json` present (empty).
- AI-assisted PR policy: **disclosure REQUIRED** — CONTRIBUTING.md "AI Tool Usage" + PR template "AI Tool Usage" section (levels 0-5), added 2026-09-08 (commit fac66954). This is a hard filter for the trivial loop (skip-requires-ai-disclosure).
- signed commits required: no.
- PR template: `.github/pull_request_template.md` (present, includes AI Tool Usage section).
- external tracker: github.

## Conventions (verified from merged PRs)
- branch naming: conventional commits — `feat/...`, `fix/...`, `chore/...`, `refactor: ...` (e.g. `feat/new-location-modal`, `fix/readme-badge-links`, `pr2/share-constants`).
- commit style: Conventional Commits (`fix(readme): ...`, `refactor: ...`).
- CI: GitHub Actions (backend build, frontend build, publish container image). Maintainers merge small doc/link PRs (e.g. #536 "fix(readme): point CI badges and license link at the current files" merged 2026-09-04).
- outside PRs merge: active, responsive (PRs #540, #539 merged 2026-09-08).

## Maintainer picture
- Active maintainers; recent merges 2026-09-08. HOT org (Humanitarian OpenStreetMap Team).

## Issue-area health
- Open docs-restructure PRs #426/#427 (move docs to frontend/docs/, messy — commit node_modules/.vitepress cache). Avoid editing docs files they remove (docs/Infra.md, docs/Release.md, docs/User-Manual-for-fAIr.md, docs/Docker-installation.md).

## Gap ledger (dedupe — READ FIRST, never re-pick)
- `2026-09-09` trivial-fix pass (typos) — outcome: **skipped (skip-requires-ai-disclosure)** — repo now requires AI disclosure in PR template (CONTRIBUTING + PR template, added 2026-09-08) AND has a CLA workflow; both are hard filters for the trivial loop. Genuine typos found (README roadmap table, docs/deployment.md, ADR docs, 3 frontend UI strings) but no PR opened per config hard filters. Lesson: re-check policy passport against live repo before picking; this repo's policy changed after the 2026-08-24 passport.

## Mined gaps (discovered, not yet attempted)
- `2026-09-09` README roadmap table typos (estiamted/estiamed->estimated, provate->private, predcitions->predictions, publically->publicly, relsults->results, solap panels->solar panels, martial->materials, taks->tasks, Trainimg->Training, datalayers->data layers, an mapper->a mapper, May/Aug-Sept 206->2026) — status: proposed (blocked by AI-disclosure hard filter).
- `2026-09-09` docs/deployment.md typos (prediciton->prediction, utilties->utilities) — status: proposed.
- `2026-09-09` ADR docs typos (stying->styling x3, occassionally->occasionally, relavent->relevant) — status: proposed.
- `2026-09-09` frontend UI string typos (intruction->instruction, crated->created, Occured->Occurred) — status: proposed.
