"use client";

import Link from "next/link";
import { useEffect } from "react";

type Plan = {
  title: string;
  price: string;
  oldPrice: string;
  link: string;
  features: string[];
};

export default function PreWeddingOrMaternityPage() {
  useEffect(() => {
    const cards = document.querySelectorAll(".pricing-card");

    let maxHeight = 0;

    cards.forEach((card) => {
      const height = (card as HTMLElement).clientHeight;
      if (height > maxHeight) maxHeight = height;
    });

    cards.forEach((card) => {
      (card as HTMLElement).style.height = `${maxHeight}px`;
    });
  }, []);

  const plans: Plan[] = [
    {
      title: "Gold",
      price: "15,000",
      oldPrice: "22,000 INR",
      link: "https://booking.locationshub.in/pre-wedding-or-maternity/",
      features: [
        "7am to 3pm or 11am to 7pm",
        "For one couple only",
        "One private AC green room",
        "Entry fees for 6 people incl couple",
        "Extra person Rs 1000 per head",
        "Access to all sets, one at a time",
        "Overtime Rs 2,500 per hour",
        "Security deposit Rs 5,000",
        "",
        ""
      ],
    },
    {
      title: "Gold + Makeup",
      price: "25,000",
      oldPrice: "32,000 INR",
      link: "/products/pre-wedding-silver-test",
      features: [
        "7am to 3pm or 11am to 7pm",
        "For one couple only",
        "One private AC green room",
        "Entry fees for 6 people incl couple",
        "Extra person Rs 1000 per head",
        "Access to all sets, one at a time",
        "Overtime Rs 2,500 per hour",
        "Security deposit Rs 5,000",
        "Makeup & Hair for the couple",
      ],
    },
    {
      title: "Gold + Costumes",
      price: "24,000",
      oldPrice: "34,000 INR",
      link: "https://booking.locationshub.in/",
      features: [
        "7am to 3pm or 11am to 7pm",
        "For one couple only",
        "One private AC green room",
        "Entry fees for 6 people incl couple",
        "Extra person Rs 1000 per head",
        "Access to all sets, one at a time",
        "Overtime Rs 2,500 per hour",
        "Security deposit Rs 5,000",
        "Unlimited Costumes for the couple",
      ],
    },
    {
      title: "Gold + Makeup + Costumes",
      price: "34,000",
      oldPrice: "45,000 INR",
      link: "https://booking.locationshub.in",
      features: [
        "7am to 3pm or 11am to 7pm",
        "For one couple only",
        "One private AC green room",
        "Entry fees for 6 people incl couple",
        "Extra person Rs 1000 per head",
        "Access to all sets, one at a time",
        "Overtime Rs 2,500 per hour",
        "Security deposit Rs 5,000",
        "Unlimited Costumes for the couple",
        "Makeup & Hair for the couple",
      ],
    },
  ];

  return (
    <section className="pricing-wrapper">
      <div className="pricing-container">
        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <div className="pricing-card" key={i}>
              <div className="pricing-card-header">
                {plan.title}

                <div className="price-circle">
                  <div className="price">{plan.price}</div>
                  <div className="old-price">{plan.oldPrice}</div>
                </div>
              </div>

              <div className="pricing-card-subheader"></div>

              <ul className="pricing-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>

              <div className="pricing-footer">
                <Link className="book-nowbtn" href={plan.link}>
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