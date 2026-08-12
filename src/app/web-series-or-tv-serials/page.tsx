"use client";

import { useEffect } from "react";

export default function WebSeriesOrTvSerialsPage() {
  useEffect(() => {
    const syncHeights = () => {
      const cards = document.querySelectorAll(".pricing-card");
      let maxHeight = 0;

      cards.forEach((card) => {
        (card as HTMLElement).style.height = "auto";
      });

      cards.forEach((card) => {
        maxHeight = Math.max(maxHeight, (card as HTMLElement).offsetHeight);
      });

      cards.forEach((card) => {
        (card as HTMLElement).style.height = `${maxHeight}px`;
      });
    };

    syncHeights();
    window.addEventListener("resize", syncHeights);
    return () => window.removeEventListener("resize", syncHeights);
  }, []);

  const plans = [
    {
      title: "Gold",
      price: "45,000",
      features: [
        "9 Hrs",
        "Entry fees included for 15 people",
        "One private AC green room",
        "Extra person Rs 1000 per head",
        "Access to all sets, one at a time",
        "Overtime Rs 5,000 per hour",
        "Security deposit Rs 10,000",
        "Non heavy lights allowed",
      ],
    },
    {
      title: "Platinum",
      price: "60,000",
      features: [
        "12 Hrs",
        "Entry fees included for 15 people",
        "2 private AC green rooms",
        "Extra person Rs 1000 per head",
        "Access to all sets, one at a time",
        "Overtime Rs 5,000 per hour",
        "Security deposit Rs 10,000",
        "Non heavy lights allowed",
      ],
    },
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title (centered like screenshot) */}
        <div className="text-center text-sm text-gray-500 mb-10">
          Web series | TV Serial
        </div>

        {/* 2 cards layout like screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-4 place-items-center">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="pricing-card w-full  bg-white border border-black/10 flex flex-col"
            >
              {/* Header (two-tone like screenshot) */}
              <div className="relative text-center text-white">
                <div className="bg-[#3b1326] py-10">
                  <h3 className="text-xl font-semibold tracking-wide">
                    {plan.title}
                  </h3>
                </div>

                <div className="bg-[#5a2a3b] h-14" />

                {/* Price circle (price + INR) */}
                <div className="absolute left-1/2 -translate-x-1/2 top-[74px]">
                  <div className="w-[92px] h-[92px] rounded-full bg-white text-[#3b1326] flex flex-col items-center justify-center border border-black/10 shadow-sm">
                    <div className="text-lg font-semibold leading-none">
                      {plan.price}
                    </div>
                    <div className="text-[11px] text-[#3b1326]/80 mt-1">
                      INR
                    </div>
                  </div>
                </div>
              </div>

              {/* Features */}
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

              {/* Footer */}
              <div className="py-6 text-center">
                <button className="bg-[#3b1326] text-white text-sm px-6 py-2 rounded hover:bg-[#2f0f1e] transition">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
