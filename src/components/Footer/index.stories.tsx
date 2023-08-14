import type { Meta, StoryObj } from "@storybook/react";

import { Footer } from ".";

const meta = {
  title: "components/Footer",
  component: Footer,
  tags: ["autodocs"],
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {};
