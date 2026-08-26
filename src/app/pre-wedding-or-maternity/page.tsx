"use client";

import Link from "next/link";
import { useEffect } from "react";
import OfferPopup from "@/app/components/OfferPopup";
import type { Metadata } from "next";
import { getSeo } from "@/lib/seo";

type Plan = {
  title: string;
  price: string;
  oldPrice: string;
  link: string;
  features: string[];
};

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSeo(
    "pre-wedding-or-maternity"
  );

  if (!seo) {
    return {
      title: "Pre Wedding Or Maternity",
    };
  }

  const imageUrl = seo.ogImage
    ? `${process.env.NEXT_PUBLIC_API_URL}${seo.ogImage}`
    : undefined;

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,

    openGraph: {
      title: seo.metaTitle,
      description: seo.metaDescription,
      images: imageUrl
        ? [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
            },
          ]
        : [],
    },

    twitter: {
      card: "summary_large_image",
      title: seo.metaTitle,
      description: seo.metaDescription,
      images: imageUrl
        ? [imageUrl]
        : [],
    },
  };
}

export default function PreWeddingOrMaternityPage() {
  // useEffect(() => {
  //   const cards = document.querySelectorAll(".pricing-card");

  //   let maxHeight = 0;

  //   cards.forEach((card) => {
  //     const height = (card as HTMLElement).clientHeight;
  //     if (height > maxHeight) maxHeight = height;
  //   });

  //   cards.forEach((card) => {
  //     (card as HTMLElement).style.height = `${maxHeight}px`;
  //   });
  // }, []);

  const plans: Plan[] = [
  // SILVER
  {
    title: "Silver",
    price: "10,000",
    oldPrice: "15,000 INR",
    link: "products/pre-wedding-silver",
    features: [
      "7am to 12pm or 2pm to 7pm",
      "For one couple only",
      "One shared AC green room",
      "Entry fees for 6 people incl couple",
      "Extra person Rs 1000 per head",
      "Access to all sets, one at a time",
      "Overtime Rs 2,500 per hour",
      "Security deposit Rs 5,000",
    ],
  },
  {
    title: "Silver + MakeUp",
    price: "17,500",
    oldPrice: "24,000 INR",
    link: "products/pre-wedding-silver-make-up",
    features: [
      "7am to 12pm or 2pm to 7pm",
      "For one couple only",
      "One shared AC green room",
      "Entry fees for 6 people incl couple",
      "Extra person Rs 1000 per head",
      "Access to all sets, one at a time",
      "Overtime Rs 2,500 per hour",
      "Security deposit Rs 5,000",
      "Makeup & Hair for the couple",
    ],
  },
  {
    title: "Silver + Costumes",
    price: "18,000",
    oldPrice: "30,000 INR",
    link: "products/pre-wedding-silver-coustumes",
    features: [
      "7am to 12pm or 2pm to 7pm",
      "For one couple only",
      "One shared AC green room",
      "Entry fees for 6 people incl couple",
      "Extra person Rs 1000 per head",
      "Access to all sets, one at a time",
      "Overtime Rs 2,500 per hour",
      "Security deposit Rs 5,000",
      "Unlimited costume for the couple",
    ],
  },
  {
    title: "Silver + MakeUp + Costumes",
    price: "25,500",
    oldPrice: "38,000 INR",
    link: "products/silver-makeup-costumes",
    features: [
      "7am to 12pm or 2pm to 7pm",
      "For one couple only",
      "One shared AC green room",
      "Entry fees for 6 people incl couple",
      "Extra person Rs 1000 per head",
      "Access to all sets, one at a time",
      "Overtime Rs 2,500 per hour",
      "Security deposit Rs 5,000",
      "Makeup & Hair for the couple Included",
      "Unlimited Costume for the couple",
    ],
  },

  // GOLD
  {
    title: "Gold",
    price: "15,000",
    oldPrice: "22,000 INR",
    link: "products/pre-wedding-gold",
    features: [
      "7am to 3pm or 11am to 7pm",
      "For one couple only",
      "One private AC green room",
      "Entry fees for 6 people incl couple",
      "Extra person Rs 1000 per head",
      "Access to all sets, one at a time",
      "Overtime Rs 2,500 per hour",
      "Security deposit Rs 5,000",
    ],
  },
  {
    title: "Gold + MakeUp",
    price: "25,000",
    oldPrice: "32,000 INR",
    link: "products/pre-wedding-gold-makeup",
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
    link: "products/pre-wedding-gold-costumes",
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
    title: "Gold + MakeUp + Costumes",
    price: "34,000",
    oldPrice: "45,000 INR",
    link: "products/pre-wedding-gold-makeup-costumes",
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

  // PLATINUM
  {
    title: "Platinum",
    price: "20,000",
    oldPrice: "30,000 INR",
    link: "products/pre-wedding-platinum",
    features: [
      "7am to 7pm or 9am to 9pm",
      "For one couple only",
      "One private AC green room",
      "Entry fees for 9 people incl couple",
      "Extra person Rs 1000 per head",
      "Access to all sets, one at a time",
      "Overtime Rs 2,500 per hour",
      "Security deposit Rs 5,000",
    ],
  },
  {
    title: "Platinum + MakeUp",
    price: "30,000",
    oldPrice: "40,000 INR",
    link: "products/pre-wedding-platinum-makeup",
    features: [
      "7am to 7pm or 9am to 9pm",
      "For one couple only",
      "One private AC green room",
      "Entry fees for 9 people incl couple",
      "Extra person Rs 1000 per head",
      "Access to all sets, one at a time",
      "Overtime Rs 2,500 per hour",
      "Security deposit Rs 5,000",
      "Makeup & Hair for the couple",
    ],
  },
  {
    title: "Platinum + Costumes",
    price: "30,000",
    oldPrice: "45,000 INR",
    link: "products/pre-wedding-platinum-costumes",
    features: [
      "7am to 7pm or 9am to 9pm",
      "For one couple only",
      "One private AC green room",
      "Entry fees for 9 people incl couple",
      "Extra person Rs 1000 per head",
      "Access to all sets, one at a time",
      "Overtime Rs 2,500 per hour",
      "Security deposit Rs 5,000",
      "Unlimited Costumes for the couple",
    ],
  },
  {
    title: "Platinum + MakeUp + Costumes",
    price: "40,000",
    oldPrice: "55,000 INR",
    link: "products/pre-wedding-platinum-makeup-costumes",
    features: [
      "7am to 7pm or 9am to 9pm",
      "For one couple only",
      "One private AC green room",
      "Entry fees for 9 people incl couple",
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
        <div className="pricing-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      <OfferPopup
  title="20% Discount"
  subtitle="For Pre Wedding Shoot (Limited Time Offer)"
/>
    </section>

  );
}