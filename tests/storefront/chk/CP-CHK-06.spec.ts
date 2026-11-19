import { expect, test } from "@playwright/test"
import { QA_ENV } from "../../fixtures/env.fixture.js"
import { storeHeaders } from "../../helpers/api-client.js"
import { CartPage } from "../../pages/storefront/cart.page.js"
import { CatalogPage } from "../../pages/storefront/catalog.page.js"
import { CheckoutPage } from "../../pages/storefront/checkout.page.js"

test("CP-CHK-06: Verificación de creación de orden vía /store/orders tras pago", async ({
  page,
  request,
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
    firstName: "Mateo",
    lastName: "Rios",
    address1: "Strøget 12",
    postalCode: "1160",
    city: "Copenhagen",
    countryCode: "dk",
    email: `mateo.chk06.${Date.now()}@medusa-test.com`,
    phone: "+4598765432",
  })
  await checkoutPage.submitAddress()

  const deliveryRadios = page.getByTestId("delivery-option-radio")
  await expect(deliveryRadios.first()).toBeVisible()
  await deliveryRadios.first().click()
  await expect(checkoutPage.submitDeliveryButton).toBeEnabled({ timeout: 15000 })
  await checkoutPage.submitDeliveryButton.click()
  await page.waitForLoadState("networkidle")

  const paymentRadio = page.getByTestId("radio-button").first()
  if (await paymentRadio.isVisible()) {
    await paymentRadio.click()
  }
  await expect(checkoutPage.submitPaymentButton).toBeEnabled({ timeout: 15000 })
  await checkoutPage.submitPaymentButton.click()
  await page.waitForLoadState("networkidle")

  await expect(checkoutPage.submitOrderButton).toBeEnabled({ timeout: 15000 })
  await checkoutPage.submitOrderButton.click()
  await page.waitForURL(/\/order\/(order_[^/]+)\/confirmed/)

  const match = page.url().match(/\/order\/(order_[^/]+)\/confirmed/)
  expect(match).not.toBeNull()
  const orderId = match![1]

  const orderRes = await request.get(
    `${QA_ENV.backendUrl}/store/orders/${orderId}`,
    { headers: storeHeaders() }
  )
  expect(orderRes.status()).toBe(200)
  const orderJson = (await orderRes.json()) as {
    order: { id: string; items: Array<unknown> }
  }
  expect(orderJson.order.id).toBe(orderId)
  expect(orderJson.order.items.length).toBeGreaterThan(0)
})
