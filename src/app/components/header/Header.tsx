"use client";

import { useState } from "react";
import Image from "next/image";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { FaFacebookF, FaYoutube, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-primary text-white">

      {/* Top Bar */}
     <div className="hidden md:block border-b-2 border-white bg-[#3b1429]">
  <div className="max-w-[1300px] mx-auto px-6 lg:px-[50px] py-2 flex justify-between items-center">

    {/* Left Side - Contact */}
    <div className="flex items-center gap-6 topbar-text">

  <div className="flex items-center gap-2">
    <FaPhoneAlt className="topbar-contact-icon" />
    <span>+919920060062</span>
  </div>

  <div className="flex items-center gap-2">
    <HiOutlineMail className="topbar-contact-icon" />
    <span>hello@locationshub.in</span>
  </div>

</div>

    {/* Right Side - Social Icons */}
    <div className="flex items-center">

      <a
        href="https://www.facebook.com/locations.hub"
        target="_blank"
        rel="noopener noreferrer"
        className="topbar-social"
      >
        <FaFacebookF />
      </a>

      <a
        href="https://www.youtube.com/@locations_hub"
        target="_blank"
        rel="noopener noreferrer"
        className="topbar-social"
      >
        <FaYoutube />
      </a>

      <a
        href="https://www.instagram.com/locations.hub/"
        target="_blank"
        rel="noopener noreferrer"
        className="topbar-social"
      >
        <FaInstagram />
      </a>

      <a
        href="https://wa.me/919920060062"
        target="_blank"
        rel="noopener noreferrer"
        className="topbar-social"
      >
        <FaWhatsapp />
      </a>

    </div>

  </div>
</div>

      {/* Main Header */}
      <div className="max-w-[1300px] mx-auto px-6 lg:px-[50px] py-4 flex items-center justify-between">
       <Link href="/">
       <Image
          src="/images/loaction-hub-logo-final.svg"
          alt="Locations Hub"
          width={160}
          height={60}
          priority
          className="mobile-logo"
        />
       </Link>
        

        <DesktopMenu />

        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      <MobileMenu open={open} setOpen={setOpen} />
    </header>
  );
}
