export const QA_ENV = {
  storefrontUrl: process.env.STOREFRONT_URL || "http://localhost:8000",
  adminUrl: process.env.ADMIN_URL || "http://localhost:9000/app",
  backendUrl: process.env.MEDUSA_BACKEND_URL || "http://localhost:9000",
  publishableKey:
    process.env.MEDUSA_PUBLISHABLE_KEY ||
    "pk_e84689eab39c022d3c4aabffb4784f19fb9cf94870bb000c6493bdd99e4db55c",
  defaultRegion: process.env.DEFAULT_REGION || "dk",
  adminEmail: process.env.ADMIN_EMAIL || "admin@medusa-test.com",
  adminPassword: process.env.ADMIN_PASSWORD || "supersecret",
  customerEmail:
    process.env.STOREFRONT_CUSTOMER_EMAIL || "cliente.qa@medusa-test.com",
  customerPassword:
    process.env.STOREFRONT_CUSTOMER_PASSWORD || "PasswordQA2026!",
} as const
