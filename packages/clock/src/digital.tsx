import { DateTime } from 'luxon'
import React from 'react'

import { ClockProps } from './types'

export const DigitalClock: React.FunctionComponent<ClockProps> = (
  props
): JSX.Element => {
  const { timezone, date } = props
  const datetime = DateTime.fromJSDate(date)
  const dt = datetime.setZone(timezone)
  const hour = dt.hour % 12
  const hourStr = hour < 10 ? `0${hour}` : hour
  const minuteStr = dt.minute < 10 ? `0${dt.minute}` : dt.minute
  const secondStr = dt.second < 10 ? `0${dt.second}` : dt.second
  const ampm = dt.hour < 12 ? 'AM' : 'PM'
  return (
    <div
      style={{
        width: '20em',
        fontFamily: 'monospace',
      }}
    >
      {hourStr}:{minuteStr}:{secondStr} {ampm} ({timezone})
    </div>
  )
}
