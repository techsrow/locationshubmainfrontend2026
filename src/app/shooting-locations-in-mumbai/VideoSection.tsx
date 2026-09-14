/* eslint-disable react-hooks/immutability */
// "use client";

// import { useRef, useState } from "react";

// export default function VideoSection() {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const [muted, setMuted] = useState(true);

//   const toggleMute = () => {
//     if (!videoRef.current) return;

//     videoRef.current.muted = !videoRef.current.muted;
//     setMuted(videoRef.current.muted);
//   };

//   return (
//     <section className="video-section">
//       <div className="video-wrapper">
//         <button className="mute-btn" onClick={toggleMute}>
//           {muted ? "Unmute" : "Mute"}
//         </button>

//         <video ref={videoRef} autoPlay muted loop controls playsInline>
//           <source src="/videos/location-video.mp4" type="video/mp4" />
//         </video>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";
import { useClientMemoryState } from "@/lib/clientMemoryCache";

interface Video {
  id: string;
  vimeoId: string;
  category: string;
  isActive: boolean;
}

export default function VideoSection() {
  const [videos, setVideos] = useClientMemoryState<Video[]>("view:commercial-videos:data", []);

  useEffect(() => {
    loadVideos();
  }, []);

  const loadVideos = async () => {
    try {
      const response = await api.get("/videos");

      const commercialVideos = response.data.filter(
        (item: Video) =>
          item.category === "COMMERCIAL" &&
          item.isActive
      );

      setVideos(commercialVideos);
    } catch (error) {
      console.error(
        "Failed to load videos",
        error
      );
    }
  };

  if (!videos.length) return null;

  return (
    <section className="w-full commerical-page-video-section">
  <div className="flex flex-col items-center gap-[15px]">
    {videos.map((video) => (
      <div
        key={video.id}
        className="w-full md:max-w-6xl"
      >
        <iframe
          src={`https://player.vimeo.com/video/${video.vimeoId}?autoplay=1&loop=1&muted=1&controls=1`}
          className="w-full h-[220px] sm:h-[350px] md:h-[500px] lg:h-[650px]"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
    ))}
  </div>
</section>
  );
}