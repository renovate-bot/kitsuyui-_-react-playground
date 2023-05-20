import { AnalogClock } from '@kitsuyui/react-clock'
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
  // https://museum.seiko.co.jp/en/knowledge/trivia01/
  date: new Date('2023-01-01T10:08:42Z'),
  timezone: 'UTC',
}

const Template = (args) => <AnalogClock {...args} />

export const Default = Template.bind({})
Default.args = {
  date: new Date('2023-01-01T10:08:42Z'),
  timezone: 'UTC',
}
