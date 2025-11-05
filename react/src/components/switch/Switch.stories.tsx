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
        <div>Bears Status: {on ? "DETECTED" : "ALL CLEAR"}</div>
        <div style={{ display: "flex", gap: 8 }}>
          <Button onClick={() => setOn(true)} variant="alert">
            Alert! Bears!
          </Button>
          <Button onClick={() => setOn(false)}>False Alarm</Button>
        </div>
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
  render: () => (
    <Switch
      disabled
      aria-label="Toby's Opinion Switch (Permanently Disabled)"
    />
  ),
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
    <label
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        cursor: "pointer",
      }}
    >
      <Switch aria-labelledby="switch-label-example" />
      <span id="switch-label-example">Kevin's Famous Chili Mode</span>
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          alignItems: "center",
        }}
      >
        <Switch size="sm" aria-label="Jim's Prank Switch" />
        <span style={{ fontSize: 12 }}>Teapot Size</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          alignItems: "center",
        }}
      >
        <Switch size="md" aria-label="Standard Dundie Switch" />
        <span style={{ fontSize: 12 }}>Dundie Size</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          alignItems: "center",
        }}
      >
        <Switch size="lg" aria-label="World's Best Boss Switch" />
        <span style={{ fontSize: 12 }}>Boss Mug Size</span>
      </div>
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          alignItems: "center",
        }}
      >
        <Switch color="brand" aria-label="Dunder Mifflin Corporate Blue" />
        <span style={{ fontSize: 12 }}>Scranton Blue</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          alignItems: "center",
        }}
      >
        <Switch color="accent" aria-label="Schrute Farms Beet Purple" />
        <span style={{ fontSize: 12 }}>Beet Farm Purple</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          alignItems: "center",
        }}
      >
        <Switch color="alert" aria-label="Fire Drill Emergency Red" />
        <span style={{ fontSize: 12 }}>Fire Drill Red</span>
      </div>
    </div>
  ),
};
