import { expect, test } from "@playwright/test"
import { CartPage } from "../../pages/storefront/cart.page.js"
import { CatalogPage } from "../../pages/storefront/catalog.page.js"
import { CheckoutPage } from "../../pages/storefront/checkout.page.js"

test("CP-CHK-07: Validación responsiva de formulario y resumen de dirección en checkout móvil (375x812)", async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 812 })

  const catalogPage = new CatalogPage(page)
  const cartPage = new CartPage(page)
  const checkoutPage = new CheckoutPage(page)

  await catalogPage.gotoProduct("t-shirt")
  await catalogPage.selectProductOption(0, "M")
  await catalogPage.selectProductOption(1, "Black")
  await catalogPage.addToCart()
  await expect(cartPage.navCartLink).toContainText("(1)")

  await checkoutPage.goto("address")

  const hasOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > window.innerWidth
  )
  expect(hasOverflow).toBe(false)

  const firstBox = await checkoutPage.firstNameInput.boundingBox()
  const lastBox = await checkoutPage.lastNameInput.boundingBox()
  expect(firstBox).not.toBeNull()
  expect(lastBox).not.toBeNull()
  expect(lastBox!.y).toBeGreaterThan(firstBox!.y + 10)

  const emailBox = await checkoutPage.emailInput.boundingBox()
  const phoneBox = await checkoutPage.phoneInput.boundingBox()
  expect(emailBox).not.toBeNull()
  expect(phoneBox).not.toBeNull()
  expect(phoneBox!.y).toBeGreaterThan(emailBox!.y + 10)

  await checkoutPage.fillShippingAddress({
    firstName: "Ana",
    lastName: "Lopez",
    address1: "Bredgade 45",
    postalCode: "1260",
    city: "Copenhagen",
    countryCode: "dk",
    email: "ana.chk07.mobile@medusa-test.com",
    phone: "+4512345678",
  })
  await checkoutPage.submitAddress()

  const addrSummary = page.getByTestId("shipping-address-summary")
  const contactSummary = page.getByTestId("shipping-contact-summary")
  const billingSummary = page.getByTestId("billing-address-summary")

  await expect(addrSummary).toBeVisible()
  await expect(contactSummary).toBeVisible()
  await expect(billingSummary).toBeVisible()

  const addrRect = await addrSummary.boundingBox()
  const contactRect = await contactSummary.boundingBox()
  const billingRect = await billingSummary.boundingBox()
  expect(addrRect).not.toBeNull()
  expect(contactRect).not.toBeNull()
  expect(billingRect).not.toBeNull()

  expect(contactRect!.y).toBeGreaterThanOrEqual(addrRect!.y + addrRect!.height - 2)
  expect(billingRect!.y).toBeGreaterThanOrEqual(
    contactRect!.y + contactRect!.height - 2
  )

  const contactOverflow = await contactSummary.evaluate(
    (el) => el.scrollWidth > el.clientWidth + 1
  )
  expect(contactOverflow).toBe(false)
})
