"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import api from "@/lib/api";
import { getFileUrl } from "@/lib/fileUrl";
import Link from "next/link";

interface SetItem {
  id: string;
  title: string;
  mainImage: string;
  content: string;
  createdAt: string;
  displayorder?: number;
  pageUrl : string;
}

export default function OurSetsSection() {
  const [sets, setSets] = useState<SetItem[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSets = async () => {
      try {
        const res = await api.get<SetItem[]>("/set");

        // 🔥 Ensure admin order respected
        const sorted = [...res.data].sort(
          (a, b) =>
            (a.displayorder ?? 0) - (b.displayorder ?? 0)
        );

        setSets(sorted);
      } catch (error) {
        console.error("Failed to fetch sets:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSets();
  }, []);

  const visibleSets = showAll ? sets : sets.slice(0, 6);
  
  
  return (
    <section className="px-0 md:px-[60px] py-10 bg-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <div className="inline-block border border-[#74405B] px-10 py-2">
          <h2 className="font-quicksand text-[22px] font-[700] text-[#74405B]">
            Our Sets
          </h2>
        </div>
      </div>

      {/* Loading */}
      {loading && (
        <div className="text-center py-10 text-gray-500">
          Loading sets...
        </div>
      )}

      {/* Grid */}
      {!loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {visibleSets.map((set) => (
            <Link
              key={set.id}
              href={set.pageUrl}
              className="relative group overflow-hidden  shadow-sm hover:shadow-md "
            >
             <div className="w-full bg-gray-100 flex items-center justify-center">
  <Image
    src={getFileUrl(set.mainImage)}
    alt={set.title}
    width={800}
    height={600}
    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
    className="w-full h-auto object-contain "
  />
</div>


              {/* Gradient Overlay */}
              

              {/* Title */}
             {/* Title Strip */}
<div className="absolute bottom-0 left-0 w-full bg-black/10  py-[10px] text-center">
  <span className="text-white text-sm md:text-base font-semibold tracking-wide">
    {set.title}
  </span>
</div>

            </Link>
          ))}
        </div>
      )}

      {/* Load More */}
      {!showAll && sets.length > 6 && (
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(true)}
            className="bg-[#ff8c1a] text-white px-8 py-3 font-semibold hover:bg-[#e57c14] transition rounded"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
}
