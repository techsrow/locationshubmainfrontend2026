"use client";

import Image from "next/image";
import { Cinzel } from "next/font/google";
import localFont from "next/font/local";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "./page.css";
import VideoSection from "./VideoSection";
import AboutSection from "./AboutSection";

import "swiper/css";
import "swiper/css/free-mode";
import OurSetsSection from "../components/sections/OurSetsSection";
import OurSetsSectionPage from "../components/sections/OurSetsSectionpage";
import TestimonialsSectionPage from "../components/sections/TestimonialsSectionpage";
import AboutSectionMobile from "./AboutSectionMobile";
import PhotoGallery from "../components/PhotoGallery";

import { FaCheck } from "react-icons/fa";
import Link from "next/link";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const amsterdam = localFont({
  src: "../../fonts/AmsterdamOneSlant-0WglP.ttf",
  display: "swap",
});

export default function PreWeddingShootLocations() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
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


  const toggleMute = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
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

      <section className="relative h-[100vh] flex items-center justify-center text-center text-white">
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

      <VideoSection />
     

      {/* ABOUT */}
      {/* <AboutSection /> */}
      <AboutSectionMobile />

      <section className="featured-heading">
        <h2 className={cinzel.className}>Featured In</h2>
      </section>

      {/* FEATURED IN */}
      <section className="featured-logos">
        <Swiper
          modules={[Autoplay, FreeMode]}
          slidesPerView={5}
          spaceBetween={5}
          loop={true}
          freeMode={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          breakpoints={{
            320: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
         <SwiperSlide>
  <div className="image-wrapper">
    <Image
      src="/1times-of-india.png"
      alt="Times of India"
      fill
      className="img-full"
    />
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="image-wrapper">
    <Image
      src="/2weddingsutra-1.png"
      alt="Wedding Sutra"
      fill
      className="img-full"
    />
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="image-wrapper">
    <Image
      src="/4wedmegood-1.png"
      alt="WedMeGood"
      fill
      className="img-full"
    />
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="image-wrapper">
    <Image
      src="/5thhindustantimes-1.png"
      alt="Hindustan Times"
      fill
      className="img-full"
    />
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="image-wrapper">
    <Image
      src="/3shaadisaga-1.png"
      alt="Shaadi Saga"
      fill
      className="img-full"
    />
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="image-wrapper">
    <Image
      src="/6bigfatindianwedding.png"
      alt="Big Fat Indian Wedding"
      fill
      className="img-full"
    />
  </div>
</SwiperSlide>
        </Swiper>
      </section>

      {/* WHY US */}
      {/* WHY US SECTION */}

      {/* WHY US */}

      <section className="why-section">
        <h2 className={`why-title ${amsterdam.className}`}>Why Us?</h2>

        <div className="why-wrapper">
          {/* 1 */}
          <div className="why-row">
            <div className="why-img">
              <Image
                src="/premium-sets-1.jpg"
                alt=""
                width={319}
                height={237}
                className="cstonrent"
              />
            </div>

            <div className="why-text">
              <h3 className={amsterdam.className}>Premium Sets</h3>
              <p>
                Make your pre wedding film look elegant and grand with our premium and spacious sets


              </p>
            </div>
          </div>

          {/* 2 */}
          <div className="why-row reverse">
            <div className="why-img">
              <Image src="/indoor-ac.png" alt="" width={319} height={237} className="cstonrent" />
            </div>

            <div className="why-text">
              <h3 className={amsterdam.className}>Indoor AC Sets</h3>
              <p>
                Be it summer or monsoon, you cannot always shoot outdoors. Our
                luxurious air conditioned indoor sets are always savior.
              </p>
            </div>
          </div>

          {/* 3 */}
          <div className="why-row">
            <div className="why-img">
              <Image src="/costumes-on-rent.jpg" className="cstonrent" alt="" width={319} height={237} />
            </div>

            <div className="why-text">
              <h3 className={amsterdam.className}>Costumes on rent</h3>
              <p className="costume-text margintop">
              Why buy when you can rent? Stand out your pre wedding with our amazing costumes on rent collection with our onsite alteration team.


              </p>
              <button
  className="btn-costume"
  onClick={() => setShowPopup(true)}
>
  Check Our Costume Collection
</button>
            
            </div>
          </div>

          {/* 4 */}
          <div className="why-row reverse mt-5">
            <div className="why-img">
              <Image
                src="/inhouse-makeup-artist.jpg"
                alt=""
                width={319}
                height={237}
              />
            </div>

            <div className="why-text">
              <h3 className={amsterdam.className}>Inhouse makeup artist
</h3>
              <p className="margintop">
               Experience the magic of personalized makeup and looks, with our in-house makeup expert.

              </p>
               <a className="btn-pack mt-4" href="/add-on-services/makeup-artist">Check Packages</a>
            </div>
          </div>

          {/* 5 */}
          <div className="why-row">
            <div className="why-img">
              <Image
                src="/tons-of-props.jpg"
                alt=""
                width={319}
                height={237}
                className="cstonrent"
              />
            </div>

            <div className="why-text">
              <h3 className={amsterdam.className}>Tons of Props</h3>
              <p>
               Get top notch quality and high efficiency shoot with our toons of prop options.

              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sectionpadding">
         <div className="text-center mt-10">
<Link
    href="/pre-wedding-or-maternity"
    className={`quote-btn text-white inline-flex items-center justify-center ${cinzel.className}`}
  >
    BOOK NOW
  </Link>
</div>
        </section> 
  

       <section className="py-20 work our-set">
        <h2 className={`why-title work-title ${amsterdam.className}`}>Photos
</h2>
        <PhotoGallery />
      </section>

       <section className="sectionpadding">
         <div className="text-center mb-10">
<Link
    href="/pre-wedding-or-maternity/"
    className={`quote-btn text-white inline-flex items-center justify-center ${cinzel.className}`}
  >
    BOOK NOW
  </Link>
</div>
        </section> 

      {/* OUR WORK */}
      <section className="py-20 work our-set workbg">
        <h2 className={`why-title work-title ${amsterdam.className}`}>Our Sets
</h2>
        <OurSetsSectionPage />
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 testimonials">
        <h2 className={`why-title ${amsterdam.className}`}> Testimonials</h2>

        <TestimonialsSectionPage />
      </section>

      {/* FEATURE SECTION */}
      <section className="py-20 feature-sec">
        <div className="max-w-8xl mx-auto grid md:grid-cols-2  px-6 items-center">
          <Image
            src="/what-makes-us-stand-out-commercial.jpg"
            alt=""
            width={716}
            height={1024}
            style={{ width: "100%", height: "auto" }}
          />

         <div className="bg-[#74405B] text-white p-10 bgsec flex items-center">

  <div className="inner-wrapper">
    <h3 className="text-2xl mb-6 textstand standout">What Makes Us Stand Out</h3>

    {/* <ul className="space-y-3 text-sm text-left">
      <li>Plenty of Sets at the Price of One</li>
      <hr></hr>
      <li>Air Conditioned Sets</li>
       <hr></hr>
      <li>Inhouse Veg Restaurant</li>
       <hr></hr>
      <li>Overnight Accommodation</li>
       <hr></hr>
      <li>Tons of Props</li>
       <hr></hr>
      <li>Premium Sets</li>
    </ul> */}

   <ul className="bg-[#74405B] text-white">
  <li className="flex items-center gap-3 text-[14px] border-b border-white/70">
    <span className="font-bold text-[15px]">✓</span>
    Premium Sets
  </li>

  <li className="flex items-center gap-3 text-[14px]  border-b border-white/70">
    <span className="font-bold text-lg text-[14px]">✓</span>
    AC Indoor Sets
  </li>

  <li className="flex items-center gap-3 text-[14px]  border-b border-white/70">
    <span className="font-bold  text-[14px]">✓</span>
    Inhouse Makeup Artist
  </li>

  <li className="flex items-center gap-3  text-[14px] border-b border-white/70">
    <span className="font-bold text-lg text-[14px]" >✓</span>
    Inhouse Costumes on Rent
  </li>

  <li className="flex items-center gap-3 text-[14px] border-b border-white/70">
    <span className="font-bold text-lg text-[14px]">✓</span>
    Inhouse Veg Restaurant
  </li>

  <li className="flex items-center text-[14px] gap-3 ">
    <span className="font-bold text-lg text-[14px]">✓</span>
    Tons of Props
  </li>
</ul>

   
  </div>

</div>
        </div>

        <div className="text-center mt-10">
<button className={`quote-btn ${cinzel.className}`}>
BOOK NOW
</button>
</div>
      </section>

      {/* FAQ */}
      <section className="bg-primary text-white py-20 faq">

      <h2 className="text-center text-3xl mb-10 faqheading">
        Questions
      </h2>

      <div className="max-w-6xl mx-auto space-y-3 px-6 text-faq">

        {faqData.map((item, index) => (
          <div key={index} className="border border-[#e5cfcf] rounded overflow-hidden">

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

{showPopup && (
  <div className="popup-overlay">
    <div className="popup-box">
     
      <div className="popup-buttons">
        <a href="/add-on-services/bride" className="popup-btn">Bride</a>
        <a href="/add-on-services/groom" className="popup-btn">Groom</a>
      </div>

      <button
        className="close-btn"
        onClick={() => setShowPopup(false)}
      >
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
      <summary className="cursor-pointer font-semibold">
        {q}
      </summary>

      <div className="mt-3 text-sm text-gray-200 space-y-2">
        {a}
      </div>
    </details>
  );
}