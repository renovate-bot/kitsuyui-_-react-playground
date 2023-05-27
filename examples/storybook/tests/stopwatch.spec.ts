import { test, expect } from '@playwright/test'

import { waitForStorybookFrameRendered } from './util'

test('stopwatch default', async ({ page }) => {
  const iframe = await waitForStorybookFrameRendered({
    page,
    path: '/?path=/story/base-stopwatch-minimal--default',
  })
  const screenshot = await iframe.screenshot()
  expect(screenshot).toMatchSnapshot('base-stopwatch-minimal--default.png')
})
