// const path = require('path');
const { mergeConfig } = require('vite');
const tsconfigPaths = require('vite-tsconfig-paths').default;
const react = require('@vitejs/plugin-react');

module.exports = {
  stories: [
    '../src/components/**/*.stories.mdx',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  async viteFinal(config) {
    config.plugins = config.plugins.filter(
      (plugin) =>
        !(Array.isArray(plugin) && plugin[0]?.name.includes('vite:react'))
    );

    return mergeConfig(config, {
      plugins: [
        react({
          jsxImportSource: '@emotion/react',
        }),
        tsconfigPaths(),
      ],
    });
  },
  // webpackFinal(config) {
  //   config.resolve.modules = [
  //     ...(config.resolve.modules || []),
  //     path.resolve(__dirname, '../src/components'),
  //   ];
  // },
  framework: '@storybook/react',
  babel: async (options) => ({
    ...options,
    presets: [...options.presets, '@emotion/babel-preset-css-prop'],
  }),
  core: { builder: '@storybook/builder-vite' },
};
