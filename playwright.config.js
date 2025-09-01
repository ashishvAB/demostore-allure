// playwright.config.ts
import { defineConfig, devices, PlaywrightTestConfig } from "@playwright/test";


export default defineConfig({
  testDir: "./tests",
  use: {
    baseURL: "https://demo.alphabin.co",
    trace: "on",
    video: "on",
    screenshot:"on",
  },
  fullyParallel: true,
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  workers:3,
  reporter: [["line"], ["allure-playwright"]],
  
  projects: [
    {
      name: "Project A",
      retries: 1,
      use: {
        ...devices["Desktop Chrome"],
      },
    },
  ],
});