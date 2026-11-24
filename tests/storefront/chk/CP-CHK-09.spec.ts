import { expect, test } from "@playwright/test"
import { CartPage } from "../../pages/storefront/cart.page.js"
import { CatalogPage } from "../../pages/storefront/catalog.page.js"
import { CheckoutPage } from "../../pages/storefront/checkout.page.js"

test("CP-CHK-09: Integridad del cálculo de total de orden con envío en resumen de checkout", async ({
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
    email: "ana.chk09@medusa-test.com",
    phone: "+4512345678",
  })
  await checkoutPage.submitAddress()

  const deliveryRadios = page.getByTestId("delivery-option-radio")
  await expect(deliveryRadios.first()).toBeVisible()
  await deliveryRadios.first().click()
  await page.waitForLoadState("networkidle")

  await expect
    .poll(async () =>
      Number((await checkoutPage.cartShipping.getAttribute("data-value")) ?? "0")
    )
    .toBeGreaterThan(0)

  const subtotalVal = Number(
    (await checkoutPage.cartSubtotal.getAttribute("data-value")) ?? "0"
  )
  const shippingVal = Number(
    (await checkoutPage.cartShipping.getAttribute("data-value")) ?? "0"
  )
  const taxesVal = Number(
    (await page.getByTestId("cart-taxes").getAttribute("data-value")) ?? "0"
  )
  const totalVal = Number(
    (await checkoutPage.cartTotal.getAttribute("data-value")) ?? "0"
  )

  expect(shippingVal).toBeGreaterThan(0)
  expect(totalVal).toBeGreaterThan(subtotalVal)
  expect(totalVal).toBeCloseTo(subtotalVal + shippingVal + taxesVal, 2)
})
