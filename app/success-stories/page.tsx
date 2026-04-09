"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials, Testimonial } from "@/data/testimonials";

export default function SuccessStories() {
  const [filterType, setFilterType] = useState<string>("all");
  const [filterStage, setFilterStage] = useState<string>("all");
  const [filterCountry, setFilterCountry] = useState<string>("all");

  const filteredTestimonials = useMemo(() => {
    return testimonials.filter((t) => {
      const typeMatch = filterType === "all" || t.programType === filterType;
      const stageMatch = filterStage === "all" || t.careerStage === filterStage;
      const countryMatch = filterCountry === "all" || t.country === filterCountry;
      return typeMatch && stageMatch && countryMatch;
    });
  }, [filterType, filterStage, filterCountry]);

  // Derive unique countries for the filter
  const countries = useMemo(() => {
    const vals = Array.from(new Set(testimonials.map(t => t.country)));
    return vals.sort();
  }, []);

  return (
    <div className="bg-white text-navy min-h-screen selection:bg-orchid/10">
      
      {/* ========== HERO ========== */}
      <section className="relative py-24 md:py-36 bg-navy-deep text-white overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 hero-grid opacity-10 pointer-events-none"></div>
        <div className="max-w-[1140px] mx-auto px-6 md:px-10 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/10 border border-gold/20 rounded-md text-[0.7rem] font-bold uppercase tracking-widest text-gold mb-6">
              Verified Success
            </div>
            <h1 className="font-serif text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.05] mb-8 italic">
              Real Transformations. <br />
              <span className="text-gold italic font-normal">Real Careers.</span> <br />
              Real Lives Changed.
            </h1>
            <p className="text-[1.1rem] md:text-[1.25rem] text-white/50 font-light max-w-[700px] mx-auto leading-relaxed">
              These are real people who made real career transitions using the Business Analysis School system. Every testimonial is from a verified graduate. Every result is genuine.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ========== FILTERS ========== */}
      <section className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 py-6">
        <div className="max-w-[1140px] mx-auto px-6 md:px-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="flex flex-wrap gap-2">
               {['all', 'accelerator', 'certification', 'corporate', 'course'].map((type) => (
                 <button 
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={`px-4 py-2 rounded-full text-[0.75rem] font-bold uppercase tracking-widest transition-all ${
                    filterType === type 
                    ? 'bg-navy text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                  }`}
                 >
                   {type}
                 </button>
               ))}
            </div>

            <div className="flex flex-wrap gap-4 w-full lg:w-auto">
               <select 
                onChange={(e) => setFilterStage(e.target.value)}
                className="bg-gray-50 border border-gray-100 px-4 py-2 rounded-xl text-[0.85rem] focus:outline-none focus:ring-2 focus:ring-gold/20"
               >
                 <option value="all">Any Career Stage</option>
                 <option value="beginner">Beginner</option>
                 <option value="career-changer">Career Changer</option>
                 <option value="experienced">Experienced Professional</option>
               </select>

               <select 
                onChange={(e) => setFilterCountry(e.target.value)}
                className="bg-gray-50 border border-gray-100 px-4 py-2 rounded-xl text-[0.85rem] focus:outline-none focus:ring-2 focus:ring-gold/20"
               >
                 <option value="all">Any Country</option>
                 {countries.map(c => <option key={c} value={c}>{c}</option>)}
               </select>
            </div>
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIAL GRID ========== */}
      <section className="py-20 bg-gray-50 min-h-[600px]">
        <div className="max-w-[1140px] mx-auto px-6 md:px-10">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredTestimonials.map((t) => (
                <motion.div 
                  key={t.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-[2.5rem] border border-gray-100 p-8 shadow-sm hover:shadow-xl transition-all group relative overflow-hidden flex flex-col"
                >
                  {/* Video Badge */}
                  {t.isVideo && (
                    <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-orchid/10 flex items-center justify-center text-orchid animate-pulse group-hover:bg-orchid group-hover:text-white transition-all cursor-pointer">
                      <span className="material-symbols-outlined text-[1.4rem]">play_arrow</span>
                    </div>
                  )}

                  <div className="flex items-center gap-4 mb-8">
                     <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-300 overflow-hidden relative">
                        <span className="material-symbols-outlined text-[2rem]">person</span>
                        {/* If we had photo logic, it would go here */}
                     </div>
                     <div>
                        <div className="flex items-center gap-2">
                           <h4 className="font-bold text-navy leading-none">{t.author}</h4>
                           <span className="text-[1.2rem]">{t.flag}</span>
                        </div>
                        <p className="text-[0.7rem] font-bold text-gray-400 uppercase tracking-widest mt-1">{t.location}</p>
                     </div>
                  </div>

                  <div className="relative mb-8 flex-grow">
                     <div className="text-gray-200 text-[4rem] absolute -top-8 -left-4 font-serif select-none pointer-events-none group-hover:text-gold/20 transition-colors">“</div>
                     <p className="text-[0.95rem] leading-relaxed text-gray-500 font-light relative z-10 italic">
                        {t.quote}
                     </p>
                  </div>

                  <div className="pt-6 border-t border-gray-50 space-y-3">
                     <div className="flex items-center gap-2">
                        <span className="text-[0.65rem] font-bold text-gray-300 uppercase tracking-widest">Program:</span>
                        <span className="text-[0.75rem] font-bold text-navy/80">{t.programCompleted}</span>
                     </div>
                     <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-lg text-green-600">
                        <span className="material-symbols-outlined text-[0.9rem]">verified</span>
                        <span className="text-[0.7rem] font-bold uppercase tracking-wider">{t.result}</span>
                     </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredTestimonials.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-40"
            >
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="font-serif text-2xl text-navy mb-2">No matching stories found</h3>
              <p className="text-gray-400 font-light">Try adjusting your filters to see more transformations.</p>
              <button 
                onClick={() => { setFilterType('all'); setFilterStage('all'); setFilterCountry('all'); }}
                className="mt-6 text-gold font-bold hover:underline"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="py-24 md:py-40 bg-navy text-center relative overflow-hidden">
        <div className="max-w-[700px] mx-auto px-6">
           <h2 className="font-serif text-[clamp(2.5rem,5vw,3.5rem)] leading-tight mb-8 text-white italic">Will Your Story Be <br /> <span className="text-gold font-normal not-italic underline decoration-gold/30">The Next Transformation?</span></h2>
           <p className="text-[1.1rem] text-white/50 font-light mb-12 leading-relaxed">Join 100,000+ professionals across 90+ countries who redefined their careers. Your journey starts with a single decision.</p>
           
           <div className="flex flex-col sm:flex-row gap-5 justify-center">
             <Link href="/programs" className="bg-gold hover:bg-gold-lt text-navy font-bold py-5 px-12 rounded-2xl shadow-xl shadow-gold/20 active:scale-[0.98] transition-all no-underline">
                Explore Programs
             </Link>
             <Link href="/free-training" className="bg-white/5 hover:bg-white/10 text-white font-bold py-5 px-12 rounded-2xl border border-white/10 transition-all no-underline">
                Start Free Training
             </Link>
           </div>
        </div>
      </section>
    </div>
  );
}
