const { test, expect } = require('@playwright/test');

test('Amazon search flow', async ({ page }) => {
  // 1. Navigate to Amazon India
  await page.goto('https://www.amazon.in');

  // 2. Search for a product
  await page.fill('#twotabsearchtextbox', 'laptop');
  await page.click('#nav-search-submit-button');

  // 3. Verify results are shown
  const results = page.locator('.s-main-slot .s-result-item');
  await expect(results.first()).toBeVisible();

  // 4. Optional: Check that the title contains "laptop"
  await expect(page).toHaveTitle(/laptop/i);
});