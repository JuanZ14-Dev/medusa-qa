import { expect, test } from "@playwright/test"
import { QA_ENV } from "../../fixtures/env.fixture.js"
import { getStoreProducts } from "../../helpers/api-client.js"
import { CatalogPage } from "../../pages/storefront/catalog.page.js"

test("CP-CAT-03: Listado de productos mediante Storefront UI y API /store/products", async ({
  page,
  request,
}) => {
  const apiRes = await getStoreProducts(request)
  expect(apiRes.status()).toBe(200)
  const apiJson = (await apiRes.json()) as {
    products: Array<{ id: string; title: string }>
    count: number
  }
  expect(apiJson.products.length).toBeGreaterThan(0)

  const catalogPage = new CatalogPage(page)
  await catalogPage.gotoStore()

  await expect(catalogPage.storeTitle).toBeVisible()
  await expect(catalogPage.productsList).toBeVisible()
  const uiCount = await catalogPage.productCards.count()
  expect(uiCount).toBeGreaterThan(0)
  expect(uiCount).toBeLessThanOrEqual(apiJson.count)

  const firstApiTitle = apiJson.products[0].title
  await expect(
    catalogPage.productsList.getByText(firstApiTitle).first()
  ).toBeVisible()
  expect(page.url()).toContain(`/${QA_ENV.defaultRegion}/store`)
})
