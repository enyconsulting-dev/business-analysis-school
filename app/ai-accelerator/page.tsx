"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import AcceleratorTiers from "@/components/AcceleratorTiers";

export default function AIAccelerator() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { 
      q: "Do I need a tech degree or coding experience?", 
      a: "Absolutely not. This program is specifically designed for professionals without a technical background. Business analysis is about understanding business problems and recommending solutions — skills you likely already have from your current career. AI tools are learned within the program." 
    },
    { 
      q: "How quickly can I land a job after completing the program?", 
      a: "Our students typically land roles within 30–90 days of completing the program, depending on their job market, effort level, and prior experience. Our career coaching, resume optimization, and interview prep are designed to accelerate this timeline." 
    },
    { 
      q: "Are the certifications globally recognized?", 
      a: "Yes. We prepare students for IIBA certifications (ECBA, CCBA, CBAP) and ScrumStudy certifications (SMC, SPOC, Six Sigma), which are recognized by employers in over 120 countries worldwide." 
    },
    { 
      q: "What if I’m not sure which tier is right for me?", 
      a: "Book a free 15-minute enrollment call with our team. We’ll assess your background, goals, and budget and recommend the best fit. No pressure, no obligation." 
    },
    { 
      q: "Is there a refund policy?", 
      a: "We stand behind our program’s quality. Full refund policy details are available on our terms page. We want you to succeed — that’s why we offer enrollment consultations before you commit." 
    },
    { 
      q: "What makes this different from free AI courses online?", 
      a: "Free courses give you information. We give you transformation. Live coaching, 1:1 strategy sessions, career support, certification, accountability, and a community of professionals going through the same journey. Information without implementation is just entertainment." 
    },
    { 
      q: "Can my employer sponsor my enrollment?", 
      a: "Yes. Many of our students have their employers cover part or all of the cost as professional development. We provide official invoices and documentation for corporate sponsorship requests. Contact our team for details." 
    }
  ];

  // FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="bg-navy-deep text-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ========== HERO ========== */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-15"></div>
        <div className="max-w-[1140px] mx-auto px-6 md:px-10 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-[900px] mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/10 border border-gold/20 rounded-md text-[0.7rem] font-bold uppercase tracking-widest text-gold mb-6">
              AI Business Accelerator — Enrolling Now
            </div>
            <h1 className="font-serif text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.05] mb-8 italic">
              Master AI-Driven Business Analysis. <br />
              <span className="text-gold italic font-normal">Land Six-Figure Roles.</span> <br />
              Build a Consulting Empire.
            </h1>
            <p className="text-[1.15rem] md:text-[1.3rem] leading-relaxed text-white/50 font-light mb-12 max-w-[800px] mx-auto">
              The 6-week intensive program that transforms professionals into certified AI business analysts, strategists, and consultants. Three tiers. Three career trajectories. One proven system.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <a href="#tiers" className="bg-gold hover:bg-gold-lt text-navy-deep font-bold py-5 px-10 rounded-xl transition-all shadow-2xl active:scale-[0.98] no-underline">
                Choose Your Tier & Enroll
              </a>
              <a href="https://link.gohighlevel.com/enrollment-call" className="bg-white/10 hover:bg-white/20 text-white font-bold py-5 px-10 rounded-xl border border-white/10 transition-all backdrop-blur-sm no-underline">
                Book a Call With Enrollment Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== THE STAKES ========== */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="max-w-[1140px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] leading-tight mb-8">
                AI Is Not Replacing Business Analysts. <br />
                <span className="text-orchid italic">AI Is Replacing Business Analysts Who Don’t Know AI.</span>
              </h2>
              <div className="space-y-6 text-[1.1rem] text-white/50 font-light leading-relaxed">
                <p>
                  The professionals who master AI-driven business analysis today will command the highest salaries, land the most exciting roles, and build the most valuable consulting practices over the next decade.
                </p>
                <p>
                  The professionals who wait will watch from the sidelines as their colleagues, their peers, and even people with less experience leapfrog them — simply because they invested in the right skills at the right time.
                </p>
                <p className="text-white font-medium">
                  This program gives you the skills, the certifications, the tools, and the coaching to be one of the professionals who leads — not one who watches.
                </p>
              </div>
            </motion.div>
            <div className="relative aspect-square rounded-[3rem] bg-gradient-to-br from-orchid/20 to-navy-alt border border-white/10 flex items-center justify-center p-12">
               <div className="text-center">
                 <div className="text-[6rem] font-serif text-white/5 select-none leading-none">FUTURE</div>
                 <div className="mt-4 text-[0.7rem] font-bold tracking-[0.4em] text-gold uppercase">Industry Transformation</div>
               </div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 border border-white/5 rounded-full animate-[spin_20s_linear_infinite]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHO THIS IS FOR ========== */}
      <section className="py-24 bg-navy-deep relative">
        <div className="max-w-[1140px] mx-auto px-6 md:px-10">
          <div className="text-center mb-20">
            <h3 className="font-serif text-[2.5rem] lg:text-[3.5rem] mb-4 italic">This Program Is For You If:</h3>
            <div className="w-20 h-1 bg-gold/30 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {[
               "You’re a business analyst who wants to add AI skills and increase your market value by 50–150%",
               "You’re a project manager, product manager, or operations professional who wants to transition into AI-driven roles",
               "You’re an experienced professional who wants to build an AI consulting practice and start earning consulting revenue",
               "You want globally recognized certifications that prove your AI business expertise",
               "You’re tired of watching less qualified people get promoted because they understand AI and you don’t"
             ].map((point, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: i * 0.1 }}
                 viewport={{ once: true }}
                 className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/5 hover:border-gold/30 transition-all flex gap-5 group"
               >
                 <span className="text-gold text-2xl font-serif">0{i+1}</span>
                 <p className="text-[0.95rem] leading-relaxed text-white/60 group-hover:text-white transition-colors">{point}</p>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* ========== TIER COMPARISON ========== */}
      <div id="tiers">
        <AcceleratorTiers />
      </div>

      {/* ========== RESULTS (SOCIAL PROOF) ========== */}
      <section className="py-24 bg-white text-navy relative overflow-hidden">
        <div className="max-w-[1140px] mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-navy/5 border border-navy/10 rounded-md text-[0.7rem] font-bold uppercase tracking-widest text-navy mb-4">
              Real Impact
            </div>
            <h2 className="font-serif text-[clamp(2.5rem,5vw,3.5rem)] leading-tight italic">The Proof Is in the Results</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Graduates earning $95K–$180K in BA and AI strategy roles across North America",
              "Graduates landing Fortune 500 positions within 60 days of completing the program",
              "Graduates launching consulting practices billing $100–$200 per hour",
              "Graduates passing CBAP certification on their first attempt",
              "Graduates transitioning from non-tech careers (accounting, teaching) into tech roles"
            ].map((res, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-gray-50 border border-gray-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-2xl transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center text-navy mb-6 group-hover:bg-navy group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[1.4rem]">verified</span>
                </div>
                <p className="text-[1rem] leading-relaxed font-medium text-navy/80">{res}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FAQ SECTION ========== */}
      <section className="py-24 bg-navy relative">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-[2.5rem] lg:text-[3.5rem] mb-4">Frequently Asked Questions</h2>
            <div className="w-16 h-1 bg-gold/50 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-white/10 rounded-2xl overflow-hidden bg-white/[0.02]">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 text-left flex justify-between items-center gap-4 hover:bg-white/[0.03] transition-colors"
                >
                  <span className="text-[1.05rem] font-medium text-white/90">{faq.q}</span>
                  <span className={`material-symbols-outlined transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}>
                    expand_more
                  </span>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-white/50 text-[0.95rem] leading-relaxed border-t border-white/5 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="py-32 bg-navy-deep text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orchid/10 via-transparent to-gold/5 pointer-events-none"></div>
        <div className="max-w-[700px] mx-auto px-6 relative z-10">
          <h2 className="font-serif text-[2.5rem] lg:text-[4rem] leading-tight mb-8 italic">Not Sure Which Tier <br /> <span className="text-gold font-normal not-italic">Is Right for You?</span></h2>
          <p className="text-[1.15rem] text-white/50 font-light mb-12 leading-relaxed">
            Book a free 15-minute call with our enrollment team. We’ll listen to your goals, assess your background, and recommend the tier that gives you the best return.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a href="https://link.gohighlevel.com/enrollment-call" className="bg-white hover:bg-gray-100 text-navy-deep font-bold py-5 px-12 rounded-xl transition-all shadow-xl active:scale-[0.98] no-underline">
              Book a Free Enrollment Call
            </a>
            <a href="https://link.gohighlevel.com/tier3-application" className="bg-gold hover:bg-gold-lt text-navy-deep font-bold py-5 px-12 rounded-xl transition-all shadow-xl active:scale-[0.98] no-underline">
              Apply for Tier 3 (10 Spots Only)
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
