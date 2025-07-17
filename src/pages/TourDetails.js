import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FiMapPin,
  FiClock,
  FiUsers,
  FiCamera,
  FiStar,
  FiChevronLeft,
  FiChevronRight,
  FiX,
  FiZoomIn,
} from "react-icons/fi";
import { toursData } from "../data/toursData";
import BookingForm from "../components/BookingForm";
import SEOHead, { seoConfigs } from "../components/SEOHead";

const TourDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const tour = toursData.find((t) => t.id === parseInt(id));
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape" && isModalOpen) {
        setIsModalOpen(false);
        document.body.style.overflow = "unset";
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isModalOpen]);

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Tour Not Found
          </h2>
          <button
            onClick={() => navigate("/")}
            className="bg-riviera-blue text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  // Phone number: +33 6 05 98 54 10
  // Format for URL: 33605985410 (no spaces, no + sign)
  // To use local images:
  // 1. Add your images to public/images/tours/ folder
  // 2. Replace the URLs below with /images/tours/your-image-name.jpg
  const slideshowImages = [
    {
      url: "/images/tours/img1.jpeg", // Replace with your image
    },
    {
      url: "/images/tours/img2.jpeg", // Replace with your image
    },
    {
      url: "/images/tours/img3.jpeg", // Replace with your image
    },
    {
      url: "/images/tours/img4.jpeg", // Replace with your image
    },
    {
      url: "/images/tours/img5.jpeg", // Replace with your image
    },
    {
      url: "/images/tours/img6.jpeg", // Replace with your image
    },
    {
      url: "/images/tours/img7.jpeg", // Replace with your image
    },
    {
      url: "/images/tours/img8.jpeg", // Replace with your image
    },
    {
      url: "/images/tours/img9.jpeg", // Replace with your image
    },
    {
      url: "/images/tours/img10.jpeg", // Replace with your image
    },
    {
      url: "/images/tours/img11.jpeg", // Replace with your image
    },
    {
      url: "/images/tours/img13.jpeg", // Replace with your image
    },
  ];

  // City facts for the recap section
  const cityFacts = [
    {
      name: "Nice",
      facts: [
        "Founded by the Greeks in 350 BC",
        "Capital of the French Riviera",
        "Famous for its 7km Promenade des Anglais",
        "Home to the largest old town on the Riviera",
      ],
    },
    {
      name: "Villefranche-sur-Mer",
      facts: [
        "One of the deepest natural harbors in the Mediterranean",
        "Medieval citadel from the 16th century",
        "Picturesque fishing village",
        "Featured in many Hollywood films",
      ],
    },
    {
      name: "Monaco",
      facts: [
        "Second smallest country in the world",
        "No personal income tax",
        "Home to the famous Monte Carlo Casino",
        "Ruled by the Grimaldi family since 1297",
      ],
    },
    {
      name: "Èze",
      facts: [
        "Perched 400 meters above sea level",
        "Medieval village dating back to the Middle Ages",
        "Famous exotic garden with panoramic views",
        "Inspiration for many artists and writers",
      ],
    },
    {
      name: "Menton",
      facts: [
        "Known as the 'Pearl of France'",
        "Warmest microclimate on the French Riviera",
        "Famous for its annual Lemon Festival",
        "Strong Italian architectural influence",
      ],
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slideshowImages.length) % slideshowImages.length
    );
  };

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset"; // Restore scrolling
  };

  const nextSlideModal = () => {
    setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
  };

  const prevSlideModal = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slideshowImages.length) % slideshowImages.length
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead {...seoConfigs.tourDetails(tour)} />
      {/* Hero Section */}
      <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 right-4 sm:right-6 md:right-8 text-white">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 leading-tight">
            {tour.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 text-sm sm:text-base md:text-lg">
            <div className="flex items-center gap-1 sm:gap-2">
              <FiClock className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>{tour.duration}</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <FiMapPin className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="truncate">{tour.city}</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <FiUsers className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Max 4 people</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            {/* Overview */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Tour Overview
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {tour.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <FiClock className="w-8 h-8 text-riviera-blue mx-auto mb-2" />
                  <div className="font-semibold text-gray-800">Duration</div>
                  <div className="text-gray-600">{tour.duration}</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <FiUsers className="w-8 h-8 text-riviera-blue mx-auto mb-2" />
                  <div className="font-semibold text-gray-800">Group Size</div>
                  <div className="text-gray-600">Max 4 people</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <FiCamera className="w-8 h-8 text-riviera-blue mx-auto mb-2" />
                  <div className="font-semibold text-gray-800">Photography</div>
                  <div className="text-gray-600">Assistance included</div>
                </div>
              </div>
            </div>

            {/* Photo Slideshow */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Tour Gallery
              </h2>
              <div className="relative group">
                <div className="aspect-video rounded-xl overflow-hidden bg-gray-100 relative">
                  {/* Image Container with Smooth Transitions */}
                  <div
                    className="relative w-full h-full group cursor-pointer"
                    onClick={openModal}
                  >
                    {slideshowImages.map((image, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-700 ease-out ${
                          index === currentSlide
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-105"
                        }`}
                      >
                        <img
                          src={image.url}
                          alt={`Tour gallery ${index + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}

                    {/* Zoom indicator overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-lg flex items-center gap-2">
                        <FiZoomIn className="w-5 h-5" />
                        <span className="text-sm font-medium">
                          Click to expand
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Modern Navigation Arrows - Always visible on mobile, hover on desktop */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 
                             bg-white/20 backdrop-blur-sm hover:bg-white/30 
                             text-white p-2 sm:p-3 rounded-full transition-all duration-300 
                             lg:opacity-0 lg:group-hover:opacity-100 hover:scale-110
                             border border-white/20"
                  >
                    <FiChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 
                             bg-white/20 backdrop-blur-sm hover:bg-white/30 
                             text-white p-2 sm:p-3 rounded-full transition-all duration-300 
                             lg:opacity-0 lg:group-hover:opacity-100 hover:scale-110
                             border border-white/20"
                  >
                    <FiChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>

                  {/* Modern Progress Bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20">
                    <div
                      className="h-full bg-white transition-all duration-700 ease-out"
                      style={{
                        width: `${
                          ((currentSlide + 1) / slideshowImages.length) * 100
                        }%`,
                      }}
                    />
                  </div>
                </div>

                {/* Minimalist Dots Indicator */}
                <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
                  {slideshowImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`transition-all duration-300 rounded-full touch-manipulation ${
                        index === currentSlide
                          ? "w-6 sm:w-8 h-2 bg-riviera-blue"
                          : "w-2 h-2 bg-gray-300 hover:bg-gray-400 hover:scale-125"
                      }`}
                      style={{ minWidth: "16px", minHeight: "16px" }} // Ensure minimum touch target
                    />
                  ))}
                </div>

                {/* Image Counter */}
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-black/60 backdrop-blur-sm text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                  {currentSlide + 1} / {slideshowImages.length}
                </div>
              </div>
            </div>

            {/* Cities Recap */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Cities We'll Discover
              </h2>
              <p className="text-gray-600 mb-6">
                Here are some fascinating facts about the cities along our
                route. More detailed historical insights and stories will be
                shared during the trip!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cityFacts.map((city, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-xl font-bold text-riviera-blue mb-3">
                      {city.name}
                    </h3>
                    <ul className="space-y-2">
                      {city.facts.map((fact, factIndex) => (
                        <li
                          key={factIndex}
                          className="flex items-start gap-2 text-gray-600"
                        >
                          <FiStar className="w-4 h-4 text-sunset-orange mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{fact}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <p className="text-riviera-blue font-medium text-center">
                  💫 These are just glimpses of what awaits! During our journey,
                  you'll discover much more fascinating stories, local legends,
                  and hidden historical details about each destination.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 order-1 lg:order-2">
            {/* Booking Card */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:sticky lg:top-24">
              <div className="text-center mb-4 sm:mb-6">
                <div className="text-3xl sm:text-4xl font-bold text-riviera-blue mb-2">
                  {tour.price}
                </div>
                <div className="text-gray-600">{tour.priceType}</div>
              </div>

              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm sm:text-base">
                    Duration
                  </span>
                  <span className="font-medium text-sm sm:text-base">
                    {tour.duration}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm sm:text-base">
                    Group Size
                  </span>
                  <span className="font-medium text-sm sm:text-base">
                    Max 4 people
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm sm:text-base">
                    Languages
                  </span>
                  <span className="font-medium text-sm sm:text-base">
                    FR, EN, AR
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600 text-sm sm:text-base">
                    Includes
                  </span>
                  <span className="font-medium text-sm sm:text-base">
                    Transportation
                  </span>
                </div>
              </div>

              {/* Book Now Button */}
              <button
                onClick={() => setIsBookingOpen(true)}
                className="w-full bg-riviera-blue hover:bg-blue-700 text-white py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-colors duration-200 flex items-center justify-center gap-2 mb-3 sm:mb-4"
              >
                Book Your Tour
              </button>

              <div className="text-center text-xs sm:text-sm text-gray-500">
                Instant confirmation • Free cancellation up to 24h before
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Screen Image Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          {/* Close button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
          >
            <FiX className="w-8 h-8" />
          </button>

          {/* Modal content */}
          <div className="relative w-full h-full max-w-6xl max-h-full flex items-center justify-center">
            {/* Previous button */}
            <button
              onClick={prevSlideModal}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 
                       bg-white/20 backdrop-blur-sm hover:bg-white/30 
                       text-white p-3 rounded-full transition-all duration-300 
                       hover:scale-110 border border-white/20 z-10"
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={slideshowImages[currentSlide].url}
                alt={`Tour gallery ${currentSlide + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Next button */}
            <button
              onClick={nextSlideModal}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 
                       bg-white/20 backdrop-blur-sm hover:bg-white/30 
                       text-white p-3 rounded-full transition-all duration-300 
                       hover:scale-110 border border-white/20 z-10"
            >
              <FiChevronRight className="w-6 h-6" />
            </button>

            {/* Image counter */}
            <div
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 
                         bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium"
            >
              {currentSlide + 1} / {slideshowImages.length}
            </div>

            {/* Dots indicator */}
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {slideshowImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentSlide
                      ? "w-8 h-2 bg-white"
                      : "w-2 h-2 bg-white/50 hover:bg-white/75 hover:scale-125"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Click outside to close */}
          <div className="absolute inset-0 -z-10" onClick={closeModal} />
        </div>
      )}

      {/* Booking Form Modal */}
      {isBookingOpen && (
        <BookingForm tour={tour} onClose={() => setIsBookingOpen(false)} />
      )}
    </div>
  );
};

export default TourDetails;
