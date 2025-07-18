import { useLanguage } from "../context/LanguageContext";

/**
 * Custom hook for translations with enhanced functionality
 * @returns {Object} Translation functions and language state
 */
export const useTranslation = () => {
  const { language, changeLanguage, t } = useLanguage();

  /**
   * Get localized text with fallback handling
   * @param {string} key - Translation key
   * @param {Object} params - Parameters for text interpolation
   * @param {string} fallback - Fallback text if key not found
   * @returns {string} Translated text
   */
  const translate = (key, params = {}, fallback = key) => {
    const translation = t(key, params);
    return translation === key && fallback !== key ? fallback : translation;
  };

  /**
   * Get localized content from bilingual data objects
   * @param {Object} data - Object with language keys (en, fr)
   * @param {string} field - Field to extract from data
   * @returns {any} Localized content
   */
  const getLocalizedContent = (data, field = null) => {
    if (!data) return null;

    const content = data[language] || data.en || data;

    if (field && content && typeof content === "object") {
      return content[field] || content;
    }

    return content;
  };

  /**
   * Format numbers based on current language
   * @param {number} number - Number to format
   * @param {Object} options - Intl.NumberFormat options
   * @returns {string} Formatted number
   */
  const formatNumber = (number, options = {}) => {
    const locale = language === "fr" ? "fr-FR" : "en-US";
    return new Intl.NumberFormat(locale, options).format(number);
  };

  /**
   * Format currency based on current language
   * @param {number} amount - Amount to format
   * @param {string} currency - Currency code (default: EUR)
   * @returns {string} Formatted currency
   */
  const formatCurrency = (amount, currency = "EUR") => {
    const locale = language === "fr" ? "fr-FR" : "en-US";
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
    }).format(amount);
  };

  /**
   * Format dates based on current language
   * @param {Date|string} date - Date to format
   * @param {Object} options - Intl.DateTimeFormat options
   * @returns {string} Formatted date
   */
  const formatDate = (date, options = {}) => {
    const locale = language === "fr" ? "fr-FR" : "en-US";
    const dateObj = typeof date === "string" ? new Date(date) : date;
    return new Intl.DateTimeFormat(locale, options).format(dateObj);
  };

  /**
   * Get appropriate meta tags for SEO based on current language
   * @param {Object} seoData - SEO data object
   * @returns {Object} Localized SEO meta tags
   */
  const getSEOMeta = (seoData) => {
    if (!seoData) return {};

    return {
      title: getLocalizedContent(seoData.title),
      description: getLocalizedContent(seoData.description),
      keywords: getLocalizedContent(seoData.keywords),
      ...seoData.common,
    };
  };

  return {
    language,
    changeLanguage,
    t: translate,
    translate,
    getLocalizedContent,
    formatNumber,
    formatCurrency,
    formatDate,
    getSEOMeta,
    isEnglish: language === "en",
    isFrench: language === "fr",
  };
};

export default useTranslation;
