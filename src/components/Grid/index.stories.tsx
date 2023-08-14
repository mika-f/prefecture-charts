import type { Meta, StoryObj } from "@storybook/react";

import { Grid } from ".";

const meta = {
  title: "components/Grid",
  component: Grid,
  tags: ["autodocs"],
} satisfies Meta<typeof Grid>;

export default meta;

type Story = StoryObj<typeof Grid>;

const getItems = (count: number) => {
  const items = [];

  for (let i = 0; i < count; i++) {
    items.push(<div key={i}>Item {i}</div>);
  }

  return items;
};

export const Default: Story = {};

export const FewItems: Story = {
  args: {
    children: getItems(3),
  },
};

export const ManyItems: Story = {
  args: {
    children: getItems(50),
  },
};
