import { expect, test } from "@playwright/test"
import { QA_ENV } from "../../fixtures/env.fixture.js"
import {
  adminHeaders,
  getAdminToken,
  storeHeaders,
} from "../../helpers/api-client.js"

test.describe("CP-PRM-03: Aplicación de código promocional válido en Storefront", () => {
  test("CP-PRM-03: Aplicación de código promocional válido en carrito de Storefront", async ({
    request,
  }) => {
    const token = await getAdminToken(request)
    const code = `QAVALID${Date.now()}`

    const promoRes = await request.post(`${QA_ENV.backendUrl}/admin/promotions`, {
      headers: adminHeaders(token),
      data: {
        code,
        type: "standard",
        status: "active",
        application_method: {
          type: "percentage",
          target_type: "order",
          value: 15,
        },
      },
    })
    expect(promoRes.status()).toBe(200)
    const { promotion } = (await promoRes.json()) as { promotion: { id: string } }

    const regRes = await request.get(`${QA_ENV.backendUrl}/store/regions`, {
      headers: storeHeaders(),
    })
    const { regions } = (await regRes.json()) as { regions: Array<{ id: string }> }
    const prodRes = await request.get(`${QA_ENV.backendUrl}/store/products?limit=1`, {
      headers: storeHeaders(),
    })
    const { products } = (await prodRes.json()) as {
      products: Array<{ variants: Array<{ id: string }> }>
    }

    const cartRes = await request.post(`${QA_ENV.backendUrl}/store/carts`, {
      headers: storeHeaders(),
      data: { region_id: regions[0].id },
    })
    const { cart } = (await cartRes.json()) as { cart: { id: string } }
    await request.post(`${QA_ENV.backendUrl}/store/carts/${cart.id}/line-items`, {
      headers: storeHeaders(),
      data: { variant_id: products[0].variants[0].id, quantity: 1 },
    })

    const applyRes = await request.post(
      `${QA_ENV.backendUrl}/store/carts/${cart.id}/promotions`,
      {
        headers: storeHeaders(),
        data: { promo_codes: [code] },
      }
    )
    expect(applyRes.status()).toBe(200)
    const { cart: updatedCart } = (await applyRes.json()) as {
      cart: {
        discount_total: number
        promotions?: Array<{ code: string }>
      }
    }
    expect(updatedCart.discount_total).toBeGreaterThan(0)
    expect(updatedCart.promotions?.some((p) => p.code === code)).toBe(true)

    await request.delete(`${QA_ENV.backendUrl}/admin/promotions/${promotion.id}`, {
      headers: adminHeaders(token),
    })
  })
})
