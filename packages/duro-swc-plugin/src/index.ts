/**
 * @duro/swc-plugin
 *
 * Babel plugin to transform Duro sx prop to inline styles with CSS variables.
 */

import type { PluginObj, PluginPass } from '@babel/core'
import * as t from '@babel/types'
import { transformSxAttribute, isSxProp } from './transform'
import type { TransformOptions } from './transform'

export { transformSxProp, transformSxAttribute } from './transform'
export type { TransformOptions } from './transform'

export interface DuroPluginOptions extends TransformOptions {
  /** Enable/disable the plugin */
  enabled?: boolean
}

/**
 * Babel plugin for transforming sx prop
 */
export default function duroSxPlugin(
  babel: typeof import('@babel/core')
): PluginObj<PluginPass & { opts: DuroPluginOptions }> {
  return {
    name: '@duro/swc-plugin',
    visitor: {
      JSXAttribute(path, state) {
        const { enabled = true, propName = 'sx' } = state.opts || {}

        if (!enabled) return

        const attr = path.node

        if (!isSxProp(attr, propName)) return

        // Transform the sx attribute
        const transformed = transformSxAttribute(attr, { propName })

        // Replace the sx attribute with style attribute(s)
        if (transformed.length > 0) {
          path.replaceWithMultiple(transformed)
        }
      },
    },
  }
}

// Export a factory function for better TypeScript support
export function createDuroPlugin(options: DuroPluginOptions = {}) {
  return [duroSxPlugin, options]
}
