import React from 'react'
import { useState } from 'react'
import { useInterval } from 'react-use'

import AnalogClock from './analog'
import DigitalClock from './digital'
import { ClockProps } from './types'

export const DateContext = React.createContext(new Date())

type ClockContainerProps = {
  children: React.ReactElement | React.ReactElement[]
  refreshInterval?: number
}

export const ClockContainer: React.FunctionComponent<ClockContainerProps> = (
  props
): JSX.Element => {
  const { children } = props
  const [date, setDate] = useState(new Date())
  const refreshInterval = props.refreshInterval || 1000 // default 1 second

  // use useInterval instead of setInterval
  // https://github.com/streamich/react-use/blob/master/docs/useInterval.md
  useInterval(() => {
    setDate(new Date())
  }, refreshInterval)

  return <DateContext.Provider value={date}>{children}</DateContext.Provider>
}

export { AnalogClock, DigitalClock }
export type { ClockProps }
