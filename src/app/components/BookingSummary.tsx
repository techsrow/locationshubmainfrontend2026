/* eslint-disable @typescript-eslint/no-explicit-any */

type Props = {
  date: string;
  packageName: string;
  slot: string;
  price: number;
  bookingAmount: number;
};

export default function BookingSummary({
  date,
  packageName,
  slot,
  price,
  bookingAmount
}: Props) {

  const gst = bookingAmount * 0.18;
  const payNow = bookingAmount + gst;

  return (
    <div className="bg-white p-6 rounded">

      <h3 className="text-lg font-semibold mb-4 text-[#5a0f2e]">
        Your Booking
      </h3>

      <Row label="Booking Date :" value={date} />
      <Row label="Package :" value={packageName} />
      <Row label="Timing :" value={slot} />
      <Row label="Cost :" value={`₹${price}`} />
      <Row label="Total :" value={`₹${price}`} />
      <Row label="Booking Amount :" value={`₹${bookingAmount}`} />
      <Row label="GST :" value={`₹${gst}`} />

      <div className="flex justify-between font-semibold text-lg mt-4">
        <span>Pay Now</span>
        <span className="text-[#5a0f2e]">₹{payNow}</span>
      </div>

    </div>
  );
}

function Row({ label, value }: any) {
  return (
    <div className="flex justify-between booking-border-b py-2 text-sm">
      <span className="bdspan">{label}</span>
      <span className="data-title">{value}</span>
    </div>
  );
}