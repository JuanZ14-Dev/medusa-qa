import { expect, test } from "@playwright/test"
import { CartPage } from "../../pages/storefront/cart.page.js"
import { CatalogPage } from "../../pages/storefront/catalog.page.js"
import { CheckoutPage } from "../../pages/storefront/checkout.page.js"

test("CP-CHK-03: Selección de método de envío y actualización de total en checkout", async ({
  page,
}) => {
  const catalogPage = new CatalogPage(page)
  const cartPage = new CartPage(page)
  const checkoutPage = new CheckoutPage(page)

  await catalogPage.gotoProduct("t-shirt")
  await catalogPage.selectProductOption(0, "M")
  await catalogPage.selectProductOption(1, "Black")
  await catalogPage.addToCart()
  await expect(cartPage.navCartLink).toContainText("(1)")

  await checkoutPage.goto("address")
  await checkoutPage.fillShippingAddress({
    firstName: "Ana",
    lastName: "Lopez",
    address1: "Bredgade 45",
    postalCode: "1260",
    city: "Copenhagen",
    countryCode: "dk",
    email: "ana.chk03@medusa-test.com",
    phone: "+4512345678",
  })
  await checkoutPage.submitAddress()

  const deliveryRadios = page.getByTestId("delivery-option-radio")
  await expect(deliveryRadios.first()).toBeVisible()
  const radioCount = await deliveryRadios.count()
  expect(radioCount).toBeGreaterThan(0)

  await deliveryRadios.first().click()
  await page.waitForLoadState("networkidle")

  await expect(checkoutPage.cartShipping).toBeVisible()
  const shippingText = (await checkoutPage.cartShipping.textContent())?.trim() ?? ""
  const totalText = (await checkoutPage.cartTotal.textContent())?.trim() ?? ""
  expect(shippingText).not.toBe("")
  expect(totalText).not.toBe("")
  await expect(checkoutPage.submitDeliveryButton).toBeEnabled()
})
