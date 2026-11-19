import { expect, test } from "@playwright/test"
import { QA_ENV } from "../../fixtures/env.fixture.js"

test.describe("CP-AUTH-05: Bloqueo de acceso sin sesión", () => {
  test("CP-AUTH-05: Bloqueo de acceso sin sesión a rutas protegidas /admin/products y Admin UI", async ({
    page,
    request,
  }) => {
    const apiRes = await request.get(`${QA_ENV.backendUrl}/admin/products`)
    expect(apiRes.status()).toBe(401)

    await page.goto(`${QA_ENV.adminUrl}/products`, { waitUntil: "networkidle" })
    await expect(page).toHaveURL(/\/login/)
  })
})
