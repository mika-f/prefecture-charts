import type { Meta, StoryObj } from "@storybook/react";

import { Section } from ".";

const meta = {
  title: "components/Section",
  component: Section,
  tags: ["autodocs"],
} satisfies Meta<typeof Section>;

export default meta;

type Story = StoryObj<typeof Section>;

export const Default: Story = {
  args: {
    children: "Hello, world!",
  },
};

export const Sections = () => (
  <div>
    <div>↓ Sections</div>
    <Section style={{ backgroundColor: "#ccc" }}>Section 1</Section>
    <Section style={{ backgroundColor: "#bbb" }}>Section 2</Section>
    <Section style={{ backgroundColor: "#aaa" }}>Section 3</Section>
    <div>↑ Sections</div>
  </div>
);
