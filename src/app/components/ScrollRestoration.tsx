// app/components/ScrollRestoration.tsx
"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function ScrollRestoration() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const restoreAttempts = useRef(0);
  const maxAttempts = 10;

  useEffect(() => {
    // Disable browser's default scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const queryString = searchParams?.toString() || "";
    const scrollKey = `scroll-${pathname}${queryString ? `-${queryString}` : ""}`;

    // Force restore function
    const forceRestore = () => {
      const saved = sessionStorage.getItem(scrollKey);
      
      if (saved !== null) {
        const position = parseInt(saved, 10);
        
        // Force scroll immediately
        window.scrollTo(0, position);
        
        // Force scroll after each frame for multiple attempts
        let attempts = 0;
        const interval = setInterval(() => {
          attempts++;
          if (window.scrollY !== position) {
            window.scrollTo(0, position);
          }
          if (attempts >= 10 || window.scrollY === position) {
            clearInterval(interval);
          }
        }, 100);

        // Also try on load events
        const retryOnLoad = () => {
          window.scrollTo(0, position);
        };

        window.addEventListener("load", retryOnLoad);
        window.addEventListener("pageshow", retryOnLoad);

        return () => {
          clearInterval(interval);
          window.removeEventListener("load", retryOnLoad);
          window.removeEventListener("pageshow", retryOnLoad);
        };
      }
    };

    // Save function
    const saveScroll = () => {
      const currentY = window.scrollY;
      if (currentY > 0) {
        sessionStorage.setItem(scrollKey, String(currentY));
      }
    };

    // Save on scroll with debouncing
    let scrollTimer: NodeJS.Timeout | null = null;
    const handleScroll = () => {
      if (scrollTimer) {
        clearTimeout(scrollTimer);
      }
      scrollTimer = setTimeout(saveScroll, 100);
    };

    // Save on navigation
    const handleBeforeUnload = () => {
      saveScroll();
    };

    // Force restore immediately
    const cleanup = forceRestore();

    // Set up scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Also save on visibility change
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        saveScroll();
      }
    });

    // Cleanup
    return () => {
      if (cleanup) cleanup();
      saveScroll();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("beforeunload", handleBeforeUnload);
      if (scrollTimer) {
        clearTimeout(scrollTimer);
      }
    };
  }, [pathname, searchParams]);

  return null;
}