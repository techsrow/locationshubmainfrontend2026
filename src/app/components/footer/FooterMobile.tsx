"use client";

import { useState } from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

export default function FooterMobile() {
  const [open, setOpen] = useState(false);

  return (
    <footer className="md:hidden bg-primary text-white px-6 pt-10 pb-8">
      {/* ADDRESS */}
      <div>
        <h3 className="font-bold mb-3 text-lg">Address</h3>

        <p className="text-sm leading-6">
          Plot No 648, Nadsur Village,
          <br />
          Khopoli Pali Road, Raigad, Sudhagad,
          <br />
          Maharashtra 410205
        </p>

        <p className="mt-4 text-sm">
          Contact - 9920060062
          <br />
          Mail - hello@locationshub.in
        </p>

        {/* Social Icons */}
        <div className="flex gap-3 mt-5">
          {[FaFacebookF, FaYoutube, FaInstagram, FaWhatsapp].map(
            (Icon, i) => (
              <div
                key={i}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/15"
              >
                <Icon size={14} />
              </div>
            )
          )}
        </div>
      </div>

      {/* USEFUL LINKS */}
      <div className="mt-10">
        <h3 className="font-bold mb-3 text-lg">Useful Links</h3>
        <ul className="space-y-2 text-sm">
          <li><a href="/blog">BLOGS</a></li>
          <li><a href="/about-locations-hub-shoot-locations-par-excellence">ABOUT US</a></li>
          <li><a href="/cancellation-policy">CANCELLATION POLICY</a></li>
          <li><a href="/terms-and-conditions">TERMS AND CONDITION</a></li>
          <li><a href="/privacy-policy">PRIVACY POLICY</a></li>
        </ul>
      </div>

      {/* FOOTER MENU */}
      <div className="mt-10 border-t border-white/20 pt-5">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center justify-center gap-2 w-full font-semibold"
        >
          <span className="text-xl">≡</span>
          Footer Menu
        </button>

        {open && (
          <ul className="mt-4 space-y-3 text-sm text-center">
            <li><a href="/sets">Sets</a></li>
            <li><a href="/setups">Setups</a></li>
            <li><a href="/add-on-services">Add On Services</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
          </ul>
        )}
      </div>

      {/* COPYRIGHT */}
      <p className="mt-8 text-xs text-center leading-5">
        Locations Hub © 2024. All Rights Reserved.
        <br />
        Powered By Kleverk Design Pvt Ltd
      </p>
    </footer>
  );
}
