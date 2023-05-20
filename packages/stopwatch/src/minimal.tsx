import React from 'react'

import type { StopwatchProps } from './types'
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

export const MinimalStopwatch: React.FunctionComponent<StopwatchProps> = (
  props
): JSX.Element => {
  const { elapsedTime, running, toggle, reset } = props

  return (
    <div
      style={{
        width: '6em',
        fontFamily: 'monospace',
      }}
    >
      <form>
        <span>{toLabel(elapsedTime)}</span>
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
