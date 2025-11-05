import { test, expect } from '@playwright/test';

test('YouTube — open "You" page and verify Sign in page is displayed', async ({ page }) => {

  // Go to https://www.youtube.com/
  await page.goto('https://www.youtube.com/');

  await page.getByRole('dialog', { name: 'Before you continue to YouTube' }).click();
  await page.getByRole('button', { name: 'Accept the use of cookies and' }).click();

  // Click on the "You" link
  await page.getByRole('link', { name: 'You', exact: true }).click();


  // 4) ASSERTION: The “Enjoy your favourite videos” text is visible on the You page
  await page.getByText('Enjoy your favourite videos');


  await page.locator('#page-manager').getByRole('link', { name: 'Sign in' }).click();

  // ✅ FINAL ASSERTIONS: verify sign-in page is shown
  // 1) URL changes to Google/YouTube sign-in
  await page.waitForURL(/(accounts\.google\.com|youtube\.com\/signin)/, { timeout: 15000 });

  // 2) Unique element on sign-in page: "Email or phone" input
  await expect(page.getByLabel(/email|phone|email or phone/i)).toBeVisible();



});


  
