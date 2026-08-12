"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is Locations Hub ?",
    a: "Locations hub is sets of realistic locations for pre wedding, fashion shoots, music albums, web series, movies etc",
  },
  {
    q: "Where is Locations Hub located ?",
    a: "Locations Hub is between Mumbai and Lonavala, Khopoli Pali Road. 1 Hour Drive from Panvel.",
  },
  {
    q: "Are all indoor sets air conditioned?",
    a: "Yes, all the sets are air conditioned",
  },
  {
    q: "Does Locations Hub has a Canteen/Kitchen ?",
    a: "Yes we do have kitchen and canteen. A full time cook to serve you meals and refreshments.",
  },
  {
    q: "Are lunch and dinner served at Locations Hub ?",
    a: "Yes home made lunch/dinner/snacks are served in our canteen. For lunch and dinner you would have to inform a day prior for no of people. Snacks are served on Ala carte basis.",
  },
  {
    q: "How to book Locations Hub ?",
    a: "Your desired slots can be booked through our website or you can mail us at hello@locationshub.in or call us at 9920060062",
  },
  {
    q: "Does Locations Hub have green rooms ?",
    a: "Yes we have 4 green rooms of 250 sq ft each, one will be allotted to you when you check in.",
  },
  {
    q: "Is overnight stay/accomodation possible at Locations Hub ?",
    a: "Yes with additional charges of Rs 3000 (1 Room) you can overnight stay prior your shoot.",
  },
  {
    q: "Which season of the year is best to book Locations Hub ?",
    a: "We have designed in a way, anytime is best for shooting at Locations Hub.",
  },
  {
    q: "What are the timings of Locations Hub ?",
    a: "We are operational on all days from 6am to 8pm.",
  },
  {
    q: "Does Locations Hub provide photography and cinematography services ?",
    a: "Yes we provide photography and cinematography services with our own in house team. You can contact us 9920060062 for any query. You can add these services on check out page.",
  },
  {
    q: "Does Locations Hub make customized packages as per requirements ?",
    a: "Yes, please contact us on hello@locationshub.in or call us at 9920060062",
  },
  {
    q: "Are pets allowed at Locations Hub ?",
    a: "Yes we are a pet friendly property, with prior notice your pet can accompany you.",
  },
];

export default function FAQPage() {
  const [active, setActive] = useState<number | null>(12); // last open by default

  return (
    <main className="bg-[#fff6f3] py-16">
      <div className="max-w-4xl mx-auto px-4">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="border-b border-[#e6d2dc] py-4"
          >
            {/* QUESTION */}
            <button
              onClick={() => setActive(active === index ? null : index)}
              className="w-full flex justify-between items-center text-left font-quicksand text-[#74405B] text-[15px] md:text-[16px] font-[600]"
            >
              <span>{item.q}</span>
              <span className="text-lg">
                {active === index ? "▼" : "▶"}
              </span>
            </button>

            {/* ANSWER */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                active === index ? "max-h-40 mt-3" : "max-h-0"
              }`}
            >
              <p className="text-[#74405B] text-[14px] leading-6">
                {item.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
