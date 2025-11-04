import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Switch } from "./Switch";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
The **Switch** component toggles a boolean setting (on/off). It is best used for immediate, persistent preferences or feature flags rather than momentary actions.

## When To Use
- Enable or disable a setting instantly.
- Represent a binary preference saved as soon as it changes.
- Show current state clearly (should not require a confirmation button).

## Guidelines
- Always pair with a visible label (text) or an accessible name (aria-label / aria-labelledby).
- Use only for boolean semantics (avoid tri‑state without a custom pattern).
- Do not use as a submit trigger—state changes should take effect immediately.

## Accessibility Notes
- Provide an accessible name: visible text, \`aria-label\`, or \`aria-labelledby\`.
- Native checked semantics communicate state to assistive technology.
- Maintain a comfortable tap target (≥ 40px in at least one dimension).

## Stories
Basic uncontrolled usage, controlled state pattern, disabled variant, labeled example, plus size and color variants.
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
      description: { story: "Uncontrolled switch with default off state." },
    },
  },
  render: (args) => <Switch aria-label="Notifications" {...args} />,
};

export const Controlled: Story = {
  name: "Controlled",
  parameters: {
    docs: {
      description: {
        story:
          "Externally managed state via React. Useful for syncing with other logic or persistence.",
      },
    },
  },
  render: () => {
    const [on, setOn] = useState(false);
    return (
      <div style={{ display: "grid", gap: 12, justifyItems: "center" }}>
        <Switch
          checked={on}
          onCheckedChange={(v) => setOn(Boolean(v))}
          aria-label="Enable feature"
        />
        <div style={{ fontSize: 12, color: "#555" }}>
          State: {on ? "On" : "Off"}
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button
            type="button"
            onClick={() => setOn(true)}
            style={{ padding: "4px 8px" }}
          >
            Turn On
          </button>
          <button
            type="button"
            onClick={() => setOn(false)}
            style={{ padding: "4px 8px" }}
          >
            Turn Off
          </button>
        </div>
      </div>
    );
  },
};

export const Disabled: Story = {
  name: "Disabled",
  parameters: {
    docs: {
      description: { story: "Non-interactive disabled switch example." },
    },
  },
  render: () => <Switch disabled aria-label="Disabled setting" />,
};

export const WithLabel: Story = {
  name: "With Label",
  parameters: {
    docs: {
      description: { story: "Typical usage paired with an inline text label." },
    },
  },
  render: () => (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        cursor: "pointer",
      }}
    >
      <Switch aria-labelledby="switch-label-example" />
      <span id="switch-label-example">Dark Mode</span>
    </label>
  ),
};

export const Sizes: Story = {
  name: "Sizes",
  parameters: {
    docs: {
      description: {
        story: "Small, medium (default), and large size variants.",
      },
    },
  },
  render: () => (
    <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "center",
        }}
      >
        <Switch size="sm" aria-label="Small switch" />
        <span style={{ fontSize: 12 }}>sm</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "center",
        }}
      >
        <Switch size="md" aria-label="Medium switch" />
        <span style={{ fontSize: 12 }}>md</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "center",
        }}
      >
        <Switch size="lg" aria-label="Large switch" />
        <span style={{ fontSize: 12 }}>lg</span>
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
          "Brand, accent, and alert color variants illustrating semantic styling.",
      },
    },
  },
  render: () => (
    <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "center",
        }}
      >
        <Switch color="brand" aria-label="Brand switch" />
        <span style={{ fontSize: 12 }}>brand</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "center",
        }}
      >
        <Switch color="accent" aria-label="Accent switch" />
        <span style={{ fontSize: 12 }}>accent</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "center",
        }}
      >
        <Switch color="alert" aria-label="Alert switch" />
        <span style={{ fontSize: 12 }}>alert</span>
      </div>
    </div>
  ),
};
