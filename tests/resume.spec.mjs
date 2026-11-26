import { test, expect } from "@playwright/test";
import fs from "node:fs";
import { load } from "js-yaml";

const locale = (lang) =>
  load(fs.readFileSync(`src/locales/${lang}.yml`, "utf8"));

test("resume renders, routes work and no runtime errors", async ({
  page,
}, info) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  await page.goto("/resume/");
  await expect(
    page.getByRole("heading", { name: "대표 개인 프로젝트", exact: true }),
  ).toBeVisible();
  await expect(page.getByText("0plan / The Curious Builder")).toBeVisible();
  const logo = page.locator("header img");
  await expect(logo).toHaveJSProperty("complete", true);
  expect(await logo.evaluate((img) => img.naturalWidth)).toBeGreaterThan(0);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth + 1,
    ),
  ).toBe(true);
  await page.screenshot({
    path: info.outputPath("resume.png"),
    fullPage: true,
  });
  await page.getByRole("link", { name: "프로젝트", exact: true }).click();
  await expect(page).toHaveURL(/#\/projects$/);
  await page
    .getByRole("link", { name: /Private Cloud & Home Infrastructure/ })
    .click();
  await expect(
    page.getByRole("heading", {
      name: "Private Cloud & Home Infrastructure",
      exact: true,
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("img", { name: "Proxmox와 OCI의 역할" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "기술 선택과 설계" }),
  ).toBeVisible();
  await page.reload();
  await expect(
    page.getByRole("heading", {
      name: "Private Cloud & Home Infrastructure",
      exact: true,
    }),
  ).toBeVisible();
  const robots = page.locator('head meta[name="robots"]');
  await expect(robots).toHaveAttribute("content", "noindex");
  await page.getByRole("link", { name: "Lab", exact: true }).click();
  await page.getByRole("link", { name: /Local AI Development Lab/ }).click();
  await expect(
    page.getByRole("heading", {
      name: "Local AI Development Lab",
      exact: true,
    }),
  ).toBeVisible();
  await expect(page).toHaveURL(/#\/lab\/local-ai-development-lab$/);
  await expect(robots).toHaveAttribute("content", "noindex");
  await page.getByRole("link", { name: /목록으로/ }).click();
  await expect(page).toHaveURL(/#\/lab$/);
  await page.goto("/resume/#/projects/apple-t2-linux-research");
  await expect(page).toHaveURL(/#\/lab\/apple-t2-linux-research$/);
  await page.goto("/resume/#/projects/saeyo");
  await page.getByRole("button", { name: "Switch to English" }).click();
  await expect(
    page.getByRole("heading", { name: "Technology and design choices" }),
  ).toBeVisible();
  await expect(page).toHaveTitle("Saeyo | 0plan");
  await page.getByRole("button", { name: "한국어로 전환" }).click();
  await page.goto("/resume/#/projects/unknown");
  await expect(
    page.getByRole("heading", { name: "프로젝트를 찾을 수 없습니다." }),
  ).toBeVisible();
  await page.goto("/resume/#/wrong/route");
  await expect(
    page.getByRole("heading", { name: "페이지를 찾을 수 없습니다." }),
  ).toBeVisible();
  await page.getByRole("link", { name: "이력서로" }).click();
  await expect(
    page.getByRole("heading", { name: "대표 개인 프로젝트" }),
  ).toBeVisible();
  expect(errors).toEqual([]);
});

test("language and dark mode persist; print works", async ({ page }, info) => {
  await page.goto("/resume/");
  await expect(
    page.getByRole("heading", { name: "대표 개인 프로젝트" }),
  ).toBeVisible();
  await page.keyboard.press("Tab");
  const skip = page.getByRole("link", { name: "본문으로 건너뛰기" });
  await expect(skip).toBeFocused();
  await expect(skip).toHaveCSS("outline-style", "solid");
  await page.keyboard.press("Enter");
  await expect(page.locator("main")).toBeFocused();
  if (info.project.name === "desktop") {
    await page.pdf({
      path: info.outputPath("resume-ko.pdf"),
      preferCSSPageSize: true,
      tagged: true,
    });
  }
  await page.getByRole("button", { name: "Switch to English" }).click();
  await expect(
    page.getByRole("heading", { name: "Featured personal projects" }),
  ).toBeVisible();
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await page.getByRole("button", { name: "Toggle dark mode" }).click();
  await expect(page.locator("body")).toHaveClass(/dark/);
  await page.reload();
  await expect(
    page.getByRole("heading", { name: "Featured personal projects" }),
  ).toBeVisible();
  await expect(page.locator("body")).toHaveClass(/dark/);
  await page.screenshot({
    path: info.outputPath("dark-english.png"),
    fullPage: true,
  });
  await expect(page.getByRole("button", { name: /PDF|print/i })).toHaveCount(0);
  await page.emulateMedia({ media: "print" });
  await expect(page.locator("header")).toBeHidden();
  await expect(page.locator("footer")).toBeHidden();
  await expect(
    page.getByRole("link", { name: locale("en").profile.email, exact: true }),
  ).toBeVisible();
  await expect(page.locator("main article").first()).toHaveCSS(
    "break-inside",
    "avoid",
  );
  if (info.project.name === "desktop") {
    const pdf = await page.pdf({
      path: info.outputPath("resume-en.pdf"),
      preferCSSPageSize: true,
      tagged: true,
    });
    expect(pdf.subarray(0, 5).toString()).toBe("%PDF-");
  }
});

test("resume pages opt out of search indexing and remain readable without JavaScript", async ({
  browser,
  baseURL,
  request,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    baseURL,
  });
  const page = await context.newPage();
  const robots = page.locator('head meta[name="robots"]');
  await page.goto("/resume/");
  await expect(robots).toHaveAttribute("content", "noindex");
  await page.getByRole("link", { name: "한국어" }).click();
  for (const lang of ["ko", "en"]) {
    if (lang === "en")
      await page.getByRole("link", { name: "English", exact: true }).click();
    const data = locale(lang);
    await expect(page.locator("html")).toHaveAttribute("lang", lang);
    await expect(
      page.getByRole("heading", { name: data.featured.title, exact: true }),
    ).toBeVisible();
    const entries = [
      "experiences",
      "featured",
      "careers",
      "portfolio",
      "labs",
      "education",
      "certificates",
    ].flatMap((key) => data[key].contents);
    await expect(page.locator("main article h3")).toHaveText(
      entries.map((item) => item.name),
    );
    await expect(page.locator("main article li")).toHaveText(
      entries.flatMap((item) => item.descriptions ?? []),
    );
    await expect(
      page.getByRole("link", { name: "GitHub", exact: true }),
    ).toHaveAttribute("href", data.profile.github);
    await expect(robots).toHaveAttribute("content", "noindex");
  }
  await page.goto("/resume/404.html");
  await expect(robots).toHaveAttribute("content", "noindex");
  await expect(
    page.getByRole("link", { name: "0plan 이력서 / Resume" }),
  ).toHaveAttribute("href", "/resume/");
  await context.close();
  for (const path of [
    "no-such-page",
    "sitemap.xml",
    "locales/ko.yml",
    "locales/en.yml",
  ]) {
    expect((await request.get(`/resume/${path}`)).status(), path).toBe(404);
  }
});

test("terminal cube favicon and manifest resolve from resume and static pages", async ({
  page,
  request,
}) => {
  for (const url of [
    "/resume/",
    "/resume/#/projects",
    "/resume/static/ko.html",
    "/resume/static/en.html",
  ]) {
    await page.goto(url);
    const icon = page.locator('link[rel="icon"][type="image/svg+xml"]');
    await expect(icon).toHaveCount(1);
    const href = await icon.evaluate((link) => link.href);
    expect(new URL(href).pathname).toBe("/resume/favicon.svg");
    const response = await request.get(href);
    expect(response.ok()).toBe(true);
    expect(response.headers()["content-type"]).toContain("image/svg+xml");
    expect(await response.text()).toContain("0plan terminal cube");
    for (const selector of [
      'link[rel="icon"][type="image/png"]',
      'link[rel="apple-touch-icon"]',
    ]) {
      const imageUrl = await page
        .locator(selector)
        .evaluate((link) => link.href);
      const result = await request.get(imageUrl);
      expect(result.ok()).toBe(true);
      expect(result.headers()["content-type"]).toContain("image/png");
      const size = await page.evaluate(async (url) => {
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
  expect(new URL(data.start_url, manifest.url()).pathname).toBe("/resume/");
  for (const item of data.icons)
    expect(
      (await request.get(new URL(item.src, manifest.url()).href)).ok(),
    ).toBe(true);
});

// Let the browser resolve CSS and composite translucent layers on an sRGB pixel.
function samplePairs(page, pairs) {
  return page.evaluate((pairs) => {
    const css = getComputedStyle(document.body);
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = 1;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    function paint(name) {
      const value = css.getPropertyValue(`--${name}`).trim();
      if (!CSS.supports("color", value))
        throw new Error(`Invalid --${name}: ${value}`);
      ctx.fillStyle = value;
      ctx.fillRect(0, 0, 1, 1);
    }
    const pixel = () =>
      Array.from(ctx.getImageData(0, 0, 1, 1).data.slice(0, 3));
    return pairs.map(([ink, surface]) => {
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, 1, 1);
      paint("background");
      if (surface !== "background") paint(surface);
      const background = pixel();
      paint(ink);
      return { pair: `${ink} / ${surface}`, background, foreground: pixel() };
    });
  }, pairs);
}

function luminance(rgb) {
  const [r, g, b] = rgb.map((channel) => {
    const s = channel / 255;
    return s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

test("contrast samples equivalent CSS colors and blends alpha over the actual surface", async ({
  page,
}) => {
  await page.setContent(
    '<body style="--background:rgb(0 0 0);--ink:rgba(0,0,0,.5);--short:#fff;--long:#ffffff;--rgb:rgb(255,255,255);--alpha:#fff8;--long-alpha:#ffffff88">',
  );
  const colors = await samplePairs(
    page,
    ["short", "long", "rgb", "alpha", "long-alpha"].map((name) => [
      "ink",
      name,
    ]),
  );
  for (const sample of colors.slice(0, 3)) {
    expect(sample.background).toEqual([255, 255, 255]);
    expect([
      [127, 127, 127],
      [128, 128, 128],
    ]).toContainEqual(sample.foreground);
  }
  for (const sample of colors.slice(3)) {
    expect(sample.background).toEqual([136, 136, 136]);
    expect(sample.foreground).toEqual([68, 68, 68]);
  }
});

test("brand colors and text contrast work in light, dark and print", async ({
  page,
}, info) => {
  await page.goto("/resume/");
  await expect(
    page.getByRole("heading", { name: "대표 개인 프로젝트", exact: true }),
  ).toBeVisible();
  const check = async (dark) => {
    const samples = await samplePairs(page, [
      ["foreground", "background"],
      ["primary", "background"],
      ["primary", "card"],
      ["primary-foreground", "primary"],
      ["muted-foreground", "background"],
      ["muted-foreground", "muted"],
      ["card-foreground", "card"],
    ]);
    for (const { pair, foreground, background } of samples) {
      const light = luminance(foreground);
      const surface = luminance(background);
      const ratio =
        (Math.max(light, surface) + 0.05) / (Math.min(light, surface) + 0.05);
      expect(ratio, pair).toBeGreaterThanOrEqual(4.5);
    }
    await expect(
      page.getByRole("link", { name: "GitHub", exact: true }),
    ).toHaveCSS("color", dark ? "rgb(20, 184, 166)" : "rgb(15, 118, 110)");
    await expect(page.locator("body")).toHaveCSS(
      "background-color",
      dark ? "rgb(15, 23, 42)" : "rgb(241, 245, 249)",
    );
    await page.screenshot({
      path: info.outputPath(dark ? "brand-dark.png" : "brand-light.png"),
      fullPage: true,
    });
  };
  await check(false);
  await page.getByRole("button", { name: "다크 모드로 전환" }).click();
  await expect(page.locator("body")).toHaveClass(/dark/);
  await check(true);
  await page.emulateMedia({ media: "print" });
  await expect(page.locator("body")).toHaveCSS(
    "background-color",
    "rgb(255, 255, 255)",
  );
  await expect(page.locator("body")).toHaveCSS("color", "rgb(17, 17, 17)");
  await page.emulateMedia({ media: "screen" });
  await page.goto("/resume/static/ko.html");
  await expect(page.locator("body")).toHaveCSS(
    "background-color",
    "rgb(241, 245, 249)",
  );
  await expect(page.locator("body")).toHaveCSS("color", "rgb(15, 23, 42)");
});
