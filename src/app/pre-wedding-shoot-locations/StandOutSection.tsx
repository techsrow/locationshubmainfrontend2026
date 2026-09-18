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
    title: "Costumes on Rent",
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
    <section className="standout-premium-section  pre-wed-stand-mobile">

      <div className="standout-premium-shell">

        {/* ==================================================
            IMAGE
        ================================================== */}

        <div className="standout-premium-photo">

         {/* Mobile Vimeo Video */}
<div className="block md:hidden absolute inset-0">
  <iframe
    src="https://player.vimeo.com/video/952343036?autoplay=1&muted=1&loop=1&background=1"
    className="w-full h-full"
    allow="autoplay; fullscreen; picture-in-picture"
    allowFullScreen
  />
</div>

{/* Desktop Image */}
<div className="hidden md:block absolute inset-0">
  <Image
    src="/Film-Shooting-Locations-2.jpg"
    alt="Premium pre wedding shoot location"
    fill
    priority={false}
    sizes="48vw"
    className="standout-premium-photo-img"
  />
</div>

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

           

          </div>


<div className="desktop-standout-table">

  <div className="standout-table">

    <div className="standout-table-header">
      <div className="header-feature">FEATURES</div>
      <div className="header-lh">LOCATIONS HUB</div>
      <div className="header-other">OTHERS</div>
    </div>

    {items.map((item) => (
      <div
        key={item.number}
        className="standout-table-row"
      >
        <div className="table-feature">

          <div className="feature-number">
            {item.number}
          </div>

          <div className="feature-content">
            <h3 className={cinzelClass}>
              {item.title}
            </h3>

            <p>{item.text}</p>
          </div>

        </div>

        <div className="table-status">
          <div className="table-check">✓</div>
        </div>

        <div className="table-status">
          <div className="table-cross">✕</div>
        </div>

      </div>
    ))}

  </div>

</div>


<div className="mobile-section-stand block md:hidden">
  <div className="standout-premium-compare-header">
  <div></div>
  <div className="compare-header-item">Features</div>
  

  <div className="compare-header-item">
    Locations Hub
  </div>

  <div className="compare-header-item">
    Others
  </div>
</div>
         {items.map((item) => (
  <article
    key={item.number}
    className="standout-premium-feature"
  >
    {/* Number */}
   

    {/* Icon */}
    <div className="standout-premium-icon">
      {item.icon}
    </div>

    {/* Content */}
    <div className="standout-premium-info">
      <h3 className={cinzelClass}>
        {item.title}
      </h3>

      <p>{item.text}</p>
    </div>

    {/* Locations Hub */}
    <div className="standout-premium-status">
      

      <div className="status-circle success">
        ✓
      </div>
    </div>

    {/* Others */}
    <div className="standout-premium-status">
      

      <div className="status-circle danger">
        ✕
      </div>
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