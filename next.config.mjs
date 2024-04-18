/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scontent.fisb13-1.fna.fbcdn.net",
      },
      {
        protocol: "https",
        hostname: "static.xx.fbcdn.net",
      },
    ],
  },
};

export default nextConfig;
