import { Timer } from '@kitsuyui/react-style-bulma'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Timer> = {
  title: 'Bulma/Timer',
  component: Timer,
}

export default meta
type Story = StoryObj<typeof Timer>

export const Default: Story = {
  args: {},
}
