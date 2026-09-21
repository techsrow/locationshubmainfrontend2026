"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Player from "@vimeo/player";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

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
const iframeRef = useRef<HTMLIFrameElement>(null);
const playerRef = useRef<Player | null>(null);

const [isMuted, setIsMuted] = useState(true);

useEffect(() => {
  if (!iframeRef.current) return;

  const player = new Player(iframeRef.current);

  playerRef.current = player;

  player.ready().then(async () => {
    try {
      await player.setMuted(true);
      await player.setVolume(0);
      await player.play();
    } catch (err) {
      console.error(err);
    }
  });

  return () => {
    player.destroy();
  };
}, []);


const toggleMute = async () => {
  if (!playerRef.current) return;

  try {
    if (isMuted) {
      await playerRef.current.setCurrentTime(0);
      await playerRef.current.setMuted(false);
      await playerRef.current.setVolume(1);
      await playerRef.current.play();

      setIsMuted(false);
    } else {
      await playerRef.current.setMuted(true);
      await playerRef.current.setVolume(0);

      setIsMuted(true);
    }
  } catch (err) {
    console.error(err);
  }
};


  return (
    <section className="standout-premium-section  pre-wed-stand-mobile">

      <div className="standout-premium-shell">

        {/* ==================================================
            IMAGE
        ================================================== */}

        <div className="standout-premium-photo">

         {/* Mobile Vimeo Video */}
{/* <div className="block md:hidden absolute inset-0">
 
   <iframe
  
  src={`https://player.vimeo.com/video/952343036?autoplay=1&muted=1&loop=1&playsinline=1&controls=1&title=0&byline=0&portrait=0&dnt=1`}
  className="prewedding-full-video-frame"
  allow="autoplay; fullscreen; picture-in-picture"
  allowFullScreen
  title="Pre Wedding Video"
/>
</div> */}

{/* Mobile Vimeo Video */}
<div className="block md:hidden absolute inset-0">

  <iframe
    ref={iframeRef}
  //  src="https://player.vimeo.com/video/952343036?autoplay=1&muted=0&loop=1&playsinline=1&controls=1&title=0&byline=0&portrait=0&dnt=1&background=1"
   src={`https://player.vimeo.com/video/952343036?autoplay=1&muted=1&loop=1&playsinline=1&background=1`}
    className="absolute inset-0 w-full h-full object-cover"
    allow="autoplay; fullscreen; picture-in-picture"
    allowFullScreen
    title="Pre Wedding Video"
  />

  <button
    onClick={toggleMute}
    className="mobile-video-sound-btn mobile-button-standout"
  >
    {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
  </button>

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
              className={` standout-premium-book-btn`}
            >
              BOOK NOW
             
            </Link>

            <span className="standout-premium-book-line" />

          </div>

        </div>

      </div>

    </section>
  );
}