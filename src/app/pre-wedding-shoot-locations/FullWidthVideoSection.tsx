"use client";

export default function FullWidthVideoSection() {
  const videoId = "1046724941";

  return (
    <section className="prewedding-full-video-section">
      <div className="prewedding-full-video-wrapper">
        <iframe
          src={`https://player.vimeo.com/video/${videoId}?autoplay=1&loop=1&muted=1&background=1&autopause=0`}
          className="prewedding-full-video-frame"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Pre Wedding Location Video"
        />
      </div>
    </section>
  );
}