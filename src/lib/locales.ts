import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import yaml from "js-yaml";

i18n.on("languageChanged", language => {
  document.documentElement.lang = language.startsWith("ko") ? "ko" : "en";
});
void i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  supportedLngs: ["ko", "en"],
  fallbackLng: "en",
  load: "languageOnly",
  detection: { order: ["localStorage", "navigator"], caches: ["localStorage"] },
  interpolation: { escapeValue: false },
  backend: {
    loadPath: import.meta.env.BASE_URL.replace(/\/?$/, "/") + "locales/{{lng}}.yml",
    parse: (data: string) => yaml.load(data),
  },
});

export default i18n;
