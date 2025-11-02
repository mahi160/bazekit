import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `\nA simple, accessible action trigger. Use to initiate primary flows or submit forms. Provide clear verbs and ensure icon-only usage includes an aria-label.\n`,
      },
    },
  },
  argTypes: {
    children: {
      control: "text",
      description: "Button label",
      table: { type: { summary: "ReactNode" }, category: "Content" },
    },
    variant: {
      control: "select",
      options: ["default", "secondary", "alert", "outline", "ghost", "link"],
      description: "Visual style variant",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "default" },
      },
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "icon"],
      description: "Size",
      table: { type: { summary: "string" }, defaultValue: { summary: "md" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: { children: "Click Me" },
};
