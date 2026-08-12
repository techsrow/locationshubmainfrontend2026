"use client";

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import api from "@/lib/api";
import { getFileUrl } from "@/lib/fileUrl";
import { useModal } from "@/app/components/modal/ModalProvider";
import ShootTypeModal from "@/app/components/modal/ShootTypeModal";

interface AddOnService {
  id: string;
  title: string;
  pageUrl :string;
  imageUrl: string;
  displayorder?: number;
}

export default function AddOnServicesParallax() {
  const [services, setServices] = useState<AddOnService[]>([]);
  const { openModal } = useModal();

 useEffect(() => {
  const fetchServices = async () => {
    try {
      const res = await api.get<AddOnService[]>("/add-on-services");

      const sorted = [...res.data].sort(
        (a, b) => (a.displayorder ?? 0) - (b.displayorder ?? 0)
      );

      setServices(sorted);
    } catch (error) {
      console.error("Failed to load add-on services", error);
    }
  };

  fetchServices();
}, []);


  return (
    <section
      className="relative w-full bg-fixed bg-center bg-cover py-10"
      style={{
        backgroundImage: "url('/parallax/add-on-services-bg.jpg')",
      }}
    >
      {/* MAROON OVERLAY */}
      <div className="absolute inset-0 bg-[#4B1D33]/25 transition-all duration-300"></div>

      {/* CONTENT */}
      <div className="relative z-10 px-6 md:px-[100px] text-center text-white">
        {/* Heading */}
        <div className="inline-block border border-white px-8 py-2 mb-14">
          <h2 className="font-quicksand text-[22px] font-[700]">
            Add on services
          </h2>
        </div>

        {/* Services Grid */}
      <div className="grid grid-cols-3 md:grid-cols-5 gap-5 max-w-[900px] mx-auto">
{services.map((service) => (
    <Link
      key={service.id}
      href={`/${service.pageUrl}`}
      className="flex flex-col items-center gap-4 group"
    >
      <Image
        src={getFileUrl(service.imageUrl)}
        alt={service.title}
        width={150}
        height={150}
        className="object-contain transition-transform duration-300 group-hover:scale-105"
      />

      <span className="text-[14px] md:text-[18px] font-[700] text-center">
        {service.title}
      </span>
    </Link>
  ))}
         
        </div>

        {/* CTA */}
        <div className="mt-16">
          <button onClick={() => openModal(<ShootTypeModal />)} className="bg-[#ff8c1a] text-white px-10 py-3 font-[600] hover:bg-[#e57c14] transition">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
}
