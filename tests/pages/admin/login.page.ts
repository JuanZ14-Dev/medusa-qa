import { Locator, Page, expect } from "@playwright/test"
import { QA_ENV } from "../../fixtures/env.fixture.js"

export class AdminLoginPage {
  readonly page: Page
  readonly emailInput: Locator
  readonly passwordInput: Locator
  readonly submitButton: Locator

  constructor(page: Page) {
    this.page = page
    this.emailInput = page.locator('input[name="email"]')
    this.passwordInput = page.locator('input[name="password"]')
    this.submitButton = page.locator('button[type="submit"]')
  }

  async goto() {
    await this.page.goto(`${QA_ENV.adminUrl}/login`, { waitUntil: "networkidle" })
    await expect(this.emailInput).toBeVisible()
  }

  async login(email = QA_ENV.adminEmail, password = QA_ENV.adminPassword) {
    await this.emailInput.fill(email)
    await this.passwordInput.fill(password)
    await this.submitButton.click()
  }

  async loginAndExpectDashboard(
    email = QA_ENV.adminEmail,
    password = QA_ENV.adminPassword
  ) {
    await this.login(email, password)
    await this.page.waitForURL((u) => !u.pathname.includes("/login"), {
      timeout: 15000,
    })
    await this.page.waitForLoadState("networkidle")
  }
}
