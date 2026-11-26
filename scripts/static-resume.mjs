import assert from "node:assert/strict";
import fs from "node:fs";
import { load } from "js-yaml";
import { createServer } from "vite";

const languages = ["ko", "en"];
const locales = Object.fromEntries(
  languages.map((lang) => [
    lang,
    load(fs.readFileSync(`src/locales/${lang}.yml`, "utf8")),
  ]),
);

// Compare keys, list lengths (including bullets) and leaf types before i18next can fall back.
function structure(value, path) {
  if (Array.isArray(value))
    return value.map((item, i) => structure(item, `${path}[${i}]`));
  if (value !== null && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [
        key,
        structure(item, `${path}.${key}`),
      ]),
    );
  }
  assert.ok(
    typeof value === "string" && value.trim(),
    `Expected nonempty text at ${path}`,
  );
  return "text";
}
assert.deepEqual(
  structure(locales.en, "en"),
  structure(locales.ko, "ko"),
  "Resume translations differ in structure",
);
for (const section of ["featured", "labs"]) {
  const ids = (locale) => locale[section].contents.map((item) => item.id);
  const keys = ids(locales.ko);
  assert.deepEqual(
    ids(locales.en),
    keys,
    `Translated routes differ in ${section}`,
  );
  assert.equal(
    new Set(keys).size,
    keys.length,
    `Duplicate route in ${section}`,
  );
  for (const key of keys) assert.match(key, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
}

const manifest = JSON.parse(
  fs.readFileSync("dist/.vite/manifest.json", "utf8"),
);
const styles = manifest["index.html"].css;
assert.ok(styles?.length, "The resume needs the built stylesheet");
fs.mkdirSync("dist/static", { recursive: true });

// Use the same React resume and compiled CSS for print, static HTML and the interactive site.
const server = await createServer({
  server: { middlewareMode: true, watch: null, hmr: false },
});
try {
  const { renderPage } = await server.ssrLoadModule("/scripts/static-page.tsx");
  for (const lang of languages) {
    const html = await renderPage(lang, locales[lang], styles);
    fs.writeFileSync(`dist/static/${lang}.html`, `<!doctype html>\n${html}`);
  }
} finally {
  await server.close();
}
