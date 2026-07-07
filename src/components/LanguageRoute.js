import { useEffect } from "react";
import { useParams, Outlet, Navigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const SUPPORTED_LANGS = ["en", "fr"];

/**
 * Wrapper route that reads the :lang param from the URL (e.g. /en, /fr)
 * and syncs it with the LanguageContext + localStorage.
 *
 * Because this route matches ANY first path segment (/:lang), unknown
 * segments (e.g. /xyz) would otherwise render the homepage under a bogus
 * URL. Redirect those to the real homepage instead.
 *
 * All child routes render via <Outlet />.
 */
const LanguageRoute = () => {
  const { lang } = useParams();
  const { language, changeLanguage } = useLanguage();

  const isSupported = SUPPORTED_LANGS.includes(lang);

  useEffect(() => {
    if (isSupported && lang !== language) {
      changeLanguage(lang);
    }
  }, [lang, language, changeLanguage, isSupported]);

  if (!isSupported) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default LanguageRoute;
