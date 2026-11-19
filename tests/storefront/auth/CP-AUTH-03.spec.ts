import { expect, test } from "@playwright/test"
import { QA_ENV } from "../../fixtures/env.fixture.js"
import { AccountPage } from "../../pages/storefront/account.page.js"

test("CP-AUTH-03: Rechazo de login en Storefront con contraseña inválida", async ({
  page,
}) => {
  const accountPage = new AccountPage(page)
  await accountPage.goto()

  await accountPage.login(QA_ENV.customerEmail, "WrongPassword999!")

  await expect(accountPage.errorMessage).toBeVisible()
  await expect(page).toHaveURL(new RegExp(`/${QA_ENV.defaultRegion}/account`))
  await expect(page.getByTestId("login-page")).toBeVisible()
})
