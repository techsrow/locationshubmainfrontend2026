"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";
import { BrideImage } from "@/types/bride";
import { getBrideImageUrl } from "@/lib/getBrideImageUrl";
import OfferModal from "@/app/components/OfferModal";

export default function BrideAddOnPage() {
  const [images, setImages] = useState<BrideImage[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBrideImages = async () => {
      try {
        const res = await api.get<BrideImage[]>("/bride");

        const sorted = [...res.data].sort(
          (a, b) => a.displayorder - b.displayorder
        );

        setImages(sorted);
      } catch (error) {
        console.error("Error fetching bride images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBrideImages();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20 text-lg font-semibold">
        Loading Bride Add-On Services...
      </div>
    );
  }

  return (
    <div className="px-2 md:px-6 py-2">
     

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {images.map((item) => (
          <div key={item.id} className="w-full">
            <img
              src={getBrideImageUrl(item.imageUrl)}
              alt="Bride Service"
              className="w-full h-auto  shadow-md object-cover"
            />
          </div>
        ))}
      </div>

      <OfferModal
  title="Offer"
  subtitle="Unlimited Pre Wedding Costumes On Rent for Couple"
  offers={[
    "Rs 8,000 for 5 Hrs (Silver)",
    "Rs 10,000 for 8 Hrs (Gold)",
    "Rs 10,000 for 12 Hrs (Platinum)",
  ]}
/>
    </div>
  );
}

