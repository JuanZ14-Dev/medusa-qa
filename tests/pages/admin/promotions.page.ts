import { Page, expect } from "@playwright/test"
import { QA_ENV } from "../../fixtures/env.fixture.js"

export class AdminPromotionsPage {
  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  async goto() {
    await this.page.goto(`${QA_ENV.adminUrl}/promotions`, {
      waitUntil: "networkidle",
    })
    await expect(this.page).toHaveURL(/\/app\/promotions/)
  }

  async gotoDetail(promotionId: string) {
    await this.page.goto(`${QA_ENV.adminUrl}/promotions/${promotionId}`, {
      waitUntil: "networkidle",
    })
    await expect(this.page).toHaveURL(
      new RegExp(`/app/promotions/${promotionId}`)
    )
  }
}
