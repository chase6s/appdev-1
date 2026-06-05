import { test, expect } from '@playwright/test';

test('has health status', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1')).toHaveText(/React/);
});
