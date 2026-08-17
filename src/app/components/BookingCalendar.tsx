/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";
import { useRouter } from "next/navigation";
import { useBooking } from "@/app/context/BookingContext";

import {
  addMonths,
  subMonths,
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  getDay,
  isBefore,
  startOfDay,
} from "date-fns";

type Slot = {
  id: string;
  label: string;
  startTime: string;
  endTime: string;
};

type Product = {
  id: string;
  name: string;
  slug: string;
  price: string;
  bookingAmount: string;
  slots: Slot[];
};

export default function BookingCalendar({ slug }: { slug: string }) {

  const router = useRouter();
  const { setBooking } = useBooking();

  const [product, setProduct] = useState<Product | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSlots, setSelectedSlots] = useState<Slot[]>([]);
  const [lockedDates, setLockedDates] = useState<string[]>([]);

  const price = Number(product?.price || 0);

  /* -------------------------------
     Calendar Setup
  -------------------------------- */

  const start = startOfMonth(currentMonth);
  const end = endOfMonth(currentMonth);
  const days = eachDayOfInterval({ start, end });

  const startDay = getDay(start);
  const today = startOfDay(new Date());

  /* -------------------------------
     Load Product
  -------------------------------- */

useEffect(() => {
  async function loadProduct() {
    try {
      console.log(
        "Loading product:",
        `/products/${slug}`
      );

      const res = await api.get(
        // `/products/${slug}`
         `/products/${slug}`
      );

      console.log(
        "Product Response:",
        res.data
      );

      setProduct(
        res.data?.data || res.data
      );
    } catch (error: any) {
      console.error(
        "Product load error",
        {
          status:
            error?.response?.status,
          url: error?.config?.url,
          data:
            error?.response?.data,
        }
      );
    }
  }

  if (slug) {
    loadProduct();
  }
}, [slug]);

  /* -------------------------------
     Load Locked Dates
  -------------------------------- */
useEffect(() => {
  if (!product?.id) return;

  const loadLockedDates = async () => {
    try {
      const res = await api.get(
        "/bookings/locked-dates"
      );

      const formattedLockedDates =
        (res.data?.dates || []).map(
          (item: any) =>
            format(
              new Date(item.date),
              "yyyy-MM-dd"
            )
        );

      setLockedDates(
        formattedLockedDates
      );
    } catch (error) {
      console.error(
        "Locked dates error:",
        error
      );
    }
  };

  loadLockedDates();
}, [product?.id]);

  /* -------------------------------
     Toggle Slot
  -------------------------------- */

  function toggleSlot(slot: Slot) {

    setSelectedSlots((prev) => {

      const exists = prev.find((s) => s.id === slot.id);

      if (exists) {
        return prev.filter((s) => s.id !== slot.id);
      }

      return [...prev, slot];

    });

  }

  /* -------------------------------
     Continue Booking
  -------------------------------- */

  function continueBooking() {

    if (!product || !selectedDate || selectedSlots.length === 0) return;

    setBooking({
  productId: product.id,
  productName: product.name,
  price: Number(product.price),
  bookingAmount: Number(product.bookingAmount),
  date: format(selectedDate, "yyyy-MM-dd"),
  slots: selectedSlots,
});

    router.push("/booking");

  }

  if (!product) {
    return <div className="text-center p-10">Loading...</div>;
  }

  return (

    <div className="mx-auto booking-calendar">

      {/* PRICE */}
      <h2 className="text-xl font-semibold text-[#5a0f2e] mb-4">

        ₹{price}

        <span className="text-sm text-gray-500">
          {" "} (Per Booking • Excluding 18% GST)
        </span>

      </h2>

      {/* CALENDAR */}
      <div className="bg-white shadow rounded">

        {/* HEADER */}
        <div className="flex justify-between items-center bg-[#5a0f2e] text-white px-4 py-2">

          <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>
            ‹
          </button>

          <span className="font-medium">
            {format(currentMonth, "MMMM yyyy")}
          </span>

          <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>
            ›
          </button>

        </div>

        {/* WEEKDAYS */}
        <div className="grid grid-cols-7 text-center text-gray-400 text-sm py-2">

          <div>M</div>
          <div>T</div>
          <div>W</div>
          <div>T</div>
          <div>F</div>
          <div>S</div>
          <div>S</div>

        </div>

        {/* DAYS */}
        <div className="grid grid-cols-7 gap-1 p-2">

          {[...Array(startDay === 0 ? 6 : startDay - 1)].map((_, i) => (
            <div key={i}></div>
          ))}

          {days.map((day) => {

            const past = isBefore(day, today);

            const formattedDay = format(day, "yyyy-MM-dd");

            const isLocked = lockedDates.includes(formattedDay);

            const disabled = past || isLocked;

            const isSelected =
              selectedDate &&
              formattedDay === format(selectedDate, "yyyy-MM-dd");

            return (

              <button
                key={day.toString()}
                disabled={disabled}
                onClick={() => {
                  if (disabled) return;
                  setSelectedDate(day);
                  setSelectedSlots([]);
                }}
                className={`h-10 rounded text-sm transition
                  ${
                    past
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : isLocked
                      ? "bg-red-400 text-white cursor-not-allowed"
                      : "bg-[#5a0f2e] text-white"
                  }
                  ${isSelected ? "bg-green-600 text-white" : ""}
                `}
              >
                {format(day, "d")}
              </button>

            );

          })}

        </div>

      </div>

      {/* SLOT LIST */}
      {selectedDate && (

        <div className="mt-6">

          <h3 className="font-semibold mb-3">
            Select your slot *
          </h3>

          <div className="space-y-2">

            {product.slots.map((slot) => (

              <label
                key={slot.id}
                className="flex items-center gap-2 cursor-pointer"
              >

                <input
                  type="checkbox"
                  checked={selectedSlots.some((s) => s.id === slot.id)}
                  onChange={() => toggleSlot(slot)}
                />

                {slot.label}

              </label>

            ))}

          </div>

        </div>

      )}

      {/* SUMMARY */}
      {selectedDate && selectedSlots.length > 0 && (

        <div className="mt-6 border-t pt-4">

          <div className="flex justify-between mb-2">

            <span className="font-medium">{product.name}</span>

            <span>₹{price}</span>

          </div>

          <div className="text-sm text-gray-600">

            Date : {format(selectedDate, "dd MMM yyyy")}

          </div>

          <div className="text-sm text-gray-600 mt-2">

            Slots :

            <ul className="list-disc ml-4 mt-2">

              {selectedSlots.map((s) => (
                <li key={s.id}>{s.label}</li>
              ))}

            </ul>

          </div>

          <div className="mt-3 text-sm text-end font-semibold text-[#5a0f2e]">

            Subtotal ₹{price} (Excluding 18% GST)

          </div>

          <button
            onClick={continueBooking}
            className="mt-4 bg-[#5a0f2e] text-white px-6 py-2 rounded"
          >
            Continue Booking
          </button>

        </div>

      )}

    </div>

  );
}