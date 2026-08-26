const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getSeo(pageKey: string) {
  try {
    const res = await fetch(
      `${API_URL}/seo/${pageKey}`,
      {
        next: {
          revalidate: 300,
        },
      }
    );

    if (!res.ok) return null;

    const json = await res.json();

    return json.data;
  } catch {
    return null;
  }
}