import type { Meta, StoryObj } from "@storybook/react";

import { Loading } from ".";

const meta = {
  title: "components/Loading",
  component: Loading,
  tags: ["autodocs"],
} satisfies Meta<typeof Loading>;

export default meta;

type Story = StoryObj<typeof Loading>;

export const Default: Story = {};
