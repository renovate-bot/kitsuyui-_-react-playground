import {
  AnalogClock,
  ClockContainer,
  DateContext,
  DigitalClock,
} from '@kitsuyui/react-clock'
import React from 'react'

const Clock = () => {
  return (
    <ClockContainer refreshInterval={10}>
      <DateContext.Consumer>
        {(date) => (
          <>
            <AnalogClock timezone="Asia/Tokyo" date={date} />
            <DigitalClock timezone="Asia/Tokyo" date={date} />
            <AnalogClock
              timezone="America/New_York"
              date={date}
              step="sweep"
              face="roman"
            />
            <DigitalClock timezone="America/New_York" date={date} />
          </>
        )}
      </DateContext.Consumer>
    </ClockContainer>
  )
}

export default {
  title: 'Clock',
  component: Clock,
  argTypes: {},
}

Clock.defaultProps = {}

const Template = (args) => <Clock {...args} />

export const Default = Template.bind({})
