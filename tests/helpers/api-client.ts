import { APIRequestContext, expect } from "@playwright/test"
import { QA_ENV } from "../fixtures/env.fixture.js"

export function storeHeaders(): Record<string, string> {
  return {
    "x-publishable-api-key": QA_ENV.publishableKey,
    "content-type": "application/json",
  }
}

export async function assertEndpointReachable(
  request: APIRequestContext,
  url: string
): Promise<number> {
  const response = await request.get(url)
  expect(response.status()).toBeLessThan(500)
  return response.status()
}

export async function getStoreProducts(request: APIRequestContext) {
  return request.get(`${QA_ENV.backendUrl}/store/products`, {
    headers: storeHeaders(),
  })
}

export async function getAdminToken(request: APIRequestContext): Promise<string> {
  const res = await request.post(`${QA_ENV.backendUrl}/auth/user/emailpass`, {
    data: {
      email: QA_ENV.adminEmail,
      password: QA_ENV.adminPassword,
    },
  })
  expect(res.status()).toBe(200)
  const json = (await res.json()) as { token: string }
  return json.token
}

export function adminHeaders(token: string): Record<string, string> {
  return {
    authorization: `Bearer ${token}`,
    "content-type": "application/json",
  }
}
