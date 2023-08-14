import type { Meta } from "@storybook/react";

import { Heading1 as H1, Heading2 as H2 } from ".";

const meta = {
  title: "components/Headings",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

export const Dashboard = () => (
  <div>
    <H1>Heading1</H1>
    <H2>Heading2</H2>
  </div>
);

export const Heading1 = () => <H1>Heading1</H1>;
export const Heading2 = () => <H2>Heading2</H2>;
