"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";
import { getFileUrl } from "@/lib/fileUrl";

interface SliderItem {
  id: string;
  title: string;
  imageUrl: string;
  displayorder: number;
}

export default function HomeSlider() {
  const [slides, setSlides] = useState<SliderItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const res = await api.get<SliderItem[]>("/slider");

        const sortedSlides = [...res.data].sort(
          (a, b) => a.displayorder - b.displayorder
        );

        setSlides(sortedSlides);
      } catch (error) {
        console.error("Failed to fetch slider:", error);
      }
    };

    fetchSlides();
  }, []);

  useEffect(() => {
    if (slides.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [slides]);
console.log("NEXT_PUBLIC_API_URL =", process.env.NEXT_PUBLIC_API_URL);


  return (
    <div className="relative">

      {/* MOBILE FULL WIDTH */}
      <div className="block md:hidden w-screen left-1/2 -ml-[50vw] relative overflow-hidden">
        {renderContent()}
      </div>

      {/* DESKTOP CONTAINED */}
      <div className="hidden md:block mx-auto md:w-[60%] lg:w-[60%] xl:w-[60%] relative overflow-hidden">
        {renderContent()}
      </div>

    </div>
  );

  function renderContent() {
    return (
      <div className="relative w-full">

        {slides.map((item, index) => (
          <img
            key={item.id}
            src={getFileUrl(item.imageUrl)}
            alt={item.title || "slider"}
            className={`absolute inset-0 w-full h-auto object-contain transition-opacity duration-1000 ${
              index === currentIndex
                ? "opacity-100 relative"
                : "opacity-0"
            }`}
          />
        ))}

        {/* Dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-white"
                  : "bg-white/50"
              }`}
            />
          ))}
        </div>

      </div>
    );
  }
}
