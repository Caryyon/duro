import { create } from '@storybook/theming'

export default create({
  base: 'light',
  brandTitle: 'Duro Design System',
  brandUrl: 'https://github.com/yourusername/duro',
  brandTarget: '_self',

  // Typography
  fontBase: '"Space Grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  fontCode: '"Space Mono", monospace',

  // Colors - matching Duro theme
  colorPrimary: '#EB5757',
  colorSecondary: '#a55eea',

  // UI
  appBg: '#FFFFFF',
  appContentBg: '#FFFFFF',
  appBorderColor: '#333333',
  appBorderRadius: 0,

  // Text colors
  textColor: '#333333',
  textInverseColor: '#FFFFFF',

  // Toolbar default and active colors
  barTextColor: '#333333',
  barSelectedColor: '#EB5757',
  barBg: '#F5F5F5',

  // Form colors
  inputBg: '#FFFFFF',
  inputBorder: '#333333',
  inputTextColor: '#333333',
  inputBorderRadius: 0,

  // Brand
  brandImage: undefined, // Logo is shown in story pages
})
