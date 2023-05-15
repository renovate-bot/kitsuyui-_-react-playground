import React from 'react'
import { useState } from 'react'
import { useInterval } from 'react-use'

import type { StopwatchContainerProps } from './types'
export type * from './types'

// TODO: Support leap second: https://github.com/kitsuyui/react-playground/issues/40
export const StopwatchContext = React.createContext({
  elapsedTime: 0,
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
})

export function calcTimeDiff(startTime: Date, endTime: Date) {
  return (endTime.getTime() - startTime.getTime()) / 1000
}

function calcElapsedTime(startTime: Date) {
  return calcTimeDiff(startTime, new Date())
}

export const StopwatchContainer: React.FunctionComponent<
  StopwatchContainerProps
> = (props): JSX.Element => {
  const { children } = props
  const [running, setRunning] = useState(false)
  const [elapsedTimeInLap, setElapsedTimeInLap] = useState(0)
  const [elapsedTimeTotal, setElapsedTimeTotal] = useState(0)
  const [startTime, setStartTime] = useState(new Date())

  const refreshInterval = props.refreshInterval || 10 // default 10ms

  useInterval(() => {
    if (running) {
      updateElapsedTime()
    }
  }, refreshInterval)

  function updateElapsedTime() {
    setElapsedTimeInLap(calcElapsedTime(startTime))
  }

  function moveLapToTotal() {
    setElapsedTimeTotal(elapsedTimeTotal + elapsedTimeInLap)
    setElapsedTimeInLap(0)
  }

  function start() {
    if (running) {
      return
    }
    setStartTime(new Date())
    setRunning(true)
  }

  function stop() {
    if (!running) {
      return
    }
    updateElapsedTime()
    setRunning(false)
    moveLapToTotal()
  }

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
    setElapsedTimeInLap(0)
    setElapsedTimeTotal(0)
  }

  const elapsedTime = elapsedTimeInLap + elapsedTimeTotal

  return (
    <StopwatchContext.Provider
      value={{
        elapsedTime,
        running,
        toggle,
        reset,
        start,
        stop,
      }}
    >
      {children}
    </StopwatchContext.Provider>
  )
}
