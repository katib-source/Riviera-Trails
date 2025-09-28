import React, { useState, useEffect } from "react";
import { FiInfo, FiShield } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const consent = localStorage.getItem("azur-escape-cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("azur-escape-cookie-consent", "all");
    setIsVisible(false);
    // Enable all tracking
    if (window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "granted",
        functionality_storage: "granted",
        personalization_storage: "granted",
      });
    }
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem("azur-escape-cookie-consent", "necessary");
    setIsVisible(false);
    // Only enable necessary cookies
    if (window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
        ad_storage: "denied",
        functionality_storage: "granted",
        personalization_storage: "denied",
      });
    }
  };

  const handleReject = () => {
    localStorage.setItem("azur-escape-cookie-consent", "rejected");
    setIsVisible(false);
    // Disable all non-essential cookies
    if (window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
        ad_storage: "denied",
        functionality_storage: "denied",
        personalization_storage: "denied",
      });
    }
  };

  const translations = {
    en: {
      title: "We value your privacy",
      description:
        "We use cookies to enhance your browsing experience, analyze site traffic, and provide personalized content. By clicking 'Accept All', you consent to our use of cookies.",
      acceptAll: "Accept All",
      acceptNecessary: "Accept Necessary Only",
      reject: "Reject All",
      showDetails: "Cookie Details",
      hideDetails: "Hide Details",
      necessaryTitle: "Necessary Cookies",
      necessaryDesc:
        "These cookies are essential for the website to function properly. They enable basic features like page navigation and access to secure areas.",
      analyticsTitle: "Analytics Cookies",
      analyticsDesc:
        "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.",
      privacyPolicy: "Privacy Policy",
    },
    fr: {
      title: "Nous respectons votre vie privée",
      description:
        "Nous utilisons des cookies pour améliorer votre expérience de navigation, analyser le trafic du site et fournir du contenu personnalisé. En cliquant sur 'Tout accepter', vous consentez à notre utilisation des cookies.",
      acceptAll: "Tout accepter",
      acceptNecessary: "Accepter uniquement les nécessaires",
      reject: "Tout refuser",
      showDetails: "Détails des cookies",
      hideDetails: "Masquer les détails",
      necessaryTitle: "Cookies nécessaires",
      necessaryDesc:
        "Ces cookies sont essentiels au bon fonctionnement du site web. Ils permettent les fonctions de base comme la navigation et l'accès aux zones sécurisées.",
      analyticsTitle: "Cookies d'analyse",
      analyticsDesc:
        "Ces cookies nous aident à comprendre comment les visiteurs interagissent avec notre site web en collectant et rapportant des informations de manière anonyme.",
      privacyPolicy: "Politique de confidentialité",
    },
  };

  const t = translations[language] || translations.en;

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl">
      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Content */}
          <div className="flex-1">
            <div className="flex items-start gap-3 mb-4">
              <FiInfo className="text-sunset-orange text-2xl flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">{t.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t.description}
                </p>
              </div>
            </div>

            {/* Cookie Details */}
            {showDetails && (
              <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                <div className="space-y-4 text-sm">
                  <div>
                    <div className="flex items-center gap-2 font-medium text-gray-900 mb-1">
                      <FiShield className="text-green-500" />
                      {t.necessaryTitle}
                    </div>
                    <p className="text-gray-600">{t.necessaryDesc}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 font-medium text-gray-900 mb-1">
                      <FiInfo className="text-blue-500" />
                      {t.analyticsTitle}
                    </div>
                    <p className="text-gray-600">{t.analyticsDesc}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 lg:flex-shrink-0">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="text-sm text-gray-600 hover:text-gray-900 underline transition-colors"
            >
              {showDetails ? t.hideDetails : t.showDetails}
            </button>

            <div className="flex flex-col sm:flex-row gap-2">
              <button
                onClick={handleReject}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                {t.reject}
              </button>

              <button
                onClick={handleAcceptNecessary}
                className="px-4 py-2 text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                {t.acceptNecessary}
              </button>

              <button
                onClick={handleAcceptAll}
                className="px-6 py-2 text-sm text-white bg-sunset-orange hover:bg-orange-600 rounded-lg font-medium transition-colors"
              >
                {t.acceptAll}
              </button>
            </div>
          </div>
        </div>

        {/* Privacy Policy Link */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <a
            href={language === "fr" ? "/privacy-policy-fr" : "/privacy-policy"}
            className="text-xs text-gray-500 hover:text-gray-700 underline transition-colors"
          >
            {t.privacyPolicy}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
