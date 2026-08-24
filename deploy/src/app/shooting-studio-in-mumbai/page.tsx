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
        <div className="image-wrapper mt-15">
          <YouTubeAutoPlay videoId="Kautj5HqYro" />
        </div>

        <div className="center mb-10">
          <a
            href="https://www.locationshub.in/sets-1/"
            target="_blank"
            className="main-btn"
          >
            Find Perfect Sets for your Shoot
          </a>
        </div>

        <h4 className="sub-heading mt-50 ">
          Premium <u>Shooting Studio in Mumbai</u>: Where Creativity Meets
          Excellence
        </h4>

        <div className="content">
          <p>
            Discover the unparalleled experience of shooting at a premier
            photo-shoot studio in Mumbai like Locations Hub. With
            state-of-the-art equipment, meticulously designed sets, and a highly
            skilled team, every photo shoot turns into a masterpiece. From
            glamorous portraits to bold artistic projects, this photoshoot
            studio in Mumbai offers the perfect backdrop for your creative
            vision. Whether you’re planning a commercial shoot or a personal
            session, the ideal setting awaits at{" "}
          </p>

          <p>
            The expansive spaces and high-quality facilities cater to both film
            and photography projects, ensuring a professional and inspiring
            environment. Whether you’re filming or shooting stills, shoot
            locations in Mumbai like those at Locations Hub are designed to meet
            every need. For an unparalleled shooting experience, Locations Hub
            is the ideal choice, combining comprehensive offerings with a prime
            location. Explore the variety of shoot locations in Mumbai to
            elevate your creative projects to the next level.
          </p>
        </div>

        {/* ================= 1 ================= */}
        <h3 className="b-h3">
          A Cinematic Love Story: Where Film & Photography Meet
        </h3>

        <div className="content">
          <p>
            Discover why the shooting studio in Mumbai is your go-to destination
            for creative magic. With cutting-edge equipment and versatile sets,
            this studio is perfect for any project, whether it’s a cinematic
            film or a dreamy pre wedding shoot. Every corner is designed to make
            your vision a reality
          </p>
        </div>

        <Image
          src="/images/blog/09/Shooting-studio-in-Mumbai-1-1.jpg"
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
        <h3 className="b-h3">
          Grand Spaces, Stunning Moments: Capture Your Dreams
        </h3>

        <div className="content mt-4">
          {/* 👉 Paste FULL Ajinkya paragraph here */}

          <p>
            This studio in Mumbai, you’ll experience vast open spaces and
            meticulously crafted sets that cater to your creative style. Whether
            it’s an elaborate setup or a sleek commercial project, the studio
            offers endless possibilities for your vision to come to life.
          </p>
        </div>

        {/* ================= 3 ================= */}
        <h3 className="b-h3">
          Natural Light, Perfect Shots: Unleash Your Creativity
        </h3>

        <div className="content mt-4">
          {/* 👉 Paste FULL Ajinkya paragraph here */}

          <p>
            Elevate your visuals with the perfect lighting at the shooting
            studio in Mumbai. With naturally lit spaces that enhance every shot,
            this studio provides an unbeatable ambiance for both film projects
            and pre wedding shoots. The beauty of natural light will bring your
            photos to life.
          </p>
        </div>

        <h3 className="b-h3">
          Craft Your Dream Scene: Bespoke Studio Settings
        </h3>

        <div className="content mt-4">
          {/* 👉 Paste FULL Ajinkya paragraph here */}

          <p>
            Personalize your shoot in Mumbai with fully customizable set designs
            and backdrops at Locations Hub. Whether you’re crafting a romantic
            wedding album or directing a film, the versatile setups ensure your
            creative vision comes to life exactly as you envision.
          </p>
        </div>

        <h3 className="b-h3">
          Mumbai’s Hidden Gem: The Ultimate Shooting Studio
        </h3>

        <div className="content mt-4">
          {/* 👉 Paste FULL Ajinkya paragraph here */}

          <p>
            Step into the finest studio in Mumbai, where cinematic projects and
            photography sessions are elevated to new heights. From lighting to
            set design, the studio offers everything you need for a seamless
            shoot and storyboard. Create magic in this top-tier studio setting.
          </p>
        </div>

        <Image
          src="/images/blog/09/Shooting-studio-in-Mumbai-2-1.jpg"
          alt="Frozen Flash Photography"
          width={1200}
          height={600}
          className="main-image"
        />

        <div className="center mb-2 mt-10">
          <a
            href="https://www.locationshub.in/sets-1/"
            target="_blank"
            className="main-btn"
          >
            Find Perfect Sets for your Shoot
          </a>
        </div>

        <h3 className="b-h3">
          Romance Redefined: Picture-Perfect Pre Wedding Shoots
        </h3>

        <div className="content mt-4">
          {/* FULL paragraph */}
          <p>
            Bring your love story to life at the Pre wedding studio in Mumbai,
            where breathtaking settings meet state-of-the-art facilities.
            Whether it’s an intimate shoot or a grand pre wedding spectacle,
            every detail is designed to capture the essence of your love story.
          </p>
        </div>

        <h3 className="b-h3">
          Hollywood Dreams: Shoot Your Love Story in Style
        </h3>

        <div className="content mt-4">
          {/* FULL paragraph */}
          <p>
            Searching for that movie-quality look for shoot? The shooting studio
            in Mumbai offers cinematic sets, lighting, and all the equipment you
            need to turn your love story into a blockbuster. Your vision is just
            a lens away from becoming reality
          </p>
        </div>
        <h3 className="b-h3">
          Boundless Creativity: Studio Spaces That Inspire
        </h3>

        <div className="content mt-4">
          {/* FULL paragraph */}
          <p>
            Whether you’re shooting a film or capturing the magic of a shooting
            studio in Mumbai, this studio’s versatile spaces are crafted to
            inspire. From indoor sets to outdoor backdrops, the endless
            possibilities make it the perfect creative playground for any
            project
          </p>
        </div>

        <h3 className="b-h3">Love Meets Luxury: Shooting studio in Mumbai</h3>

        <div className="content mt-4">
          {/* FULL paragraph */}
          <p>
            Step into luxury at the luxury studio in Mumbai, where innovation
            and elegance merge. From high-end settings to personalized
            backdrops, this studio ensures your shoot is as stunning and unique
            as your love story
          </p>
        </div>

         <h3 className="b-h3">Your Creative Wonderland: A Studio for Every Vision</h3>

        <div className="content mt-4">
          {/* FULL paragraph */}
          <p>
            The shooting studio in Mumbai offers endless possibilities for creativity, whether you’re working on a film or a romantic pre wedding shoot. From minimalist sets to elaborate designs, this studio is your blank canvas for crafting unforgettable moments

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
