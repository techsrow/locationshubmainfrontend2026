/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useRef, useState } from "react";
import Player from "@vimeo/player";
import { FaPlay, FaPause } from "react-icons/fa";

export default function FullWidthVideoSection() {
  const videoId = "1227853012";

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<Player | null>(null);
  const hideTimer = useRef<NodeJS.Timeout | null>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [showControls, setShowControls] = useState(true);

  const showControlsTemporarily = () => {
    if (window.innerWidth < 768) return; // Mobile always visible

    setShowControls(true);

    if (hideTimer.current) {
      clearTimeout(hideTimer.current);
    }

    hideTimer.current = setTimeout(() => {
      setShowControls(false);
    }, 3000);
  };

  useEffect(() => {
    if (!iframeRef.current) return;

    playerRef.current = new Player(iframeRef.current);

    if (window.innerWidth >= 768) {
      showControlsTemporarily();
    }

    return () => {
      if (hideTimer.current) {
        clearTimeout(hideTimer.current);
      }
    };
  }, []);

  const toggleVideo = async () => {
    if (!playerRef.current) return;

    if (isPlaying) {
      await playerRef.current.pause();
      setIsPlaying(false);
    } else {
      await playerRef.current.setCurrentTime(0);
      await playerRef.current.setMuted(false);
      await playerRef.current.setVolume(1);
      await playerRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="prewedding-full-video-section">
      <div
        className="prewedding-full-video-wrapper"
        onMouseMove={showControlsTemporarily}
      >
        <iframe
          ref={iframeRef}
          src={`https://player.vimeo.com/video/${videoId}?autoplay=1&muted=1&loop=1&background=1`}
          className="prewedding-full-video-frame"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Pre Wedding Video"
        />

        <button
          className={`watch-sound-btn ${
            showControls ? "visible" : "hidden"
          }`}
          onClick={toggleVideo}
          aria-label={isPlaying ? "Pause Video" : "Play Video"}
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      </div>
    </section>
  );
}