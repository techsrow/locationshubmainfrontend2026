/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import api from "@/lib/api";
import { buildImageUrl } from "@/lib/getFileUrl";
import { useModal } from "@/app/components/modal/ModalProvider";
import ShootTypeModal from "@/app/components/modal/ShootTypeModal";
import { useClientMemoryState } from "@/lib/clientMemoryCache";

import "swiper/css";
import "swiper/css/pagination";

interface Testimonial {
  id: string;
  title: string;
  imageUrl: string;
  displayorder: number;
  createdAt: string;
}

export default function TestimonialsSectionPage() {
  const [testimonials, setTestimonials] = useClientMemoryState<Testimonial[]>(
    "view:testimonials-page:data",
    []
  );
  const [loading, setLoading] = useState(testimonials.length === 0);

  const { openModal } = useModal();

  const sectionRef = useRef<HTMLElement | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await api.get<Testimonial[]>("/testimonials");
        const sorted = [...res.data].sort(
          (a, b) => a.displayorder - b.displayorder
        );
        setTestimonials(sorted);
      } catch (error) {
        console.error("Failed to fetch testimonials:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  // Pause/resume autoplay based on section visibility
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const swiper = swiperRef.current;
        if (!swiper || !swiper.autoplay) return;

        if (entry.isIntersecting) {
          swiper.autoplay.start();
        } else {
          swiper.autoplay.stop();
        }
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [loading]);

  if (loading) return null;

  return (
    <section
      ref={sectionRef}
      className="px-1 md:px-[20px] py-10 testimonial-slide landing-page-testimonail"
    >
      <Swiper
        modules={[Autoplay, Pagination]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 5 },
        }}
        pagination={{ clickable: true }}
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <Image
              src={buildImageUrl(item.imageUrl)}
              alt={item.title}
              width={800}
              height={1000}
              className="w-full h-auto object-contain slide-radius"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}