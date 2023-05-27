import { Clock } from '@kitsuyui/react-style-bulma'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Clock> = {
  title: 'Bulma/Clock',
  component: Clock,
}

export default meta
type Story = StoryObj<typeof Clock>

export const Default: Story = {
  args: {},
}
