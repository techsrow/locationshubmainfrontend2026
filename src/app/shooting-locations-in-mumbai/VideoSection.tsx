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

import { useState } from "react";

export default function VideoSection() {
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    setMuted(!muted);
  };

  return (
    <section className="video-section">
     <div className="video-wrapper">
  <iframe
    src={`https://player.vimeo.com/video/952343036?autoplay=1&loop=1&muted=${muted ? 1 : 0}&controls=1`}
    className="video-frame"
    allow="autoplay; fullscreen; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>
    </section>
  );
}