import { DateTime } from 'luxon'
import React from 'react'

import { ClockProps } from './types'

export interface AnalogClockDesign {
  bigHandColor: string
  smallHandColor: string
  secondHandColor: string
  bigHandWidth: number
  smallHandWidth: number
  secondHandWidth: number
  bigHandLength: number
  secondHandLength: number
  minuteHandLength: number
  width: number
  height: number
  frameSize: number
  frameWidth: number
  frameColor: string
  frameBackgroundColor: string
  centerPointSize: number
  centerPointColor: string
}

export const defaultAnalogClockDesign: AnalogClockDesign = {
  bigHandColor: 'black',
  smallHandColor: 'black',
  secondHandColor: 'red',
  bigHandWidth: 2,
  smallHandWidth: 2,
  secondHandWidth: 2,
  bigHandLength: 30,
  secondHandLength: 40,
  minuteHandLength: 40,
  width: 100,
  height: 100,
  frameSize: 45,
  frameWidth: 2,
  frameColor: 'black',
  frameBackgroundColor: 'white',
  centerPointSize: 2,
  centerPointColor: 'black',
}

export const AnalogClock: React.FunctionComponent<ClockProps> = (
  props
): JSX.Element => {
  const { timezone, date } = props
  const datetime = DateTime.fromJSDate(date)
  const dt = datetime.setZone(timezone)
  const hour = dt.hour
  const minute = dt.minute
  const second = dt.second
  const {
    bigHandColor,
    smallHandColor,
    secondHandColor,
    bigHandWidth,
    smallHandWidth,
    secondHandWidth,
    bigHandLength,
    secondHandLength,
    minuteHandLength,
    width,
    height,
    frameSize,
    frameWidth,
    frameColor,
    centerPointSize,
    centerPointColor,
    frameBackgroundColor,
  } = defaultAnalogClockDesign

  const centerX = width / 2
  const centerY = height / 2

  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <svg
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
      >
        <circle
          cx={centerX}
          cy={centerY}
          r={frameSize}
          stroke={frameColor}
          strokeWidth={frameWidth}
          fill={frameBackgroundColor}
        />
        <circle
          cx={centerX}
          cy={centerY}
          r={centerPointSize}
          stroke={centerPointColor}
          strokeWidth={centerPointSize}
          fill={centerPointColor}
        />
        <line
          x1={centerX}
          y1={centerY}
          x2={centerX + bigHandLength * hourToSin(hour)}
          y2={centerY - bigHandLength * hourToCos(hour)}
          stroke={bigHandColor}
          strokeWidth={bigHandWidth}
        />
        <line
          x1={centerX}
          y1={centerY}
          x2={centerX + minuteHandLength * minuteToSin(minute)}
          y2={centerY - minuteHandLength * minuteToCos(minute)}
          stroke={smallHandColor}
          strokeWidth={smallHandWidth}
        />
        <line
          x1={centerX}
          y1={centerY}
          x2={centerX + secondHandLength * secondToSin(second)}
          y2={centerY - secondHandLength * secondToCos(second)}
          stroke={secondHandColor}
          strokeWidth={secondHandWidth}
        />
      </svg>
    </div>
  )
}

function hourToDegree(hour: number) {
  return hour * 30
}

function secondToDegree(second: number) {
  return second * 6
}

function minuteToDegree(minute: number) {
  return minute * 6
}

function degreeToRadian(degree: number) {
  return degree * (Math.PI / 180)
}

function hourToSin(hour: number) {
  return Math.sin(degreeToRadian(hourToDegree(hour)))
}

function hourToCos(hour: number) {
  return Math.cos(degreeToRadian(hourToDegree(hour)))
}

function minuteToSin(minute: number) {
  return Math.sin(degreeToRadian(minuteToDegree(minute)))
}

function minuteToCos(minute: number) {
  return Math.cos(degreeToRadian(minuteToDegree(minute)))
}

function secondToSin(second: number) {
  return Math.sin(degreeToRadian(secondToDegree(second)))
}

function secondToCos(second: number) {
  return Math.cos(degreeToRadian(secondToDegree(second)))
}
