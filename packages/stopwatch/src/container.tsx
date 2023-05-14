import React from 'react'
import { useState } from 'react'
import { useInterval } from 'react-use'

import type { StopwatchContainerProps } from './types'
export type * from './types'

// TODO: use Date instead of number when running
// TODO: Support leap second
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

export const StopwatchContainer: React.FunctionComponent<
  StopwatchContainerProps
> = (props): JSX.Element => {
  const { children } = props
  const [running, setRunning] = useState(false)
  const [elapsedTime, setElapsedTime] = useState(0)

  const refreshInterval = props.refreshInterval || 10 // default 10ms
  const delayPerRefresh = refreshInterval / 1000

  // TODO: more precise way to measure time
  useInterval(() => {
    if (running) {
      setElapsedTime(elapsedTime + delayPerRefresh)
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
    <StopwatchContext.Provider
      value={{
        elapsedTime,
        running,
        toggle,
        reset() {
          if (running) {
            setRunning(false)
          }
          setElapsedTime(0)
        },
        start() {
          setRunning(true)
        },
        stop() {
          setRunning(false)
        },
      }}
    >
      {children}
    </StopwatchContext.Provider>
  )
}
