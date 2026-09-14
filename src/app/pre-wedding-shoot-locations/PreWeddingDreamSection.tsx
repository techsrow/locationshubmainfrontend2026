"use client";

import { Cinzel } from "next/font/google";
import localFont from "next/font/local";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const amsterdam = localFont({
  src: "../../fonts/Amsterdam.ttf",
  display: "swap",
});

export default function PreWeddingDreamSection() {
  return (
    <section className="prewedding-dream-section">
      {/* subtle decorative background */}
      <div className="prewedding-dream-pattern" />

      <div className="prewedding-dream-container">

        {/* TOP LABEL */}
        <div className={`prewedding-dream-label ${cinzel.className}`}>
          <span>Your Dream Pre-Wedding</span>
          <strong>Starts Here</strong>
        </div>

        {/* MAIN CONTENT */}
        <div className="prewedding-dream-content">

          <p className={`prewedding-dream-small ${cinzel.className}`}>
            EVERYTHING FOR YOUR PERFECT PRE-WEDDING
          </p>

          <h2 className={`prewedding-dream-heading ${cinzel.className}`}>
            Luxury Sets, Multiple Themes
            <br />
            and Everything You Need for an
          </h2>

          <div
            className={`prewedding-dream-highlight ${amsterdam.className}`}
          >
            Unforgettable Shoot
          </div>

        </div>
      </div>
    </section>
  );
}