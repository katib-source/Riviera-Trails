import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiX, FiMessageCircle } from "react-icons/fi";

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Hide widget when scrolling to footer to avoid overlap
  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setIsVisible(footerTop > windowHeight - 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const quickMessages = [
    {
      title: "Book a Tour",
      message:
        "Hello! I'm interested in booking a French Riviera tour. Could you please provide more information about availability and pricing?",
    },
    {
      title: "Ask Questions",
      message:
        "Hi! I have some questions about your French Riviera tours. Could you help me?",
    },
    {
      title: "Custom Tour",
      message:
        "Hello! I'm interested in a custom/private tour of the French Riviera. Can we discuss the options?",
    },
    {
      title: "Group Booking",
      message:
        "Hi! I need to book a tour for a group. Could you provide information about group rates and availability?",
    },
  ];

  const sendWhatsAppMessage = (message) => {
    const phoneNumber = "33605985410";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
    setIsOpen(false);
  };

  if (!isVisible) return null;

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
                  <h3 className="font-semibold text-gray-800">
                    Riviera Trails
                  </h3>
                  <p className="text-sm text-green-600">Online now</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="p-4">
            <p className="text-sm text-gray-600 mb-4">
              Hi! 👋 How can we help you today?
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
                Typically replies in a few minutes
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
