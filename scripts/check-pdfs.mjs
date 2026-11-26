import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { globSync, readFileSync } from "node:fs";
import { load } from "js-yaml";

// Print pagination and line wrapping depend on the installed fonts.
const normalize = (text) => text.normalize("NFKC").replace(/[\s\u00ad]+/gu, "");
for (const lang of ["ko", "en"]) {
  const files = globSync(`test-results/**/resume-${lang}.pdf`);
  assert.equal(files.length, 1, `Expected one ${lang} resume PDF`);
  assert.match(execFileSync("pdfinfo", files, { encoding: "utf8" }), /\(A4\)/);
  const text = execFileSync("pdftotext", ["-layout", files[0], "-"], {
    encoding: "utf8",
  });
  const pages = text.replace(/\f$/, "").split("\f");
  assert.ok(
    pages.every((page) => page.trim()),
    `${lang}: blank PDF page`,
  );
  const contents = normalize(text);
  const data = load(readFileSync(`public/locales/${lang}.yml`, "utf8"));
  const fields = [...Object.values(data.profile)];
  for (const key of [
    "experiences",
    "featured",
    "careers",
    "portfolio",
    "labs",
    "education",
    "certificates",
  ]) {
    fields.push(data[key].title);
    for (const item of data[key].contents) {
      fields.push(
        item.name,
        item.date.from,
        item.date.to,
        item.position,
        ...(item.tools ?? "").split(","),
        ...(item.descriptions ?? []),
      );
    }
  }
  for (const group of data.skill.contents)
    fields.push(group.title, ...group.items.map((item) => item.title));
  for (const field of fields.filter(Boolean)) {
    assert.ok(
      contents.includes(normalize(field)),
      `${lang} PDF missing: ${field}`,
    );
  }
  console.log(`${lang}: ${pages.length} A4 pages; all resume entries present`);
}
