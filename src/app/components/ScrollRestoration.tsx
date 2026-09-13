"use client";

import { useEffect, useRef } from "react";

const ENTRY_KEY = "__locationshub_scroll_key";
const STORAGE_PREFIX = "locationshub:scroll:";

function createEntryKey() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
}

function storageKey(entryKey: string) {
  return `${STORAGE_PREFIX}${entryKey}`;
}

function getEntryKey(): string | null {
  const state = window.history.state as Record<string, unknown> | null;
  const value = state?.[ENTRY_KEY];
  return typeof value === "string" ? value : null;
}

function savePosition(entryKey?: string | null) {
  const key = entryKey ?? getEntryKey();
  if (!key) return;

  try {
    window.sessionStorage.setItem(storageKey(key), String(window.scrollY));
  } catch {
    // sessionStorage can be unavailable in restricted/private environments.
  }
}

function readPosition(entryKey: string): number | null {
  try {
    const raw = window.sessionStorage.getItem(storageKey(entryKey));
    if (raw === null) return null;

    const value = Number(raw);
    return Number.isFinite(value) && value >= 0 ? value : null;
  } catch {
    return null;
  }
}

/**
 * Global App Router scroll restoration.
 *
 * - Every browser history entry gets its own id.
 * - Scroll is saved for the current entry while the user moves around.
 * - Browser Back/Forward restores that exact entry's scrollY.
 * - New navigations are left to Next.js, so they still open at the top.
 * - Restoration retries while a long/dynamic page is rebuilding its height.
 */
export default function ScrollRestoration() {
  const restoringRef = useRef(false);
  const restoreRunRef = useRef(0);

  useEffect(() => {
    if (!("scrollRestoration" in window.history)) return;

    window.history.scrollRestoration = "manual";

    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;

    // Make sure the page that was open when the app booted has an entry id.
    if (!getEntryKey()) {
      originalReplaceState.call(
        window.history,
        {
          ...(window.history.state ?? {}),
          [ENTRY_KEY]: createEntryKey(),
        },
        "",
        window.location.href,
      );
    }

    const cancelRestore = () => {
      restoreRunRef.current += 1;
      restoringRef.current = false;
    };

    const restorePosition = (entryKey: string) => {
      const target = readPosition(entryKey);
      if (target === null) {
        restoringRef.current = false;
        return;
      }

      const runId = ++restoreRunRef.current;
      restoringRef.current = true;
      let frame = 0;
      let stableFrames = 0;

      const attempt = () => {
        if (runId !== restoreRunRef.current) return;

        frame += 1;

        const root = document.documentElement;
        const maxScroll = Math.max(0, root.scrollHeight - window.innerHeight);
        const requestedY = Math.min(target, maxScroll);

        window.scrollTo(0, requestedY);

        const targetIsReachable = maxScroll >= target;
        const atTarget = Math.abs(window.scrollY - target) <= 1;

        if (targetIsReachable && atTarget) {
          stableFrames += 1;
        } else {
          stableFrames = 0;
        }

        // A few stable paints prevents a route transition/layout paint from
        // immediately undoing the restored position.
        if (stableFrames >= 4 || frame >= 180) {
          restoringRef.current = false;
          return;
        }

        window.requestAnimationFrame(attempt);
      };

      // Let Next.js swap the route content first, then restore.
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(attempt);
      });
    };

    window.history.pushState = function pushState(data, unused, url) {
      // Save the page we are leaving before the history index changes.
      savePosition();
      cancelRestore();

      const nextState = {
        ...(data ?? {}),
        [ENTRY_KEY]: createEntryKey(),
      };

      return originalPushState.call(this, nextState, unused, url);
    };

    window.history.replaceState = function replaceState(data, unused, url) {
      // Next.js uses replaceState internally. Keep the id of the current
      // browser entry instead of accidentally creating a new scroll record.
      const key =
        (data && typeof data === "object" && ENTRY_KEY in data
          ? (data as Record<string, unknown>)[ENTRY_KEY]
          : null) ??
        getEntryKey() ??
        createEntryKey();

      const nextState = {
        ...(data ?? {}),
        [ENTRY_KEY]: key,
      };

      return originalReplaceState.call(this, nextState, unused, url);
    };

    let scrollRaf = 0;
    const onScroll = () => {
      if (restoringRef.current || scrollRaf) return;

      scrollRaf = window.requestAnimationFrame(() => {
        scrollRaf = 0;
        if (!restoringRef.current) savePosition();
      });
    };

    const onPopState = (event: PopStateEvent) => {
      cancelRestore();

      const state = event.state as Record<string, unknown> | null;
      const value = state?.[ENTRY_KEY];
      const key = typeof value === "string" ? value : getEntryKey();

      if (key) restorePosition(key);
    };

    const onPageHide = () => savePosition();

    // If the user intentionally interacts while a restoration is still
    // retrying, their input wins immediately.
    const onUserInteraction = () => {
      if (restoringRef.current) cancelRestore();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("popstate", onPopState);
    window.addEventListener("pagehide", onPageHide);
    window.addEventListener("wheel", onUserInteraction, { passive: true });
    window.addEventListener("touchstart", onUserInteraction, { passive: true });
    window.addEventListener("pointerdown", onUserInteraction, { passive: true });
    window.addEventListener("keydown", onUserInteraction);

    // Record the starting position as well (important after refresh/deep link).
    savePosition();

    return () => {
      savePosition();
      cancelRestore();

      if (scrollRaf) window.cancelAnimationFrame(scrollRaf);

      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
      window.history.scrollRestoration = "auto";

      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("popstate", onPopState);
      window.removeEventListener("pagehide", onPageHide);
      window.removeEventListener("wheel", onUserInteraction);
      window.removeEventListener("touchstart", onUserInteraction);
      window.removeEventListener("pointerdown", onUserInteraction);
      window.removeEventListener("keydown", onUserInteraction);
    };
  }, []);

  return null;
}
