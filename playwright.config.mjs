import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  retries: 0,
  timeout: 30000,
  reporter: [["list"], ["html", { open: "never" }]],
  use: { baseURL: "http://127.0.0.1:4173", locale: "ko-KR", colorScheme: "light", trace: "retain-on-failure", screenshot: "only-on-failure" },
  webServer: { command: "pnpm exec vite preview --host 127.0.0.1 --port 4173 --strictPort", url: "http://127.0.0.1:4173/resume/", reuseExistingServer: false },
  projects: [{ name: "desktop", use: { browserName: "chromium", viewport: { width: 1440, height: 900 } } }, { name: "mobile", use: { browserName: "chromium", viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true } }],
});
