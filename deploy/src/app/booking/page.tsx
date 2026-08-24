

"use client";

import BookingStepper from "@/app/components/BookingStepper";
import BookingSummary from "@/app/components/BookingSummary";
import { useBooking } from "@/app/context/BookingContext";
import { format } from "date-fns";
import Link from "next/link";

export default function BookingPage() {

  const { booking } = useBooking();

  if (!booking) {
    return (
      <div className="max-w-5xl mx-auto py-16 text-center">
        No booking selected
      </div>
    );
  }

  const formattedDate = format(new Date(booking.date), "MMMM d, yyyy");

  const slotText = booking.slots
    .map((s) => s.label)
    .join(", ");

  return (
    <div className="max-w-5xl mx-auto py-16 ">

      {/* Stepper */}
      <BookingStepper step={1} />

      <div className="cart-collaterals">

        {/* Booking Summary */}
        <BookingSummary
  date={formattedDate}
  packageName={booking.productName}
  slot={slotText}
  price={booking.price}
  bookingAmount={booking.bookingAmount}
/>

        <Link href="/checkout">
          <button className="mt-6 bg-[#5a0f2e] text-white px-6 py-3 booking-btn">
            Book Now
          </button>
        </Link>

      </div>

    </div>
  );
}

