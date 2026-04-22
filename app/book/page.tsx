"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Book() {
  const learningPoints = [
    {
      title: "The Transferable Skill Audit",
      body: "How to identify which of your existing skills are directly transferable to business analysis — no matter your current background.",
      icon: "audit"
    },
    {
      title: "The High-Recall Resume",
      body: "The exact process for building a BA-ready resume that gets callbacks from top-tier firms and recruiters.",
      icon: "article"
    },
    {
      title: "The Zero-Exp Interview Secret",
      body: "How to pass BA interviews and demonstrate authority even if you have no formal BA experience yet.",
      icon: "record_voice_over"
    },
    {
      title: "The High-ROI Path",
      body: "The certification path that maximizes your return on investment and bypasses low-level, time-wasting credentials.",
      icon: "trending_up"
    },
    {
      title: "The $100K+ Negotiation",
      body: "How to negotiate six-figure compensation packages and stand your ground during salary discussions.",
      icon: "payments"
    }
  ];

  return (
    <div className="bg-white text-navy min-h-screen font-sans selection:bg-orchid/30 overflow-x-hidden">
      
      {/* ========== HERO SECTION ========== */}
      <section className="relative py-24 md:py-32 bg-navy-deep text-white overflow-hidden">
        {/* Background Aura */}
        <div className="absolute inset-0 hero-grid opacity-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-orchid/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-[1140px] mx-auto px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-center">
            {/* Book Visual (CSS 3D Mockup) */}
            <motion.div 
              initial={{ opacity: 0, x: -40, rotateY: -20 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative group perspective-1000"
            >
              <div className="absolute inset-0 bg-gold/20 blur-[100px] scale-75 rounded-full opacity-50 group-hover:scale-90 transition-all"></div>
              
              {/* 3D Book Mockup */}
              <div className="relative w-full max-w-[380px] aspect-[1/1.4] mx-auto">
                 <div className="absolute inset-0 bg-gradient-to-br from-[#0D1D3A] to-[#060F20] rounded-r-xl shadow-[20px_20px_60px_rgba(0,0,0,0.6)] border-l-4 border-gold/40 flex flex-col items-center justify-center p-10 text-center transform-style-3d group-hover:rotate-y-12 transition-transform duration-700">
                    <div className="w-16 h-1 bg-gold/50 mb-8 rounded-full"></div>
                    <h2 className="font-serif text-[2.5rem] leading-[1.1] text-white mb-6 select-none italic">The Six-Figure <br /> Business Analyst</h2>
                    <div className="text-[0.6rem] font-bold tracking-[0.4em] text-white/40 uppercase mb-8">Eno Eka</div>
                    <div className="mt-auto pt-10 border-t border-white/5 w-full flex items-center justify-between px-2">
                       <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
                          <span className="material-symbols-outlined text-[1rem] text-gold">verified</span>
                       </div>
                       <div className="text-[0.6rem] font-bold text-white/30 uppercase tracking-widest">Global Best Seller</div>
                    </div>
                 </div>
                 {/* Page Edges Effect */}
                 <div className="absolute top-2 right-[-10px] bottom-2 w-4 bg-white/10 rounded-r-lg border border-white/5"></div>
              </div>
            </motion.div>

            {/* Copy */}
            <div className="flex flex-col items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-orchid/20 border border-orchid/30 rounded-md text-[0.65rem] font-bold uppercase tracking-widest text-orchid-lt mb-8 font-sans">
                  The Blueprint for Career Mastery
                </div>
                <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] mb-8 italic">
                  The Six-Figure <br />
                  <span className="text-gold italic font-normal">Business Analyst</span>
                </h1>
                <p className="text-[1.2rem] md:text-[1.4rem] text-white/50 font-light leading-relaxed mb-12 max-w-[600px] italic">
                  12 Simple Steps to Kickstart Your Career Without a Tech Degree or Experience
                </p>
                <div className="flex flex-col sm:flex-row gap-5">
                  <a href="#offer" className="bg-white hover:bg-gray-100 text-navy font-bold py-5 px-12 rounded-2xl shadow-2xl transition-all active:scale-[0.98] no-underline flex items-center justify-center gap-3">
                    Get the Book
                    <span className="material-symbols-outlined text-sm">shopping_cart</span>
                  </a>
                  <Link href="/free-training" className="bg-transparent border border-white/20 hover:bg-white/5 text-white font-bold py-5 px-12 rounded-2xl transition-all no-underline text-center">
                    Watch Free Training
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== THE BACKSTORY ========== */}
      <section className="py-24 md:py-40 bg-white relative overflow-hidden">
        <div className="max-w-[1140px] mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-16 lg:gap-32 items-center">
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="space-y-10"
            >
              <div className="w-16 h-1 bg-orchid/30 rounded-full"></div>
              <p className="text-[1.4rem] md:text-[1.8rem] font-serif leading-snug text-navy italic">
                "This is the book that started it all. Written from my personal experience of pivoting from accounting to a six-figure consulting career within months of moving to Canada."
              </p>
              <div className="space-y-8 text-[1.1rem] md:text-[1.15rem] leading-relaxed text-gray-500 font-light">
                <p>
                  The Six-Figure Business Analyst provides a practical, step-by-step roadmap that anyone can follow to break into business analysis and build a high-income career.
                </p>
                <p>
                  Inside, you’ll discover the <span className="text-navy font-bold italic">12 proven steps</span> I used—and have since taught to thousands of professionals around the world—to identify transferable skills, position yourself for BA roles, ace interviews, and command premium compensation.
                </p>
                <p className="text-navy font-medium">
                  No fluff. No theory. Just a playbook from someone who did it.
                </p>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="relative overflow-hidden aspect-[4/5] rounded-[3rem] bg-gray-50 border border-gray-100 group"
            >
               <img 
                 src="/eno-glossy.png" 
                 alt="Eno Eka" 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-40"></div>
               <div className="absolute bottom-8 left-8 right-8 z-20 text-white text-center">
                  <h4 className="font-serif text-2xl mb-1 italic">Eno Eka</h4>
                  <p className="text-[0.65rem] text-white/70 uppercase tracking-widest font-bold">Author & Founder</p>
               </div>
               <div className="absolute inset-0 border-[20px] border-white z-20 pointer-events-none rounded-[3.5rem]"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== WHAT YOU'LL LEARN ========== */}
      <section className="py-24 md:py-32 bg-gray-50 border-y border-gray-100">
        <div className="max-w-[1140px] mx-auto px-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-tight mb-6 italic">What You'll Discover Inside</h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learningPoints.map((point, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-gold/10 group active:scale-[0.98]"
              >
                <div className="w-14 h-14 rounded-2xl bg-gold/5 flex items-center justify-center text-gold mb-8 group-hover:scale-110 group-hover:bg-gold group-hover:text-white transition-all duration-500">
                  <span className="material-symbols-outlined text-3xl">{point.icon}</span>
                </div>
                <h4 className="text-[1.15rem] font-bold text-navy mb-4 leading-tight group-hover:text-navy/80 transition-colors">{point.title}</h4>
                <p className="text-[0.95rem] text-gray-500 font-light leading-relaxed">{point.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PRICING / OFFER SECTION ========== */}
      <section id="offer" className="py-24 md:py-40 relative overflow-hidden bg-white">
        <div className="max-w-[1140px] mx-auto px-10 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] leading-none mb-8 italic">Choose Your Roadmap</h2>
            <p className="text-[1.15rem] text-gray-400 font-light max-w-[600px] mx-auto italic">
              Whether you want just the playbook or the full implementation system, we have you covered.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
            {/* Book Only */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 border border-gray-100 rounded-[3rem] p-10 md:p-14 text-center flex flex-col hover:bg-white hover:border-orchid/20 hover:shadow-2xl transition-all group"
            >
              <div className="text-[0.7rem] font-bold tracking-[0.2em] text-gray-300 uppercase mb-8">Playbook Only</div>
              <h3 className="font-serif text-3xl text-navy mb-4 italic">The Six-Figure BA</h3>
              <div className="font-serif text-5xl text-navy mb-10">$19.99</div>
              <ul className="space-y-4 mb-12 text-[0.95rem] text-gray-500 text-left font-light mx-auto max-w-[280px]">
                <li className="flex gap-3"><span className="text-orchid">✓</span> Paperback or Digital Copy</li>
                <li className="flex gap-3"><span className="text-orchid">✓</span> 12 Proven Steps Roadmap</li>
                <li className="flex gap-3"><span className="text-orchid">✓</span> Interview Cheat Sheet</li>
              </ul>
              <button className="w-full bg-navy hover:bg-navy-alt text-white font-bold py-5 rounded-2xl transition-all shadow-lg active:scale-[0.98]">
                Get the Book
              </button>
            </motion.div>

            {/* Bundle */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-navy-deep border-2 border-gold rounded-[3rem] p-10 md:p-14 text-center flex flex-col scale-105 shadow-[0_40px_100px_rgba(0,0,0,0.3)] relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-[6px] bg-gold animate-glow"></div>
              <div className="text-[0.7rem] font-bold tracking-[0.2em] text-gold uppercase mb-8">Unbeatable Value</div>
              <h3 className="font-serif text-3xl text-white mb-4 italic">Book + Workbook Bundle</h3>
              <div className="font-serif text-5xl text-gold mb-12">$47.00</div>
              <ul className="space-y-4 mb-12 text-[0.95rem] text-white/50 text-left font-light mx-auto max-w-[280px]">
                <li className="flex gap-3 text-white"><span className="text-gold font-bold">✓</span> The Six-Figure BA Book</li>
                <li className="flex gap-3 text-white"><span className="text-gold font-bold">✓</span> <span className="underline decoration-gold/50">Companion Workbook</span></li>
                <li className="flex gap-3"><span className="text-gold">✓</span> Exercises & Planning Templates</li>
                <li className="flex gap-3"><span className="text-gold">✓</span> Career Transformation Map</li>
              </ul>
              <button className="w-full bg-gold hover:bg-gold-lt text-navy font-bold py-5 rounded-2xl shadow-xl shadow-gold/20 transition-all active:scale-[0.98] ring-4 ring-gold/10">
                Get Book + Workbook Bundle
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="py-24 md:py-40 bg-navy-deep text-center relative overflow-hidden">
        <div className="max-w-[800px] mx-auto px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-[clamp(2rem,5vw,3rem)] text-white leading-tight mb-10 italic italic">Success Starts With The Right Blueprint</h2>
            <p className="text-[1.2rem] text-white/50 font-light mb-12 leading-relaxed italic italic">
              "Your next six-figure role is just a few decisions away. This book is the first decision."
            </p>
            <Link href="/contact" className="inline-flex items-center gap-4 bg-orchid hover:bg-orchid-lt text-white font-bold py-5 px-14 rounded-2xl shadow-[0_20px_60px_rgba(150,8,142,0.3)] transition-all hover:-translate-y-1 no-underline text-[1.1rem]">
              Talk to a Career Strategist
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
