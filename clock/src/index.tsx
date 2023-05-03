import React from 'react'
import { useState } from 'react'
import { useInterval } from 'react-use'


export default function Clock() {
  const [date, setDate] = useState(new Date())

  // use useInterval instead of setInterval
  // https://github.com/streamich/react-use/blob/master/docs/useInterval.md
  useInterval(() => {
    setDate(new Date())
  }, 1000)

  return <div>{date.toLocaleTimeString()}</div>
}
