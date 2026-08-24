"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

type ImageItem = {
  src: string;
  className?: string;
};

const images: ImageItem[] = [
  { src: "/gallery/1a-1.jpg", className: "wide" },
  { src: "/gallery/2s.jpg", className: "wide" },
  { src: "/gallery/3a.jpg", className: "tall" },
  { src: "/gallery/4a.jpg", className: "wide" },
  { src: "/gallery/5a.jpg", className: "wide" },
  { src: "/gallery/6a.jpg", className: "wide" },
  { src: "/gallery/7a.jpg", className: "wide" },
  { src: "/gallery/8a.jpg", className: "tall" },
  { src: "/gallery/9a.jpg", className: "wide" },
  { src: "/gallery/10a.jpg", className: "tall" },
  { src: "/gallery/11a.jpg", className: "wide" },
  { src: "/gallery/12a.jpg", className: "wide" },
  { src: "/gallery/13a.jpg", className: "wide" },
  { src: "/gallery/14a.jpg" , className: "wide" },
  { src: "/gallery/15a.jpg", className: "tall" },
  { src: "/gallery/16-1.jpg", className: "wide" },
  { src: "/gallery/17-1.jpg", className: "wide" },
  { src: "/gallery/18.jpg", className: "tall" },
  { src: "/gallery/19-1.jpg", className: "wide" },
  { src: "/gallery/20-1.jpg", className: "tall" },

  // rest images...
  { src: "/gallery/21-1.jpg" },
  { src: "/gallery/22-1.jpg" },
  { src: "/gallery/23.jpg" },
  { src: "/gallery/24a.jpg" },
  { src: "/gallery/25.jpg" },
  { src: "/gallery/26a.jpg" },
  { src: "/gallery/27a.jpg" },
  { src: "/gallery/28a.jpg" },
  { src: "/gallery/29.jpg" },
  { src: "/gallery/30a-1.jpg" },
  { src: "/gallery/31a-1.jpg" },
  { src: "/gallery/32a-1.jpg" },
  { src: "/gallery/33a.jpg" },
  { src: "/gallery/34a.jpg" },
  { src: "/gallery/35a.jpg" },
  { src: "/gallery/36a.jpg" },
  { src: "/gallery/37a.jpg" },
  { src: "/gallery/38a.jpg" },
  { src: "/gallery/39a.jpg" },
  { src: "/gallery/40a.jpg" },
  { src: "/gallery/41a.jpg" },
  { src: "/gallery/42a.jpg" },
  { src: "/gallery/44a.jpg" },
  { src: "/gallery/45a.jpg" },
  { src: "/gallery/46.jpg" },
  { src: "/gallery/47a.jpg" },
  { src: "/gallery/48a.jpg" },
  { src: "/gallery/49a.jpg" },
  { src: "/gallery/50a-1.jpg" },
  { src: "/gallery/51a.jpg" },
  { src: "/gallery/52a-1.jpg" },
  { src: "/gallery/53a.jpg" },
  { src: "/gallery/54a.jpg" },
  { src: "/gallery/55a.jpg" },
  { src: "/gallery/56a.jpg" },
  { src: "/gallery/57a-1.jpg" },
  { src: "/gallery/58a.jpg" },
  { src: "/gallery/59a.jpg" },
  { src: "/gallery/60a-1.jpg" }
];

export default function PhotoGallery() {
  const [index, setIndex] = useState(-1);
  const [visibleCount, setVisibleCount] = useState(20); // 👈 initial 20

  const visibleImages = images.slice(0, visibleCount);

  return (
    <>
      <div className="gallery">
        {visibleImages.map((img, i) => (
          <div
            key={i}
            className={`item ${img.className || ""}`}
            onClick={() => setIndex(i)}
          >
            <Image
              src={img.src}
              alt={`gallery-${i}`}
              fill
              unoptimized
              className="img"
            />
          </div>
        ))}
      </div>

      {/* ✅ Load More Button */}
      {visibleCount < images.length && (
        <div className="load-more-wrapper">
          <button
            className="load-more-btn"
            onClick={() => setVisibleCount(images.length)}
          >
            Load More
          </button>
        </div>
      )}

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={images.map((img) => ({ src: img.src }))}
      />
    </>
  );
}