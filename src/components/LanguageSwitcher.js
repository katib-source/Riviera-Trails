import React from "react";
import { useLanguage } from "../context/LanguageContext";

const LanguageSwitcher = ({ isDarkBackground = true }) => {
  const { language, changeLanguage } = useLanguage();

  const activeClass = isDarkBackground
    ? "text-white font-semibold"
    : "text-riviera-blue font-semibold";

  const inactiveClass = isDarkBackground
    ? "text-white/60 hover:text-white transition-colors duration-200 cursor-pointer"
    : "text-gray-400 hover:text-riviera-blue transition-colors duration-200 cursor-pointer";

  const separatorClass = isDarkBackground ? "text-white/30" : "text-gray-300";

  return (
    <div className="flex items-center gap-1.5 text-sm tracking-wider uppercase select-none">
      <button
        onClick={() => changeLanguage("fr")}
        className={`transition-colors duration-200 ${
          language === "fr" ? activeClass : inactiveClass
        }`}
      >
        FR
      </button>
      <span className={separatorClass} aria-hidden="true">|</span>
      <button
        onClick={() => changeLanguage("en")}
        className={`transition-colors duration-200 ${
          language === "en" ? activeClass : inactiveClass
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
