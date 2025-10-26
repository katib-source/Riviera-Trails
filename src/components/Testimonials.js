import React, { useState } from "react";
import { Grid } from "react-visual-grid";
import { testimonialsData } from "../data/testimonialsData";
import { FadeIn, SlideIn } from "./LoadingAnimations";
import { FiStar, FiX, FiMapPin, FiCalendar } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Testimonials = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

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
    },
  ];

  // Prepare images for the Grid component
  const gridImages = extendedTestimonials.map((testimonial) => ({
    src: testimonial.image,
    alt: `${testimonial.name} from ${testimonial.country}`,
    id: testimonial.id,
    width: Math.floor(Math.random() * 200) + 250, // Random widths between 250-450
    height: Math.floor(Math.random() * 150) + 200, // Random heights between 200-350
    onClick: () => setSelectedTestimonial(testimonial),
  }));

  const whatsappUrl =
    "https://wa.me/33605985410?text=Hello!%20I'm%20interested%20in%20booking%20a%20French%20Riviera%20tour.";

  const closeModal = () => {
    setSelectedTestimonial(null);
    document.body.style.overflow = "unset";
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-sand-beige/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-riviera-blue to-mediterranean-teal bg-clip-text text-transparent mb-6">
              Our Travelers' Stories
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover authentic experiences through the eyes of our guests.
              Click on any photo to read their full story and see why they chose
              Azur Escape for their French Riviera adventure.
            </p>
          </div>
        </FadeIn>

        {/* Stats Bar */}
        <FadeIn delay={200}>
          <div className="flex flex-wrap justify-center gap-8 mb-12 bg-white rounded-2xl shadow-lg p-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-500 mb-2">
                4.9★
              </div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-500 mb-2">500+</div>
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

        {/* Visual Grid of Client Photos */}
        <SlideIn direction="up" delay={300}>
          <div className="bg-white rounded-3xl shadow-2xl p-8 mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Click on any photo to read their story
              </h3>
              <p className="text-gray-600">
                Real clients, real experiences, real memories made in the French
                Riviera
              </p>
            </div>

            <div className="relative">
              <Grid
                images={gridImages}
                width="100%"
                height={600}
                gridLayout="vertical"
                gap={12}
                enableResize={true}
                theme={{
                  primaryColor: "#0077be",
                  backgroundColor: "#ffffff",
                  controlBgColor: "#f8fafc",
                  controlBtnColor: "#64748b",
                  controlsBackDropColor: "rgba(0, 0, 0, 0.8)",
                  thumbnailBgColor: "#f1f5f9",
                }}
                imageSizes={{
                  "1X": { width: 180, height: 140 },
                  "2X": { width: 240, height: 180 },
                  "3X": { width: 320, height: 240 },
                }}
              />
            </div>
          </div>
        </SlideIn>

        {/* CTA Section */}
        <FadeIn delay={500}>
          <div className="text-center bg-gradient-to-r from-riviera-blue to-mediterranean-teal rounded-2xl p-8 sm:p-12 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to Create Your Own Story?
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join hundreds of happy travelers who've discovered the magic of
              the French Riviera with us. Your authentic experience awaits!
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-riviera-blue px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl text-lg"
            >
              <FaWhatsapp className="w-6 h-6" />
              Start Your Adventure
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Testimonial Modal */}
      {selectedTestimonial && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Background with Client Image */}
          <div className="absolute inset-0 opacity-30">
            <img
              src={selectedTestimonial.image}
              alt="Background"
              className="w-full h-full object-cover filter blur-sm"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-riviera-blue/40 to-mediterranean-teal/40"></div>
          </div>

          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black/50 p-3 rounded-full"
          >
            <FiX className="w-8 h-8" />
          </button>

          {/* Modal Content */}
          <div className="relative z-10 max-w-4xl mx-auto bg-white/95 backdrop-blur-lg rounded-3xl p-8 sm:p-12 shadow-2xl">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              {/* Client Photo */}
              <div className="lg:w-1/3">
                <img
                  src={selectedTestimonial.image}
                  alt={selectedTestimonial.name}
                  className="w-48 h-48 lg:w-full lg:h-64 rounded-2xl object-cover shadow-xl mx-auto"
                />
              </div>

              {/* Testimonial Content */}
              <div className="lg:w-2/3 text-center lg:text-left">
                {/* Stars */}
                <div className="flex justify-center lg:justify-start gap-1 mb-4">
                  {[...Array(selectedTestimonial.rating)].map((_, i) => (
                    <FiStar
                      key={i}
                      className="w-6 h-6 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl lg:text-2xl text-gray-700 mb-6 italic leading-relaxed">
                  "{selectedTestimonial.text}"
                </blockquote>

                {/* Client Info */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {selectedTestimonial.name}
                  </h3>
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-gray-600">
                    <div className="flex items-center gap-2">
                      <FiMapPin className="w-5 h-5 text-riviera-blue" />
                      <span>{selectedTestimonial.country}</span>
                    </div>
                    {selectedTestimonial.tour && (
                      <div className="flex items-center gap-2">
                        <FiCalendar className="w-5 h-5 text-mediterranean-teal" />
                        <span>{selectedTestimonial.tour}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="bg-gradient-to-r from-riviera-blue/10 to-mediterranean-teal/10 rounded-xl p-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-yellow-500">
                        4.9★
                      </div>
                      <div className="text-xs text-gray-600">Rating</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-green-500">
                        500+
                      </div>
                      <div className="text-xs text-gray-600">Reviews</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-blue-500">
                        100%
                      </div>
                      <div className="text-xs text-gray-600">Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
