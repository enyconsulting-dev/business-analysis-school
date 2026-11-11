import Link from "next/link";
import { testimonials } from "@/data/testimonials";
import TestimonialStoryCard from "@/components/TestimonialStoryCard";

export default function TestimonialCarousel() {
  const featuredStories = testimonials.filter((testimonial) => testimonial.videoId);

  return (
    <section className="relative overflow-hidden bg-[#f7f8fa] py-20 sm:py-24">
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-orchid/10 blur-3xl" />
      <div className="max-w-[1140px] mx-auto px-6 md:px-10">
        <div className="relative mb-10 flex flex-col gap-6 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orchid/20 bg-white px-3.5 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-orchid">
            Success Stories
            </div>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-tight text-navy">
              Hear the stories behind{" "}
              <span className="italic font-normal text-orchid">the next step.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
              Learners share their experiences in their own words. Choose a story
              to watch.
            </p>
          </div>
          <Link
            href="/success-stories"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#10233d] no-underline transition-colors hover:text-orchid"
          >
            Explore all stories
            <span className="material-symbols-outlined text-base" aria-hidden="true">
              arrow_forward
            </span>
          </Link>
        </div>

        <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredStories.map((testimonial) => (
            <TestimonialStoryCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
