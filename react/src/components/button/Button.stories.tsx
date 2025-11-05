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
The **Button** component provides accessible triggers for user actions including form submission, navigation, and utility functions.

## Usage
- Use clear, action-oriented labels ("Save", "Delete", "Continue")
- Only one primary button per section/view
- Provide \`aria-label\` for icon-only buttons
- Reserve \`alert\` variant for destructive actions

## Accessibility
- Semantic HTML \`<button>\` with proper ARIA
- Keyboard navigation (Enter, Space)
- Screen reader compatible loading/disabled states
- Minimum 44px touch targets on mobile
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
  args: { children: "That's what she said", variant: "default", size: "md" },
  parameters: {
    docs: {
      description: {
        story:
          "The default button variant with medium size. Use this for primary actions and main call-to-action elements in your interface.",
      },
    },
  },
};

export const Variants: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Different button variants for various semantic meanings and visual emphasis levels. Use 'default' for primary actions, 'secondary' for supporting actions, 'outline' for subtle emphasis, 'ghost' for minimal presence, 'link' for inline actions, and 'alert' for destructive operations.",
      },
    },
  },
  render: () => (
    <Stack>
      <Button>Best Boss</Button>
      <Button variant="secondary">Regional Manager</Button>
      <Button variant="outline">Beet Farmer</Button>
      <Button variant="ghost">Silent Jim</Button>
      <Button variant="link">Dunder Mifflin</Button>
      <Button variant="alert">Fire Guy</Button>
    </Stack>
  ),
};

export const Sizes: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Three size variants for different interface densities and visual prominence needs. Use 'sm' for compact layouts, 'md' (default) for standard interfaces, and 'lg' for high-emphasis actions.",
      },
    },
  },
  render: () => (
    <Stack>
      <Button size="sm">Teapot</Button>
      <Button size="md">Dundie Award</Button>
      <Button size="lg">World's Largest Beet</Button>
    </Stack>
  ),
};

export const Appearance: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Optional appearance modifiers that can be combined with any variant. The 'rounded' prop creates pill-shaped buttons, while 'floating' adds elevation with shadow effects.",
      },
    },
  },
  render: () => (
    <Stack>
      <Button rounded>Kevin's Chili</Button>
      <Button floating>Angela's Cat</Button>
      <Button rounded floating>
        Creed's Quality Assurance
      </Button>
    </Stack>
  ),
};

export const IconWithLabel: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Buttons that combine icons with text labels for enhanced clarity and recognition. Icons help users quickly identify the button's purpose while text provides explicit confirmation.",
      },
    },
  },
  render: () => (
    <Button variant="secondary" style={{ gap: "8px" }}>
      <span className="material-symbols-rounded">settings</span>
      Conference Room Settings
    </Button>
  ),
};

export const IconOnly: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Icon-only buttons for space-constrained interfaces or when the icon's meaning is universally understood. Always provide an aria-label for accessibility when using this pattern.",
      },
    },
  },
  render: () => (
    <Stack>
      <Button size="icon" aria-label="Office Settings">
        <span className="material-symbols-rounded">settings</span>
      </Button>
      <Button size="icon" aria-label="Add Employee">
        <span className="material-symbols-rounded">add</span>
      </Button>
      <Button size="icon" variant="ghost" aria-label="Fire Employee">
        <span className="material-symbols-rounded">close</span>
      </Button>
    </Stack>
  ),
};

export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Disabled buttons prevent user interaction and visually communicate when actions are unavailable. Use when operations are temporarily restricted, permissions are insufficient, or prerequisites aren't met.",
      },
    },
  },
  render: () => (
    <Stack>
      <Button disabled>Parkour!</Button>
      <Button variant="secondary" disabled>
        Fax Machine
      </Button>
      <Button variant="outline" disabled>
        Printer Broken
      </Button>
      <Button variant="ghost" disabled>
        Toby's Fun
      </Button>
    </Stack>
  ),
};

export const Loading: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Pattern for handling asynchronous operations. Disable the button and update the text content to indicate loading state, preventing duplicate submissions while providing user feedback.",
      },
    },
  },
  render: function LoadingExample() {
    const [loading, setLoading] = React.useState(false);
    return (
      <Button
        disabled={loading}
        onClick={() => {
          setLoading(true);
          setTimeout(() => setLoading(false), 1200);
        }}
      >
        {loading ? "Michael is thinking…" : "Start Dundie Awards"}
      </Button>
    );
  },
};
