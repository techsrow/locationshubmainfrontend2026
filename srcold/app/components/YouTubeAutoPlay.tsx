// 

"use client";

interface YouTubeProps {
  videoId: string;
}

export default function YouTubeAutoPlay({ videoId }: YouTubeProps) {
  return (
    <div className="relative w-full aspect-video  overflow-hidden">
      <iframe
        className="absolute inset-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&origin=https://locationshub.in`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}