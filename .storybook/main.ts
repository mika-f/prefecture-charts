import type { StorybookConfig } from "@storybook/nextjs";
import type { AddonOptionsBabel } from "@storybook/addon-coverage";

const coverage: AddonOptionsBabel = {
  istanbul: {
    include: ["**/src/**/*.stories.{js,jsx,ts,tsx}"],
  },
};

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    {
      name: "@storybook/addon-coverage",
      options: {
        istanbul: {
          coverage,
        },
      },
    },
    {
      name: "@storybook/addon-postcss",
      options: {
        postCss: true,
      },
    },
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
    defaultName: "Documentation",
  },
};
export default config;
