/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import BookingStepper from "@/app/components/BookingStepper";
import api from "@/lib/api";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

type Booking = {
  bookingId: string;
  product: {
    name: string;
  };
  bookingDate: string;
  totalAmount: number;
  slots: {
    slot: {
      label: string;
    };
  }[];
};

export default function ThankYouContent() {

  const params = useSearchParams();
  const bookingId = params.get("bookingId");

  const [booking, setBooking] = useState<Booking | null>(null);

  useEffect(() => {

    if (!bookingId) return;

    async function loadBooking() {
      try {
        const res = await api.get<Booking>(`/bookings/${bookingId}`);
        setBooking(res.data);
      } catch (error) {
        console.error("Error loading booking:", error);
      }
    }

    loadBooking();

  }, [bookingId]);

  if (!booking) {
    return (
      <div className="max-w-4xl mx-auto py-24 text-center">
        Loading booking details...
      </div>
    );
  }

  // const date = new Date(booking.bookingDate).toLocaleDateString();

  const bookingDate = new Date(booking.bookingDate);

const date = `${String(
  bookingDate.getDate()
).padStart(2, "0")}-${String(
  bookingDate.getMonth() + 1
).padStart(2, "0")}-${bookingDate.getFullYear()}`;

  const slots = booking.slots.map((s) => s.slot.label).join(", ");

  return (
    <div className="max-w-5xl mx-auto py-20 px-6">

      <BookingStepper step={3} />

      {/* Success Section */}

      <div className="text-center mt-12">

        <CheckCircle className="mx-auto text-green-600" size={70} />

        <h1 className="text-3xl font-semibold mt-6 text-[#5a0f2e]">
          Booking Completed
        </h1>

        <p className="text-gray-600 mt-3">
          Thank you for choosing <span className="font-medium">Locations Hub</span>.
          Your booking has been successfully confirmed.
        </p>

      </div>

      {/* Booking Card */}

      <div className="bg-white mt-12 shadow-lg rounded-lg max-w-xl mx-auto p-8">

        <h2 className="text-lg font-semibold text-[#5a0f2e] mb-6 text-center">
          Booking Details
        </h2>

        <DetailRow label="Booking ID" value={booking.bookingId} />
        <DetailRow label="Package" value={booking.product.name} />
        <DetailRow label="Date" value={date} />
        <DetailRow label="Slots" value={slots} />
        <DetailRow label="Amount Paid" value={`₹${booking.totalAmount}`} />

      </div>

      {/* Button */}

      <div className="text-center mt-10">

        <Link href="/">
          <button className="bg-[#5a0f2e] hover:bg-[#7a1b40] text-white px-8 py-3 rounded-md transition">
            Return to Homepage
          </button>
        </Link>

      </div>

    </div>
  );
}

function DetailRow({ label, value }: any) {
  return (
    <div className="flex justify-between py-3 border-b text-sm">
      <span className="text-gray-600">{label}</span>
      <span className="font-medium text-gray-800">{value}</span>
    </div>
  );
}