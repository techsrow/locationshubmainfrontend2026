"use client";

import { useState } from "react";

export default function YouTubeEmbed({ videoId }: { videoId: string }) {
  const [play, setPlay] = useState(false);

  return (
    <div className="youtube-wrapper">
      {!play ? (
        <div className="youtube-thumbnail" onClick={() => setPlay(true)}>
          <img
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            alt="Video Thumbnail"
          />
          <div className="play-button"></div>
        </div>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube Video"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      )}
    </div>
  );
}