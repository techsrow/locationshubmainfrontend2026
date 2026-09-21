
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

    // Don't re-trigger play/mute/loop here — the iframe URL params
    // already configure autoplay+muted+loop on first load.
    // Re-calling them via the JS API right as the player becomes
    // ready is what was causing the flicker/restart on mount.

    return () => {
      player.destroy();
    };
  }, []);

  const toggleMute = async () => {
    if (!playerRef.current) return;

    try {
      if (isMuted) {
        // Turning sound ON: restart from 0 with audio, per requirement
        await playerRef.current.pause();
        await playerRef.current.setCurrentTime(0);
        await playerRef.current.setMuted(false);
        await playerRef.current.setVolume(1);
        await playerRef.current.play();
        setIsMuted(false);
      } else {
        // Turning sound OFF
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
        <iframe
  ref={iframeRef}
  src={`https://player.vimeo.com/video/${videoId}?autoplay=1&muted=1&loop=1&playsinline=1&title=0&byline=0&portrait=0&dnt=1`}
  className="prewedding-full-video-frame"
  allow="autoplay; fullscreen; picture-in-picture"
  allowFullScreen
  title="Pre Wedding Video"
/>
        <iframe
          ref={iframeRef}
          src={`https://player.vimeo.com/video/${videoId}?autoplay=1&muted=0&loop=1&playsinline=1&controls=1&title=0&byline=0&portrait=0&dnt=1`}
          className="prewedding-full-video-frame"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
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