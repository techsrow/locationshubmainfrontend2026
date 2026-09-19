"use client";

import { useEffect, useRef, useState } from "react";
import Player from "@vimeo/player";
import {
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeMute,
} from "react-icons/fa";

const films = ["1227853012"];

export default function PreWeddingFilms() {
  const videoId = films[0];

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<Player | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);

  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (!iframeRef.current) return;

    const player = new Player(iframeRef.current);

    playerRef.current = player;

    player.ready().then(async () => {
      try {
        const videoDuration = await player.getDuration();

        setDuration(videoDuration);

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

    player.on("timeupdate", (data) => {
      setProgress(data.seconds);
    });

    return () => {
      player.destroy();
    };
  }, []);

  const toggleVideo = async () => {
    if (!playerRef.current) return;

    try {
      if (isPlaying) {
        await playerRef.current.pause();
        setIsPlaying(false);
      } else {
        await playerRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const toggleMute = async () => {
    if (!playerRef.current) return;

    try {
      if (isMuted) {
        // Restart from beginning with sound
        await playerRef.current.setCurrentTime(0);

        await playerRef.current.setMuted(false);

        await playerRef.current.setVolume(1);

        await playerRef.current.play();

        setIsMuted(false);
        setIsPlaying(true);
      } else {
        await playerRef.current.setMuted(true);

        setIsMuted(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSeek = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newTime = Number(e.target.value);

    setProgress(newTime);

    if (!playerRef.current) return;

    try {
      await playerRef.current.setCurrentTime(newTime);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="prewedding-films-container">
      <div
        className="prewedding-film-featured"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        <iframe
          ref={iframeRef}
          src={`https://player.vimeo.com/video/${videoId}?autoplay=1&muted=1&playsinline=1&controls=0&title=0&byline=0&portrait=0&badge=0&dnt=1`}
          className="prewedding-film-frame"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Featured Pre Wedding Film"
        />

        <div
          className={`prewedding-featured-controls ${
            showControls ? "visible" : "hidden"
          }`}
        >
          <button
            className="prewedding-featured-control-btn"
            onClick={toggleVideo}
            aria-label={
              isPlaying ? "Pause Video" : "Play Video"
            }
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>

          <button
            className="prewedding-featured-control-btn"
            onClick={toggleMute}
            aria-label={
              isMuted ? "Unmute Video" : "Mute Video"
            }
          >
            {isMuted ? (
              <FaVolumeMute />
            ) : (
              <FaVolumeUp />
            )}
          </button>
        </div>

        <div
          className={`prewedding-featured-progress ${
            showControls ? "visible" : "hidden"
          }`}
        >
          <input
            type="range"
            min={0}
            max={duration || 0}
            value={progress}
            onChange={handleSeek}
            className="prewedding-featured-progress-bar"
          />
        </div>
      </div>
    </div>
  );
}