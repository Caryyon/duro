/**
 * CSS Variable Generator
 *
 * Converts a Duro theme object into CSS custom properties.
 * This runs at build time to generate SSR-safe CSS.
 */

import type { DuroTheme, ColorScale, SectionLayout } from './theme'

/**
 * Generates CSS custom properties from a theme object
 */
export function generateCSSVariables(theme: DuroTheme, mode: 'light' | 'dark' = 'light'): string {
  const cssVars: string[] = []

  // Generate color variables
  const colors = mode === 'dark' && theme.colors.modes?.dark
    ? { ...theme.colors, ...theme.colors.modes.dark }
    : theme.colors

  Object.entries(colors).forEach(([key, value]) => {
    if (key !== 'modes' && typeof value === 'string') {
      cssVars.push(`  --duro-color-${kebabCase(key)}: ${value};`)
    }
  })

  // Generate space variables
  Object.entries(theme.space).forEach(([key, value]) => {
    cssVars.push(`  --duro-space-${key}: ${value};`)
  })

  // Generate font variables
  Object.entries(theme.fonts).forEach(([key, value]) => {
    cssVars.push(`  --duro-font-${kebabCase(key)}: ${value};`)
  })

  // Generate font size variables
  Object.entries(theme.fontSizes).forEach(([key, value]) => {
    cssVars.push(`  --duro-font-size-${kebabCase(key)}: ${value};`)
  })

  // Generate line height variables
  Object.entries(theme.lineHeights).forEach(([key, value]) => {
    cssVars.push(`  --duro-line-height-${kebabCase(key)}: ${value};`)
  })

  // Generate border variables
  Object.entries(theme.borders).forEach(([key, value]) => {
    cssVars.push(`  --duro-border-${kebabCase(key)}: ${value};`)
  })

  // Generate radii variables
  Object.entries(theme.radii).forEach(([key, value]) => {
    cssVars.push(`  --duro-radius-${kebabCase(key)}: ${value};`)
  })

  // Generate shadow variables
  Object.entries(theme.shadows).forEach(([key, value]) => {
    cssVars.push(`  --duro-shadow-${kebabCase(key)}: ${value};`)
  })

  return cssVars.join('\n')
}

/**
 * Generates a complete CSS string with root variables and theme classes
 */
export function generateThemeCSS(theme: DuroTheme): string {
  const lightVars = generateCSSVariables(theme, 'light')
  const darkVars = theme.colors.modes?.dark
    ? generateCSSVariables(theme, 'dark')
    : ''

  return `
/* Duro CSS Variables - Auto-generated from theme */
:root,
[data-theme="light"] {
${lightVars}
}

${darkVars ? `[data-theme="dark"] {
${darkVars}
}` : ''}

@media (prefers-color-scheme: dark) {
  :root:not([data-theme]) {
${darkVars || lightVars}
  }
}
`.trim()
}

/**
 * Generates CSS for section layouts
 */
export function generateSectionCSS(sectionName: string, layout: SectionLayout, variant?: string): string {
  const className = variant
    ? `.duro-section-${kebabCase(sectionName)}-${kebabCase(variant)}`
    : `.duro-section-${kebabCase(sectionName)}`

  const cssProps: string[] = []

  Object.entries(layout).forEach(([key, value]) => {
    if (value !== undefined) {
      cssProps.push(`  ${kebabCase(key)}: ${value};`)
    }
  })

  if (cssProps.length === 0) return ''

  return `
${className} {
${cssProps.join('\n')}
}`.trim()
}

/**
 * Generates container query CSS for sections
 */
export function generateContainerQueryCSS(
  sectionName: string,
  breakpoint: string,
  layout: SectionLayout,
  variant?: string
): string {
  const className = variant
    ? `.duro-section-${kebabCase(sectionName)}-${kebabCase(variant)}`
    : `.duro-section-${kebabCase(sectionName)}`

  const cssProps: string[] = []

  Object.entries(layout).forEach(([key, value]) => {
    if (value !== undefined) {
      cssProps.push(`    ${kebabCase(key)}: ${value};`)
    }
  })

  if (cssProps.length === 0) return ''

  return `
@container (min-width: ${breakpoint}) {
  ${className} {
${cssProps.join('\n')}
  }
}`.trim()
}

/**
 * Converts camelCase to kebab-case
 */
function kebabCase(str: string): string {
  return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()
}

/**
 * Utility to create a type-safe theme reference in components
 */
export function themeVar(category: string, key: string): string {
  return `var(--duro-${category}-${kebabCase(key)})`
}
