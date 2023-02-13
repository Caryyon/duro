import { Theme } from 'theme-ui'
import { buttons } from './Button'

const colors = {
  text: '#333333',
  background: '#E5E5E5',
  primary: '#EB5757',
  modes: {
    dark: {
      text: '#E5E5E5',
      background: '#333333',
      primary: '#EB5757',
    },
  },
}

const borders = ['1px solid', '3px solid', '6px solid']

const breakpoints = [
  '40em',
  '@media (min-width: 56em) and (orientation: landscape)',
  '64em',
]

export const duroDefaultTheme: Theme = {
  config: {
    initialColorModeName: 'light',
  },
  borders,
  breakpoints,
  buttons,
  colors,
}
