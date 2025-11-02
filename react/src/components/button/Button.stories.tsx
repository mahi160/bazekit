import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `\nThe **Button** component offers a consistent, accessible trigger for user actions. It enhances the native <button> element with design system variants, sizing, and theme alignment.\n\n## Overview\nButtons represent primary or secondary actions, confirmations, navigational intents, or contextual utilities. Proper hierarchy and contrast ensure rapid recognition and reduce decision friction.\n\n## Key Features\n- **Variants**: Communicate semantic intent (primary, secondary, alert, subtle, link).\n- **Sizes**: Optimize ergonomics across dense interfaces (sm, md, lg, icon).\n- **State Styling**: Hover, focus, active, disabled, and high-contrast theme support.\n- **Flexible Content**: Text, icons, or both; icon-only requires \`aria-label\`.\n- **Accessible Base**: Keyboard operable, announces role and disabled state.\n\n## Usage Guidelines\n- Use a single primary button per view to emphasize core progression.\n- Reserve alert/destructive variants for irreversible or high-impact operations.\n- Employ subtle or ghost variants for low-emphasis adjacent actions.\n- Maintain sufficient label clarity—avoid ambiguous verbs.\n\n## Accessibility\n- Focus ring visibility ensures keyboard discoverability.\n- Disabled buttons should not capture focus and must convey non-interactivity visually.\n- Provide \`aria-label\` for icon-only configurations.\n\n## Example\nDemonstration examples below use phrases and character references from *The Big Bang Theory* for illustrative labeling (e.g., "Bazinga" for a primary action).\n        `,
      },
    },
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Content rendered inside the button',
      table: { type: { summary: 'ReactNode' } },
    },
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'alert', 'outline', 'ghost', 'link'],
      description: 'Visual style variant',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'icon'],
      description: 'Button size variant',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Click event handler',
      table: { type: { summary: '() => void' } },
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'Native button type attribute',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'button' },
      },
    },
    className: {
      control: 'text',
      description: 'Optional custom CSS class names',
      table: { type: { summary: 'string' } },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Bazinga',
  },
}

export const Variants: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Variant styles distinguish semantic and hierarchical intent.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' as const }}>
      <Button>Bazinga</Button>
      <Button variant="secondary">Leonard</Button>
      <Button variant="ghost">Penny</Button>
      <Button variant="alert">Self-Destruct</Button>
      <Button variant="outline">Raj</Button>
      <Button variant="link">Amy Research</Button>
      <Button disabled>Disabled Action</Button>
    </div>
  ),
}

export const Sizes: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Size variants adapt to density requirements and ergonomic targets.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      <Button size="sm">Sheldon</Button>
      <Button size="md">Leonard</Button>
      <Button size="lg">Howard</Button>
    </div>
  ),
}

export const IconButton: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Icon-only buttons require an accessible label to describe their action.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      <Button size="icon" aria-label="Settings">⚙️</Button>
      <Button size="icon" aria-label="Add">+</Button>
      <Button size="icon" variant="ghost" aria-label="Close">×</Button>
    </div>
  ),
}

export const FullWidth: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates a button constrained to container width for layout emphasis.',
      },
    },
  },
  render: () => (
    <div style={{ width: '100%', maxWidth: 320 }}>
      <Button style={{ width: '100%' }}>Bazinga Full Width</Button>
    </div>
  ),
}

export const WithLoadingState: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Represent loading by disabling interaction and swapping visible label content.',
      },
    },
  },
  render: args => (
    <div style={{ display: 'flex', gap: '0.75rem' }}>
      <Button {...args}>Initiate Sequence</Button>
      <Button {...args} disabled>Processing…</Button>
    </div>
  ),
}

export const WithEvents: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates attaching interactive handlers for analytics or logic.',
      },
    },
  },
  args: {
    children: 'Trigger Action',
    onClick: () => console.info('Button clicked'),
  },
}
