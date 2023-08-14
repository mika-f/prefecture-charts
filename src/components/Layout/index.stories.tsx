import type { Meta, StoryObj } from "@storybook/react";

import { Layout } from ".";

const meta = {
  title: "components/Layout",
  component: Layout,
  tags: ["autodocs"],
} satisfies Meta<typeof Layout>;

export default meta;

type Story = StoryObj<typeof Layout>;

export const Default: Story = {
  args: {
    children: "Hello, world!",
  },
};
