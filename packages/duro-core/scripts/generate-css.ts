/**
 * CSS Generation Script
 *
 * Generates duro.css from the theme object.
 * Run with: tsx scripts/generate-css.ts
 */

import { writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { buildCompleteCSS } from '../src/theme/build-css'

const cssContent = buildCompleteCSS()

// Create dist directory if it doesn't exist
const outputPath = join(process.cwd(), 'dist', 'duro.css')
mkdirSync(dirname(outputPath), { recursive: true })

// Write CSS file
writeFileSync(outputPath, cssContent, 'utf-8')

console.log('✅ Generated duro.css')
console.log(`📁 Output: ${outputPath}`)
console.log(`📊 Size: ${(cssContent.length / 1024).toFixed(2)} KB`)
