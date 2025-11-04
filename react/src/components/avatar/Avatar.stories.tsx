import type { Meta, StoryObj } from '@storybook/react-vite'
import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from './Avatar'

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `\nThe **Avatar** component renders a user or entity representation via an image with automatic text fallback. It focuses on clarity, consistency, and graceful degradation.\n\n## When To Use\n- Identify people in lists, comments, activity feeds.\n- Represent ownership (project, team) or status.\n- Group participants in collaborative views.\n\n## Features\n- **Image + Fallback**: Falls back to initials when the image cannot load.\n- **Grouping**: Compact overlap layout for sets of identities.\n- **Composable**: Use \`AvatarImage\`, \`AvatarFallback\`, and \`AvatarGroup\`.\n- **Accessible**: Meaningful \`alt\` text; fallback letters announced as normal text.\n\n## Accessibility Notes\n- Keep \`alt\` concise (the subject only).\n- Provide contrast around circular bounds.\n- Avoid empty fallback content; supply initials.\n\n## Stories\nBasic usage, image failure fallback, grouped avatars, and mixed image/fallback sets.\n        `,
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Avatar>

export const Basic: Story = {
  name: 'Basic',
  parameters: {
    docs: {
      description: { story: 'Single avatar with a successful image load.' },
    },
  },
  render: () => (
    <Avatar>
      <AvatarImage src="https://picsum.photos/seed/user-a/160" alt="User A" />
      <AvatarFallback>UA</AvatarFallback>
    </Avatar>
  ),
}

export const Fallback: Story = {
  name: 'Image Fallback',
  parameters: {
    docs: {
      description: { story: 'Shows initials when the image source is unreachable.' },
    },
  },
  render: () => (
    <Avatar>
      <AvatarImage src="https://invalid.example/missing.jpg" alt="User B" />
      <AvatarFallback>UB</AvatarFallback>
    </Avatar>
  ),
}

export const Group: Story = {
  name: 'Grouped',
  parameters: {
    docs: {
      description: { story: 'Compact overlapping avatars for multiple participants.' },
    },
  },
  render: () => (
    <AvatarGroup>
      <Avatar>
        <AvatarImage src="https://picsum.photos/seed/user-c/160" alt="User C" />
        <AvatarFallback>UC</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://picsum.photos/seed/user-d/160" alt="User D" />
        <AvatarFallback>UD</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>UE</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>UF</AvatarFallback>
      </Avatar>
    </AvatarGroup>
  ),
}

export const Mixed: Story = {
  name: 'Mixed Sources',
  parameters: {
    docs: {
      description: { story: 'Combines loaded images and fallback initials inside a group.' },
    },
  },
  render: () => (
    <AvatarGroup>
      <Avatar>
        <AvatarImage src="https://picsum.photos/seed/user-g/160" alt="User G" />
        <AvatarFallback>UG</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://invalid.example/offline.jpg" alt="User H" />
        <AvatarFallback>UH</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>UI</AvatarFallback>
      </Avatar>
    </AvatarGroup>
  ),
}
