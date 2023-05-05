import { AnalogClock } from '@react-playground/clock'
import React from 'react'

export default {
  title: 'Clock',
  component: AnalogClock,
  argTypes: {
    date: {
      control: {
        type: 'date',
      },
    },
  },
}

AnalogClock.defaultProps = {
  date: new Date(),
  timezone: 'UTC',
}

const Template = (args) => <AnalogClock {...args} />

export const Default = Template.bind({})
Default.args = {
  date: new Date(),
  timezone: 'UTC',
}
