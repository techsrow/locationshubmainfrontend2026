"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

interface OfferModalProps {
  title: string;
  subtitle: string;
  offers: string[];
  autoOpen?: boolean;
}

export default function OfferModal({
  title,
  subtitle,
  offers,
  autoOpen = true,
}: OfferModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (autoOpen) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 500); // slight delay looks premium

      return () => clearTimeout(timer);
    }
  }, [autoOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[100] px-4">
      <div className="relative bg-[#6b1f3b] text-white rounded-xl shadow-2xl w-full max-w-md p-8 text-center animate-fadeIn">

        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 bg-white text-[#6b1f3b] rounded-full w-7 h-7 flex items-center justify-center"
        >
          <X size={16} />
        </button>

        {/* Title */}
        <h2 className="text-lg font-semibold underline mb-3">
          {title}
        </h2>

        {/* Subtitle */}
        <p className="text-lg font-medium mb-5 leading-relaxed">
          {subtitle}
        </p>

        {/* Divider */}
        <div className="border-t border-white/50 mb-5"></div>

        {/* Offers */}
        <div className="space-y-2 text-[16px] font-medium">
          {offers.map((offer, index) => (
            <p key={index}>{offer}</p>
          ))}
        </div>
      </div>
    </div>
  );
}