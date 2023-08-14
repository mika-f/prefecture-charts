import type { Meta, StoryObj } from "@storybook/react";

import { Container } from ".";

const meta = {
  title: "components/Container",
  component: Container,
  tags: ["autodocs"],
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    children: "Hello, world!",
  },
};
