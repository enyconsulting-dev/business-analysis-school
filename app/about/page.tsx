"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  const differences = [
    {
      title: "Global Recognition",
      body: "Our founder’s personal brand and experience are recognized by Forbes, Canada’s Top 100 Most Powerful Women, RBC Women of Influence, and LinkedIn Top Voice.",
      icon: "award_star"
    },
    {
      title: "Working Professionals",
      body: "Our instructors are working professionals giving real-time, current industry experience — not academics teaching theory from textbooks.",
      icon: "work"
    },
    {
      title: "Practical Learning",
      body: "Hands-on, practical, case-study-driven learning. You work on real projects and scenarios, not just hypothetical theories.",
      icon: "architecture"
    },
    {
      title: "Career-First Coaching",
      body: "Career coaching is built into every program. We don’t just teach you skills and wish you luck — we help you get hired.",
      icon: "person_search"
    },
    {
      title: "Global Community",
      body: "A thriving global community of 100,000+ professionals. You’re never alone on this journey to career transformation.",
      icon: "groups"
    }
  ];

  return (
    <div className="bg-white text-navy min-h-screen selection:bg-orchid/10">
      
      {/* ========== HERO ========== */}
      <section className="relative py-24 md:py-36 bg-navy-deep text-white overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 hero-grid opacity-10 pointer-events-none"></div>
        <div className="max-w-[1140px] mx-auto px-10 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-gold/10 border border-gold/25 rounded-md text-[0.65rem] font-bold uppercase tracking-[0.15em] text-gold mb-8">
              About Us
            </div>
            <h1 className="font-serif text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.05] mb-8 italic">
              Built by a Career Changer, <br />
              <span className="text-gold italic font-normal">for Career Changers</span>
            </h1>
            <p className="text-[1.1rem] md:text-[1.3rem] text-white/50 font-light max-w-[750px] mx-auto leading-relaxed">
              We empower professionals to break through career plateaus and master the art of business analysis in the global digital economy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ========== NARRATIVE STORY ========== */}
      <section className="py-24 md:py-40 bg-white relative">
        <div className="max-w-[1140px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-16 lg:gap-24 items-start">
             <motion.div 
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="space-y-12"
             >
                <div className="space-y-8 text-[1.15rem] md:text-[1.25rem] leading-relaxed text-gray-500 font-light">
                   <p>
                     Business Analysis School was founded by <span className="text-navy font-medium">Eno Eka</span> — an accountant who transitioned into business analysis, grew her income to six figures, and became one of the most recognized thought leaders in the global business analysis community. Her philosophy is simple: if she could do it, anyone with the right system can too.
                   </p>
                   <p>
                     After relocating to Canada in 2018 and landing a six-figure consulting role within six months, Eno started coaching other professionals on how to make the same transition. What began as informal mentoring sessions on LinkedIn grew into the largest business analysis training platform in the world — now serving over 100,000 professionals across 90+ countries.
                   </p>
                   <p>
                     Today, Business Analysis School is an <span className="text-navy font-medium">IIBA Endorsed Education Provider</span> and <span className="text-navy font-medium">ScrumStudy Authorized Training Partner</span>, offering AI accelerator programs, certification preparation, career coaching, on-demand courses, and corporate training solutions. Our instructors are working business analysts and consultants who bring real-world, current experience into every session.
                   </p>
                   <p className="pt-6 border-t border-gray-100">
                     We are a brand of <span className="text-navy font-bold">ENY Consulting Inc.</span> — an award-winning global business technology and consulting firm with offices in Canada, the USA, and Nigeria.
                   </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-5">
                   <a href="https://enyconsulting.ca/founder" target="_blank" className="bg-navy hover:bg-navy-alt text-white font-bold py-5 px-10 rounded-2xl shadow-xl transition-all active:scale-[0.98] no-underline text-center">
                      Meet the Founder
                   </a>
                   <Link href="/free-training" className="bg-white border border-gray-100 hover:border-gold/30 text-navy font-bold py-5 px-10 rounded-2xl transition-all no-underline text-center">
                      Start With Free Training
                   </Link>
                </div>
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="relative lg:sticky lg:top-32"
             >
                <div className="aspect-[4/5] bg-gray-50 rounded-[3rem] border border-gray-100 overflow-hidden group relative mb-8">
                   <img 
                    src="/EnoTr8.png" 
                    alt="Eno Eka" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                
                <div className="text-center px-6">
                   <h3 className="font-serif text-3xl text-navy mb-2">Eno Eka</h3>
                   <div className="text-[0.7rem] font-bold text-gold uppercase tracking-widest mb-6">Founder & Lead Instructor</div>
                   
                   <div className="space-y-4 pt-10 border-t border-gray-200/60 w-full">
                      <div className="text-[0.65rem] font-bold text-gray-300 uppercase tracking-widest">Global Ecosystem</div>
                      <div className="flex justify-center gap-8">
                         <div className="text-center">
                            <div className="font-serif text-2xl text-navy">90+</div>
                            <div className="text-[0.5rem] text-gray-400 uppercase tracking-widest">Countries</div>
                         </div>
                         <div className="text-center">
                            <div className="font-serif text-2xl text-navy">100K+</div>
                            <div className="text-[0.5rem] text-gray-400 uppercase tracking-widest">Professionals</div>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orchid/5 blur-3xl rounded-full"></div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* ========== WHAT MAKES US DIFFERENT ========== */}
      <section className="py-24 md:py-32 bg-gray-50 border-y border-gray-100">
        <div className="max-w-[1140px] mx-auto px-6 md:px-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-serif text-[clamp(2.5rem,5vw,3.5rem)] leading-tight mb-6 italic">What Makes Us Different</h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differences.map((diff, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-10 rounded-[2.5rem] bg-white border border-transparent hover:border-gold/20 hover:shadow-2xl transition-all group ${i === 3 ? 'lg:col-span-1' : ''}`}
              >
                <div className="w-14 h-14 rounded-2xl bg-navy/5 flex items-center justify-center text-navy mb-8 group-hover:bg-navy group-hover:text-white transition-all duration-500">
                  <span className="material-symbols-outlined text-3xl">{diff.icon}</span>
                </div>
                <h4 className="text-[1.2rem] font-bold text-navy mb-4 leading-tight">{diff.title}</h4>
                <p className="text-[0.95rem] text-gray-500 font-light leading-relaxed">{diff.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="py-24 md:py-40 bg-white text-center">
        <div className="max-w-[800px] mx-auto px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-[clamp(2.5rem,5vw,3.5rem)] leading-tight mb-8 italic">Ready to Start <br className="hidden sm:block" /> Your Transformation?</h2>
            <p className="text-[1.15rem] md:text-[1.3rem] text-gray-400 font-light mb-12 leading-relaxed">
              Join 100,000+ professionals who chose to stop waiting and start building the career they deserve.
            </p>
            <Link href="/free-training" className="bg-gold hover:bg-gold-lt text-navy font-bold py-5 px-14 rounded-2xl shadow-xl shadow-gold/20 active:scale-[0.98] transition-all no-underline text-[1.1rem]">
              Start With Free Training
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
