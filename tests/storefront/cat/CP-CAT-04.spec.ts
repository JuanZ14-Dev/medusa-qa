import { expect, test } from "@playwright/test"
import { CatalogPage } from "../../pages/storefront/catalog.page.js"

test("CP-CAT-04: Filtrado por colección o categoría en catálogo de Storefront", async ({
  page,
}) => {
  const catalogPage = new CatalogPage(page)
  await catalogPage.gotoStore()

  const initialCount = await catalogPage.productCards.count()
  expect(initialCount).toBeGreaterThan(1)

  await catalogPage.selectCategoryFilter("Shirts")

  await expect(page).toHaveURL(/Shirts/)
  const filteredCount = await catalogPage.productCards.count()
  expect(filteredCount).toBeGreaterThan(0)
  expect(filteredCount).toBeLessThan(initialCount)
  await expect(
    catalogPage.productsList.getByText("Medusa T-Shirt").first()
  ).toBeVisible()
})
