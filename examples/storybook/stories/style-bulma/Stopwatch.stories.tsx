import { Stopwatch } from '@kitsuyui/react-style-bulma'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Stopwatch> = {
  title: 'Bulma/Stopwatch',
  component: Stopwatch,
}

export default meta
type Story = StoryObj<typeof Stopwatch>

export const Default: Story = {
  args: {},
}
