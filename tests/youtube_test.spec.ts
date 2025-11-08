import { test, expect } from '@playwright/test';

test('YouTube — open "You" page and verify Sign in page is displayed', async ({ page }) => {

  // Go to https://www.youtube.com/
  await page.goto('https://www.youtube.com/');

  await page.getByRole('dialog', { name: 'Before you continue to YouTube' }).click();
  await page.getByRole('button', { name: /accept.*cookies/i }).click();
  //await page.getByRole('button', { name: 'Accept the use of cookies and' }).click();

  // Click on the "You" link
  await page.getByRole('link', { name: 'You', exact: true }).click();

  // ✅ ASSERTION: Confirm we are on the You page by checking the URL
  await expect(page).toHaveURL(/youtube\.com\/feed\/you/);

  // Click "Sign in"
  await page.locator('#page-manager').getByRole('link', { name: 'Sign in' }).click();

  // ✅ ASSERTION: Verify the sign in page is displayed
  await page.waitForURL(/(accounts\.google\.com|youtube\.com\/signin)/, { timeout: 15000 });
  await expect(page.getByLabel(/email|phone|email or phone/i)).toBeVisible();

});
