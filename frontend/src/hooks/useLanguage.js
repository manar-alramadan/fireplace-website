import { useTranslation } from "react-i18next";

function useLanguage() {

    const { t, i18n } = useTranslation();

    const isArabic = i18n.language === "ar";

    const changeLanguage = (lang) => {

        i18n.changeLanguage(lang);

        document.documentElement.lang = lang;
        document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

        localStorage.setItem("language", lang);

    };

    return {

        t,

        i18n,

        isArabic,

        changeLanguage

    };

}

export default useLanguage;