import { expect, test } from "@playwright/test"
import { QA_ENV } from "../../fixtures/env.fixture.js"
import { adminHeaders, getAdminToken } from "../../helpers/api-client.js"
import { AdminInventoryPage } from "../../pages/admin/inventory.page.js"
import { AdminLoginPage } from "../../pages/admin/login.page.js"

test.describe("CP-INV-04: Consulta de niveles de inventario", () => {
  test("CP-INV-04: Consulta de niveles de inventario mediante /admin/inventory-items", async ({
    page,
    request,
  }) => {
    const token = await getAdminToken(request)
    const res = await request.get(`${QA_ENV.backendUrl}/admin/inventory-items?limit=10`, {
      headers: adminHeaders(token),
    })
    expect(res.status()).toBe(200)
    const json = (await res.json()) as {
      inventory_items: Array<{ id: string; sku: string; stocked_quantity?: number }>
    }
    expect(json.inventory_items.length).toBeGreaterThan(0)

    const loginPage = new AdminLoginPage(page)
    await loginPage.goto()
    await loginPage.loginAndExpectDashboard()

    const inventoryPage = new AdminInventoryPage(page)
    await inventoryPage.goto()
    await expect(page.locator("main")).toContainText(json.inventory_items[0].sku)
  })
})
