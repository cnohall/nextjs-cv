import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import i18next from 'i18next';

const options = {
  fallbackLng: 'en',
  debug: true,
  ns: ['common'], // Add your namespaces here
  defaultNS: 'common',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
};

i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(options, (err, t) => {
    if (err) console.error('i18next initialization failed', err);
  });

export default i18next;
