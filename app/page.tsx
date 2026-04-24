"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import AcceleratorTiers from "@/components/AcceleratorTiers";
import Counter from "@/components/Counter";
import ResourceOptinModal from "@/components/ResourceOptinModal";
import QuizModal from "@/components/QuizModal";

export default function Home() {
  const [activeModal, setActiveModal] = useState<{ type: 'masterclass' | 'ebook'; title: string } | null>(null);
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  // Framer Motion Variants for Sequential Stagger
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: [0.21, 1.11, 0.81, 0.99] as any }
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -15 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: { type: "spring" as const, stiffness: 200, damping: 15, delay: 0.2 } 
    },
  };

  useEffect(() => {
    // Other client-side initializations can go here
  }, []);
  return (
    <div className="flex flex-col">
      {/* ========== HERO ========== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-navy-deep via-navy to-[#1A0A2E]">
        {/* Animated Glow & Grid */}
        <div className="absolute inset-0 hero-grid opacity-20"></div>
        <div className="absolute -top-[30%] -right-[15%] w-[60vw] h-[60vw] bg-[radial-gradient(circle,rgba(150,8,142,0.2)_0%,transparent_60%)] animate-glow"></div>
        
        <div className="relative z-10 max-w-[1140px] mx-auto px-6 md:px-10 py-12 md:py-20 flex flex-col items-center text-center lg:items-start lg:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-gold/10 border border-gold/25 rounded-full text-[0.7rem] font-bold uppercase tracking-widest text-gold mb-6 animate-fade-up">
            <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
            IIBA Endorsed Education Provider
          </div>
          
          <h1 className="font-serif text-[clamp(2.4rem,4.5vw,3.6rem)] leading-[1.15] text-white mb-6 animate-fade-up [animation-delay:200ms]">
            Land a Six-Figure Career in Tech <br className="hidden md:block" /> 
            <span className="italic text-gold-lt font-normal italic">Without a Tech Degree</span>
          </h1>
          
          <p className="text-[1.05rem] leading-[1.7] text-white/60 max-w-[560px] font-light mb-8 animate-fade-up [animation-delay:400ms]">
            Business Analysis School is the global leader in business analysis education. We help mid-career professionals, career changers, and ambitious individuals master AI-driven business analysis skills and land six-figure roles in 90 days.
          </p>
          
          <div className="flex flex-wrap gap-3.5 animate-fade-up [animation-delay:600ms]">
            <Link href="/free-training" className="bg-orchid hover:bg-orchid-lt text-white text-[0.85rem] font-semibold py-3.5 px-8 rounded-md transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(150,8,142,0.35)]">
              Start Free Training
            </Link>
            <Link href="/programs" className="bg-transparent text-white border border-white/20 hover:border-white hover:bg-white/5 text-[0.85rem] font-semibold py-3.5 px-8 rounded-md transition-all">
              Explore Programs
            </Link>
          </div>
        </div>
      </section>

      {/* ========== PROOF BAR (FRAMER MOTION) ========== */}
      <section className="bg-navy border-b border-white/5 py-8 overflow-hidden">
        <div className="max-w-[1140px] mx-auto px-6 md:px-10 flex flex-wrap items-center justify-center gap-10 md:gap-x-20">
          
          {/* STAT 1 */}
          <div className="text-center group min-w-[120px]">
            <div className="font-serif text-3xl md:text-4xl text-gold leading-none mb-2">
              <Counter to={100} suffix="K+" />
            </div>
            <div className="text-[0.65rem] text-white/40 uppercase tracking-[0.2em] font-bold">Professionals Trained</div>
          </div>

          <div className="hidden lg:block w-px h-10 bg-white/10 shrink-0"></div>

          {/* STAT 2 */}
          <div className="text-center group min-w-[120px]">
            <div className="font-serif text-3xl md:text-4xl text-gold leading-none mb-2">
              <Counter to={90} suffix="+" />
            </div>
            <div className="text-[0.65rem] text-white/40 uppercase tracking-[0.2em] font-bold">Countries</div>
          </div>

          <div className="hidden lg:block w-px h-10 bg-white/10 shrink-0"></div>

          {/* STAT 3 */}
          <div className="text-center group min-w-[120px]">
            <div className="font-serif text-3xl md:text-4xl text-gold leading-none mb-2">IIBA</div>
            <div className="text-[0.65rem] text-white/40 uppercase tracking-[0.2em] font-bold">Endorsed Education Provider</div>
          </div>

          <div className="hidden lg:block w-px h-10 bg-white/10 shrink-0"></div>

          {/* STAT 4 */}
          <div className="text-center group min-w-[120px]">
            <div className="font-serif text-3xl md:text-4xl text-gold leading-none mb-2">
              <span className="text-[0.8em] font-sans mr-0.5">$</span>85K–140K
            </div>
            <div className="text-[0.65rem] text-white/40 uppercase tracking-[0.2em] font-bold">Avg BA Salary (USA)</div>
          </div>

        </div>
      </section>

      {/* ========== THE PROBLEM WE SOLVE (STICKY SCROLL) ========== */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-100 to-transparent"></div>
        <div className="max-w-[1140px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Header Column (Full width but in sticky context) */}
            <div className="lg:col-span-12 mb-4 md:mb-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-orchid/10 border border-orchid/25 rounded-md text-[0.7rem] font-bold uppercase tracking-widest text-orchid mb-6">
                The Problem We Solve
              </div>
              <h2 className="font-serif text-[clamp(2.2rem,5vw,3.5rem)] leading-[1.1] text-navy mb-8 max-w-[900px]">
                You Have the Experience. <br className="hidden md:block" />
                <span className="italic text-gold font-normal italic">You Just Don’t Have the Positioning.</span>
              </h2>
            </div>
            
            {/* Left Column (Scrollable Text Stages with Focus Animation) */}
            <div className="lg:col-span-7 space-y-32 py-10">
              <motion.div 
                initial={{ opacity: 0.3, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.8 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-[1.1rem] md:text-[1.25rem] leading-[1.8] text-navy font-light">
                  You’re an experienced professional. You have skills, education, and years of real work under your belt. <span className="font-medium text-orchid">But you’re stuck</span> — stuck in a role that underpay you, stuck in an industry that’s shrinking, or stuck wondering how to break into tech without going back to school and starting over from scratch.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0.3, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.8 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-[1.1rem] md:text-[1.25rem] leading-[1.8] text-navy font-light">
                  Here’s what nobody tells you: <span className="italic">you don’t need a computer science degree</span> to earn six figures in tech. You don’t need to learn to code. You don’t need to start at the bottom. What you need is a proven system to repackage your existing experience, position yourself for the roles that are hiring right now, and walk into interviews with the confidence and credentials that make you the obvious choice.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0.3, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.8 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-[1.1rem] md:text-[1.25rem] leading-[1.8] text-navy font-light pb-20">
                  That’s exactly what Business Analysis School delivers. We’ve helped over <span className="bg-gold/10 px-1 font-bold">100,000 professionals</span> across 90+ countries make this exact transition — from accountants, project managers, teachers, operations professionals, and managers into high-paying business analysis, product management, data analysis, and AI consulting roles.
                </p>
                <div className="pt-10 border-t border-gray-100">
                  <p className="text-[1.2rem] md:text-3xl font-serif text-navy leading-snug">
                    The question isn’t whether you can do this. <br />
                    <span className="text-orchid">The question is how quickly you want to start.</span>
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right Column (Sticky Visual) */}
            <div className="lg:col-span-5 lg:sticky lg:top-48 self-start pb-10 h-fit">
              <div className="aspect-square rounded-[2rem] bg-navy-alt overflow-hidden relative shadow-2xl group border border-white/5">
                 <div className="absolute inset-0 bg-gradient-to-tr from-navy via-navy-alt to-orchid/20 opacity-95"></div>
                 <div className="absolute inset-0 flex items-center justify-center p-12 text-center text-white">
                    <div className="animate-fade-up">
                      <div className="w-24 h-24 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-8 border border-gold/25 relative">
                        <div className="absolute inset-0 bg-gold/10 rounded-full animate-ping opacity-20"></div>
                        <span className="material-symbols-outlined text-[3rem] text-gold">change_circle</span>
                      </div>
                      <h4 className="font-serif text-3xl mb-4 italic">The Positioning Shift</h4>
                      <p className="text-white/40 font-light leading-relaxed max-w-[280px] mx-auto">
                        Moving from 'Generalist Experience' to 'Specialist Strategic Asset' in 90 days.
                      </p>
                      <div className="mt-8 inline-flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-orchid-lt">
                        <span className="w-1.5 h-1.5 rounded-full bg-orchid-lt animate-pulse"></span>
                        Active Transformation
                      </div>
                    </div>
                 </div>
                 {/* Decorative floaters */}
                 <div className="absolute top-10 right-10 w-24 h-24 bg-orchid/10 blur-3xl rounded-full"></div>
                 <div className="absolute bottom-10 left-10 w-32 h-32 bg-gold/5 blur-3xl rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== HOW IT WORKS (SEQUENTIAL ANIMATION) ========== */}
      <section className="py-24 bg-navy text-white relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-orchid/5 blur-[120px] pointer-events-none"></div>
        <div className="max-w-[1140px] mx-auto px-6 md:px-10 relative z-10">
          <div className="mb-16 md:mb-20 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/10 border border-gold/20 rounded-md text-[0.7rem] font-bold uppercase tracking-widest text-gold mb-4">
              How It Works
            </div>
            <h2 className="font-serif text-[clamp(2.2rem,4vw,3rem)] leading-tight text-white italic">
              Three Steps to a <span className="text-gold italic">Six-Figure</span> Career
            </h2>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
          >
            {[ 
              { step: "01", icon: "📚", title: "Learn the Skills", body: "Master business analysis frameworks, AI tools, and methodologies used by the world’s top companies. Our curriculum is endorsed by the IIBA — the global standard-setting body for business analysis — and aligned with the real-world practices." },
              { step: "02", icon: "🏆", title: "Get Certified", body: "Earn globally recognized certifications that instantly position you as a qualified professional employers trust: ECBA, CCBA, CBAP from the IIBA, plus Scrum Master, Product Owner, and Six Sigma." },
              { step: "03", icon: "💰", title: "Land the Role", body: "Our career coaching, resume optimization, LinkedIn rewrite, interview preparation, and job search strategy get you in front of the right employers fast. We provide the mentorship needed to secure competitive roles." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="relative group"
              >
                <div className="absolute -top-6 -left-6 text-[4.5rem] font-serif italic text-white/5 group-hover:text-gold/10 transition-colors select-none">{item.step}</div>
                <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-10 transition-all hover:border-gold/30 hover:bg-gold/5 flex flex-col h-full relative z-10">
                  <motion.div 
                    variants={iconVariants}
                    className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform"
                  >
                    {item.icon}
                  </motion.div>
                  <h4 className="font-serif text-xl text-white mb-4 group-hover:text-gold transition-colors italic">Step {item.step.replace(/^0/, "")}: {item.title}</h4>
                  <p className="text-[0.95rem] leading-[1.7] text-white/60 font-light flex-grow">
                    {item.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========== AI ACCELERATOR PROGRAMS (3 TIERS) ========== */}
      <AcceleratorTiers />

      {/* ========== SUCCESS STORIES (ROTATING CAROUSEL) ========== */}
      <TestimonialCarousel />

      {/* ========== FREE RESOURCES SECTION ========== */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-orchid/5 blur-[120px] pointer-events-none"></div>
        <div className="max-w-[1140px] mx-auto px-6 md:px-10 relative z-10">
          <div className="mb-16 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orchid/10 border border-orchid/20 rounded-md text-[0.7rem] font-bold uppercase tracking-widest text-orchid mb-4">
              Free Resources
            </div>
            <h2 className="font-serif text-[clamp(2.2rem,4vw,3rem)] leading-tight text-navy mb-4">
              Start Learning for Free — <span className="italic text-gold">Right Now</span>
            </h2>
            <p className="text-[1.1rem] text-gray-500 font-light max-w-[600px] leading-relaxed">
              No credit card required. No commitment. Just valuable training and tools that could change your career trajectory today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: "🎓", 
                title: "How to Become an AI Business Analyst in 2026 Without a Tech Degree", 
                body: "Join 50,000+ professionals who have taken this training. In this masterclass, you’ll learn the #1 non-technical career path into tech, the exact 90-day roadmap our graduates follow, and how AI is creating massive demand.", 
                cta: "Watch Free", 
                iconClass: "bg-orchid/10", 
                btnClass: "bg-navy hover:bg-navy-alt text-white",
                onClick: () => setActiveModal({ type: 'masterclass', title: "How to Become an AI Business Analyst in 2026 Without a Tech Degree" })
              },
              { 
                icon: "📖", 
                title: "The Business Analysis Career Starter Kit", 
                body: "A free downloadable eBook with everything you need to evaluate and plan your career transition: career path overview, salary data by country, skills checklist, and a 90-day action plan.", 
                cta: "Download Free", 
                iconClass: "bg-gold/10", 
                btnClass: "bg-white border border-navy text-navy hover:bg-gray-50",
                onClick: () => setActiveModal({ type: 'ebook', title: "The Business Analysis Career Starter Kit" })
              },
              { 
                icon: "❓", 
                title: "Is Business Analysis the Right Career for You?", 
                body: "Take our 3-minute assessment and get personalized recommendations based on your experience, skills, and goals. Instant results with a custom career roadmap suggestion.", 
                cta: "Take the Quiz", 
                iconClass: "bg-green/10", 
                btnClass: "bg-orchid hover:bg-orchid-lt text-white",
                onClick: () => setIsQuizOpen(true)
              }
            ].map((res, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white border border-gray-100 rounded-[2rem] p-8 md:p-10 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1 flex flex-col group"
              >
                <div className={`w-14 h-14 rounded-2xl ${res.iconClass} flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform`}>{res.icon}</div>
                <h3 className="font-serif text-xl border-b border-gray-100 pb-4 mb-4 text-navy italic">{res.title}</h3>
                <p className="text-[0.9rem] leading-[1.7] text-gray-400 font-light flex-grow mb-8">{res.body}</p>
                <button 
                  onClick={res.onClick}
                  className={`inline-flex items-center justify-center gap-2 ${res.btnClass} font-bold py-3.5 px-6 rounded-xl transition-all`}
                >
                  {res.cta} <span className="material-symbols-outlined text-sm">{res.icon === "📖" ? "download" : res.icon === "❓" ? "quiz" : "play_circle"}</span>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SALARY BENCHMARKS (ANIMATED REVEAL) ========== */}
      <section id="salary-benchmarks" className="py-24 bg-navy text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-white/10"></div>
        <div className="max-w-[1140px] mx-auto px-6 md:px-10">
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/10 border border-gold/20 rounded-md text-[0.7rem] font-bold uppercase tracking-widest text-gold mb-6">
              Salary Benchmarks
            </div>
            <h2 className="font-serif text-[clamp(2.2rem,4vw,3.5rem)] leading-tight text-white italic">
              What Business Analysts <span className="text-gold italic font-normal">Actually Earn</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { flag: "🇺🇸", country: "USA", range: "$85K – $140K+" },
              { flag: "🇨🇦", country: "Canada", range: "CAD $75K – $120K+" },
              { flag: "🇬🇧", country: "United Kingdom", range: "£45K – £80K+" },
              { flag: "🇦🇺", country: "Australia", range: "AUD $80K – $130K+" },
              { flag: "🇳🇬", country: "Nigeria", range: "₦5M – ₦20M+", full: true }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`bg-white/5 border border-white/10 rounded-2xl p-6 transition-all hover:bg-white/10 hover:border-white/20 group ${item.full ? "col-span-2 md:col-span-1" : ""}`}
              >
                <div className="text-3xl mb-4 grayscale group-hover:grayscale-0 transition-all">{item.flag}</div>
                <div className="text-[0.65rem] text-white/40 uppercase tracking-widest mb-2 font-bold">{item.country}</div>
                <div className="font-serif text-[1.4rem] md:text-[1.6rem] text-gold whitespace-nowrap">{item.range}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 max-w-[800px] mx-auto">
            <p className="text-[0.78rem] text-white/30 font-light leading-relaxed italic">
              Source: industry salary surveys. <span className="text-white/60">AI-skilled business analysts command 20-40% premium.</span> Remote and international roles increase earning potential significantly.
            </p>
          </div>
        </div>
      </section>

      {/* ========== THE BOOK ========== */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-[1140px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-center">
            {/* Book Cover Visual */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gold/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative aspect-[3/4.2] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10">
                 <img 
                   src="/six-figure.webp" 
                   alt="The Six-Figure Business Analyst Book Cover" 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 {/* Decorative floater */}
                 <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rotate-12 border border-white/10 rounded-2xl pointer-events-none"></div>
              </div>
            </div>

            {/* Content Column */}
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-orchid/10 border border-orchid/20 rounded-md text-[0.7rem] font-bold uppercase tracking-widest text-orchid mb-6 font-sans">
                The Bestselling Book
              </div>
              
              <h2 className="font-serif text-[clamp(2.5rem,5vw,3.5rem)] leading-[1.1] text-navy mb-4">The Six-Figure Business Analyst</h2>
              <p className="text-[1.1rem] md:text-[1.3rem] italic text-gold font-serif mb-6 leading-relaxed">
                12 Simple Steps to Kickstart Your Career Without a Tech Degree or Experience
              </p>

              <div className="flex items-center gap-1 mb-8">
                {[1,2,3,4,5].map(i => (
                  <span key={i} className="material-symbols-outlined text-gold text-[1.4rem]">star</span>
                ))}
                <span className="ml-3 text-[0.9rem] font-bold text-navy">4.9/5</span>
                <span className="ml-1 text-[0.9rem] text-gray-400 font-light">(2,500+ Reviews)</span>
              </div>

              <div className="space-y-6 text-[1rem] md:text-[1.1rem] text-gray-500 font-light leading-relaxed mb-10 max-w-[600px]">
                <p>
                  The career guide that has helped thousands of professionals around the world make the transition into business analysis and land six-figure roles. 
                </p>
                <p>
                  Written from Eno’s personal experience of going from accountant to six-figure consultant within months of moving to Canada. This isn’t theory — it’s a step-by-step playbook from someone who actually did it.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://www.amazon.com/dp/1738168301?ref_=cm_sw_r_cp_ud_dp_RYZ4H00E0M0NFJM74WRF" target="_blank" rel="noopener noreferrer" className="bg-navy hover:bg-navy-alt text-white font-bold py-4 px-10 rounded-xl shadow-xl shadow-navy/20 transition-all active:scale-[0.98] no-underline text-center">
                  Get the Book
                </a>
                <a href="https://www.amazon.com/dp/1738168301?ref_=cm_sw_r_cp_ud_dp_RYZ4H00E0M0NFJM74WRF" target="_blank" rel="noopener noreferrer" className="bg-white border border-navy text-navy hover:bg-gray-50 font-bold py-4 px-10 rounded-xl transition-all active:scale-[0.98] no-underline text-center">
                  Book + Workbook Bundle
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA BANNER ========== */}
      <section className="relative py-32 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-alt to-orchid text-white"></div>
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-10 hero-grid pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-white/10"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-[800px] mx-auto px-6"
        >
          <div className="w-16 h-1 bg-gold/50 mx-auto mb-10 rounded-full"></div>
          <h2 className="font-serif text-[clamp(2.2rem,5vw,3.8rem)] text-white leading-[1.1] mb-8 italic">
            Your Six-Figure Career <br />
            <span className="text-gold font-normal not-italic italic">Starts With One Decision</span>
          </h2>
          <p className="text-[1.1rem] md:text-[1.25rem] text-white/70 font-light mb-12 leading-relaxed max-w-[700px] mx-auto">
            Join 100,000+ professionals who chose to stop waiting and start building the career they deserve. Whether you start with our free training or go straight into a program, your next chapter begins the moment you decide it does.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="/free-training" className="bg-white hover:bg-gray-100 text-navy font-bold py-5 px-12 rounded-xl transition-all shadow-2xl active:scale-[0.98] no-underline">
              Start With Free Training
            </Link>
            <Link href="/programs" className="bg-transparent border border-white/30 hover:bg-white/5 text-white font-bold py-5 px-12 rounded-xl transition-all active:scale-[0.98] no-underline">
              Explore Programs
            </Link>
          </div>
          
          <div className="mt-16 inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.3em] text-white/30">
            <span className="w-2 h-2 rounded-full bg-gold/50 animate-pulse"></span>
            The Standard for Business Analysis Excellence
          </div>
        </motion.div>
      </section>
      {/* Modals */}
      <ResourceOptinModal 
        isOpen={!!activeModal}
        onClose={() => setActiveModal(null)}
        type={activeModal?.type || 'masterclass'}
        resourceTitle={activeModal?.title || ''}
      />
      <QuizModal 
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
      />
    </div>
  );
}
