


// components/LazyVimeo.tsx
'use client';

import { useEffect, useRef, useState } from 'react';

interface LazyVimeoProps {
  videoId: string;
  hash: string;
  title: string;
}

export default function FullWidthVideoSectionNew({ videoId, hash, title }: LazyVimeoProps) {
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLoaded(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '200px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ position: 'relative', aspectRatio: '16/9', background: '#000' }}
    >
      {loaded && (
        <iframe
          src={`https://player.vimeo.com/video/1227853012?h=${hash}&autoplay=1&muted=1`}
          title={title}
          allow="autoplay; fullscreen"
          allowFullScreen
          style={{ width: '100%', height: '100%', border: 0, position: 'absolute', inset: 0 }}
        />
      )}
    </div>
  );
}

