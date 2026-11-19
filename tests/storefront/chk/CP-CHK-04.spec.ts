import { expect, test } from "@playwright/test"
import { CartPage } from "../../pages/storefront/cart.page.js"
import { CatalogPage } from "../../pages/storefront/catalog.page.js"
import { CheckoutPage } from "../../pages/storefront/checkout.page.js"

test("CP-CHK-04: Validación de formato de correo y teléfono en checkout EP", async ({
  page,
}) => {
  const catalogPage = new CatalogPage(page)
  const cartPage = new CartPage(page)
  const checkoutPage = new CheckoutPage(page)

  await catalogPage.gotoProduct("t-shirt")
  await catalogPage.selectProductOption(0, "M")
  await catalogPage.selectProductOption(1, "Black")
  await catalogPage.addToCart()
  await expect(cartPage.navCartLink).toContainText("(1)")

  await checkoutPage.goto("address")
  await checkoutPage.fillShippingAddress({
    firstName: "Ana",
    lastName: "Lopez",
    address1: "Bredgade 45",
    postalCode: "1260",
    city: "Copenhagen",
    countryCode: "dk",
    email: "correo-sin-arroba",
    phone: "abc",
  })

  await checkoutPage.submitAddressButton.click()
  await expect(page).toHaveURL(/step=address/)

  const emailInvalid = await checkoutPage.emailInput.evaluate(
    (el: HTMLInputElement) => !el.checkValidity()
  )
  expect(emailInvalid).toBe(true)
})
