import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { translations } from "../data/translations";

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("azur-escape-language");
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "fr")) {
      setLanguage(savedLanguage);
    } else {
      const browserLanguage = navigator.language || navigator.userLanguage;
      if (browserLanguage.startsWith("fr")) {
        setLanguage("fr");
      }
    }
  }, []);

  // Keep the HTML lang attribute in sync so screen readers use the correct voice
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const changeLanguage = useCallback((newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem("azur-escape-language", newLanguage);
  }, []);

  // Stable translation lookup — only recreated when language changes
  const t = useCallback(
    (key, params = {}) => {
      const keys = key.split(".");
      let translation = translations[language];

      for (const k of keys) {
        if (translation && typeof translation === "object" && k in translation) {
          translation = translation[k];
        } else {
          translation = translations.en;
          for (const fallbackKey of keys) {
            if (
              translation &&
              typeof translation === "object" &&
              fallbackKey in translation
            ) {
              translation = translation[fallbackKey];
            } else {
              return key;
            }
          }
          break;
        }
      }

      if (typeof translation === "string") {
        Object.keys(params).forEach((param) => {
          translation = translation.replace(`{${param}}`, params[param]);
        });
      }

      return translation || key;
    },
    [language]
  );

  // Stable object reference — only changes when language changes
  const value = useMemo(
    () => ({ language, changeLanguage, t }),
    [language, changeLanguage, t]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
