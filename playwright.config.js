import { defineConfig } from "@playwright/test";

export default defineConfig({
  timeout: 60000,
  use: {
    trace: "on",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
  reporter: [["html", { outputFolder: "playwright-report", open: "never" }]],
  projects: [
    { name: "Chromium", use: { browserName: "chromium" } },
    { name: "Firefox", use: { browserName: "firefox" } },
  ],
});
