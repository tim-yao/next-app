import { test, expect } from '@playwright/test';

test('homepage has "Welcome to test app!" title and 孙子兵法 link linking to the book page', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Next.js test app!/);

  // create a locator
  const getStarted = page.locator('text=孙子兵法');

  // Expect an attribute "to be strictly equal" to the value.
  await expect(getStarted).toHaveAttribute('href', '/the-art-of-wars');

  // Click the get started link.
  await getStarted.click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*the-art-of-wars/);
});
