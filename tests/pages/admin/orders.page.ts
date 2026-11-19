import { Page, expect } from "@playwright/test"
import { QA_ENV } from "../../fixtures/env.fixture.js"

export class AdminOrdersPage {
  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  async goto() {
    await this.page.goto(`${QA_ENV.adminUrl}/orders`, {
      waitUntil: "networkidle",
    })
    await expect(this.page).toHaveURL(/\/app\/orders/)
  }

  async gotoDetail(orderId: string) {
    await this.page.goto(`${QA_ENV.adminUrl}/orders/${orderId}`, {
      waitUntil: "networkidle",
    })
    await expect(this.page).toHaveURL(new RegExp(`/app/orders/${orderId}`))
  }

  async filterByStatus(statusLabel: string) {
    await this.page.locator('button:has-text("Add filter")').first().click()
    await this.page.locator(`[role="menuitem"]:has-text("Status"), [role="option"]:has-text("Status")`).first().click()
    await this.page.locator(`label:has-text("${statusLabel}"), [role="option"]:has-text("${statusLabel}")`).first().click()
    await this.page.keyboard.press("Escape")
    await this.page.waitForLoadState("networkidle")
  }
}
