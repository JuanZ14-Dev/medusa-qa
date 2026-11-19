import { Locator, Page } from "@playwright/test"
import { QA_ENV } from "../../fixtures/env.fixture.js"

export class CatalogPage {
  readonly page: Page
  readonly region: string
  readonly storeTitle: Locator
  readonly searchInput: Locator
  readonly productsList: Locator
  readonly productCards: Locator
  readonly categoryCheckboxes: Locator
  readonly optionRefinements: Locator

  constructor(page: Page, region: string = QA_ENV.defaultRegion) {
    this.page = page
    this.region = region
    this.storeTitle = page.getByTestId("store-page-title")
    this.searchInput = page.getByTestId("store-search-input")
    this.productsList = page.getByTestId("products-list")
    this.productCards = page.getByTestId("product-wrapper")
    this.categoryCheckboxes = page.getByTestId("refinement-category")
    this.optionRefinements = page.getByTestId("option-refinement")
  }

  async gotoStore() {
    await this.page.goto(`/${this.region}/store`, { waitUntil: "networkidle" })
  }

  async gotoProduct(handle: string) {
    await this.page.goto(`/${this.region}/products/${handle}`, {
      waitUntil: "networkidle",
    })
  }

  async gotoCategory(handle: string) {
    await this.page.goto(`/${this.region}/categories/${handle}`, {
      waitUntil: "networkidle",
    })
  }

  async searchProduct(term: string) {
    await this.searchInput.fill(term)
    await this.searchInput.press("Enter")
    await this.page.waitForLoadState("networkidle")
  }

  async selectCategoryFilter(categoryName: string) {
    const label = this.page
      .locator("label", { hasText: categoryName })
      .first()
    await label.click()
    await this.page.waitForLoadState("networkidle")
  }

  async selectProductOption(optionGroupIndex: number, value: string) {
    await this.page
      .getByTestId("product-options")
      .nth(optionGroupIndex)
      .getByText(value, { exact: true })
      .click()
  }

  async addToCart() {
    await this.page.getByTestId("add-product-button").click()
  }
}
