import type { Meta, StoryObj } from "@storybook/react";

import { Header } from ".";

const meta = {
  title: "components/Headers",
  component: Header,
  tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {};
