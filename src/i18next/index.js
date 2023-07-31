import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import transENG from '../language/en.json';
import transUZ from '../language/uz.json';
import transRU from '../language/ru.json';


const resources = {
    en: {
        translation: transENG
    },
    uz: {
        translation: transUZ
    },
    ru: {
        translation: transRU
    }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", 
    fallbackLng: "en",

    interpolation: {
      escapeValue: false 
    }
});

export default i18n;