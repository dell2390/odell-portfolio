const path = require("path")

module.exports = {
  stories: [
    // "../components/**/*.stories.mdx",
    // "../components/**/*.stories.@(js|jsx|ts|tsx)",
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-storyshots",
  ],

  // REF: https://github.com/storybookjs/storybook/issues/11639
  // REF: https://github.com/storybookjs/storybook/issues/11989
  webpackFinal: async (config) => {
    // config.resolve.modules = [path.resolve(__dirname, ".."), "node_modules"]
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      // path.resolve("./"),
      path.resolve(__dirname, ".."),
      // path.resolve(__dirname, "../components"),
    ]
    return config
  },
}
