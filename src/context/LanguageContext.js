import React, { createContext, useContext, useState, useEffect } from "react";
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
    // Check if there's a saved language preference
    const savedLanguage = localStorage.getItem("azur-escape-language");
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "fr")) {
      setLanguage(savedLanguage);
    } else {
      // Detect browser language
      const browserLanguage = navigator.language || navigator.userLanguage;
      if (browserLanguage.startsWith("fr")) {
        setLanguage("fr");
      }
    }
  }, []);

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem("azur-escape-language", newLanguage);
  };

  const t = (key, params = {}) => {
    const keys = key.split(".");
    let translation = translations[language];

    for (const k of keys) {
      if (translation && typeof translation === "object" && k in translation) {
        translation = translation[k];
      } else {
        // Fallback to English if key not found
        translation = translations.en;
        for (const fallbackKey of keys) {
          if (
            translation &&
            typeof translation === "object" &&
            fallbackKey in translation
          ) {
            translation = translation[fallbackKey];
          } else {
            return key; // Return key if not found in any language
          }
        }
        break;
      }
    }

    // Replace parameters in translation
    if (typeof translation === "string") {
      Object.keys(params).forEach((param) => {
        translation = translation.replace(`{${param}}`, params[param]);
      });
    }

    return translation || key;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
