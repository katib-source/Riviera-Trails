import React from "react";
import PropTypes from "prop-types";
import { Award, Info } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";
import { PHONE_NUMBER } from "../../config/constants";
import { formatMoney } from "../../data/newToursData";

const BookingSidebar = ({
  tour,
  groupSize,
  setGroupSize,
  totalPrice,
  hasDiscount,
  discountAmount,
  originalTotal,
  handleBookNow,
}) => {
  const { t } = useLanguage();

  return (
    <>
      {/* Mobile sticky bottom bar — hidden on lg+ */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-2xl px-4 py-3 lg:hidden">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <div className="flex-shrink-0">
            <p className="text-xs text-gray-500 uppercase font-semibold leading-tight">
              {tour.isPrivate
                ? t("tourDetails.booking.totalPriceLabel")
                : t("tourDetails.booking.pricePerPerson")}
            </p>
            <p className="text-xl font-bold text-gray-900">
              {tour.currency}{tour.pricePerPax}
            </p>
          </div>

          {!tour.isPrivate && (
            <div className="flex items-center gap-1 flex-shrink-0">
              <button
                onClick={() => setGroupSize(Math.max(1, groupSize - 1))}
                aria-label="Decrease group size"
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 font-bold text-gray-700 flex items-center justify-center transition-colors"
              >
                −
              </button>
              <span className="w-6 text-center font-semibold text-gray-900">
                {groupSize}
              </span>
              <button
                onClick={() =>
                  setGroupSize(Math.min(tour.maxPax || 7, groupSize + 1))
                }
                aria-label="Increase group size"
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 font-bold text-gray-700 flex items-center justify-center transition-colors"
              >
                +
              </button>
            </div>
          )}

          <button
            onClick={handleBookNow}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors shadow-md"
          >
            <FaWhatsapp className="w-5 h-5 flex-shrink-0" />
            <span>{t("nav.bookNow")}</span>
          </button>
        </div>
      </div>

      {/* Desktop full sidebar card — hidden below lg */}
      <div className="hidden lg:block sticky top-6 bg-white rounded-2xl shadow-2xl p-6 border-2 border-gray-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          {t("tourDetails.booking.title")}
        </h3>

        {/* Base price display */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 mb-6">
          <p className="text-sm text-gray-600 font-semibold uppercase mb-1">
            {tour.isPrivate
              ? t("tourDetails.booking.totalPriceLabel")
              : t("tourDetails.booking.pricePerPerson")}
          </p>
          <p className="text-4xl font-bold text-gray-900">
            {tour.currency}
            {tour.pricePerPax}
          </p>
          {tour.isPrivate && (
            <p className="text-xs text-gray-500 mt-1">
              {t("tourDetails.booking.flatRate")}
            </p>
          )}
        </div>

        {/* Group size selector */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            {t("tourDetails.booking.numberOfPeople")}
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

        {/* Price breakdown */}
        <div className="bg-gray-50 rounded-xl p-4 mb-6 space-y-3">
          {!tour.isPrivate ? (
            <>
              <div className="flex justify-between text-gray-700">
                <span>
                  {tour.currency}
                  {tour.pricePerPax} × {groupSize}{" "}
                  {groupSize === 1
                    ? t("tourDetails.booking.person")
                    : t("tourDetails.booking.people")}
                </span>
                <span className="font-semibold">
                  {tour.currency}
                  {formatMoney(originalTotal)}
                </span>
              </div>
              {hasDiscount && (
                <div className="flex justify-between text-green-600 font-semibold">
                  <span className="flex items-center gap-1">
                    <Award className="w-4 h-4" />
                    {t("tourDetails.booking.groupDiscount")}
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
              <span>{t("tourDetails.booking.privateFlatRate")}</span>
              <span className="font-semibold">
                {tour.currency}
                {tour.pricePerPax}
              </span>
            </div>
          )}
          <div className="border-t border-gray-300 pt-3 flex justify-between items-baseline">
            <span className="text-lg font-bold text-gray-900">
              {t("tourDetails.booking.totalPriceLabel")}
            </span>
            <span className="text-3xl font-bold text-blue-600">
              {tour.currency}
              {formatMoney(totalPrice)}
            </span>
          </div>
        </div>

        {/* Group discount nudge */}
        {!hasDiscount && !tour.isPrivate && (
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-6">
            <p className="text-sm text-amber-800 flex items-center gap-2">
              <Info className="w-4 h-4 flex-shrink-0" />
              {t("tourDetails.booking.discountNudge")}
            </p>
          </div>
        )}

        <button
          onClick={handleBookNow}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-bold text-lg transition-colors duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl mb-4"
        >
          <FaWhatsapp className="w-6 h-6" />
          {t("tourDetails.booking.bookWhatsapp")}
        </button>

        <div className="text-center pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-2">
            {t("tourDetails.booking.questions")}
          </p>
          <a
            href={`tel:+${PHONE_NUMBER}`}
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            +33 7 58 78 16 78
          </a>
        </div>
      </div>
    </>
  );
};

BookingSidebar.propTypes = {
  tour: PropTypes.shape({
    currency:    PropTypes.string.isRequired,
    pricePerPax: PropTypes.number.isRequired,
    isPrivate:   PropTypes.bool,
    maxPax:      PropTypes.number,
  }).isRequired,
  groupSize:      PropTypes.number.isRequired,
  setGroupSize:   PropTypes.func.isRequired,
  totalPrice:     PropTypes.number.isRequired,
  hasDiscount:    PropTypes.bool.isRequired,
  discountAmount: PropTypes.number.isRequired,
  originalTotal:  PropTypes.number.isRequired,
  handleBookNow:  PropTypes.func.isRequired,
};

export default BookingSidebar;
