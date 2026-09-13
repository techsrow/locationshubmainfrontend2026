"use client";

import Link from "next/link";

export default function ProductOrGarmentOrFashionPage() {
const plans = [
    {
      title: "Silver",
      price: "30,000",
      oldPrice: "35,000 INR",
      link: "products/music-video-ad-shoot-silver",
      features: [
        "6 Hrs",
        "Entry fees included for 15 people",
        "One private AC green room",
        "Extra person Rs 1000 per head",
        "Access to all sets, one at a time",
        "Overtime Rs 4,000 per hour",
        "Security deposit Rs 10,000",
        "Non heavy lights allowed",
      ],
    },
    {
      title: "Gold",
      price: "40,000",
      oldPrice: "45,000 INR",
      link: "products/music-video-ad-shoot-gold",
      features: [
        "9 Hrs",
        "Entry fees included for 15 people",
        "One private AC green room",
        "Extra person Rs 1000 per head",
        "Access to all sets, one at a time",
        "Overtime Rs 4,000 per hour",
        "Security deposit Rs 10,000",
        "Non heavy lights allowed",
      ],
    },
    {
      title: "Platinum",
      price: "50,000",
      oldPrice: "60,000 INR",
      link: "products/music-video-ad-shoot-platinum",
      features: [
        "12 Hrs",
        "Entry fees included for 15 people",
        "One private AC green rooms",
        "Extra person Rs 1000 per head",
        "Access to all sets, one at a time",
        "Overtime Rs 4,000 per hour",
        "Security deposit Rs 10,000",
        "Non heavy lights allowed",
      ],
    },
  ];

  return (
   <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="text-center text-sm text-gray-500 mb-10">
         Music Video | Ad shoot
        </div>

        {/* 3-column centered grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 lg:gap-0 place-items-center">

          {plans.map((plan, i) => (
            <div
              key={i}
              className="pricing-card w-full max-w-[393px] bg-white border border-black/10 flex flex-col"
            >
              {/* Header (two-tone like screenshot) */}
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
                    <div className="text-[12px] text-[#3b1326]/80 line-through mt-1">
                      {plan.oldPrice}
                    </div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <ul className="flex-1">
                {plan.features.map((item, idx) => (
                  <li
                    key={idx}
                    className={`text-center text-[14px] py-3 border-t border-black/10 ${
                      idx % 2 === 0 ? "bg-[#f7f6f6]" : "bg-[#ece9ea]"
                    }`}
                  >
                    {item}
                  </li>
                ))}
              </ul>

              {/* Footer */}
             <div className="py-6 text-center">
  <Link
    href={plan.link}
    className="bg-[#3b1326] text-white text-sm px-6 py-2 rounded hover:bg-[#2f0f1e] transition inline-block"
  >
    Book Now
  </Link>
</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}