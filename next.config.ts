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
 
 typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    remotePatterns: [
     
      {
  protocol: "http",
  hostname: "localhost",
  port: "5000",
  pathname: "/uploads/**",
},
{
  protocol: "http",
  hostname: "192.168.137.1",
  port: "5000",
  pathname: "/uploads/**",
},

      {
  protocol: "http",
  hostname: "localhost",
  port: "5000",
  pathname: "/uploads/**",
},

       {
        protocol: "https",
        hostname: "api.ettire.in",
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
      "ettire.in",
      "www.ettire.in",
      "api.ettire.in"
      
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

    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google.com https://www.gstatic.com https://checkout.razorpay.com https://api.razorpay.com; " +

    "frame-src 'self' https://player.vimeo.com https://www.youtube.com https://www.youtube-nocookie.com https://www.google.com https://checkout.razorpay.com https://api.razorpay.com http://localhost:5000 https://ettire.in https://api.ettire.in; " +

    "img-src 'self' data: https: http: blob:; " +

    "style-src 'self' 'unsafe-inline'; " +

    "font-src 'self' data: https:; " +

    "connect-src 'self' https://www.google.com https://www.gstatic.com https://api.locationshub.in https://checkout.razorpay.com https://api.razorpay.com https://lumberjack.razorpay.com http://localhost:3000 http://localhost:5000 https://ettire.in https://api.ettire.in;"
}
        ],
      },
    ];
  },
};

export default nextConfig;