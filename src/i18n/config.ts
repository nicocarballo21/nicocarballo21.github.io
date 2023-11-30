import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./en/translation.json";
import es from "./es/translation.json";

export const resources = {
  en: {
    translation: en,
  },
  es: {
    translation: es,
  },
} as const;

export type ProjectType =
  (typeof resources)["en"]["translation"]["projects"]["title"][0];

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    resources,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
