import { test, expect } from '@playwright/test';

test('open the UltimateQA website', async ({ page }) => {
  await page.goto('https://ultimateqa.com/automation/');
  await expect(page).toHaveURL('https://ultimateqa.com/automation/');
  await expect(page.locator('h1')).toContainText('Automation Practice');
});