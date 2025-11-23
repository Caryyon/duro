/**
 * Build-time CSS Generator
 *
 * This script generates the complete Duro CSS file from the theme object.
 * Run this during the build process to create duro.css
 */

import { duroTheme } from './theme'
import { commonSections } from './sections'
import { generateThemeCSS, generateSectionCSS, generateContainerQueryCSS } from './css-generator'
import type { SectionLayout } from './theme'
import { readFileSync } from 'fs'
import { join } from 'path'

/**
 * Generates the complete Duro CSS including theme variables and section styles
 */
export function buildCompleteCSS(): string {
  const sections: string[] = []

  // Add Google Fonts import - JetBrains Mono for HUD tech aesthetic
  sections.push(`/* Google Fonts - JetBrains Mono */
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;200;300;400;500;600;700&display=swap');
`)

  // Add common sections to theme
  const themeWithSections = {
    ...duroTheme,
    sections: commonSections,
  }

  // Generate base theme CSS
  const themeCSS = generateThemeCSS(themeWithSections)
  sections.push(themeCSS)

  // Generate section CSS
  sections.push('\n/* Section Layouts */')

  Object.entries(commonSections).forEach(([sectionName, sectionDef]) => {
    // Base layout
    const baseCSS = generateSectionCSS(sectionName, sectionDef.baseLayout)
    if (baseCSS) sections.push(baseCSS)

    // Variants
    Object.entries(sectionDef.variants).forEach(([variantName, variant]) => {
      // Check if it's a SectionVariant or just a SectionLayout
      const layout: SectionLayout = 'layout' in variant ? variant.layout : variant

      const variantCSS = generateSectionCSS(sectionName, layout, variantName)
      if (variantCSS) sections.push(variantCSS)

      // Container queries if present
      if ('containerQuery' in variant && variant.containerQuery) {
        Object.entries(variant.containerQuery).forEach(([breakpoint, queryLayout]) => {
          const queryCSS = generateContainerQueryCSS(
            sectionName,
            breakpoint,
            queryLayout,
            variantName
          )
          if (queryCSS) sections.push(queryCSS)
        })
      }
    })
  })

  // Add utility classes
  sections.push(`
/* Utility Classes */
.duro-container {
  container-type: inline-size;
}

.duro-visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

/* Base Styles */
.duro-box {
  box-sizing: border-box;
}

.duro-flex {
  display: flex;
}

.duro-grid {
  display: grid;
}
`)

  // Add component styles
  sections.push('\n/* Component Styles */')

  // List of component CSS files to include
  const componentCSS = [
    'Section/section.css',
    'Box/box.css',
    'Button/button.css',
    'ButtonGroup/button-group.css',
    'Card/card.css',
    'Label/label.css',
    'Input/input.css',
    'Textarea/textarea.css',
    'Checkbox/checkbox.css',
    'Switch/switch.css',
    'Badge/badge.css',
    'Separator/separator.css',
    'Avatar/avatar.css',
    'Skeleton/skeleton.css',
    'Alert/alert.css',
    'Progress/progress.css',
    'Tooltip/tooltip.css',
    'Tabs/tabs.css',
    'Accordion/accordion.css',
    'Dialog/dialog.css',
    'Text/text.css',
    'Heading/heading.css',
    'Paragraph/paragraph.css',
    'shared/hud-utilities.css',
    // HUD Components
    'HudPanel/hud-panel.css',
    'StatBlock/stat-block.css',
    'DataRow/data-row.css',
    'TerminalLine/terminal-line.css',
    'RadarDisplay/radar-display.css',
    'Crosshair/crosshair.css',
    'WaveformDisplay/waveform-display.css',
    'BarChart/bar-chart.css',
    'DataGraph/data-graph.css',
    'GaugeMeter/gauge-meter.css',
    'PulseMeter/pulse-meter.css',
    'StatusIndicator/status-indicator.css',
    'SignalStrength/signal-strength.css',
    'BinaryDisplay/binary-display.css',
    'HexDisplay/hex-display.css',
    'DecorativeLine/decorative-line.css',
    'GridPattern/grid-pattern.css',
    'CircuitNode/circuit-node.css',
    'NodeNetwork/node-network.css',
  ]

  // Load each component CSS file
  componentCSS.forEach((cssPath) => {
    try {
      const css = readFileSync(join(__dirname, '..', cssPath), 'utf-8')
      sections.push(css)
    } catch (error) {
      console.warn(`Could not load ${cssPath}:`, error)
    }
  })

  return sections.join('\n\n')
}

// Export for use in build scripts
export default buildCompleteCSS
