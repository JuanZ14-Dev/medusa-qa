import { expect, test } from "@playwright/test"
import { CartPage } from "../../pages/storefront/cart.page.js"
import { CatalogPage } from "../../pages/storefront/catalog.page.js"

test("CP-CAR-06: Integridad de opciones únicas en selector de cantidad del carrito", async ({
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
  const select = cartPage.productRows
    .first()
    .getByTestId("product-select-button")
  await expect(select).toBeVisible()

  const optionValues = await select
    .locator("option")
    .evaluateAll((opts) =>
      opts.map((o) => (o as HTMLOptionElement).value).filter((v) => v !== "")
    )

  expect(optionValues.length).toBe(10)
  expect(new Set(optionValues).size).toBe(optionValues.length)
})
