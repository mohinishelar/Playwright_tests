// @ts-check
import { test, expect } from '@playwright/test';

test('open W3Schools homepage and verify title', async ({ page }) => {
  // 1. Navigate to W3Schools homepage
  await page.goto('https://www.w3schools.com/');

  // 2. Verify that the page title contains "W3Schools"
  await expect(page).toHaveTitle(/W3Schools/);

  // 3. Optional: take a screenshot
  await page.screenshot({ path: 'w3schools-home.png' });
});