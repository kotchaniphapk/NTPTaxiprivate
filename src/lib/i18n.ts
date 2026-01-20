import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import thTranslation from '../locales/th/common.json';
import enTranslation from '../locales/en/common.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      th: {
        translation: thTranslation,
      },
      en: {
        translation: enTranslation,
      },
    },
    fallbackLng: 'th',
    lng: 'th',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;

