// app/components/PreWeddingGallery.tsx

"use client";

import { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import api from "@/lib/api";
import { GalleryImage } from "@/types/gallery";
import { getGalleryImageUrl } from "@/lib/getGalleryImageUrl";

const breakpointColumnsObj = {
  default: 2,
  768: 2,
  480: 1,
};

export default function PreWeddingGallery() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [visibleCount, setVisibleCount] = useState(15);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      const res = await api.get("/gallery");

      const sorted = [...res.data].sort(
        (a: GalleryImage, b: GalleryImage) =>
          a.displayOrder - b.displayOrder
      );

      setImages(sorted);
    } catch (error) {
      console.error("Gallery Error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return null;

  return (
    <section className="py-20">
      <div className="max-w-[1120px] mx-auto px-4">

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex gap-4"
          columnClassName="space-y-4"
        >
          {images
            .slice(0, visibleCount)
            .map((item) => (
              <div
                key={item.id}
                className="overflow-hidden"
              >
                <img
                  src={getGalleryImageUrl(item.imageUrl)}
                  alt=""
                  loading="lazy"
                  className="w-full block transition duration-300 hover:scale-105"
                />
              </div>
            ))}
        </Masonry>

        {visibleCount < images.length && (
          <div className="text-center mt-10">
            <button
              onClick={() =>
                setVisibleCount((prev) => prev + 15)
              }
              className="px-8 py-3 rounded-full text-white font-medium bg-gradient-to-r from-pink-500 to-orange-400 hover:opacity-90 transition"
            >
              Load More Photos
            </button>
          </div>
        )}

      </div>
    </section>
  );
}