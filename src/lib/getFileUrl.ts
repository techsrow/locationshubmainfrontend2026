// const BASE_URL = "https://api.pagedaddy.in/uploads";
const BASE_URL = "https://api.locationshub.in/uploads";

export const buildImageUrl = (file: string) => {
  if (!file) return "";

  // if already full url
  if (file.startsWith("http")) return file;

  // remove leading slashes
  const clean = file.replace(/^\/+/, "");

  return `${BASE_URL}/${clean}`;
};
