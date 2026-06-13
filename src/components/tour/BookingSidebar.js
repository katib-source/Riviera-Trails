import React from "react";
import PropTypes from "prop-types";
import { Award, Info, Minus, Plus } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";
import { PHONE_NUMBER } from "../../config/constants";

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
  const maxPax = tour.maxPax || 7;

  return (
    <>
      {/* Mobile sticky bottom bar — hidden on lg+ */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-azur-deep/10 bg-sand-warm/95 px-4 py-3 shadow-[0_-10px_30px_-10px_rgba(4,16,31,0.25)] backdrop-blur-md lg:hidden">
        <div className="mx-auto flex max-w-7xl items-center gap-3">
          <div className="shrink-0">
            <p className="text-[10px] font-semibold uppercase tracking-widest2 text-azur-deep/45">
              {tour.isPrivate
                ? t("tourDetails.booking.totalPriceLabel")
                : t("tourDetails.booking.startingFrom")}
            </p>
            <p className="font-display text-2xl text-azur-deep">
              {tour.currency}
              {tour.isPrivate ? tour.pricePerPax : totalPrice}
            </p>
          </div>

          {!tour.isPrivate && (
            <div className="flex shrink-0 items-center gap-1.5">
              <button
                onClick={() => setGroupSize(Math.max(1, groupSize - 1))}
                aria-label="Decrease group size"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-azur-deep/15 text-azur-deep transition-colors hover:border-gold hover:bg-white"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-6 text-center font-display text-lg text-azur-deep">
                {groupSize}
              </span>
              <button
                onClick={() => setGroupSize(Math.min(maxPax, groupSize + 1))}
                aria-label="Increase group size"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-azur-deep/15 text-azur-deep transition-colors hover:border-gold hover:bg-white"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          )}

          <button
            onClick={handleBookNow}
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-azur-deep py-3 text-sm font-bold uppercase tracking-widest2 text-white transition-colors hover:bg-azur-sea"
          >
            <FaWhatsapp className="h-5 w-5 shrink-0" />
            <span>{t("nav.bookNow")}</span>
          </button>
        </div>
      </div>

      {/* Desktop full sidebar card — hidden below lg */}
      <div className="sticky top-24 hidden rounded-3xl border border-azur-deep/10 bg-white p-7 shadow-lift lg:block">
        <h3 className="mb-5 font-display text-2xl text-azur-deep">
          {t("tourDetails.booking.title")}
        </h3>

        {/* Base price display */}
        <div className="mb-6 rounded-2xl bg-azur-deep p-5 text-white">
          <p className="text-[10px] font-semibold uppercase tracking-widest2 text-white/55">
            {tour.isPrivate
              ? t("tourDetails.booking.totalPriceLabel")
              : t("tourDetails.booking.pricePerPerson")}
          </p>
          <p className="mt-1 font-display text-4xl text-gold-light">
            {tour.currency}
            {tour.pricePerPax}
          </p>
          {tour.isPrivate && (
            <p className="mt-1 text-xs text-white/50">
              {t("tourDetails.booking.flatRate")}
            </p>
          )}
        </div>

        {/* Group size selector */}
        {!tour.isPrivate && (
          <div className="mb-6">
            <label className="mb-3 block text-xs font-semibold uppercase tracking-widest2 text-azur-deep/55">
              {t("tourDetails.booking.numberOfPeople")}
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[...Array(maxPax)].map((_, i) => {
                const size = i + 1;
                const active = groupSize === size;
                return (
                  <button
                    key={size}
                    onClick={() => setGroupSize(size)}
                    className={`rounded-xl py-3 font-display text-lg transition-all ${
                      active
                        ? "bg-azur-sea text-white shadow-soft"
                        : "bg-sand-warm text-azur-deep hover:bg-sand-deep"
                    }`}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Price breakdown */}
        <div className="mb-6 space-y-3 rounded-2xl bg-sand-warm p-5">
          {!tour.isPrivate ? (
            <>
              <div className="flex justify-between text-sm text-azur-deep/75">
                <span>
                  {tour.currency}
                  {tour.pricePerPax} × {groupSize}{" "}
                  {groupSize === 1
                    ? t("tourDetails.booking.person")
                    : t("tourDetails.booking.people")}
                </span>
                <span className="font-semibold">
                  {tour.currency}
                  {originalTotal}
                </span>
              </div>
              {hasDiscount && (
                <div className="flex justify-between text-sm font-semibold text-teal-deep">
                  <span className="flex items-center gap-1">
                    <Award className="h-4 w-4" />
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
            <div className="flex justify-between text-sm text-azur-deep/75">
              <span>{t("tourDetails.booking.privateFlatRate")}</span>
              <span className="font-semibold">
                {tour.currency}
                {tour.pricePerPax}
              </span>
            </div>
          )}
          <div className="flex items-baseline justify-between border-t border-azur-deep/15 pt-3">
            <span className="font-semibold text-azur-deep">
              {t("tourDetails.booking.totalPriceLabel")}
            </span>
            <span className="font-display text-3xl text-azur-deep">
              {tour.currency}
              {totalPrice}
            </span>
          </div>
        </div>

        {/* Group discount nudge */}
        {!hasDiscount && !tour.isPrivate && (
          <div className="mb-6 flex items-center gap-2 rounded-xl border border-gold/40 bg-gold/10 p-3 text-sm text-gold-deep">
            <Info className="h-4 w-4 shrink-0" />
            {t("tourDetails.booking.discountNudge")}
          </div>
        )}

        <button
          onClick={handleBookNow}
          className="mb-4 flex w-full items-center justify-center gap-2 rounded-full bg-azur-deep py-4 text-sm font-bold uppercase tracking-widest2 text-white transition-colors duration-300 hover:bg-azur-sea"
        >
          <FaWhatsapp className="h-5 w-5" />
          {t("tourDetails.booking.bookWhatsapp")}
        </button>

        <div className="border-t border-azur-deep/10 pt-4 text-center">
          <p className="mb-1 text-sm text-azur-deep/55">
            {t("tourDetails.booking.questions")}
          </p>
          <a
            href={`tel:+${PHONE_NUMBER}`}
            className="font-display text-lg text-azur-sea transition-colors hover:text-teal-deep"
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
    currency: PropTypes.string.isRequired,
    pricePerPax: PropTypes.number.isRequired,
    isPrivate: PropTypes.bool,
    maxPax: PropTypes.number,
  }).isRequired,
  groupSize: PropTypes.number.isRequired,
  setGroupSize: PropTypes.func.isRequired,
  totalPrice: PropTypes.number.isRequired,
  hasDiscount: PropTypes.bool.isRequired,
  discountAmount: PropTypes.number.isRequired,
  originalTotal: PropTypes.number.isRequired,
  handleBookNow: PropTypes.func.isRequired,
};

export default BookingSidebar;
