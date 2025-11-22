# Getting Started with Duro

Duro is a durable, SSR-compatible design system built on CSS custom properties, container queries, and modern React patterns.

## Installation

```bash
npm install @duro/core
# or
yarn add @duro/core
# or
pnpm add @duro/core
```

## Basic Usage

### 1. Import the CSS

Import the Duro CSS file in your app's entry point:

```tsx
// Next.js App Router: app/layout.tsx
import '@duro/core/styles'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
```

```tsx
// Create React App: src/index.tsx
import '@duro/core/styles'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
```

### 2. Use Components

```tsx
import { Button, Section, Stack } from '@duro/core'

export default function MyPage() {
  return (
    <Section section="hero" variant="centered">
      <Stack>
        <h1>Welcome to Duro</h1>
        <p>A durable design system for modern web apps</p>
        <Button variant="primary" size="lg">
          Get Started
        </Button>
      </Stack>
    </Section>
  )
}
```

## With Theme Provider (Optional)

For dynamic theme switching and custom themes:

```tsx
// Next.js App Router: app/layout.tsx
import { DuroProvider } from '@duro/core'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <DuroProvider colorMode="system">
          {children}
        </DuroProvider>
      </body>
    </html>
  )
}
```

## SSR-Safe Theme Switching

Duro uses cookies for theme persistence to avoid hydration mismatches:

```tsx
// Next.js Server Component
import { cookies } from 'next/headers'
import { DuroProvider, getServerThemeCSS, duroTheme } from '@duro/core'

export default function RootLayout({ children }) {
  const theme = cookies().get('duro-theme')?.value ?? 'system'

  return (
    <html data-theme={theme}>
      <head>
        {/* Inject theme CSS on server to prevent FOUC */}
        <style dangerouslySetInnerHTML={{ __html: getServerThemeCSS(duroTheme) }} />
      </head>
      <body>
        <DuroProvider colorMode={theme as any} injectStyles={false}>
          {children}
        </DuroProvider>
      </body>
    </html>
  )
}
```

## Section Layouts

Duro's innovative Section component adapts to container queries:

```tsx
import { Section, Dashboard, Grid, Sidebar } from '@duro/core'

// Hero section with variants
<Section section="hero" variant="split">
  <div>Left content</div>
  <div>Right content</div>
</Section>

// Dashboard layout
<Dashboard variant="admin">
  <header style={{ gridArea: 'header' }}>Header</header>
  <aside style={{ gridArea: 'sidebar' }}>Sidebar</aside>
  <main style={{ gridArea: 'main' }}>Main Content</main>
  <footer style={{ gridArea: 'footer' }}>Footer</footer>
</Dashboard>

// Responsive grid
<Grid variant="responsive">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</Grid>

// Sidebar layout
<Sidebar variant="left">
  <nav>Navigation</nav>
  <main>Content</main>
</Sidebar>
```

## Custom Theme

Create your own theme by extending the default:

```tsx
import { duroTheme, type DuroTheme } from '@duro/core'

const myTheme: DuroTheme = {
  ...duroTheme,
  colors: {
    ...duroTheme.colors,
    primary: '#FF6B6B',
    secondary: '#4ECDC4',
    modes: {
      dark: {
        ...duroTheme.colors.modes?.dark,
        primary: '#FF8787',
        secondary: '#6FE3D9',
      },
    },
  },
}

// Use in provider
<DuroProvider theme={myTheme}>
  {children}
</DuroProvider>
```

## Component API

### Button

```tsx
<Button
  variant="primary" // 'primary' | 'secondary' | 'accent'
  size="md" // 'sm' | 'md' | 'lg'
  disabled={false}
  onClick={() => console.log('clicked')}
>
  Click Me
</Button>
```

### Section

```tsx
<Section
  section="hero" // Section type from theme registry
  variant="centered" // Variant name
  as="section" // HTML element to render
  containerQuery={true} // Enable container queries
>
  {children}
</Section>
```

### Box

```tsx
<Box
  as="div" // Any HTML element
  className="my-custom-class"
  style={{ padding: '1rem' }}
>
  {children}
</Box>
```

## CSS Custom Properties

All theme values are available as CSS variables:

```css
.my-component {
  color: var(--duro-color-primary);
  padding: var(--duro-space-4);
  font-size: var(--duro-font-size-lg);
  border-radius: var(--duro-radius-md);
  box-shadow: var(--duro-shadow-lg);
}
```

## Why Duro?

- ✅ **SSR-Safe**: No hydration mismatches, works perfectly with Next.js
- ✅ **Zero Runtime**: CSS-in-JS compiled at build time
- ✅ **Container Queries**: True component-level responsiveness
- ✅ **Framework Agnostic**: Works with React, Next.js, Vite, CRA
- ✅ **Type-Safe**: Full TypeScript support
- ✅ **Themeable**: Easy customization with CSS variables
- ✅ **Durable**: Built on web standards that won't change

## Next Steps

- Explore the [Section patterns](/docs/sections.md)
- Learn about [theming](/docs/theming.md)
- Check out [examples](/examples)
