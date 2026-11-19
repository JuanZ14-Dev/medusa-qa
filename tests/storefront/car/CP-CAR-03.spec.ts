import { expect, test } from "@playwright/test"
import { CartPage } from "../../pages/storefront/cart.page.js"
import { CatalogPage } from "../../pages/storefront/catalog.page.js"

test("CP-CAR-03: Incremento y decremento de cantidad con valores límite BVA (1 a 2)", async ({
  page,
}) => {
  const catalogPage = new CatalogPage(page)
  const cartPage = new CartPage(page)

  await catalogPage.gotoProduct("t-shirt")
  await catalogPage.selectProductOption(0, "M")
  await catalogPage.selectProductOption(1, "Black")
  await catalogPage.addToCart()
  await expect(cartPage.navCartLink).toContainText("(1)")

  await cartPage.goto()
  await expect(cartPage.productRows).toHaveCount(1)
  expect(await cartPage.getQuantity(0)).toBe("1")
  const subtotal1 = await cartPage.getSubtotalText()
  expect(subtotal1).toContain("10.00")

  // Incrementar de 1 a 2
  await cartPage.selectQuantity(0, "2")
  await expect(cartPage.subtotal).toContainText("20.00")
  expect(await cartPage.getQuantity(0)).toBe("2")

  // Decrementar de 2 a 1
  await cartPage.selectQuantity(0, "1")
  await expect(cartPage.subtotal).toContainText("10.00")
  expect(await cartPage.getQuantity(0)).toBe("1")
})
