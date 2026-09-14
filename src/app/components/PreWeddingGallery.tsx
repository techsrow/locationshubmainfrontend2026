"use client";

import { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import api from "@/lib/api";
import { GalleryImage } from "@/types/gallery";
import { getGalleryImageUrl } from "@/lib/getGalleryImageUrl";
import { useClientMemoryState } from "@/lib/clientMemoryCache";

export default function PreWeddingGallery() {
  const [images, setImages] =
    useClientMemoryState<GalleryImage[]>(
      "view:pre-wedding-gallery:data",
      []
    );

  const [visibleCount, setVisibleCount] =
    useClientMemoryState(
      "view:pre-wedding-gallery:visible-count",
      16
    );

  const [loading, setLoading] = useState(
    images.length === 0
  );

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        if (images.length === 0) {
          setLoading(true);
        }

        const res = await api.get("/gallery");

        const sorted = [...res.data].sort(
          (
            a: GalleryImage,
            b: GalleryImage
          ) => a.displayOrder - b.displayOrder
        );

        setImages(sorted);
      } catch (error) {
        console.error(
          "Pre Wedding Gallery Error:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const slides = images.map((item) => ({
    src: getGalleryImageUrl(item.imageUrl),
  }));

  const visibleImages = images
    .slice(0, visibleCount)
    .map((item, originalIndex) => ({
      item,
      originalIndex,
    }));

  /*
   * TWO INDEPENDENT COLUMNS
   *
   * 0,2,4,6... → left
   * 1,3,5,7... → right
   */
  const leftColumn = visibleImages.filter(
    (_, position) => position % 2 === 0
  );

  const rightColumn = visibleImages.filter(
    (_, position) => position % 2 !== 0
  );

  const renderImage = ({
    item,
    originalIndex,
  }: {
    item: GalleryImage;
    originalIndex: number;
  }) => (
    <button
      key={item.id}
      type="button"
      className="prewedding-gallery-item"
      onClick={() => {
        setIndex(originalIndex);
        setOpen(true);
      }}
      aria-label={`Open pre wedding photo ${
        originalIndex + 1
      }`}
    >
      <img
        src={getGalleryImageUrl(item.imageUrl)}
        alt={`Pre wedding shoot photo ${
          originalIndex + 1
        }`}
        loading={
          originalIndex < 6 ? "eager" : "lazy"
        }
        decoding="async"
        className="prewedding-gallery-image"
      />
    </button>
  );

  if (loading && images.length === 0) {
    return (
      <div className="prewedding-gallery-container">
        <div className="prewedding-gallery-columns">
          <div className="prewedding-gallery-column">
            <div className="prewedding-gallery-skeleton" />
            <div className="prewedding-gallery-skeleton" />
          </div>

          <div className="prewedding-gallery-column">
            <div className="prewedding-gallery-skeleton" />
            <div className="prewedding-gallery-skeleton" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="prewedding-gallery-container">

      {/* TWO INDEPENDENT COLUMNS */}
      <div className="prewedding-gallery-columns">

        {/* LEFT */}
        <div className="prewedding-gallery-column">
          {leftColumn.map(renderImage)}
        </div>

        {/* RIGHT */}
        <div className="prewedding-gallery-column">
          {rightColumn.map(renderImage)}
        </div>

      </div>

      {/* LOAD MORE */}
      {visibleCount < images.length && (
        <div className="prewedding-gallery-loadmore">
          <button
            type="button"
            onClick={() =>
              setVisibleCount(
                (previous) => previous + 16
              )
            }
            className="prewedding-gallery-loadmore-btn"
          >
            Load More
          </button>
        </div>
      )}

      {/* LIGHTBOX */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
      />

    </div>
  );
}