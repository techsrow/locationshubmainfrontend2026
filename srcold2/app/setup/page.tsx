"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import api from "@/lib/api";
import { getFileUrl } from "@/lib/fileUrl";
import { SetupType } from "@/types/setup";

export default function Page() {
  const [setups, setSetups] = useState<SetupType[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchSetups = async () => {
      try {
        const res = await api.get<SetupType[]>("/setups");

        const sorted = res.data.sort(
          (a, b) => a.displayOrder - b.displayOrder
        );

        setSetups(sorted);
      } catch (error) {
        console.error("Failed to fetch setups:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSetups();
  }, []);

  const visibleSetups = showAll ? setups : setups.slice(0, 6);

  if (loading) {
    return (
      <section className="px-2 md:px-[120px] py-10">
        <p className="text-center">Loading setups...</p>
      </section>
    );
  }

  return (
    <section className="md:px-2 md:px-[120px] py-10 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {visibleSetups.map((setup) => (
          <Link
            key={setup.id}
            href={`/setup/${setup.slug}`}
            className="relative overflow-hidden block group"
          >
            <div className="relative w-full">
  <Image
    src={getFileUrl(setup.mainImage)}
    alt={setup.title}
    width={1200}
    height={800}
    className="w-full h-auto object-contain transition duration-500 group-hover:scale-105"
  />
</div>


            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/30 px-6 py-2 setupbtn">
              <span className="text-white text-sm font-semibold ">
                {setup.title}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {!showAll && setups.length > 6 && (
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(true)}
            className="bg-[#ff8c1a] text-white px-8 py-3 font-[600] hover:bg-[#e57c14] transition"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
}
