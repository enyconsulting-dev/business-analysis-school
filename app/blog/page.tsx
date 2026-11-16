"use client";

import { useState } from "react";
import { getSubmissionErrorMessage, submitToWebhook } from "@/lib/webhook";
import SubmissionError from "@/components/SubmissionError";
import { useSubmissionProtection } from "@/components/SubmissionProtection";

export default function BlogPage() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const protection = useSubmissionProtection();

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setIsSubmitting(true);
    setSubmitError("");

    try {
      await submitToWebhook({
        source: "BAS",
        tag: "BAS Newsletter Signup",
        type: "newsletter",
        event_type: "newsletter_signup",
        email: email,
        tags: "Newsletter Signup, Blog Footer"
      }, protection.token, form);
      setIsSuccess(true);
      setEmail("");
    } catch (error) {
      protection.reset();
      setSubmitError(getSubmissionErrorMessage(error));
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full bg-white pt-16 pb-12 lg:pt-24 lg:pb-20 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Insights for Your <br className="hidden sm:block" />{" "}
            <span className="text-primary">Business Analysis Journey</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Expert advice, industry trends, and success stories to help you
            navigate your career path from beginner to certified professional.
          </p>
          <div className="max-w-3xl mx-auto">
            <div className="relative mb-8">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                <span className="material-symbols-outlined">search</span>
              </span>
              <input
                className="w-full py-4 pl-12 pr-4 text-gray-700 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent shadow-sm"
                placeholder="Search for articles, topics, or keywords..."
                type="text"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <button className="px-5 py-2 rounded-full text-sm font-semibold bg-accent text-white shadow-md transition-transform hover:-translate-y-0.5">
                All Posts
              </button>
              <button className="px-5 py-2 rounded-full text-sm font-medium bg-white text-gray-600 border border-gray-200 hover:border-accent hover:text-accent transition-colors">
                Career Tips
              </button>
              <button className="px-5 py-2 rounded-full text-sm font-medium bg-white text-gray-600 border border-gray-200 hover:border-accent hover:text-accent transition-colors">
                IIBA Prep
              </button>
              <button className="px-5 py-2 rounded-full text-sm font-medium bg-white text-gray-600 border border-gray-200 hover:border-accent hover:text-accent transition-colors">
                Success Stories
              </button>
              <button className="px-5 py-2 rounded-full text-sm font-medium bg-white text-gray-600 border border-gray-200 hover:border-accent hover:text-accent transition-colors">
                Industry Trends
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <div className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Featured Article */}
          <div className="mb-16">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">
              Featured Article
            </h3>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 grid lg:grid-cols-2 hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 lg:h-auto overflow-hidden group">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <img
                  alt="Team analyzing business data on a large screen"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMHnjELQMbxN4RaCJ74GfXaOHWAfJ7AB4sPfCpbsHVWmRzqGNMvMzUgKVCSQVqnxImiUY2QTmiUYWvISVl6VkNmso89f9b1WJKqvi7PtKBum6DWBXOOM_h5KKl1YEFRuCAOEQIJs0bsj8_Gvx8WJtQ5FJPXZxT3dDT9j587bFH4tzBDgZtmqOcEOQmNOcBDei1rLrkCeSbF9ATZq5W0FWCsKXT7UH1Kr40GAZc4wX1cSt8qogwI0QNav1fty5mQ_dbmKeIvgDl70Q"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-accent">
                    Industry Trends
                  </span>
                  <span className="text-xs text-gray-500">Oct 24, 2024</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight hover:text-primary transition-colors cursor-pointer">
                  The Future of Business Analysis: AI, Data, and Strategic
                  Thinking in 2025
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  As artificial intelligence reshapes industries, the role of
                  the Business Analyst is evolving from requirements gathering
                  to strategic consulting. Here&apos;s what you need to know to
                  stay ahead of the curve.
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-gray-200 overflow-hidden">
                      <img
                        alt="Author"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzKl87cUT0PvbwvwElDRGbXleifEqK2jDWShcvP1edqrdkd-ZRhHT0Ni_PJgoVk20m7vuGxtE2biw5ZgiP7vKFVx9DFoOnmD7QkhZViX0k4jKidBr9-ry-X9L-TBgQ3-7bmDgbZQPlyEyQV2htl9GggfCD16oEnP_FHB2V_lY-Dcvfsce8bVqP7iuVVIX3UWRarW3vSMEcc4sMEfhY5inLze5xqa2QyBoPv83KYEF-f6TXTUahjnOhLgHdXUkYLRnlPyi7P9FXReY"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">Eno Eka</p>
                      <p className="text-xs text-gray-500">8 min read</p>
                    </div>
                  </div>
                  <a
                    className="inline-flex items-center justify-center size-10 rounded-full border border-gray-200 hover:bg-primary hover:border-primary hover:text-white transition-all text-primary"
                    href="#"
                  >
                    <span className="material-symbols-outlined">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Latest Articles */}
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-8">
            Latest Articles
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Article 1 */}
            <article className="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
              <div className="relative h-56 overflow-hidden">
                <img
                  alt="Students studying together"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqoSgSkJTBagDIfts2PlUcyV4qFjcUYDAcRB58UlZaxsFbXFu9ngGSlNAjNITmeoSV15sHcgEqE8U11RZj2PQ6WGaX9LowZwLr97GP-SLXSdPXCGwzUZ8h5x9tF2mZx-DRgSsmq8zeo2yvpRlKQFEgS9obmdp2IfUqNEtq_v_07O4mg2i8VFyKegx1ZjDUI9_s7A9NvhIOb62oFbh0TAdBd8nyyF_wyjZf-c2qLpBSg45LtbDqqpALvKQFnmJZuzQhWaIuTSlFgj4"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded bg-white/90 backdrop-blur text-xs font-bold text-accent shadow-sm">
                    IIBA Prep
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  How to Pass the ECBA Exam on Your First Try
                </h3>
                <p className="text-sm text-gray-600 mb-6 line-clamp-3">
                  A step-by-step study guide breaking down the BABOK guide, key
                  knowledge areas, and effective exam strategies for beginners.
                </p>
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-500">
                    5 min read
                  </span>
                  <a
                    className="text-sm font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all"
                    href="#"
                  >
                    Read More{" "}
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            </article>

            {/* Article 2 */}
            <article className="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
              <div className="relative h-56 overflow-hidden">
                <img
                  alt="Person working on laptop"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-UdekfpKt0vMdAYsc9LjafpryJPabb7g9KtUdVi1Wl6RFnyrYN3dHUNvMEVUlayulBLowjzu01MBwjc53bgYaE-2C3W7fqzY9xSsblrtZsfPENMVHlSPu_vDppn5Ge4dXGDNbVAEhfOz3k6daB1vx4rBENCEl1ef3uBo1VeHbK54WbOzNFfOU5XBWWLmz2nBxSnlMLtbHq9fZsHSQY9GttpaXUCRg5zYsFfPZPRfzWrRl4UXks7UB3JFegM5UfrLR9a6MBY09UyE"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded bg-white/90 backdrop-blur text-xs font-bold text-accent shadow-sm">
                    Career Tips
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  5 Non-Tech Roles That Transition Easily to Business Analysis
                </h3>
                <p className="text-sm text-gray-600 mb-6 line-clamp-3">
                  Coming from sales, customer support, or administration?
                  Discover how your transferable skills give you a unique
                  advantage.
                </p>
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-500">
                    6 min read
                  </span>
                  <a
                    className="text-sm font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all"
                    href="#"
                  >
                    Read More{" "}
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            </article>

            {/* Article 3 */}
            <article className="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
              <div className="relative h-56 overflow-hidden">
                <img
                  alt="Two people shaking hands"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBzAs23geACysc7rqyEx2c6PzmEiuM0C3vcBOHoR00gJy2GglWix5IbEzTQxlxxVm9IRtMGRGDh0Pm2O0uMLIIY-Ve3KB8V3wBc6nf3ZIoSL9QishndCLUzuCDUm10PJ2puPZe4rGgScYMh9B1mH-sNJniKQJP6tmL1FWpaMIUW1hoz6M6cymRCqskBQF56BM2V7bG06XqawC9pa8y4wfiBYI53ETNMmG-x3tEBcc9A2PESFUrNniNd44lquu_NXRnVlFKPN83GVs"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded bg-white/90 backdrop-blur text-xs font-bold text-accent shadow-sm">
                    Success Stories
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  From Retail Manager to Senior BA: Sarah&apos;s Journey
                </h3>
                <p className="text-sm text-gray-600 mb-6 line-clamp-3">
                  Read how Sarah doubled her salary in 6 months by following our
                  structured coaching program and landing a role at a Fintech
                  giant.
                </p>
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-500">
                    4 min read
                  </span>
                  <a
                    className="text-sm font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all"
                    href="#"
                  >
                    Read More{" "}
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            </article>

            {/* Article 4 */}
            <article className="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
              <div className="relative h-56 overflow-hidden">
                <img
                  alt="Graph on tablet"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMbLuMUduU0r1bm09bC1BRaBBo_MezdDU2yorKoi-FE4L12BTpvfwGrbZgdY7jYQNsGGDRwWW3KnUm6DS1FLTr6S77zdA8VPBpQWhdwkXS4KMiL-5gzjQ3LFQhCm-pM7Hv_65a3nwsWdPVXAiuaiqfd30vyroYqpmGonxxUizPfd5V_oKCpgUOSXi3yvBe3UMAcrLsWBLNSjoUxUIwO0oIbhxYPjVaD0bi4Zrk7fd0rkurbQjB0Wz5nxXiIwWFB7XCScgB3hY6_s8"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded bg-white/90 backdrop-blur text-xs font-bold text-accent shadow-sm">
                    Industry Trends
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  Agile vs. Waterfall: What Modern BAs Need to Know
                </h3>
                <p className="text-sm text-gray-600 mb-6 line-clamp-3">
                  Understanding the methodologies that drive software
                  development today and how to adapt your documentation style
                  for each.
                </p>
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-500">
                    7 min read
                  </span>
                  <a
                    className="text-sm font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all"
                    href="#"
                  >
                    Read More{" "}
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            </article>

            {/* Article 5 */}
            <article className="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
              <div className="relative h-56 overflow-hidden">
                <img
                  alt="Meeting room discussion"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxn9itGMfmkEnk-RX7aMc635o3SUvCQVOa-hTCt-f3H2GUw8CRruw6x1mVzZZicSvIHs3Yb4oiyqHP8zC0JHeBZwFCktE_BDCwa0_iAtvhTh8QvV_mlQD6Oy79LVpp3rM1KxtVX3ISQSOHa6FSD8cg5X31cRThFnKqPiu8_jTGI4l_Q3qxJaBKcKljqGo6SkJQO6pbR9oG6_PMWvDNihouije7KG-NI8nUn_GcH8J_3HZ1PK0hjnxKGsbb0kdYlgFuNJ1XnZah3UU"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded bg-white/90 backdrop-blur text-xs font-bold text-accent shadow-sm">
                    Career Tips
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  Resume Mistakes That Are Costing You Interviews
                </h3>
                <p className="text-sm text-gray-600 mb-6 line-clamp-3">
                  We reviewed over 500 BA resumes. Here are the most common
                  errors and how to fix them to pass the ATS scan.
                </p>
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-500">
                    5 min read
                  </span>
                  <a
                    className="text-sm font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all"
                    href="#"
                  >
                    Read More{" "}
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            </article>

            {/* Article 6 */}
            <article className="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
              <div className="relative h-56 overflow-hidden">
                <img
                  alt="Woman presenting to team"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJyiwqKbzjsEpJpMzbsRahbGdj7pGxaooFL9j7cwyaUsxcxIV5VlE1c6StGrvGq2Ai63I-KyRuulO8yTiH7v0gB0xA769xPJ98Clk-wlFON472GvXuIN8Kal--bjtxNaGFRTXVqa6-shUkHUJ1Xqk9P50NDSwOgEGi0VfIw7qqWTr5Hl6RVuI57Lsyeq1yOYUsa6PnG1gRMQV9h8iCHyNSCDhL0ePetQWEZ8j6XDdiZZ5Sd51N9K-AmgfYUFCJC5dnuwBV8Mp8Izw"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded bg-white/90 backdrop-blur text-xs font-bold text-accent shadow-sm">
                    IIBA Prep
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  Understanding Stakeholder Management
                </h3>
                <p className="text-sm text-gray-600 mb-6 line-clamp-3">
                  Techniques for identifying, analyzing, and managing
                  stakeholders to ensure project success and minimize
                  resistance.
                </p>
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-500">
                    8 min read
                  </span>
                  <a
                    className="text-sm font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all"
                    href="#"
                  >
                    Read More{" "}
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            </article>
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2">
            <button className="size-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-50">
              <span className="material-symbols-outlined text-sm">
                chevron_left
              </span>
            </button>
            <button className="size-10 flex items-center justify-center rounded-lg bg-accent text-white font-bold shadow-md">
              1
            </button>
            <button className="size-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-colors">
              2
            </button>
            <button className="size-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-colors">
              3
            </button>
            <span className="text-gray-400 px-2">...</span>
            <button className="size-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-colors">
              12
            </button>
            <button className="size-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors">
              <span className="material-symbols-outlined text-sm">
                chevron_right
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated on Business Analysis Trends
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Join 15,000+ professionals getting weekly career tips delivered to
            their inbox.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            {isSuccess ? (
              <div className="w-full py-4 bg-white/10 rounded-lg text-white font-bold animate-fade-in">
                ✓ You&apos;re on the list!
              </div>
            ) : (
              <>
                <input
                  required
                  className="flex-grow px-5 py-3 rounded-lg border-2 border-transparent focus:border-accent focus:ring-0 text-gray-900 placeholder-gray-500"
                  placeholder="Enter your email address"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  disabled={isSubmitting}
                />
                <div className="w-full">
                  {protection.fields}
                  <SubmissionError message={submitError} />
                </div>
                <button
                  disabled={isSubmitting}
                  className="px-8 py-3 rounded-lg bg-accent hover:bg-accent-hover text-white font-bold transition-transform hover:-translate-y-0.5 shadow-lg flex items-center justify-center min-w-[140px]"
                  type="submit"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  ) : (
                    "Subscribe"
                  )}
                </button>
              </>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
