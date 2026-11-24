import { expect, test } from "@playwright/test"
import { QA_ENV } from "../../fixtures/env.fixture.js"
import { adminHeaders, getAdminToken } from "../../helpers/api-client.js"

test("CP-INV-05: Bloqueo visual en Storefront UI para variantes con stock cero (BVA)", async ({
  page,
  request,
}) => {
  const token = await getAdminToken(request)
  const ts = Date.now()
  const scRes = await request.get(`${QA_ENV.backendUrl}/admin/sales-channels`, {
    headers: adminHeaders(token),
  })
  expect(scRes.status()).toBe(200)
  const { sales_channels } = (await scRes.json()) as {
    sales_channels: Array<{ id: string }>
  }

  const handle = `qa-inv05-zerostock-${ts}`
  const prodRes = await request.post(`${QA_ENV.backendUrl}/admin/products`, {
    headers: adminHeaders(token),
    data: {
      title: `QA INV-05 ZeroStock ${ts}`,
      handle,
      status: "published",
      sales_channels: [{ id: sales_channels[0].id }],
      options: [{ title: "Size", values: ["M"] }],
      variants: [
        {
          title: "M",
          sku: `QA-INV05-${ts}`,
          options: { Size: "M" },
          manage_inventory: true,
          allow_backorder: false,
          prices: [{ amount: 25, currency_code: "eur" }],
        },
      ],
    },
  })
  expect(prodRes.status()).toBe(200)
  const { product } = (await prodRes.json()) as {
    product: { id: string }
  }

  try {
    await page.goto(
      `${QA_ENV.storefrontUrl}/${QA_ENV.defaultRegion}/products/${handle}`,
      { waitUntil: "networkidle" }
    )
    const availability = page.getByTestId("product-availability")
    await expect(availability).toBeVisible()
    await expect(availability).toHaveText("Out of stock")

    const addBtn = page.getByTestId("add-product-button")
    await expect(addBtn).toBeVisible()
    await expect(addBtn).toBeDisabled()
    await expect(addBtn).toHaveText(/Out of stock/i)
  } finally {
    await request.delete(`${QA_ENV.backendUrl}/admin/products/${product.id}`, {
      headers: adminHeaders(token),
    })
  }
})
