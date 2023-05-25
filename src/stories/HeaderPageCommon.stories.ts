import { Meta, StoryObj } from "@storybook/react";
import { HeaderPageCommon } from "../common/HeaderPageCommon";

const meta = {
  title: "Example/Header",
  component: HeaderPageCommon,
} satisfies Meta<typeof HeaderPageCommon>;
export default meta;
type Story = StoryObj<typeof meta>;

export const headerPage: Story = {
  args: {
    title: "Header Page",
  },
};
