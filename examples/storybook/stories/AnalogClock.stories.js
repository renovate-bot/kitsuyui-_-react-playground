import { AnalogClock } from '@kitsuyui/react-clock'
import React from 'react'

export default {
  title: 'AnalogClock',
  component: AnalogClock,
  argTypes: {
    date: {
      control: {
        type: 'date',
      },
    },
    timezone: {
      control: { type: 'select' },
      options: ['UTC', 'Asia/Tokyo'],
    },
    face: {
      control: { type: 'select' },
      options: ['arabic', 'roman'],
    },
    step: {
      control: { type: 'select' },
      options: ['tick', 'sweep'],
    },
  },
}

AnalogClock.defaultProps = {
  // https://museum.seiko.co.jp/en/knowledge/trivia01/
  date: new Date('2023-01-01T10:08:42Z'),
  timezone: 'UTC',
  face: 'arabic',
  step: 'tick',
}

const Template = (args) => <AnalogClock {...args} />

export const Default = Template.bind({})
Default.args = {
  face: 'arabic',
}

export const Roman = Template.bind({})
Roman.args = {
  face: 'roman',
}

export const Sweep = Template.bind({})
Sweep.args = {
  step: 'sweep',
}

export const Tokyo = Template.bind({})
Tokyo.args = {
  timezone: 'Asia/Tokyo',
}
