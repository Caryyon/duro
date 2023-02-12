# Duro Design System

### The Goal

The aim of Duro is to offer a component-container responsive UI library that is theme-able and easy to use.
This means that no matter the creative way you combine Duro components within your own wonderful projects, they
will respect each other and respond to one another so there is never a "broken" user experience.

### The Implementation

At Duro's core it relies on CSS's `@container` query to facilitate per-component responsiveness. This alone
doesn't cover all the use cases required for the responsiveness we aim to offer, so we are also using `theme-ui`
as our style orchestrator. `theme-ui` gives Duro the power of javascript to watch and change the styling of each
component, yet still lets us write in an understandable CSS-like syntax.

### How to Install

Duro is bundled for both `mjs` as well as `cjs` as to respect the history of long running projects. To get started
simply install Duro with your selected flavor of command below:

```
npm install duro
```

```
yarn add duro
```

```
pnpm add duro
```

### Contributing
