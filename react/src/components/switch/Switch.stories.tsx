import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Switch } from "./Switch";
import { Button } from "../button/Button";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
The **Switch** component toggles boolean settings with immediate effect, ideal for preferences and feature flags.

## Usage
- Use for immediate, persistent preferences
- Changes take effect instantly (no confirmation needed)
- Always provide accessible labels (\`aria-label\` or \`aria-labelledby\`)
- Don't use for submit actions or momentary toggles

## Accessibility
- Minimum 40px touch targets
- Screen reader compatible with native checked semantics
- Keyboard navigation with Space/Enter keys
- Clear visual state indicators
`,
      },
    },
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Visual size variant",
      table: {
        category: "Appearance",
        type: { summary: '"sm" | "md" | "lg"' },
      },
    },
    color: {
      control: { type: "select" },
      options: ["brand", "accent", "alert"],
      description: "Color intent variant",
      table: {
        category: "Appearance",
        type: { summary: '"brand" | "accent" | "alert"' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Basic: Story = {
  name: "Basic",
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates the basic switch component in its default state. Shows the fundamental toggle functionality for binary settings and preferences that take effect immediately upon interaction.",
      },
    },
  },
  render: (args) => <Switch aria-label="Michael's Fun Police Mode" {...args} />,
};

export const Controlled: Story = {
  name: "Controlled",
  parameters: {
    docs: {
      description: {
        story:
          "Shows controlled switch behavior using `checked` and `onCheckedChange` props for external state management. This pattern enables integration with form libraries, complex logic, and programmatic control over switch state.",
      },
    },
  },
  render: function Render() {
    const [on, setOn] = useState(false);
    return (
      <div style={{ display: "grid", gap: 12, justifyItems: "center" }}>
        <Switch
          checked={on}
          onCheckedChange={(v) => setOn(Boolean(v))}
          aria-label="Dwight's Security Mode"
        />
        <Button onClick={() => setOn((p) => !p)} variant="alert">
          Toggle Alert
        </Button>
      </div>
    );
  },
};

export const Disabled: Story = {
  name: "Disabled",
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates a disabled switch that prevents user interaction while maintaining visual presence. Useful for showing unavailable features, restricted settings, or temporarily locked functionality.",
      },
    },
  },
  render: () => <Switch disabled />,
};

export const WithLabel: Story = {
  name: "With Label",
  parameters: {
    docs: {
      description: {
        story:
          "Shows the proper accessibility pattern for pairing a switch with descriptive text using aria-labelledby. Demonstrates how to create clear, accessible labeling that helps users understand what the switch controls.",
      },
    },
  },
  render: () => (
    <label>
      <Switch />
      Kevin's Famous Chili Mode
    </label>
  ),
};

export const Sizes: Story = {
  name: "Sizes",
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates the three available size variants (sm, md, lg) for different interface contexts and visual hierarchy needs. Size selection should consider content density, touch target requirements, and design system consistency.",
      },
    },
  },
  render: () => (
    <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
      <Switch size="sm" />
      <Switch size="md" />
      <Switch size="lg" />
    </div>
  ),
};

export const Colors: Story = {
  name: "Colors",
  parameters: {
    docs: {
      description: {
        story:
          "Shows the available color variants (brand, accent, alert) for different semantic meanings and visual hierarchy. Color selection should align with design system tokens and convey appropriate meaning for the switch's purpose.",
      },
    },
  },
  render: () => (
    <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
      <Switch color="brand" />
      <Switch color="accent" />
      <Switch color="alert" />
    </div>
  ),
};
