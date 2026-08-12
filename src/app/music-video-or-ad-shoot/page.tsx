"use client";

import { useEffect } from "react";

export default function MusicVideoOrAdShootPage() {
  useEffect(() => {
    const cards = document.querySelectorAll(".pricing-card");
    let maxHeight = 0;

    // reset first (important when resize or re-render)
    cards.forEach((card) => {
      (card as HTMLElement).style.height = "auto";
    });

    cards.forEach((card) => {
      maxHeight = Math.max(maxHeight, (card as HTMLElement).offsetHeight);
    });

    cards.forEach((card) => {
      (card as HTMLElement).style.height = `${maxHeight}px`;
    });
  }, []);

  const plans = [
    {
      title: "Silver",
      price: "20,000",
      oldPrice: "25,000 INR",
      features: [
        "7am to 1pm or 1pm to 7pm",
        "Shoot with multiple models",
        "One private AC green room",
        "Entry fees included for 10 people",
        "Extra person Rs 1000 per head",
        "Above 10 extra person, Rs 2000 per head",
        "Access to all sets, one at a time",
        "Overtime Rs 3,000 per hour",
      ],
      btnText: "Book Now",
    },
    {
      title: "Gold",
      price: "35,000",
      oldPrice: "45,000 INR",
      features: [
        "7am to 7pm (12 Hours)",
        "Shoot with multiple models",
        "One private AC green room",
        "Entry fees included for 15 people",
        "Extra person Rs 1000 per head",
        "Above 15 extra person, Rs 2000 per head",
        "Access to all sets, one at a time",
        "Overtime Rs 3,000 per hour",
      ],
      btnText: "Book Now",
    },
    {
      title: "Platinum",
      price: "60,000",
      oldPrice: "75,000 INR",
      features: [
        "Full day (Up to 12 Hours)",
        "Shoot with multiple models",
        "Two private AC green rooms",
        "Entry fees included for 20 people",
        "Extra person Rs 1000 per head",
        "Above 20 extra person, Rs 2000 per head",
        "Access to all sets (as per availability)",
        "Overtime Rs 3,000 per hour",
      ],
      btnText: "Book Now",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb like old page */}
        <div className="text-center text-sm text-gray-500 mb-10">
          Music Video | Ad Shoot
        </div>

        {/* 3-column centered grid like screenshot (NO GAP) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 place-items-center">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="pricing-card w-full max-w-[393px] bg-white border border-black/10 flex flex-col"
            >
              {/* Header (two-tone) */}
              <div className="relative text-center text-white">
                <div className="bg-[#3b1326] py-10">
                  <h3 className="text-xl font-semibold tracking-wide">
                    {plan.title}
                  </h3>
                </div>

                <div className="bg-[#5a2a3b] h-14" />

                {/* Price circle */}
                <div className="absolute left-1/2 -translate-x-1/2 top-[74px]">
                  <div className="w-[92px] h-[92px] rounded-full bg-white text-[#3b1326] flex flex-col items-center justify-center border border-black/10 shadow-sm">
                    <div className="text-lg font-semibold leading-none">
                      {plan.price}
                    </div>
                    <div className="text-[11px] text-[#3b1326]/80 line-through mt-1">
                      {plan.oldPrice}
                    </div>
                  </div>
                </div>
              </div>

              {/* Features (striped) */}
              <ul className="flex-1">
                {plan.features.map((item, idx) => (
                  <li
                    key={idx}
                    className={`text-center text-sm py-3 border-t border-black/10 ${
                      idx % 2 === 0 ? "bg-[#f7f6f6]" : "bg-[#ece9ea]"
                    }`}
                  >
                    {item}
                  </li>
                ))}
              </ul>

              {/* Footer (button at bottom like screenshot) */}
              <div className="py-6 text-center">
                <button className="bg-[#3b1326] text-white text-sm px-6 py-2 rounded hover:bg-[#2f0f1e] transition">
                  {plan.btnText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
