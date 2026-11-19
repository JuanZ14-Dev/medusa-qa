import { expect, test } from "@playwright/test"
import { QA_ENV } from "../../fixtures/env.fixture.js"
import { adminHeaders, getAdminToken } from "../../helpers/api-client.js"
import { AdminLoginPage } from "../../pages/admin/login.page.js"
import { AdminProductsPage } from "../../pages/admin/products.page.js"

test.describe("CP-PRD-03: Creación y consulta de producto en Admin", () => {
  test("CP-PRD-03: Creación y consulta de producto en Admin UI y /admin/products", async ({
    page,
    request,
  }) => {
    const ts = Date.now()
    const title = `QA-Admin-Producto-${ts}`
    const handle = `qa-admin-producto-${ts}`

    const loginPage = new AdminLoginPage(page)
    await loginPage.goto()
    await loginPage.loginAndExpectDashboard()

    const productsPage = new AdminProductsPage(page)
    const productId = await productsPage.createPublishedProduct(
      title,
      handle,
      "Producto creado por prueba automatizada CP-PRD-03",
      "35"
    )
    expect(productId).toMatch(/^prod_/)

    const token = await getAdminToken(request)
    const res = await request.get(`${QA_ENV.backendUrl}/admin/products/${productId}`, {
      headers: adminHeaders(token),
    })
    expect(res.status()).toBe(200)
    const json = (await res.json()) as { product: { id: string; title: string; status: string } }
    expect(json.product.title).toBe(title)
    expect(json.product.status).toBe("published")

    await request.delete(`${QA_ENV.backendUrl}/admin/products/${productId}`, {
      headers: adminHeaders(token),
    })
  })
})
