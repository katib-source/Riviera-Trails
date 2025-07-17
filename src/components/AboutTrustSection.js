import React, { useState } from "react";
import {
  FiMapPin,
  FiHeart,
  FiUsers,
  FiGlobe,
  FiStar,
  FiChevronLeft,
  FiChevronRight,
  FiX,
  FiShield,
  FiPhone,
  FiMail,
} from "react-icons/fi";
import { FaWhatsapp, FaGoogle } from "react-icons/fa";
import { testimonialsData } from "../data/toursData";
import { FadeIn, SlideIn } from "./LoadingAnimations";

const AboutTrustSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentGalleryImage, setCurrentGalleryImage] = useState(0);
  const [isTestimonialExpanded, setIsTestimonialExpanded] = useState(false);

  // Gallery images - memories made together with REAL client photos
  const galleryImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Happy travelers exploring Monaco with our guide",
      client: "Sarah & Family - USA",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1595439317096-91c6be88db50?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Group enjoying the sunset in Eze Village",
      client: "Marco & Friends - Italy",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Couples tour in Cannes French Riviera",
      client: "Emily & James - Canada",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Family discovering Saint-Tropez",
      client: "The Johnson Family - Australia",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Wine tasting tour in Provence villages",
      client: "Marie & Pierre - Belgium",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1512427691650-d9b89df46e55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Perfume workshop in Grasse with clients",
      client: "Anna & Lisa - Germany",
    },
  ];

  // Extended testimonials with more detailed client experiences
  const extendedTestimonials = [
    ...testimonialsData,
    {
      id: 4,
      name: "Jean-Pierre Dubois",
      country: "France",
      rating: 5,
      text: "Even as a local, I discovered hidden gems I never knew existed. Our team's passion for the region is absolutely contagious! They showed us secret viewpoints and told stories that brought every location to life.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      tour: "Provence Medieval Villages",
    },
    {
      id: 5,
      name: "Lisa & David Chen",
      country: "Singapore",
      rating: 5,
      text: "Perfect honeymoon experience! The small group setting made it intimate and our guide captured beautiful photos of us throughout the day. We felt like VIPs exploring Monaco and Monte-Carlo. Truly unforgettable!",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      tour: "Eze • Monaco • Monte-Carlo",
    },
    {
      id: 6,
      name: "The Rodriguez Family",
      country: "Spain",
      rating: 5,
      text: "Traveling with our teenagers can be challenging, but Azur Escape made it magical for all of us. The guides were patient, knowledgeable, and knew exactly how to engage every family member. Our kids are still talking about the perfume workshop!",
      image:
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      tour: "Grasse & Medieval Villages",
    },
    {
      id: 7,
      name: "Margaret Thompson",
      country: "Australia",
      rating: 5,
      text: "At 72, I wasn't sure about doing tours anymore, but Azur Escape made everything so comfortable and accessible. They adapted the pace perfectly for me and I saw the most beautiful places I've ever visited. The team truly cares about their guests.",
      image:
        "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      tour: "French Riviera Highlights",
    },
    {
      id: 8,
      name: "Ahmed & Fatima Al-Mansouri",
      country: "UAE",
      rating: 5,
      text: "As first-time visitors to France, we were nervous about the language barrier. The multilingual guides made us feel so welcome and explained everything in Arabic when needed. We learned so much about French culture and history!",
      image:
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      tour: "Cannes • Antibes • St-Paul de Vence",
    },
  ];

  const whatsappUrl =
    "https://wa.me/33605985410?text=Hello!%20I'm%20interested%20in%20booking%20a%20French%20Riviera%20tour.";

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === extendedTestimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? extendedTestimonials.length - 1 : prev - 1
    );
  };

  const openGallery = (index) => {
    setCurrentGalleryImage(index);
    setIsGalleryOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    document.body.style.overflow = "unset";
  };

  const nextGalleryImage = () => {
    setCurrentGalleryImage((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevGalleryImage = () => {
    setCurrentGalleryImage((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  return (
    <section
      id="about"
      className="py-16 bg-gradient-to-br from-white via-gray-50 to-sand-beige/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-riviera-blue to-mediterranean-teal bg-clip-text text-transparent mb-6">
              Why Choose Azur Escape?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your trusted local guide for authentic French Riviera experiences.
              Small groups, big memories, personalized adventures.
            </p>
          </div>
        </FadeIn>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* About Content */}
          <SlideIn direction="left">
            <div>
              <div className="mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
                  Your Local French Riviera Experts
                </h3>

                <div className="space-y-4 text-gray-600 text-base sm:text-lg leading-relaxed">
                  <p>
                    Bonjour! We are passionate about sharing the magic of the
                    French Riviera with visitors from around the world. Our team
                    consists of local experts born and raised in the region, who
                    have spent years discovering the hidden gems and stories
                    that make this area truly special.
                  </p>

                  <p>
                    What started as our collective love for this beautiful
                    region has grown into a mission to provide authentic,
                    personalized experiences that go beyond typical tourist
                    attractions. We believe in small groups, meaningful
                    connections, and creating memories that last a lifetime.
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-8">
                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <FiMapPin className="w-6 h-6 text-riviera-blue mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Local Experts
                    </h4>
                    <p className="text-sm text-gray-600">Born in the region</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <FiUsers className="w-6 h-6 text-riviera-blue mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Small Groups
                    </h4>
                    <p className="text-sm text-gray-600">Max 4 people</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <FiGlobe className="w-6 h-6 text-riviera-blue mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">3 Languages</h4>
                    <p className="text-sm text-gray-600">FR, EN, AR</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <FiHeart className="w-6 h-6 text-riviera-blue mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">500+ Guests</h4>
                    <p className="text-sm text-gray-600">Worldwide</p>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="bg-gradient-to-r from-riviera-blue/10 to-mediterranean-teal/10 p-6 rounded-xl border border-riviera-blue/20">
                <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <FiShield className="w-5 h-5 text-riviera-blue" />
                  What Makes Us Special
                </h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-riviera-blue rounded-full"></div>
                    Licensed and insured local guides
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-riviera-blue rounded-full"></div>
                    Flexible itineraries based on your interests
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-riviera-blue rounded-full"></div>
                    Photography assistance and best viewpoints
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-riviera-blue rounded-full"></div>
                    Personal recommendations for dining & shopping
                  </li>
                </ul>
              </div>
            </div>
          </SlideIn>

          {/* Company Highlights & Stats */}
          <SlideIn direction="right">
            <div className="relative">
              {/* Beautiful scenic image of French Riviera instead of personal photo */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Beautiful French Riviera Coastline - Azur Escape Tours"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                {/* Company motto overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h4 className="text-xl font-bold mb-2">Azur Escape</h4>
                  <p className="text-sm opacity-90">
                    Creating authentic French Riviera experiences since 2020
                  </p>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-riviera-blue mb-1">
                    4.9 ★
                  </div>
                  <div className="text-sm text-gray-600">Google Rating</div>
                </div>
              </div>

              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-mediterranean-teal mb-1">
                    500+
                  </div>
                  <div className="text-xs text-gray-600">Happy Guests</div>
                </div>
              </div>
            </div>
          </SlideIn>
        </div>

        {/* Testimonials Carousel */}
        <SlideIn direction="up" delay={200}>
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                What Our Travelers Say
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Real experiences from real travelers who've explored the French
                Riviera with us
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Testimonial Card - Clickable to expand */}
              <div
                onClick={() => setIsTestimonialExpanded(true)}
                className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 text-center relative overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-riviera-blue to-mediterranean-teal"></div>

                {/* Click to expand hint */}
                <div className="absolute top-4 right-4 text-riviera-blue text-sm font-medium opacity-70 hover:opacity-100 transition-opacity">
                  Click to expand
                </div>

                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[
                    ...Array(extendedTestimonials[currentTestimonial].rating),
                  ].map((_, i) => (
                    <FiStar
                      key={i}
                      className="w-6 h-6 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg sm:text-xl text-gray-700 mb-8 italic leading-relaxed">
                  "{extendedTestimonials[currentTestimonial].text}"
                </blockquote>

                {/* Customer Info */}
                <div className="flex items-center justify-center gap-4">
                  <img
                    src={extendedTestimonials[currentTestimonial].image}
                    alt={extendedTestimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover shadow-lg"
                  />
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-800 text-lg">
                      {extendedTestimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-gray-600">
                      {extendedTestimonials[currentTestimonial].country}
                    </p>
                  </div>
                </div>

                {/* Navigation */}
                <button
                  onClick={prevTestimonial}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-600 p-2 rounded-full shadow-lg transition-all"
                >
                  <FiChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-600 p-2 rounded-full shadow-lg transition-all"
                >
                  <FiChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-6">
                {extendedTestimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentTestimonial
                        ? "bg-riviera-blue w-8"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </SlideIn>

        {/* Trust Stats */}
        <FadeIn delay={300}>
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-green-100 p-4 rounded-full mb-4">
                  <FaGoogle className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">
                  4.9/5
                </div>
                <div className="text-gray-600">Google Reviews</div>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  <FaWhatsapp className="w-8 h-8 text-green-500" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">
                  500+
                </div>
                <div className="text-gray-600">Happy Travelers</div>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-orange-100 p-4 rounded-full mb-4">
                  <FiHeart className="w-8 h-8 text-orange-500" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">
                  100%
                </div>
                <div className="text-gray-600">Recommendation Rate</div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Memories Gallery */}
        <SlideIn direction="up" delay={400}>
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Memories Made Together
              </h3>
              <p className="text-gray-600">
                A glimpse of the beautiful moments we've shared with our
                travelers
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages.map((image, index) => (
                <div
                  key={image.id}
                  onClick={() => openGallery(index)}
                  className="relative group cursor-pointer overflow-hidden rounded-xl aspect-square"
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 p-2 rounded-full">
                      <FiHeart className="w-6 h-6 text-riviera-blue" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SlideIn>

        {/* CTA Section */}
        <FadeIn delay={500}>
          <div className="text-center bg-gradient-to-r from-riviera-blue to-mediterranean-teal rounded-2xl p-8 sm:p-12 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready for Your French Riviera Adventure?
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join hundreds of happy travelers who've discovered the magic of
              the Côte d'Azur with us. Your authentic French Riviera experience
              awaits!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-riviera-blue px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center gap-3 shadow-lg hover:shadow-xl"
              >
                <FaWhatsapp className="w-6 h-6" />
                Book a Tour Now
              </a>

              <div className="flex items-center gap-4 text-white/80">
                <div className="flex items-center gap-2">
                  <FiPhone className="w-5 h-5" />
                  <span>+33 6 05 98 54 10</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiMail className="w-5 h-5" />
                  <span>Quick Response</span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Gallery Lightbox */}
      {isGalleryOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeGallery}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
          >
            <FiX className="w-8 h-8" />
          </button>

          <button
            onClick={prevGalleryImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 bg-black/50 p-2 rounded-full"
          >
            <FiChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={nextGalleryImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 bg-black/50 p-2 rounded-full"
          >
            <FiChevronRight className="w-8 h-8" />
          </button>

          <img
            src={galleryImages[currentGalleryImage].url}
            alt={galleryImages[currentGalleryImage].alt}
            className="max-w-full max-h-full object-contain"
          />

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
            <p className="text-lg font-medium mb-2">
              {galleryImages[currentGalleryImage].alt}
            </p>
            <p className="text-sm opacity-75">
              {currentGalleryImage + 1} of {galleryImages.length}
            </p>
          </div>
        </div>
      )}

      {/* Expanded Testimonials Modal */}
      {isTestimonialExpanded && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Background Image with Animation */}
          <div className="absolute inset-0 opacity-20">
            <img
              src={extendedTestimonials[currentTestimonial].image}
              alt="Client background"
              className="w-full h-full object-cover animate-pulse"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-riviera-blue/30 to-mediterranean-teal/30"></div>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setIsTestimonialExpanded(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black/50 p-2 rounded-full"
          >
            <FiX className="w-8 h-8" />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 bg-black/50 p-3 rounded-full z-10"
          >
            <FiChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 bg-black/50 p-3 rounded-full z-10"
          >
            <FiChevronRight className="w-8 h-8" />
          </button>

          {/* Expanded Testimonial Content */}
          <div className="relative z-10 max-w-4xl mx-auto text-white text-center animate-fadeIn">
            {/* Client Photo - Large */}
            <div className="mb-8">
              <img
                src={extendedTestimonials[currentTestimonial].image}
                alt={extendedTestimonials[currentTestimonial].name}
                className="w-32 h-32 rounded-full object-cover shadow-2xl mx-auto border-4 border-white/20"
              />
            </div>

            {/* Stars - Large */}
            <div className="flex justify-center gap-2 mb-8">
              {[...Array(extendedTestimonials[currentTestimonial].rating)].map(
                (_, i) => (
                  <FiStar
                    key={i}
                    className="w-8 h-8 text-yellow-400 fill-current"
                  />
                )
              )}
            </div>

            {/* Quote - Large and Prominent */}
            <blockquote className="text-2xl sm:text-3xl font-light italic leading-relaxed mb-8 text-white/90 max-w-3xl mx-auto">
              "{extendedTestimonials[currentTestimonial].text}"
            </blockquote>

            {/* Client Info - Enhanced */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                {extendedTestimonials[currentTestimonial].name}
              </h3>
              <p className="text-lg text-white/80 mb-2">
                {extendedTestimonials[currentTestimonial].country}
              </p>
              {extendedTestimonials[currentTestimonial].tour && (
                <p className="text-sm text-white/60 bg-white/10 px-4 py-2 rounded-full inline-block">
                  Tour: {extendedTestimonials[currentTestimonial].tour}
                </p>
              )}
            </div>

            {/* Additional trust elements */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
              <h4 className="text-lg font-semibold mb-4 text-white">
                Why travelers trust us
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-yellow-400">4.9★</div>
                  <div className="text-sm text-white/80">Average Rating</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400">500+</div>
                  <div className="text-sm text-white/80">Happy Clients</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400">100%</div>
                  <div className="text-sm text-white/80">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-3 mt-8">
              {extendedTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-4 h-4 rounded-full transition-all ${
                    index === currentTestimonial
                      ? "bg-white w-10"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutTrustSection;
