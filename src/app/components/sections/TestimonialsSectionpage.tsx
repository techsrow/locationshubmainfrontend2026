/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
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
  const [testimonials, setTestimonials] = useClientMemoryState<Testimonial[]>("view:testimonials-page:data", []);
  const [loading, setLoading] = useState(testimonials.length === 0);


const { openModal } = useModal();







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

  if (loading) return null;

  return (
    <section  className="px-1 md:px-[20px] py-10 testimonial-slide landing-page-testimonail">
      {/* Heading */}
    

      {/* Slider */}
     {/* <Swiper
  modules={[Pagination, Autoplay]}
  pagination={{ clickable: true }}
  autoplay={{
    delay: 40000, // wait 10 seconds
    disableOnInteraction: false,
  }}
  speed={800}
  spaceBetween={10}
  slidesPerView={1}
  breakpoints={{
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 5 },
  }}
  className="pb-16"
>
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="w-full flex justify-center items-center">
              <Image
                src={buildImageUrl(item.imageUrl)}
                alt={item.title}
                width={800}
                height={1000}
                className="w-full h-auto object-contain slide-radius"
                priority={false}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper> */}

      <Swiper
  modules={[Autoplay, Pagination]}
  autoplay={{
    delay: 3000, // normal slides after first
    disableOnInteraction: false,

  }}

  slidesPerView={1}
  breakpoints={{
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 5 },
  }}
  pagination={{ clickable: true }}
>
  {testimonials.map((item, index) => (
    <SwiperSlide
      key={item.id}
      data-swiper-autoplay={index === 0 ? 40000 : 3000}
    >
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

      {/* CTA */}
    
    </section>
  );
}
