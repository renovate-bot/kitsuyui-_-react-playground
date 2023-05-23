import { DateTime } from 'luxon'

import type { StepStyle, HMS } from './types'

export function hourToDegree(hour: number): number {
  return hour * 30
}

export function secondToDegree(second: number): number {
  return second * 6
}

export function minuteToDegree(minute: number): number {
  return minute * 6
}

export function degreeToSin(degree: number): number {
  return Math.sin(degreeToRadian(degree))
}

export function degreeToCos(degree: number): number {
  return Math.cos(degreeToRadian(degree))
}

export function degreeToRadian(degree: number): number {
  return degree * (Math.PI / 180)
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

export function tickHMS(date: Date, timezone: string): HMS {
  const datetime = DateTime.fromJSDate(date)
  const dt = datetime.setZone(timezone)
  const hour = dt.hour
  const minute = dt.minute
  const second = dt.second
  return { hour, minute, second }
}

export function sweepHMS(date: Date, timezone: string): HMS {
  const datetime = DateTime.fromJSDate(date)
  const dt = datetime.setZone(timezone)
  const hour = dt.hour + dt.minute / 60 + dt.second / 3600
  const minute = dt.minute + dt.second / 60
  const second = dt.second + dt.millisecond / 1000
  return { hour, minute, second }
}
