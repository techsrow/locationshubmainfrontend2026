// lib/pages.ts

import api from "@/lib/api";

export async function getPageBySlug(slug: string) {
  const res = await api.get(`/pages/slug/${slug}`);
  return res.data.data;
}