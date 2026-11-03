import { createPageMetadata } from "@/lib/site-config";

export const metadata = createPageMetadata(
  "The Future of Business Analysis: AI, Data, and Strategic Thinking",
  "An article on how AI, data literacy, and strategic thinking are shaping the business analyst role.",
  "/blog/read",
);

export default function BlogArticleLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
