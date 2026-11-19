import { Locator, Page } from "@playwright/test"
import { QA_ENV } from "../../fixtures/env.fixture.js"

export class CartPage {
  readonly page: Page
  readonly region: string
  readonly cartContainer: Locator
  readonly productRows: Locator
  readonly subtotal: Locator
  readonly shipping: Locator
  readonly taxes: Locator
  readonly total: Locator
  readonly checkoutButton: Locator
  readonly navCartLink: Locator

  constructor(page: Page, region: string = QA_ENV.defaultRegion) {
    this.page = page
    this.region = region
    this.cartContainer = page.getByTestId("cart-container")
    this.productRows = page.getByTestId("product-row")
    this.subtotal = page.getByTestId("cart-subtotal")
    this.shipping = page.getByTestId("cart-shipping")
    this.taxes = page.getByTestId("cart-taxes")
    this.total = page.getByTestId("cart-total")
    this.checkoutButton = page.getByTestId("checkout-button")
    this.navCartLink = page.getByTestId("nav-cart-link")
  }

  async goto() {
    await this.page.goto(`/${this.region}/cart`, { waitUntil: "networkidle" })
  }

  async selectQuantity(rowIndex: number, quantity: string) {
    const row = this.productRows.nth(rowIndex)
    const select = row.getByTestId("product-select-button")
    await select.selectOption(quantity)
    await this.page.waitForLoadState("networkidle")
  }

  async getQuantity(rowIndex: number): Promise<string> {
    return this.productRows
      .nth(rowIndex)
      .getByTestId("product-select-button")
      .inputValue()
  }

  async removeItem(rowIndex: number) {
    const row = this.productRows.nth(rowIndex)
    await row.locator("button").first().click()
    await this.page.waitForLoadState("networkidle")
  }

  async getSubtotalText(): Promise<string> {
    return (await this.subtotal.textContent())?.trim() ?? ""
  }

  async goToCheckout() {
    await this.checkoutButton.click()
    await this.page.waitForLoadState("networkidle")
  }
}
