"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./locales/en/translation.json";
import esTranslation from "./locales/es/translation.json";
import frTranslation from "./locales/fr/translation.json";
import jaTranslation from "./locales/ja/translation.json";
import arTranslation from "./locales/ar/translation.json";
import portTranslation from "./locales/port/translation.json";
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    es: { translation: esTranslation },
    fr: { translation: frTranslation },
    ja: { translation: jaTranslation },
    ar: { translation: arTranslation },
    port: { translation: portTranslation },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
