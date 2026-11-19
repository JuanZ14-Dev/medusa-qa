export const QA_ENV = {
  storefrontUrl: process.env.STOREFRONT_URL || "http://localhost:8000",
  adminUrl: process.env.ADMIN_URL || "http://localhost:9000/app",
  backendUrl: process.env.MEDUSA_BACKEND_URL || "http://localhost:9000",
  adminEmail: process.env.ADMIN_EMAIL || "admin@medusa-test.com",
  adminPassword: process.env.ADMIN_PASSWORD || "supersecret",
  customerEmail:
    process.env.STOREFRONT_CUSTOMER_EMAIL || "cliente.qa@medusa-test.com",
  customerPassword:
    process.env.STOREFRONT_CUSTOMER_PASSWORD || "PasswordQA2026!",
} as const
