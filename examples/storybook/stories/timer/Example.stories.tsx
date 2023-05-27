import { Timer as OrigTimer } from '@kitsuyui/react-components'
import React from 'react'
import useSound from 'use-sound'

import type { Meta, StoryObj } from '@storybook/react'

const Timer = () => {
  const [completeSound] = useSound('/sound_effects/24.wav', { playbackRate: 1 })
  return (
    <OrigTimer
      onComplete={() => {
        return completeSound()
      }}
    />
  )
}

const meta: Meta<typeof Timer> = {
  title: 'Base/Timer/Example',
  component: Timer,
}

export default meta
type Story = StoryObj<typeof Timer>

export const Default: Story = {
  args: {
    onComplete: () => {
      return
    },
  },
}
