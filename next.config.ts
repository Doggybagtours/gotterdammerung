import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
        pathname: "/vi/**",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/en", destination: "/", permanent: false },
      { source: "/en/:path*", destination: "/:path*", permanent: false },
      { source: "/music", destination: "/discography", permanent: true },
      { source: "/videos", destination: "/video", permanent: true },
      { source: "/gallery", destination: "/band", permanent: true },
    ];
  },
};

export default nextConfig;
