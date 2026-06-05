import { useState, useCallback, useMemo } from "react";
import { calculateGroupPrice } from "../data/newToursData";
import { getWhatsAppUrl } from "../config/constants";

// Encapsulates all booking state for a single tour:
//   groupSize, derived totalPrice, discount logic, and the WhatsApp handler.
const useTourBooking = (tour) => {
  const [groupSize, setGroupSize] = useState(1);

  const totalPrice = useMemo(() => {
    if (!tour) return 0;
    return tour.isPrivate
      ? tour.pricePerPax
      : calculateGroupPrice(tour.pricePerPax, groupSize);
  }, [tour, groupSize]);

  const hasDiscount    = !tour?.isPrivate && groupSize >= 4;
  const discountAmount = hasDiscount ? tour.pricePerPax * groupSize * 0.1 : 0;
  const originalTotal  = tour?.isPrivate
    ? tour.pricePerPax
    : (tour?.pricePerPax ?? 0) * groupSize;

  const handleBookNow = useCallback(() => {
    if (!tour) return;
    const message =
      `Hello! I would like to book "${tour.title}" for ${groupSize} ` +
      `${groupSize === 1 ? "person" : "people"}. ` +
      `Total: ${tour.currency}${totalPrice}. Could you confirm availability?`;
    window.open(getWhatsAppUrl(message), "_blank");
  }, [tour, groupSize, totalPrice]);

  return {
    groupSize,
    setGroupSize,
    totalPrice,
    hasDiscount,
    discountAmount,
    originalTotal,
    handleBookNow,
  };
};

export default useTourBooking;
