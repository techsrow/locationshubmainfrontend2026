"use client";

import Image from "next/image";
import { Cinzel } from "next/font/google";
import localFont from "next/font/local";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "./page.css";
import VideoSection from "./VideoSection";
import PreWeddingDreamSection from "./PreWeddingDreamSection";
import PreWeddingGallery from "@/app/components/PreWeddingGallery";

import "swiper/css";
import "swiper/css/free-mode";
import OurSetsSectionPage from "../components/sections/OurSetsSectionpage";
import TestimonialsSectionPage from "../components/sections/TestimonialsSectionpage";
import { useClientMemoryState } from "@/lib/clientMemoryCache";
import FullWidthVideoSection from "./FullWidthVideoSection";
import FeaturedInSection from "./FeaturedInSection";
import PreWeddingFilms from "./PreWeddingFilms";
import PreWeddingPortfolio from "./PreWeddingPortfolio";
import StandOutSection from "./StandOutSection";
import {
  FaGem,
  FaSnowflake,
  FaTshirt,
  FaMagic,
  FaPuzzlePiece,
} from "react-icons/fa";

import Link from "next/link";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const amsterdam = localFont({
  // src: "../../fonts/AmsterdamOneSlant-0WglP.ttf",
  src: "../../fonts/Amsterdam.ttf",
  display: "swap",
});

