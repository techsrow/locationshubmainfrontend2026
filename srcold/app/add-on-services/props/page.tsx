"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import api from "@/lib/api";
import { getPropImageUrl } from "@/lib/getPropImageUrl";
import { PropType } from "@/types/props";

export default function PropsPage() {
  const [propsData, setPropsData] = useState<PropType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProps = async () => {
      try {
        const res = await api.get<PropType[]>("/props");

        const sorted = res.data.sort(
          (a, b) => a.displayOrder - b.displayOrder
        );

        setPropsData(sorted);
      } catch (error) {
        console.error("Failed to fetch props:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProps();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-[#f3f0f2] min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {propsData.map((item) => (
            <div key={item.id} className="bg-[#e9e3e6] group overflow-hidden">

              {/* Responsive Image (No Cropping) */}
              <Image
                src={getPropImageUrl(item.image)}
                alt={item.title}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto transition duration-500 group-hover:scale-105"
              />

              <div className="p-5">
                <h3 className="font-['Quicksand'] text-[18px] font-bold text-[#74405B] uppercase tracking-wide">
                  {item.title}
                </h3>

                <p className="font-['Quicksand'] text-[15px] text-[#ff7905] mt-1 font-medium">
                  {item.subTitle}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}
