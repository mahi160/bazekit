# AI Story Writing Guide for Storybook Components

This guide provides step-by-step instructions for AI agents to write consistent, high-quality Storybook stories following the established patterns in this codebase.

## Table of Contents
1. [Overview](#overview)
2. [File Structure](#file-structure)
3. [Meta Configuration](#meta-configuration)
4. [Component Documentation](#component-documentation)
5. [Story Creation Patterns](#story-creation-patterns)
6. [Naming Conventions](#naming-conventions)
7. [Content Guidelines](#content-guidelines)
8. [Examples](#examples)
9. [Quality Checklist](#quality-checklist)

## Overview

### Design Principles
- **Professional yet Engaging**: Use The Office theme for content while maintaining technical accuracy
- **Minimal Styling**: Focus on component functionality, avoid decorative elements
- **Comprehensive Coverage**: Document all props, variants, and use cases
- **Accessibility First**: Always include proper ARIA attributes and semantic HTML

### Target Audience
- **Developers**: Need technical implementation details and API reference
- **Designers**: Need visual examples and usage guidelines
- **Product Teams**: Need business context and best practices

## File Structure

Every component story file should follow this exact structure:

```typescript
import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ComponentName } from "./ComponentName";

// Helper components (if needed)
const Stack: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ ... });

// Meta configuration
const meta: Meta<typeof ComponentName> = { ... };
export default meta;

// Story type
type Story = StoryObj<typeof ComponentName>;

// Stories
export const Default: Story = { ... };
export const VariantExample: Story = { ... };
```

## Meta Configuration

### Required Properties
```typescript
const meta: Meta<typeof ComponentName> = {
  title: "Components/ComponentName",          // Category/Name format
  component: ComponentName,                   // Main component reference
  tags: ["autodocs"],                        // Enable auto-documentation
  parameters: {
    layout: "centered",                      // Center stories in canvas
    docs: {
      description: {
        component: `...`                     // Comprehensive component docs
      },
    },
  },
  argTypes: { ... }                         // Prop documentation
};
```

### Component Documentation Template
Use this exact structure for component descriptions:

```markdown
The **ComponentName** component [brief description of purpose and functionality].

## API
**Props**: List main props with brief descriptions
**Variants**: List available variants with descriptions
**Sizes**: List available sizes (if applicable)

## Behavior
[Describe key behavioral patterns]

## Usage
- [Usage guideline 1]
- [Usage guideline 2]
- [Usage guideline 3]

## Accessibility
- [Accessibility feature 1]
- [Accessibility feature 2]
- [Accessibility feature 3]
```

### ArgTypes Configuration
Document every prop with this structure:

```typescript
argTypes: {
  propName: {
    control: "select" | "boolean" | "text",     // Appropriate control type
    options: [...],                             // For select controls
    description: "Clear, concise description",
    table: {
      type: { summary: "string | boolean" },   // TypeScript type
      defaultValue: { summary: "default" },    // Default value
      category: "Appearance | Behavior | Content" // Logical grouping
    },
  },
}
```

## Story Creation Patterns

### 1. Default Story
Every component must have a Default story:

```typescript
export const Default: Story = {
  args: { 
    children: "Office-themed content", 
    variant: "default",
    size: "md" 
  },
  parameters: {
    docs: { 
      description: { 
        story: "Technical description of what this story demonstrates and when to use this configuration." 
      } 
    },
  },
};
```

### 2. Render Function Stories
For complex examples, use render functions:

```typescript
export const ComplexExample: Story = {
  parameters: {
    docs: {
      description: {
        story: "Detailed explanation of what this story shows and its practical applications.",
      },
    },
  },
  render: () => (
    <ComponentWrapper>
      <Component prop="office-themed-value">Content</Component>
    </ComponentWrapper>
  ),
};
```

### 3. Interactive Stories
For stateful components:

```typescript
export const Interactive: Story = {
  parameters: {
    docs: {
      description: {
        story: "Demonstrates interactive behavior and state management patterns.",
      },
    },
  },
  render: () => {
    const [state, setState] = useState(initialValue);
    return (
      <Component 
        value={state}
        onChange={setState}
      >
        Office-themed content
      </Component>
    );
  },
};
```

## Naming Conventions

### Story Names
- Use PascalCase for export names
- Use descriptive names that indicate functionality
- Avoid generic names like "Example" or "Demo"

**Good Examples:**
- `Default`
- `Variants`
- `Sizes`
- `WithDisabledItem`
- `IconWithLabel`
- `ControlledState`

**Bad Examples:**
- `Example1`
- `Demo`
- `Test`
- `Story`

### Display Names
Use the `name` property for human-readable story titles:

```typescript
export const MultipleOpen: Story = {
  name: "Multiple Selection",  // Displayed in Storybook UI
  // ...
};
```

## Content Guidelines

### Office Theme Integration
- **Characters**: Jim Halpert, Dwight Schrute, Michael Scott, Pam Beesly, etc.
- **References**: Dunder Mifflin, Scranton, "That's what she said", beet farming, etc.
- **Situations**: Office scenarios, character relationships, running jokes
- **Balance**: Keep content entertaining but not distracting from functionality

### Story Descriptions
Each story must have a comprehensive description explaining:

1. **What it demonstrates**: Specific functionality or pattern
2. **When to use it**: Practical application scenarios
3. **Key benefits**: Why this pattern is valuable
4. **Technical details**: Implementation considerations

**Template:**
```
"Demonstrates [specific functionality] where [behavior description]. This pattern is [use case] and is useful for [practical applications]."
```

### Content Examples

**Button Labels:**
- "That's what she said"
- "World's Best Boss"
- "Assistant to the Regional Manager"
- "Beet Farmer"
- "Dundie Award"

**Avatar Names:**
- Michael Scott (MS)
- Jim Halpert (JH)
- Dwight Schrute (DS)
- Pam Beesly (PB)

**Form Labels:**
- "Employee of the Month"
- "Favorite Office Supply"
- "Conference Room Booking"

## Examples

### Complete Button Story Example

```typescript
export const Variants: Story = {
  parameters: {
    docs: {
      description: {
        story: "Different button variants for various semantic meanings and visual emphasis levels. Use 'default' for primary actions, 'secondary' for supporting actions, 'outline' for subtle emphasis, 'ghost' for minimal presence, 'link' for inline actions, and 'alert' for destructive operations.",
      },
    },
  },
  render: () => (
    <Stack>
      <Button>World's Best Boss</Button>
      <Button variant="secondary">Assistant to the Regional Manager</Button>
      <Button variant="outline">Beet Farmer</Button>
      <Button variant="ghost">Silent Jim</Button>
      <Button variant="link">Dunder Mifflin</Button>
      <Button variant="alert">Fire Guy</Button>
    </Stack>
  ),
};
```

### Complete Accordion Story Example

```typescript
export const Controlled: Story = {
  name: "Controlled State",
  parameters: {
    docs: {
      description: {
        story: "Demonstrates controlled state management where accordion expansion is managed externally via state. This pattern enables programmatic control over which panels are open, integration with external data sources, and complex interaction patterns with other UI components.",
      },
    },
  },
  render: () => {
    const [open, setOpen] = useState<string[]>(["item-2"]);
    return (
      <div style={{ width: 480, display: "grid", gap: 16 }}>
        <Accordion value={open} onValueChange={setOpen} multiple>
          {baseItems}
        </Accordion>
        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          <button onClick={() => setOpen(["item-1", "item-2", "item-3"])}>
            Hire Everyone
          </button>
          <button onClick={() => setOpen([])}>
            You're All Fired
          </button>
        </div>
      </div>
    );
  },
};
```

## Quality Checklist

Before submitting stories, verify:

### Technical Requirements
- [ ] All imports are correctly typed
- [ ] Meta configuration includes all required fields
- [ ] ArgTypes document all component props
- [ ] Story descriptions are comprehensive and accurate
- [ ] TypeScript types are properly used
- [ ] No console errors or warnings

### Content Requirements
- [ ] Office theme is used consistently but not overwhelmingly
- [ ] All text content is appropriate and professional
- [ ] Story descriptions explain practical usage
- [ ] Examples demonstrate real-world scenarios
- [ ] Accessibility attributes are included where needed

### Visual Requirements
- [ ] Stories use minimal, functional styling only
- [ ] No decorative elements that distract from component
- [ ] Layout helpers (Stack, etc.) are clean and simple
- [ ] Components are properly centered and spaced
- [ ] Interactive elements work as expected

### Documentation Requirements
- [ ] Component description follows template structure
- [ ] All API elements are documented
- [ ] Usage guidelines are clear and actionable
- [ ] Accessibility features are highlighted
- [ ] Story descriptions explain when and why to use each pattern

### Accessibility Requirements
- [ ] Proper ARIA labels on interactive elements
- [ ] Semantic HTML structure
- [ ] Keyboard navigation support
- [ ] Screen reader compatibility
- [ ] Color contrast compliance

## Helper Components

### Stack Component
Use this helper for simple layouts:

```typescript
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
```

## Common Patterns

### Multiple Variants Story
```typescript
export const Variants: Story = {
  parameters: { docs: { description: { story: "..." } } },
  render: () => (
    <Stack>
      <Component variant="default">Content 1</Component>
      <Component variant="secondary">Content 2</Component>
      <Component variant="outline">Content 3</Component>
    </Stack>
  ),
};
```

### Sizes Story
```typescript
export const Sizes: Story = {
  parameters: { docs: { description: { story: "..." } } },
  render: () => (
    <Stack>
      <Component size="sm">Small</Component>
      <Component size="md">Medium</Component>
      <Component size="lg">Large</Component>
    </Stack>
  ),
};
```

### Disabled State Story
```typescript
export const Disabled: Story = {
  parameters: { docs: { description: { story: "..." } } },
  render: () => (
    <Stack>
      <Component disabled>Disabled Default</Component>
      <Component variant="secondary" disabled>Disabled Secondary</Component>
    </Stack>
  ),
};
```

## Final Notes

- **Consistency is Key**: Follow these patterns exactly to maintain codebase coherence
- **User Focus**: Always consider the developer experience when writing stories
- **Documentation**: Stories serve as both examples and documentation
- **Testing**: Stories should demonstrate real-world usage patterns
- **Accessibility**: Never compromise on accessibility for aesthetic choices

This guide ensures all AI-generated stories maintain the established quality, consistency, and professional standards of the component library.