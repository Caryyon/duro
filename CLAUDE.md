# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Duro is a component-container responsive UI library built with React and Theme-UI. It uses CSS `@container` queries for per-component responsiveness and `theme-ui` for style orchestration with JavaScript-powered theming.

## Monorepo Structure

This is a pnpm monorepo managed by Turborepo:

- **apps/docs**: Storybook documentation site for component showcase
- **packages/duro-core**: Main component library (exported as `@duro/core`)
- **packages/duro-utils**: Shared utilities
- **packages/duro-tsconfig**: Shared TypeScript configurations
- **packages/eslint-config-duro**: Shared ESLint configurations

## Common Commands

### Development
```bash
# Start development mode (all packages with watch mode)
pnpm dev

# Start Storybook for component development
cd apps/docs && pnpm dev
```

### Building
```bash
# Build all packages
pnpm build

# Build a specific package
cd packages/duro-core && pnpm build
```

### Testing & Quality
```bash
# Lint all packages
pnpm lint

# Lint specific package
cd packages/duro-core && pnpm lint

# Format code
pnpm format
```

### Package Management
```bash
# Clean all build artifacts and node_modules
pnpm clean

# Version packages for release
pnpm changeset
pnpm version-packages

# Publish packages
pnpm release
```

## Architecture

### Component Structure

Components in `packages/duro-core/src/` follow a consistent pattern:

```
ComponentName/
  ├── index.tsx      # Component implementation
  └── theme.ts       # Component-specific theme variants
```

Each component:
- Exports both the component and its theme object
- Uses Theme-UI primitives (Box, Grid, Button, etc.)
- Supports variants (typically `primary` and `secondary`) defined in `src/shared/variants.ts`
- Includes TypeScript types exported alongside the component

### Theme System

The theming architecture is centralized:

1. **Global theme** (`src/theme.ts`): Defines `duroDefaultTheme` with colors, breakpoints, and component themes
2. **Component themes**: Individual theme files (e.g., `Button/theme.ts`) export style objects
3. **Theme aggregation**: Component themes are imported and merged into the global theme
4. **Color modes**: Supports light/dark modes via Theme-UI's color mode system

### Build System

- **tsup**: Bundles the library for both ESM (`dist/index.mjs`) and CJS (`dist/index.js`) with TypeScript declarations
- **Turborepo**: Orchestrates builds across packages with caching and dependency management
- **Storybook**: Uses Vite builder for documentation and component development

## Development Guidelines

### Adding New Components

1. Create component directory in `packages/duro-core/src/ComponentName/`
2. Implement `index.tsx` with component and props interface
3. Create `theme.ts` with variant styles
4. Export from `packages/duro-core/src/index.tsx`
5. Import theme into `packages/duro-core/src/theme.ts` and add to `duroDefaultTheme`
6. Add Storybook story in `apps/docs/stories/`

### Variant System

Components use the `Variants` enum from `src/shared/variants.ts`:
```typescript
export enum Variants {
  primary,
  secondary,
}
```

Use this enum in component prop types:
```typescript
variant?: keyof typeof Variants
```

### TypeScript Patterns

- All components must export their props interface as `{ComponentName}Props`
- Use enums for string literal types that are shared across components
- Remove unused variables rather than prefixing with underscore
