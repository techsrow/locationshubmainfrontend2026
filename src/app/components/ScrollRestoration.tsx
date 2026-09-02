"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollRestoration() {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const savedPosition = sessionStorage.getItem(
      `scroll-${pathname}`
    );

    if (savedPosition) {
      setTimeout(() => {
        window.scrollTo(0, parseInt(savedPosition, 10));
      }, 50);
    }

    const saveScroll = () => {
      sessionStorage.setItem(
        `scroll-${pathname}`,
        String(window.scrollY)
      );
    };

    window.addEventListener("scroll", saveScroll);

    return () => {
      saveScroll();
      window.removeEventListener("scroll", saveScroll);
    };
  }, [pathname]);

  return null;
}