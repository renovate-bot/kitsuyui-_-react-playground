import { render } from '@testing-library/react'
import React from 'react'

import { MinimalStopwatch } from '.'

test('render MinimalStopwatch', () => {
  const props = {
    remaining: 1000,
    running: false,
    toggle: jest.fn(),
    reset: jest.fn(),
    start: jest.fn(),
    stop: jest.fn(),
  }
  const { asFragment } = render(<MinimalStopwatch {...props} />)
  expect(asFragment()).toMatchSnapshot()
})
