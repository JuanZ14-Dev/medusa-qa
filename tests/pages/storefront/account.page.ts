import { Locator, Page } from "@playwright/test"
import { QA_ENV } from "../../fixtures/env.fixture.js"

export class AccountPage {
  readonly page: Page
  readonly region: string
  readonly emailInput: Locator
  readonly passwordInput: Locator
  readonly signInButton: Locator
  readonly switchToRegisterButton: Locator
  readonly firstNameInput: Locator
  readonly lastNameInput: Locator
  readonly phoneInput: Locator
  readonly registerSubmitButton: Locator
  readonly errorMessage: Locator
  readonly overviewContainer: Locator
  readonly logoutButton: Locator

  constructor(page: Page, region: string = QA_ENV.defaultRegion) {
    this.page = page
    this.region = region
    this.emailInput = page.getByTestId("email-input")
    this.passwordInput = page.getByTestId("password-input")
    this.signInButton = page.getByTestId("sign-in-button")
    this.switchToRegisterButton = page.getByTestId("register-button")
    this.firstNameInput = page.getByTestId("first-name-input")
    this.lastNameInput = page.getByTestId("last-name-input")
    this.phoneInput = page.getByTestId("phone-input")
    this.registerSubmitButton = page.getByTestId("register-button")
    this.errorMessage = page.getByTestId("login-error-message")
    this.overviewContainer = page.getByTestId("account-overview-container")
    this.logoutButton = page.getByTestId("logout-button")
  }

  async goto() {
    await this.page.goto(`/${this.region}/account`, {
      waitUntil: "networkidle",
    })
  }

  async gotoProfile() {
    await this.page.goto(`/${this.region}/account/profile`, {
      waitUntil: "networkidle",
    })
  }

  async gotoAddresses() {
    await this.page.goto(`/${this.region}/account/addresses`, {
      waitUntil: "networkidle",
    })
  }

  async gotoOrders() {
    await this.page.goto(`/${this.region}/account/orders`, {
      waitUntil: "networkidle",
    })
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email)
    await this.passwordInput.fill(password)
    await this.signInButton.click()
    await this.page.waitForLoadState("networkidle")
  }

  async register(data: {
    firstName: string
    lastName: string
    email: string
    password: string
    phone?: string
  }) {
    await this.switchToRegisterButton.click()
    await this.firstNameInput.waitFor({ state: "visible" })
    await this.firstNameInput.fill(data.firstName)
    await this.lastNameInput.fill(data.lastName)
    await this.emailInput.fill(data.email)
    if (data.phone) {
      await this.phoneInput.fill(data.phone)
    }
    await this.passwordInput.fill(data.password)
    await this.registerSubmitButton.click()
    await this.page.waitForLoadState("networkidle")
  }
}
