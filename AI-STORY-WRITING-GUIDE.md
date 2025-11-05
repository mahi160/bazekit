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

- **Professional yet Engaging**: Use The Office US theme for content while maintaining technical accuracy
- **Clean & Minimal**: Focus purely on component functionality, avoid decorative styling
- **Comprehensive Coverage**: Document usage patterns and practical applications
- **Accessibility First**: Always include proper ARIA attributes and semantic HTML

### Target Audience

- **Developers**: Need technical implementation details and usage patterns
- **Designers**: Need visual examples and variant demonstrations
- **Product Teams**: Need practical guidance and best practices

## File Structure

Every component story file should follow this exact structure:

```typescript
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react"; // Only when needed for interactive stories
import { ComponentName } from "./ComponentName";
import { Button } from "../button/Button"; // Import other components when needed

// Helper components (only when necessary)
const Stack: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ ... });

// Meta configuration
const meta: Meta<typeof ComponentName> = { ... };
export default meta;

// Story type
type Story = StoryObj<typeof ComponentName>;

// Stories
export const Default: Story = { ... };
export const Variants: Story = { ... };
```

### Key Import Rules

- No `React` import unless explicitly using `React.useState` or other React APIs
- Use `useState` directly from React import when needed
- Import related components (like Button) when used in interactive examples
- Keep imports minimal and only include what's actually used

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

Use this **simplified** structure for component descriptions:

```markdown
The **ComponentName** component [brief description of purpose and functionality].

## Usage

- [Usage guideline 1]
- [Usage guideline 2]
- [Usage guideline 3]

## Accessibility

- [Accessibility feature 1]
- [Accessibility feature 2]
- [Accessibility feature 3]
```

### Important Changes

- **Removed API section**: Props are documented in argTypes, not in the description
- **Removed Behavior section**: Behavior is explained in individual story descriptions
- **Simplified structure**: Focus on practical usage and accessibility only
- **Keep it concise**: Avoid repetitive information that's covered elsewhere

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
    size: "md",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Technical description of what this story demonstrates and when to use this configuration.",
      },
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

For stateful components, use named function components:

```typescript
export const Interactive: Story = {
  parameters: {
    docs: {
      description: {
        story: "Demonstrates interactive behavior and state management patterns.",
      },
    },
  },
  render: function Render() {
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

### Important: Named Render Functions

- Always use `function Render()` or similar named function for render functions
- This improves debugging and error messages in development
- Consistent pattern used across all interactive stories

````

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
````

## Content Guidelines

### Office Theme Integration

- **Characters**: Jim Halpert, Dwight Schrute, Michael Scott, Pam Beesly, Kevin, Angela, Stanley, Creed, Toby
- **References**: Dunder Mifflin, Scranton, beets, chili, Battlestar Galactica, conference rooms, parkour
- **Situations**: Office dynamics, character quirks, running jokes from the show
- **Balance**: Entertaining but never overwhelming or distracting from component functionality

### Story Descriptions

Each story requires comprehensive descriptions that explain:

1. **What it demonstrates**: Specific functionality or pattern shown
2. **When to use it**: Practical application scenarios in real interfaces
3. **Why it's valuable**: Benefits and use cases for developers
4. **Implementation details**: Key technical considerations

**Template:**

```
"Demonstrates [specific functionality] where [behavior description]. This pattern is [ideal/useful/perfect] for [practical applications], [additional context about when/why to use]."
```

### Content Examples

**Button Labels:**

- "That's what she said"
- "Best Boss", "Regional Manager" (shortened from longer versions)
- "Beet Farmer", "Silent Jim", "Fire Guy"
- "Teapot", "Dundie Award", "World's Largest Beet"
- "Kevin's Chili", "Angela's Cat", "Creed's Quality Assurance"

**Checkbox Labels:**

- "I agree that Jim is not a bear"
- "Bears eat beets"
- "Michael is the best boss (HR disabled this)"
- "That's what she said (permanently enabled)"
- Office departments: Sales, Accounting, Reception

**Switch Labels:**

- "Michael's Fun Police Mode"
- "Dwight's Security Mode"
- "Kevin's Famous Chili Mode"

**Avatar Names & Initials:**

- Michael Scott (MS), Jim Halpert (JH), Dwight Schrute (DS)
- Pam Beesly (PB), Kevin Malone (KC), Angela Martin (AM)
- Stanley Hudson (SH), Creed Bratton (CB), Toby Flenderson (TO)

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
      <Button>Best Boss</Button>
      <Button variant="secondary">Regional Manager</Button>
      <Button variant="outline">Beet Farmer</Button>
      <Button variant="ghost">Silent Jim</Button>
      <Button variant="link">Dunder Mifflin</Button>
      <Button variant="alert">Fire Guy</Button>
    </Stack>
  ),
};
```

