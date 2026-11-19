import { expect, test } from "@playwright/test"
import { AccountPage } from "../../pages/storefront/account.page.js"

test("CP-CUS-03: Actualización de datos personales de cuenta en Storefront", async ({
  page,
}) => {
  const accountPage = new AccountPage(page)
  const email = `cus03.qa.${Date.now()}@medusa-test.com`

  await accountPage.goto()
  await accountPage.register({
    firstName: "Sofia",
    lastName: "Inicial",
    email,
    password: "PasswordQA2026!",
  })

  await expect(page.getByTestId("overview-page-wrapper")).toBeVisible()

  await accountPage.gotoProfile()
  const nameEditor = page.getByTestId("account-name-editor")
  await nameEditor.getByTestId("edit-button").click()
  await nameEditor.getByTestId("first-name-input").fill("SofiaActualizada")
  await nameEditor.getByTestId("last-name-input").fill("GomezEditada")
  await nameEditor.getByTestId("save-button").click()

  await expect(nameEditor.getByTestId("success-message")).toBeVisible()
  await page.reload({ waitUntil: "networkidle" })
  await expect(nameEditor.getByTestId("current-info")).toContainText(
    "SofiaActualizada GomezEditada"
  )
})
