import { expect, test } from "@playwright/test"
import { QA_ENV } from "../../fixtures/env.fixture.js"
import {
  adminHeaders,
  getAdminToken,
  storeHeaders,
} from "../../helpers/api-client.js"

test.describe("CP-ORD-05: Consistencia de totales e impuestos de orden", () => {
  test("CP-ORD-05: Consistencia de totales e impuestos de orden vía /admin/orders", async ({
    request,
  }) => {
    const regRes = await request.get(`${QA_ENV.backendUrl}/store/regions`, {
      headers: storeHeaders(),
    })
    const { regions } = (await regRes.json()) as {
      regions: Array<{ id: string; countries: Array<{ iso_2: string }> }>
    }
    const region = regions[0]
    const prodRes = await request.get(`${QA_ENV.backendUrl}/store/products?limit=1`, {
      headers: storeHeaders(),
    })
    const { products } = (await prodRes.json()) as {
      products: Array<{ variants: Array<{ id: string }> }>
    }
    const cartRes = await request.post(`${QA_ENV.backendUrl}/store/carts`, {
      headers: storeHeaders(),
      data: { region_id: region.id, email: `qa.ord5.${Date.now()}@medusa-test.com` },
    })
    const { cart } = (await cartRes.json()) as { cart: { id: string } }
    await request.post(`${QA_ENV.backendUrl}/store/carts/${cart.id}/line-items`, {
      headers: storeHeaders(),
      data: { variant_id: products[0].variants[0].id, quantity: 2 },
    })
    await request.post(`${QA_ENV.backendUrl}/store/carts/${cart.id}`, {
      headers: storeHeaders(),
      data: {
        shipping_address: {
          first_name: "QA",
          last_name: "Ord5",
          address_1: "Street 5",
          city: "Copenhagen",
          country_code: region.countries[0].iso_2,
          postal_code: "1000",
        },
      },
    })
    const shipRes = await request.get(
      `${QA_ENV.backendUrl}/store/shipping-options?cart_id=${cart.id}`,
      { headers: storeHeaders() }
    )
    const { shipping_options } = (await shipRes.json()) as {
      shipping_options: Array<{ id: string }>
    }
    await request.post(`${QA_ENV.backendUrl}/store/carts/${cart.id}/shipping-methods`, {
      headers: storeHeaders(),
      data: { option_id: shipping_options[0].id },
    })
    const pcRes = await request.post(`${QA_ENV.backendUrl}/store/payment-collections`, {
      headers: storeHeaders(),
      data: { cart_id: cart.id },
    })
    const { payment_collection } = (await pcRes.json()) as {
      payment_collection: { id: string }
    }
    const ppRes = await request.get(
      `${QA_ENV.backendUrl}/store/payment-providers?region_id=${region.id}`,
      { headers: storeHeaders() }
    )
    const { payment_providers } = (await ppRes.json()) as {
      payment_providers: Array<{ id: string }>
    }
    await request.post(
      `${QA_ENV.backendUrl}/store/payment-collections/${payment_collection.id}/payment-sessions`,
      {
        headers: storeHeaders(),
        data: { provider_id: payment_providers[0].id },
      }
    )
    const compRes = await request.post(
      `${QA_ENV.backendUrl}/store/carts/${cart.id}/complete`,
      { headers: storeHeaders() }
    )
    expect(compRes.status()).toBe(200)
    const { order } = (await compRes.json()) as { order: { id: string } }

    const token = await getAdminToken(request)
    const adminOrdRes = await request.get(
      `${QA_ENV.backendUrl}/admin/orders/${order.id}`,
      { headers: adminHeaders(token) }
    )
    expect(adminOrdRes.status()).toBe(200)
    const { order: adminOrder } = (await adminOrdRes.json()) as {
      order: {
        item_subtotal: number
        shipping_subtotal: number
        tax_total: number
        discount_total: number
        total: number
      }
    }

    const expectedTotal =
      adminOrder.item_subtotal +
      adminOrder.shipping_subtotal +
      adminOrder.tax_total -
      adminOrder.discount_total
    expect(adminOrder.total).toBeCloseTo(expectedTotal, 2)
  })
})
