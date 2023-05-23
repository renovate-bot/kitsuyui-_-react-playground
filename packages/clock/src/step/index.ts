import { DateTime } from 'luxon'

export type StepStyle = 'tick' | 'sweep'

interface HMS {
  hour: number
  minute: number
  second: number
}

export function calcHMS(
  date: Date,
  timezone: string,
  stepStyle: StepStyle
): HMS {
  switch (stepStyle) {
    case 'tick':
      return tickHMS(date, timezone)
    case 'sweep':
      return sweepHMS(date, timezone)
  }
}

/**
 * tick represents a clock hand that moves in discrete steps
 */
export function tickHMS(date: Date, timezone: string): HMS {
  const datetime = DateTime.fromJSDate(date)
  const dt = datetime.setZone(timezone)
  const hour = dt.hour
  const minute = dt.minute
  const second = dt.second
  return { hour, minute, second }
}

/**
 * sweep represents a clock hand that moves smoothly
 */
export function sweepHMS(date: Date, timezone: string): HMS {
  const datetime = DateTime.fromJSDate(date)
  const dt = datetime.setZone(timezone)
  const hour = dt.hour + dt.minute / 60 + dt.second / 3600
  const minute = dt.minute + dt.second / 60
  const second = dt.second + dt.millisecond / 1000
  return { hour, minute, second }
}
