const path = require('path')

module.exports = {
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config, { configType }) {
    return {
      ...config,
      // Set base path for GitHub Pages deployment
      base: configType === 'PRODUCTION' ? '/duro/' : '/',
      resolve: {
        alias: [
          // CSS styles alias
          {
            find: '@caryyon/duro/styles',
            replacement: path.resolve(
              __dirname,
              '../../../packages/duro-core/dist/duro.css'
            ),
          },
          // Main package alias
          {
            find: '@caryyon/duro',
            replacement: path.resolve(
              __dirname,
              '../../../packages/duro-core/'
            ),
          },
          // Legacy alias for old imports
          {
            find: '@duro/core/dist/duro.css',
            replacement: path.resolve(
              __dirname,
              '../../../packages/duro-core/dist/duro.css'
            ),
          },
          {
            find: '@duro/core',
            replacement: path.resolve(
              __dirname,
              '../../../packages/duro-core/'
            ),
          },
        ],
      },
    }
  },
}
