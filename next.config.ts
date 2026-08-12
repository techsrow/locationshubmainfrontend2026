// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   output: "standalone",

//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "api.locationshub.in",
//         pathname: "/uploads/**",
//       },
//     ],
//   },

//   async headers() {
//     return [
//       {
//         source: "/(.*)",
//         headers: [
//           {
//             key: "Content-Security-Policy",
//             value:
//               "default-src 'self'; " +
//               "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google.com https://www.gstatic.com https://checkout.razorpay.com https://api.razorpay.com; " +
//               "frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com https://www.google.com https://checkout.razorpay.com https://api.razorpay.com; " +
//               "img-src 'self' data: https:; " +
//               "style-src 'self' 'unsafe-inline'; " +
//               "font-src 'self' data: https:; " +
//               "connect-src 'self' https://www.google.com https://www.gstatic.com https://api.locationshub.in https://checkout.razorpay.com https://api.razorpay.com https://lumberjack.razorpay.com;",
//           },
//         ],
//       },
//     ];
//   },
// };

// export default nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.locationshub.in",
        pathname: "/uploads/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "/**",
      },
    ],

    domains: [
      "api.locationshub.in",
      "localhost",
      "www.locationshub.in",
      "locationshub.in",
    ],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; " +

              // ✅ scripts
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google.com https://www.gstatic.com https://checkout.razorpay.com https://api.razorpay.com; " +

              // 🔥 FIX HERE (added + at end)
              "frame-src 'self' https://player.vimeo.com https://www.youtube.com https://www.youtube-nocookie.com https://www.google.com https://checkout.razorpay.com https://api.razorpay.com; " +

              // ✅ images
              "img-src 'self' data: https: http: blob:; " +

              // ✅ styles
              "style-src 'self' 'unsafe-inline'; " +

              // ✅ fonts
              "font-src 'self' data: https:; " +

              // ✅ connect
              "connect-src 'self' https://www.google.com https://www.gstatic.com https://api.locationshub.in https://checkout.razorpay.com https://api.razorpay.com https://lumberjack.razorpay.com http://localhost:3000;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;