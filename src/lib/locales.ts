import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import yaml from "js-yaml";
import en from "@/locales/en.yml?raw";
import ko from "@/locales/ko.yml?raw";

function loadLocale(source: string) {
  const translation = yaml.load(source);
  if (
    !translation ||
    typeof translation !== "object" ||
    Array.isArray(translation)
  ) {
    throw new Error("Expected a resume translation object");
  }
  return { translation };
}

i18n.on("languageChanged", (language) => {
  document.documentElement.lang = language.startsWith("ko") ? "ko" : "en";
});
void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["ko", "en"],
    fallbackLng: "en",
    load: "languageOnly",
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    interpolation: { escapeValue: false },
    resources: { ko: loadLocale(ko), en: loadLocale(en) },
  });

export default i18n;
