import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import ArticleContent from "@/components/ArticleContent";
import {
  getBlogArticle,
  getBlogArticles,
} from "@/lib/blog-articles";

const SUPPORT_URL = "https://eny-support-page.vercel.app";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getBlogArticles().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticle(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getBlogArticle(slug);
  if (!article) notFound();

  const headings = article.blocks.filter(
    (block): block is Extract<typeof block, { type: "heading" }> =>
      block.type === "heading",
  );
  const relatedArticles = getBlogArticles()
    .filter(
      (related) =>
        related.category === article.category && related.slug !== article.slug,
    )
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#f7f8fa] text-slate-900">
      <header className="bg-[#071426] px-5 pb-12 pt-28 text-white sm:px-8 sm:pb-16 sm:pt-36">
        <div className="mx-auto max-w-5xl">
          <nav aria-label="Breadcrumb" className="mb-9 text-sm text-white/55">
            <Link href="/" className="transition-colors hover:text-gold">
              Home
            </Link>
            <span className="mx-2 text-white/30">/</span>
            <Link href="/blog" className="transition-colors hover:text-gold">
              Articles
            </Link>
            <span className="mx-2 text-white/30">/</span>
            <span className="text-white/80">{article.category}</span>
          </nav>

          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-wider text-gold">
              {article.category}
            </span>
            <span className="text-sm text-white/45">
              Article {String(article.number).padStart(2, "0")}
            </span>
            <span aria-hidden="true" className="text-white/30">·</span>
            <span className="text-sm text-white/45">
              {article.readMinutes} min read
            </span>
          </div>

          <h1 className="max-w-4xl font-serif text-4xl leading-[1.12] sm:text-6xl">
            {article.title}
          </h1>
          <p className="mt-7 max-w-3xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
            {article.excerpt}
          </p>
        </div>
      </header>

      <figure className="mx-auto max-w-6xl px-5 pt-8 sm:px-8 sm:pt-10">
        <div className="relative aspect-[16/8] overflow-hidden rounded-3xl bg-slate-200 shadow-lg sm:aspect-[16/7]">
          <Image
            src={article.image.src}
            alt={article.image.alt}
            fill
            priority
            sizes="(min-width: 1280px) 1152px, calc(100vw - 40px)"
            className="object-cover"
          />
        </div>
      </figure>

      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[minmax(0,1fr)_260px]">
        <article className="min-w-0 rounded-3xl border border-slate-200/80 bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-12">
          <ArticleContent blocks={article.blocks} />

          <section className="mt-12 rounded-3xl bg-[#071426] p-7 text-white sm:p-9">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-gold">
              Sales & enrollment support
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl">
              Want to discuss a program?
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-white/65">
              Visit the support page to contact the Business Analysis School
              team about programs and enrollment.
            </p>
            <a
              href={SUPPORT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gold px-5 py-3.5 text-sm font-bold text-[#071426] no-underline transition-colors hover:bg-white"
            >
              Contact Sales & Enrollment Support
              <span className="material-symbols-outlined text-base" aria-hidden="true">
                open_in_new
              </span>
            </a>
          </section>
        </article>

        <aside className="space-y-6">
          {headings.length > 0 && (
            <nav className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm lg:sticky lg:top-8">
              <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-800">
                In this article
              </h2>
              <ul className="space-y-3">
                {headings.map((heading, index) => (
                  <li key={`${heading.text}-${index}`}>
                    <a
                      href={`#${heading.id}`}
                      className="text-sm leading-5 text-slate-600 transition-colors hover:text-orchid"
                    >
                      {heading.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
          <div className="rounded-3xl border border-slate-200/80 bg-white p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-orchid">
              Keep exploring
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Browse the complete collection of Business Analysis School
              articles.
            </p>
            <Link
              href="/blog"
              className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#10233d] no-underline hover:text-orchid"
            >
              All articles
              <span className="material-symbols-outlined text-base" aria-hidden="true">
                arrow_forward
              </span>
            </Link>
          </div>
        </aside>
      </div>

      {relatedArticles.length > 0 && (
        <section className="mx-auto max-w-6xl px-5 pb-14 sm:px-8 sm:pb-20">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-orchid">
                {article.category}
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl">
                Continue reading
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-sm font-bold text-slate-600 no-underline hover:text-orchid"
            >
              View all
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {relatedArticles.map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}`}
                className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-900 no-underline transition-all hover:-translate-y-1 hover:border-orchid/30 hover:shadow-lg"
              >
                <span className="text-xs text-slate-400">
                  {related.readMinutes} min read
                </span>
                <h3 className="mt-3 font-serif text-xl leading-snug">
                  {related.title}
                </h3>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-orchid">
                  Read article
                  <span className="material-symbols-outlined text-base" aria-hidden="true">
                    arrow_forward
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
