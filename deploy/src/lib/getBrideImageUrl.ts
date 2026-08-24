export const getBrideImageUrl = (path: string): string => {
  if (!path) return "";

  const baseUrl = process.env.NEXT_PUBLIC_FILE_URL;

  if (!baseUrl) {
    console.error("NEXT_PUBLIC_FILE_URL is not defined");
    return "";
  }

  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  return `${baseUrl}/${cleanPath}`;
};
