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
  hourLines: LinesStyle
  minuteLines: LinesStyle
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

export interface LinesStyle {
  width: number
  length: number
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
    width: 1,
    color: 'black',
    backgroundColor: 'white',
  },
  centerPoint: {
    size: 2,
    color: 'black',
  },
  hourLines: {
    width: 1,
    length: 4,
    color: 'black',
  },
  minuteLines: {
    width: 1,
    length: 2,
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
  hourLines?: Partial<LinesStyle>
  minuteLines?: Partial<LinesStyle>
}

type AnalogClockProps = ClockProps & AnalogClockCustomize

export const AnalogClock: React.FC<AnalogClockProps> = (props): JSX.Element => {
  const { timezone, date } = props
  const {
    width,
    height,
    bigHand,
    smallHand,
    secondHand,
    frame,
    step,
    centerPoint,
    hourLines,
    minuteLines,
  } = customizeClockProps(props)
  const { hour, minute, second } = calcHMS(date, timezone, step)
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
          r={frame.size}
          stroke={frame.color}
          strokeWidth={frame.width}
          fill={frame.backgroundColor}
        />
        <circle
          cx={centerX}
          cy={centerY}
          r={centerPoint.size}
          stroke={centerPoint.color}
          strokeWidth={centerPoint.size}
          fill={centerPoint.color}
        />
        <HourLines
          centerX={centerX}
          centerY={centerY}
          radius={frame.size - hourLines.length}
          length={hourLines.length}
          width={hourLines.width}
          color={hourLines.color}
        />
        <MinutesLines
          centerX={centerX}
          centerY={centerY}
          radius={frame.size - minuteLines.length}
          length={minuteLines.length}
          width={minuteLines.width}
          color={minuteLines.color}
        />
        <Hand
          centerX={centerX}
          centerY={centerY}
          degree={hourToDegree(hour)}
          {...bigHand}
        />
        <Hand
          centerX={centerX}
          centerY={centerY}
          degree={minuteToDegree(minute)}
          {...smallHand}
        />
        <Hand
          centerX={centerX}
          centerY={centerY}
          degree={secondToDegree(second)}
          {...secondHand}
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

const HourLines = (props: {
  centerX: number
  centerY: number
  radius: number
  length: number
  width: number
  color: string
}) => {
  const { centerX, centerY, radius, width, color, length } = props
  return (
    <Lines
      centerX={centerX}
      centerY={centerY}
      radius={radius}
      length={length}
      count={12}
      width={width}
      color={color}
    />
  )
}

const MinutesLines = (props: {
  centerX: number
  centerY: number
  radius: number
  length: number
  width: number
  color: string
}) => {
  const { centerX, centerY, radius, width, color, length } = props
  return (
    <Lines
      centerX={centerX}
      centerY={centerY}
      radius={radius}
      length={length}
      count={60}
      width={width}
      color={color}
    />
  )
}

const Lines = (props: {
  centerX: number
  centerY: number
  radius: number
  length: number
  count: number
  width: number
  color: string
}) => {
  const { centerX, centerY, radius, length, count, width, color } = props
  const lines = []
  for (let i = 0; i < count; i++) {
    const degree = (360 / count) * i
    const x1 = centerX + radius * degreeToSin(degree)
    const y1 = centerY + radius * degreeToCos(degree)
    const x2 = x1 + length * degreeToSin(degree)
    const y2 = y1 + length * degreeToCos(degree)
    lines.push(
      <line
        key={i}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={color}
        strokeWidth={width}
      />
    )
  }
  return <>{lines}</>
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
    frame,
    centerPoint,
    hourLines,
    minuteLines,
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
      ...frame,
    },
    centerPoint: {
      ...defaultAnalogClockStyle.centerPoint,
      ...centerPoint,
    },
    hourLines: {
      ...defaultAnalogClockStyle.hourLines,
      ...hourLines,
    },
    minuteLines: {
      ...defaultAnalogClockStyle.minuteLines,
      ...minuteLines,
    },
  }
}
