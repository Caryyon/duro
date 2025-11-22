# Duro Design System

A durable, brutalist design system built for the modern web. Duro combines bold aesthetics with practical, accessible components that will last beyond framework trends.

## Philosophy

Duro is built on solid fundamentals:
- **Zero-runtime CSS** - CSS custom properties for theming, no JS overhead
- **SSR-ready** - Works seamlessly with Next.js, Remix, and other SSR frameworks
- **Brutalist aesthetics** - Sharp corners, hard shadows, bold borders
- **Web-first** - Semantic HTML and progressive enhancement
- **Durable** - Built to last as frameworks come and go

## Installation

```bash
# yarn
yarn add @duro/core

# npm
npm install @duro/core

# pnpm
pnpm add @duro/core
```

## Quick Start

### 1. Wrap your app with DuroProvider

```tsx
import { DuroProvider } from '@duro/core'
import '@duro/core/dist/duro.css'

function App() {
  return (
    <DuroProvider>
      {/* Your app */}
    </DuroProvider>
  )
}
```

### 2. Start using components

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent, Heading, Paragraph } from '@duro/core'

function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome to Duro</CardTitle>
      </CardHeader>
      <CardContent>
        <Heading level={3}>Brutalist Design</Heading>
        <Paragraph>
          A design system that embraces bold, unapologetic aesthetics
          with sharp corners and hard shadows.
        </Paragraph>
        <Button variant="primary">Get Started</Button>
      </CardContent>
    </Card>
  )
}
```

## Features

### Typography

Space Grotesk brings a modern, geometric feel while maintaining excellent readability.

```tsx
import { Heading, Text, Paragraph } from '@duro/core'

<Heading level={1} variant="display">
  Display Heading
</Heading>

<Text variant="code" as="code">
  const hello = "world"
</Text>

<Paragraph variant="lead">
  Lead paragraphs are larger and bolder, perfect for introductions.
</Paragraph>
```

### Components

#### Buttons

```tsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Delete</Button>
```

#### Cards

```tsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here</CardDescription>
  </CardHeader>
  <CardContent>
    Main content
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

#### Forms

```tsx
<Label htmlFor="email">Email</Label>
<Input
  id="email"
  type="email"
  placeholder="you@example.com"
/>

<Label htmlFor="message">Message</Label>
<Textarea
  id="message"
  placeholder="Your message..."
  rows={4}
/>

<Checkbox id="terms">
  I agree to the terms
</Checkbox>

<Switch id="notifications">
  Enable notifications
</Switch>
```

#### Feedback

```tsx
<Alert variant="info">
  <AlertTitle>Info</AlertTitle>
  <AlertDescription>This is an informational message</AlertDescription>
</Alert>

<Progress value={60} />

<Tooltip content="Helpful tip">
  <Button>Hover me</Button>
</Tooltip>

<Badge variant="success">New</Badge>
```

#### Interactive

```tsx
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>

<Accordion type="single" collapsible>
  <AccordionItem value="item1">
    <AccordionTrigger>Section 1</AccordionTrigger>
    <AccordionContent>Content for section 1</AccordionContent>
  </AccordionItem>
</Accordion>

<Dialog>
  <DialogTrigger>Open Dialog</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>Description</DialogDescription>
    </DialogHeader>
    Content goes here
  </DialogContent>
</Dialog>
```

### Layout Components

```tsx
import { Section, Dashboard, Stack, Grid, Sidebar } from '@duro/core'

// Responsive section with built-in container queries
<Section variant="centered" gap="large">
  <Heading>Section Content</Heading>
</Section>

// Dashboard layout with sidebar and main content
<Dashboard>
  <Sidebar>Navigation</Sidebar>
  <main>Main content</main>
</Dashboard>

// Vertical stack with consistent spacing
<Stack gap="4">
  <Card>Card 1</Card>
  <Card>Card 2</Card>
</Stack>

// Responsive grid
<Grid columns={3} gap="4">
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</Grid>
```

## Theming

Duro uses CSS custom properties for zero-runtime theming:

```tsx
<DuroProvider colorMode="light">
  <YourApp />
</DuroProvider>

// Or with custom theme
<DuroProvider theme={customTheme}>
  <YourApp />
</DuroProvider>
```

### Custom Theme

```ts
import { duroTheme } from '@duro/core'

const customTheme = {
  ...duroTheme,
  colors: {
    ...duroTheme.colors,
    primary: '#FF6B6B',
    secondary: '#4ECDC4',
  },
}
```

## Server-Side Rendering

Duro works seamlessly with SSR frameworks:

### Next.js (App Router)

```tsx
// app/layout.tsx
import { DuroProvider, getServerThemeCSS } from '@duro/core'
import '@duro/core/dist/duro.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{ __html: getServerThemeCSS() }} />
      </head>
      <body>
        <DuroProvider>{children}</DuroProvider>
      </body>
    </html>
  )
}
```

### Next.js (Pages Router)

```tsx
// pages/_app.tsx
import { DuroProvider } from '@duro/core'
import '@duro/core/dist/duro.css'

export default function App({ Component, pageProps }) {
  return (
    <DuroProvider>
      <Component {...pageProps} />
    </DuroProvider>
  )
}
```

## Accessibility

All Duro components are built with accessibility in mind:
- Semantic HTML elements
- ARIA attributes where appropriate
- Keyboard navigation support
- Screen reader friendly
- Sufficient color contrast

## Browser Support

Duro supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## TypeScript

Duro is built with TypeScript and includes full type definitions out of the box.

```tsx
import type { ButtonProps, CardProps, HeadingLevel } from '@duro/core'
```

## Documentation

Visit our [Storybook](http://localhost:6006) for live examples and interactive documentation.

## License

MIT

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting a PR.
