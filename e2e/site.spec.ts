import { test, expect } from '@playwright/test'

test.describe('Alex Eshaya portfolio', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('page loads and title is correct', async ({ page }) => {
    await expect(page).toHaveTitle(/Alex Eshaya/)
  })

  test('hero section is visible with correct headline', async ({ page }) => {
    await expect(page.getByText('I build')).toBeVisible()
    await expect(page.getByText('things that')).toBeVisible()
    await expect(page.getByText('matter.')).toBeVisible()
  })

  test('hero CTAs link to correct sections', async ({ page }) => {
    const viewWork = page.getByRole('link', { name: 'View My Work' })
    await expect(viewWork).toHaveAttribute('href', '#work')

    const aboutMe = page.getByRole('link', { name: 'About Me' })
    await expect(aboutMe).toHaveAttribute('href', '#about')
  })

  test('nav is visible and links exist', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Work' }).first()).toBeVisible()
    await expect(page.getByRole('link', { name: 'About' }).first()).toBeVisible()
    await expect(page.getByRole('link', { name: 'Contact' }).first()).toBeVisible()
  })

  test('work section contains Longitude Marine', async ({ page }) => {
    await page.locator('#work').scrollIntoViewIfNeeded()
    await expect(page.getByText('Longitude Marine')).toBeVisible()
    await expect(page.getByText("What I've shipped.")).toBeVisible()
  })

  test('about section is visible with Alex name', async ({ page }) => {
    await page.locator('#about').scrollIntoViewIfNeeded()
    await expect(page.getByText('Who I am.')).toBeVisible()
    await expect(page.getByText('Alex Eshaya').first()).toBeVisible()
  })

  test('skills section is visible', async ({ page }) => {
    await page.locator('#skills').scrollIntoViewIfNeeded()
    await expect(page.getByText('How I build.')).toBeVisible()
    await expect(page.getByText('Next.js')).toBeVisible()
    await expect(page.getByText('FastAPI')).toBeVisible()
  })

  test('contact section is visible with CTA', async ({ page }) => {
    await page.locator('#contact').scrollIntoViewIfNeeded()
    await expect(page.getByText("Let's build")).toBeVisible()
    await expect(page.getByRole('button', { name: /Say Hello/ })).toBeVisible()
  })

  test('contact modal opens and closes', async ({ page }) => {
    await page.locator('#contact').scrollIntoViewIfNeeded()
    await page.getByRole('button', { name: /Say Hello/ }).click()
    await expect(page.getByRole('heading', { name: 'Say Hello' })).toBeVisible()
    // Close via × button
    await page.getByLabel('Close').click()
    await expect(page.getByRole('heading', { name: 'Say Hello' })).not.toBeVisible()
  })

  test('chapter nav is visible on desktop', async ({ page }) => {
    // ChapterNav shows on lg breakpoint — viewport is 1280px by default in Playwright
    await expect(page.getByText('Hero').first()).toBeVisible()
  })
})
