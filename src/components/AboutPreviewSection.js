import React from "react";
import {
  FiMapPin,
  FiHeart,
  FiUsers,
  FiStar,
  FiShield,
  FiPhone,
  FiCheckCircle,
  FiGlobe,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import { testimonialsData } from "../data/bilingualTestimonials";
import { FadeIn, SlideIn } from "./LoadingAnimations";

const AboutPreviewSection = () => {
  const { language, t } = useLanguage();
  
  // Get testimonials based on current language
  const testimonials = testimonialsData[language];
  // Select first 3 testimonials for preview
  const previewTestimonials = testimonials.slice(0, 3);

  const trustFeatures = [
    {
      icon: <FiShield className="w-6 h-6" />,
      title: t("about.trustSection.features.licensed.title"),
      description: t("about.trustSection.features.licensed.description"),
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: t("about.trustSection.features.smallGroups.title"),
      description: t("about.trustSection.features.smallGroups.description"),
    },
    {
      icon: <FiHeart className="w-6 h-6" />,
      title: t("about.trustSection.features.localExpertise.title"),
      description: t("about.trustSection.features.localExpertise.description"),
    },
    {
      icon: <FiGlobe className="w-6 h-6" />,
      title: t("about.trustSection.features.multilingual.title"),
      description: t("about.trustSection.features.multilingual.description"),
    },
  ];

  const whatsappUrl =
    "https://wa.me/33605985410?text=Hello!%20I'm%20interested%20in%20your%20French%20Riviera%20tours.";

  const getCountryFlag = (country) => {
    const flags = {
      USA: "🇺🇸",
      Canada: "🇨🇦",
      Australia: "🇦🇺",
      UK: "🇬🇧",
      Germany: "🇩🇪",
      France: "🇫🇷",
      Spain: "🇪🇸",
      Italy: "🇮🇹",
      Japan: "🇯🇵",
      Singapore: "🇸🇬",
      UAE: "🇦🇪",
      Ireland: "🇮🇪",
      Mexico: "🇲🇽",
    };
    return flags[country] || "🌍";
  };

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Company Story */}
          <FadeIn>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-riviera-blue/10 text-riviera-blue px-4 py-2 rounded-full text-sm font-medium">
                <FiMapPin className="w-4 h-4" />
                Born on the French Riviera
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-tight">
                {t("about.title")}
                <span className="bg-gradient-to-r from-riviera-blue to-mediterranean-teal bg-clip-text text-transparent">
                  {" "}
                  Experience
                </span>
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                {t("about.description")}
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-gray-700">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                    <FiStar className="w-4 h-4 text-yellow-600" />
                  </div>
                  <span className="font-semibold">5/5 Rating</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <FiUsers className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="font-semibold">
                    500+ {t("hero.stats.travelers")}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <FiGlobe className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="font-semibold">25+ Countries</span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right: Photos */}
          <SlideIn direction="right" delay={200}>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="/images/ppl/w1.jpeg"
                    alt="Group tour in Monaco"
                    className="w-full h-70 object-cover rounded-2xl shadow-lg"
                  />
                  <img
                    src="/images/ppl/w2.jpeg"
                    alt="Scenic French Riviera landscape"
                    className="w-full h-70 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <img
                    src="/images/ppl/w3.jpeg"
                    alt="Happy clients at Eze Village"
                    className="w-full h-66 object-cover rounded-2xl shadow-lg"
                  />
                  <img
                    src="/images/ppl/w4.jpeg"
                    alt="Family enjoying Saint-Tropez"
                    className="w-full h-48 object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <FiCheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">100%</div>
                    <div className="text-sm text-gray-600">Recommendation</div>
                  </div>
                </div>
              </div>
            </div>
          </SlideIn>
        </div>

        {/* Trust Features Grid */}
        <FadeIn delay={300}>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
              {t("about.trustSection.title")}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {trustFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-riviera-blue to-mediterranean-teal rounded-2xl flex items-center justify-center text-white mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Testimonials Preview */}
        <SlideIn direction="up" delay={400}>
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                {t("about.testimonialsSection.title")}
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t("about.testimonialsSection.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {previewTestimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FiStar
                        key={i}
                        className="w-4 h-4 text-yellow-500 fill-current"
                      />
                    ))}
                  </div>

                  {/* Quote - Short version */}
                  <blockquote className="text-gray-700 mb-4 text-sm italic leading-relaxed">
                    "
                    {testimonial.text.length > 100
                      ? testimonial.text.substring(0, 100) + "..."
                      : testimonial.text}
                    "
                  </blockquote>

                  {/* Client Info */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-riviera-blue to-mediterranean-teal rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800 text-sm">
                        {testimonial.name}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-600">
                        <span>{getCountryFlag(testimonial.country)}</span>
                        <span>{testimonial.country}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA to Full Testimonials */}
            {/* <div className="text-center">
              <Link
                to="/clients"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-riviera-blue to-mediterranean-teal text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transition-shadow"
              >
                <FiCamera className="w-5 h-5" />
                See All Client Stories & Photos
              </Link>
            </div> */}
          </div>
        </SlideIn>

        {/* Contact CTA */}
        <FadeIn delay={500}>
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-riviera-blue to-mediterranean-teal rounded-3xl p-8 sm:p-12 text-white">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                {t("contact.title")}
              </h3>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                {t("contact.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-riviera-blue px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
                >
                  <FaWhatsapp className="w-6 h-6" />
                  {t("hero.ctaWhatsapp")}
                </a>
                <a
                  href="tel:+33605985410"
                  className="inline-flex items-center gap-3 bg-white/20 backdrop-blur text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-colors border border-white/30"
                >
                  <FiPhone className="w-5 h-5" />
                  Call +33 6 05 98 54 10
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default AboutPreviewSection;
