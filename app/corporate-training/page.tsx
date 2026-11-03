"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import CorporateProposalModal from "@/components/CorporateProposalModal";

export default function CorporateTraining() {
  const [isProposalOpen, setIsProposalOpen] = useState(false);

  const includes = [
    "Training needs assessment and skills gap analysis",
    "Custom curriculum design aligned to your organization’s challenges",
    "Live instructor-led training (virtual or in-person)",
    "Certification preparation for IIBA and ScrumStudy credentials",
    "Post-training coaching and performance measurement",
    "Bulk pricing and dedicated account management"
  ];

  const agenda = [
    { day: "Day 1", title: "AI-First BA Fundamentals", topics: ["Automation Mindset", "N8N Architecture", "Prompt Engineering for Enterprise"] },
    { day: "Day 2", title: "Strategic Workflow Design", topics: ["API Integration", "Multi-Agent Systems", "Legacy Process Migration"] },
    { day: "Day 3", title: "Implementation & Roadmap", topics: ["Pilot Project Initiation", "Governance & Security", "Scaling AI Across Teams"] }
  ];

  return (
    <div className="bg-navy-deep text-white min-h-screen">
      {/* ========== HERO ========== */}
      <section className="relative py-24 md:py-36 bg-navy-alt overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 hero-grid opacity-10"></div>
        <div className="max-w-[1140px] mx-auto px-6 md:px-10 relative z-10 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/10 border border-gold/20 rounded-md text-[0.7rem] font-bold uppercase tracking-widest text-gold mb-6">
              B2B Enterprise Training
            </div>
            <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] mb-8 italic">
              Upskill Your Team With <br />
              <span className="text-gold italic font-normal">World-Class Training</span>
            </h1>
            <p className="text-[1.1rem] md:text-[1.25rem] text-white/50 font-light leading-relaxed mb-12 max-w-[640px]">
              We design and deliver custom training programs for organizations that want to build business analysis, AI, data analytics, and agile capabilities in their workforce. Scaled for teams of 10 to 10,000.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={() => setIsProposalOpen(true)}
                className="bg-gold hover:bg-gold-lt text-navy-deep font-bold py-5 px-10 rounded-xl transition-all shadow-2xl active:scale-[0.98]"
              >
                Request a Training Proposal
              </button>
              <Link
                href="/contact?interest=Corporate%20Training&request=brochure"
                className="bg-white/5 border border-white/20 text-white font-bold py-5 px-10 rounded-xl transition-all hover:bg-white/10 active:scale-[0.98] no-underline text-center"
              >
                Request Corporate Brochure
              </Link>
            </div>
          </motion.div>

          <div className="relative group hidden lg:block">
            <div className="absolute inset-0 bg-gold/5 blur-[100px] rounded-full"></div>
            <div className="relative bg-white/[0.03] border border-white/10 rounded-[3rem] p-12 backdrop-blur-md">
              <div className="space-y-6">
                {includes.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 text-[0.9rem] text-white/70">
                    <span className="material-symbols-outlined text-gold text-[1.2rem] mt-0.5">verified</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CLIENT LOGOS ========== */}
      <section className="py-16 bg-navy border-b border-white/5">
        <div className="max-w-[1140px] mx-auto px-10">
          <p className="text-center text-[0.65rem] font-bold tracking-[0.3em] uppercase text-white/20 mb-10">Trusted By Fortune 500 Companies & Government Agencies</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
             {/* Mock Logo Representations */}
             <div className="text-[1.2rem] font-bold tracking-tighter">FINANCE<span className="text-gold">CORP</span></div>
             <div className="text-[1.2rem] font-bold tracking-tighter">TECH<span className="text-gold">GLOBAL</span></div>
             <div className="text-[1.2rem] font-bold tracking-tighter">CITY<span className="text-gold">GOV</span></div>
             <div className="text-[1.2rem] font-bold tracking-tighter">ENERGY<span className="text-gold">PLUS</span></div>
             <div className="text-[1.2rem] font-bold tracking-tighter">HEALTH<span className="text-gold">SYS</span></div>
          </div>
        </div>
      </section>

      {/* ========== ROI CASE STUDY ========== */}
      <section className="py-24 bg-navy-deep relative overflow-hidden">
        <div className="max-w-[1140px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
            <div className="bg-gradient-to-br from-orchid/20 to-navy-alt border border-white/10 rounded-[3rem] p-12 relative overflow-hidden">
               <div className="relative z-10">
                 <div className="text-[4rem] font-serif text-white mb-4 italic">340%</div>
                 <h4 className="text-xl font-serif text-gold mb-6">Average ROI for Enterprise Clients</h4>
                 <p className="text-white/50 font-light leading-relaxed mb-8">
                   "After implementing the BA School AI frameworks, our project delivery speed increased by 45% and rework costs were reduced by over $2.4M within the first 12 months."
                 </p>
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full bg-white/10"></div>
                   <div>
                     <div className="text-[0.9rem] font-bold">Director of Strategy</div>
                     <div className="text-[0.7rem] text-white/30 uppercase tracking-widest">Fortune 100 Financial Institution</div>
                   </div>
                 </div>
               </div>
               <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-orchid/10 blur-[100px] rounded-full"></div>
            </div>

            <div>
              <h2 className="font-serif text-[2.5rem] lg:text-[3.5rem] leading-tight mb-8">Measurable Impact, <br className="hidden lg:block" /> Scalable Excellence</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                 {[
                   { label: "Efficiency Gain", val: "45%", desc: "In requirement elicitation & analysis" },
                   { label: "Cost Reduction", val: "$2.4M", desc: "Average annual operational savings" },
                   { label: "Talent Retention", val: "92%", desc: "Employee satisfaction after upskilling" },
                   { label: "Speed to Market", val: "3.2x", desc: "Faster project initiation phase" }
                 ].map((stat, i) => (
                   <div key={i} className="space-y-2">
                     <div className="text-3xl font-serif text-gold">{stat.val}</div>
                     <div className="text-[0.7rem] font-bold uppercase tracking-widest text-white/50">{stat.label}</div>
                     <p className="text-[0.85rem] text-white/30 font-light leading-relaxed">{stat.desc}</p>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SAMPLE AGENDA ========== */}
      <section className="py-24 bg-navy relative">
        <div className="max-w-[1140px] mx-auto px-6 md:px-10">
          <div className="text-center mb-20">
            <h2 className="font-serif text-[2.5rem] lg:text-[3.5rem] mb-6 italic">A Roadmap to Mastery</h2>
            <p className="text-white/50 font-light max-w-[600px] mx-auto leading-relaxed">A sample 3-day intensive agenda designed for high-performing business analysis and strategy teams.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {agenda.map((day, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: i * 0.1 }}
                 viewport={{ once: true }}
                 className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-orchid/30 transition-all group"
               >
                 <div className="text-gold font-serif text-2xl mb-2">{day.day}</div>
                 <h4 className="font-bold text-lg mb-8 group-hover:text-white transition-colors">{day.title}</h4>
                 <div className="space-y-4">
                    {day.topics.map((topic, j) => (
                      <div key={j} className="flex items-center gap-3 text-[0.85rem] text-white/50">
                        <span className="w-1 h-1 bg-orchid rounded-full"></span>
                        {topic}
                      </div>
                    ))}
                 </div>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* ========== INSTRUCTOR BIOS & TESTIMONIAL ========== */}
      <section className="py-24 bg-navy-deep relative overflow-hidden">
        <div className="max-w-[1140px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-md text-[0.7rem] font-bold uppercase tracking-widest text-orchid mb-8">
                Executive Leadership
              </div>
              <h2 className="font-serif text-[clamp(2.5rem,5vw,3.5rem)] leading-tight mb-8 italic">World-Class Instructors. <br /> Enterprise Experience.</h2>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                   <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gold to-navy-alt flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[3rem] text-navy">person</span>
                   </div>
                   <div>
                      <h4 className="text-xl font-bold mb-1">Eno E.</h4>
                      <div className="text-[0.7rem] font-bold uppercase tracking-widest text-gold mb-3">Founder & Lead Instructor</div>
                      <p className="text-[0.95rem] text-white/50 font-light leading-relaxed">
                        Former Six-Figure Consultant for global financial institutions and government agencies. Expert in business transformation and AI-driven efficiency.
                      </p>
                   </div>
                </div>
              </div>
            </div>

            <div className="relative">
               <div className="bg-white/[0.03] border border-white/10 rounded-[3rem] p-12 backdrop-blur-md">
                 <div className="text-gold text-[3rem] mb-6 font-serif">"</div>
                 <p className="text-[1.2rem] text-white/80 font-light leading-relaxed italic mb-8">
                   "Business Analysis School has fundamentally changed how our L&D department views technical upskilling. Their framework is not just educational—it's immediately actionable. Our analysts are now driving innovation from within."
                 </p>
                 <div className="flex items-center gap-4">
                   <div className="w-14 h-14 rounded-full bg-white/10"></div>
                   <div>
                     <div className="text-[1rem] font-bold text-white">Sarah M.</div>
                     <div className="text-[0.75rem] text-white/30 uppercase tracking-widest">Head of Learning & Development</div>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="py-32 bg-navy text-center relative overflow-hidden">
        <div className="max-w-[700px] mx-auto px-6">
          <h2 className="font-serif text-[2.5rem] lg:text-[3.5rem] leading-tight mb-8 italic">Ready to Transform Your Workforce?</h2>
          <p className="text-[1.1rem] text-white/50 font-light mb-12 leading-relaxed">Download our brochure for a deep dive into our modular training system or request a custom proposal today.</p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button 
              onClick={() => setIsProposalOpen(true)}
              className="bg-gold hover:bg-gold-lt text-navy-deep font-bold py-5 px-12 rounded-xl transition-all shadow-xl active:scale-[0.98]"
            >
              Request a Training Proposal
            </button>
            <Link
              href="/contact?interest=Corporate%20Training&request=brochure"
              className="bg-transparent border border-white/30 hover:bg-white/5 text-white font-bold py-5 px-12 rounded-xl transition-all active:scale-[0.98] no-underline"
            >
              Request Corporate Brochure
            </Link>
          </div>
        </div>
      </section>

      {/* Modals */}
      <CorporateProposalModal 
        isOpen={isProposalOpen}
        onClose={() => setIsProposalOpen(false)}
      />
    </div>
  );
}
