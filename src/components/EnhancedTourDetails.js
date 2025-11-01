import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Clock,
  MapPin,
  Users,
  Calendar,
  Star,
  Award,
  TrendingUp,
  ChevronLeft,
  Check,
  Info,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import { getTourBySlug, calculateGroupPrice } from "../data/newToursData";

const EnhancedTourDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [tour, setTour] = useState(null);
  const [groupSize, setGroupSize] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const tourData = getTourBySlug(slug, language);
    if (tourData) {
      setTour(tourData);
      setTotalPrice(calculateGroupPrice(tourData.pricePerPax, 1));
    } else {
      navigate("/");
    }
  }, [slug, language, navigate]);

  useEffect(() => {
    if (tour) {
      // Private tours have flat pricing, shared tours are per-person
      if (tour.isPrivate) {
        setTotalPrice(tour.pricePerPax); // For private tours, pricePerPax is actually the total price
      } else {
        setTotalPrice(calculateGroupPrice(tour.pricePerPax, groupSize));
      }
    }
  }, [groupSize, tour]);

  const handleBookNow = () => {
    if (!tour) return;
    const message = `Hello! I would like to book "${
      tour.title
    }" for ${groupSize} ${groupSize === 1 ? "person" : "people"}. Total: ${
      tour.currency
    }${totalPrice}. Could you confirm availability?`;
    const whatsappUrl = `https://wa.me/33758781678?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // Private tours have flat pricing, shared tours calculate per person
  const hasDiscount = !tour.isPrivate && groupSize >= 4;
  const discountAmount = hasDiscount ? tour.pricePerPax * groupSize * 0.1 : 0;
  const originalTotal = tour.isPrivate
    ? tour.pricePerPax
    : tour.pricePerPax * groupSize;

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 bg-white/90 hover:bg-white text-gray-900 px-4 py-2 rounded-lg flex items-center gap-2 font-semibold transition-colors shadow-lg"
        >
          <ChevronLeft className="w-5 h-5" />
          {language === "en" ? "Back" : "Retour"}
        </button>

        {/* Badges */}
        <div className="absolute top-6 right-6 flex flex-col gap-2">
          {tour.topPick && (
            <div className="flex items-center gap-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              <Award className="w-4 h-4" />
              <span>{language === "en" ? "Top Pick" : "Meilleur Choix"}</span>
            </div>
          )}
          {tour.popular && (
            <div className="flex items-center gap-1 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              <TrendingUp className="w-4 h-4" />
              <span>{language === "en" ? "Popular 🔥" : "Populaire 🔥"}</span>
            </div>
          )}
          {tour.isPrivate && (
            <div className="flex items-center gap-1 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              <Users className="w-4 h-4" />
              <span>{language === "en" ? "Private Tour" : "Tour Privé"}</span>
            </div>
          )}
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {tour.title}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              {tour.description}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Tour Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Info */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === "en"
                  ? "Tour Information"
                  : "Informations sur le circuit"}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                  <Clock className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-600 font-semibold uppercase">
                      {language === "en" ? "Duration" : "Durée"}
                    </p>
                    <p className="text-lg font-bold text-gray-900">
                      {tour.duration}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                  <Calendar className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-600 font-semibold uppercase">
                      {language === "en" ? "Departure" : "Départ"}
                    </p>
                    <p className="text-lg font-bold text-gray-900">
                      {tour.departure}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
                  <Users className="w-6 h-6 text-purple-600 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-600 font-semibold uppercase">
                      {language === "en" ? "Frequency" : "Fréquence"}
                    </p>
                    <p className="text-lg font-bold text-gray-900">
                      {tour.frequency}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-red-50 rounded-lg">
                  <MapPin className="w-6 h-6 text-red-600 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-600 font-semibold uppercase">
                      {language === "en" ? "Stops" : "Arrêts"}
                    </p>
                    <p className="text-lg font-bold text-gray-900">
                      {tour.stops.length}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stops */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-red-600" />
                {language === "en" ? "Tour Stops" : "Arrêts du circuit"}
              </h2>
              <div className="space-y-2">
                {tour.stops.map((stop, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-800 font-medium">{stop}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Star className="w-6 h-6 text-amber-500" />
                {language === "en" ? "Highlights" : "Points forts"}
              </h2>
              <ul className="grid md:grid-cols-2 gap-3">
                {tour.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Private Tour Info */}
            {tour.isPrivate && (
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border-2 border-indigo-200">
                <div className="flex items-start gap-3">
                  <Info className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-indigo-900 mb-2">
                      {language === "en"
                        ? "Private Tour Benefits"
                        : "Avantages du tour privé"}
                    </h3>
                    <ul className="space-y-2 text-indigo-800">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-indigo-600" />
                        {language === "en"
                          ? "Flexible itinerary customized to your interests"
                          : "Itinéraire flexible personnalisé selon vos intérêts"}
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-indigo-600" />
                        {language === "en"
                          ? "Personal dedicated guide"
                          : "Guide personnel dédié"}
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-indigo-600" />
                        {language === "en"
                          ? "Pickup from your location"
                          : "Prise en charge depuis votre emplacement"}
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-indigo-600" />
                        {language === "en"
                          ? "Premium comfort vehicle"
                          : "Véhicule confortable premium"}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Booking Widget */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 bg-white rounded-2xl shadow-2xl p-6 border-2 border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {language === "en" ? "Book This Tour" : "Réserver ce circuit"}
              </h3>

              {/* Price Display */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 mb-6">
                <p className="text-sm text-gray-600 font-semibold uppercase mb-1">
                  {tour.isPrivate
                    ? language === "en"
                      ? "Total Price"
                      : "Prix total"
                    : language === "en"
                    ? "Price per person"
                    : "Prix par personne"}
                </p>
                <p className="text-4xl font-bold text-gray-900">
                  {tour.currency}
                  {tour.pricePerPax}
                </p>
                {tour.isPrivate && (
                  <p className="text-xs text-gray-500 mt-1">
                    {language === "en"
                      ? "(Flat rate for the tour)"
                      : "(Tarif forfaitaire pour le circuit)"}
                  </p>
                )}
              </div>

              {/* Group Size Selector */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  {language === "en"
                    ? "Number of People"
                    : "Nombre de personnes"}
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[...Array(tour.maxPax || 7)].map((_, i) => {
                    const size = i + 1;
                    return (
                      <button
                        key={size}
                        onClick={() => setGroupSize(size)}
                        className={`py-3 px-4 rounded-lg font-bold transition-all ${
                          groupSize === size
                            ? "bg-blue-600 text-white shadow-lg scale-105"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Price Calculation */}
              <div className="bg-gray-50 rounded-xl p-4 mb-6 space-y-3">
                {!tour.isPrivate ? (
                  <>
                    <div className="flex justify-between text-gray-700">
                      <span>
                        {tour.currency}
                        {tour.pricePerPax} × {groupSize}{" "}
                        {groupSize === 1
                          ? language === "en"
                            ? "person"
                            : "personne"
                          : language === "en"
                          ? "people"
                          : "personnes"}
                      </span>
                      <span className="font-semibold">
                        {tour.currency}
                        {originalTotal}
                      </span>
                    </div>
                    {hasDiscount && (
                      <div className="flex justify-between text-green-600 font-semibold">
                        <span className="flex items-center gap-1">
                          <Award className="w-4 h-4" />
                          {language === "en"
                            ? "Group Discount (10%)"
                            : "Remise de groupe (10%)"}
                        </span>
                        <span>
                          -{tour.currency}
                          {discountAmount.toFixed(2)}
                        </span>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="flex justify-between text-gray-700">
                    <span>
                      {language === "en"
                        ? "Private tour (flat rate)"
                        : "Tour privé (tarif forfaitaire)"}
                    </span>
                    <span className="font-semibold">
                      {tour.currency}
                      {tour.pricePerPax}
                    </span>
                  </div>
                )}
                <div className="border-t border-gray-300 pt-3 flex justify-between items-baseline">
                  <span className="text-lg font-bold text-gray-900">
                    {language === "en" ? "Total Price" : "Prix total"}
                  </span>
                  <span className="text-3xl font-bold text-blue-600">
                    {tour.currency}
                    {totalPrice}
                  </span>
                </div>
              </div>

              {/* Discount Info */}
              {!hasDiscount && !tour.isPrivate && (
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-6">
                  <p className="text-sm text-amber-800 flex items-center gap-2">
                    <Info className="w-4 h-4 flex-shrink-0" />
                    {language === "en"
                      ? "Book for 4+ people and get 10% group discount!"
                      : "Réservez pour 4+ personnes et obtenez 10% de réduction de groupe!"}
                  </p>
                </div>
              )}

              {/* Book Now Button */}
              <button
                onClick={handleBookNow}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-bold text-lg transition-colors duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl mb-4"
              >
                <FaWhatsapp className="w-6 h-6" />
                {language === "en"
                  ? "Book on WhatsApp"
                  : "Réserver sur WhatsApp"}
              </button>

              {/* Contact Info */}
              <div className="text-center pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-2">
                  {language === "en"
                    ? "Questions? Contact us:"
                    : "Des questions? Contactez-nous:"}
                </p>
                <a
                  href="tel:+33758781678"
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  +33 7 58 78 16 78
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedTourDetails;
