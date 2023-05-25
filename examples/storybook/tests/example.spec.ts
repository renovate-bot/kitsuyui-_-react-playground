import { test, expect } from '@playwright/test'

test('clock page', async ({ page }) => {
  await page.goto('http://localhost:6006/?path=/story/analogclock--default')
  await page.waitForSelector('iframe[data-is-loaded="true"]')
  const screenshot = await page
    .locator('#storybook-preview-iframe')
    .screenshot()
  expect(screenshot).toMatchSnapshot('clock-image.png')
})
