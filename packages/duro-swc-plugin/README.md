# @duro/swc-plugin

Transform Duro's `sx` prop to inline styles with CSS variables at build time.

## What is this?

This plugin transforms theme-aware `sx` props into inline styles using CSS custom properties, giving you the developer experience of CSS-in-JS with zero runtime overhead and perfect SSR compatibility.

### Before (with sx prop)

```tsx
<Box sx={{
  bg: 'primary',
  p: 4,
  borderRadius: 'md',
  boxShadow: 'lg'
}}>
  Content
</Box>
```

### After (compiled)

```tsx
<Box style={{
  background: 'var(--duro-color-primary)',
  padding: 'var(--duro-space-4)',
  borderRadius: 'var(--duro-radius-md)',
  boxShadow: 'var(--duro-shadow-lg)'
}}>
  Content
</Box>
```

## Installation

```bash
npm install --save-dev @duro/swc-plugin
# or
yarn add -D @duro/swc-plugin
# or
pnpm add -D @duro/swc-plugin
```

## Usage

### With Next.js

In your `next.config.js`:

```js
module.exports = {
  experimental: {
    swcPlugins: [
      ['@duro/swc-plugin', { enabled: true }]
    ]
  }
}
```

### With Babel

In your `.babelrc` or `babel.config.js`:

```json
{
  "plugins": [
    ["@duro/swc-plugin", { "enabled": true }]
  ]
}
```

### With Vite

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ['@duro/swc-plugin', { enabled: true }]
        ]
      }
    })
  ]
})
```

## Options

```typescript
interface DuroPluginOptions {
  /** Enable/disable the plugin (default: true) */
  enabled?: boolean
  /** Prop name to transform (default: 'sx') */
  propName?: string
}
```

## Supported Transformations

### Colors
- `color`, `bg`, `backgroundColor` → `var(--duro-color-*)`

### Spacing
- `m`, `margin`, `mt`, `mr`, `mb`, `ml`, `mx`, `my` → `var(--duro-space-*)`
- `p`, `padding`, `pt`, `pr`, `pb`, `pl`, `px`, `py` → `var(--duro-space-*)`
- `gap`, `rowGap`, `columnGap` → `var(--duro-space-*)`

### Typography
- `fontSize` → `var(--duro-font-size-*)`
- `fontFamily` → `var(--duro-font-*)`
- `lineHeight` → `var(--duro-line-height-*)`

### Borders & Radius
- `border*` → `var(--duro-border-*)`
- `borderRadius` → `var(--duro-radius-*)`
- `borderColor` → `var(--duro-color-*)`

### Shadows
- `boxShadow`, `textShadow` → `var(--duro-shadow-*)`

### Passthrough Properties

These properties pass through without transformation:
- Layout: `display`, `position`, `overflow`, etc.
- Flexbox: `flex*`, `alignItems`, `justifyContent`, etc.
- Grid: `grid*`
- Other: `transform`, `transition`, `animation`, etc.

## Examples

### Simple Example

```tsx
<Button sx={{
  bg: 'primary',
  color: 'white',
  p: 3,
  borderRadius: 'md'
}}>
  Click Me
</Button>
```

Compiles to:

```tsx
<Button style={{
  background: 'var(--duro-color-primary)',
  color: 'white',
  padding: 'var(--duro-space-3)',
  borderRadius: 'var(--duro-radius-md)'
}}>
  Click Me
</Button>
```

### Complex Example

```tsx
<Card sx={{
  bg: 'background',
  p: 4,
  borderRadius: 'lg',
  boxShadow: 'xl',
  display: 'flex',
  flexDirection: 'column',
  gap: 3,
  '&:hover': {
    boxShadow: '2xl'
  }
}}>
  <Heading sx={{ fontSize: '2xl', mb: 2 }}>Title</Heading>
  <Text sx={{ color: 'muted', lineHeight: 'relaxed' }}>
    Description text
  </Text>
</Card>
```

## How It Works

1. The plugin runs during your build process (via Babel or SWC)
2. It finds all JSX elements with an `sx` prop
3. It transforms theme keys (like `'primary'`) to CSS variables (like `'var(--duro-color-primary)'`)
4. It replaces the `sx` prop with a `style` prop
5. Your bundle contains only the transformed code - no runtime overhead!

## Benefits

✅ **Zero Runtime**: Transformation happens at build time
✅ **SSR Safe**: No hydration mismatches
✅ **Type Safe**: Full TypeScript support
✅ **Framework Agnostic**: Works with Next.js, CRA, Vite, etc.
✅ **Familiar DX**: Similar to theme-ui, styled-system, etc.
✅ **Performant**: CSS variables are fast

## Limitations

- Pseudo-selectors (`:hover`, `:focus`) are not yet supported (coming soon!)
- Media queries in `sx` prop are not yet supported (use container queries instead!)
- Dynamic/computed values work but won't get theme variable transformation

## Roadmap

- [ ] Pseudo-selector support
- [ ] Media query support
- [ ] Responsive array syntax (`fontSize: ['sm', 'md', 'lg']`)
- [ ] CSS Houdini integration for advanced animations
- [ ] Rust-based SWC plugin for even faster builds

## License

MIT
