"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUp } from "lucide-react";
import api from "@/lib/api";
import { getMakeupArtistImageUrl } from "@/lib/getMakeupArtistImageUrl";

interface MakeupArtistType {
  id: string;
  image: string;
  displayOrder: number;
}

export default function MakeupArtistPage() {
  const [images, setImages] = useState<MakeupArtistType[]>([]);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchImages = async () => {
  //     try {
  //       const res = await api.get<MakeupArtistType[]>("/makeup-artist");

  //       const sorted = res.data.sort(
  //         (a, b) => a.displayOrder - b.displayOrder
  //       );

  //       setImages(sorted);
  //     } catch (error) {
  //       console.error("Failed to load makeup artist images", error);
  //     }
  //   };

  //   fetchImages();
  // }, []);
  useEffect(() => {
  const fetchImages = async () => {
    try {
      const res = await api.get<MakeupArtistType[]>("/makeup-artist");

      const sorted = [...res.data].sort(
        (a, b) =>
          Number(a.displayOrder ?? 0) -
          Number(b.displayOrder ?? 0)
      );

      setImages(sorted);
    } catch (error) {
      console.error("Failed to load makeup artist images", error);
    }
  };

  fetchImages();
}, []);

  return (
    <div className="bg-[#f3f0f2] min-h-screen relative">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* LEFT CONTENT */}
          <div className="lg:sticky lg:top-28 self-start">
            <h1 className="font-['Quicksand'] text-[22px] font-bold text-[#74405B] mb-6">
              Makeup Artist
            </h1>

            

            <div className="font-['Quicksand'] text-[15px] leading-[30px] text-[#74405B] font-medium space-y-6">
              <p>
               We have professional makeup artists on board for you. 


              </p>
              <p>
                Experience – 12 Years
              </p>
              <p>
                Charges for Makeup & Hair – Pre Wedding Silver Package Rs 7,500. Pre Wedding Gold and Platinum Package Rs 10,000
              </p>

              <p>
                Please confirm their availability with us before booking.


              </p>
             
            </div>
          </div>

          {/* RIGHT GALLERY */}
          <div className="space-y-6">
            {images.map((item) => (
              <div
                key={item.id}
               className="relative w-full aspect-[3/4] lg:h-[90vh] cursor-pointer overflow-hidden"

                onClick={() =>
                  setActiveImage(getMakeupArtistImageUrl(item.image))
                }
              >
                <Image
                  src={getMakeupArtistImageUrl(item.image)}
                  alt="Makeup Artist"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* LIGHTBOX */}
      {activeImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative w-[90%] max-w-3xl h-[80vh]">
            <Image
              src={activeImage}
              alt="Preview"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

      <ScrollToTopButton />
    </div>
  );
}

/* SCROLL BUTTON */
function ScrollToTopButton() {
  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollTop}
      className="fixed right-6 bottom-24 bg-[#74405B] w-12 h-12 rounded-md flex items-center justify-center text-white shadow-lg hover:scale-110 transition z-40"
    >
      <ArrowUp size={20} />
    </button>
  );
}
