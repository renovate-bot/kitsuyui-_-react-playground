import { render } from '@testing-library/react'
import React from 'react'

import { Clock, Stopwatch, Timer } from '.'

test('render Clock', () => {
  render(<Clock />)
})

test('render Stopwatch', () => {
  render(<Stopwatch />)
})

test('render Timer', () => {
  render(<Timer />)
})
