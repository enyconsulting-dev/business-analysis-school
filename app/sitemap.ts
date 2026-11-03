import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-config";

const publicRoutes = [
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
  "/programs",
  "/resources",
  "/success-stories",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((path) => ({
    url: new URL(path, siteUrl).toString(),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
