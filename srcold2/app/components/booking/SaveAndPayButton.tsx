// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// interface Props {
//   bookingId: string;
//   form: any;
// }

// export default function SaveAndPayButton({
//   bookingId,
//   form,
// }: Props) {

//   const handleSaveAndPay = async () => {

//     // Save billing
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_API_URL}/bookings/${bookingId}/customer`,
//       {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       }
//     );

//     const data = await res.json();

//     if (!data.success) {
//       alert(data.message);
//       return;
//     }

//     // Redirect to payment trigger
//     window.location.reload();
//   };

//   return (
//     <button
//       onClick={handleSaveAndPay}
//       className="w-full bg-[#5a1022] text-white py-3 rounded mt-4"
//     >
//       Continue to Payment
//     </button>
//   );
// }


/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";

interface Props {
  bookingId: string;
  form: any;
}

export default function SaveAndPayButton({
  bookingId,
  form,
}: Props) {

  const [loading, setLoading] = useState(false);

  const handleSaveAndPay = async () => {

    try {

      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/bookings/${bookingId}/customer`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (!res.ok || !data) {
        alert(data?.message || "Failed to save booking details");
        setLoading(false);
        return;
      }

      /* =============================
         REDIRECT TO PAYMENT PAGE
      ============================= */

      window.location.href = `/payment/${bookingId}`;

    } catch (error) {

      console.error("Save booking error:", error);
      alert("Something went wrong. Please try again.");

    } finally {

      setLoading(false);

    }

  };

  return (
    <button
      onClick={handleSaveAndPay}
      disabled={loading}
      className="w-full bg-[#5a1022] text-white py-3 rounded mt-4 hover:bg-[#3f0c1c] transition disabled:opacity-50"
    >
      {loading ? "Processing..." : "Continue to Payment"}
    </button>
  );
}