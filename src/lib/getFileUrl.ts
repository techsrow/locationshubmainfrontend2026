const BASE_URL =
  process.env.NEXT_PUBLIC_FILE_URL ||
  "http://localhost:5000";

export const buildImageUrl = (file: string) => {
  if (!file) return "";

  // Already a full URL
  if (file.startsWith("http://") || file.startsWith("https://")) {
    return file;
  }

  const base = BASE_URL.replace(/\/$/, "");
  const clean = file.replace(/^\/+/, "");

  // Handle uploads/filename.jpg
  if (clean.startsWith("uploads/")) {
    return `${base}/${clean}`;
  }

  // Handle filename.jpg
  return `${base}/uploads/${clean}`;
};