import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

const publicPaths = [
  "/",
  "/about",
  "/ai-accelerator",
  "/blog",
  "/blog/read",
  "/book",
  "/career-consultation",
  "/certifications",
  "/contact",
  "/corporate-training",
  "/free-training",
  "/free-training/video",
  "/program",
  "/programs",
  "/resources",
  "/success-stories",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return publicPaths.map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: path === "/" || path === "/blog" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/blog" ? 0.9 : 0.7,
    ...(path === "/book" ? { images: [`${SITE_URL}/six-figure.webp`] } : {}),
  })) satisfies MetadataRoute.Sitemap;
}
