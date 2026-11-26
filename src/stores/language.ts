import { create } from "zustand";
import i18n from "i18next";

type Language = { toggleLang: () => void };
const useLanguage = create<Language>()(() => ({
  toggleLang: () => {
    const current = i18n.resolvedLanguage ?? i18n.language ?? "en";
    void i18n.changeLanguage(current.startsWith("ko") ? "en" : "ko");
  },
}));
export default useLanguage;