export default function PreWeddingShootLocations() {
  const [activeIndex, setActiveIndex] = useClientMemoryState<number | null>(
    "view:pre-wedding-shoot-locations:faq-active",
    0,
  );
  const faqData = [
    {
      q: "How far in advance should we book the studio?",
      a: "We recommend booking 1 to 2 months in advance to secure your preferred date, as we don’t overcrowd and take limited bookings per day.",
    },
    {
      q: "How long does a pre wedding shoot typically last?",
      a: "An ideal pre wedding shoot typically lasts 6 to 12 hours, depending on your requirements, changes and other factors.",
    },
    {
      q: "Can we choose multiple sets for our pre wedding shoot?",
      a: "Yes, you can choose multiple sets or locations from our available sets.",
    },
    {
      q: "Do you provide location recommendations for pre wedding shoots?",
      a: "Absolutely! We can recommend sets and locations from our collection that match your style and requirements.",
    },
    {
      q: "Do you offer hair and makeup artists for pre wedding shoot ?",
      a: "Yes, we have our inhouse makeup artist. Please check our website for the charges.",
    },
    {
      q: "What should we wear for the Pre-Wedding shoot?",
      a: "Your outfit plays a crucial role. We recommend wearing outfits that complement the theme and song. We would definately advise and help you finalizing the same.",
    },
    {
      q: "How many outfits are we allowed to change into during the shoot?",
      a: "You can have unlimited outfit changes during the shoot.",
    },
    {
      q: "How many outfits are we allowed to change into during the shoot?",
      a: "Yes we have a wide range of costumes on rent. We also offer unlimited costumes for bride and groom for Rs 12,000",
    },
    {
      q: "Can we do theme-based shoots?",
      a: "Yes, theme-based shoots are possible, and our versatile sets can be customized to fit your vision.",
    },
    {
      q: "Can we include our pets in the pre wedding shoot?",
      a: "Yes, our locations are pet-friendly, and pets are welcome in your shoot.",
    },
    {
      q: "Do you offer a consultation before the shoot to discuss ideas?",
      a: "Yes, we offer consultations to ensure the shoot reflects your vision perfectly. Please call us on 9920060062 for any custom package or special requirements.",
    },
    {
      q: "Do you recommend outdoor or indoor locations for the best shots?",
      a: "It depends on your style and requirements. We offer a perfect blend of indoor and outdoor sets.",
    },
    {
      q: "What is the best time of day to shoot?",
      a: "Early morning or late afternoon provides the best natural lighting for outdoor shoots.",
    },
    {
      q: "How do we book Locations Hub for our Pre wedding shoot ?",
      a: "Please make the bookings via our website, and pay a booking amount to secure your booking.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept bank transfers, credit cards, online payment and cash.",
    },
    {
      q: "What is your cancellation policy?",
      a: "Advance paid is non refundable.",
    },
    {
      q: "Can we bring along family members or friends on our shoot and are there any additional charges for the same ?",
      a: "Yes, you can. Please check extra person additional charges as per your desired package on our website.",
    },
  ];
  //  const faqData = [
  //   {
  //     q: "How far in advance should we book the studio?",
  //     a: "We recommend booking 1 to 2 months in advance to secure your preferred date, as we don’t overcrowd and take limited bookings per day.",
  //   },
  //   {
  //     q: "How long does a pre wedding shoot typically last?",
  //     a: "An ideal pre wedding shoot typically lasts 6 to 12 hours.",
  //   },
  //   {
  //     q: "Can we choose multiple sets for our pre wedding shoot?",
  //     a: "Yes, you can choose multiple sets or locations.",
  //   },
  //   {
  //     q: "Do you provide location recommendations for pre wedding shoots?",
  //     a: "Yes, we recommend locations based on your style.",
  //   },
  //   {
  //     q: "Do you offer hair and makeup artists for pre wedding shoot?",
  //     a: "Yes, we provide in-house makeup artists.",
  //   },
  //   {
  //     q: "What should we wear for the Pre-Wedding shoot?",
  //     a: "We guide you to select outfits that match your theme.",
  //   },
  //   {
  //     q: "How many outfits are allowed during the shoot?",
  //     a: "Unlimited outfit changes are allowed.",
  //   },
  //   {
  //     q: "Can we do theme-based shoots?",
  //     a: "Yes, theme-based shoots are fully customizable.",
  //   },
  //   {
  //     q: "Can we include pets in the shoot?",
  //     a: "Yes, our locations are pet-friendly.",
  //   },
  //   {
  //     q: "Do you offer consultation before the shoot?",
  //     a: "Yes, we provide full consultation before the shoot.",
  //   },
  //   {
  //     q: "What is the best time to shoot?",
  //     a: "Early morning or sunset is best for lighting.",
  //   },
  //   {
  //     q: "How do we book?",
  //     a: "Book via our website and confirm with advance payment.",
  //   },
  //   {
  //     q: "What payment methods do you accept?",
  //     a: "We accept UPI, bank transfer, cards, and cash.",
  //   },
  //   {
  //     q: "What is your cancellation policy?",
  //     a: "Advance payment is non-refundable.",
  //   },
  //   {
  //     q: "Can we bring friends or family?",
  //     a: "Yes, extra charges may apply depending on package.",
  //   },
  // ];

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const [showPopup, setShowPopup] = useState(false);

  return (
    <main className="w-full">
      {/* HERO */}
      {/* <section className="relative h-[90vh] flex items-center justify-center text-center text-white">
        <Image
          src="/home-banner.jpg"
          alt="Hero"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-3xl px-6">
          <p className="uppercase tracking-widest text-sm mb-4">
            Celebrate Your
          </p>

          <h2 className="text-5xl font-light mb-4">
            Love
          </h2>

          <h1 className="text-3xl font-semibold">
            with our Award Winning
            <br />
            Pre Wedding Photographers
          </h1>

          <p className="mt-4 text-sm">
            Best Pre Wedding Photographers in Mumbai
          </p>

          <button className="mt-6 px-6 py-3 bg-primary text-white text-sm">
            BOOK NOW
          </button>
        </div>
      </section> */}

      <section className=" hidden relative h-[100vh] flex items-center justify-center text-center text-white">
        <Image
          src="/Film-Shooting-Locations-2.jpg"
          alt="Hero"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 px-6 content-section">
          {/* Celebrate */}
          <p className={`${cinzel.className} text-celeb tracking-[4px]`}>
            Pre Wedding premium Location for your
          </p>

          {/* Love */}
          <h2
            className={`${amsterdam.className} love text-[80px] text-orange-400`}
          >
            Love Story
          </h2>

          {/* Heading */}
          <h1 className={`${cinzel.className} text-[50px] leading-tight`}>
            Exclusive Pre Wedding <br />
            Shoot Locations
          </h1>

          {/* Sub text */}

          <div className="text-center mt-10">
            <Link
              href="/pre-wedding-or-maternity"
              className={`quote-btn inline-flex items-center justify-center ${cinzel.className}`}
            >
              BOOK NOW
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURE IMAGE */}
      {/* <section className="py-20 bg-gray-100 flex justify-center">
        <div className="max-w-4xl w-full px-6">
         
        </div>
      </section> */}

      {/* DREAM PRE-WEDDING INTRO */}
      <PreWeddingDreamSection />
      <FullWidthVideoSection />

      {/* ================================
    FEATURED IN
================================ */}

      <FeaturedInSection />

      <section className="prewedding-photos-section">
        <h2 className={`${amsterdam.className} prewedding-photos-heading`}>
          Photos
        </h2>

        <PreWeddingGallery />
      </section>

      {/* =====================================================
    PRE WEDDING FILMS
===================================================== */}

      <section className="prewedding-films-section">
        <div className="prewedding-films-heading-wrap">
          <h2 className={`${amsterdam.className} prewedding-films-heading`}>
            Films
          </h2>
        </div>

        <PreWeddingFilms />
      </section>

      {/* =====================================================
    PORTFOLIO
===================================================== */}

      <section className="prewedding-portfolio-section">
        <div className="prewedding-portfolio-heading-wrap">
          <h2 className={`${amsterdam.className} prewedding-portfolio-heading`}>
            Portfolio
          </h2>
        </div>

        <PreWeddingPortfolio />
      </section>

      {/* OUR WORK */}
      <section className="py-20 work our-set workbg">
        <h2 className={`why-title work-title ${amsterdam.className}`}>
          Our Sets
        </h2>
        <OurSetsSectionPage />
      </section>

      {/* EXISTING VIDEO SECTION - UNCHANGED */}
      {/* <VideoSection /> */}

      {/* ABOUT */}
      {/* <AboutSection /> */}
      {/* <AboutSectionMobile /> */}

      {/* WHY US */}
      {/* WHY US SECTION */}

      {/* WHY US */}

     

    {/* =====================================================
    WHY US - FINAL PAGE MATCHING VERSION
===================================================== */}

<section className="prewedding-why3-section">

  <div className="prewedding-why3-heading-wrap">
    <h2
      className={`${amsterdam.className} prewedding-why3-heading`}
    >
      Why Us?
    </h2>
  </div>


  <div className="prewedding-why3-grid">

    {/* 01 */}
    <article className="prewedding-why3-card why3-card-1">

      <FaGem className="prewedding-why3-bg-icon" />

      <div className="prewedding-why3-number">
        01
      </div>

      <div className="prewedding-why3-content">

        <h3 className={amsterdam.className}>
          Premium Sets
        </h3>

        <p>
          Make your pre wedding film look elegant and grand
          with our premium and spacious sets.
        </p>

      </div>

    </article>


    {/* 02 */}
    <article className="prewedding-why3-card why3-card-2">

      <FaSnowflake className="prewedding-why3-bg-icon" />

      <div className="prewedding-why3-number">
        02
      </div>

      <div className="prewedding-why3-content">

        <h3 className={amsterdam.className}>
          Indoor AC Sets
        </h3>

        <p>
          Luxurious air conditioned indoor sets perfect
          for a comfortable shoot in every season.
        </p>

      </div>

    </article>


    {/* 03 */}
    <article className="prewedding-why3-card why3-card-3">

      <FaTshirt className="prewedding-why3-bg-icon" />

      <div className="prewedding-why3-number">
        03
      </div>

      <div className="prewedding-why3-content">

        <h3 className={amsterdam.className}>
          Costumes On Rent
        </h3>

        <p>
          Explore our beautiful costume collection
          with onsite alteration support.
        </p>

        <button
          type="button"
          className="prewedding-why3-action"
          onClick={() => setShowPopup(true)}
        >
          View Collection
        </button>

      </div>

    </article>


    {/* 04 */}
    <article className="prewedding-why3-card why3-card-4">

      <FaMagic className="prewedding-why3-bg-icon" />

      <div className="prewedding-why3-number">
        04
      </div>

      <div className="prewedding-why3-content">

        <h3 className={amsterdam.className}>
          Inhouse Makeup Artist
        </h3>

        <p>
          Personalized makeup and styling from our
          experienced in-house makeup experts.
        </p>

        <Link
          href="/add-on-services/makeup-artist"
          className="prewedding-why3-action"
        >
          Check Packages
        </Link>

      </div>

    </article>


    {/* 05 */}
    <article className="prewedding-why3-card why3-card-5">

      <FaPuzzlePiece className="prewedding-why3-bg-icon" />

      <div className="prewedding-why3-number">
        05
      </div>

      <div className="prewedding-why3-content">

        <h3 className={amsterdam.className}>
          Tons of Props
        </h3>

        <p>
          High quality props to add creativity,
          character and variety to every cinematic shot.
        </p>

      </div>

    </article>

  </div>


  {/* BOOK NOW */}

  <div className="prewedding-why3-book-wrap">

    <Link
      href="/pre-wedding-or-maternity"
      className={`prewedding-why3-book-btn ${cinzel.className}`}
    >
      BOOK NOW
    </Link>

  </div>

</section>

      {/* =====================================================
    PRE WEDDING PHOTOS
===================================================== */}

      {/* <section className="sectionpadding">
        <div className="text-center mb-10">
          <Link
            href="/pre-wedding-or-maternity/"
            className={`quote-btn text-white inline-flex items-center justify-center ${cinzel.className}`}
          >
            BOOK NOW
          </Link>
        </div>
      </section> */}

      {/* TESTIMONIALS */}
      <section className="py-20 testimonials">
        <h2 className={`why-title ${amsterdam.className}`}> Testimonials</h2>

        <TestimonialsSectionPage />
      </section>

     <StandOutSection
  amsterdamClass={amsterdam.className}
  cinzelClass={cinzel.className}
/>
      {/* FAQ */}
      <section className="hidden md:block bg-primary text-white py-20 faq">
        <h2 className="text-center text-3xl mb-10 faqheading">Questions</h2>

        <div className="max-w-6xl mx-auto space-y-3 px-6 text-faq">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border border-[#e5cfcf] rounded overflow-hidden"
            >
              {/* Question */}
              <div
                onClick={() => toggle(index)}
                className="flex justify-between items-center p-4 cursor-pointer bg-[#faebeb] hover:bg-[#faebeb] text-[#7a7a7a] fa-list"
              >
                <span>{item.q}</span>
                <span className="text-xl font-bold">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>

              {/* Answer */}
              {activeIndex === index && (
                <div className="p-4 bg-white text-gray-700 text-sm">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/pre-wedding-or-maternity"
            className={`quote-btn text-white inline-flex items-center justify-center ${cinzel.className}`}
          >
            BOOK NOW
          </Link>
        </div>
      </section>

      {/* Mobile FAQ */}
      <section className="block md:hidden bg-[#f3f0f2] py-10">
        <h2 className="text-center text-2xl font-semibold text-[#74405B] mb-6">
          Questions
        </h2>

        <div className="px-5">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-[#e5cfcf]">
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center py-5 text-left"
              >
                <span className="text-[#74405B] text-[15px] pr-4 font-bold">
                  {item.q}
                </span>

                <span className="text-[#74405B] text-xl shrink-0">▶</span>
              </button>

              {activeIndex === index && (
                <div className="pb-5 text-[#74405B] text-[15px] ">{item.a}</div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8 px-5">
          <Link
            href="/pre-wedding-or-maternity"
            className={`quote-btn text-white inline-flex items-center justify-center ${cinzel.className}`}
          >
            BOOK NOW
          </Link>
        </div>
      </section>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <div className="popup-buttons">
              <a href="/add-on-services/bride" className="popup-btn">
                Bride
              </a>
              <a href="/add-on-services/groom" className="popup-btn">
                Groom
              </a>
            </div>

            <button className="close-btn" onClick={() => setShowPopup(false)}>
              ✕
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

function Faq({ q, a }: { q: string; a: React.ReactNode }) {
  return (
    <details className="border border-white/40 p-4 rounded">
      <summary className="cursor-pointer font-semibold">{q}</summary>

      <div className="mt-3 text-sm text-gray-200 space-y-2">{a}</div>
    </details>
  );
}
