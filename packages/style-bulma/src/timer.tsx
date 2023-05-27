import { TimerContainer, TimerContext, TimerProps } from '@kitsuyui/react-timer'
import React from 'react'

import 'bulma/css/bulma.css'

export const TimerElement = (props: TimerProps) => {
  const { remaining, running } = props
  const { reset, toggle, incrementTimerValue } = props
  const minutes = Math.floor(remaining / 60)
  const seconds = remaining % 60 | 0
  const milliseconds = (remaining % 1) * 1000
  const fmt = Intl.NumberFormat('en-US', {
    minimumIntegerDigits: 2,
  })
  const milliFmt = Intl.NumberFormat('en-US', {
    minimumIntegerDigits: 3,
  })
  const remainingString = `${fmt.format(minutes)}:${fmt.format(
    seconds
  )}:${milliFmt.format(milliseconds)}`

  return (
    <div className="card">
      <div className="card-content">
        <p className="title is-family-monospace">{remainingString}</p>
      </div>
      <footer className="card-footer">
        <span
          className="card-footer-item is-clickable"
          onClick={(e) => {
            e.preventDefault()
            incrementTimerValue(60)
          }}
        >
          +1m
        </span>
        <span
          className="card-footer-item is-clickable"
          onClick={(e) => {
            e.preventDefault()
            incrementTimerValue(1)
          }}
        >
          +1s
        </span>
        <span
          className={
            'card-footer-item ' +
            (running || remaining !== 0 ? 'is-clickable' : 'disable')
          }
          onClick={reset}
        >
          Reset
        </span>
        <span className="card-footer-item is-clickable" onClick={toggle}>
          {running ? 'Stop' : 'Start'}
        </span>
      </footer>
    </div>
  )
}

export const Timer = ({ onComplete }: { onComplete?: () => void }) => {
  return (
    <TimerContainer onComplete={onComplete}>
      <TimerContext.Consumer>
        {(timer: TimerProps) => <TimerElement {...timer} />}
      </TimerContext.Consumer>
    </TimerContainer>
  )
}
