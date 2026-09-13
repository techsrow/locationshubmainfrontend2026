
// import Footer from "./components/footer/Footer";
// import Header from "./components/header/Header";
// import { ModalProvider } from "./components/modal/ModalProvider";
// import "./globals.css";
// import { Roboto } from "next/font/google";
// import localFont from "next/font/local";
// import WhatsappFloat from "@/app/components/WhatsappFloat";
// import Script from "next/script";
// import { QuoteProvider } from "./components/quote/QuoteProvider";
// import { BookingProvider } from "./context/BookingContext";
// import { WeddingQuoteProvider } from "./components/quote/WeddingQuoteProvider";
// import ScrollRestoration from "./components/ScrollRestoration";
// import { CommercialShootProvider } from "./components/commercial-shoot/CommercialShootProvider";

// const roboto = Roboto({
//   subsets: ["latin"],
//   weight: ["400"],
//   variable: "--font-roboto",
//   display: "swap",
// });

// const quicksand = localFont({
//   src: [
//     {
//       path: "../../public/fonts/Quicksand/static/Quicksand-Regular.ttf",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/Quicksand/static/Quicksand-Medium.ttf",
//       weight: "500",
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/Quicksand/static/Quicksand-SemiBold.ttf",
//       weight: "600",
//       style: "normal",
//     },
//     {
//       path: "../../public/fonts/Quicksand/static/Quicksand-Bold.ttf",
//       weight: "700",
//       style: "normal",
//     },
//   ],
//   variable: "--font-quicksand",
//   display: "swap",
// });

// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   metadataBase: new URL("https://www.locationshub.in"),
// };

// export const viewport = {
//   width: "device-width",
//   initialScale: 1,
//   maximumScale: 1,
//   userScalable: false,
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${quicksand.variable} ${roboto.variable} ${quicksand.className} min-h-screen flex flex-col`}
//       >
//         <ScrollRestoration />
//         <Script
//   id="gtm4wp-datalayer"
//   strategy="beforeInteractive"
//   dangerouslySetInnerHTML={{
//     __html: `
//       var gtm4wp_datalayer_name = "dataLayer";
//       var dataLayer = dataLayer || [];
//       const gtm4wp_use_sku_instead = false;
//       const gtm4wp_currency = 'INR';
//       const gtm4wp_product_per_impression = 10;
//       const gtm4wp_clear_ecommerce = false;
//     `,
//   }}
// />

//         <Header />

//         <main className="flex-1">
//           {/* <ModalProvider>
//             <QuoteProvider>
//               <BookingProvider>
//                 {children}
//               </BookingProvider>
//             </QuoteProvider>

//             <WhatsappFloat />

//           </ModalProvider> */}

//           {/* <ModalProvider>
//   <QuoteProvider>
//     <WeddingQuoteProvider>
//       <BookingProvider>
//         {children}
//       </BookingProvider>
//     </WeddingQuoteProvider>
//   </QuoteProvider>

//   <WhatsappFloat />
// </ModalProvider> */}

// <ModalProvider>
//   <QuoteProvider>
//     <WeddingQuoteProvider>
//       <CommercialShootProvider>
//         <BookingProvider>
//           <ScrollRestoration />
//           {children}
//         </BookingProvider>
//       </CommercialShootProvider>
//     </WeddingQuoteProvider>
//   </QuoteProvider>

//   <WhatsappFloat />
// </ModalProvider>
//         </main>

//         <Footer />

//         <Script
//           src="https://checkout.razorpay.com/v1/checkout.js"
//           strategy="afterInteractive"
//         />
//       </body>
//     </html>
//   );
// }


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
import { WeddingQuoteProvider } from "./components/quote/WeddingQuoteProvider";

import { CommercialShootProvider } from "./components/commercial-shoot/CommercialShootProvider";

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

import type { Metadata } from "next";



export const metadata: Metadata = {
  metadataBase: new URL("https://www.locationshub.in"),
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
      <head>
  <script
    dangerouslySetInnerHTML={{
      __html: `
        if (typeof window !== 'undefined') {
          // 1. Disable native scroll restoration.
          if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
          }

          // 2. Neutralize Next.js's forced scrollTop = 0 on route transitions.
          //    We allow scrollTop assignments EXCEPT when they come from
          //    Next's internal disableSmoothScrollDuringRouteTransition.
          const desc = Object.getOwnPropertyDescriptor(Element.prototype, 'scrollTop');
          let suppressNextZeroSet = false;

          Object.defineProperty(document.documentElement, 'scrollTop', {
            get() { return desc.get.call(this); },
            set(v) {
              if (v === 0 && suppressNextZeroSet) return; // ignore Next's reset
              return desc.set.call(this, v);
            },
          });

          // Set the flag right before Next's router updates.
          // Next fires this on every route transition.
          const origPushState = history.pushState.bind(history);
          const origReplaceState = history.replaceState.bind(history);
          history.pushState = function (...args) {
            suppressNextZeroSet = true;
            const r = origPushState(...args);
            queueMicrotask(() => { suppressNextZeroSet = false; });
            return r;
          };
          history.replaceState = function (...args) {
            suppressNextZeroSet = true;
            const r = origReplaceState(...args);
            queueMicrotask(() => { suppressNextZeroSet = false; });
            return r;
          };

          // Also catch the popstate case (back/forward button).
          window.addEventListener('popstate', () => {
            suppressNextZeroSet = true;
            setTimeout(() => { suppressNextZeroSet = false; }, 0);
          });
        }
      `,
    }}
  />
</head>
      <body
        className={`${quicksand.variable} ${roboto.variable} ${quicksand.className} min-h-screen flex flex-col`}
      >
        <Script
          id="gtm4wp-datalayer"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var gtm4wp_datalayer_name = "dataLayer";
              var dataLayer = dataLayer || [];
              const gtm4wp_use_sku_instead = false;
              const gtm4wp_currency = 'INR';
              const gtm4wp_product_per_impression = 10;
              const gtm4wp_clear_ecommerce = false;
            `,
          }}
        />

        <Header />

        <main className="flex-1">
          <ModalProvider>
            <QuoteProvider>
              <WeddingQuoteProvider>
                <CommercialShootProvider>
                  <BookingProvider>
                 
                    {children}
                  </BookingProvider>
                </CommercialShootProvider>
              </WeddingQuoteProvider>
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