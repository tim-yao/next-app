import { test, expect } from '@playwright/test';

test('The book "The Art of Wars" has 13 chapters', async ({ page }) => {
  await page.goto('http://localhost:3000//the-art-of-wars');
  const chapters = page.locator('.chapter');
  await expect(chapters).toHaveCount(13);
});

test('The book "The Art of Wars" has title "孙子兵法"', async ({ page }) => {
  await page.goto('/the-art-of-wars');
  await expect(page).toHaveTitle(/孙子兵法/);
});

test('The first chapter of book "The Art of Wars" is "始计"', async ({ page }) => {
  await page.goto('/the-art-of-wars');
  const firstChapterTitle = page.locator('.chapter h2').first();
  await expect(firstChapterTitle).toHaveText('始计');
});

test('The third chapter of book "The Art of Wars" is "兵势"', async ({ page }) => {
  await page.goto('/the-art-of-wars');
  const thirdChapterTitle = page.locator('.chapter h2').nth(2);
  await expect(thirdChapterTitle).toHaveText('兵势');
});

test('The forth chapter of book "The Art of Wars" is "军形"', async ({ page }) => {
  await page.goto('/the-art-of-wars');
  const fourthChapter = page.locator('.chapter').nth(3);
  // We can chain locators.
  await expect(fourthChapter.locator('h2')).toHaveText('军形');
});