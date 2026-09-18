"use client";

import Image from "next/image";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const logos = [
  {
    src: "/1times-of-india.png",
    alt: "Times of India",
    width: 230,
    height: 70,
  },
  {
    src: "/2weddingsutra-1.png",
    alt: "Wedding Sutra",
    width: 245,
    height: 70,
  },
  // {
  //   src: "/4wedmegood-1.png",
  //   alt: "WedMeGood",
  //   width: 225,
  //   height: 70,
  // },
  {
    src: "/5thhindustantimes-1.png",
    alt: "Hindustan Times",
    width: 235,
    height: 70,
  },
  // {
  //   src: "/3shaadisaga-1.png",
  //   alt: "Shaadi Saga",
  //   width: 145,
  //   height: 70,
  // },
  {
    src: "/6bigfatindianwedding.png",
    alt: "The Big Fat Indian Wedding",
    width: 215,
    height: 70,
  },
];

function LogoGroup({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div
      className="featured-marquee-group"
      aria-hidden={duplicate ? "true" : undefined}
    >
      {logos.map((logo, index) => (
        <div
          className="featured-marquee-logo"
          key={`${duplicate ? "duplicate-" : ""}${index}`}
        >
          <Image
            src={logo.src}
            alt={duplicate ? "" : logo.alt}
            width={logo.width}
            height={logo.height}
            className="featured-marquee-image"
          />
        </div>
      ))}
    </div>
  );
}

export default function FeaturedInSection() {
  return (
    <section className="featured-marquee-section">
      <div className="featured-marquee-heading">
        <h2 className={cinzel.className}>Featured In</h2>
      </div>

      <div className="featured-marquee-window">
        <div className="featured-marquee-track">
          <LogoGroup />
          <LogoGroup duplicate />
        </div>
      </div>
    </section>
  );
}