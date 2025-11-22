# Duro Vision: A Durable Design System for 2025 and Beyond

## Research Summary

### CSS Houdini Current State (2025)
**Browser Support Score: 55/100**

- **Properties and Values API (`@property`)**: ✅ Chrome/Edge, ✅ Safari 16.4+, ⚠️ Firefox (experimental flags only)
- **Paint API**: ✅ Chrome/Edge only, ❌ Safari, ❌ Firefox
- **Layout API**: ❌ Not production-ready anywhere
- **Animation Worklet**: ❌ Very limited support

**Verdict**: Houdini is viable only with polyfills for progressive enhancement, not as core functionality.

### Theme-UI SSR Challenges

Theme-UI (built on Emotion) has fundamental SSR issues:
1. **Hydration mismatches** in Next.js due to client-side theme storage (localStorage)
2. **Duplicate styles** when components aren't wrapped in Emotion's CacheProvider
3. **Flash of unstyled content (FOUC)** during SSR → CSR transition
4. **Next.js 15 App Router** creates additional hydration errors with ThemeProvider

### Modern SSR-Compatible Approach

The industry is shifting toward:
- **CSS Custom Properties (variables)** for theming
- **CSS Modules** for component styles
- **Server-side theme injection** via cookies instead of localStorage
- **Zero-runtime CSS-in-JS** or compile-time transforms (SWC)

## Proposed Architecture for Duro

### Core Philosophy: Hybrid Durability

Build a system that gracefully degrades and progressively enhances:

```
Layer 1 (Foundation): CSS Custom Properties + CSS Modules
  ↓ Works everywhere, SSR-safe
Layer 2 (Enhancement): SWC Transform for DX
  ↓ Compile-time optimization, zero runtime cost
Layer 3 (Innovation): Houdini with Polyfills
  ↓ Progressive enhancement for supported browsers
```

### The "Sections" Concept

Introduce a new primitive: `<Section>` - a layout-aware container that:

1. **Adapts to theme configuration** - reads layout hints from theme object
2. **Container query-aware** - uses `@container` for true component-level responsiveness
3. **Composition-friendly** - composes with other sections intelligently
4. **SSR-compatible** - no client-side JavaScript required for initial render

Example API:
```tsx
<Section
  variant="hero"
  responsive={{
    sm: "single-column",
    md: "two-column",
    lg: "sidebar-main-aside"
  }}
>
  {children}
</Section>
```

The theme would define section layouts:
```typescript
const theme = {
  sections: {
    hero: {
      layouts: {
        'single-column': { /* CSS properties */ },
        'two-column': { /* CSS properties */ },
        'sidebar-main-aside': { /* CSS properties */ }
      },
      containerQueries: {
        sm: '320px',
        md: '768px',
        lg: '1024px'
      }
    }
  }
}
```

## Technical Strategy

### 1. CSS-First with JavaScript Enhancement

**Foundation**: CSS Custom Properties
```css
/* Generated from theme object at build time */
:root {
  --duro-color-primary: #EB5757;
  --duro-color-background: #FFFFFF;
  --duro-section-hero-gap: 2rem;
  --duro-section-hero-columns: 1;
}

@container (min-width: 768px) {
  :root {
    --duro-section-hero-columns: 2;
  }
}
```

**Why**:
- ✅ SSR-safe (no hydration issues)
- ✅ Works in CSR (CRA, Vite, etc.)
- ✅ Zero runtime JavaScript
- ✅ Theme switching via class swap on `<html>` element

### 2. SWC Transform for Developer Experience

Create `@duro/swc-plugin` to transform:

```tsx
// Write this (developer experience)
<Box sx={{ bg: 'primary', p: 3 }}>Content</Box>

// Compiles to (zero runtime)
<div className={styles.box_abc123} style={{
  '--bg': 'var(--duro-color-primary)',
  '--p': 'var(--duro-space-3)'
}}>Content</div>
```

**Benefits**:
- Theme-UI-like DX without runtime overhead
- SSR compatible (compiled at build time)
- Type-safe theme references
- Works in both Next.js and CRA

### 3. Houdini for Progressive Enhancement

Use `@property` for advanced theming where supported:

```css
@property --duro-gradient-angle {
  syntax: '<angle>';
  initial-value: 45deg;
  inherits: true;
}

.gradient-box {
  background: linear-gradient(var(--duro-gradient-angle), var(--primary), var(--secondary));
  transition: --duro-gradient-angle 0.3s ease;
}

.gradient-box:hover {
  --duro-gradient-angle: 135deg;
}
```

**Fallback**: Standard CSS variables for browsers without `@property` support.

