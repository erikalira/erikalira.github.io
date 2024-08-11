/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  images: { unoptimized: true },
};

export default nextConfig;
