// src/lib/getGalleryImageUrl.ts
export const getGalleryImageUrl = (
  imageUrl?: string
) => {
  if (!imageUrl) return "/placeholder.jpg";

  return `${process.env.NEXT_PUBLIC_FILE_URL}${imageUrl}`;
};