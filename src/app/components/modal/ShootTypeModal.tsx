"use client";

import { useModal } from "@/app/components/modal/ModalProvider";
import Link from "next/link";

export default function ShootTypeModal() {
  const { closeModal } = useModal();

  const options = [
    {
      title: "Pre Wedding | Maternity",
      url: "https://booking.locationshub.in/pre-wedding-or-maternity/",
    },
    {
      title: "Products | Garments | Fashion",
      url: "https://booking.locationshub.in/product-or-garment-or-fashion/",
    },
    {
      title: "Music Video | Ad Shoot",
      url: "https://booking.locationshub.in/music-video-or-ad-shoot/",
    },
    {
      title: "Web series | TV Serial",
      url: "https://booking.locationshub.in/web-series-or-tv-serials/",
    },
  ];

  return (
    <div className="text-center space-y-6">
      {options.map((option, index) => (
        <Link
          key={index}
          href={option.url}
          onClick={closeModal}
          className="block bg-[#4B1D33] text-white py-3 rounded-xl font-semibold hover:bg-[#6b294b] transition"
        >
          {option.title}
        </Link>
      ))}

      <button
        onClick={closeModal}
        className="mt-6 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
      >
        Close
      </button>
    </div>
  );
}