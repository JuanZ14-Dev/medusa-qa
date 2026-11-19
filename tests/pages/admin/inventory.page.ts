import { Page, expect } from "@playwright/test"
import { QA_ENV } from "../../fixtures/env.fixture.js"

export class AdminInventoryPage {
  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  async goto() {
    await this.page.goto(`${QA_ENV.adminUrl}/inventory`, {
      waitUntil: "networkidle",
    })
    await expect(this.page).toHaveURL(/\/app\/inventory/)
  }

  async gotoDetail(inventoryItemId: string) {
    await this.page.goto(`${QA_ENV.adminUrl}/inventory/${inventoryItemId}`, {
      waitUntil: "networkidle",
    })
    await expect(this.page).toHaveURL(
      new RegExp(`/app/inventory/${inventoryItemId}`)
    )
  }
}
