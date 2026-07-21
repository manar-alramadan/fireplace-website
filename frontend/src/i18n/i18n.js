import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en/common.json";
import ar from "./locales/ar/common.json";
import homeEn from "./locales/en/home.json";
import homeAr from "./locales/ar/home.json";
import servicesEn from "./locales/en/services.json";
import servicesAr from "./locales/ar/services.json";
import galleryEn from  "./locales/en/gallery.json";
import galleryAr from  "./locales/ar/gallery.json";
import aboutAr from "./locales/ar/about.json";
import  aboutEn from "./locales/en/about.json";
import contactAr from "./locales/ar/contact.json";
import contactEn from "./locales/en/contact.json";
import blogAr from "./locales/ar/blog.json";
import blogEn from "./locales/en/blog.json";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    ...en,
                    home: homeEn,
                    services: servicesEn,
                    gallery:galleryEn,
                    about:aboutEn,
                    contact:contactEn,
                    blog:blogEn
                }
            },
            ar: {
                translation: {
                    ...ar,
                    home: homeAr,
                    services: servicesAr,
                    gallery:galleryAr,
                    about:aboutAr,
                    contact:contactAr,
                    blog:blogAr
                }
            }
        },

        lng: localStorage.getItem("language") || "en",

        fallbackLng: "en",

        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;