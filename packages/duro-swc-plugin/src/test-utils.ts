/**
 * Test utilities for the transformer
 */

import { transformSync } from '@babel/core'
import duroSxPlugin from './index'

/**
 * Transform code using the plugin
 */
export function transformCode(code: string): string {
  const result = transformSync(code, {
    plugins: [
      '@babel/plugin-syntax-jsx',
      [duroSxPlugin, { enabled: true }],
    ],
    configFile: false,
    babelrc: false,
  })

  if (!result || !result.code) {
    throw new Error('Transform failed')
  }

  return result.code
}
