import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";

const Stack: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  style,
  children,
  ...rest
}) => (
  <div
    style={{
      display: "flex",
      gap: "1rem",
      flexWrap: "wrap",
      alignItems: "center",
      ...style,
    }}
    {...rest}
  >
    {children}
  </div>
);

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
The **Button** component provides an accessible trigger for user actions: submitting forms, confirming flows, or invoking secondary utilities.

**Core guidelines**:
- Use clear verb‑forward labels (e.g. "Save", "Continue", "Delete").
- Only one visually dominant (default/primary intent) button per view.
- Supply an \`aria-label\` for icon‑only usage.
- Avoid disabling as a sole way to convey context—pair with messaging when possible.

**Variants** communicate semantic intent or emphasis: default, secondary, alert (destructive), outline, ghost (low emphasis), link (inline contextual).
**Sizes** adapt to density: sm, md (default), lg, icon.
**Appearance props**: \`rounded\` for pill shape; \`floating\` for elevated emphasis.
`,
      },
    },
  },
  argTypes: {
    children: {
      control: "text",
      description: "Button label content",
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
      description: "Pill shape (full rounding)",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Appearance",
      },
    },
    floating: {
      control: "boolean",
      description: "Elevated (shadow) style",
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
  args: { children: "Click Me", variant: "default", size: "md" },
  parameters: {
    docs: { description: { story: "Baseline button for a primary action." } },
  },
};

export const Variants: Story = {
  parameters: {
    docs: {
      description: {
        story: "Semantic & emphasis variants for differing intents.",
      },
    },
  },
  render: () => (
    <Stack>
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="alert">Destructive</Button>
    </Stack>
  ),
};

export const Sizes: Story = {
  parameters: {
    docs: {
      description: { story: "Different sizes for density and prominence." },
    },
  },
  render: () => (
    <Stack>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </Stack>
  ),
};

export const Appearance: Story = {
  parameters: {
    docs: {
      description: {
        story: "Optional appearance props for stylistic variation.",
      },
    },
  },
  render: () => (
    <Stack>
      <Button rounded>Rounded</Button>
      <Button floating>Floating</Button>
      <Button rounded floating>
        Rounded + Floating
      </Button>
    </Stack>
  ),
};

export const IconWithLabel: Story = {
  parameters: {
    docs: {
      description: { story: "Icon paired with text enhances recognizability." },
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
      description: { story: "Icon‑only buttons must provide an aria-label." },
    },
  },
  render: () => (
    <Stack style={{ flexWrap: "nowrap" }}>
      <Button size="icon" aria-label="Settings">
        <span className="material-symbols-rounded">settings</span>
      </Button>
      <Button size="icon" aria-label="Add">
        <span className="material-symbols-rounded">add</span>
      </Button>
      <Button size="icon" variant="ghost" aria-label="Close">
        <span className="material-symbols-rounded">close</span>
      </Button>
    </Stack>
  ),
};

export const Disabled: Story = {
  parameters: {
    docs: {
      description: { story: "Disabled buttons remove focus and interaction." },
    },
  },
  render: () => (
    <Stack>
      <Button disabled>Default Disabled</Button>
      <Button variant="secondary" disabled>
        Secondary Disabled
      </Button>
      <Button variant="outline" disabled>
        Outline Disabled
      </Button>
      <Button variant="ghost" disabled>
        Ghost Disabled
      </Button>
    </Stack>
  ),
};

const LoadingExample: React.FC = () => {
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
};

export const Loading: Story = {
  parameters: {
    docs: {
      description: { story: "Pattern for indicating an async/loading state." },
    },
  },
  render: () => <LoadingExample />,
};
