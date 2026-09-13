"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";
import { BrideImage } from "@/types/bride";
import { getBrideImageUrl } from "@/lib/getBrideImageUrl";
import OfferModal from "@/app/components/OfferModal";

export default function BrideAddOnPage() {
  const [images, setImages] = useState<BrideImage[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const filteredImages =
  selectedCategory === "all"
    ? images
    : images.filter(
        (item) =>
          item.category?.toLowerCase() ===
          selectedCategory.toLowerCase()
      );

  useEffect(() => {
    const fetchBrideImages = async () => {
      try {
        const res = await api.get<BrideImage[]>("/groom");

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
     

<div className="flex justify-center gap-3 mb-6 flex-wrap mt-5">
  <button
    onClick={() => setSelectedCategory("all")}
    className={`px-5 py-2 rounded-full border font-medium transition-all duration-300 ${
      selectedCategory === "all"
        ? "text-white shadow-md"
        : "bg-white text-[#3B1429] hover:bg-[#3B1429]/5"
    }`}
    style={{
      backgroundColor:
        selectedCategory === "all" ? "#3B1429" : "white",
      borderColor: "#3B1429",
    }}
  >
    All
  </button>

  <button
    onClick={() => setSelectedCategory("Indian")}
    className={`px-5 py-2 rounded-full border font-medium transition-all duration-300 ${
      selectedCategory === "Indian"
        ? "text-white shadow-md"
        : "bg-white text-[#3B1429] hover:bg-[#3B1429]/5"
    }`}
    style={{
      backgroundColor:
        selectedCategory === "Indian" ? "#3B1429" : "white",
      borderColor: "#3B1429",
    }}
  >
    Indian
  </button>

  <button
    onClick={() => setSelectedCategory("Western")}
    className={`px-5 py-2 rounded-full border font-medium transition-all duration-300 ${
      selectedCategory === "Western"
        ? "text-white shadow-md"
        : "bg-white text-[#3B1429] hover:bg-[#3B1429]/5"
    }`}
    style={{
      backgroundColor:
        selectedCategory === "Western" ? "#3B1429" : "white",
      borderColor: "#3B1429",
    }}
  >
    Western
  </button>
</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {filteredImages.map((item) => (
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
