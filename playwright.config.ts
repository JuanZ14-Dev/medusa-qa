import { defineConfig, devices } from "@playwright/test"
import dotenv from "dotenv"

dotenv.config()

const STOREFRONT_URL = process.env.STOREFRONT_URL || "http://localhost:8000"
const ADMIN_URL = process.env.ADMIN_URL || "http://localhost:9000/app"

export default defineConfig({
  testDir: "./tests",
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: 1,
  timeout: 60_000,
  expect: {
    timeout: 10_000,
  },
  reporter: [
    ["list"],
    ["json", { outputFile: "reports/results.json" }],
    ["junit", { outputFile: "reports/junit.xml" }],
    ["html", { outputFolder: "reports/html", open: "never" }],
  ],
  use: {
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
  projects: [
    {
      name: "storefront",
      testDir: "./tests/storefront",
      use: {
        ...devices["Desktop Chrome"],
        baseURL: STOREFRONT_URL,
      },
    },
    {
      name: "admin",
      testDir: "./tests/admin",
      use: {
        ...devices["Desktop Chrome"],
        baseURL: ADMIN_URL,
      },
    },
  ],
})
