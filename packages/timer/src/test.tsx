import { render } from '@testing-library/react'
import React from 'react'

import { MinimalTimer } from '.'

test('render MinimalTimer', () => {
  const props = {
    remaining: 1000,
    running: false,
    incrementTimerValue: jest.fn(),
    toggle: jest.fn(),
    reset: jest.fn(),
    start: jest.fn(),
    stop: jest.fn(),
    setTimerValue: jest.fn(),
  }
  const { asFragment } = render(<MinimalTimer {...props} />)
  expect(asFragment()).toMatchSnapshot()
})
