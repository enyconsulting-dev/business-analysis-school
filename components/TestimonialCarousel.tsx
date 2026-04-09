"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { testimonials } from "@/data/testimonials";

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setCardsToShow(3);
      else if (window.innerWidth >= 768) setCardsToShow(2);
      else setCardsToShow(1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      const maxIndex = testimonials.length - cardsToShow;
      return prev >= maxIndex ? 0 : prev + 1;
    });
  }, [cardsToShow]);

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = testimonials.length - cardsToShow;
      return prev <= 0 ? maxIndex : prev - 1;
    });
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); 
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center md:text-left mb-12 md:mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orchid/10 border border-orchid/25 rounded-md text-[0.7rem] font-bold uppercase tracking-widest text-orchid mb-4">
            Success Stories
          </div>
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-tight text-navy mb-4">
            Real People. Real Results. <br className="hidden md:block" />
            <span className="italic text-gold font-normal italic">Real Career Transformations.</span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          {/* Slides */}
          <div className="flex transition-transform duration-700 ease-out" style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}>
            {testimonials.map((test) => (
              <div key={test.id} className="min-w-full md:min-w-[50%] lg:min-w-[33.333%] px-3">
                <div className="relative h-full bg-white border border-gray-100 rounded-2xl p-8 md:p-10 shadow-sm transition-all hover:shadow-xl hover:border-orchid/20 group/card flex flex-col">
                  {/* Quote Icon */}
                  <span className="absolute top-4 left-6 font-serif text-[5rem] text-orchid/5 select-none leading-none group-hover/card:text-orchid/10 transition-colors">“</span>
                  
                  {/* Main Quote */}
                  <blockquote className="relative z-10 text-[0.95rem] md:text-[1rem] leading-[1.7] text-gray-500 italic mb-8 font-light flex-grow">
                    {test.quote}
                  </blockquote>

                  {/* Author Branding */}
                  <div className="flex items-center gap-4 mt-auto">
                    {/* Photo Placeholder / Video Play Overlay */}
                    <div className="relative w-12 h-12 rounded-full bg-navy flex items-center justify-center text-white text-[1rem] font-bold shadow-lg overflow-hidden shrink-0">
                      {test.author[0]}
                      {test.isVideo && (
                        <div className="absolute inset-0 bg-orchid/40 flex items-center justify-center backdrop-blur-[1px]">
                          <span className="material-symbols-outlined text-[1.4rem] text-white">play_circle</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="overflow-hidden">
                      <div className="font-bold text-[0.85rem] text-navy mb-0.5 truncate">{test.author}</div>
                      <div className="text-[0.72rem] text-gray-400 tracking-wider uppercase font-medium truncate flex items-center gap-2">
                         {test.location}
                      </div>
                    </div>
                  </div>

                  {/* Result Badge */}
                  <div className="mt-6 pt-6 border-t border-gray-50">
                    <div className="inline-block bg-[#0DB760]/10 text-[#0DB760] text-[0.75rem] font-bold px-3 py-1.5 rounded-md border border-[#0DB760]/20">
                      {test.result}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls (Visible on Hover/Desktop) */}
          <div className="absolute top-1/2 -left-4 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity hidden lg:block">
            <button onClick={prevSlide} className="w-12 h-12 rounded-full bg-white shadow-xl border border-gray-100 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-all transform hover:scale-110">
              <span className="material-symbols-outlined">west</span>
            </button>
          </div>
          <div className="absolute top-1/2 -right-4 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity hidden lg:block">
            <button onClick={nextSlide} className="w-12 h-12 rounded-full bg-white shadow-xl border border-gray-100 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-all transform hover:scale-110">
              <span className="material-symbols-outlined">east</span>
            </button>
          </div>
        </div>

        {/* See All Button */}
        <div className="mt-16 text-center">
          <Link href="/success-stories" className="inline-flex items-center gap-3 bg-orchid hover:bg-orchid-lt text-white text-[0.85rem] font-bold py-4 px-10 rounded-lg no-underline transition-all shadow-xl hover:-translate-y-1 group">
            See All Success Stories
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
