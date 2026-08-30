"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link"; // ✅ FIXED
import api from "@/lib/api";
import { getFileUrl } from "@/lib/fileUrl";

interface SetType {
  id: string;
  title: string;
  mainImage: string;
  content: string;
  createdAt: string;
  pageUrl: string;
}

export default function Page() {
  const [sets, setSets] = useState<SetType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSets = async () => {
      try {
        const res = await api.get<SetType[]>("/set");
        setSets(res.data);
      } catch (error) {
        console.error("Set API Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSets();
  }, []);

  if (loading) {
    return (
      <section className="py-20 text-center">
        <p className="text-lg font-semibold">Loading Sets...</p>
      </section>
    );
  }

  return (
    <section className="md:px-2 md:px-[20px] py-5 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2">
        {sets.map((set) => (
          <Link
           key={set.id}
  href={set.pageUrl?.replace(/\/$/, "")}  // ✅ FIXED ROUTE
            className="relative overflow-hidden group block"
          >
            <Image
              src={getFileUrl(set.mainImage)}
              alt={set.title}
              width={800}
              height={490}
              className="w-full imghforset object-cover transition-transform duration-300 "
            />

            {/* Bottom Overlay Title */}
            <div className="absolute bottom-0 left-0 w-full bg-black/10 py-3 px-4 text-center">
              <span className="text-white text-base font-semibold tracking-wide">
                {set.title}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}