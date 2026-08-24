"use client";

import Link from "next/link";

type Props = {
  step: number;
};

export default function BookingStepper({ step }: Props) {

  return (

    <div className="mb-10">

      {/* DESKTOP STEPPER */}
      <div className="hidden md:flex items-center justify-center gap-6">

        <Link href="/booking">
          <Step number={1} title="Your Booking" active={step === 1} />
        </Link>

        <div className="w-32 h-[2px] bg-gray-300"></div>

        <Step number={2} title="Booking Details" active={step === 2} />

        <div className="w-32 h-[2px] bg-gray-300"></div>

        <Step number={3} title="Booking Complete" active={step === 3} />

      </div>

      {/* MOBILE STEPPER */}
      <div className="md:hidden flex flex-col items-center">

        <VerticalStep number={1} title="Your Booking" active={step === 1} />

        <div className="w-[2px] h-10 bg-gray-300"></div>

        <VerticalStep number={2} title="Booking Details" active={step === 2} />

        <div className="w-[2px] h-10 bg-gray-300"></div>

        <VerticalStep number={3} title="Booking Complete" active={step === 3} />

      </div>

    </div>

  );

}

function Step({
  number,
  title,
  active,
}: {
  number: number;
  title: string;
  active: boolean;
}) {

  return (

    <div className="text-center">

      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center text-white mx-auto
        ${active ? "bg-[#5a0f2e]" : "bg-gray-300"}`}
      >
        {number}
      </div>

      <p
        className={`text-sm mt-2 ${
          active ? "text-[#5a0f2e]" : "text-gray-400"
        }`}
      >
        {title}
      </p>

    </div>

  );

}

function VerticalStep({
  number,
  title,
  active,
}: {
  number: number;
  title: string;
  active: boolean;
}) {

  return (

    <div className="flex items-center gap-3">

      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center text-white
        ${active ? "bg-[#5a0f2e]" : "bg-gray-300"}`}
      >
        {number}
      </div>

      <p
        className={`text-sm ${
          active ? "text-[#5a0f2e]" : "text-gray-400"
        }`}
      >
        {title}
      </p>

    </div>

  );

}