import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "./Accordion";
import { Button } from "../button/Button";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
The **Accordion** component presents collapsible sections for progressive content disclosure with WAI-ARIA compliance.

## Usage
- Group related information categories (FAQs, settings)
- Keep trigger labels concise (1-2 lines)
- Limit to 3-8 items for scannability
- Use unique \`value\` props for each item

## Accessibility
- Full keyboard navigation (Space, Enter, Tab)
- ARIA attributes for screen readers
- Proper focus management and expansion states
`,
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
      <AccordionTrigger>Jim Halpert</AccordionTrigger>
      <AccordionPanel>
        <p style={{ textWrap: "pretty" }}>
          Jim is a salesman at Dunder Mifflin known for his pranks on Dwight,
          his relationship with Pam, and his dry sense of humor. He's the
          everyman of the office who often looks directly at the camera with
          knowing expressions.
        </p>
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Dwight Schrute</AccordionTrigger>
      <AccordionPanel>
        <p style={{ textWrap: "pretty" }}>
          Dwight is the Assistant Regional Manager (or Assistant TO the Regional
          Manager) who runs a beet farm and considers himself a survivalist.
          He's Michael's most loyal employee and Jim's frequent prank victim.
        </p>
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>Michael Scott</AccordionTrigger>
      <AccordionPanel>
        <p style={{ textWrap: "pretty" }}>
          Michael is the Regional Manager who thinks he's the "World's Best
          Boss." He loves to make jokes (often inappropriate) and considers his
          employees his friends. His coffee mug confirms his self-proclaimed
          title.
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
          "Demonstrates single-selection behavior where only one accordion panel can be expanded at a time. This mode is ideal for interfaces where users should focus on one section of content at a time, such as FAQ sections or step-by-step processes.",
      },
    },
  },
  render: (args) => (
    <div style={{ width: 480 }}>
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
          "Demonstrates multiple-selection behavior where several accordion panels can remain expanded simultaneously. This mode enables content comparison and is useful for complex forms, settings panels, or when users need to reference multiple sections at once.",
      },
    },
  },
  render: (args) => (
    <div style={{ width: 480 }}>
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
          "Demonstrates controlled state management where accordion expansion is managed externally via state. This pattern enables programmatic control over which panels are open, integration with external data sources, and complex interaction patterns with other UI components.",
      },
    },
  },
  render: function Render() {
    const [open, setOpen] = useState<string[]>(["item-2"]);
    return (
      <div style={{ width: 480, display: "grid", gap: 16 }}>
        <Accordion value={open} onValueChange={setOpen} multiple>
          {baseItems}
        </Accordion>
        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          <Button onClick={() => setOpen(["item-1", "item-2", "item-3"])}>
            Hire Everyone
          </Button>
          <Button variant="alert" onClick={() => setOpen([])}>
            You're All Fired
          </Button>
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
          "Demonstrates disabled accordion items that prevent user interaction while maintaining visual presence in the interface. This pattern is useful for conditional content, progressive disclosure based on user permissions, or temporarily unavailable sections.",
      },
    },
  },
  render: (args) => (
    <div style={{ width: 480 }}>
      <Accordion {...args}>
        <AccordionItem value="item-1">
          <AccordionTrigger>Kevin's Famous Chili Recipe</AccordionTrigger>
          <AccordionPanel>
            <p style={{ textWrap: "pretty" }}>
              The secret is to undercook the onions. Everybody is going to get
              to know each other in the pot. But Kevin spilled it all over the
              carpet, so now we'll never know the full recipe.
            </p>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="item-2" disabled>
          <AccordionTrigger>Toby's Fun Activities</AccordionTrigger>
          <AccordionPanel>
            <p style={{ textWrap: "pretty" }}>
              This section is intentionally disabled because Toby is the worst.
              NO GOD! NO GOD, PLEASE NO! NO! NO! NOOOOOO!
            </p>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Dwight's Beet Farm</AccordionTrigger>
          <AccordionPanel>
            <p style={{ textWrap: "pretty" }}>
              Schrute Farms is a 60-acre beet farm located in Honesdale,
              Pennsylvania. It also serves as a bed and breakfast, though guests
              often mistake it for a themed restaurant. Bears, beets, Battlestar
              Galactica.
            </p>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};