### 4. Server-Safe Theme Detection

**Cookie-based theme persistence**:
```typescript
// Server Component (Next.js App Router)
export async function ThemeProvider({ children }) {
  const theme = cookies().get('duro-theme')?.value ?? 'light'

  return (
    <html data-theme={theme}>
      <head>
        <style dangerouslySetInnerHTML={{ __html: getThemeCSS(theme) }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

**No hydration mismatch**: Server and client render identically.

## Sections Architecture

### Section Registry

Sections are registered in the theme with layout definitions:

```typescript
// Theme definition
export const duroTheme = {
  sections: {
    // Predefined sections
    hero: createSection({
      baseLayout: 'flex-column',
      variants: {
        centered: { alignItems: 'center', justifyContent: 'center' },
        split: { flexDirection: 'row', gap: 'var(--duro-space-4)' }
      },
      responsive: {
        breakpoints: ['640px', '768px', '1024px'],
        layouts: [
          { columns: 1, gap: 2 },
          { columns: 2, gap: 4 },
          { columns: 3, gap: 6 }
        ]
      }
    }),

    dashboard: createSection({
      baseLayout: 'grid',
      variants: {
        admin: {
          gridTemplateAreas: '"sidebar main aside"',
          gridTemplateColumns: '250px 1fr 300px'
        },
        guest: {
          gridTemplateAreas: '"main"',
          gridTemplateColumns: '1fr'
        }
      }
    }),

    // Users can extend
    custom: createSection({ /* ... */ })
  }
}
```

### Section Component Implementation

```typescript
interface SectionProps {
  variant?: string
  as?: keyof JSX.IntrinsicElements
  children: ReactNode
  containerQuery?: boolean // Enable @container queries
}

export const Section: FC<SectionProps> = ({
  variant = 'default',
  as: Component = 'section',
  containerQuery = true,
  children,
  ...props
}) => {
  const sectionClass = useMemo(() =>
    generateSectionClass(variant, containerQuery),
    [variant, containerQuery]
  )

  return (
    <Component
      className={sectionClass}
      data-duro-section={variant}
      {...props}
    >
      {children}
    </Component>
  )
}
```

## Implementation Roadmap

### Phase 1: Foundation (Weeks 1-3)
- [ ] CSS Custom Properties system
- [ ] Theme-to-CSS compiler
- [ ] Basic Section component
- [ ] SSR-safe theme switching
- [ ] Cookie-based theme persistence

### Phase 2: Developer Experience (Weeks 4-6)
- [ ] SWC transform plugin for `sx` prop
- [ ] TypeScript theme typings
- [ ] Section registry system
- [ ] Responsive API refinement

### Phase 3: Enhancement (Weeks 7-9)
- [ ] Houdini `@property` integration with fallbacks
- [ ] Paint API polyfill exploration
- [ ] Advanced animation system
- [ ] Container query utilities

### Phase 4: Ecosystem (Weeks 10-12)
- [ ] Next.js App Router integration examples
- [ ] CRA compatibility testing
- [ ] Vite plugin
- [ ] Remix integration guide

## Why This Approach is Durable

### 1. **Standards-Based**
Built on CSS Custom Properties (2012 spec, universally supported), Container Queries (2023, 90%+ support), and progressive enhancement.

### 2. **Framework Agnostic**
Core is CSS + minimal JS. Works with Next.js SSR, React CSR, even Svelte or Vue with adapters.

### 3. **Migration Path**
Users can gradually adopt:
- Start: Just use the CSS output
- Grow: Add React components
- Scale: Enable SWC transforms
- Enhance: Layer in Houdini features

### 4. **No Lock-In**
Theme object is portable JSON. Can export to:
- CSS variables
- Tailwind config
- Styled-components theme
- Plain CSS files

### 5. **Performance First**
- Zero-runtime CSS-in-JS
- Tree-shakeable components
- Compile-time optimization
- Native CSS features (no polyfill cost for core features)

## Open Questions to Explore

1. **SWC Plugin Complexity**: How much can we realistically transform at compile time?
2. **Section Composition**: How do nested sections inherit/override layouts?
3. **TypeScript DX**: Can we generate types from theme object automatically?
4. **Build Tool Integration**: Should we provide Webpack/Rollup/Vite plugins?
5. **Accessibility**: How do sections announce their layout changes to screen readers?

## Next Steps

1. Prototype the CSS variable system with current Button/Filler components
2. Build a minimal SWC transform for `sx` prop compilation
3. Implement Section component with container queries
4. Test SSR compatibility with Next.js 15 App Router
5. Document the theme object schema
