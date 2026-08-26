import type { Metadata } from "next";
import { getSeo } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSeo("setup");

  if (!seo) {
    return {
      title: "Locations Hub | Setup Gallery",
      description:
        "Explore premium shoot setups at Locations Hub.",
    };
  }

  const imageUrl = seo.ogImage
    ? seo.ogImage.startsWith("http")
      ? seo.ogImage
      : `${process.env.NEXT_PUBLIC_FILE_URL}${seo.ogImage}`
    : undefined;

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,

    openGraph: {
      title: seo.metaTitle,
      description: seo.metaDescription,
      images: imageUrl
        ? [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
            },
          ]
        : [],
    },

    twitter: {
      card: "summary_large_image",
      title: seo.metaTitle,
      description: seo.metaDescription,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}