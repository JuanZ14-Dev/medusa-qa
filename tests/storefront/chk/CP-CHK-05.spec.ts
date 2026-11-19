import { expect, test } from "@playwright/test"
import { CheckoutPage } from "../../pages/storefront/checkout.page.js"

test("CP-CHK-05: Protección contra finalización de checkout con carrito vacío", async ({
  page,
}) => {
  const checkoutPage = new CheckoutPage(page)
  await checkoutPage.goto()

  const submitOrderVisible = await checkoutPage.submitOrderButton
    .isVisible()
    .catch(() => false)
  expect(submitOrderVisible).toBe(false)

  const submitAddressVisible = await checkoutPage.submitAddressButton
    .isVisible()
    .catch(() => false)
  expect(submitAddressVisible).toBe(false)
})
