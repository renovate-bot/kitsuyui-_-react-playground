import React from 'react'

import {
  degreeToCos,
  degreeToSin,
  hourToDegree,
  minuteToDegree,
  secondToDegree,
  calcHMS,
} from './math'
import { ClockProps, StepStyle } from './types'

export interface AnalogClockStyle {
  width: number
  height: number
  step: StepStyle
  bigHand: HandStyle
  smallHand: HandStyle
  secondHand: HandStyle
  frame: FrameStyle
  centerPoint: CenterPointStyle
}

export interface HandStyle {
  width: number
  length: number
  color: string
}

export interface FrameStyle {
  size: number
  width: number
  color: string
  backgroundColor: string
}

export interface CenterPointStyle {
  size: number
  color: string
}

export const defaultAnalogClockStyle: AnalogClockStyle = {
  width: 100,
  height: 100,
  step: 'tick',
  bigHand: {
    width: 2,
    length: 30,
    color: 'black',
  },
  smallHand: {
    width: 2,
    length: 40,
    color: 'black',
  },
  secondHand: {
    width: 2,
    length: 40,
    color: 'red',
  },
  frame: {
    size: 45,
    width: 2,
    color: 'black',
    backgroundColor: 'white',
  },
  centerPoint: {
    size: 2,
    color: 'black',
  },
}

interface AnalogClockCustomize {
  step?: StepStyle
  width?: number
  height?: number
  bigHand?: Partial<HandStyle>
  smallHand?: Partial<HandStyle>
  secondHand?: Partial<HandStyle>
  frame?: Partial<FrameStyle>
  centerPoint?: Partial<CenterPointStyle>
}

type AnalogClockProps = ClockProps & AnalogClockCustomize

export const AnalogClock: React.FC<AnalogClockProps> = (props): JSX.Element => {
  const { timezone, date } = props
  const {
    width,
    height,
    bigHand: bigHandStyle,
    smallHand: smallHandStyle,
    secondHand: secondHandStyle,
    frame: frameStyle,
    step: stepStyle,
    centerPoint: centerPointStyle,
  } = customizeClockProps(props)
  const { hour, minute, second } = calcHMS(date, timezone, stepStyle)
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
          r={frameStyle.size}
          stroke={frameStyle.color}
          strokeWidth={frameStyle.width}
          fill={frameStyle.backgroundColor}
        />
        <circle
          cx={centerX}
          cy={centerY}
          r={centerPointStyle.size}
          stroke={centerPointStyle.color}
          strokeWidth={centerPointStyle.size}
          fill={centerPointStyle.color}
        />
        <Hand
          centerX={centerX}
          centerY={centerY}
          degree={hourToDegree(hour)}
          {...bigHandStyle}
        />
        <Hand
          centerX={centerX}
          centerY={centerY}
          degree={minuteToDegree(minute)}
          {...smallHandStyle}
        />
        <Hand
          centerX={centerX}
          centerY={centerY}
          degree={secondToDegree(second)}
          {...secondHandStyle}
        />
      </svg>
    </div>
  )
}

export const Hand: React.FC<
  {
    centerX: number
    centerY: number
    degree: number
  } & HandStyle
> = (props) => {
  const { centerX, centerY, degree, length, width, color } = props
  const x = centerX + length * degreeToSin(degree)
  const y = centerY - length * degreeToCos(degree)
  return (
    <line
      x1={centerX}
      y1={centerY}
      x2={x}
      y2={y}
      stroke={color}
      strokeWidth={width}
    />
  )
}

function customizeClockProps(
  customize: AnalogClockCustomize
): AnalogClockStyle {
  const {
    width,
    height,
    step,
    bigHand,
    smallHand,
    secondHand,
    frame: frameStyle,
    centerPoint: centerPointStyle,
  } = {
    ...defaultAnalogClockStyle,
    ...customize,
  }
  return {
    width,
    height,
    step,
    bigHand: {
      ...defaultAnalogClockStyle.bigHand,
      ...bigHand,
    },
    smallHand: {
      ...defaultAnalogClockStyle.smallHand,
      ...smallHand,
    },
    secondHand: {
      ...defaultAnalogClockStyle.secondHand,
      ...secondHand,
    },
    frame: {
      ...defaultAnalogClockStyle.frame,
      ...frameStyle,
    },
    centerPoint: {
      ...defaultAnalogClockStyle.centerPoint,
      ...centerPointStyle,
    },
  }
}
