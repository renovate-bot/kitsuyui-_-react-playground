import {
  AnalogClock,
  ClockContainer,
  DateContext,
  DigitalClock,
} from '@kitsuyui/react-clock'
import {
  StopwatchContainer,
  MinimalStopwatch,
  StopwatchContext,
  StopwatchProps,
} from '@kitsuyui/react-stopwatch'
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
    <TimerContainer
      onStart={() => console.log('start')}
      onStop={() => console.log('stop')}
      onComplete={() => console.log('complete')}
      onReset={() => console.log('reset')}
    >
      <TimerContext.Consumer>
        {(timer: TimerProps) => <MinimalTimer {...timer} />}
      </TimerContext.Consumer>
    </TimerContainer>
  )
}

const Stopwatch = () => {
  return (
    <StopwatchContainer
      onStart={() => console.log('start')}
      onStop={() => console.log('stop')}
      onReset={() => console.log('reset')}
    >
      <StopwatchContext.Consumer>
        {(props: StopwatchProps) => <MinimalStopwatch {...props} />}
      </StopwatchContext.Consumer>
    </StopwatchContainer>
  )
}

function App() {
  return (
    <div className="App">
      <Clock />
      <Timer />
      <Stopwatch />
    </div>
  )
}

export default App
