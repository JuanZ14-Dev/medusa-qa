import { expect, test } from "@playwright/test"
import { QA_ENV } from "../../fixtures/env.fixture.js"
import { adminHeaders, getAdminToken } from "../../helpers/api-client.js"
import { AdminLoginPage } from "../../pages/admin/login.page.js"
import { AdminProductsPage } from "../../pages/admin/products.page.js"

test.describe("CP-PRD-05: Validación de campos requeridos al crear producto", () => {
  test("CP-PRD-05: Validación de campos requeridos al crear producto vacío EP", async ({
    page,
    request,
  }) => {
    const token = await getAdminToken(request)
    const apiEmptyRes = await request.post(`${QA_ENV.backendUrl}/admin/products`, {
      headers: adminHeaders(token),
      data: {},
    })
    expect(apiEmptyRes.status()).toBe(400)

    const loginPage = new AdminLoginPage(page)
    await loginPage.goto()
    await loginPage.loginAndExpectDashboard()

    const productsPage = new AdminProductsPage(page)
    await productsPage.gotoCreate()
    const dlg = productsPage.createDialog()
    await dlg.locator('button:has-text("Continue")').first().click()

    await expect(page).toHaveURL(/\/app\/products\/create/)
    await expect(dlg).toContainText(/required|title|at least/i)
  })
})
