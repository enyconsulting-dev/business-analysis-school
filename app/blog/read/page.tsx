import { redirect } from "next/navigation";
import { getBlogArticles } from "@/lib/blog-articles";

export default function LegacyBlogArticleRedirect() {
  const firstArticle = getBlogArticles()[0];
  if (!firstArticle) redirect("/blog");

  redirect(`/blog/${firstArticle.slug}`);
}
