import { test, expect } from '@playwright/test';

test('Verify login page loads', async ({ page }) => {
  await page.goto('https://saucedemo.com');
  await expect(page).toHaveTitle(/Swsag Labs/);
});
