const FILE_BASE_URL = process.env.NEXT_PUBLIC_FILE_URL || "";

export const getPropImageUrl = (path: string) => {
  if (!path) return "";

  if (path.startsWith("http")) return path;

  const base = FILE_BASE_URL.replace(/\/$/, "");
  const cleanPath = path.replace(/^\/+/, "");

  // 👇 Props images are inside /uploads
  return `${base}/uploads/${cleanPath}`;
};
