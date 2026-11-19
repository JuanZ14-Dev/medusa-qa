import { expect, test } from "@playwright/test"
import { QA_ENV } from "../../fixtures/env.fixture.js"
import { adminHeaders, getAdminToken } from "../../helpers/api-client.js"

test.describe("CP-PRD-06: Eliminación lógica de producto de prueba en Admin", () => {
  test("CP-PRD-06: Eliminación lógica de producto de prueba en Admin", async ({
    request,
  }) => {
    const token = await getAdminToken(request)
    const ts = Date.now()
    const createRes = await request.post(`${QA_ENV.backendUrl}/admin/products`, {
      headers: adminHeaders(token),
      data: {
        title: `QA-Admin-Delete-${ts}`,
        handle: `qa-admin-delete-${ts}`,
        status: "draft",
        options: [{ title: "Size", values: ["S"] }],
        variants: [
          {
            title: "S",
            sku: `QA-DEL-${ts}`,
            options: { Size: "S" },
            manage_inventory: false,
            prices: [{ amount: 15, currency_code: "eur" }],
          },
        ],
      },
    })
    expect(createRes.status()).toBe(200)
    const { product } = (await createRes.json()) as { product: { id: string } }

    const delRes = await request.delete(
      `${QA_ENV.backendUrl}/admin/products/${product.id}`,
      { headers: adminHeaders(token) }
    )
    expect(delRes.status()).toBe(200)
    const delJson = (await delRes.json()) as { deleted: boolean; id: string }
    expect(delJson.deleted).toBe(true)
    expect(delJson.id).toBe(product.id)

    const getRes = await request.get(
      `${QA_ENV.backendUrl}/admin/products/${product.id}`,
      { headers: adminHeaders(token) }
    )
    expect(getRes.status()).toBe(404)
  })
})
