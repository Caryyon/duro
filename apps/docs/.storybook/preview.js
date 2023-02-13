import { ThemeProvider } from 'theme-ui'
import { addDecorator } from '@storybook/react'
import { withThemes } from '@react-theming/storybook-addon'

import { duroDefaultTheme } from '@duro/core'

// pass ThemeProvider and array of your themes to decorator
addDecorator(withThemes(ThemeProvider, [duroDefaultTheme]))
