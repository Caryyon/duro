import { create } from '@storybook/theming'

export default create({
  base: 'dark',
  brandTitle: 'DURO',
  brandUrl: 'https://github.com/caryyon/duro',
  brandTarget: '_self',

  // Typography - JetBrains Mono for cyberpunk terminal feel
  fontBase: '"JetBrains Mono", "SF Mono", "Fira Code", monospace',
  fontCode: '"JetBrains Mono", "SF Mono", "Fira Code", monospace',

  // Monochromatic colors - black/white/gray only
  colorPrimary: '#FFFFFF',
  colorSecondary: '#888888',

  // UI - dark background, sharp edges
  appBg: '#000000',
  appContentBg: '#0A0A0A',
  appBorderColor: '#333333',
  appBorderRadius: 0,

  // Text colors
  textColor: '#E0E0E0',
  textInverseColor: '#000000',
  textMutedColor: '#666666',

  // Toolbar
  barTextColor: '#AAAAAA',
  barSelectedColor: '#FFFFFF',
  barBg: '#0A0A0A',

  // Form colors
  inputBg: '#0A0A0A',
  inputBorder: '#333333',
  inputTextColor: '#E0E0E0',
  inputBorderRadius: 0,
})
