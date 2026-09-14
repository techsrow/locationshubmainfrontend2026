"use client";

import Image from "next/image";
import Link from "next/link";

import {
  FaGem,
  FaSnowflake,
  FaTshirt,
  FaMagic,
  FaCameraRetro,
} from "react-icons/fa";

type StandoutItem = {
  number: string;
  title: string;
  text: string;
  icon: React.ReactNode;
};

const items: StandoutItem[] = [
  {
    number: "01",
    title: "Premium Sets",
    text: "Elegant and spacious sets for a grand cinematic look.",
    icon: <FaGem />,
  },
  {
    number: "02",
    title: "AC Indoor Sets",
    text: "Luxurious indoor sets perfect for every season.",
    icon: <FaSnowflake />,
  },
  {
    number: "03",
    title: "Costumes On Rent",
    text: "Wide collection with onsite alteration support.",
    icon: <FaTshirt />,
  },
  {
    number: "04",
    title: "Inhouse Makeup Artist",
    text: "Personalized makeup and styling from our experts.",
    icon: <FaMagic />,
  },
  {
    number: "05",
    title: "Tons of Props",
    text: "High quality props to create unique cinematic shots.",
    icon: <FaCameraRetro />,
  },
];

export default function StandOutSection({
  amsterdamClass,
  cinzelClass,
}: {
  amsterdamClass: string;
  cinzelClass: string;
}) {
  return (
    <section className="standout-premium-section">

      <div className="standout-premium-shell">

        {/* ==================================================
            IMAGE
        ================================================== */}

        <div className="standout-premium-photo">

          <Image
            src="/what-makes-us-stand-out-commercial.jpg"
            alt="Premium pre wedding shoot location"
            fill
            priority={false}
            sizes="(max-width: 767px) 100vw, 48vw"
            className="standout-premium-photo-img"
          />

          <div className="standout-premium-photo-shade" />

          

        </div>


        {/* ==================================================
            CONTENT
        ================================================== */}

        <div className="standout-premium-content">

          <div className="standout-premium-heading">

            <div
              className={`${amsterdamClass} standout-premium-script`}
            >
              What Makes Us
            </div>

            <h2
              className={`${cinzelClass} standout-premium-title`}
            >
              STAND OUT
            </h2>

            <div className="standout-premium-heart">
              <span />
              <b>♥</b>
              <span />
            </div>

            <p className="standout-premium-subtitle">
              DETAILS THAT MAKE YOUR STORY SPECIAL
            </p>

          </div>


          {/* ==================================================
              FEATURES
          ================================================== */}

          <div className="standout-premium-features">

            {items.map((item) => (
              <article
                key={item.number}
                className="standout-premium-feature"
              >

                <div className="standout-premium-number">
                  {item.number}
                </div>

                <div className="standout-premium-icon">
                  {item.icon}
                </div>

                <div className="standout-premium-feature-text">

                  <h3 className={cinzelClass}>
                    {item.title}
                  </h3>

                  <p>{item.text}</p>

                </div>

              </article>
            ))}

          </div>


          {/* ==================================================
              BOOK NOW
          ================================================== */}

          <div className="standout-premium-book">

            <span className="standout-premium-book-line" />

            <Link
              href="/pre-wedding-or-maternity"
              className={`${cinzelClass} standout-premium-book-btn`}
            >
              BOOK NOW
              <span>→</span>
            </Link>

            <span className="standout-premium-book-line" />

          </div>

        </div>

      </div>

    </section>
  );
}