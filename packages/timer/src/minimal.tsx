import React from 'react'

import type { TimerProps } from './types'
export type * from './types'
export * from './container'

export function toLabel(value: number) {
  const twoDigit = new Intl.NumberFormat('en-US', {
    minimumIntegerDigits: 2,
  })
  const threeDigit = new Intl.NumberFormat('en-US', {
    minimumIntegerDigits: 3,
  })

  const minutes = Math.floor(value / 60)
  const seconds = value % 60 | 0
  const milliseconds = (value % 1) * 1000
  return `${twoDigit.format(minutes)}:${twoDigit.format(
    seconds
  )}.${threeDigit.format(milliseconds)}`
}

export const MinimalTimer: React.FunctionComponent<TimerProps> = (
  props
): JSX.Element => {
  const { remaining, running, incrementTimerValue, toggle, reset } = props

  return (
    <div
      style={{
        border: '1px solid black',
        width: '6em',
      }}
    >
      <form>
        <span>{toLabel(remaining)}</span>
        <br />
        <button
          type="submit"
          name="incrementMinute"
          onClick={(e) => {
            e.preventDefault()
            incrementTimerValue(60)
          }}
        >
          +分
        </button>
        <button
          type="submit"
          name="incrementSecond"
          onClick={(e) => {
            e.preventDefault()
            incrementTimerValue(1)
          }}
        >
          +秒
        </button>
        <br />
        <button
          type="submit"
          name="reset"
          onClick={(e) => {
            e.preventDefault()
            reset()
          }}
        >
          Reset
        </button>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault()
            toggle()
          }}
        >
          {running ? 'Stop' : 'Start'}
        </button>
      </form>
    </div>
  )
}
