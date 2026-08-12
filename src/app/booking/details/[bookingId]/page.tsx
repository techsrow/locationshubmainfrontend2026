

import BookingStepper from "@/app/components/BookingStepper";
import BookingSummary from "@/app/components/BookingSummary";
import Link from "next/link";

export default function BookingPage() {
  return (
    <div className="max-w-5xl mx-auto py-16">

      <BookingStepper step={1} />

      <div className="max-w-xl">

        <h2 className="text-xl font-semibold mb-6">Booking Details</h2>

      <BookingSummary
  date="March 6, 2026"
  packageName="Pre Wedding | Silver"
  slot="7am to 12pm"
  price={15000}
  bookingAmount={5000}
/>

        <Link href="/checkout">
          <button className="mt-6 bg-[#5a0f2e] text-white px-6 py-3">
            Book Now
          </button>
        </Link>

      </div>

    </div>
  );
}

