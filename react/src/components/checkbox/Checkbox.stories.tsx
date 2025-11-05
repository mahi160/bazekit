import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Checkbox, CheckboxGroup } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
A checkbox allows users to select one or more options from a set. It supports checked, unchecked, and indeterminate states.

## Features
- Multiple selection support
- Indeterminate state for partial selections
- Keyboard navigation with Space key
- Accessible with proper ARIA attributes
- Works with forms and controlled components

## Usage
Always pair checkboxes with clear labels and use them for independent choices that don't affect each other.
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "The default checkbox state. Always pair with a descriptive label for accessibility.",
      },
    },
  },
  render: () => (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        cursor: "pointer",
      }}
    >
      <Checkbox />
      I agree to the terms and conditions
    </label>
  ),
};

export const Checked: Story = {
  parameters: {
    docs: {
      description: {
        story: "A checkbox with a pre-checked state using `defaultChecked`. Useful for default selections or previously saved preferences.",
      },
    },
  },
  render: () => (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        cursor: "pointer",
      }}
    >
      <Checkbox defaultChecked />
      Already agreed
    </label>
  ),
};

export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story: "Disabled checkboxes prevent user interaction. They can be in either checked or unchecked states while disabled. Use when options are temporarily unavailable or when permissions don't allow changes.",
      },
    },
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <label
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          opacity: 0.6,
        }}
      >
        <Checkbox disabled />
        Disabled unchecked
      </label>
      <label
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          opacity: 0.6,
        }}
      >
        <Checkbox disabled defaultChecked />
        Disabled checked
      </label>
    </div>
  ),
};

export const Indeterminate: Story = {
  parameters: {
    docs: {
      description: {
        story: "The indeterminate state represents a 'mixed' selection, commonly used when a parent checkbox has some (but not all) child options selected. Displays a horizontal line instead of a checkmark.",
      },
    },
  },
  render: () => (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        cursor: "pointer",
      }}
    >
      <Checkbox indeterminate />
      Partially selected
    </label>
  ),
};

export const Controlled: Story = {
  parameters: {
    docs: {
      description: {
        story: "A controlled checkbox where the state is managed by React. Use `checked` and `onCheckedChange` props to control the state externally. Perfect for forms and complex state management.",
      },
    },
  },
  render: () => {
    const [checked, setChecked] = useState(false);

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <label
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            cursor: "pointer",
          }}
        >
          <Checkbox checked={checked} onCheckedChange={setChecked} />
          Controlled checkbox
        </label>
        <p style={{ fontSize: "14px", color: "#666" }}>
          Status: {checked ? "Checked" : "Unchecked"}
        </p>
      </div>
    );
  },
};

export const Group: Story = {
  parameters: {
    docs: {
      description: {
        story: "Multiple checkboxes working together in a group. Each checkbox operates independently, allowing users to select multiple options. Shows real-time selection feedback below the options.",
      },
    },
  },
  render: () => {
    const [selected, setSelected] = useState<string[]>([]);

    const handleChange = (value: string, checked: boolean) => {
      if (checked) {
        setSelected([...selected, value]);
      } else {
        setSelected(selected.filter((item) => item !== value));
      }
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <h3 style={{ margin: 0, fontSize: "16px", fontWeight: "600" }}>
          Select your interests:
        </h3>
        <CheckboxGroup>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
              }}
            >
              <Checkbox
                value="design"
                checked={selected.includes("design")}
                onCheckedChange={(checked) => handleChange("design", checked)}
              />
              Design
            </label>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
              }}
            >
              <Checkbox
                value="development"
                checked={selected.includes("development")}
                onCheckedChange={(checked) =>
                  handleChange("development", checked)
                }
              />
              Development
            </label>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
              }}
            >
              <Checkbox
                value="marketing"
                checked={selected.includes("marketing")}
                onCheckedChange={(checked) => handleChange("marketing", checked)}
              />
              Marketing
            </label>
          </div>
        </CheckboxGroup>
        {selected.length > 0 && (
          <p style={{ fontSize: "14px", color: "#666", margin: 0 }}>
            Selected: {selected.join(", ")}
          </p>
        )}
      </div>
    );
  },
};
