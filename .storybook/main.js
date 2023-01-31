const path = require('path');
const PROJECT_ROOT = process.cwd();
const pathAlias = require('../tsconfig.json').compilerOptions.paths;

module.exports = {
  stories: [
    '../src/components/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../src/layouts/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../src/pages/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  staticDir: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      ...Object.fromEntries(
        Object.entries(pathAlias).map(([key, valArr]) => [
          key.replace('/*', ''),
          valArr.map((val) =>
            path.resolve(
              PROJECT_ROOT,
              ...val.replace('/*', '').replace('./', '').split('/')
            )
          ),
        ])
      ),
    };
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [require.resolve('@emotion/babel-preset-css-prop')],
      },
    });
    return config;
  },
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
};
