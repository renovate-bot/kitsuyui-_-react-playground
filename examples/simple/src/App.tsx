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
import useSound from 'use-sound'

import Sound from './sound_effects/24.wav'
import './App.css'

const Clock = () => {
  return (
    <ClockContainer refreshInterval={10}>
      <DateContext.Consumer>
        {(date: Date) => (
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

const Timer = () => {
  const [completeSound] = useSound(Sound, { playbackRate: 1 })
  return (
    <TimerContainer
      onStart={(e) => {
        console.log('start', e)
      }}
      onStop={(e) => {
        console.log('stop', e)
      }}
      onComplete={(e) => {
        console.log('complete', e)
        completeSound()
      }}
      onReset={(e) => {
        console.log('reset', e)
      }}
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
      onStart={(e) => {
        console.log('start', e)
      }}
      onStop={(e) => {
        console.log('stop', e)
      }}
      onReset={(e) => {
        console.log('reset', e)
      }}
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
