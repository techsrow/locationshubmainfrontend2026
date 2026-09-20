/* eslint-disable react-hooks/set-state-in-effect */

"use client";

import { useEffect, useRef, useState } from "react";
import Player from "@vimeo/player";
import {
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeMute,
} from "react-icons/fa";

export default function FullWidthVideoSection() {
  const videoId = "1227853012";

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<Player | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);

  // const [progress, setProgress] = useState(0);
  

  

  useEffect(() => {
    if (!iframeRef.current) return;

    const player = new Player(iframeRef.current);

    playerRef.current = player;

   player.ready().then(async () => {
  try {
   
await player.setLoop(true);
    // Start muted autoplay
    await player.setVolume(0);
    await player.setMuted(true);
    await player.play();

    setIsMuted(true);
    setIsPlaying(true);
  } catch (error) {
    console.error(error);
  }
});
    player.on("play", () => {
      setIsPlaying(true);
    });

    player.on("pause", () => {
      setIsPlaying(false);
    });

    // player.on("timeupdate", (data) => {
    //   setProgress(data.seconds);
    // });

    return () => {
      player.destroy();
    };
  }, []);

const toggleVideo = async () => {
  if (!playerRef.current) return;

  try {
    if (isPlaying) {
      await playerRef.current.pause();
    } else {
      await playerRef.current.play();
    }
  } catch (error) {
    console.error(error);
  }
};

const toggleMute = async () => {
  if (!playerRef.current) return;

  try {
    if (isMuted) {
      // User wants sound ON
      await playerRef.current.pause();

      await playerRef.current.setCurrentTime(0);

      await playerRef.current.setMuted(false);

      await playerRef.current.setVolume(1);

      await playerRef.current.play();

      setIsMuted(false);
    } else {
      // User wants sound OFF
      await playerRef.current.setVolume(0);

      await playerRef.current.setMuted(true);

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
  src={`https://player.vimeo.com/video/${videoId}?autoplay=1&muted=1&loop=1&playsinline=1&controls=1&unmute_button=0&title=0&byline=0&portrait=0&dnt=1`}
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
          {/* <button
            className="video-control-btn"
            onClick={toggleVideo}
            aria-label={
              isPlaying ? "Pause Video" : "Play Video"
            }
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button> */}

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