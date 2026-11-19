import { expect, test } from "@playwright/test"
import { CatalogPage } from "../../pages/storefront/catalog.page.js"

test("CP-CAT-05: Búsqueda de término inexistente con estado vacío controlado", async ({
  page,
}) => {
  const catalogPage = new CatalogPage(page)
  await catalogPage.gotoStore()

  await catalogPage.searchProduct("ProductoInexistenteXYZ999")

  await expect(page).toHaveURL(/ProductoInexistenteXYZ999/)
  const cardCount = await catalogPage.productCards.count()
  expect(cardCount).toBe(0)
})
