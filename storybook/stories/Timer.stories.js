import { MinimalTimer } from '@kitsuyui/react-timer'
import React from 'react'

export default {
  title: 'Timer',
  component: MinimalTimer,
  argTypes: {
    remaining: {
      control: {
        type: 'date',
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
    setTimerValue: {
      action: 'setTimerValue',
    },
    incrementTimerValue: {
      action: 'incrementTimerValue',
    },
  },
}

MinimalTimer.defaultProps = {
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

const Template = (args) => <MinimalTimer {...args} />

export const Default = Template.bind({})
Default.args = {
  remaining: 1234,
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
