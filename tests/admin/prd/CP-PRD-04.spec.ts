import { expect, test } from "@playwright/test"
import { QA_ENV } from "../../fixtures/env.fixture.js"
import {
  adminHeaders,
  getAdminToken,
  storeHeaders,
} from "../../helpers/api-client.js"

test.describe("CP-PRD-04: Edición de título y precio reflejada en Storefront", () => {
  test("CP-PRD-04: Edición de título y precio de producto reflejada en Storefront", async ({
    page,
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

    const createRes = await request.post(`${QA_ENV.backendUrl}/admin/products`, {
      headers: adminHeaders(token),
      data: {
        title: `QA-Admin-Edit-${ts}`,
        handle: `qa-admin-edit-${ts}`,
        status: "published",
        sales_channels: [{ id: sales_channels[0].id }],
        options: [{ title: "Size", values: ["M"] }],
        variants: [
          {
            title: "M",
            sku: `QA-EDIT-${ts}`,
            options: { Size: "M" },
            manage_inventory: false,
            prices: [{ amount: 25, currency_code: "eur" }],
          },
        ],
      },
    })
    expect(createRes.status()).toBe(200)
    const { product } = (await createRes.json()) as {
      product: { id: string; handle: string; variants: Array<{ id: string }> }
    }

    const updatedTitle = `QA-Admin-Edited-${ts}`
    const patchRes = await request.post(
      `${QA_ENV.backendUrl}/admin/products/${product.id}`,
      {
        headers: adminHeaders(token),
        data: { title: updatedTitle },
      }
    )
    expect(patchRes.status()).toBe(200)

    const priceRes = await request.post(
      `${QA_ENV.backendUrl}/admin/products/${product.id}/variants/${product.variants[0].id}`,
      {
        headers: adminHeaders(token),
        data: { prices: [{ amount: 42, currency_code: "eur" }] },
      }
    )
    expect(priceRes.status()).toBe(200)

    const storeRes = await request.get(
      `${QA_ENV.backendUrl}/store/products?handle=${product.handle}`,
      { headers: storeHeaders() }
    )
    expect(storeRes.status()).toBe(200)
    const storeJson = (await storeRes.json()) as {
      products: Array<{ title: string }>
    }
    expect(storeJson.products[0].title).toBe(updatedTitle)

    await page.goto(`${QA_ENV.storefrontUrl}/${QA_ENV.defaultRegion}/products/${product.handle}`, {
      waitUntil: "networkidle",
    })
    await expect(page.locator("h1")).toContainText(updatedTitle)
    await expect(page.locator("body")).toContainText(/42/)

    await request.delete(`${QA_ENV.backendUrl}/admin/products/${product.id}`, {
      headers: adminHeaders(token),
    })
  })
})
