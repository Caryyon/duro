import React from 'react'
import { DuroProvider } from '@duro/core'
import '@duro/core/dist/duro.css'
import duroTheme from './duro-theme'

// Inject global styles for Storybook
if (typeof document !== 'undefined') {
  const style = document.createElement('style')
  style.textContent = `
    body {
      font-family: "Space Grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    * {
      font-family: inherit;
    }

    #storybook-docs {
      font-family: "Space Grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
    }
  `
  document.head.appendChild(style)
}

// Global decorator to wrap all stories with DuroProvider
export const decorators = [
  (Story) => {
    return React.createElement(
      DuroProvider,
      { colorMode: 'light' },
      React.createElement(
        'div',
        {
          style: {
            padding: '2rem',
            minHeight: '100vh',
            fontFamily: '"Space Grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
          }
        },
        React.createElement(Story)
      )
    )
  },
]

export const parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#ffffff',
      },
      {
        name: 'dark',
        value: '#000000',
      },
      {
        name: 'muted',
        value: '#F5F5F5',
      },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
  },
  docs: {
    theme: duroTheme,
  },
  options: {
    storySort: {
      order: [
        'Foundation',
        ['Logo', 'Theme', 'Typography', 'Colors'],
        'Components',
        'Layouts',
      ],
    },
  },
}
