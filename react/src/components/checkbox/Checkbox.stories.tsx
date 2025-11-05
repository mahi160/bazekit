import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Checkbox, CheckboxGroup } from "./Checkbox";
import { Button } from "../button/Button";

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
    <label>
      <Checkbox /> I agree that Jim is not a bear
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
    <label>
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
      <label>
        <Checkbox disabled />
        Michael is the best boss (HR disabled this)
      </label>
      <label>
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
    <label>
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
        <label>
          <Checkbox checked={checked} onCheckedChange={setChecked} />I declare
          BANKRUPTCY!
        </label>
        <div>
          <Button onClick={() => setChecked((p) => !p)}>
            Toggle Bankruptcy
          </Button>
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

    return (
      <CheckboxGroup
        allValues={["sales", "accounting", "reception"]}
        value={selected}
        onValueChange={setSelected}
      >
        <label>
          <Checkbox parent />
          Office Department
        </label>
        <label>
          <Checkbox value="sales" />
          Sales (with Jim and Dwight's... dynamic)
        </label>
        <label>
          <Checkbox value="accounting" />
          Accounting (home of Kevin's famous chili)
        </label>
        <label>
          <Checkbox value="reception" />
          Reception (Pam's domain of artistry)
        </label>
      </CheckboxGroup>
    );
  },
};
