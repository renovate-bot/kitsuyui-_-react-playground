import { render } from '@testing-library/react'
import React from 'react'

import { AnalogClock, DigitalClock } from '.'

test('renders learn react link', () => {
  const dt = new Date('2021-01-01T00:00:00Z')
  render(<AnalogClock timezone="Asia/Tokyo" date={dt} />)
  render(<DigitalClock timezone="Asia/Tokyo" date={dt} />)
})
