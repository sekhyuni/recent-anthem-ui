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
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
};
