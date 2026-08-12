const FILE_BASE_URL = process.env.NEXT_PUBLIC_FILE_URL ?? "";

export const getFileUrl = (path: string) => {
  if (!path) return "";

  if (path.startsWith("http")) return path;

  const base = FILE_BASE_URL.replace(/\/$/, ""); // remove trailing slash
  const cleanPath = path.replace(/^\//, ""); // remove leading slash

  return `${base}/${cleanPath}`;
};
