import React from 'react'
import { useState } from 'react'
import { useInterval } from 'react-use'

import type { TimerContainerProps } from './types'
export type * from './types'

// TODO: use Date instead of number when running
// TODO: Support leap second
export const TimerContext = React.createContext({
  remaining: 0,
  running: false,
  start() {
    /* do nothing */
  },
  stop() {
    /* do nothing */
  },
  toggle() {
    /* do nothing */
  },
  reset() {
    /* do nothing */
  },
  incrementTimerValue(_value: number) {
    /* do nothing */
  },
  setTimerValue(_value: number) {
    /* do nothing */
  },
})

export const TimerContainer: React.FunctionComponent<TimerContainerProps> = (
  props
): JSX.Element => {
  const { children } = props
  const [running, setRunning] = useState(false)
  const [remaining, setRemaining] = useState(0)

  const refreshInterval = props.refreshInterval || 10 // default 10ms
  const delayPerRefresh = refreshInterval / 1000

  // TODO: more precise way to measure time
  useInterval(() => {
    if (running) {
      setRemaining(remaining - delayPerRefresh)
      if (remaining <= 0) {
        setRemaining(0)
        setRunning(false)
      }
    }
  }, refreshInterval)

  function toggle() {
    if (running) {
      setRunning(false)
    } else {
      setRunning(true)
    }
  }

  return (
    <TimerContext.Provider
      value={{
        remaining,
        running,
        toggle,
        reset() {
          setRemaining(0)
        },
        start() {
          setRunning(true)
        },
        stop() {
          setRunning(false)
        },
        setTimerValue(value: number) {
          setRemaining(value || 0)
        },
        incrementTimerValue(value: number) {
          setRemaining(remaining + value)
        },
      }}
    >
      {children}
    </TimerContext.Provider>
  )
}
