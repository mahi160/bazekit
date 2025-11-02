import type { Meta, StoryObj } from '@storybook/react-vite'
import { Accordion, AccordionItem, AccordionPanel, AccordionTrigger } from './Accordion'

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `\nThe **Accordion** component provides a vertically stacked set of expandable sections for organizing related content. It supports single or multiple item expansion, keyboard navigation, and accessible semantics.\n\n## Overview\nUse an accordion to reduce cognitive load when presenting lengthy or categorized information. Each item contains a trigger (header) and a panel (content region) that can be expanded or collapsed.\n\n## Key Features\n- **Multiple Expansion Modes**: Allow one (classic disclosure) or several panels open concurrently.\n- **Accessible Structure**: Implements proper header associations and ARIA where required via the underlying primitive.\n- **Keyboard Support**: Arrow keys, Home/End traversal (in primitive), Enter/Space to toggle items.\n- **Composable Items**: Import and combine \`AccordionItem\`, \`AccordionTrigger\`, and \`AccordionPanel\`.\n- **Theming Ready**: Style via CSS Modules with data attributes for animation, state, and theme integration.\n\n## Usage Guidelines\n- Prefer an accordion when content categories are equally weighted and users may need to compare them.\n- Avoid nesting multiple deep levels—consider navigation or tabs for complex hierarchies.\n- Keep trigger labels concise; surface critical summary information in the panel.\n\n## Accessibility\n- Trigger elements are interactive and announce expansion state.\n- Panels are associated with their triggers for screen readers.\n- Maintain logical heading order to support assistive technologies.\n\n## Example\nBelow is a simple single-selection accordion using character bios from *The Big Bang Theory* for demonstration text.\n        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Accordion>

export const Default: Story = {
  render: () => (
    <div style={{ maxWidth: 420, padding: 20 }}>
      <Accordion defaultValue={['item-2']} openMultiple={false}>
        <AccordionItem value="item-1">
          <AccordionTrigger>Sheldon Cooper</AccordionTrigger>
          <AccordionPanel>
            <p style={{ textWrap: 'pretty' }}>
              Theoretical physicist with an exceptional intellect and a regimented routine. Known for precise logic, catchphrases, and unwavering commitment to scientific rigor.
            </p>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Leonard Hofstadter</AccordionTrigger>
          <AccordionPanel>
            <p style={{ textWrap: 'pretty' }}>
              Experimental physicist balancing professional curiosity with social diplomacy. Frequently mediates between Sheldon's structure and the group's spontaneity.
            </p>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Penny</AccordionTrigger>
          <AccordionPanel>
            <p style={{ textWrap: 'pretty' }}>
              Outgoing, pragmatic, and emotionally perceptive. Offers grounded perspective on the group's scientific pursuits while driving interpersonal growth.
            </p>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  ),
}

export const MultipleOpen: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates allowing multiple panels to remain expanded concurrently for cross-referencing.',
      },
    },
  },
  render: () => (
    <div style={{ maxWidth: 420, padding: 20 }}>
      <Accordion defaultValue={['item-1', 'item-3']} openMultiple>
        <AccordionItem value="item-1">
          <AccordionTrigger>Amy Farrah Fowler</AccordionTrigger>
          <AccordionPanel>
            <p style={{ textWrap: 'pretty' }}>
              Neurobiologist who blends analytical thinking with emerging social confidence. Encourages collaborative research and personal development.
            </p>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Howard Wolowitz</AccordionTrigger>
          <AccordionPanel>
            <p style={{ textWrap: 'pretty' }}>
              Aerospace engineer with strong technical improvisation skills. Contributes engineering solutions and mission-oriented insights.
            </p>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Raj Koothrappali</AccordionTrigger>
          <AccordionPanel>
            <p style={{ textWrap: 'pretty' }}>
              Astrophysicist focused on celestial phenomena. Integrates observational data with the group’s theoretical frameworks.
            </p>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  ),
}

export const Compact: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A compact layout (reduced width) illustrating constrained placement scenarios.',
      },
    },
  },
  render: () => (
    <div style={{ maxWidth: 300, padding: 12 }}>
      <Accordion openMultiple>
        <AccordionItem value="sheldon">
          <AccordionTrigger>Sheldon</AccordionTrigger>
          <AccordionPanel>
            <p style={{ textWrap: 'pretty' }}>
              Precision-driven; emphasizes reproducibility and structural order within collaborative research.
            </p>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="leonard">
          <AccordionTrigger>Leonard</AccordionTrigger>
          <AccordionPanel>
            <p style={{ textWrap: 'pretty' }}>
              Synthesizes experimental outcomes; balances technical depth with interpersonal alignment.
            </p>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  ),
}
