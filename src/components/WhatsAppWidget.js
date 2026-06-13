import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getWhatsAppUrl } from "../config/constants";
import { FaWhatsapp } from "react-icons/fa";
import { FiX, FiMessageCircle } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";

const WhatsAppWidget = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Tour-detail pages carry their own sticky booking bar with a WhatsApp CTA,
  // so the floating widget would collide / duplicate it — suppress it there.
  const onTourPage = /\/tour\//.test(location.pathname);

  // Hide widget when the footer scrolls into view
  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    // IntersectionObserver fires only when the element crosses the threshold —
    // far cheaper than computing getBoundingClientRect on every scroll tick.
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(!entry.isIntersecting),
      { threshold: 0, rootMargin: "100px 0px 0px 0px" }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const quickMessages = [
    {
      title: t("whatsapp.bookTour"),
      message: t("whatsapp.bookTourMsg"),
    },
    {
      title: t("whatsapp.askQuestions"),
      message: t("whatsapp.askQuestionsMsg"),
    },
    {
      title: t("whatsapp.customTour"),
      message: t("whatsapp.customTourMsg"),
    },
    {
      title: t("whatsapp.groupBooking"),
      message: t("whatsapp.groupBookingMsg"),
    },
  ];

  const sendWhatsAppMessage = (message) => {
    window.open(getWhatsAppUrl(message), "_blank");
    setIsOpen(false);
  };

  if (!isVisible || onTourPage) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Quick Messages Panel */}
      {isOpen && (
        <div className="mb-4 bg-white rounded-xl shadow-2xl border border-gray-200 w-80 max-w-[calc(100vw-2rem)]">
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <FaWhatsapp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Azur Escape</h3>
                  <p className="text-sm text-green-600">{t("whatsapp.onlineNow")}</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="p-4">
            <p className="text-sm text-gray-600 mb-4">
              {t("whatsapp.greeting")}
            </p>

            <div className="space-y-2">
              {quickMessages.map((item, index) => (
                <button
                  key={index}
                  onClick={() => sendWhatsAppMessage(item.message)}
                  className="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-green-500 hover:bg-green-50 transition-all duration-200 text-sm"
                >
                  {item.title}
                </button>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-xs text-gray-500 text-center">
                {t("whatsapp.replyTime")}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group relative"
        aria-label="Open WhatsApp chat"
      >
        {isOpen ? (
          <FiX className="w-6 h-6" />
        ) : (
          <>
            <FaWhatsapp className="w-6 h-6" />
            {/* Pulse animation */}
            <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
            {/* Message bubble indicator */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
              <FiMessageCircle className="w-2 h-2 text-white" />
            </div>
          </>
        )}
      </button>
    </div>
  );
};

export default WhatsAppWidget;
