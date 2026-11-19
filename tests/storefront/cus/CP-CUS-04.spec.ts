import { expect, test } from "@playwright/test"
import { AccountPage } from "../../pages/storefront/account.page.js"

test("CP-CUS-04: Aislamiento de sesión de cliente tras cierre de sesión", async ({
  page,
}) => {
  const accountPage = new AccountPage(page)
  const email = `cus04.qa.${Date.now()}@medusa-test.com`

  await accountPage.goto()
  await accountPage.register({
    firstName: "Diego",
    lastName: "Sesion",
    email,
    password: "PasswordQA2026!",
  })

  await expect(page.getByTestId("overview-page-wrapper")).toBeVisible()

  await page.getByTestId("account-nav").getByTestId("logout-button").click()
  await page.waitForLoadState("networkidle")

  await expect(page.getByTestId("login-page")).toBeVisible()
  await expect(page.getByTestId("overview-page-wrapper")).toHaveCount(0)

  await accountPage.gotoProfile()
  await expect(page.getByTestId("login-page")).toBeVisible()
  await expect(page.getByTestId("profile-page-wrapper")).toHaveCount(0)

  await accountPage.gotoOrders()
  await expect(page.getByTestId("login-page")).toBeVisible()
  await expect(page.getByTestId("orders-page-wrapper")).toHaveCount(0)
})
