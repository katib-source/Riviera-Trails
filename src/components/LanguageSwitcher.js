import React from "react";
import { useLanguage } from "../context/LanguageContext";

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-1 bg-white/10 backdrop-blur-sm rounded-full p-1">
      <button
        onClick={() => changeLanguage("en")}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
          language === "en"
            ? "bg-white text-riviera-blue shadow-sm"
            : "text-white hover:bg-white/20"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage("fr")}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
          language === "fr"
            ? "bg-white text-riviera-blue shadow-sm"
            : "text-white hover:bg-white/20"
        }`}
      >
        FR
      </button>
    </div>
  );
};

export default LanguageSwitcher;
