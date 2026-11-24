import { expect, test } from "@playwright/test"
import { QA_ENV } from "../../fixtures/env.fixture.js"
import { AccountPage } from "../../pages/storefront/account.page.js"

test("CP-AUTH-06: Validación de enlaces legales de privacidad y términos en registro de Storefront", async ({
  page,
}) => {
  const accountPage = new AccountPage(page)
  await accountPage.goto()

  await accountPage.switchToRegisterButton.click()
  await accountPage.firstNameInput.waitFor({ state: "visible" })

  const registerBox = page.getByTestId("register-page")
  const privacyLink = registerBox.getByRole("link", { name: /privacy policy/i })
  const termsLink = registerBox.getByRole("link", { name: /terms of use/i })

  await expect(privacyLink).toBeVisible()
  await expect(termsLink).toBeVisible()

  const privacyHref = await privacyLink.getAttribute("href")
  const termsHref = await termsLink.getAttribute("href")
  expect(privacyHref).toBeTruthy()
  expect(termsHref).toBeTruthy()

  const privacyRes = await page.goto(`${QA_ENV.storefrontUrl}${privacyHref}`, {
    waitUntil: "networkidle",
  })
  expect(privacyRes?.status()).toBe(200)
  await expect(page.getByRole("heading", { name: /page not found/i })).toHaveCount(0)

  const termsRes = await page.goto(`${QA_ENV.storefrontUrl}${termsHref}`, {
    waitUntil: "networkidle",
  })
  expect(termsRes?.status()).toBe(200)
  await expect(page.getByRole("heading", { name: /page not found/i })).toHaveCount(0)
})
