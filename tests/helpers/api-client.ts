import { APIRequestContext, expect } from "@playwright/test"
import { QA_ENV } from "../fixtures/env.fixture.js"

export async function assertEndpointReachable(
  request: APIRequestContext,
  url: string
): Promise<number> {
  const response = await request.get(url)
  expect(response.status()).toBeLessThan(500)
  return response.status()
}

export async function getStoreProducts(request: APIRequestContext) {
  const response = await request.get(`${QA_ENV.backendUrl}/store/products`)
  return response
}
