import { useEffect } from "react";
import { useParams, Outlet } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

/**
 * Wrapper route that reads the :lang param from the URL (e.g. /en, /fr)
 * and syncs it with the LanguageContext + localStorage.
 *
 * All child routes render via <Outlet />.
 */
const LanguageRoute = () => {
  const { lang } = useParams();
  const { language, changeLanguage } = useLanguage();

  useEffect(() => {
    if (lang && (lang === "en" || lang === "fr") && lang !== language) {
      changeLanguage(lang);
    }
  }, [lang, language, changeLanguage]);

  return <Outlet />;
};

export default LanguageRoute;
