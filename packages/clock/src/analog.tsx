import { DateTime } from 'luxon'
import React from 'react'

import { ClockProps } from './types'

export const AnalogClock: React.FunctionComponent<ClockProps> = (
  props
): JSX.Element => {
  const { timezone, date } = props
  const datetime = DateTime.fromJSDate(date)
  const dt = datetime.setZone(timezone)
  const hour = dt.hour
  const minute = dt.minute
  const second = dt.second
  const bigHandColor = 'black'
  const smallHandColor = 'black'
  const secondHandColor = 'red'
  const bigHandWidth = 2
  const smallHandWidth = 2
  const secondHandWidth = 2
  const bigHandLength = 30
  const secondHandLength = 40
  const minuteHandLength = 40
  const centerX = 50
  const centerY = 50
  return (
    <div
      style={{
        width: '100px',
        height: '100px',
      }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
      >
        <circle
          cx={centerX}
          cy={centerY}
          r="45"
          stroke="black"
          strokeWidth="2"
          fill="white"
        />
        <circle
          cx={centerX}
          cy={centerY}
          r="2"
          stroke="black"
          strokeWidth="2"
          fill="black"
        />
        <line
          x1={centerX}
          y1={centerY}
          x2={centerX + bigHandLength * Math.sin(hour * 30 * (Math.PI / 180))}
          y2={centerY - bigHandLength * Math.cos(hour * 30 * (Math.PI / 180))}
          stroke={bigHandColor}
          strokeWidth={bigHandWidth}
        />
        <line
          x1={centerX}
          y1={centerY}
          x2={
            centerX + minuteHandLength * Math.sin(minute * 6 * (Math.PI / 180))
          }
          y2={
            centerY - minuteHandLength * Math.cos(minute * 6 * (Math.PI / 180))
          }
          stroke={smallHandColor}
          strokeWidth={smallHandWidth}
        />
        <line
          x1={centerX}
          y1={centerY}
          x2={
            centerX + secondHandLength * Math.sin(second * 6 * (Math.PI / 180))
          }
          y2={
            centerY - secondHandLength * Math.cos(second * 6 * (Math.PI / 180))
          }
          stroke={secondHandColor}
          strokeWidth={secondHandWidth}
        />
      </svg>
    </div>
  )
}
