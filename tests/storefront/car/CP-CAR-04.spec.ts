import { expect, test } from "@playwright/test"
import { QA_ENV } from "../../fixtures/env.fixture.js"
import { storeHeaders } from "../../helpers/api-client.js"
import { CartPage } from "../../pages/storefront/cart.page.js"
import { CatalogPage } from "../../pages/storefront/catalog.page.js"

test("CP-CAR-04: Rechazo o corrección de cantidad cero o negativa en carrito BVA (0)", async ({
  page,
  request,
}) => {
  const catalogPage = new CatalogPage(page)
  const cartPage = new CartPage(page)

  await catalogPage.gotoProduct("t-shirt")
  await catalogPage.selectProductOption(0, "M")
  await catalogPage.selectProductOption(1, "Black")
  await catalogPage.addToCart()
  await expect(cartPage.navCartLink).toContainText("(1)")

  await cartPage.goto()
  const select = cartPage.productRows.first().getByTestId("product-select-button")
  const optionValues = await select
    .locator("option")
    .evaluateAll((opts) =>
      opts.map((o) => (o as HTMLOptionElement).value).filter((v) => v !== "")
    )
  expect(optionValues).not.toContain("0")
  expect(optionValues).not.toContain("-1")
  expect(optionValues[0]).toBe("1")

  // Verificar a nivel de Store API que cantidad negativa es rechazada (HTTP 400)
  const cookies = await page.context().cookies()
  const cartCookie = cookies.find((c) => c.name === "_medusa_cart_id")
  expect(cartCookie?.value).toBeTruthy()

  const cartRes = await request.get(
    `${QA_ENV.backendUrl}/store/carts/${cartCookie!.value}`,
    { headers: storeHeaders() }
  )
  expect(cartRes.status()).toBe(200)
  const cartData = (await cartRes.json()) as {
    cart: { items: Array<{ id: string }> }
  }
  const lineItemId = cartData.cart.items[0].id

  const negRes = await request.post(
    `${QA_ENV.backendUrl}/store/carts/${cartCookie!.value}/line-items/${lineItemId}`,
    {
      headers: storeHeaders(),
      data: { quantity: -1 },
    }
  )
  expect(negRes.status()).toBeGreaterThanOrEqual(400)
  expect(negRes.status()).toBeLessThan(500)
})
