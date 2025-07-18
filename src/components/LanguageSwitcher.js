import React from "react";
import { useLanguage } from "../context/LanguageContext";

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-1 bg-white/10 backdrop-blur-sm rounded-full p-1">
      <button
        onClick={() => changeLanguage("en")}
        className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
          language === "en"
            ? "bg-white text-riviera-blue shadow-sm"
            : "text-white hover:bg-white/20"
        }`}
        aria-label="Switch to English"
        title="Switch to English"
      >
        <span className="text-sm">🇬🇧</span>
        <span className="hidden sm:inline">EN</span>
      </button>
      <button
        onClick={() => changeLanguage("fr")}
        className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
          language === "fr"
            ? "bg-white text-riviera-blue shadow-sm"
            : "text-white hover:bg-white/20"
        }`}
        aria-label="Passer au français"
        title="Passer au français"
      >
        <span className="text-sm">🇫🇷</span>
        <span className="hidden sm:inline">FR</span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
