import { test, expect } from '@playwright/test';

test('open Wikipedia and take screenshot', async ({ page }) => {
  // Navigate to Wikipedia
  await page.goto('https://www.wikipedia.org');

  // Take a screenshot
  await page.screenshot({ path: 'wikipedia.png' });

  // Check page title
  const title = await page.title();
  console.log('Page title:', title);

  expect(title).toContain('Wikipedia'); // Optional assertion
});
