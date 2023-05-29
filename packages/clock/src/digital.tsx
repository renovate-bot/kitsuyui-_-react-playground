import { DateTime } from 'luxon'
import React from 'react'

import { ClockProps } from './types'
import { zeroPad2 } from './utils'

export const DigitalClock: React.FC<ClockProps> = (props): JSX.Element => {
  const { timezone, date } = props
  const datetime = DateTime.fromJSDate(date)
  const dt = datetime.setZone(timezone)
  const hour = dt.hour % 12
  const hourStr = zeroPad2(hour)
  const minuteStr = zeroPad2(dt.minute)
  const secondStr = zeroPad2(dt.second)
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
