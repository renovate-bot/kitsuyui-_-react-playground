import { MinimalTimer } from '@kitsuyui/react-timer'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof MinimalTimer> = {
  title: 'Timer/Minimal',
  component: MinimalTimer,
}

export default meta
type Story = StoryObj<typeof MinimalTimer>

export const Default: Story = {
  args: {
    remaining: 1234,
    running: false,
  },
}
