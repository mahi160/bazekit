import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "./Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `\nThe **Accordion** component presents related content in vertically stacked, collapsible sections. It reduces visual noise and supports both single and multi‑section expansion patterns while preserving accessibility and keyboard operability.\n\n## When To Use\n- Group parallel categories or FAQs.\n- Provide progressive disclosure for long, detailed, or optional content.\n- Facilitate quick scanning while avoiding overwhelming the viewport.\n\nAvoid accordions for critical, always-needed information or deeply nested information architectures (prefer tabs, navigation, or separate pages).\n\n## Features\n- **Single or Multiple Expansion**: Constrain to one open section or allow comparison across several.\n- **Accessible Semantics**: Proper heading/trigger roles and controlled focus states.\n- **Keyboard Support**: Arrow navigation (implementation dependent), Home/End, Enter/Space activation.\n- **Composable API**: \`AccordionItem\`, \`AccordionTrigger\`, and \`AccordionPanel\` allow granular styling and structural control.\n- **Styling Hooks**: Data attributes and predictable DOM enable theming and animations.\n\n## Accessibility Notes\n- Triggers expose expanded/collapsed state to assistive tech.\n- Each panel is programmatically associated with its trigger.\n- Preserve logical heading order in surrounding layouts.\n\n## Design Guidelines\n- Keep trigger labels concise (≤ 2 lines).\n- Put essential summary/context in the trigger; place extended narrative or rich media inside the panel.\n- Limit the total number of items to what can be meaningfully scanned (often ≤ 8).\n\n## Stories\nThe stories demonstrate single selection, multiple selection, controlled state, and a disabled item variant.\n        `,
      },
    },
  },
  argTypes: {
    multiple: {
      control: { type: "boolean" },
      description:
        "Allow more than one panel to remain expanded simultaneously.",
      table: { category: "Behavior" },
    },
    defaultValue: {
      control: false,
      description: "Initial open item values when uncontrolled.",
      table: { category: "Behavior" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

const baseItems = (
  <>
    <AccordionItem value="item-1">
      <AccordionTrigger>Authentication & Access</AccordionTrigger>
      <AccordionPanel>
        <p style={{ textWrap: "pretty" }}>
          Outlines supported identity providers, session management strategy,
          and token refresh flow. Includes rate limits for authorization checks
          and guidance on least‑privilege role design.
        </p>
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Performance & Caching</AccordionTrigger>
      <AccordionPanel>
        <p style={{ textWrap: "pretty" }}>
          Describes our edge caching policy, cache invalidation triggers, and
          client hint usage. Provides baseline SLO targets and profiling touch
          points for critical paths.
        </p>
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>Data Governance</AccordionTrigger>
      <AccordionPanel>
        <p style={{ textWrap: "pretty" }}>
          Details retention windows, encryption at rest/in transit standards,
          classification tiers, and compliant deletion workflows with audit
          transparency.
        </p>
      </AccordionPanel>
    </AccordionItem>
  </>
);

export const Basic: Story = {
  name: "Basic (Single Selection)",
  args: { multiple: false, defaultValue: ["item-1"] },
  parameters: {
    docs: {
      description: {
        story:
          "Single‑selection mode: only one panel may be expanded at a time.",
      },
    },
  },
  render: (args) => (
    <div style={{ width: 480, padding: 24 }}>
      <Accordion {...args}>{baseItems}</Accordion>
    </div>
  ),
};

export const MultipleOpen: Story = {
  name: "Multiple Selection",
  args: { multiple: true, defaultValue: ["item-1", "item-2"] },
  parameters: {
    docs: {
      description: {
        story:
          "Multiple‑selection mode: several panels remain open for side‑by‑side reference.",
      },
    },
  },
  render: (args) => (
    <div style={{ width: 480, padding: 24 }}>
      <Accordion {...args}>{baseItems}</Accordion>
    </div>
  ),
};

export const Controlled: Story = {
  name: "Controlled State",
  parameters: {
    docs: {
      description: {
        story:
          "Externally manages expanded panels via `value` and `onValueChange`. Useful for syncing URL params or analytics.",
      },
    },
  },
  render: () => {
    const [open, setOpen] = useState<string[]>(["item-2"]);
    return (
      <div style={{ width: 480, padding: 24, display: "grid", gap: 12 }}>
        <Accordion value={open} onValueChange={setOpen} multiple>
          {baseItems}
        </Accordion>
        <div style={{ fontSize: 12, color: "#555" }}>
          Open panels: {open.length ? open.join(", ") : "(none)"}
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button
            type="button"
            onClick={() => setOpen(["item-1", "item-2", "item-3"])}
            style={{ padding: "4px 8px" }}
          >
            Expand All
          </button>
          <button
            type="button"
            onClick={() => setOpen([])}
            style={{ padding: "4px 8px" }}
          >
            Collapse All
          </button>
        </div>
      </div>
    );
  },
};

export const WithDisabledItem: Story = {
  name: "With Disabled Item",
  args: { multiple: false, defaultValue: ["item-1"] },
  parameters: {
    docs: {
      description: {
        story:
          "Illustrates handling of a disabled item (non interactive). Disabled state styling handled by component styles.",
      },
    },
  },
  render: (args) => (
    <div style={{ width: 480, padding: 24 }}>
      <Accordion {...args}>
        <AccordionItem value="item-1">
          <AccordionTrigger>Operational Metrics</AccordionTrigger>
          <AccordionPanel>
            <p style={{ textWrap: "pretty" }}>
              Summaries of throughput, error budgets, latency percentiles, and
              utilization indicators across core services.
            </p>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="item-2" disabled>
          <AccordionTrigger>Legacy Module (Deprecated)</AccordionTrigger>
          <AccordionPanel>
            <p style={{ textWrap: "pretty" }}>
              This section is intentionally disabled pending full removal from
              the platform.
            </p>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Release Notes</AccordionTrigger>
          <AccordionPanel>
            <p style={{ textWrap: "pretty" }}>
              Consolidated changes, migration steps, and rollback procedures for
              the current minor release.
            </p>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};
