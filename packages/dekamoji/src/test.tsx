import { render, screen } from '@testing-library/react'
import React from 'react'

import { Dekamoji } from './dekamoji'

test('render Dekamoji', () => {
  render(<Dekamoji>あ</Dekamoji>)
  const element = screen.getByText(/あ/)
  expect(element).not.toBeNull()
})
