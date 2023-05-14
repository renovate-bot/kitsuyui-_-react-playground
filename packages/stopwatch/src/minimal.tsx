import React from 'react'

import type { StopwatchProps } from './types'
export type * from './types'
export * from './container'

export const MinimalStopwatch: React.FunctionComponent<StopwatchProps> = (
  props
): JSX.Element => {
  const { elapsedTime, running, toggle, reset } = props

  function toLabel(value: number) {
    const minutes = Math.floor(value / 60)
    const seconds = value % 60
    return `${fmt.format(minutes)}:${fmt.format(seconds)}`
  }

  const fmt = new Intl.NumberFormat('en-US', {
    minimumIntegerDigits: 2,
  })

  return (
    <div
      style={{
        border: '1px solid black',
        width: '6em',
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
