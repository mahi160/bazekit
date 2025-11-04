import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { Checkbox } from './Checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The **Checkbox** component allows users to select one or more options from a set. Unlike radio buttons, checkboxes support multiple selections and independent toggle behavior.

## When To Use
- Allow users to select multiple items from a list.
- Enable or disable individual features or preferences.
- Confirm agreement to terms, policies, or acknowledgments.
- Filter or categorize content with multiple criteria.

## Guidelines
- Always provide a clear, descriptive label adjacent to the checkbox.
- Use for binary choices that are independent of each other.
- Group related checkboxes under a common heading when appropriate.
- Avoid using a single checkbox for yes/no questions (use Switch instead).

## Accessibility Notes
- Pair with a \`<label>\` element or use \`aria-label\` / \`aria-labelledby\`.
- Support keyboard navigation with Space to toggle.
- Announce state changes clearly to screen readers.
- Maintain sufficient color contrast for the checked state.

## Stories
Basic usage, controlled state, disabled states, grouped selections, and form integration patterns.
        `,
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Checkbox>

export const Basic: Story = {
  name: 'Basic',
  parameters: {
    docs: { description: { story: 'Simple uncontrolled checkbox with default unchecked state.' } },
  },
  render: () => <Checkbox aria-label="Accept terms" />,
}

export const Controlled: Story = {
  name: 'Controlled',
  parameters: {
    docs: {
      description: {
        story: 'Externally managed state useful for form libraries or complex validation logic.',
      },
    },
  },
  render: () => {
    const [checked, setChecked] = useState(false)
    return (
      <div style={{ display: 'grid', gap: 12, justifyItems: 'center' }}>
        <Checkbox
          checked={checked}
          onCheckedChange={(value) => setChecked(Boolean(value))}
          aria-label="Controlled checkbox"
        />
        <div style={{ fontSize: 12, color: '#555' }}>
          State: {checked ? 'Checked' : 'Unchecked'}
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button type="button" onClick={() => setChecked(true)} style={{ padding: '4px 8px' }}>
            Check
          </button>
          <button type="button" onClick={() => setChecked(false)} style={{ padding: '4px 8px' }}>
            Uncheck
          </button>
        </div>
      </div>
    )
  },
}

export const Disabled: Story = {
  name: 'Disabled States',
  parameters: {
    docs: { description: { story: 'Disabled checkboxes in both checked and unchecked states.' } },
  },
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'not-allowed' }}>
        <Checkbox disabled aria-labelledby="disabled-unchecked" />
        <span id="disabled-unchecked" style={{ opacity: 0.6 }}>Disabled unchecked</span>
      </label>
      <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'not-allowed' }}>
        <Checkbox disabled checked aria-labelledby="disabled-checked" />
        <span id="disabled-checked" style={{ opacity: 0.6 }}>Disabled checked</span>
      </label>
    </div>
  ),
}

export const WithLabels: Story = {
  name: 'With Labels',
  parameters: {
    docs: { description: { story: 'Typical usage paired with descriptive text labels.' } },
  },
  render: () => (
    <div style={{ display: 'grid', gap: 12 }}>
      <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
        <Checkbox aria-labelledby="notifications-label" />
        <span id="notifications-label">Email notifications</span>
      </label>
      <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
        <Checkbox aria-labelledby="marketing-label" />
        <span id="marketing-label">Marketing updates</span>
      </label>
      <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
        <Checkbox aria-labelledby="newsletter-label" />
        <span id="newsletter-label">Weekly newsletter</span>
      </label>
    </div>
  ),
}

export const GroupSelection: Story = {
  name: 'Group Selection',
  parameters: {
    docs: {
      description: {
        story: 'Multiple checkboxes with a "select all" pattern for bulk operations.',
      },
    },
  },
  render: () => {
    const [items, setItems] = useState({
      item1: false,
      item2: false,
      item3: false,
    })

    const allChecked = Object.values(items).every(Boolean)
    const someChecked = Object.values(items).some(Boolean)

    const handleSelectAll = (checked: boolean) => {
      setItems({ item1: checked, item2: checked, item3: checked })
    }

    const handleItemChange = (key: keyof typeof items, checked: boolean) => {
      setItems(prev => ({ ...prev, [key]: checked }))
    }

    return (
      <div style={{ display: 'grid', gap: 8 }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', fontWeight: 500 }}>
          <Checkbox
            checked={allChecked}
            indeterminate={someChecked && !allChecked}
            onCheckedChange={(checked) => handleSelectAll(Boolean(checked))}
            aria-labelledby="select-all-label"
          />
          <span id="select-all-label">Select all features</span>
        </label>
        <div style={{ paddingLeft: 24, display: 'grid', gap: 6 }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
            <Checkbox
              checked={items.item1}
              onCheckedChange={(checked) => handleItemChange('item1', Boolean(checked))}
              aria-labelledby="feature1-label"
            />
            <span id="feature1-label">Advanced analytics</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
            <Checkbox
              checked={items.item2}
              onCheckedChange={(checked) => handleItemChange('item2', Boolean(checked))}
              aria-labelledby="feature2-label"
            />
            <span id="feature2-label">Team collaboration</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
            <Checkbox
              checked={items.item3}
              onCheckedChange={(checked) => handleItemChange('item3', Boolean(checked))}
              aria-labelledby="feature3-label"
            />
            <span id="feature3-label">Priority support</span>
          </label>
        </div>
      </div>
    )
  },
}
