import { Locator, Page, expect } from "@playwright/test"
import { QA_ENV } from "../../fixtures/env.fixture.js"

export class AdminProductsPage {
  readonly page: Page
  readonly createLink: Locator

  constructor(page: Page) {
    this.page = page
    this.createLink = page.locator('a[href="/app/products/create"]').first()
  }

  async goto() {
    await this.page.goto(`${QA_ENV.adminUrl}/products`, {
      waitUntil: "networkidle",
    })
    await expect(this.createLink).toBeVisible()
  }

  async gotoCreate() {
    await this.page.goto(`${QA_ENV.adminUrl}/products/create`, {
      waitUntil: "networkidle",
    })
  }

  async gotoDetail(productId: string) {
    await this.page.goto(`${QA_ENV.adminUrl}/products/${productId}`, {
      waitUntil: "networkidle",
    })
  }

  createDialog(): Locator {
    return this.page.locator('[role="dialog"]').last()
  }

  async fillBasicDetails(title: string, handle: string, description: string) {
    const dlg = this.createDialog()
    await dlg.locator('input[name="title"]').fill(title)
    await dlg.locator('input[name="handle"]').fill(handle)
    await dlg.locator('textarea[name="description"]').fill(description)
  }

  async createPublishedProduct(
    title: string,
    handle: string,
    description: string,
    price = "30"
  ): Promise<string> {
    await this.gotoCreate()
    const dlg = this.createDialog()
    await this.fillBasicDetails(title, handle, description)
    await dlg.locator('button:has-text("Continue")').first().click()
    await this.page.waitForTimeout(500)

    const organizeContinue = dlg.locator('button:has-text("Continue")').first()
    if (await organizeContinue.isVisible()) {
      await organizeContinue.click()
      await this.page.waitForTimeout(500)
    }

    const priceInput = dlg
      .locator('input[inputmode="decimal"], input[name*="prices"], input[placeholder="0"]')
      .first()
    if (await priceInput.isVisible()) {
      await priceInput.fill(price)
    }

    await dlg.locator('button:has-text("Publish")').first().click()
    await this.page.waitForURL((u) => /\/app\/products\/prod_/.test(u.pathname), {
      timeout: 15000,
    })
    return this.page.url().split("/app/products/")[1].split(/[?#]/)[0]
  }
}
