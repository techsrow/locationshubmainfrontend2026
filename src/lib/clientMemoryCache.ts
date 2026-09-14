"use client";

import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";

/**
 * Small in-memory cache for client-side route revisits.
 *
 * Next.js App Router can remount client components when navigating Back/Forward.
 * Keeping already-fetched data and small view-state values here prevents pages
 * from collapsing or resetting while the global scroll restorer is returning
 * the user to the previous position.
 *
 * The cache intentionally lives only for the lifetime of the current tab/app.
 * Refreshing the tab starts with fresh UI state.
 */
const cache = new Map<string, unknown>();

export function getClientMemoryCache<T>(key: string): T | undefined {
  return cache.get(key) as T | undefined;
}

export function setClientMemoryCache<T>(key: string, value: T): void {
  cache.set(key, value);
}

export function hasClientMemoryCache(key: string): boolean {
  return cache.has(key);
}

/**
 * useState-compatible helper that remembers a value across App Router
 * unmount/remount cycles. Use this only for view/navigation state (filters,
 * load-more counts, open FAQ item, already-fetched display data), not for
 * checkout/payment/submission state.
 */
export function useClientMemoryState<T>(
  key: string,
  initialValue: T | (() => T),
): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    const cached = getClientMemoryCache<T>(key);
    if (cached !== undefined) return cached;

    const initial =
      typeof initialValue === "function"
        ? (initialValue as () => T)()
        : initialValue;

    setClientMemoryCache(key, initial);
    return initial;
  });

  const setRememberedValue: Dispatch<SetStateAction<T>> = (nextValue) => {
    setValue((previousValue) => {
      const resolvedValue =
        typeof nextValue === "function"
          ? (nextValue as (previous: T) => T)(previousValue)
          : nextValue;

      setClientMemoryCache(key, resolvedValue);
      return resolvedValue;
    });
  };

  return [value, setRememberedValue];
}
