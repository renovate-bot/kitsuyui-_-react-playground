import {
  AnalogClock,
  ClockContainer,
  DateContext,
  DigitalClock,
} from '@kitsuyui/react-clock'
import {
  MinimalTimer,
  TimerContainer,
  TimerContext,
  TimerProps,
} from '@kitsuyui/react-timer'
import React from 'react'

import './App.css'

const Clock = () => {
  return (
    <ClockContainer>
      <DateContext.Consumer>
        {(date: Date) => (
          <>
            <AnalogClock timezone="Asia/Tokyo" date={date} />
            <DigitalClock timezone="Asia/Tokyo" date={date} />
            <AnalogClock timezone="America/New_York" date={date} />
            <DigitalClock timezone="America/New_York" date={date} />
          </>
        )}
      </DateContext.Consumer>
    </ClockContainer>
  )
}

const Timer = () => {
  return (
    <TimerContainer>
      <TimerContext.Consumer>
        {(timer: TimerProps) => <MinimalTimer {...timer} />}
      </TimerContext.Consumer>
    </TimerContainer>
  )
}

function App() {
  return (
    <div className="App">
      <Clock />
      <Timer />
    </div>
  )
}

export default App
