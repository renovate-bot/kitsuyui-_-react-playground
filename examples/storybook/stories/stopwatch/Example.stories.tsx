import { Stopwatch } from '@kitsuyui/react-components'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Stopwatch> = {
  title: 'Stopwatch/Example',
  component: Stopwatch,
}

export default meta
type Story = StoryObj<typeof Stopwatch>

export const Default: Story = {
  args: {
    onComplete: () => {
      return
    },
  },
}
