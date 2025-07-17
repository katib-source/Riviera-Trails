import React, { useState, useEffect } from "react";
import { Masonry } from "react-visual-grid";
import { testimonialsData } from "../data/toursData";
import { FadeIn, SlideIn } from "../components/LoadingAnimations";
import { FiStar, FiMapPin, FiCalendar, FiHeart } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const TestimonialsNew = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Extended testimonials with more client experiences
  const extendedTestimonials = [
    ...testimonialsData,
    {
      id: 4,
      name: "Jean-Pierre Dubois",
      country: "France",
      rating: 5,
      text: "Even as a local, I discovered hidden gems I never knew existed. The team's passion for the region is absolutely contagious! They showed us secret viewpoints and told stories that brought every location to life.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      tour: "Provence Medieval Villages",
      bgColor: "from-blue-100 to-blue-200",
      textColor: "text-blue-800",
    },
    {
      id: 5,
      name: "Lisa & David Chen",
      country: "Singapore",
      rating: 5,
      text: "Perfect honeymoon experience! The small group setting made it intimate and our guide captured beautiful photos of us throughout the day. We felt like VIPs exploring Monaco and Monte-Carlo.",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      tour: "Eze • Monaco • Monte-Carlo",
      bgColor: "from-purple-100 to-purple-200",
      textColor: "text-purple-800",
    },
    {
      id: 6,
      name: "The Rodriguez Family",
      country: "Spain",
      rating: 5,
      text: "Traveling with our teenagers can be challenging, but Azur Escape made it magical for all of us. The guides were patient, knowledgeable, and knew exactly how to engage every family member.",
      image:
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      tour: "Grasse & Medieval Villages",
      bgColor: "from-amber-100 to-amber-200",
      textColor: "text-amber-800",
    },
    {
      id: 7,
      name: "Margaret Thompson",
      country: "Australia",
      rating: 5,
      text: "At 72, I wasn't sure about doing tours anymore, but Azur Escape made everything so comfortable and accessible. They adapted the pace perfectly for me and I saw the most beautiful places.",
      image:
        "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      tour: "French Riviera Highlights",
      bgColor: "from-green-100 to-green-200",
      textColor: "text-green-800",
    },
    {
      id: 8,
      name: "Ahmed & Fatima Al-Mansouri",
      country: "UAE",
      rating: 5,
      text: "As first-time visitors to France, we were nervous about the language barrier. The multilingual guides made us feel so welcome and explained everything in Arabic when needed.",
      image:
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      tour: "Cannes • Antibes • St-Paul de Vence",
      bgColor: "from-pink-100 to-pink-200",
      textColor: "text-pink-800",
    },
    {
      id: 9,
      name: "James & Michael O'Connor",
      country: "Ireland",
      rating: 5,
      text: "Two mates on a lads' trip and we had the absolute best time! The guides were brilliant and showed us the best spots for photos and local experiences. Proper good laugh!",
      image:
        "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      tour: "Saint-Tropez & Port Grimaud",
      bgColor: "from-indigo-100 to-indigo-200",
      textColor: "text-indigo-800",
    },
    {
      id: 10,
      name: "Yuki & Hiroshi Tanaka",
      country: "Japan",
      rating: 5,
      text: "We were worried about the language barrier, but the guides were so patient and understanding. We learned so much about French culture and took beautiful photos!",
      image:
        "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      tour: "Gorges du Verdon",
      bgColor: "from-teal-100 to-teal-200",
      textColor: "text-teal-800",
    },
    {
      id: 11,
      name: "Elena & Carlos Martínez",
      country: "Mexico",
      rating: 5,
      text: "¡Increíble! The tour exceeded all our expectations. The guides spoke Spanish and made us feel like family. We discovered places we never would have found on our own.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      tour: "Nice & Monaco",
      bgColor: "from-rose-100 to-rose-200",
      textColor: "text-rose-800",
    },
  ];

  // Prepare images for the Masonry component with specific dimensions
  const dimensions = [
    [400, 300],
    [320, 400],
    [450, 280],
    [350, 450],
    [500, 350],
    [380, 320],
    [420, 380],
    [360, 400],
    [480, 300],
    [340, 360],
    [460, 340],
  ];

  const masonryImages = extendedTestimonials.map((testimonial, index) => {
    const [width, height] = dimensions[index % dimensions.length];
    return {
      src: testimonial.image,
      alt: `${testimonial.name} from ${testimonial.country}`,
      width,
      height,
      onClick: () => setActiveTestimonial(index),
      className: `rc-w-${width} rc-h-${height} cursor-pointer hover:scale-105 transition-transform duration-300 rounded-lg shadow-md hover:shadow-xl`,
    };
  });

  // Auto-rotate testimonials
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setActiveTestimonial(
          (prev) => (prev + 1) % extendedTestimonials.length
        );
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, extendedTestimonials.length]);

  const whatsappUrl =
    "https://wa.me/33605985410?text=Hello!%20I'm%20interested%20in%20booking%20a%20French%20Riviera%20tour.";

  const currentTestimonial = extendedTestimonials[activeTestimonial];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header Section */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-riviera-blue to-mediterranean-teal bg-clip-text text-transparent mb-6">
                Memories Made Together
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover authentic experiences through the eyes of our guests.
                Explore their photos and stories from the French Riviera.
              </p>
            </div>
          </FadeIn>

          {/* Stats Bar */}
          <FadeIn delay={200}>
            <div className="flex flex-wrap justify-center gap-8 mb-8 bg-white rounded-2xl shadow-lg p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-500 mb-2">
                  4.9★
                </div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500 mb-2">
                  500+
                </div>
                <div className="text-sm text-gray-600">Happy Travelers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">25+</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-500 mb-2">
                  100%
                </div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Split Screen Main Content */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 min-h-[600px]">
            {/* Left Side - Photo Gallery (60%) */}
            <SlideIn direction="left" delay={200}>
              <div className="lg:w-3/5 bg-gray-900 rounded-3xl p-6 shadow-2xl">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    Client Photo Gallery
                  </h2>
                  <p className="text-gray-300">
                    Click on any photo to see their story
                  </p>
                </div>

                <div className="relative bg-gray-800 rounded-2xl p-4 h-[500px] overflow-hidden">
                  <Masonry
                    animationDelay={300}
                    fillMode="VERTICAL"
                    gutter={8}
                    height={460}
                    width="100%"
                    enableAnimation={true}
                  >
                    {masonryImages.map((image, index) => (
                      <div
                        key={index}
                        className={image.className}
                        onClick={image.onClick}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover rounded-lg"
                        />
                        {activeTestimonial === index && (
                          <div className="absolute inset-0 bg-riviera-blue/30 rounded-lg flex items-center justify-center">
                            <FiHeart className="w-8 h-8 text-white" />
                          </div>
                        )}
                      </div>
                    ))}
                  </Masonry>
                </div>
              </div>
            </SlideIn>

            {/* Right Side - Testimonial Cards (40%) */}
            <SlideIn direction="right" delay={400}>
              <div className="lg:w-2/5 space-y-6">
                {/* Current Active Testimonial - Large Card */}
                <div
                  className={`bg-gradient-to-br ${currentTestimonial.bgColor} rounded-3xl p-8 shadow-xl transform transition-all duration-500`}
                >
                  <div className="flex flex-col h-full">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <FiStar
                          key={i}
                          className="w-5 h-5 text-yellow-500 fill-current"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote
                      className={`text-lg italic mb-6 ${currentTestimonial.textColor} leading-relaxed flex-grow`}
                    >
                      "{currentTestimonial.text}"
                    </blockquote>

                    {/* Client Info */}
                    <div className="border-t border-white/30 pt-4">
                      <h3
                        className={`text-xl font-bold ${currentTestimonial.textColor} mb-2`}
                      >
                        {currentTestimonial.name}
                      </h3>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <FiMapPin
                            className={`w-4 h-4 ${currentTestimonial.textColor}`}
                          />
                          <span
                            className={`text-sm ${currentTestimonial.textColor}`}
                          >
                            {currentTestimonial.country}
                          </span>
                        </div>
                        {currentTestimonial.tour && (
                          <div className="flex items-center gap-2">
                            <FiCalendar
                              className={`w-4 h-4 ${currentTestimonial.textColor}`}
                            />
                            <span
                              className={`text-sm ${currentTestimonial.textColor}`}
                            >
                              {currentTestimonial.tour}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center space-x-2 py-4">
                  {extendedTestimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setActiveTestimonial(index);
                        setIsAutoPlaying(false);
                      }}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        activeTestimonial === index
                          ? "bg-riviera-blue scale-125"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>

                {/* Smaller Preview Cards */}
                <div className="space-y-3">
                  {extendedTestimonials
                    .filter((_, index) => index !== activeTestimonial)
                    .slice(0, 2)
                    .map((testimonial, index) => (
                      <div
                        key={testimonial.id}
                        className={`bg-gradient-to-r ${testimonial.bgColor} rounded-2xl p-4 cursor-pointer hover:shadow-lg transition-all duration-300 opacity-80 hover:opacity-100`}
                        onClick={() => {
                          const realIndex = extendedTestimonials.findIndex(
                            (t) => t.id === testimonial.id
                          );
                          setActiveTestimonial(realIndex);
                          setIsAutoPlaying(false);
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div className="flex-grow">
                            <h4
                              className={`font-semibold ${testimonial.textColor} text-sm`}
                            >
                              {testimonial.name}
                            </h4>
                            <p
                              className={`${testimonial.textColor} text-xs truncate`}
                            >
                              "{testimonial.text.substring(0, 60)}..."
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="bg-gradient-to-r from-riviera-blue to-mediterranean-teal rounded-2xl p-6 text-white text-center">
                  <h3 className="text-lg font-bold mb-2">
                    Ready to Create Your Story?
                  </h3>
                  <p className="text-sm mb-4 opacity-90">
                    Join our happy travelers!
                  </p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-riviera-blue px-6 py-2 rounded-xl font-semibold hover:bg-gray-100 transition-colors text-sm"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    Start Your Adventure
                  </a>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsNew;
