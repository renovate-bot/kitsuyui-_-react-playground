import { render, screen } from '@testing-library/react'
import React from 'react'

import App from './App'

test('renders clock', () => {
  render(<App />)
  const clock = screen.getByText(/Asia\/Tokyo/i)
  expect(clock).toBeInTheDocument()
})
