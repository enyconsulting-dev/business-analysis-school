"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import AcceleratorTiers from "@/components/AcceleratorTiers";
import QuizModal from "@/components/QuizModal";

export default function Programs() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const certs = [
    { title: "ECBA™ Prep", body: "An intensive training course designed for professionals new to business analysis. Get the IIBA's foundational credential to kickstart your career.", duration: "2 Weeks" },
    { title: "CCBA™ Prep", body: "For mid-level business analysts who want to validate their skills with the IIBA’s capability certification. Includes intensive mock exams.", duration: "4 Weeks" },
    { title: "CBAP™ Prep", body: "The advanced certification prep for senior BAs. Comprehensive BABOK coverage and personalized coaching to ensure you pass on your first attempt.", duration: "4-6 Weeks" },
    { title: "Scrum & Agile", body: "SMC, SPOC, AAC, and Six Sigma certifications through our official ScrumStudy partnership. Master technical agility.", duration: "Varies" },
  ];

  const onDemand = [
    { title: "BA Foundations", body: "A 15-hour self-paced course covering foundational BA and project management knowledge. Includes badge and certificate.", type: "Self-Paced" },
    { title: "Masterclass Replays", body: "On-demand access to our most popular training sessions. AI for BAs, Hiring Strategies, and Case Study deep-dives.", type: "Access Pass" },
  ];

  return (
    <div className="bg-navy-deep text-white min-h-screen">
      {/* ========== HEADER ========== */}
      <section className="py-24 md:py-32 bg-navy-alt relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-10"></div>
        <div className="max-w-[1140px] mx-auto px-6 md:px-10 relative z-10 text-center lg:text-left">
          <div className="max-w-[800px]">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orchid/10 border border-orchid/20 rounded-md text-[0.7rem] font-bold uppercase tracking-widest text-orchid mb-6">
              Our Programs
            </div>
            <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] mb-8 italic">
              Every Program Designed for <br className="hidden lg:block" />
              <span className="text-gold italic font-normal">One Outcome: Your Success</span>
            </h1>
            <p className="text-[1.1rem] md:text-[1.25rem] text-white/50 font-light leading-relaxed max-w-[700px]">
              Whether you’re starting from scratch, leveling up your existing BA career, or building an AI consulting empire — we have a program that fits your goals, timeline, and budget. Every program includes live instruction, hands-on projects, career coaching, and certification.
            </p>
          </div>
        </div>
      </section>

      {/* ========== FLAGSHIP AI ACCELERATORS ========== */}
      <AcceleratorTiers />

      {/* ========== CERTIFICATION PREP ========== */}
      <section className="py-24 bg-white relative">
        <div className="max-w-[1140px] mx-auto px-6 md:px-10">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-[600px]">
              <div className="text-[0.65rem] font-bold text-gray-400 uppercase tracking-widest mb-4">Official EEP Training</div>
              <h2 className="font-serif text-[2.5rem] lg:text-[3.5rem] text-navy leading-tight italic">Get Globally <br className="hidden sm:block" /> Recognized Certifications</h2>
            </div>
            <Link href="/certifications" className="flex items-center gap-3 bg-navy hover:bg-navy-alt text-white font-bold py-4 px-8 rounded-xl transition-all shadow-xl no-underline">
              View Schedule <span className="material-symbols-outlined text-sm">calendar_month</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certs.map((c, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-gray-50 border border-gray-100 flex flex-col hover:border-orchid/20 transition-all group"
              >
                <div className="text-[0.6rem] font-bold text-orchid uppercase tracking-widest mb-4">{c.duration}</div>
                <h3 className="font-serif text-xl text-navy mb-4 group-hover:text-orchid transition-colors">{c.title}</h3>
                <p className="text-[0.85rem] text-gray-400 font-light leading-relaxed flex-grow">{c.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== ON-DEMAND COURSES ========== */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-[1140px] mx-auto px-6 md:px-10">
          <div className="max-w-xl mb-16">
            <h2 className="font-serif text-[2.5rem] text-navy mb-4 italic">On-Demand Courses</h2>
            <p className="text-gray-500 font-light">Start learning immediately with our self-paced specialized training modules.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {onDemand.map((course, i) => (
              <div key={i} className="flex flex-col sm:flex-row gap-8 bg-white border border-gray-100 rounded-[2rem] p-8 hover:shadow-xl transition-all group">
                <div className="w-20 h-20 shrink-0 bg-gold/10 rounded-2xl flex items-center justify-center text-gold">
                  <span className="material-symbols-outlined text-[2.5rem]">{i === 0 ? 'menu_book' : 'movie'}</span>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="text-[0.65rem] font-bold text-gold uppercase tracking-widest mb-2">{course.type}</div>
                  <h3 className="font-serif text-2xl text-navy mb-3 italic">{course.title}</h3>
                  <p className="text-[0.9rem] text-gray-400 font-light leading-relaxed">{course.body}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/courses" className="inline-flex items-center gap-2 text-navy font-bold hover:text-orchid transition-colors no-underline">
              Browse All Courses <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ========== CORPORATE TRAINING ========== */}
      <section className="py-24 bg-navy-deep text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-orchid/10 to-transparent pointer-events-none"></div>
        <div className="max-w-[1140px] mx-auto px-6 md:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-24 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-md text-[0.7rem] font-bold uppercase tracking-widest text-orchid-lt mb-6">
                Corporate Training
              </div>
              <h2 className="font-serif text-[2.5rem] lg:text-[3.5rem] leading-[1.1] mb-8 italic">
                Upskill Your Team With <br />
                <span className="text-gold italic font-normal">World-Class Training</span>
              </h2>
              <p className="text-[1.1rem] text-white/50 font-light leading-relaxed mb-10 max-w-[600px]">
                We design and deliver custom training programs for organizations of all sizes—from Fortune 500 companies to government agencies. Build business analysis, AI, and agile capabilities at scale.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                {[
                  "Training needs assessment and gap analysis",
                  "Custom curriculum aligned to challenges",
                  "Live instructor-led training (Virtual/In-person)",
                  "Certification prep (IIBA & ScrumStudy)",
                  "Post-training coaching & measurement",
                  "Bulk pricing & dedicated management"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-[0.85rem] text-white/70">
                    <span className="material-symbols-outlined text-orchid text-[1.1rem]">checked</span>
                    {item}
                  </div>
                ))}
              </div>

              <Link href="/contact?type=corporate" className="inline-flex items-center justify-center gap-3 bg-white text-navy-deep font-bold py-4 px-10 rounded-xl transition-all shadow-xl hover:-translate-y-0.5 no-underline">
                Request Corporate Proposal
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-square bg-white/5 border border-white/10 rounded-[2.5rem] flex items-center justify-center p-12 overflow-hidden shadow-2xl">
                 <div className="text-center">
                    <div className="text-[4rem] font-serif text-white/10 select-none leading-none mb-4">CORP</div>
                    <div className="text-[0.7rem] font-bold tracking-[0.3em] text-white/30 uppercase">Scaled Excellence</div>
                 </div>
                 <div className="absolute top-10 right-10 w-24 h-24 bg-orchid/20 blur-3xl"></div>
                 <div className="absolute bottom-10 left-10 w-32 h-32 bg-gold/10 blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== ADVISORY (FINAL CTA) ========== */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-[700px] mx-auto px-6">
          <div className="w-16 h-1 bg-orchid/30 mx-auto mb-10 rounded-full"></div>
          <h2 className="font-serif text-[clamp(2.5rem,5vw,3.5rem)] text-navy leading-tight mb-6 italic">Not Sure Where to Start?</h2>
          <p className="text-[1.1rem] text-gray-500 font-light mb-12 leading-relaxed">
            Let us help you choose the best path based on your background and objectives. Book a free consultation or take our assessment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a href="https://link.gohighlevel.com/enrollment-call" className="bg-navy hover:bg-navy-alt text-white font-bold py-4 px-10 rounded-xl transition-all shadow-xl active:scale-[0.98] no-underline">
              Book a Free Enrollment Call
            </a>
            <button 
              onClick={() => setIsQuizOpen(true)}
              className="bg-white border border-navy text-navy hover:bg-gray-50 font-bold py-4 px-10 rounded-xl transition-all shadow-lg active:scale-[0.98]"
            >
              Take the Career Assessment Quiz
            </button>
          </div>
        </div>
      </section>

      {/* Modals */}
      <QuizModal 
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
      />
    </div>
  );
}
