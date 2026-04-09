"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Certifications() {
  const certifications = [
    {
      id: "ecba",
      level: "Entry Level",
      title: "ECBA™ Certification Prep",
      fullTitle: "Entry Certificate in Business Analysis",
      salary: "$65,000 – $85,000",
      duration: "2 Weeks Intensive",
      overview: "Designed for professionals who are new to business analysis and want a globally recognized credential to kickstart their career.",
      whoItIsFor: "Graduates, career changers, and professionals with 0-2 years of experience in business analysis or project environments.",
      curriculum: [
        "BABOK Guide v3 Foundation & Framework",
        "Business Analysis Key Concepts & Underlying Competencies",
        "Techniques for Documenting & Managing Requirements",
        "Solution Evaluation & Validation Basics",
        "21 IIBA™ Professional Development (PD) Hours provided"
      ],
      schedule: "Next Cohort: Monday & Thursday (Online Live)",
      pricing: "Enquire for Pricing / Payment Plans Available",
      icon: "school",
      color: "blue"
    },
    {
      id: "ccba",
      level: "Intermediate",
      title: "CCBA™ Certification Prep",
      fullTitle: "Certification of Capability in Business Analysis",
      salary: "$85,000 – $110,000",
      duration: "4 Weeks Intensive",
      overview: "Validated training for intermediate business analysts who want to demonstrate their capability and practical expertise.",
      whoItIsFor: "BAs with 2-3 years of practical experience looking to level up their roles and increase their market value.",
      curriculum: [
        "Strategic Analysis & Elicitation Mastery",
        "Complex Requirements Life Cycle Management",
        "Case Study deep-dives & scenario-based logic",
        "Advanced Technique Application for IIBA exams",
        "21 IIBA™ Professional Development (PD) Hours provided"
      ],
      schedule: "Next Cohort: Tuesday & Friday (Online Live)",
      pricing: "Enquire for Pricing / Payment Plans Available",
      icon: "workspace_premium",
      color: "orchid"
    },
    {
      id: "cbap",
      level: "Professional/Advanced",
      title: "CBAP™ Certification Prep",
      fullTitle: "Certified Business Analysis Professional",
      salary: "$115,000 – $160,000+",
      duration: "4-6 Weeks Comprehensive",
      overview: "The advanced 'Gold Standard' for senior business analysts. Detailed BABOK coverage and high-stakes exam preparation.",
      whoItIsFor: "Senior professionals with 5+ years of BA experience who aim for leadership roles and enterprise-level consultancy.",
      curriculum: [
        "Enterprise-wide Strategic Planning & Alignment",
        "Advanced Requirements Analysis & Design Definition",
        "Personalized exam coaching & application support",
        "BABOK Knowledge Area Deep-Dives (Scenario focus)",
        "35 IIBA™ Professional Development (PD) Hours provided"
      ],
      schedule: "Next Cohort: Saturday Bootcamps (Online Live)",
      pricing: "Enquire for Pricing / Payment Plans Available",
      icon: "star",
      color: "gold"
    }
  ];

  const scrumCerts = ["SMC (Scrum Master Certified)", "SPOC (Scrum Product Owner Certified)", "AAC (Agile Analyst Certified)", "SSGB (Six Sigma Green Belt)", "SSBB (Six Sigma Black Belt)"];

  return (
    <>
      {/* SEO Title Handled by Next.js metadata in layout or here via Head if needed, but usually in layout or metadata export for App Router. App router uses export const metadata in page.tsx or layout.tsx. I will add it as an export below the component. */}
      
      <div className="bg-navy-deep text-white min-h-screen font-sans selection:bg-orchid/30">
        
        {/* ========== HERO ========== */}
        <section className="relative py-24 md:py-32 overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 hero-grid opacity-10 pointer-events-none"></div>
          <div className="max-w-[1140px] mx-auto px-10 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-gold/10 border border-gold/25 rounded-md text-[0.65rem] font-bold uppercase tracking-[0.15em] text-gold mb-8">
                IIBA™ Official Endorsed Education Provider
              </div>
              <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] mb-8 italic">
                Get Globally Recognized <br />
                <span className="text-gold italic font-normal">Certifications</span>
              </h1>
              <p className="text-[1.1rem] md:text-[1.25rem] text-white/50 font-light max-w-[750px] mx-auto mb-12 leading-relaxed">
                Join 100,000+ professionals who achieved career mastery through our certified training programs. We don't just teach the BABOK Guide; we help you master it and pass your exam on the first attempt.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-8 md:p-12 backdrop-blur-md"
            >
              {[
                { label: "1st Time Pass Rate", val: "98%" },
                { label: "Practice MCQs", val: "1,200+" },
                { label: "PD Hours Awarded", val: "21-35" },
                { label: "Official Provider", val: "EEP™" }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                   <div className="font-serif text-3xl text-gold mb-2">{stat.val}</div>
                   <div className="text-[0.6rem] font-bold uppercase tracking-widest text-white/30">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ========== CERTIFICATION DETAILS ========== */}
        <section className="py-24 bg-navy relative">
          <div className="max-w-[1140px] mx-auto px-6 md:px-10">
            <div className="space-y-32">
              {certifications.map((cert, idx) => (
                <motion.div 
                  key={cert.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 items-start"
                >
                  {/* Left Column: Visual/Title */}
                  <div className="sticky top-24">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-md text-[0.65rem] font-bold uppercase tracking-widest text-white/50 mb-6 font-sans">
                      {cert.level} — Salary Up to {cert.salary.split('–')[1] || cert.salary}
                    </div>
                    <h2 className="font-serif text-[3rem] mb-6 italic leading-tight text-white">{cert.title}</h2>
                    <p className="text-[1.1rem] text-white/50 font-light leading-relaxed mb-10 max-w-[400px]">
                      {cert.overview}
                    </p>
                    
                    <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 mb-10">
                      <div className="text-[0.6rem] font-bold text-gold uppercase tracking-widest mb-4">Salary Benchmark</div>
                      <div className="font-serif text-4xl text-white">{cert.salary}</div>
                      <div className="text-[0.8rem] text-white/30 mt-2 font-light">Global average for {cert.id.toUpperCase()} holders.</div>
                    </div>

                    <a href="https://link.gohighlevel.com/enrollment-call" className="inline-flex items-center gap-3 bg-white text-navy font-bold py-4 px-10 rounded-xl transition-all shadow-xl hover:-translate-y-0.5 no-underline">
                      Talk to a Certification Advisor
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </a>
                  </div>

                  {/* Right Column: Details */}
                  <div className="bg-white/[0.03] border border-white/5 rounded-[3rem] p-8 md:p-14">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                      <div>
                        <h4 className="text-[0.65rem] font-bold uppercase tracking-widest text-gold mb-6 border-b border-gold/20 pb-2">Who It's For</h4>
                        <p className="text-[0.95rem] text-white/70 font-light leading-relaxed">{cert.whoItIsFor}</p>
                      </div>
                      <div>
                        <h4 className="text-[0.65rem] font-bold uppercase tracking-widest text-gold mb-6 border-b border-gold/20 pb-2">Program Duration</h4>
                        <p className="text-[0.95rem] text-white/70 font-light leading-relaxed">{cert.duration}</p>
                      </div>
                    </div>

                    <div className="mb-16">
                      <h4 className="text-[0.65rem] font-bold uppercase tracking-widest text-gold mb-8 border-b border-gold/20 pb-2">Curriculum Outline</h4>
                      <div className="space-y-5">
                        {cert.curriculum.map((item, i) => (
                          <div key={i} className="flex items-start gap-4">
                            <span className="w-1.5 h-1.5 bg-orchid rounded-full mt-2 shrink-0"></span>
                            <span className="text-[1.05rem] text-white/80 font-light">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-10 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div>
                          <div className="text-[0.65rem] font-bold uppercase tracking-widest text-white/30 mb-2">Schedule</div>
                          <div className="text-[0.9rem] text-white/80 font-medium">{cert.schedule}</div>
                       </div>
                       <div>
                          <div className="text-[0.65rem] font-bold uppercase tracking-widest text-white/30 mb-2">Investment</div>
                          <div className="text-[0.9rem] text-white/80 font-medium">{cert.pricing}</div>
                       </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== SCRUM & AGILE (SCRUMSTUDY) ========== */}
        <section className="py-24 bg-navy-deep relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-orchid/5 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="max-w-[1140px] mx-auto px-10 relative z-10">
             <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                   <div className="inline-flex items-center gap-2 px-3 py-1 bg-orchid/10 border border-orchid/20 rounded-md text-[0.7rem] font-bold uppercase tracking-widest text-orchid mb-6">
                      In Partnership with ScrumStudy™
                   </div>
                   <h2 className="font-serif text-[clamp(2.5rem,5vw,3.5rem)] mb-8 italic text-white">Scrum & Agile <br className="hidden sm:block" /> Certifications</h2>
                   <p className="text-[1.1rem] text-white/50 font-light leading-relaxed mb-10 max-w-[600px]">
                      Master the practical implementation of Agile and Scrum frameworks. Through our official partnership with ScrumStudy, we provide globally recognized certifications that every modern Business Analyst needs.
                   </p>
                   
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                      {scrumCerts.map((cert, i) => (
                        <div key={i} className="flex items-center gap-3 text-[0.9rem] text-white/80 py-3 px-5 bg-white/5 border border-white/10 rounded-xl">
                           <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0"></span>
                           {cert}
                        </div>
                      ))}
                   </div>

                   <a href="https://link.gohighlevel.com/enrollment-call" className="bg-transparent border border-white/30 hover:bg-white/5 text-white font-bold py-4 px-10 rounded-xl transition-all no-underline inline-block">
                      View Certification Schedule
                   </a>
                </motion.div>

                <motion.div
                   initial={{ opacity: 0, scale: 0.9 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   className="aspect-square bg-gradient-to-br from-orchid/20 to-navy-alt border border-white/10 rounded-[3.5rem] p-12 flex items-center justify-center relative overflow-hidden group shadow-2xl"
                >
                   <div className="text-center group-hover:scale-105 transition-transform duration-700">
                      <div className="text-[6rem] font-serif text-white/5 mb-4 select-none">AGILE</div>
                      <div className="text-[0.7rem] font-bold tracking-[0.4em] text-white/30 uppercase">Enterprise Technical Agility</div>
                   </div>
                   <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gold/10 blur-3xl rounded-full"></div>
                </motion.div>
             </div>
          </div>
        </section>

        {/* ========== PASS GUARANTEE & FINAL CTA ========== */}
        <section className="py-24 md:py-40 bg-navy text-center relative overflow-hidden">
          <div className="absolute inset-0 hero-grid opacity-10 pointer-events-none"></div>
          <div className="max-w-[800px] mx-auto px-10 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-10 text-[3rem]">🎯</div>
              <h2 className="font-serif text-[clamp(2rem,5vw,3rem)] mb-6 italic leading-tight">Our First-Time Pass Guarantee</h2>
              <p className="text-[1.15rem] md:text-[1.3rem] text-white/60 font-light mb-12 leading-relaxed">
                We are so confident in our preparation framework that we promise: <br />
                <span className="text-white font-bold">Pass your IIBA™ exam on your first attempt</span> or we will coach you for free until you do. No fine print. Just results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="https://link.gohighlevel.com/enrollment-call" className="bg-gold hover:bg-gold-lt text-navy font-bold py-5 px-12 rounded-2xl shadow-xl shadow-gold/20 active:scale-[0.98] transition-all no-underline">
                  Book a Consultation Call
                </a>
                <Link href="/contact" className="bg-white/5 hover:bg-white/10 text-white font-bold py-5 px-12 rounded-2xl border border-white/10 active:scale-[0.98] transition-all no-underline">
                  Contact Enrollment Team
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
