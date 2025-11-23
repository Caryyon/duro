/**
 * Duro Theme System - Type Definitions and Default Theme
 *
 * This is the new durable theme architecture built on CSS custom properties.
 * It compiles to CSS variables at build time for SSR compatibility and zero runtime cost.
 */

export interface DuroTheme {
  colors: ColorScale
  space: SpaceScale
  fonts: FontScale
  fontSizes: FontSizeScale
  lineHeights: LineHeightScale
  borders: BorderScale
  radii: RadiiScale
  shadows: ShadowScale
  breakpoints: BreakpointScale
  sections: SectionRegistry
}

export interface ColorScale {
  // Base colors
  text: string
  background: string
  primary: string
  secondary: string
  accent?: string
  muted?: string

  // Semantic colors
  success?: string
  warning?: string
  error?: string
  info?: string

  // Color modes
  modes?: {
    [key: string]: Partial<Omit<ColorScale, 'modes'>>
  }
}

export interface SpaceScale {
  0: string
  1: string
  2: string
  3: string
  4: string
  5: string
  6: string
  7: string
  8: string
  [key: string]: string
}

export interface FontScale {
  body: string
  heading: string
  monospace: string
  [key: string]: string
}

export interface FontSizeScale {
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
  '2xl': string
  '3xl': string
  [key: string]: string
}

export interface LineHeightScale {
  tight: string
  normal: string
  relaxed: string
  [key: string]: string
}

export interface BorderScale {
  none: string
  thin: string
  medium: string
  thick: string
  [key: string]: string
}

export interface RadiiScale {
  none: string
  sm: string
  md: string
  lg: string
  full: string
  [key: string]: string
}

export interface ShadowScale {
  sm: string
  md: string
  lg: string
  xl: string
  none: string
  [key: string]: string
}

export interface BreakpointScale {
  sm: string
  md: string
  lg: string
  xl: string
  '2xl'?: string
  [key: string]: string | undefined
}

export interface SectionLayout {
  display?: string
  gridTemplateColumns?: string
  gridTemplateRows?: string
  gridTemplateAreas?: string
  flexDirection?: string
  flexWrap?: string
  gap?: string
  alignItems?: string
  justifyContent?: string
  padding?: string
  margin?: string
  textAlign?: string
  [key: string]: string | undefined
}

export interface SectionVariant {
  name: string
  layout: SectionLayout
  containerQuery?: {
    [breakpoint: string]: SectionLayout
  }
}

export interface SectionDefinition {
  baseLayout: SectionLayout
  variants: {
    [variantName: string]: SectionVariant | SectionLayout
  }
}

export interface SectionRegistry {
  [sectionName: string]: SectionDefinition
}

// Default Duro theme - HUD Tech Interface
export const duroTheme: DuroTheme = {
  colors: {
    // Strictly monochromatic palette
    text: '#FFFFFF',
    background: '#000000',
    primary: '#FFFFFF',
    secondary: '#808080',
    accent: '#404040',
    muted: '#1a1a1a',
    // Semantic colors - grayscale only
    success: '#FFFFFF',
    warning: '#808080',
    error: '#FFFFFF',
    info: '#808080',
    modes: {
      light: {
        text: '#000000',
        background: '#FFFFFF',
        primary: '#000000',
        secondary: '#808080',
        muted: '#F0F0F0',
      },
    },
  },

  space: {
    0: '0',
    1: '0.25rem',  // 4px
    2: '0.5rem',   // 8px
    3: '0.75rem',  // 12px
    4: '1rem',     // 16px
    5: '1.5rem',   // 24px
    6: '2rem',     // 32px
    7: '3rem',     // 48px
    8: '4rem',     // 64px
  },

  fonts: {
    // Monospace throughout for tech aesthetic
    body: '"JetBrains Mono", "Fira Code", "SF Mono", Menlo, Monaco, "Courier New", monospace',
    heading: '"JetBrains Mono", "Fira Code", "SF Mono", Menlo, Monaco, "Courier New", monospace',
    monospace: '"JetBrains Mono", "Fira Code", "SF Mono", Menlo, Monaco, "Courier New", monospace',
  },

  fontSizes: {
    xs: '0.6875rem',  // 11px
    sm: '0.75rem',    // 12px
    md: '0.875rem',   // 14px
    lg: '1rem',       // 16px
    xl: '1.125rem',   // 18px
    '2xl': '1.25rem', // 20px
    '3xl': '1.5rem',  // 24px
  },

  lineHeights: {
    tight: '1.2',
    normal: '1.5',
    relaxed: '1.75',
  },

  borders: {
    none: 'none',
    thin: '1px solid',
    medium: '1px solid',  // Keep thin for HUD aesthetic
    thick: '2px solid',
  },

  radii: {
    // Sharp corners only - no border radius
    none: '0',
    sm: '0',
    md: '0',
    lg: '0',
    full: '0',
  },

  shadows: {
    // No shadows - flat design only
    none: 'none',
    sm: 'none',
    md: 'none',
    lg: 'none',
    xl: 'none',
    // Optional glow effects for emphasis
    glow: '0 0 10px rgba(255, 255, 255, 0.3)',
    glowStrong: '0 0 20px rgba(255, 255, 255, 0.5)',
  },

  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  sections: {
    // Will be populated with section definitions
  },
}
