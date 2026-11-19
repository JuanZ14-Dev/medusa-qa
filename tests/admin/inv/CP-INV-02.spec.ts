import { expect, test } from "@playwright/test"
import { QA_ENV } from "../../fixtures/env.fixture.js"
import { adminHeaders, getAdminToken } from "../../helpers/api-client.js"

test.describe("CP-INV-02: Validación de límites en cantidad de stock BVA", () => {
  test("CP-INV-02: Validación de límite superior e inferior en cantidad de stock BVA", async ({
    request,
  }) => {
    const token = await getAdminToken(request)
    const slRes = await request.get(`${QA_ENV.backendUrl}/admin/stock-locations`, {
      headers: adminHeaders(token),
    })
    const { stock_locations } = (await slRes.json()) as {
      stock_locations: Array<{ id: string }>
    }
    const slocId = stock_locations[0].id

    const invRes = await request.post(`${QA_ENV.backendUrl}/admin/inventory-items`, {
      headers: adminHeaders(token),
      data: {
        sku: `QA-ADMIN-BVA-${Date.now()}`,
        title: `QA-Admin-BVA-${Date.now()}`,
      },
    })
    expect(invRes.status()).toBe(200)
    const { inventory_item } = (await invRes.json()) as {
      inventory_item: { id: string }
    }

    // Límite inferior válido: 0
    const zeroRes = await request.post(
      `${QA_ENV.backendUrl}/admin/inventory-items/${inventory_item.id}/location-levels`,
      {
        headers: adminHeaders(token),
        data: { location_id: slocId, stocked_quantity: 0 },
      }
    )
    expect(zeroRes.status()).toBe(200)

    // Límite inválido negativo: -1
    const negRes = await request.post(
      `${QA_ENV.backendUrl}/admin/inventory-items/${inventory_item.id}/location-levels/${slocId}`,
      {
        headers: adminHeaders(token),
        data: { stocked_quantity: -1 },
      }
    )
    expect(negRes.status()).toBeGreaterThanOrEqual(400)

    // Límite válido alto: 99999
    const highRes = await request.post(
      `${QA_ENV.backendUrl}/admin/inventory-items/${inventory_item.id}/location-levels/${slocId}`,
      {
        headers: adminHeaders(token),
        data: { stocked_quantity: 99999 },
      }
    )
    expect(highRes.status()).toBe(200)

    await request.delete(
      `${QA_ENV.backendUrl}/admin/inventory-items/${inventory_item.id}`,
      { headers: adminHeaders(token) }
    )
  })
})
