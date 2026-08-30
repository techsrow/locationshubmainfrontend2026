"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import api from "@/lib/api";
import { getFileUrl } from "@/lib/fileUrl";


interface GalleryItem {
  id: string;
  imageUrl: string;
  displayOrder?: number;
}

interface SetupItem {
  id: string;
  title: string;
  slug: string;
  content: string;
  gallery: GalleryItem[];
}

export default function SetupGalleryPage() {
  const { slug } = useParams();
  const [setup, setSetup] = useState<SetupItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const fetchSetup = async () => {
      try {
        // Fetch all setups
        const res = await api.get<SetupItem[]>("/setups");

        // Match by slug
        const matched = res.data.find(
          (item) => item.slug === slug
        );

        if (!matched) {
          setSetup(null);
          return;
        }

        // Sort gallery by displayOrder
        matched.gallery.sort(
          (a, b) =>
            (a.displayOrder ?? 0) - (b.displayOrder ?? 0)
        );

        setSetup(matched);
      } catch (error) {
        console.error("Error fetching setup:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSetup();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!setup) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Setup not found.
      </div>
    );
  }

  return (
  <div className="bg-[#f3f0f2] min-h-screen py-10">
    
    {/* Content Section */}
    <div className="max-w-6xl mx-auto px-4">
      <h1 className="text-3xl setup-title font-semibold text-center mb-8">
        {setup.title}
      </h1>

      {setup.content && (
        <div
          className="prose max-w-none theme-color"
          dangerouslySetInnerHTML={{ __html: setup.content }}
        />
      )}
    </div>

    {/* Gallery Section */}
    {setup.gallery.length > 0 && (
      <section className="mt-12">
        <div className="max-w-7xl mx-auto md:px-4 px-0">
          <div className="space-y-2">
            {setup.gallery.map((img) => (
              <Image
                key={img.id}
                src={getFileUrl(img.imageUrl)}
                alt={setup.title}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full object-contain"
              />
            ))}
          </div>
        </div>
      </section>
    )}
  </div>
);
}