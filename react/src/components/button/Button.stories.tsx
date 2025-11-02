import React from "react";
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
        component: `\nThe **Button** component triggers actions, submits forms, and represents primary or secondary intents. Use concise, verb‑forward labels; supply an \`aria-label\` for icon‑only buttons.\n\nCommon variants: semantic differentiation (default, secondary, alert), emphasis control (outline, ghost, link). Size variants support ergonomic density.\n        `,
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
        category: "Appearance",
      },
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "icon"],
      description: "Size variant",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "md" },
        category: "Appearance",
      },
    },
    rounded: {
      control: "boolean",
      description: "Apply rounded corners",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Appearance",
      },
    },
    floating: {
      control: "boolean",
      description: "Apply floating style",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Appearance",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: { children: "Click Me" },
  parameters: {
    docs: { description: { story: "Basic button for a primary action." } },
  },
};

export const Variants: Story = {
  parameters: {
    docs: { description: { story: "Show semantic & emphasis variants." } },
  },
  render: () => (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="alert">Destructive</Button>
    </div>
  ),
};

export const Sizes: Story = {
  parameters: {
    docs: {
      description: { story: "Adjust footprint for density & hierarchy." },
    },
  },
  render: () => (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const Appearance: Story = {
  parameters: {
    docs: {
      description: { story: "Rounded buttons for a softer appearance." },
    },
  },
  render: () => (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Button rounded>Rounded</Button>
      <Button floating>Floating</Button>
    </div>
  ),
};

export const IconWithLabel: Story = {
  parameters: {
    docs: {
      description: { story: "Buttons can mix icon & text for clarity." },
    },
  },
  render: () => (
    <Button variant="secondary">
      <span className="material-symbols-rounded">settings</span>
      Settings
    </Button>
  ),
};

export const IconOnly: Story = {
  parameters: {
    docs: {
      description: { story: "Icon‑only requires accessible aria-label." },
    },
  },
  render: () => (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Button size="icon" aria-label="Settings" variant="outline">
        <span className="material-symbols-rounded">settings</span>
      </Button>
      <Button size="icon" aria-label="Add">
        <span className="material-symbols-rounded">add</span>
      </Button>
      <Button size="icon" variant="ghost" aria-label="Close">
        <span className="material-symbols-rounded">close</span>
      </Button>
    </div>
  ),
};

export const Disabled: Story = {
  parameters: {
    docs: { description: { story: "Disabled removes focus & interaction." } },
  },
  render: () => (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Button disabled>Default Disabled</Button>
      <Button variant="secondary" disabled>
        Secondary Disabled
      </Button>
      <Button variant="outline" disabled>
        Outline Disabled
      </Button>
    </div>
  ),
};

export const Loading: Story = {
  parameters: {
    docs: { description: { story: "Simulated loading state pattern." } },
  },
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [loading, setLoading] = React.useState(false);
    return (
      <Button
        disabled={loading}
        onClick={() => {
          setLoading(true);
          setTimeout(() => setLoading(false), 1200);
        }}
      >
        {loading ? "Processing…" : "Trigger Loading"}
      </Button>
    );
  },
};
