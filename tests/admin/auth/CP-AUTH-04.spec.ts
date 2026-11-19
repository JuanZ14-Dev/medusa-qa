import { expect, test } from "@playwright/test"
import { QA_ENV } from "../../fixtures/env.fixture.js"
import { AdminLoginPage } from "../../pages/admin/login.page.js"

test.describe("CP-AUTH-04: Autenticación válida e inválida en Admin", () => {
  test("CP-AUTH-04: Autenticación válida en Admin UI y API /auth/user/emailpass", async ({
    page,
    request,
  }) => {
    const apiRes = await request.post(`${QA_ENV.backendUrl}/auth/user/emailpass`, {
      data: {
        email: QA_ENV.adminEmail,
        password: QA_ENV.adminPassword,
      },
    })
    expect(apiRes.status()).toBe(200)
    const body = (await apiRes.json()) as { token?: string }
    expect(body.token).toBeTruthy()

    const loginPage = new AdminLoginPage(page)
    await loginPage.goto()
    await loginPage.loginAndExpectDashboard()
    await expect(page).not.toHaveURL(/\/login/)
  })

  test("CP-AUTH-04: Rechazo de credenciales inválidas en Admin UI y API", async ({
    page,
    request,
  }) => {
    const badRes = await request.post(`${QA_ENV.backendUrl}/auth/user/emailpass`, {
      data: {
        email: QA_ENV.adminEmail,
        password: "WrongPassword123!",
      },
    })
    expect(badRes.status()).toBe(401)

    const loginPage = new AdminLoginPage(page)
    await loginPage.goto()
    await loginPage.login(QA_ENV.adminEmail, "WrongPassword123!")
    await expect(page).toHaveURL(/\/login/)
    await expect(page.locator('[role="alert"], form')).toContainText(
      /invalid|incorrect|unauthorized|error/i
    )
  })
})
