// @ts-check
import { test, expect } from '@playwright/test';

test('basic check', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});