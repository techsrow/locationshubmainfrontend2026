
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { ModalProvider } from "./components/modal/ModalProvider";
import "./globals.css";
import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import WhatsappFloat from "@/app/components/WhatsappFloat";
import Script from "next/script";
import { QuoteProvider } from "./components/quote/QuoteProvider";
import { BookingProvider } from "./context/BookingContext";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-roboto",
  display: "swap",
});

const quicksand = localFont({
  src: [
    {
      path: "../../public/fonts/Quicksand/static/Quicksand-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Quicksand/static/Quicksand-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Quicksand/static/Quicksand-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Quicksand/static/Quicksand-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-quicksand",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://booking.locationshub.in"),

  title: "Location Hub | Premium Sets For Shoots",

  description:
    "Locations Hub is situated on a sprawling and picturesque 5-acre piece of land. It is ideal for shooting just about anything- a film, a fashion show, a web series, pre wedding shoots or just to indulge in the great landscape",



  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxImagePreview: "large",
      maxSnippet: -1,
      maxVideoPreview: -1,
    },
  },

  alternates: {
    canonical: "https://www.locationshub.in",
  },

  openGraph: {
    title: "Location Hub | Premium Sets For Shoots",
    description:
      "Locations Hub is situated on a sprawling and picturesque 5-acre piece of land. It is ideal for shooting just about anything- a film, a fashion show, a web series, pre wedding shoots or just to indulge in the great landscape",
    url: "https://www.locationshub.in",
    siteName: "Locations Hub",
    locale: "en_US",
    type: "website",

    images: [
      {
        url: "https://booking.locationshub.in/wp-content/uploads/2024/09/locations-for-shoot-1.jpg",
        width: 1200,
        height: 630,
        alt: "Locations Hub",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Location Hub | Premium Sets For Shoots",
    description:
      "Locations Hub is situated on a sprawling and picturesque 5-acre piece of land. It is ideal for shooting just about anything- a film, a fashion show, a web series, pre wedding shoots or just to indulge in the great landscape",
    images: [
      "https://booking.locationshub.in/wp-content/uploads/2024/09/locations-for-shoot-1.jpg",
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.variable} ${roboto.variable} ${quicksand.className} min-h-screen flex flex-col`}
      >
        <Script
          id="gtm4wp-datalayer"
          strategy="beforeInteractive"
        >
          {`
            var gtm4wp_datalayer_name = "dataLayer";
            var dataLayer = dataLayer || [];
            const gtm4wp_use_sku_instead = false;
            const gtm4wp_currency = 'INR';
            const gtm4wp_product_per_impression = 10;
            const gtm4wp_clear_ecommerce = false;
          `}
        </Script>

        <Header />

        <main className="flex-1">
          <ModalProvider>
            <QuoteProvider>
              <BookingProvider>
                {children}
              </BookingProvider>
            </QuoteProvider>

            <WhatsappFloat />
          </ModalProvider>
        </main>

        <Footer />

        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

