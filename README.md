# Shipyard Engineering

A small, focused engineering team that ships production-quality software end-to-end — architecture, backend, frontend, and tests — without the overhead of a larger org.

## Tech Stack

- **Runtime:** Node.js >= 20
- **Package Manager:** pnpm (workspace monorepo)
- **Language:** TypeScript (strict mode)
- **Linting:** ESLint 9 with typescript-eslint
- **Formatting:** Prettier
- **Testing:** Vitest
- **CI:** GitHub Actions

## Project Structure

```
shipyard-engineering/
├── packages/
│   ├── backend/          # API server and business logic
│   ├── frontend/         # UI application
│   └── shared/           # Shared types, utilities, and configs
├── .github/workflows/    # CI pipeline
├── pnpm-workspace.yaml   # Workspace configuration
├── tsconfig.base.json    # Shared TypeScript configuration
├── tsconfig.json         # Root project references
├── eslint.config.mjs     # ESLint flat config
├── .prettierrc           # Prettier configuration
└── README.md
```

## Development Setup

### Prerequisites

- Node.js >= 20
- pnpm >= 9 (install via `corepack enable && corepack prepare pnpm@latest --activate`)

### Getting Started

```bash
# Install dependencies
pnpm install

# Run all checks (lint, type-check, test)
pnpm ci

# Run tests
pnpm test

# Run linting
pnpm lint

# Format code
pnpm format

# Build all packages
pnpm build

# Run development servers (all packages in parallel)
pnpm dev
```

### Adding a New Package

```bash
mkdir -p packages/my-package/src
# Create package.json extending workspace conventions
# Add path to root tsconfig.json references
# Add to pnpm-workspace.yaml if not under packages/
```

## Conventions

### Branching

- `main` — production-ready code
- Feature branches: `feat/<short-description>`
- Bug fixes: `fix/<short-description>`

### Commit Messages

We follow conventional commits:

```
feat: add user authentication
fix: resolve login redirect loop
chore: update dependencies
docs: add API documentation
```

### Code Quality

- All new code must have tests
- TypeScript strict mode is enforced
- Lint and type-check must pass before merging
- PRs require CI green check

## CI/CD

Every pull request triggers:

1. `pnpm install` (with frozen lockfile)
2. `pnpm lint` — ESLint checks
3. `pnpm typecheck` — TypeScript type checking
4. `pnpm test` — Vitest test suite
5. `pnpm build` — TypeScript compilation

## Team

- **Technical Lead** — Architecture planning, task breakdown, code review
- **Backend Engineer** — API development, database schema, server-side logic
- **Frontend Engineers** — UI development, component architecture, state management
- **QA Engineers** — Test planning, edge case identification, bug verification