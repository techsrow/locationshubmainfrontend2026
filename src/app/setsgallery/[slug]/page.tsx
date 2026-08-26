/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import api from "@/lib/api";
import { getFileUrl } from "@/lib/fileUrl";
import { useModal } from "@/app/components/modal/ModalProvider";
import ShootTypeModal from "@/app/components/modal/ShootTypeModal";

interface SetBasic {
  id: string;
  title: string;
  pageUrl: string;
}

interface GalleryItem {
  id: string;
  imageUrl: string;
  displayorder?: number;
}

interface SetWithGallery {
  id: string;
  title: string;
  gallery: GalleryItem[];
}

export default function SetGalleryPage() {
  const { slug } = useParams();
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);

  const { openModal } = useModal();

  useEffect(() => {
    if (!slug) return;

    const fetchGallery = async () => {
      try {
        const res = await api.get<SetBasic[]>("/set");

        const matchedSet = res.data.find((set) => {
          const cleanUrl = set.pageUrl
            ?.replace(/^\/|\/$/g, "")
            .split("/")
            .pop();

          return cleanUrl === slug;
        });

        if (!matchedSet) {
          setGallery([]);
          return;
        }

        const singleSet = await api.get<SetWithGallery>(
          `/set/${matchedSet.id}`
        );

        const sortedGallery = singleSet.data.gallery.sort(
          (a, b) =>
            (a.displayorder ?? 0) - (b.displayorder ?? 0)
        );

        setTitle(singleSet.data.title);
        setGallery(sortedGallery);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!gallery.length) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        No gallery found.
      </div>
    );
  }

  return (
    <div className="bg-[#f3f0f2] min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-2 space-y-2">
        {gallery.map((item) => (
          <Image
            key={item.id}
            src={getFileUrl(item.imageUrl)}
            alt={title}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
          />
        ))}
      </div>

      <div className="mt-16 justify-center flex">
        <button
          onClick={() => openModal(<ShootTypeModal />)}
          className="bg-[#ff8c1a] text-white px-10 py-3 font-[600] hover:bg-[#e57c14] transition"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}