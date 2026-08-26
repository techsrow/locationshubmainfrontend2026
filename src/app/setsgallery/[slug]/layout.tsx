import type { Metadata } from "next";
import { getSeo } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

const seo = await getSeo(
  `setsgallery-${slug}`
);

if (!seo) {
  return {
    title: "Locations Hub | Premium Sets For Shoots",
    description:
      "Locations Hub is situated on a sprawling and picturesque 5-acre piece of land.",
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
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: seo.metaTitle,
      description: seo.metaDescription,
      images: [imageUrl],
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