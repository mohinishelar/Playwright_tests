import { test, expect } from '@playwright/test';

test('Search Wikipedia for JavaScript basics', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');
  await page.fill('input[name="search"]', 'JavaScript');
  await page.keyboard.press('Enter');
  await expect(page.locator('#firstHeading')).toHaveText('JavaScript');
});