const FILE_BASE_URL = process.env.NEXT_PUBLIC_FILE_URL || "";

export const getMakeupArtistImageUrl = (path: string) => {
  if (!path) return "";
  if (path.startsWith("http")) return path;

  const base = FILE_BASE_URL.replace(/\/$/, "");
  const cleanPath = path.replace(/^\/+/, "");

  return `${base}/${cleanPath}`;
};
