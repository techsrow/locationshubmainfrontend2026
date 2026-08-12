"use client";

import Image from "next/image";

export default function OvernightAccommodation() {
  return (
    <div className="bg-[#f3f0f2] min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-16">

        {/* ================= HEADER TITLE ================= */}
        <h1 className="font-['Quicksand'] text-[26px] font-semibold text-[#74405B] mb-6">
          Overnight Accommodation Rooms
        </h1>

        {/* ================= SIGNATURE ROOM ================= */}
        <div className="space-y-3 mb-6">
          <div className="font-['Quicksand'] text-[18px] font-bold text-[#74405B]">
            Signature Room
          </div>

         <ul className="space-y-2 font-['Quicksand'] text-[18px] font-bold text-[#74405B]">
  <li>• 500 sq. ft. room</li>
  <li>• Picturesque Surroundings</li>
  <li>• Air Conditioned Room</li>
  <li>• Cost - Rs 5,000</li>
  <li>
    • Please Note - Overnight Accommodation is available only for shoots starting at 7am next day.
  </li>
</ul>
        </div>

        {/* Images Section */}
        <div className="space-y-8 mb-12">
          <Image
            src="/images/accomodation/Signature-2.jpg"
            alt="Signature Room"
            width={1200}
            height={700}
            className="w-full h-auto"
          />
          <Image
            src="/images/accomodation/Signature-1.jpg"
            alt="Signature Room Interior"
            width={1200}
            height={700}
            className="w-full h-auto"
          />
        </div>

        {/* ================= EXECUTIVE ROOM ================= */}
        <div className="space-y-3 mb-6">
          <div className="font-['Quicksand'] text-[18px] font-bold text-[#74405B]">
            Executive Rooms
          </div>

         <ul className="space-y-2 font-['Quicksand'] text-[18px] font-bold text-[#74405B]">
            <li>• 250sq. ft. room</li>
            <li>• Picturesque Surroundings</li>
            <li>• Air Conditioned Room</li>
            <li>• Cost - Rs 2,500</li>
            <li>
              • Please Note - Overnight Accommodation is available only for shoots starting at 7am next day.
            </li>
          </ul>
        </div>

        {/* Executive Images */}
        <div className="space-y-8 mb-12">
          <Image
            src="/images/accomodation/Executive-1.jpg"
            alt="Executive Room"
            width={1200}
            height={700}
            className="w-full h-auto"
          />
          <Image
          src="/images/accomodation/Executive-2.jpg"
            alt="Executive Room Interior"
            width={1200}
            height={700}
            className="w-full h-auto"
          />
        </div>

        {/* ================= DESCRIPTION ================= */}
        <div className="space-y-6 text-[16px] font-medium text-[#74405B] font-['Quicksand']">
          <p>
            We understand your needs when you are looking to be fresh for an early morning pre wedding
            photoshoot at sunrise. Therefore, we have made sure to provide you with overnight
            accommodation at Locations Hub. While this saves you the hassle of travelling all the way to
            the shoot, it also helps you remain refreshed.
          </p>

          <p>
            You can book a room at Locations Hub for an overnight stay before your shoot day.
            Our rooms are rather large at 500 and 250 square feet. A maximum of 4 persons can be
            accommodated in Executive room and 6 in Signature room.
          </p>

          <p>
            So you see, our overnight accommodation adds to your comfort to make your
            experience at Locations Hub truly wonderful.
          </p>
        </div>

      </div>
    </div>
  );
}
