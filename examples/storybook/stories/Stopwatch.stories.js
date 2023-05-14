import { MinimalStopwatch } from '@kitsuyui/react-stopwatch'
import React from 'react'

export default {
  title: 'Stopwatch',
  component: MinimalStopwatch,
  argTypes: {
    elapsedTime: {
      control: {
        type: 'number',
      },
    },
    running: {
      control: {
        type: 'boolean',
      },
    },
    toggle: {
      action: 'toggle',
    },
    reset: {
      action: 'reset',
    },
    start: {
      action: 'start',
    },
    stop: {
      action: 'stop',
    },
  },
}

MinimalStopwatch.defaultProps = {
  remaining: new Date(),
  running: false,
  toggle() {
    /* do nothing */
  },
  reset() {
    /* do nothing */
  },
  start() {
    /* do nothing */
  },
  stop() {
    /* do nothing */
  },
  setTimerValue(_) {
    /* do nothing */
  },
  incrementTimerValue(_) {
    /* do nothing */
  },
}

const Template = (args) => <MinimalStopwatch {...args} />

export const Default = Template.bind({})
Default.args = {
  elapsedTime: 1234,
  running: false,
  toggle() {
    /* do nothing */
  },
  reset() {
    /* do nothing */
  },
  start() {
    /* do nothing */
  },
  stop() {
    /* do nothing */
  },
}
