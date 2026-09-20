"use client";

import { useEffect, useState } from "react";

type PortfolioImage = {
  id: string;
  type: "image";
  src: string;
  alt: string;
};

type PortfolioVideo = {
  id: string;
  type: "video";
  videoId: string;
  title: string;
};

type PortfolioItem = PortfolioImage | PortfolioVideo;


/*
 * Add your images and Vimeo IDs here.
 *
 * You can mix them in ANY order.
 */

const portfolioItems: PortfolioItem[] = [
 

  {
    id: "portfolio-1",
    type: "video",
    videoId: "1227839198",
  

    title: "Pre Wedding Film",
  },
  {
    id: "portfolio-2",
    type: "video",
    videoId: "1227851115",
  

    title: "Pre Wedding Film",
  },
  {
    id: "portfolio-3",
    type: "video",
    videoId: "1227851118",
  

    title: "Pre Wedding Film",
  },

  {
    id: "portfolio-4",
    type: "video",
    videoId: "1227853419",
  

    title: "Pre Wedding Film",
  },
  



  {
    id: "portfolio-5",
    type: "video",
    videoId: "1227851117",
    title: "Pre Wedding Film",
  },

 

  {
    id: "portfolio-6",
    type: "video",
    videoId: "1227853831",
    title: "Pre Wedding Film",
  },

  {
    id: "portfolio-7",
    type: "video",
    videoId: "1227851116",
    title: "Pre Wedding Film",
  },


  // {
  //   id: "portfolio-8",
  //   type: "image",
  //   src: "/inhouse-makeup-artist.jpg",
  //   alt: "Pre wedding portfolio",
  // },
];


export default function PreWeddingPortfolio() {

  const [activeItem, setActiveItem] =
    useState<PortfolioItem | null>(null);


  /*
   * ESC closes popup
   * Lock body scroll while popup is open
   */
  useEffect(() => {

    if (!activeItem) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";


    const handleEscape = (
      event: KeyboardEvent
    ) => {

      if (event.key === "Escape") {
        setActiveItem(null);
      }

    };


    window.addEventListener(
      "keydown",
      handleEscape
    );


    return () => {

      window.removeEventListener(
        "keydown",
        handleEscape
      );

      document.body.style.overflow = "";

    };

  }, [activeItem]);



  
  useEffect(() => {
  console.log("Vimeo Player Created");
}, []);



  return (
    <>

      {/* ================================================
          TWO COLUMN PORTFOLIO
      ================================================= */}

      <div className="prewedding-portfolio-container">

        <div className="prewedding-portfolio-grid">

          {portfolioItems.map((item) => (

            <button
              key={item.id}
              type="button"
              className={`prewedding-portfolio-item ${
                item.type === "video"
                  ? "prewedding-portfolio-video-item"
                  : "prewedding-portfolio-image-item"
              }`}
              onClick={() =>
                setActiveItem(item)
              }
            >

              {/* ============================
                  IMAGE
              ============================ */}

              {item.type === "image" && (

                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="prewedding-portfolio-image"
                />

              )}


              {/* ============================
                  VIDEO PREVIEW
              ============================ */}

              {item.type === "video" && (

                <>
                  <iframe
                    src={`https://player.vimeo.com/video/${item.videoId}?autoplay=1&loop=1&muted=1&background=1&autopause=0`}
                    className="prewedding-portfolio-preview-video"
                    allow="autoplay"
                    title={item.title}
                    tabIndex={-1}
                  />

                  <div className="prewedding-portfolio-video-overlay">

                    <span className="prewedding-portfolio-play">
                      ▶
                    </span>

                  </div>
                </>

              )}


              {/* HOVER OVERLAY */}

              <div className="prewedding-portfolio-hover">

                <span>
                  {item.type === "video"
                    ? "Play Film"
                    : "View Photo"}
                </span>

              </div>

            </button>

          ))}

        </div>

      </div>



      {/* ================================================
          POPUP
      ================================================= */}

      {activeItem && (

        <div
          className="prewedding-portfolio-modal"
          onClick={() =>
            setActiveItem(null)
          }
          role="dialog"
          aria-modal="true"
        >

          <button
            type="button"
            className="prewedding-portfolio-close"
            onClick={() =>
              setActiveItem(null)
            }
            aria-label="Close"
          >
            ×
          </button>


          <div
            className={`prewedding-portfolio-modal-content ${
              activeItem.type === "video"
                ? "prewedding-portfolio-modal-video"
                : "prewedding-portfolio-modal-image"
            }`}
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            {/* IMAGE POPUP */}

            {activeItem.type === "image" && (

              <img
                src={activeItem.src}
                alt={activeItem.alt}
                className="prewedding-portfolio-popup-image"
              />

            )}


            {/* VIDEO POPUP */}

            {activeItem.type === "video" && (

              <iframe
                src={`https://player.vimeo.com/video/${activeItem.videoId}?autoplay=1&controls=1`}
                className="prewedding-portfolio-popup-video"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={activeItem.title}
              />

            )}

          </div>

        </div>

      )}

    </>
  );
}