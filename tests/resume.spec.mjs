import { test, expect } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";

test.beforeEach(async ({ page }) => {
  await page.route("**/*", route => route.request().url().startsWith("http://127.0.0.1:4173") ? route.continue() : route.abort());
});

test("resume renders, routes work and no runtime errors", async ({ page }, info) => {
  const errors = [];
  page.on("pageerror", error => errors.push(error.message));
  await page.goto("/resume/");
  await expect(page.getByRole("heading", { name: "대표 개인 프로젝트", exact: true })).toBeVisible();
  await expect(page.locator("main img").first()).toHaveJSProperty("complete", true);
  expect(await page.locator("main img").first().evaluate(img => img.naturalWidth)).toBeGreaterThan(0);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true);
  await page.screenshot({ path: info.outputPath("resume.png"), fullPage: true });
  await page.getByRole("link", { name: "프로젝트", exact: true }).click();
  await expect(page).toHaveURL(/#\/projects$/);
  await page.getByRole("link", { name: /Private Cloud & Home Infrastructure/ }).click();
  await expect(page.getByRole("heading", { name: "Private Cloud & Home Infrastructure", exact: true })).toBeVisible();
  await expect(page.getByRole("img", { name: "Proxmox and OCI infrastructure overview" })).toBeVisible();
  await page.reload();
  await expect(page.getByRole("heading", { name: "Private Cloud & Home Infrastructure", exact: true })).toBeVisible();
  await page.getByRole("link", { name: "Lab", exact: true }).click();
  await page.getByRole("link", { name: /Local AI Development Lab/ }).click();
  await expect(page.getByRole("heading", { name: "Local AI Development Lab", exact: true })).toBeVisible();
  await page.goto("/resume/#/projects/unknown");
  await expect(page.getByRole("heading", { name: "프로젝트를 찾을 수 없습니다." })).toBeVisible();
  expect(errors).toEqual([]);
});

test("language and dark mode persist; print works", async ({ page }, info) => {
  await page.goto("/resume/");
  await expect(page.getByRole("heading", { name: "대표 개인 프로젝트" })).toBeVisible();
  await page.getByRole("button", { name: "Toggle language" }).click();
  await expect(page.getByRole("heading", { name: "Featured personal projects" })).toBeVisible();
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await page.getByRole("button", { name: "Toggle dark mode" }).click();
  await expect(page.locator("body")).toHaveClass(/dark/);
  await page.reload();
  await expect(page.getByRole("heading", { name: "Featured personal projects" })).toBeVisible();
  await expect(page.locator("body")).toHaveClass(/dark/);
  await page.screenshot({ path: info.outputPath("dark-english.png"), fullPage: true });
  await page.evaluate(() => { window.print = () => { document.body.dataset.printed = "yes"; }; });
  await page.getByRole("button", { name: "Save PDF / Print" }).click();
  await expect(page.locator("body")).toHaveAttribute("data-printed", "yes");
  await page.emulateMedia({ media: "print" });
  await expect(page.locator("header")).toBeHidden();
  await expect(page.locator("footer")).toBeHidden();
  if (info.project.name === "desktop") await page.pdf({ path: info.outputPath("resume-en.pdf"), preferCSSPageSize: true });
});

test("static bilingual HTML and sitemap are available without JavaScript", async ({ browser, request }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  for (const [lang, heading] of [["ko", "대표 개인 프로젝트"], ["en", "Featured personal projects"]]) {
    await page.goto("http://127.0.0.1:4173/resume/static/" + lang + ".html");
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
  }
  await context.close();
  const sitemap = await request.get("/resume/sitemap.xml");
  expect(sitemap.ok()).toBe(true);
  expect(await sitemap.text()).toContain("static/ko.html");
  expect(fs.existsSync(path.resolve("dist/static/en.html"))).toBe(true);
});

test("terminal cube favicon and manifest resolve from resume and static pages", async ({ page, request }) => {
  for (const url of ["/resume/", "/resume/#/projects", "/resume/static/ko.html", "/resume/static/en.html"]) {
    await page.goto(url);
    const icon = page.locator('link[rel="icon"][type="image/svg+xml"]');
    await expect(icon).toHaveCount(1);
    const href = await icon.evaluate(link => link.href);
    expect(new URL(href).pathname).toBe("/resume/favicon.svg");
    const response = await request.get(href);
    expect(response.ok()).toBe(true);
    expect(response.headers()["content-type"]).toContain("image/svg+xml");
    expect(await response.text()).toContain("0plan terminal cube");
    for (const selector of ['link[rel="icon"][type="image/png"]', 'link[rel="apple-touch-icon"]']) {
      const imageUrl = await page.locator(selector).evaluate(link => link.href);
      const result = await request.get(imageUrl);
      expect(result.ok()).toBe(true);
      expect(result.headers()["content-type"]).toContain("image/png");
      const size = await page.evaluate(async url => {
        const img = new Image();
        img.src = url;
        await img.decode();
        return [img.naturalWidth, img.naturalHeight];
      }, imageUrl);
      expect(size).toEqual(selector.includes("apple") ? [180, 180] : [32, 32]);
    }
  }
  const manifest = await request.get("/resume/manifest.json");
  expect(manifest.ok()).toBe(true);
  const data = await manifest.json();
  for (const item of data.icons) expect((await request.get(new URL(item.src, manifest.url()).href)).ok()).toBe(true);
});
