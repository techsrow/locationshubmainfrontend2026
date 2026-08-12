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

export default function VideoSection() {
  const videos = [
    "1046724941",
    "1046730034",
    "1046735877",
  ];

  return (
    <section className="video-section">
      {videos.map((id, index) => (
        <div className="video-wrapper" key={index}>
          <iframe
            src={`https://player.vimeo.com/video/${id}?autoplay=1&loop=1&muted=1&background=1`}
            className="video-frame"
            allow="autoplay; fullscreen"
          ></iframe>
        </div>
      ))}
    </section>
  );
}