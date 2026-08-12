/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import BookingStepper from "@/app/components/BookingStepper";
import BookingSummary from "@/app/components/BookingSummary";
import { useBooking } from "@/app/context/BookingContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { format } from "date-fns";
import api from "@/lib/api";

type LockBookingResponse = {
  bookingId: string;
};

type RazorpayOrder = {
  id: string;
  amount: number;
  currency: string;
};

export default function CheckoutPage() {

  const router = useRouter();
  const { booking } = useBooking();

  const [form, setForm] = useState({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "Maharashtra",
  postcode: ""
});

  const [agree, setAgree] = useState(false);

  if (!booking) {
    return (
      <div className="max-w-6xl mx-auto py-16 text-center">
        No booking found
      </div>
    );
  }

  const formattedDate = format(new Date(booking.date), "MMMM d, yyyy");

  const slotText = booking.slots.map((s) => s.label).join(", ");

  const price = booking.price;
const bookingAmount = booking.bookingAmount;
const gst = Math.round(bookingAmount * 0.18);
const payNow = bookingAmount + gst;

  /* --------------------------
      Load Razorpay Script
  -------------------------- */

  function loadRazorpay(): Promise<boolean> {
  return new Promise((resolve) => {

    if (typeof window === "undefined") {
      resolve(false);
      return;
    }

    if ((window as any).Razorpay) {
      resolve(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;

    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);

    document.body.appendChild(script);
  });
}
  /* --------------------------
        Handle Payment
  -------------------------- */

  async function handlePayment() {

    if (!booking) return;

    if (!agree) {
      alert("Please agree to terms and conditions");
      return;
    }

    const loaded = await loadRazorpay();

    if (!loaded) {
      alert("Razorpay SDK failed to load");
      return;
    }

    try {

      /* STEP 1 — LOCK BOOKING */

      // const lockRes = await api.post<LockBookingResponse>(
      //   "/bookings/lock",
      //   {
      //     productId: booking.productId,
      //     date: booking.date,
      //     slotIds: booking.slots.map((s) => s.id),
      //   }
      // );

      const lockRes = await api.post<LockBookingResponse>(
  "/bookings/lock",
  {
    productId: booking.productId,
    date: booking.date,
    slotIds: booking.slots.map((s) => s.id),

    firstName: form.firstName,
    lastName: form.lastName,
    email: form.email,
    phone: form.phone,
    address: form.address,
    city: form.city,
    state: form.state,
    postcode: form.postcode
  }
);

      const bookingId = lockRes.data.bookingId;

      /* STEP 2 — CREATE RAZORPAY ORDER */

      const orderRes = await api.post<RazorpayOrder>(
        "/payment/create-order",
        {
          bookingId: bookingId,
        }
      );

      const order = orderRes.data;

      /* STEP 3 — OPEN RAZORPAY */

    /* STEP 3 — OPEN RAZORPAY */

const options = {

  key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,

  amount: order.amount,
  currency: order.currency,
  order_id: order.id,

  name: "Locations Hub",
  description: booking.productName,

  handler: async function (response: any) {

    await api.post("/payment/verify", {
      bookingId: bookingId,
      razorpay_order_id: response.razorpay_order_id,
      razorpay_payment_id: response.razorpay_payment_id,
      razorpay_signature: response.razorpay_signature,
    });

    router.push(`/thank-you?bookingId=${bookingId}`);

  },

  prefill: {
    name: `${form.firstName} ${form.lastName}`,
    email: form.email,
    contact: form.phone
  },

  theme: {
    color: "#5a0f2e",
  },

};

const Razorpay = (window as any).Razorpay;
const rzp = new Razorpay(options);
rzp.open();

    } catch (error) {

      console.error("Payment Error", error);
      alert("Payment failed");

    }

  }

  return (
    <div className="max-w-6xl mx-auto py-16 booking-panel">

      <BookingStepper step={2} />

      <div className="grid md:grid-cols-2 gap-12">

        {/* LEFT FORM */}

        <div className="space-y-4">

          <div className="grid md:grid-cols-2 gap-4">
           <Input
  label="First name *"
  value={form.firstName}
  onChange={(v) => setForm({ ...form, firstName: v })}
/>
            <Input
  label="Last name *"
  value={form.lastName}
  onChange={(v) => setForm({ ...form, lastName: v })}
/>
          </div>

        <Input
  label="Street address *"
  value={form.address}
  onChange={(v) => setForm({ ...form, address: v })}
/>

          

  <Input
  label="Town / City *"
  value={form.city}
  onChange={(v) => setForm({ ...form, city: v })}
/>

          <div>
            <label className="text-sm">State / County *</label>
            <select className="w-full border border-gray-300 p-2 mt-1">
              <option>Maharashtra</option>
              <option>Gujarat</option>
              <option>Delhi</option>
            </select>
          </div>

          <Input
  label="Postcode / ZIP *"
  value={form.postcode}
  onChange={(v) => setForm({ ...form, postcode: v })}
/>

        <Input
  label="Phone *"
  value={form.phone}
  onChange={(v) => setForm({ ...form, phone: v })}
/>

         <Input
  label="Email address *"
  value={form.email}
  onChange={(v) => setForm({ ...form, email: v })}
/>

          <div>
            <label className="text-sm">You Found Us Via *</label>
         <select
  value={form.state}
  onChange={(e) =>
    setForm({ ...form, state: e.target.value })
  }
  className="w-full border border-gray-300 p-2 mt-1"
>
  <option value="Google">Google</option>
  <option value="Instagram">Instagram</option>
  <option value="Friend">Friend</option>
</select>
          </div>

          <div>
            <label className="text-sm">Notes (optional)</label>
            <textarea
              rows={3}
              className="w-full border border-gray-300 p-2 mt-1"
              placeholder="Notes about your order"
            />
          </div>

        </div>

        {/* RIGHT SUMMARY */}

        <div>

         <BookingSummary
  date={formattedDate}
  packageName={booking.productName}
  slot={slotText}
  price={price}
  bookingAmount={booking.bookingAmount}
/>

          <div className="text-sm text-gray-600 mt-6 space-y-3">

            <p>
              Pay securely by Credit or Debit card or Internet Banking through Razorpay.
            </p>

            <p>
              Your personal data will be used to process your order and support your experience.
            </p>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
              />
              I have read and agree to the website terms and conditions *
            </label>

          </div>

          <button
            onClick={handlePayment}
            className="mt-6 w-full bg-[#5a0f2e] text-white py-3"
          >
            Pay Now ₹{payNow}
          </button>

        </div>

      </div>

    </div>
  );
}

{/* function Input({
  label,
  placeholder,
}: {
  label: string;
  placeholder?: string;
}) {
  return (
    <div>
      {label && <label className="text-sm">{label}</label>}
      <input
        placeholder={placeholder}
        className="w-full border border-gray-300 p-2 mt-1"
      />
    </div>
  );
} */}

type InputProps = {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
};

function Input({
  label,
  placeholder,
  value,
  onChange
}: InputProps) {

  return (
    <div>

      {label && <label className="text-sm">{label}</label>}

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full border border-gray-300 p-2 mt-1"
      />

    </div>
  );
}