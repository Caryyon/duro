/**
 * Core Transform Logic
 *
 * Transforms sx prop objects into style objects with CSS variables.
 */

import * as t from '@babel/types'
import { sxThemeMapping, passthroughProperties, getThemeVar, isThemeKey } from './theme-mapping'

export interface TransformOptions {
  /** Prop name to transform (default: 'sx') */
  propName?: string
}

/**
 * Transform an sx prop value to a style object
 */
export function transformSxProp(
  sxValue: t.ObjectExpression,
  options: TransformOptions = {}
): t.ObjectExpression {
  const { propName = 'sx' } = options
  const styleProperties: t.ObjectProperty[] = []

  for (const prop of sxValue.properties) {
    if (!t.isObjectProperty(prop) || !t.isIdentifier(prop.key)) {
      // Skip spread properties or computed keys for now
      continue
    }

    const key = prop.key.name
    const value = prop.value

    // Check if this is a theme-mapped property
    const mapping = sxThemeMapping[key]

    if (mapping) {
      // Transform to CSS variable
      const cssProperty = mapping.property
      const transformedValue = transformValue(value, mapping.category)

      if (transformedValue) {
        styleProperties.push(
          t.objectProperty(
            t.identifier(cssProperty),
            transformedValue
          )
        )
      }
    } else if (passthroughProperties.has(key)) {
      // Pass through as-is
      styleProperties.push(
        t.objectProperty(
          t.identifier(key),
          value as t.Expression
        )
      )
    } else {
      // Unknown property, pass through
      styleProperties.push(prop as t.ObjectProperty)
    }
  }

  return t.objectExpression(styleProperties)
}

/**
 * Transform a value to use CSS variables
 */
function transformValue(value: t.Node, category: string): t.Expression | null {
  // Handle string literals (theme keys)
  if (t.isStringLiteral(value)) {
    const strValue = value.value

    if (isThemeKey(strValue)) {
      // Convert theme key to CSS variable
      return t.stringLiteral(getThemeVar(category, strValue))
    }

    // Pass through other strings (like "100%", "auto", etc.)
    return value
  }

  // Handle numeric literals
  if (t.isNumericLiteral(value)) {
    // For spacing values, convert numbers to theme variables
    if (category === 'space') {
      return t.stringLiteral(getThemeVar('space', String(value.value)))
    }
    // For other numeric values, keep as-is
    return value
  }

  // Handle template literals, expressions, etc. - pass through
  if (t.isExpression(value)) {
    return value
  }

  return null
}

/**
 * Check if a JSX attribute is an sx prop
 */
export function isSxProp(attr: t.JSXAttribute, propName = 'sx'): boolean {
  return t.isJSXIdentifier(attr.name) && attr.name.name === propName
}

/**
 * Transform sx prop in JSX attribute
 */
export function transformSxAttribute(
  attr: t.JSXAttribute,
  options: TransformOptions = {}
): t.JSXAttribute[] {
  const { propName = 'sx' } = options

  if (!isSxProp(attr, propName)) {
    return [attr]
  }

  const value = attr.value

  // Only transform object expressions
  if (!t.isJSXExpressionContainer(value) || !t.isObjectExpression(value.expression)) {
    return [attr]
  }

  // Transform the sx object to style object
  const styleObject = transformSxProp(value.expression, options)

  // Return transformed as 'style' prop
  return [
    t.jsxAttribute(
      t.jsxIdentifier('style'),
      t.jsxExpressionContainer(styleObject)
    ),
  ]
}
