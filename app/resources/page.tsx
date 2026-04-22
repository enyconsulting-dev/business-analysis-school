"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ResourceOptinModal from "@/components/ResourceOptinModal";
import QuizModal from "@/components/QuizModal";

export default function Resources() {
  const [activeModal, setActiveModal] = useState<{ type: 'masterclass' | 'ebook'; title: string } | null>(null);
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const resources = [
    {
      id: "masterclass",
      type: "Free Masterclass",
      title: "How to Become an AI Business Analyst in 2026",
      desc: "Join 50,000+ professionals. Learn the #1 non-technical career path, our 90-day roadmap, and how AI is creating massive demand.",
      icon: "school",
      cta: "Watch Immediately",
      featured: true,
      onClick: () => setActiveModal({ type: 'masterclass', title: "Free Masterclass: How to Become an AI Business Analyst in 2026" })
    },
    {
      id: "starter-kit",
      type: "Free eBook",
      title: "BA Career Starter Kit",
      desc: "The definitive guide to the BA career path, salaries by country, skills checklist, and a proven 90-day transition roadmap.",
      icon: "menu_book",
      cta: "Download eBook",
      onClick: () => setActiveModal({ type: 'ebook', title: "BA Career Starter Kit (eBook)" })
    },
    {
      id: "resume-template",
      type: "DOCX Template",
      title: "BA Resume Template",
      desc: "A professional, fill-in-the-blank resume optimized specifically for business analysis roles and ATS algorithms.",
      icon: "article",
      cta: "Get Template",
      onClick: () => setActiveModal({ type: 'ebook', title: "BA Resume Template (DOCX)" })
    },
    {
      id: "interview-prep",
      type: "PDF Guide",
      title: "Top 50 BA Interview Questions",
      desc: "Get the most common interview questions and model answers designed to help you demonstrate authority and confidence.",
      icon: "record_voice_over",
      cta: "Send My Guide",
      onClick: () => setActiveModal({ type: 'ebook', title: "Top 50 BA Interview Questions (PDF)" })
    },
    {
      id: "frameworks",
      type: "PDF Cheat Sheet",
      title: "Business Analysis Frameworks",
      desc: "A visual reference guide of the top frameworks every BA needs to know, from SWOT and PESTLE to User Story Mapping.",
      icon: "grid_view",
      cta: "Download Cheat Sheet",
      onClick: () => setActiveModal({ type: 'ebook', title: "Business Analysis Frameworks Cheat Sheet (PDF)" })
    },
    {
      id: "quiz",
      type: "Interactive Tool",
      title: "Career Assessment Quiz",
      desc: "A 3-minute quiz that evaluates your skills and experience to provide personalized career path recommendations.",
      icon: "quiz",
      cta: "Start Assessment",
      onClick: () => setIsQuizOpen(true)
    },
    {
      id: "ai-playbook",
      type: "eBook",
      title: "AI Business Analysis Playbook",
      desc: "Deep-dive into practical AI implementations for business analysts. Learn how to leverage LLMs and AI tools at work.",
      icon: "smart_toy",
      cta: "Get the Playbook",
      onClick: () => setActiveModal({ type: 'ebook', title: "AI Business Analysis Playbook (eBook)" })
    },
    {
      id: "career-roadmap",
      type: "eBook",
      title: "The Six-Figure Career Roadmap",
      desc: "Strategic steps to move from foundational business analysis into high-income consulting and leadership roles.",
      icon: "trending_up",
      cta: "Download Roadmap",
      onClick: () => setActiveModal({ type: 'ebook', title: "The Six-Figure Career Roadmap (eBook)" })
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-white text-navy min-h-screen selection:bg-orchid/30">
      
      {/* ========== HERO SECTION ========== */}
      <section className="relative py-24 md:py-32 bg-navy-deep text-white overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-orchid/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-[1140px] mx-auto px-10 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-orchid/20 border border-orchid/30 rounded-md text-[0.65rem] font-bold uppercase tracking-widest text-orchid-lt mb-8 font-sans">
              Free Resources & Downloads
            </div>
            <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] mb-8 italic">
              Start Building Your <br />
              <span className="text-gold italic font-normal">Career — For Free</span>
            </h1>
            <p className="text-[1.1rem] md:text-[1.25rem] text-white/50 font-light max-w-[700px] mx-auto leading-relaxed">
              Everything you need to evaluate, plan, and start your business analysis career journey. All free. All gated behind a simple email signup so we can send you even more value.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ========== RESOURCE GRID ========== */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1140px] mx-auto px-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {resources.map((res) => (
              <motion.div 
                key={res.id}
                variants={itemVariants}
                className={`flex flex-col p-8 rounded-[2.5rem] transition-all duration-500 border group ${
                  res.featured 
                  ? 'bg-navy-deep text-white border-white/10 shadow-2xl shadow-navy/20 md:col-span-2 lg:col-span-2' 
                  : 'bg-gray-50 border-gray-100/50 hover:bg-white hover:border-orchid/20 hover:shadow-xl'
                }`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all group-hover:scale-110 ${
                  res.featured ? 'bg-gold/10 text-gold' : 'bg-orchid/5 text-orchid'
                }`}>
                  <span className="material-symbols-outlined text-3xl">{res.icon}</span>
                </div>
                
                <div className={`text-[0.65rem] font-bold tracking-[0.2em] uppercase mb-3 ${
                  res.featured ? 'text-gold' : 'text-gray-300'
                }`}>
                  {res.type}
                </div>
                
                <h3 className={`font-serif text-2xl mb-4 leading-tight italic ${
                  res.featured ? 'text-white' : 'text-navy'
                }`}>
                  {res.title}
                </h3>
                
                <p className={`text-[0.9rem] font-light leading-relaxed mb-10 flex-grow ${
                  res.featured ? 'text-white/50' : 'text-gray-400'
                }`}>
                  {res.desc}
                </p>
                
                <button 
                  onClick={res.onClick}
                  className={`flex items-center justify-center gap-3 font-bold py-4 px-8 rounded-xl transition-all shadow-lg active:scale-[0.98] ${
                    res.featured 
                    ? 'bg-gold hover:bg-gold-lt text-navy shadow-gold/10' 
                    : 'bg-navy hover:bg-navy-alt text-white shadow-navy/10'
                  }`}
                >
                  {res.cta} <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========== FINAL CTA (NEWSLETTER) ========== */}
      <section className="py-24 bg-navy-deep relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orchid/15 to-navy-deep pointer-events-none"></div>
        <div className="max-w-[750px] mx-auto px-10 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-1 bg-gold/50 mx-auto mb-10 rounded-full"></div>
            <h2 className="font-serif text-[clamp(2.5rem,5vw,3.5rem)] text-white leading-tight mb-6 italic">Stay Ahead of the Market</h2>
            <p className="text-[1.1rem] text-white/50 font-light mb-12 leading-relaxed">
              New resources are added every month. Join 50,000+ professionals and get the latest BA and AI strategies delivered to your inbox every week.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-[540px] mx-auto">
              <input 
                type="email" 
                placeholder="Enter your best email"
                className="flex-grow bg-white/5 border border-white/10 rounded-xl px-6 py-5 text-white text-[1rem] focus:outline-none focus:ring-2 focus:ring-orchid transition-all"
              />
              <button className="bg-orchid hover:bg-orchid-lt text-white font-bold py-5 px-10 rounded-xl shadow-xl shadow-orchid/30 transition-all hover:-translate-y-0.5 active:translate-y-0">
                Join Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== MODALS ========== */}
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
