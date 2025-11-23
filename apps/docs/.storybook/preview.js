import React from 'react'
import '@caryyon/duro/styles'
import duroTheme from './duro-theme'

// Inject global styles for Storybook HUD aesthetic
if (typeof document !== 'undefined') {
  // Load JetBrains Mono from Google Fonts
  const fontLink = document.createElement('link')
  fontLink.href = 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap'
  fontLink.rel = 'stylesheet'
  document.head.appendChild(fontLink)

  const style = document.createElement('style')
  style.textContent = `
    /* Global HUD styling */
    body {
      font-family: "JetBrains Mono", "SF Mono", "Fira Code", monospace !important;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background: #000000 !important;
      color: #E0E0E0 !important;
    }

    * {
      font-family: inherit;
    }

    /* Storybook docs page */
    #storybook-docs {
      font-family: "JetBrains Mono", "SF Mono", "Fira Code", monospace !important;
      background: #0A0A0A !important;
      color: #E0E0E0 !important;
    }

    /* Storybook preview iframe */
    .sb-show-main {
      background: #0A0A0A !important;
    }

    /* Code blocks */
    .docblock-source {
      background: #000000 !important;
      border: 1px solid #333333 !important;
      border-radius: 0 !important;
    }

    /* Args table */
    .docblock-argstable {
      border-radius: 0 !important;
    }

    .docblock-argstable thead {
      background: #1A1A1A !important;
    }

    .docblock-argstable tbody tr {
      background: #0A0A0A !important;
      border-bottom: 1px solid #333333 !important;
    }

    /* Canvas/story container */
    .docs-story {
      background: #0A0A0A !important;
      border: 1px solid #333333 !important;
      border-radius: 0 !important;
    }

    /* Markdown headings */
    .sbdocs-h1, .sbdocs-h2, .sbdocs-h3, .sbdocs-h4 {
      color: #FFFFFF !important;
      font-weight: 600 !important;
      letter-spacing: 0.05em !important;
      text-transform: uppercase !important;
    }

    /* Markdown paragraphs */
    .sbdocs-p {
      color: #AAAAAA !important;
    }

    /* Links */
    .sbdocs-a {
      color: #FFFFFF !important;
      text-decoration: underline !important;
    }

    .sbdocs-a:hover {
      color: #888888 !important;
    }

    /* Inline code */
    .sbdocs-code {
      background: #1A1A1A !important;
      border: 1px solid #333333 !important;
      border-radius: 0 !important;
      color: #FFFFFF !important;
      padding: 2px 6px !important;
    }

    /* Blockquotes */
    .sbdocs-blockquote {
      border-left: 2px solid #FFFFFF !important;
      background: #0A0A0A !important;
      color: #AAAAAA !important;
    }

    /* Preview container scanline effect */
    .docs-story::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: repeating-linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.1),
        rgba(0, 0, 0, 0.1) 1px,
        transparent 1px,
        transparent 2px
      );
      pointer-events: none;
      opacity: 0.3;
      z-index: 1000;
    }

    /* Sidebar enhancements */
    .sidebar-header {
      letter-spacing: 0.1em !important;
    }
  `
  document.head.appendChild(style)
}

// Global decorator to wrap all stories
export const decorators = [
  (Story) => {
    return React.createElement(
      'div',
      {
        style: {
          padding: '2rem',
          minHeight: '100vh',
          background: '#0A0A0A',
          fontFamily: '"JetBrains Mono", "SF Mono", "Fira Code", monospace'
        }
      },
      React.createElement(Story)
    )
  },
]

export const parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'terminal',
    values: [
      {
        name: 'terminal',
        value: '#0A0A0A',
      },
      {
        name: 'black',
        value: '#000000',
      },
      {
        name: 'white',
        value: '#FFFFFF',
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
        ['Theme', 'Typography', 'Colors'],
        'Components',
        'Layouts',
        'Showcase',
      ],
    },
  },
}
