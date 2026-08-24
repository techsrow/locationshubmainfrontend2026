"use client";
import Image from "next/image";
import "./pune.css";
import Link from "next/link";

import GetQuoteButton from "@/app/components/quote/GetQuoteButton";
import YouTubeEmbed from "@/app/components/YouTubeEmbed";
import YouTubeAutoPlay from "@/app/components/YouTubeAutoPlay";
import { useModal } from "@/app/components/modal/ModalProvider";
import ShootTypeModal from "@/app/components/modal/ShootTypeModal";

export default function PunePhotographers() {

  const { openModal } = useModal();
  return (
    <div className="page-wrapper">
      <div className="container">
        {/* ================= Banner ================= */}
        <div className="image-wrapper">
          <YouTubeAutoPlay videoId="Kautj5HqYro" />
        </div>

        <div className="center mb-2">
          <a
            href="https://www.locationshub.in/sets-1/"
            target="_blank"
            className="main-btn"
          >
            Find Perfect Sets for your Shoot
          </a>
        </div>

        <h4 className="sub-heading ">
          Capture Your Story : Photoshoot studio in Mumbai
        </h4>
        <h4 className="b-h3">
          Mumbai’s Top Studio: Where Your PhotoShoot Dreams Come to Life!
        </h4>

        <div className="content">
          Discover the unparalleled experience of shooting at a premier
          photo-shoot studio in Mumbai like Locations Hub. With state-of-the-art
          equipment, meticulously designed sets, and a highly skilled team,
          every photo shoot turns into a masterpiece. From glamorous portraits
          to bold artistic projects, this photoshoot studio in Mumbai offers the
          perfect backdrop for your creative vision. Whether you’re planning a
          commercial shoot or a personal session, the ideal setting awaits at{" "}
          <span className="highlight">
            <b>Locations Hub</b>
          </span>
        </div>

        {/* ================= 1 ================= */}
        <h3 className="b-h3">
          Captivating Sets and Versatile Spaces for Every Vision!
        </h3>

        <div className="content">
          <p>
            Locations Hub reveals the Top Photoshoot locations in Mumbai.
            Whether it’s dramatic backgrounds or lush props you seek, they blend
            great sets with vast open spaces, offering the perfect balance for
            your creative vision. Let their sets bring your ideas to life with
            stunning backgrounds that are perfect for any occasion.
          </p>
        </div>

        <Image
          src="/images/blog/09/Photoshoot-studio-in-mumbai-1.jpg"
          alt="Ajinkya Jadhav Photography"
          width={1200}
          height={600}
          className="main-image"
        />

        <div className="center mb-2">
          <a
            href="https://www.locationshub.in/sets-1/"
            target="_blank"
            className="main-btn"
          >
            Find Perfect Sets for your Shoot
          </a>
        </div>

        {/* ================= 3 ================= */}
        <h3 className="b-h3">Mumbai a magical place for your photoshoot</h3>

        <div className="content mt-4">
          {/* 👉 Paste FULL Ajinkya paragraph here */}

          <p>
            Mumbai, where dreams come alive, is perfect for capturing
            unforgettable moments. A photoshoot studio in Mumbai like Mehboob
            Studio offers creative themes and stunning backdrops that reflect
            the city’s vibrant spirit. Whether for glamorous edgy fashion
            shoots, Mumbai’s expert photographers turn every moment into a
            masterpiece
          </p>
          <p>
            With a blend of tradition and contemporary flair, a photoshoot
            studio in Mumbai like Reliance Studios ensures your memories are
            preserved with top-notch quality and imaginative style. From vast
            open spaces to intricate set designs, these studios offer
            unparalleled versatility, catering to diverse photography styles.
            Plus, the professional team at works closely with clients to bring
            their vision to life, guaranteeing stunning results for every
            occasion.
          </p>
        </div>

        {/* ================= 3 ================= */}
        <h3 className="b-h3">
          Capture the Glow: Embrace Natural Light for Stunning Photos
        </h3>

        <div className="content mt-4">
          {/* 👉 Paste FULL Ajinkya paragraph here */}

          <p>
            Elevate your photography with natural lighting at Locations Hub, the
            ultimate photoshoot studio in Mumbai. Featuring large windows and
            thoughtfully designed spaces, this studio ensures that every photo
            is bathed in soft, flattering natural light. Whether you’re shooting
            portraits or product photography, you’ll capture the essence of your
            subject in the most radiant way possible, bringing every detail to
            life.
          </p>
        </div>

        <h3 className="b-h3">
          A Pet-Friendly Studio for Picture-Perfect Moments with Your Furry
          Friends
        </h3>

        <div className="content mt-4">
          {/* 👉 Paste FULL Ajinkya paragraph here */}

          <p>
            Locations Hub, a{" "}
            <span className="highlight">
              <b>top-tier photoshoot studio in Mumbai</b>
            </span>
            , is fully pet-friendly, because we know that pets are part of the
            family. Whether you’re looking to capture candid moments with your
            pet or want to feature them in your next project, our comfortable
            and welcoming environment allows both you and your furry companions
            to feel right at home
          </p>
        </div>

         <h3 className="b-h3">
         Custom Studio Settings to Elevate Your Creativity

        </h3>

        <div className="content mt-4">
          {/* 👉 Paste FULL Ajinkya paragraph here */}

          <p>
           Bring your vision to life with Locations Hub, a leading photoshoot studio in Mumbai that offers fully customizable studio settings. From a variety of backdrop options to bespoke set designs, they align everything with your creative goals. Whether it’s a themed shoot, a brand campaign, or a personal portrait session, you can tailor every detail to match your project’s aesthetic and mood.


          </p>
        </div>

        <Image
          src="/images/blog/09/Photoshoot-studio-in-mumbai-2-1.jpg"
          alt="Frozen Flash Photography"
          width={1200}
          height={600}
          className="main-image"
        />


        <div className="center mb-2">
          <a
            href="https://www.locationshub.in/sets-1/"
            target="_blank"
            className="main-btn"
          >
            Find Perfect Sets for your Shoot
          </a>
        </div>

        <h3 className="b-h3">Explore the Best Film and PhotoShoot Studio in Mumbai
</h3>

        <div className="content mt-4">
          {/* FULL paragraph */}
          <p>
            Dive into the dynamic world of film and photography at Locations Hub, a highly sought-after photoshoot studio in Mumbai. Equipped with modern technology, an expert crew, and a versatile range of spaces, this studio is perfect for everything from cinematic film shoots to professional photography sessions. Experience Mumbai’s creative pulse in this premier studio environment.

          </p>
        </div>

         <h3 className="b-h3">Unleash Your Creativity: The Best Studio in Mumbai for Stunning Shots

</h3>

        <div className="content mt-4">
          {/* FULL paragraph */}
          <p>
           Take your photo-shoot to new heights at Locations Hub, the best photoshoot studio in Mumbai for photographers and artists alike. Offering endless customizations, cutting-edge equipment, and inspiring environments, the studio provides everything you need to unleash your creativity and produce standout results. Whatever your concept, this space can make it happen



          </p>
        </div>
        <h3 className="b-h3">Iconic Backdrops, Limitless Creativity: The Hub of Visual Storytelling


</h3>

        <div className="content mt-4">
          {/* FULL paragraph */}
          <p>
          Locations Hub, an iconic photoshoot studio in Mumbai, combines meticulously curated backdrops with cutting-edge technology to provide the ultimate space for visual storytelling. From fashion editorials to lifestyle shoots, every frame captured here speaks volumes. Step into a world of unlimited possibilities where your vision meets flawless execution





          </p>
        </div>

        {/* <div className="center">
          <a
            href="https://api.whatsapp.com/send?phone=919920144211&text=I%20am%20interested%20in%20getting%20Pre%20Wedding%20Packages.%20Please%20share%20all%20details."
            target="_blank"
            className="main-btn"
          >
            Get Pre Wedding Packages
          </a>
        </div>
        <GetQuoteButton className="get-quote-btn text-center" /> */}

        <div className="center">
          <button onClick={() => openModal(<ShootTypeModal />)} className="bg-[#ff8c1a] text-white px-10 py-3 font-[600] hover:bg-[#e57c14] transition">
                    Book Now
                  </button>
        </div>
      </div>
    </div>
  );
}
