"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { submitToWebhook } from "@/lib/webhook";

const articles = [
  {
    title:
      "The Future of Business Analysis: AI, Data, and Strategic Thinking in 2025",
    category: "Industry Trends",
    date: "Oct 24, 2024",
    readingTime: "8 min read",
    excerpt:
      "As artificial intelligence reshapes industries, the role of the Business Analyst is evolving from requirements gathering to strategic consulting. Here's what you need to know to stay ahead of the curve.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAMHnjELQMbxN4RaCJ74GfXaOHWAfJ7AB4sPfCpbsHVWmRzqGNMvMzUgKVCSQVqnxImiUY2QTmiUYWvISVl6VkNmso89f9b1WJKqvi7PtKBum6DWBXOOM_h5KKl1YEFRuCAOEQIJs0bsj8_Gvx8WJtQ5FJPXZxT3dDT9j587bFH4tzBDgZtmqOcEOQmNOcBDei1rLrkCeSbF9ATZq5W0FWCsKXT7UH1Kr40GAZc4wX1cSt8qogwI0QNav1fty5mQ_dbmKeIvgDl70Q",
  },
];

const categories = ["All Posts", ...new Set(articles.map((article) => article.category))];

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Posts");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      activeCategory === "All Posts" || article.category === activeCategory;
    const searchText =
      `${article.title} ${article.category} ${article.excerpt}`.toLowerCase();
    return matchesCategory && searchText.includes(search.trim().toLowerCase());
  });

  async function handleSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      await submitToWebhook({
        source: "BAS",
        tag: "BAS Newsletter Signup",
        type: "newsletter",
        event_type: "newsletter_signup",
        email,
        tags: "Newsletter Signup, Blog Footer",
      });
      setIsSuccess(true);
      setEmail("");
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "We couldn't subscribe you right now. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <section className="relative w-full border-b border-gray-100 bg-white pt-16 pb-12 lg:pt-24 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-black text-gray-900 md:text-5xl lg:text-6xl">
            Insights for Your <br className="hidden sm:block" />{" "}
            <span className="text-primary">Business Analysis Journey</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600">
            Expert advice and industry trends to help you navigate your business
            analysis career.
          </p>
          <div className="mx-auto max-w-3xl">
            <label className="sr-only" htmlFor="article-search">
              Search articles
            </label>
            <div className="relative mb-8">
              <span className="material-symbols-outlined absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                search
              </span>
              <input
                id="article-search"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 py-4 pl-12 pr-4 text-gray-700 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Search articles, topics, or keywords..."
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </div>
            <div className="flex flex-wrap justify-center gap-3" aria-label="Filter by category">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  aria-pressed={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full border px-5 py-2 text-sm font-semibold transition-colors ${
                    activeCategory === category
                      ? "border-accent bg-accent text-white shadow-md"
                      : "border-gray-200 bg-white text-gray-600 hover:border-accent hover:text-accent"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <main className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-gray-500">
            {activeCategory === "All Posts" ? "Articles" : activeCategory}
          </h2>
          {filteredArticles.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredArticles.map((article) => (
                <article
                  key={article.title}
                  className="group flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all hover:shadow-lg"
                >
                  <Link href="/blog/read" className="flex h-full flex-col no-underline">
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        alt="Team analyzing business data"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        src={article.image}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="flex flex-grow flex-col p-6">
                      <div className="mb-3 flex items-center gap-3">
                        <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-bold text-accent">
                          {article.category}
                        </span>
                        <time className="text-xs text-gray-500">{article.date}</time>
                      </div>
                      <h3 className="mb-3 text-xl font-bold leading-tight text-gray-900 transition-colors group-hover:text-primary">
                        {article.title}
                      </h3>
                      <p className="mb-6 text-sm leading-relaxed text-gray-600">
                        {article.excerpt}
                      </p>
                      <span className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4 text-sm">
                        <span className="font-medium text-gray-500">{article.readingTime}</span>
                        <span className="flex items-center gap-1 font-bold text-primary">
                          Read article
                          <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </span>
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <p className="rounded-xl border border-gray-100 bg-gray-50 p-8 text-center text-gray-600">
              No articles match your search. Try another keyword or category.
            </p>
          )}
          <p className="mt-6 text-center text-sm text-gray-500">
            Showing {filteredArticles.length} of {articles.length} published articles.
          </p>
        </div>
      </main>

      <section id="blog-newsletter" className="bg-gradient-to-r from-primary to-primary-dark py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Stay Updated on Business Analysis Trends
          </h2>
          <p className="mb-8 text-lg text-blue-100">
            Subscribe to receive Business Analysis School updates by email.
          </p>
          {isSuccess ? (
            <p role="status" className="mx-auto max-w-lg rounded-lg bg-white/10 px-4 py-4 font-bold text-white">
              Your subscription has been received.
            </p>
          ) : (
            <form onSubmit={handleSubscribe} className="mx-auto flex max-w-lg flex-col gap-4 sm:flex-row">
              <label className="sr-only" htmlFor="newsletter-email">Email address</label>
              <input
                id="newsletter-email"
                required
                className="flex-grow rounded-lg border-2 border-transparent px-5 py-3 text-gray-900 placeholder-gray-500 focus:border-accent focus:ring-0"
                placeholder="Enter your email address"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                disabled={isSubmitting}
              />
              <button
                disabled={isSubmitting}
                className="flex min-w-[140px] items-center justify-center rounded-lg bg-accent px-8 py-3 font-bold text-white shadow-lg transition-transform hover:-translate-y-0.5 disabled:opacity-60"
                type="submit"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          )}
          {error && <p role="alert" className="mt-4 text-sm text-white">{error}</p>}
        </div>
      </section>
    </>
  );
}
