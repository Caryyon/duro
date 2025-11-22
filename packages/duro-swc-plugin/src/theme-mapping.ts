/**
 * Theme Key to CSS Variable Mapping
 *
 * Maps sx prop shorthand keys to CSS properties and theme variables.
 */

export interface ThemeMapping {
  /** CSS property name */
  property: string
  /** Theme category for the CSS variable */
  category: string
  /** Transform function for the value */
  transform?: (value: any) => string
}

/**
 * Complete mapping of sx prop keys to CSS properties and theme variables
 */
export const sxThemeMapping: Record<string, ThemeMapping> = {
  // Colors
  color: { property: 'color', category: 'color' },
  bg: { property: 'background', category: 'color' },
  backgroundColor: { property: 'backgroundColor', category: 'color' },

  // Spacing - Margin
  m: { property: 'margin', category: 'space' },
  margin: { property: 'margin', category: 'space' },
  mt: { property: 'marginTop', category: 'space' },
  marginTop: { property: 'marginTop', category: 'space' },
  mr: { property: 'marginRight', category: 'space' },
  marginRight: { property: 'marginRight', category: 'space' },
  mb: { property: 'marginBottom', category: 'space' },
  marginBottom: { property: 'marginBottom', category: 'space' },
  ml: { property: 'marginLeft', category: 'space' },
  marginLeft: { property: 'marginLeft', category: 'space' },
  mx: { property: 'marginInline', category: 'space' },
  marginX: { property: 'marginInline', category: 'space' },
  my: { property: 'marginBlock', category: 'space' },
  marginY: { property: 'marginBlock', category: 'space' },

  // Spacing - Padding
  p: { property: 'padding', category: 'space' },
  padding: { property: 'padding', category: 'space' },
  pt: { property: 'paddingTop', category: 'space' },
  paddingTop: { property: 'paddingTop', category: 'space' },
  pr: { property: 'paddingRight', category: 'space' },
  paddingRight: { property: 'paddingRight', category: 'space' },
  pb: { property: 'paddingBottom', category: 'space' },
  paddingBottom: { property: 'paddingBottom', category: 'space' },
  pl: { property: 'paddingLeft', category: 'space' },
  paddingLeft: { property: 'paddingLeft', category: 'space' },
  px: { property: 'paddingInline', category: 'space' },
  paddingX: { property: 'paddingInline', category: 'space' },
  py: { property: 'paddingBlock', category: 'space' },
  paddingY: { property: 'paddingBlock', category: 'space' },

  // Layout
  width: { property: 'width', category: 'space' },
  w: { property: 'width', category: 'space' },
  height: { property: 'height', category: 'space' },
  h: { property: 'height', category: 'space' },
  minWidth: { property: 'minWidth', category: 'space' },
  maxWidth: { property: 'maxWidth', category: 'space' },
  minHeight: { property: 'minHeight', category: 'space' },
  maxHeight: { property: 'maxHeight', category: 'space' },

  // Typography
  fontSize: { property: 'fontSize', category: 'font-size' },
  fontFamily: { property: 'fontFamily', category: 'font' },
  fontWeight: { property: 'fontWeight', category: 'font-weight' },
  lineHeight: { property: 'lineHeight', category: 'line-height' },

  // Border
  border: { property: 'border', category: 'border' },
  borderTop: { property: 'borderTop', category: 'border' },
  borderRight: { property: 'borderRight', category: 'border' },
  borderBottom: { property: 'borderBottom', category: 'border' },
  borderLeft: { property: 'borderLeft', category: 'border' },
  borderWidth: { property: 'borderWidth', category: 'border' },
  borderStyle: { property: 'borderStyle', category: 'border' },
  borderColor: { property: 'borderColor', category: 'color' },

  // Border Radius
  borderRadius: { property: 'borderRadius', category: 'radius' },
  borderTopLeftRadius: { property: 'borderTopLeftRadius', category: 'radius' },
  borderTopRightRadius: { property: 'borderTopRightRadius', category: 'radius' },
  borderBottomLeftRadius: { property: 'borderBottomLeftRadius', category: 'radius' },
  borderBottomRightRadius: { property: 'borderBottomRightRadius', category: 'radius' },

  // Shadow
  boxShadow: { property: 'boxShadow', category: 'shadow' },
  textShadow: { property: 'textShadow', category: 'shadow' },

  // Flexbox
  gap: { property: 'gap', category: 'space' },
  rowGap: { property: 'rowGap', category: 'space' },
  columnGap: { property: 'columnGap', category: 'space' },
}

/**
 * CSS properties that should pass through without transformation
 */
export const passthroughProperties = new Set([
  'display',
  'position',
  'top',
  'right',
  'bottom',
  'left',
  'flex',
  'flexDirection',
  'flexWrap',
  'flexGrow',
  'flexShrink',
  'flexBasis',
  'alignItems',
  'alignContent',
  'alignSelf',
  'justifyContent',
  'justifyItems',
  'justifySelf',
  'gridTemplateColumns',
  'gridTemplateRows',
  'gridTemplateAreas',
  'gridColumn',
  'gridRow',
  'gridArea',
  'zIndex',
  'overflow',
  'overflowX',
  'overflowY',
  'cursor',
  'pointerEvents',
  'textAlign',
  'textTransform',
  'textDecoration',
  'opacity',
  'transform',
  'transition',
  'animation',
])

/**
 * Convert kebab-case to camelCase
 */
export function kebabToCamel(str: string): string {
  return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())
}

/**
 * Convert camelCase to kebab-case
 */
export function camelToKebab(str: string): string {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase()
}

/**
 * Get CSS variable name for a theme value
 */
export function getThemeVar(category: string, value: string): string {
  const kebabValue = camelToKebab(value)
  return `var(--duro-${category}-${kebabValue})`
}

/**
 * Check if a value is a theme key (string without spaces or special chars)
 */
export function isThemeKey(value: any): boolean {
  return typeof value === 'string' && /^[a-zA-Z0-9-]+$/.test(value)
}
