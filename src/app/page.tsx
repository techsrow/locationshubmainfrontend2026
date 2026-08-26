import Image from "next/image";
import FadeSlider from "./components/slider/FadeSlider";
import PremiumSetsSection from "./components/sections/PremiumSetsSection";
import OurSetsSection from "./components/sections/OurSetsSection";
import AddOnServicesParallax from "./components/sections/AddOnServicesParallax";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import { getSeo } from "@/lib/seo";
import type { Metadata } from "next";


export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSeo("home");

  if (!seo) {
    return {
      title: "Location Hub | Premium Sets For Shoots",
      description: "Locations Hub is situated on a sprawling and picturesque 5-acre piece of land. It is ideal for shooting just about anything- a film, a fashion show, a web series, pre wedding shoots or just to indulge in the great landscape",
    };
  }

  const imageUrl = seo.ogImage
    ? `${process.env.NEXT_PUBLIC_FILE_URL}${seo.ogImage}`
    : undefined;

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title: seo.metaTitle,
      description: seo.metaDescription,
      url: "https://www.locationshub.in",
      siteName: "Locations Hub",
      type: "website",

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
export default function Home() {
  return (
    <>
      <FadeSlider />
       <PremiumSetsSection />
       <OurSetsSection />
       <AddOnServicesParallax/>
       <TestimonialsSection />
           {/* Other sections */}
    </>
  );
}
