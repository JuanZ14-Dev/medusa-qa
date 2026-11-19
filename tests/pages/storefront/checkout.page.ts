import { Locator, Page } from "@playwright/test"
import { QA_ENV } from "../../fixtures/env.fixture.js"

export interface ShippingAddressInput {
  firstName: string
  lastName: string
  address1: string
  postalCode: string
  city: string
  countryCode: string
  email: string
  phone?: string
}

export class CheckoutPage {
  readonly page: Page
  readonly region: string
  readonly firstNameInput: Locator
  readonly lastNameInput: Locator
  readonly addressInput: Locator
  readonly postalCodeInput: Locator
  readonly cityInput: Locator
  readonly countrySelect: Locator
  readonly emailInput: Locator
  readonly phoneInput: Locator
  readonly submitAddressButton: Locator
  readonly submitDeliveryButton: Locator
  readonly submitPaymentButton: Locator
  readonly submitOrderButton: Locator
  readonly cartTotal: Locator
  readonly cartShipping: Locator
  readonly cartSubtotal: Locator

  constructor(page: Page, region: string = QA_ENV.defaultRegion) {
    this.page = page
    this.region = region
    this.firstNameInput = page.getByTestId("shipping-first-name-input")
    this.lastNameInput = page.getByTestId("shipping-last-name-input")
    this.addressInput = page.getByTestId("shipping-address-input")
    this.postalCodeInput = page.getByTestId("shipping-postal-code-input")
    this.cityInput = page.getByTestId("shipping-city-input")
    this.countrySelect = page.getByTestId("shipping-country-select")
    this.emailInput = page.getByTestId("shipping-email-input")
    this.phoneInput = page.getByTestId("shipping-phone-input")
    this.submitAddressButton = page.getByTestId("submit-address-button")
    this.submitDeliveryButton = page.getByTestId("submit-delivery-option-button")
    this.submitPaymentButton = page.getByTestId("submit-payment-button")
    this.submitOrderButton = page.getByTestId("submit-order-button")
    this.cartTotal = page.getByTestId("cart-total")
    this.cartShipping = page.getByTestId("cart-shipping")
    this.cartSubtotal = page.getByTestId("cart-subtotal")
  }

  async goto(step?: "address" | "delivery" | "payment" | "review") {
    const query = step ? `?step=${step}` : ""
    await this.page.goto(`/${this.region}/checkout${query}`, {
      waitUntil: "networkidle",
    })
  }

  async fillShippingAddress(data: ShippingAddressInput) {
    await this.firstNameInput.fill(data.firstName)
    await this.lastNameInput.fill(data.lastName)
    await this.addressInput.fill(data.address1)
    await this.postalCodeInput.fill(data.postalCode)
    await this.cityInput.fill(data.city)
    await this.countrySelect.selectOption(data.countryCode)
    await this.emailInput.fill(data.email)
    if (data.phone !== undefined) {
      await this.phoneInput.fill(data.phone)
    }
  }

  async submitAddress() {
    await this.submitAddressButton.click()
    await this.page.waitForLoadState("networkidle")
  }
}
