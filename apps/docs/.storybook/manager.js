import { addons } from '@storybook/addons'
import duroTheme from './duro-theme'

addons.setConfig({
  theme: duroTheme,
  panelPosition: 'bottom',
  enableShortcuts: true,
  showNav: true,
  showPanel: true,
  sidebarAnimations: false,
})
