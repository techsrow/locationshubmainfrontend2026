"use client";

import { useEffect, useState } from "react";

interface OfferPopupProps {
  title: string;
  subtitle?: string;
}

export default function OfferPopup({
  title,
  subtitle,
}: OfferPopupProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-[9998]"
        onClick={() => setOpen(false)}
      />

      <div className="fixed inset-0 flex items-center justify-center z-[9999] px-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full p-8 relative">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-5 text-2xl text-gray-500 hover:text-black"
          >
            ×
          </button>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#3B1429] mb-3">
              {title}
            </h2>

            {subtitle && (
              <p className="text-xl font-semibold text-[#3B1429]">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}