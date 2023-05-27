import { test, expect } from '@playwright/test'

import { waitForStorybookFrameRendered } from './util'

test('stopwatch default', async ({ page }) => {
  const iframe = await waitForStorybookFrameRendered({
    page,
    path: '/?path=/story/base-timer-minimal--default',
  })
  const screenshot = await iframe.screenshot()
  expect(screenshot).toMatchSnapshot('base-timer-minimal--default.png')
})
