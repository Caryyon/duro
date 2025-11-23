# Duro

A HUD tech interface component library for React. Monochromatic. Sharp. Terminal-inspired.

## Philosophy

Duro embraces a stark, technical aesthetic:
- **Monochromatic** - Black, white, and grays only. No color distractions.
- **Sharp corners** - No border-radius. Everything is angular and precise.
- **Thin borders** - Delicate 1px lines define structure without weight.
- **No shadows** - Flat and honest. Depth comes from layout, not effects.
- **Terminal-inspired** - JetBrains Mono font. Technical. Readable.
- **Zero-runtime CSS** - CSS custom properties, no JS overhead.
- **SSR-ready** - Works seamlessly with Next.js, Remix, and other SSR frameworks.

## Installation

```bash
# yarn
yarn add @caryyon/duro

# npm
npm install @caryyon/duro

# pnpm
pnpm add @caryyon/duro
```

## Quick Start

### 1. Import the styles

```tsx
// In your app's entry point (e.g., layout.tsx, _app.tsx)
import '@caryyon/duro/styles'
```

### 2. Start using components

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent, Heading, Paragraph } from '@caryyon/duro'

function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>System Status</CardTitle>
      </CardHeader>
      <CardContent>
        <Heading level={3}>ACTIVE</Heading>
        <Paragraph>
          All systems operational. Monitoring enabled.
        </Paragraph>
        <Button variant="primary">Initialize</Button>
      </CardContent>
    </Card>
  )
}
```

## Components

### Layout
- `Stack` - Vertical stacking with consistent spacing
- `Grid` - Responsive grid layouts
- `Cluster` - Horizontal grouping with wrapping
- `Box` - Basic container with padding/margin control
- `Section` - Semantic section with container queries

### Forms
- `Button` / `ButtonGroup` - Actions and grouped actions
- `Input` - Text input fields
- `Textarea` - Multi-line text input
- `Label` - Form labels
- `Checkbox` - Boolean selection
- `Switch` - Toggle switches

### Display
- `Card` - Content containers with header/content/footer
- `Badge` - Status indicators and labels
- `Alert` - Notifications and messages
- `Progress` - Progress indicators
- `Avatar` - User/entity representations
- `Skeleton` - Loading placeholders
- `Separator` - Visual dividers

### Navigation
- `Tabs` - Tabbed content switching
- `Accordion` - Collapsible content sections

### Overlay
- `Dialog` - Modal dialogs
- `Tooltip` - Hover information

### Typography
- `Heading` - h1-h6 headings
- `Text` - Inline text with variants
- `Paragraph` - Block text

## HUD Utility Classes

Duro includes utility classes for enhanced visual effects:

```tsx
// Bracketed text decorations
<span className="duro-brackets">SYSTEM ONLINE</span>

// Scanline overlay effect
<div className="duro-scanlines">
  <p>Retro CRT aesthetic</p>
</div>

// Glitch text animation
<h1 className="duro-glitch" data-text="ERROR">ERROR</h1>

// Terminal-style text
<code className="duro-terminal">$ npm run build</code>

// Grid background pattern
<div className="duro-grid-bg">
  <p>Technical grid backdrop</p>
</div>
```

## Next.js Integration

### App Router

```tsx
// app/layout.tsx
import '@caryyon/duro/styles'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

### Pages Router

```tsx
// pages/_app.tsx
import '@caryyon/duro/styles'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
```

## Design Tokens

Duro uses CSS custom properties for consistent styling:

```css
/* Colors */
--duro-black: #000000;
--duro-white: #ffffff;
--duro-gray-100 through --duro-gray-900;

/* Typography */
--duro-font-mono: 'JetBrains Mono', monospace;

/* Spacing */
--duro-space-1 through --duro-space-12;

/* Borders */
--duro-border-width: 1px;
--duro-border-color: var(--duro-gray-300);
```

## Accessibility

All Duro components are built with accessibility in mind:
- Semantic HTML elements
- ARIA attributes where appropriate
- Keyboard navigation support
- Screen reader friendly
- Sufficient color contrast (WCAG AA compliant)

## Browser Support

Duro supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## TypeScript

Duro is built with TypeScript and includes full type definitions:

```tsx
import type { ButtonProps, CardProps, HeadingLevel } from '@caryyon/duro'
```

## License

MIT

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting a PR.
