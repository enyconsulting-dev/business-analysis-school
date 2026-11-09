import type { Metadata } from "next";
import BlogIndex from "@/components/BlogIndex";
import { getBlogArticles } from "@/lib/blog-articles";

export const metadata: Metadata = {
  title: "Articles on Business Analysis, Consulting and AI",
  description:
    "Practical articles on business analysis, consulting, AI literacy, workflows, and career development.",
};

export default function BlogPage() {
  return <BlogIndex articles={getBlogArticles()} />;
}
