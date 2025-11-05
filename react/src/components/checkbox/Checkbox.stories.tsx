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
The **Checkbox** component enables multiple selection from option sets with support for checked, unchecked, and indeterminate states.

## Usage
- Use for independent, multiple selections
- Always pair with descriptive labels
- Use indeterminate for parent/child relationships
- Group related checkboxes with \`CheckboxGroup\`

## Accessibility
- Keyboard navigation with Space key
- Screen reader compatible with ARIA attributes
- Proper label association required
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
        story:
          "Demonstrates the basic checkbox in its default unchecked state. Essential for binary choices and form inputs. Always pair with descriptive labels for accessibility and clear user understanding of the selection purpose.",
      },
    },
  },
  render: () => (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        cursor: "pointer",
      }}
    >
      <Checkbox />I agree that Jim is not a bear
    </label>
  ),
};

export const Checked: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Shows a checkbox in the checked state using the `defaultChecked` prop. Useful for default selections, pre-established preferences, or when certain options should be enabled by default in forms and settings interfaces.",
      },
    },
  },
  render: () => (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        cursor: "pointer",
      }}
    >
      <Checkbox defaultChecked />
      Bears eat beets
    </label>
  ),
};

export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates disabled checkboxes in both checked and unchecked states. Disabled checkboxes prevent user interaction while maintaining visual presence, ideal for showing locked preferences, restricted options, or system-controlled settings.",
      },
    },
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <label
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          opacity: 0.5,
        }}
      >
        <Checkbox disabled />
        Michael is the best boss (HR disabled this)
      </label>
      <label
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          opacity: 0.5,
        }}
      >
        <Checkbox disabled defaultChecked />
        That's what she said (permanently enabled)
      </label>
    </div>
  ),
};

export const Indeterminate: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates the indeterminate state, which represents partial selection or an undefined state. Commonly used for parent checkboxes when some (but not all) child options are selected, or to indicate mixed states in complex selection scenarios.",
      },
    },
  },
  render: () => (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        cursor: "pointer",
      }}
    >
      <Checkbox indeterminate />
      Sometimes I'll start a sentence and I don't even know where it's going
    </label>
  ),
};

export const Controlled: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Shows a controlled checkbox using `checked` and `onCheckedChange` props for external state management. This pattern enables integration with form libraries, complex validation logic, and dynamic interfaces where checkbox state needs to be managed programmatically.",
      },
    },
  },
  render: function Render() {
    const [checked, setChecked] = useState(false);

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <label
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            cursor: "pointer",
          }}
        >
          <Checkbox checked={checked} onCheckedChange={setChecked} />I declare
          BANKRUPTCY!
        </label>
        <div>
          Declaration Status:{" "}
          {checked
            ? "Michael has officially declared it!"
            : "Awaiting declaration..."}
        </div>
      </div>
    );
  },
};

export const Group: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates multiple independent checkboxes working together in a group context. Each checkbox maintains its own state while contributing to a collective selection, perfect for multi-select forms, preference panels, and option lists with real-time feedback.",
      },
    },
  },
  render: function Render() {
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
        <CheckboxGroup>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                cursor: "pointer",
              }}
            >
              <Checkbox
                value="sales"
                checked={selected.includes("sales")}
                onCheckedChange={(checked) => handleChange("sales", checked)}
              />
              Sales (with Jim and Dwight's... dynamic)
            </label>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                cursor: "pointer",
              }}
            >
              <Checkbox
                value="accounting"
                checked={selected.includes("accounting")}
                onCheckedChange={(checked) =>
                  handleChange("accounting", checked)
                }
              />
              Accounting (home of Kevin's famous chili)
            </label>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                cursor: "pointer",
              }}
            >
              <Checkbox
                value="reception"
                checked={selected.includes("reception")}
                onCheckedChange={(checked) =>
                  handleChange("reception", checked)
                }
              />
              Reception (Pam's domain of artistry)
            </label>
          </div>
        </CheckboxGroup>
        {selected.length > 0 && (
          <div>
            Michael says you're hired for:{" "}
            <strong>{selected.join(", ")}</strong>
          </div>
        )}
      </div>
    );
  },
};
