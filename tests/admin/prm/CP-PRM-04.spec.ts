import { expect, test } from "@playwright/test"
import { QA_ENV } from "../../fixtures/env.fixture.js"
import { storeHeaders } from "../../helpers/api-client.js"

test.describe("CP-PRM-04: Rechazo de código promocional inexistente o expirado", () => {
  test("CP-PRM-04: Rechazo de código promocional inexistente o expirado en Storefront", async ({
    request,
  }) => {
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

    const badPromoRes = await request.post(
      `${QA_ENV.backendUrl}/store/carts/${cart.id}/promotions`,
      {
        headers: storeHeaders(),
        data: { promo_codes: ["NOEXISTE999"] },
      }
    )
    expect(badPromoRes.status()).toBeGreaterThanOrEqual(400)

    const cartCheckRes = await request.get(
      `${QA_ENV.backendUrl}/store/carts/${cart.id}`,
      { headers: storeHeaders() }
    )
    expect(cartCheckRes.status()).toBe(200)
    const { cart: afterCart } = (await cartCheckRes.json()) as {
      cart: { discount_total: number; promotions?: Array<{ code: string }> }
    }
    expect(afterCart.discount_total).toBe(0)
    expect(afterCart.promotions?.length ?? 0).toBe(0)
  })
})
