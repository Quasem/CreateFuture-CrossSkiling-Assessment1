import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://www.youtube.com/
  await page.goto('https://www.youtube.com/');

  await page.getByRole('dialog', { name: 'Before you continue to YouTube' }).click();
  await page.getByRole('button', { name: 'Accept the use of cookies and' }).click();

  // Click on the "You" link
  await page.getByRole('link', { name: 'You', exact: true }).click();


  // Expect to see "Enjoy your favourite videos"
  await page.getByText('Enjoy your favourite videos');


  await page.locator('#page-manager').getByRole('link', { name: 'Sign in' }).click();


});


  
