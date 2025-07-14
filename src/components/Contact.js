import React from "react";
import {
  FiMail,
  FiMapPin,
  FiInstagram,
  FiFacebook,
  FiStar,
} from "react-icons/fi";
import { FaWhatsapp, FaGoogle } from "react-icons/fa";
import { FadeIn, SlideIn } from "./LoadingAnimations";

const Contact = () => {
  const whatsappUrl =
    "https://wa.me/33605985410?text=Hello!%20I'd%20like%20to%20book%20a%20tour%20or%20get%20more%20information%20about%20your%20French%20Riviera%20experiences.";

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Ready to Explore the French Riviera?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Get in touch to book your personalized tour or ask any questions.
              I'm here to help you create unforgettable memories along the
              Mediterranean coast.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <SlideIn direction="left">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">
                Get In Touch
              </h3>

              <div className="space-y-6">
                {/* WhatsApp */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-200"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                      WhatsApp (Preferred)
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      Quick responses, instant booking
                    </p>
                    <p className="text-green-600 font-medium text-sm sm:text-base break-all">
                      +33 6 05 98 54 10
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:derbalaymene@yahoo.fr"
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-riviera-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <FiMail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                      Email
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      For detailed inquiries
                    </p>
                    <p className="text-riviera-blue font-medium text-sm sm:text-base break-all">
                      derbalaymene@yahoo.fr
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <FiMapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                      Based In
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      Tours throughout the French Riviera
                    </p>
                    <p className="text-gray-700 font-medium text-sm sm:text-base">
                      Nice, Côte d'Azur, France
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h4 className="font-semibold text-gray-800 mb-4 text-sm sm:text-base">
                  Follow Our Adventures
                </h4>
                <div className="flex gap-3 sm:gap-4">
                  <a
                    href="https://instagram.com/rivieratrails"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-200"
                  >
                    <FiInstagram className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </a>
                  <a
                    href="https://facebook.com/rivieratrails"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
                  >
                    <FiFacebook className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </a>
                  <a
                    href="https://g.page/r/rivieratrails"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-200"
                  >
                    <FaGoogle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </SlideIn>

          {/* Embedded Map */}
          <SlideIn direction="right">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">
                Our Tour Areas
              </h3>
              <div className="rounded-lg overflow-hidden shadow-lg h-64 sm:h-80 lg:h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92326.68831761793!2d7.189953127353686!3d43.71628097107258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdc26f996b7715%3A0x40819a5fd979270!2sNice%2C%20France!5e0!3m2!1sen!2sus!4v1703597852541!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="French Riviera Map"
                ></iframe>
              </div>

              {/* Quick Booking CTA */}
              <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-gradient-to-r from-riviera-blue to-mediterranean-teal rounded-lg text-white">
                <h4 className="text-lg sm:text-xl font-semibold mb-2">
                  Ready to Book?
                </h4>
                <p className="mb-3 sm:mb-4 opacity-90 text-sm sm:text-base">
                  Click below to start a WhatsApp conversation and book your
                  tour instantly!
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-riviera-blue px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 text-sm sm:text-base"
                >
                  <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />
                  Book Now on WhatsApp
                </a>
              </div>
            </div>
          </SlideIn>
        </div>

        {/* Trust Indicators */}
        <FadeIn delay={400}>
          <div className="mt-12 sm:mt-16 text-center">
            <div className="inline-flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 text-gray-600 text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <FiStar className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                <span>Licensed Tour Guide</span>
              </div>
              <div className="flex items-center gap-2">
                <FiStar className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                <span>Fully Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <FiStar className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                <span>COVID-19 Safety Protocols</span>
              </div>
              <div className="flex items-center gap-2">
                <FiStar className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                <span>Small Group Guarantee</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;
