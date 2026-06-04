import { test, expect } from '@playwright/test';

test('has health status', async ({ page }) => {
  // This will fail because no server is running, but it validates the test is found
  await page.goto('/');
  await expect(page).toHaveTitle(/React/);
});
