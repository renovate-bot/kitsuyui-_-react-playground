import { render } from '@testing-library/react'
import React from 'react'

import { tickHMS, sweepHMS, calcHMS } from './math'

import {
  AnalogClock,
  DigitalClock,
  computeFace,
  romanFace,
  arabicFace,
} from '.'

test('render AnalogClock', () => {
  const dt = new Date('2021-01-01T00:00:00Z')
  const { asFragment } = render(<AnalogClock timezone="Asia/Tokyo" date={dt} />)
  expect(asFragment()).toMatchSnapshot()
})

test('render DigitalClock', () => {
  const dt = new Date('2021-01-01T00:00:00Z')
  const { asFragment } = render(
    <DigitalClock timezone="Asia/Tokyo" date={dt} />
  )
  expect(asFragment()).toMatchSnapshot()
})

test('tickHMS returns HMS', () => {
  const dt = new Date('2021-01-01T00:00:00Z')
  expect(tickHMS(dt, 'Asia/Tokyo')).toEqual({
    hour: 9,
    minute: 0,
    second: 0,
  })

  const dt2 = new Date('2021-01-01T10:08:14Z')
  expect(tickHMS(dt2, 'Asia/Tokyo')).toEqual({
    hour: 19,
    minute: 8,
    second: 14,
  })
})

test('sweepHMS returns HMS', () => {
  const dt2 = new Date('2021-01-01T10:08:14.2000Z')
  expect(sweepHMS(dt2, 'Asia/Tokyo')).toEqual({
    hour: 19.13722222222222,
    minute: 8.233333333333333,
    second: 14.2,
  })
})

test('calcHMS returns HMS', () => {
  const dt = new Date('2021-01-01T10:08:14.2000Z')
  expect(calcHMS(dt, 'Asia/Tokyo', 'tick')).toEqual(tickHMS(dt, 'Asia/Tokyo'))
  expect(calcHMS(dt, 'Asia/Tokyo', 'sweep')).toEqual(sweepHMS(dt, 'Asia/Tokyo'))
})

test('arabicFace returns arabicFace', () => {
  expect(arabicFace(0)).toBe('12')
  expect(arabicFace(1)).toBe('1')
  expect(arabicFace(2)).toBe('2')
  expect(arabicFace(3)).toBe('3')
  expect(arabicFace(4)).toBe('4')
  expect(arabicFace(5)).toBe('5')
  expect(arabicFace(6)).toBe('6')
  expect(arabicFace(7)).toBe('7')
  expect(arabicFace(8)).toBe('8')
  expect(arabicFace(9)).toBe('9')
  expect(arabicFace(10)).toBe('10')
  expect(arabicFace(11)).toBe('11')
})

test('romanFace returns romanFace', () => {
  expect(romanFace(0)).toBe('Ⅻ')
  expect(romanFace(1)).toBe('Ⅰ')
  expect(romanFace(2)).toBe('Ⅱ')
  expect(romanFace(3)).toBe('Ⅲ')
  expect(romanFace(4)).toBe('Ⅳ')
  expect(romanFace(5)).toBe('Ⅴ')
  expect(romanFace(6)).toBe('Ⅵ')
  expect(romanFace(7)).toBe('Ⅶ')
  expect(romanFace(8)).toBe('Ⅷ')
  expect(romanFace(9)).toBe('Ⅸ')
  expect(romanFace(10)).toBe('Ⅹ')
  expect(romanFace(11)).toBe('Ⅺ')
})

test('computeFace returns face', () => {
  expect(computeFace(0, 'roman')).toBe(romanFace(0))
  expect(computeFace(0, 'arabic')).toBe(arabicFace(0))
})
