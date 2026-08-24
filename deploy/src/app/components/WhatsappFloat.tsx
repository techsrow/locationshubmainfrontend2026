"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappFloat() {
  const phoneNumber = "919920060062";
  const message = "Hello, I would like to book a shoot at Locations Hub.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  const [visible, setVisible] = useState(false);
  const [showOnScroll, setShowOnScroll] = useState(true);

  // ⏳ Auto appear after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // 📜 Hide on scroll down, show on scroll up
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowOnScroll(false);
      } else {
        setShowOnScroll(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-6 right-6 md:bottom-5 md:right-5 z-50 transition-all duration-500 ${
        showOnScroll ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      {/* Tooltip */}
      <div className="relative group">
        <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-black text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
          Chat with us
        </span>

        {/* Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-pulse bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl flex items-center justify-center transition-all duration-300"
        >
          <FaWhatsapp size={28} />
        </a>
      </div>
    </div>
  );
}