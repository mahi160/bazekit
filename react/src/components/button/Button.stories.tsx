import React, { useState } from "react";
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
      table: { type: { summary: "string" }, defaultValue: { summary: "default" } },
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "icon"],
      description: "Size variant",
      table: { type: { summary: "string" }, defaultValue: { summary: "md" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: { children: "Click Me" },
  parameters: { docs: { description: { story: "Basic button for a primary action." } } },
};

export const Variants: Story = {
  parameters: { docs: { description: { story: "Show semantic & emphasis variants." } } },
  render: () => (
    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
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
  parameters: { docs: { description: { story: "Adjust footprint for density & hierarchy." } } },
  render: () => (
    <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="icon" aria-label="Settings">⚙️</Button>
    </div>
  ),
};

export const IconWithLabel: Story = {
  parameters: { docs: { description: { story: "Buttons can mix icon & text for clarity." } } },
  render: () => (
    <Button variant="secondary">⚙️ Settings</Button>
  ),
};

export const IconOnly: Story = {
  parameters: { docs: { description: { story: "Icon‑only requires accessible aria-label." } } },
  render: () => (
    <div style={{ display: "flex", gap: "0.5rem" }}>
      <Button size="icon" aria-label="Settings">⚙️</Button>
      <Button size="icon" aria-label="Add">+</Button>
      <Button size="icon" variant="ghost" aria-label="Close">×</Button>
    </div>
  ),
};

export const DisabledStates: Story = {
  parameters: { docs: { description: { story: "Disabled removes focus & interaction." } } },
  render: () => (
    <div style={{ display: "flex", gap: "0.5rem" }}>
      <Button>Enabled</Button>
      <Button disabled>Disabled</Button>
      <Button variant="secondary" disabled>
        Secondary Disabled
      </Button>
      <Button variant="outline" disabled>
        Outline Disabled
      </Button>
    </div>
  ),
};

export const LoadingSimulation: Story = {
  parameters: { docs: { description: { story: "Simulated loading state pattern." } } },
  render: () => {
    const [loading, setLoading] = useState(false);
    return (
      <Button
        disabled={loading}
        onClick={() => {
          setLoading(true);
          setTimeout(() => setLoading(false), 1200);
        }}
      >
        {loading ? "Processing…" : "Trigger Async"}
      </Button>
    );
  },
};

export const FullWidth: Story = {
  parameters: { docs: { description: { story: "Expand to parent width for prominence." } } },
  render: () => (
    <div style={{ width: 320 }}>
      <Button style={{ width: "100%" }}>Full Width</Button>
    </div>
  ),
};
