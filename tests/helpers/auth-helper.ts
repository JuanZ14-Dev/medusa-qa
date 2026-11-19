import { Page } from "@playwright/test"
import { QA_ENV } from "../fixtures/env.fixture.js"

export async function loginAdminUI(page: Page): Promise<void> {
  await page.goto(QA_ENV.adminUrl)
  await page.getByLabel(/email/i).fill(QA_ENV.adminEmail)
  await page.getByLabel(/password/i).fill(QA_ENV.adminPassword)
  await page.getByRole("button", { name: /continue|sign in|log in/i }).click()
}