### Complete Interactive Loading Example

```typescript
export const Loading: Story = {
  parameters: {
    docs: {
      description: {
        story: "Pattern for handling asynchronous operations. Disable the button and update the text content to indicate loading state, preventing duplicate submissions while providing user feedback.",
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
```

### Complete Controlled Accordion Example

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

## Helper Components & Layout Patterns

### Stack Component (Button stories only)

Only use this helper in Button stories for simple horizontal layouts:

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

### Direct Inline Styles

For most components, use inline styles directly in JSX:

```typescript
// Column layout for checkboxes/switches
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

// Horizontal layout with spacing
<div style={{ display: "flex", gap: 32, alignItems: "center" }}>

// Centered grid layout
<div style={{ display: "grid", gap: 12, justifyItems: "center" }}>

// Fixed width containers
<div style={{ width: 480 }}>
```

### Key Layout Rules

- **No decorative styling**: Only functional layout styles
- **Minimal inline styles**: Just gap, display, width, alignment
- **Consistent spacing**: Use 12px, 16px, 32px increments
- **No helper components**: Unless absolutely necessary (like Button's Stack)

## Common Patterns

### Multiple Variants Story (Buttons)

```typescript
export const Variants: Story = {
  parameters: { docs: { description: { story: "Comprehensive description..." } } },
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
```

### Horizontal Layout Pattern (Switches, etc.)

```typescript
export const Sizes: Story = {
  parameters: { docs: { description: { story: "Description of size variants..." } } },
  render: () => (
    <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
      <Switch size="sm" />
      <Switch size="md" />
      <Switch size="lg" />
    </div>
  ),
};
```

### Vertical Layout Pattern (Checkboxes, etc.)

```typescript
export const Disabled: Story = {
  parameters: { docs: { description: { story: "Description of disabled states..." } } },
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
```

### Fixed Width Container Pattern (Accordions)

```typescript
export const Basic: Story = {
  parameters: { docs: { description: { story: "Description..." } } },
  render: (args) => (
    <div style={{ width: 480 }}>
      <Accordion {...args}>{baseItems}</Accordion>
    </div>
  ),
};
```

### Interactive Controlled Pattern

```typescript
export const Controlled: Story = {
  parameters: { docs: { description: { story: "Description..." } } },
  render: function Render() {
    const [state, setState] = useState(initialValue);
    return (
      <div style={{ display: "grid", gap: 12, justifyItems: "center" }}>
        <Component checked={state} onCheckedChange={setState} />
        <Button onClick={() => setState(prev => !prev)}>
          Toggle State
        </Button>
      </div>
    );
  },
};
```

## Updated Patterns & Important Changes

### Recent Updates Reflected in This Guide

1. **Simplified Component Documentation**: Removed API and Behavior sections, keeping only Usage and Accessibility
2. **Named Render Functions**: All interactive stories use `function Render()` or similar named functions
3. **Direct Component Imports**: Import Button and other components directly when needed in interactive stories
4. **Cleaner Content**: Office references are more subtle and concise (e.g., "Best Boss" instead of "World's Best Boss")
5. **Consistent Avatar Sources**: Use dicebear.com API for consistent avatar examples
6. **Updated Import Patterns**: No React import unless explicitly needed, direct useState import

### Avatar-Specific Patterns

- Use `https://api.dicebear.com/9.x/adventurer-neutral/svg?seed={character}` for images
- Use `src="#"` for intentional fallback testing
- Character seeds: `m` (Michael), `d` (Dwight), `p` (Pam), `c` (Creed)

### Switch-Specific Patterns

- Always include `aria-label` for accessibility
- Use semantic color names: `brand`, `accent`, `alert`
- Size variants: `sm`, `md`, `lg`

### Checkbox-Specific Patterns

- Always wrap in `<label>` elements for proper accessibility
- Use Office-themed but functional labels
- Show indeterminate state with clear explanation

## Final Notes

- **Exact Pattern Matching**: Follow these established patterns precisely to maintain consistency
- **Office Theme Balance**: Entertaining content that never distracts from component functionality
- **Developer Experience**: Stories should serve as practical implementation examples
- **Clean Code**: Minimal styling, clear structure, proper accessibility
- **Real-World Scenarios**: Demonstrate patterns developers will actually use

This guide ensures all AI-generated stories maintain the established quality, consistency, and professional standards while capturing the current state of the component library.

