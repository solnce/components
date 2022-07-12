const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  stories: [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  webpackFinal(config) {
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, '../components')
    ]
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin()
    ]
    return config;
  },
  framework: "@storybook/react",
  babel: async (options) => ({
    ...options,
    presets: [...options.presets, "@emotion/babel-preset-css-prop"],
  }),
};
