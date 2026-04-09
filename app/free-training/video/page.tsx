"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Suspense } from "react";

function VideoContent() {
  return (
    <div className="min-h-screen bg-navy-deep text-white font-sans selection:bg-orchid/30 relative">
      <div className="absolute inset-0 hero-grid opacity-10 pointer-events-none"></div>
      
      <div className="relative z-10 max-w-[1000px] mx-auto px-6 py-16 md:py-24 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-green/10 border border-green/20 rounded-full text-[0.65rem] font-bold uppercase tracking-widest text-green mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green"></span>
            </span>
            Training In Progress: Do Not Close This Page
          </div>
          <h1 className="font-serif text-[clamp(2rem,5vw,3.5rem)] leading-tight mb-6">
            The AI Business Analyst <br />
            <span className="italic text-gold font-normal italic">Career Roadmap for 2026</span>
          </h1>
        </motion.div>

        {/* Video Player Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl relative border border-white/5 ring-1 ring-white/10"
        >
          <div className="absolute inset-0 flex items-center justify-center bg-navy/40 backdrop-blur-[2px]">
            <div className="text-center">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-gold/20 cursor-pointer hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-navy text-4xl ml-1">play_arrow</span>
              </div>
              <p className="text-white/60 font-medium">Click to play masterclass</p>
            </div>
          </div>
          {/* In a real app, use <iframe /> or <video /> here */}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 w-full max-w-[700px] bg-white/[0.03] border border-white/5 rounded-3xl p-8 md:p-12 text-center"
        >
          <h3 className="font-serif text-2xl mb-4 italic">Ready to accelerate your transition?</h3>
          <p className="text-white/60 text-[1rem] leading-relaxed mb-10">
            If you're serious about landing a six-figure role as an AI Business Analyst in the next 90 days, let's talk about how we can make it happen for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/career-consultation"
              className="bg-gold hover:bg-gold-lt text-navy font-bold py-4 px-10 rounded-xl transition-all shadow-lg shadow-gold/20 active:scale-[0.98] no-underline"
            >
              Book Your Career Audit
            </Link>
            <Link 
              href="/ai-accelerator"
              className="bg-white/5 hover:bg-white/10 text-white font-bold py-4 px-10 rounded-xl transition-all border border-white/10 active:scale-[0.98] no-underline"
            >
              Explore Accelerator
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function FreeTrainingVideo() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-navy-deep" />}>
      <VideoContent />
    </Suspense>
  );
}
