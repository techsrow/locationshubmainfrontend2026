"use client";

import { useEffect, useRef, useState } from "react";
import Player from "@vimeo/player";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";

export default function FullWidthVideoSection() {
  const videoId = "1227853012";

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<Player | null>(null);

  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    if (!iframeRef.current) return;

    const player = new Player(iframeRef.current);
    playerRef.current = player;

    // Do NOT call play() / setMuted() / setLoop() here.
    // The iframe URL already handles muted autoplay + loop.
    // Touching the API on ready is what caused the restart/flicker.

    return () => {
      player.destroy();
      playerRef.current = null;
    };
  }, []);

  const toggleMute = async () => {
    if (!playerRef.current) return;

    try {
      if (isMuted) {
        // User gesture → sound ON, restart from 0
        await playerRef.current.pause();
        await playerRef.current.setCurrentTime(0);
        await playerRef.current.setMuted(false);
        await playerRef.current.setVolume(1);
        await playerRef.current.play();
        setIsMuted(false);
      } else {
        // Sound OFF
        await playerRef.current.setMuted(true);
        await playerRef.current.setVolume(0);
        setIsMuted(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="prewedding-full-video-section">
      <div
        className="prewedding-full-video-wrapper"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        {/*
          background=1  → hides Vimeo UI (no unmute label shown)
          autoplay=1    → REQUIRED for autoplay to trigger
          muted=1       → REQUIRED for browsers to allow autoplay
          loop=1        → continuous playback
        */}
<iframe
  ref={iframeRef}
  src={`https://player.vimeo.com/video/${videoId}?autoplay=1&muted=1&loop=1&autopause=0&playsinline=1&controls=1&title=0&byline=0&portrait=0&unmute_button=0&dnt=1`}
  className="prewedding-full-video-frame"
  allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
  allowFullScreen
  loading="eager"
  title="Pre Wedding Video"
/>

        <div
          className={`video-floating-controls ${
            showControls ? "visible" : "hidden"
          }`}
        >
          <button
            className="video-control-btn"
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
          </button>
        </div>
      </div>
    </section>
  );
}