import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
The **Avatar** component displays user or entity identity through images with automatic fallback to text initials.

## Usage
- Use high-quality, centered images
- Provide meaningful \`alt\` text
- Use 1-2 character initials for fallbacks
- Limit groups to 3-5 visible avatars

## Accessibility
- Required \`alt\` attribute on images
- Fallback text read by screen readers
- Proper focus management for interactive avatars
`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Basic: Story = {
  name: "Basic",
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates basic avatar functionality with a successful image load. Shows the standard use case where an image source is available and renders correctly, representing individual user identity in the interface.",
      },
    },
  },
  render: () => (
    <Avatar>
      <AvatarImage
        src="https://picsum.photos/seed/michael-scott/160"
        alt="Michael Scott"
      />
      <AvatarFallback>MS</AvatarFallback>
    </Avatar>
  ),
};

export const Fallback: Story = {
  name: "Image Fallback",
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates fallback behavior when image sources fail to load or are unavailable. The avatar gracefully degrades to display user initials, ensuring consistent visual representation and maintaining interface reliability across varying network conditions.",
      },
    },
  },
  render: () => (
    <Avatar>
      <AvatarImage
        src="https://invalid.example/missing.jpg"
        alt="Jim Halpert"
      />
      <AvatarFallback>JH</AvatarFallback>
    </Avatar>
  ),
};

export const Group: Story = {
  name: "Grouped",
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates the AvatarGroup component for displaying multiple user identities in a compact, overlapping layout. Ideal for showing team members, collaborators, or participants in shared activities while conserving interface space.",
      },
    },
  },
  render: () => (
    <AvatarGroup>
      <Avatar>
        <AvatarImage
          src="https://picsum.photos/seed/dwight/160"
          alt="Dwight Schrute"
        />
        <AvatarFallback>DS</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          src="https://picsum.photos/seed/pam/160"
          alt="Pam Beesly"
        />
        <AvatarFallback>PB</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>KC</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>AM</AvatarFallback>
      </Avatar>
    </AvatarGroup>
  ),
};

export const Mixed: Story = {
  name: "Mixed Sources",
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates mixed avatar sources within a group, showing both successful image loads and fallback initials. This represents real-world scenarios where some users have profile images while others rely on text fallbacks, creating natural interface variation.",
      },
    },
  },
  render: () => (
    <AvatarGroup>
      <Avatar>
        <AvatarImage
          src="https://picsum.photos/seed/stanley/160"
          alt="Stanley Hudson"
        />
        <AvatarFallback>SH</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          src="https://invalid.example/offline.jpg"
          alt="Creed Bratton"
        />
        <AvatarFallback>CB</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>TO</AvatarFallback>
      </Avatar>
    </AvatarGroup>
  ),
};
