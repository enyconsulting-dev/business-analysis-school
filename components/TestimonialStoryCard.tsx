"use client";

import { useState } from "react";
import type { Testimonial } from "@/data/testimonials";

interface TestimonialStoryCardProps {
  testimonial: Testimonial;
}

export default function TestimonialStoryCard({
  testimonial,
}: TestimonialStoryCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoTitle =
    testimonial.videoTitle ??
    testimonial.programCompleted ??
    "Learner reflection";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orchid/30 hover:shadow-xl">
      {testimonial.videoId ? (
        <div className="relative aspect-video overflow-hidden bg-[#071426]">
          {isPlaying ? (
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${testimonial.videoId}?autoplay=1&rel=0`}
              title={videoTitle}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => setIsPlaying(true)}
              aria-label={`Play video: ${videoTitle}`}
              className="absolute inset-0 flex h-full w-full items-center justify-center bg-cover bg-center text-white focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-[-4px] focus-visible:outline-gold"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(7,20,38,0.04) 20%, rgba(7,20,38,0.7) 100%), url("https://img.youtube.com/vi/${testimonial.videoId}/hqdefault.jpg")`,
              }}
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/60 bg-orchid/90 shadow-xl transition-transform group-hover:scale-110">
                <span className="material-symbols-outlined text-4xl" aria-hidden="true">
                  play_arrow
                </span>
              </span>
              <span className="absolute bottom-4 left-5 text-xs font-bold uppercase tracking-[0.18em] text-white/90">
                Watch their story
              </span>
            </button>
          )}
        </div>
      ) : testimonial.quote ? (
        <div className="flex min-h-48 flex-1 items-center bg-[#071426] px-7 py-8 text-white sm:px-8">
          <blockquote className="font-serif text-lg leading-relaxed text-white/85">
            <span className="mb-2 block text-4xl leading-none text-gold" aria-hidden="true">
              “
            </span>
            {testimonial.quote}
          </blockquote>
        </div>
      ) : null}

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        {testimonial.videoId && (
          <p className="mb-3 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-orchid">
            Student story
          </p>
        )}
        <h3 className="font-serif text-xl leading-snug text-[#10233d]">
          {videoTitle}
        </h3>

        <div className="mt-auto flex items-center justify-between gap-4 pt-6">
          <div className="flex min-w-0 items-center gap-3">
            <span
              aria-hidden="true"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f4eff7] text-sm font-bold text-orchid"
            >
              {testimonial.author
                .split(/\s+/)
                .map((part) => part[0])
                .slice(0, 2)
                .join("")
                .toUpperCase()}
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-bold text-[#10233d]">
                {testimonial.author}
              </p>
              {testimonial.location && (
                <p className="truncate text-xs text-slate-500">
                  {testimonial.location}
                </p>
              )}
            </div>
          </div>
          {testimonial.flag && (
            <span aria-hidden="true" className="text-xl">
              {testimonial.flag}
            </span>
          )}
        </div>

        {testimonial.result && (
          <p className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-800">
            <span className="material-symbols-outlined text-base" aria-hidden="true">
              verified
            </span>
            {testimonial.result}
          </p>
        )}
      </div>
    </article>
  );
}
