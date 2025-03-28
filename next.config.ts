import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "yjzevvwntmqbazezezmt.supabase.co",
        port: "",
        pathname: "/storage/v1/object/sign/cabin-images/**",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // Disable ESLint errors during build (deployment)
  },
};

export default nextConfig;
