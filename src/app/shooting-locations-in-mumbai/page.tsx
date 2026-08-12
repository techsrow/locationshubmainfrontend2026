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

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const amsterdam = localFont({
  src: "../../fonts/AmsterdamOneSlant-0WglP.ttf",
  display: "swap",
});

export default function HomePage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  };

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
            GET A QUOTE
          </button>
        </div>
      </section> */}

      <section className="relative h-[100vh] flex items-center justify-center text-center text-white">
        <Image
          src="/home-banner.jpg"
          alt="Hero"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 px-6 content-section">
          {/* Celebrate */}
          <p className={`${cinzel.className} text-celeb tracking-[4px]`}>
            Celebrate Your
          </p>

          {/* Love */}
          <h2
            className={`${amsterdam.className} love text-[80px] text-orange-400`}
          >
            Love
          </h2>

          {/* Heading */}
          <h1 className={`${cinzel.className} text-[50px] leading-tight`}>
            with our Award Winning <br />
            Pre Wedding Photographers
          </h1>

          {/* Sub text */}
          <p className={`${cinzel.className} text-[28px] mt-4 leading-tight`}>
            Best Pre Wedding Photographers in Mumbai
          </p>

         <div className="text-center mt-10">
<button className={`quote-btn ${cinzel.className}`}>
GET A QUOTE
</button>
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
      <AboutSection />
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
              />
            </div>

            <div className="why-text">
              <h3 className={amsterdam.className}>Premium Sets</h3>
              <p>
                Make your video look elegant and grand with our premium and
                spacious sets.
              </p>
            </div>
          </div>

          {/* 2 */}
          <div className="why-row reverse">
            <div className="why-img">
              <Image src="/indoor-ac.png" alt="" width={319} height={237} />
            </div>

            <div className="why-text">
              <h3 className={amsterdam.className}>Air Conditioned Sets</h3>
              <p>
                Be it summer or monsoon, you cannot always shoot outdoors. Our
                luxurious air conditioned indoor sets are always savior.
              </p>
            </div>
          </div>

          {/* 3 */}
          <div className="why-row">
            <div className="why-img">
              <Image src="/tons-of-props.jpg" alt="" width={319} height={237} />
            </div>

            <div className="why-text">
              <h3 className={amsterdam.className}>Tons of Props</h3>
              <p>
                Get top notch quality and high efficiency shoot with our many
                props options.
              </p>
            </div>
          </div>

          {/* 4 */}
          <div className="why-row reverse mt-5">
            <div className="why-img">
              <Image
                src="/inhouse-restaurant.jpg"
                alt=""
                width={319}
                height={237}
              />
            </div>

            <div className="why-text">
              <h3 className={amsterdam.className}>Inhouse Restaurant</h3>
              <p>
                Relax while you shoot. Dine at our inhouse restaurant and enjoy
                food as memorable as your shoot.
              </p>
            </div>
          </div>

          {/* 5 */}
          <div className="why-row">
            <div className="why-img">
              <Image
                src="/overnight-accommodation.jpg"
                alt=""
                width={319}
                height={237}
              />
            </div>

            <div className="why-text">
              <h3 className={amsterdam.className}>Overnight Accommodation</h3>
              <p>
                Experience a peaceful stay with our comfortable overnight
                accommodation rooms and wake up refreshed next day for your
                shoot.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR WORK */}
      <section className="py-20 work our-set">
        <h2 className={`why-title work-title ${amsterdam.className}`}>Our Work</h2>
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

         <div className="bg-primary text-white p-10 bgsec flex items-center">

  <div className="inner-wrapper">
    <h3 className="text-2xl mb-6 textstand">What Makes Us Stand Out</h3>

    <ul className="space-y-3 text-sm text-left">
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
    </ul>

   
  </div>

</div>
        </div>

        <div className="text-center mt-10">
<button className={`quote-btn ${cinzel.className}`}>
GET A QUOTE
</button>
</div>
      </section>

      {/* FAQ */}
      <section className="bg-primary text-white py-20 faq">

<h2 className="text-center text-3xl mb-10 faqheading">
Questions
</h2>

<div className="max-w-4xl mx-auto space-y-4 px-6 text-faq">

<Faq 
q="How does your Pre-Wedding process work ?"
a={
<>
<p>1. Consultation – We consult the couple to understand their vision, preferences and ideas. Based on this we advise them location, outfits, theme, props and other details.</p>

<p>2. Storyboarding – Once booking is done, we plan and conceptualize the shoot (storyboard). After that we fix a shoot date with the couple’s confirmation.</p>

<p>3. Shoot – On the shoot day we help you with poses, expressions and almost everything to make your love story unique and real.</p>

<p>4. Post Production and Delivery – We take around 4 weeks for post processing photos and videos. All high resolution photos and videos are shared via Dropbox.</p>
</>
}
/>

<Faq 
q="Why should we have a Pre-Wedding Photoshoot ?"
a="It’s a chance to celebrate your love story in a relaxed environment, capturing authentic emotions and chemistry that enhances your wedding memories."
/>

<Faq 
q="How long does a Pre-Wedding Photoshoot typically last ?"
a="The duration of a pre-wedding shoot varies based on the package you choose and the locations involved. On average it can last anywhere from 6 to 12 hours."
/>

<Faq 
q="How long does it take to receive the edited photos and videos ?"
a="Our editing process usually takes around 4 weeks depending on the complexity of the shoot and number of images. We ensure each photo receives detailed attention."
/>

<Faq 
q="Can we choose the song for our wedding film ?"
a="Absolutely! We encourage you to select a song that holds special meaning to you. If it does not match the film perfectly we may choose another song of the same genre from our library."
/>

<Faq 
q="What should we wear for the Pre-Wedding shoot?"
a="Your outfit plays a crucial role. We recommend wearing outfits that complement the theme and song. We will guide you in finalizing the outfits."
/>

<Faq 
q="What are your Pre-Wedding packages ?"
a="We have different packages. Please click the 'GET QUOTE' button below and we will send you packages and details via WhatsApp."
/>

</div>

<div className="text-center mt-10">
<button className={`quote-btn ${cinzel.className}`}>
GET A QUOTE
</button>
</div>

</section>
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