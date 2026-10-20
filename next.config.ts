import type { NextConfig } from "next";

// Performance: every photo is served through Next's image optimizer without changing any URL.
// Originals live in public/_src/{images,media}; requests to /images/* and /media/* are rewritten
// to /_next/image, which returns AVIF/WebP at q80, never upscaled, cached at the edge.
// Videos (.mp4) stay as plain files in public/images.
const optimized = (dir: string) => ({
  source: `/${dir}/:file((?!.*\\.(?:mp4|webm|svg)$).*)`,
  destination: `/_next/image?url=%2F_src%2F${dir}%2F:file&w=1920&q=80`,
});

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async rewrites() {
    return { beforeFiles: [optimized("images"), optimized("media")], afterFiles: [], fallback: [] };
  },
  async headers() {
    return [{ source: "/lottie/:path*", headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }] }];
  },
};

export default nextConfig;
