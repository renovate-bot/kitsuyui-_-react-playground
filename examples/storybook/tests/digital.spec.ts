import { test, expect } from '@playwright/test'

import { waitForStorybookFrameRendered } from './util'

test('digital clock default', async ({ page }) => {
  const iframe = await waitForStorybookFrameRendered({
    page,
    path: '/?path=/story/base-clock-digital--default',
  })
  const screenshot = await iframe.screenshot()
  expect(screenshot).toMatchSnapshot('base-clock-digital--default.png')
})

test('digital clock tokyo', async ({ page }) => {
  const iframe = await waitForStorybookFrameRendered({
    page,
    path: '/?path=/story/base-clock-digital--tokyo',
  })
  const screenshot = await iframe.screenshot()
  expect(screenshot).toMatchSnapshot('base-clock-digital--tokyo.png')
})
