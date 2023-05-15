import React from 'react'
import { useState } from 'react'
import { useInterval } from 'react-use'

import type { TimerContainerProps } from './types'
export type * from './types'

// TODO: Support leap second: https://github.com/kitsuyui/react-playground/issues/40
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

export function calcRemaining(targetDate: Date) {
  return (targetDate.getTime() - new Date().getTime()) / 1000
}

export const TimerContainer: React.FunctionComponent<TimerContainerProps> = (
  props
): JSX.Element => {
  const { children } = props
  const [running, setRunning] = useState(false)
  const [targetDate, setTargetDate] = useState(new Date())
  const [remaining, setRemaining] = useState(0)

  const refreshInterval = props.refreshInterval || 10 // default 10ms

  useInterval(() => {
    if (running) {
      const remaining = calcRemaining(targetDate)
      setRemaining(remaining)
      if (remaining <= 0) {
        setRemaining(0)
        setRunning(false)
      }
    }
  }, refreshInterval)

  function toggle() {
    if (running) {
      stop()
    } else {
      start()
    }
  }

  function reset() {
    if (running) {
      stop()
    }
    setRemaining(0)
  }

  function start() {
    setTargetDate(new Date(Date.now() + remaining * 1000))
    setRunning(true)
  }

  function stop() {
    setRunning(false)
  }

  return (
    <TimerContext.Provider
      value={{
        remaining,
        running,
        toggle,
        reset,
        start,
        stop,
        setTimerValue(value: number) {
          stop()
          setRemaining(value || 0)
        },
        incrementTimerValue(value: number) {
          stop()
          setRemaining(remaining + value)
        },
      }}
    >
      {children}
    </TimerContext.Provider>
  )
}
