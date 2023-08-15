import { expect } from "@storybook/jest";
import { userEvent, within } from "@storybook/testing-library";

import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from ".";

const meta = {
  title: "components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    onChange: { action: "onChange" },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: "Default Checkbox",
  },
};

export const Checked: Story = {
  args: {
    label: "Checked Checkbox",
    checked: true,
  },
};

export const EventHandlers: Story = {
  args: {
    label: "Event Handlers Checkbox",
    checked: false,
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByLabelText("Event Handlers Checkbox");

    expect(checkbox).not.toBeChecked();

    await userEvent.click(checkbox);

    expect(args.onChange).toHaveBeenCalledWith(true);
    expect(checkbox).toBeChecked();

    await userEvent.click(checkbox);

    expect(args.onChange).toHaveBeenCalledWith(false);
    expect(checkbox).not.toBeChecked();
  },
};
