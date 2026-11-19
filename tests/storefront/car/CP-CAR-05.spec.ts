import { expect, test } from "@playwright/test"
import { CartPage } from "../../pages/storefront/cart.page.js"
import { CatalogPage } from "../../pages/storefront/catalog.page.js"

test("CP-CAR-05: Consolidación automática al agregar el mismo SKU dos veces", async ({
  page,
}) => {
  const catalogPage = new CatalogPage(page)
  const cartPage = new CartPage(page)

  await catalogPage.gotoProduct("t-shirt")
  await catalogPage.selectProductOption(0, "M")
  await catalogPage.selectProductOption(1, "Black")
  await catalogPage.addToCart()
  await expect(cartPage.navCartLink).toContainText("(1)")

  await catalogPage.addToCart()
  await expect(cartPage.navCartLink).toContainText("(2)")

  await cartPage.goto()
  await expect(cartPage.productRows).toHaveCount(1)
  expect(await cartPage.getQuantity(0)).toBe("2")
  await expect(cartPage.subtotal).toContainText("20.00")
})
