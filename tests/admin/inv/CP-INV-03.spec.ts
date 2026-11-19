import { expect, test } from "@playwright/test"
import { QA_ENV } from "../../fixtures/env.fixture.js"
import {
  adminHeaders,
  getAdminToken,
  storeHeaders,
} from "../../helpers/api-client.js"

test.describe("CP-INV-03: Bloqueo de compra cuando stock es cero", () => {
  test("CP-INV-03: Bloqueo o rechazo de compra en Storefront cuando stock es cero", async ({
    request,
  }) => {
    const token = await getAdminToken(request)
    const ts = Date.now()
    const scRes = await request.get(`${QA_ENV.backendUrl}/admin/sales-channels`, {
      headers: adminHeaders(token),
    })
    const { sales_channels } = (await scRes.json()) as {
      sales_channels: Array<{ id: string }>
    }

    const prodRes = await request.post(`${QA_ENV.backendUrl}/admin/products`, {
      headers: adminHeaders(token),
      data: {
        title: `QA-Admin-ZeroStock-${ts}`,
        handle: `qa-admin-zerostock-${ts}`,
        status: "published",
        sales_channels: [{ id: sales_channels[0].id }],
        options: [{ title: "Size", values: ["M"] }],
        variants: [
          {
            title: "M",
            sku: `QA-ZERO-${ts}`,
            options: { Size: "M" },
            manage_inventory: true,
            allow_backorder: false,
            prices: [{ amount: 20, currency_code: "eur" }],
          },
        ],
      },
    })
    expect(prodRes.status()).toBe(200)
    const { product } = (await prodRes.json()) as {
      product: { id: string; variants: Array<{ id: string }> }
    }

    const regRes = await request.get(`${QA_ENV.backendUrl}/store/regions`, {
      headers: storeHeaders(),
    })
    const { regions } = (await regRes.json()) as {
      regions: Array<{ id: string }>
    }
    const cartRes = await request.post(`${QA_ENV.backendUrl}/store/carts`, {
      headers: storeHeaders(),
      data: { region_id: regions[0].id },
    })
    const { cart } = (await cartRes.json()) as { cart: { id: string } }

    const addRes = await request.post(
      `${QA_ENV.backendUrl}/store/carts/${cart.id}/line-items`,
      {
        headers: storeHeaders(),
        data: { variant_id: product.variants[0].id, quantity: 1 },
      }
    )
    expect(addRes.status()).toBeGreaterThanOrEqual(400)

    await request.delete(`${QA_ENV.backendUrl}/admin/products/${product.id}`, {
      headers: adminHeaders(token),
    })
  })
})
