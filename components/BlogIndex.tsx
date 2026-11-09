"use client";

import Link from "next/link";
import { useMemo, useState, type FormEvent } from "react";
import type { BlogArticle } from "@/lib/blog-articles";
import { submitToWebhook } from "@/lib/webhook";

const SUPPORT_URL = "https://eny-support-page.vercel.app";

interface BlogIndexProps {
  articles: BlogArticle[];
}

export default function BlogIndex({ articles }: BlogIndexProps) {
  const categories = useMemo(
    () => [...new Set(articles.map((article) => article.category))],
    [articles],
  );
  const [activeCategory, setActiveCategory] = useState("All topics");
  const [search, setSearch] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [subscriptionError, setSubscriptionError] = useState("");

  const handleSubscribe = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubscriptionError("");

    try {
      const result = await submitToWebhook({
        source: "BAS",
        tag: "BAS Newsletter Signup",
        type: "newsletter",
        event_type: "newsletter_signup",
        email,
        tags: "Newsletter Signup, Blog Footer",
      });

      if (!result.success) {
        setSubscriptionError(
          "We couldn't complete your subscription. Please try again.",
        );
        return;
      }

      setIsSubscribed(true);
      setEmail("");
    } catch {
      setSubscriptionError(
        "We couldn't complete your subscription. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      activeCategory === "All topics" || article.category === activeCategory;
    const query = search.trim().toLowerCase();
    const matchesSearch =
      !query ||
      `${article.title} ${article.category} ${article.excerpt}`
        .toLowerCase()
        .includes(query);

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#f7f8fa] text-slate-900">
      <section className="relative overflow-hidden bg-[#071426] px-5 pb-16 pt-28 text-white sm:px-8 sm:pb-20 sm:pt-36">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-orchid/20 blur-3xl" />
        <div className="relative mx-auto max-w-6xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-gold">
            Business Analysis School · Insights
          </p>
          <h1 className="max-w-4xl font-serif text-4xl leading-tight sm:text-6xl">
            Practical perspectives for the work{" "}
            <span className="italic text-gold">ahead.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
            Explore business analysis, consulting, career development, and
            practical ways to work with AI.
          </p>

          <label className="mt-10 flex max-w-2xl items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.07] px-5 py-4 shadow-xl focus-within:border-gold/60">
            <span className="material-symbols-outlined text-white/50" aria-hidden="true">
              search
            </span>
            <span className="sr-only">Search articles</span>
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search articles by topic or title"
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/40"
            />
          </label>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="mb-9 flex flex-wrap gap-2" aria-label="Filter by topic">
          {["All topics", ...categories].map((category) => {
            const selected = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                aria-pressed={selected}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  selected
                    ? "border-[#071426] bg-[#071426] text-white"
                    : "border-slate-200 bg-white text-slate-600 hover:border-orchid hover:text-orchid"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="mb-5 flex items-center justify-between">
          <h2 className="font-serif text-2xl sm:text-3xl">The articles</h2>
          <p className="text-sm text-slate-500">
            {filteredArticles.length}{" "}
            {filteredArticles.length === 1 ? "article" : "articles"}
          </p>
        </div>

        {filteredArticles.length ? (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article) => (
              <article
                key={article.slug}
                className="group flex h-full flex-col rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-orchid/30 hover:shadow-xl"
              >
                <div className="mb-7 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-[#f4eff7] px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-wider text-orchid">
                    {article.category}
                  </span>
                  <span className="text-xs text-slate-400">
                    {article.readMinutes} min read
                  </span>
                </div>
                <h3 className="mb-4 font-serif text-[1.4rem] leading-snug text-[#10233d]">
                  <Link
                    href={`/blog/${article.slug}`}
                    className="transition-colors group-hover:text-orchid focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-orchid"
                  >
                    {article.title}
                  </Link>
                </h3>
                <p className="mb-8 flex-1 text-sm leading-6 text-slate-600">
                  {article.excerpt}
                </p>
                <Link
                  href={`/blog/${article.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#10233d] no-underline transition-colors hover:text-orchid"
                >
                  Read article
                  <span className="material-symbols-outlined text-base" aria-hidden="true">
                    arrow_forward
                  </span>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
            <p className="font-serif text-2xl">No articles found</p>
            <p className="mt-2 text-sm text-slate-500">
              Try a different search or choose another topic.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setActiveCategory("All topics");
              }}
              className="mt-6 rounded-xl bg-[#071426] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-orchid"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
        <div className="mb-8 rounded-3xl border border-slate-200/80 bg-white p-7 sm:p-9">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-orchid">
              The BAS newsletter
            </p>
            <h2 className="font-serif text-2xl text-[#10233d] sm:text-3xl">
              Get new insights in your inbox.
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Occasional articles and updates on business analysis, consulting,
              and practical AI.
            </p>
            {isSubscribed ? (
              <p className="mt-6 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800" role="status">
                Thanks for subscribing.
              </p>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="mt-6 flex flex-col gap-3 sm:flex-row"
              >
                <label className="sr-only" htmlFor="blog-newsletter-email">
                  Email address
                </label>
                <input
                  id="blog-newsletter-email"
                  required
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  disabled={isSubmitting}
                  placeholder="Your email address"
                  className="min-w-0 flex-1 rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-orchid focus:ring-2 focus:ring-orchid/15 disabled:opacity-60"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-xl bg-[#071426] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-orchid disabled:cursor-wait disabled:opacity-60"
                >
                  {isSubmitting ? "Submitting…" : "Subscribe"}
                </button>
                {subscriptionError && (
                  <p className="text-sm text-red-600 sm:basis-full" role="alert">
                    {subscriptionError}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-6 rounded-[2rem] bg-[#071426] p-8 text-white sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-gold">
              Sales & enrollment support
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl">
              Have a question about a program?
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/60">
              Visit the support page to contact the Business Analysis School
              team about programs and enrollment.
            </p>
          </div>
          <a
            href={SUPPORT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-gold px-6 py-4 text-sm font-bold text-[#071426] no-underline transition-colors hover:bg-white"
          >
            Contact Support
            <span className="material-symbols-outlined text-base" aria-hidden="true">
              open_in_new
            </span>
          </a>
        </div>
      </section>
    </div>
  );
}
