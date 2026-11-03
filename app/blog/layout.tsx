import { createPageMetadata } from "@/lib/site-config";

export const metadata = createPageMetadata(
  "Business Analysis Insights",
  "Articles and insights about business analysis careers, skills, and industry trends.",
  "/blog",
);

export default function BlogLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
