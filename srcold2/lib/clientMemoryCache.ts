/**
 * Small in-memory cache for client-side route revisits.
 *
 * Next.js App Router can remount client components when navigating Back/Forward.
 * Keeping already-fetched homepage data here prevents those sections from
 * collapsing to an empty/loading state while scroll restoration is running.
 * The cache intentionally lives only for the lifetime of the current tab/app.
 */
const cache = new Map<string, unknown>();

export function getClientMemoryCache<T>(key: string): T | undefined {
  return cache.get(key) as T | undefined;
}

export function setClientMemoryCache<T>(key: string, value: T): void {
  cache.set(key, value);
}
