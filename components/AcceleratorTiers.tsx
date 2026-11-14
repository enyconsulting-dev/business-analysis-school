"use client";

import { useState } from "react";
import ApplicationModal from "./ApplicationModal";

interface AcceleratorTiersProps {
  showVipOffer?: boolean;
}

export default function AcceleratorTiers({ showVipOffer = false }: AcceleratorTiersProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-24 bg-navy-deep text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      <div className="max-w-[1140px] mx-auto px-6 md:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orchid/20 border border-orchid/35 rounded-md text-[0.7rem] font-bold uppercase tracking-widest text-orchid-lt mb-6">
            Our Flagship AI Programs
          </div>
          <h2 className="font-serif text-[clamp(2.5rem,5vw,3.5rem)] leading-tight mb-6 italic">
            Choose Your Path to a <span className="text-gold italic">Six-Figure</span> AI Career
          </h2>
          <p className="text-[1.1rem] text-white/50 font-light max-w-[640px] mx-auto leading-relaxed">
            Three tiers. Three career trajectories. One proven system. Every tier includes certification, coaching, and career support. Choose the level that matches where you are and where you want to be.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Tier 1 */}
          <div className="flex flex-col bg-[#0A1A35] border border-white/5 rounded-[2.5rem] p-8 md:p-10 shadow-2xl transition-all hover:border-orchid/30 hover:-translate-y-1 group">
            <div className="mb-8">
              <div className="text-[0.65rem] font-bold text-[#4FC3F7] uppercase tracking-[0.2em] mb-3">Tier 1 — Career Accelerator</div>
              <h3 className="font-serif text-2xl text-white mb-4 italic">Certified AI Business Analyst</h3>
              <div className="space-y-1">
                <div className="font-serif text-[2.5rem] tracking-tight leading-none">$1,997</div>
                <div className="text-[0.8rem] text-white/30 font-light italic">Regular: $2,500 | Value: $8,750</div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/5 space-y-1">
                <div className="text-[0.7rem] font-bold text-white/60 uppercase tracking-widest">Payment Plans</div>
                <div className="text-[0.75rem] text-[#4FC3F7] font-medium">Pay in full: $1,997 | 2 payments: $1,100 | 3 payments: $800</div>
              </div>
            </div>

            <div className="space-y-4 mb-10 flex-grow">
               <ul className="space-y-3 list-none p-0">
                  <li className="flex items-start gap-3 text-[0.85rem] text-white/70">
                    <span className="material-symbols-outlined text-[1.1rem] text-green mt-0.5">check_circle</span>
                    AI Transformation Mindset & Foundation
                  </li>
                  <li className="flex items-start gap-3 text-[0.85rem] text-white/70">
                    <span className="material-symbols-outlined text-[1.1rem] text-green mt-0.5">check_circle</span>
                    N8N Workflow Automation Mastery
                  </li>
                  <li className="flex items-start gap-3 text-[0.85rem] text-white/70">
                    <span className="material-symbols-outlined text-[1.1rem] text-green mt-0.5">check_circle</span>
                    Advanced N8N Deployment
                  </li>
                  <li className="flex items-start gap-3 text-[0.85rem] text-white/70">
                    <span className="material-symbols-outlined text-[1.1rem] text-green mt-0.5">check_circle</span>
                    API Integration & Credentials (10 APIs)
                  </li>
                  <li className="flex items-start gap-3 text-[0.85rem] text-white/70">
                    <span className="material-symbols-outlined text-[1.1rem] text-green mt-0.5">check_circle</span>
                    Advanced Prompt Engineering (500+)
                  </li>
                  <li className="flex items-start gap-3 text-[0.85rem] text-white/70">
                    <span className="material-symbols-outlined text-[1.1rem] text-green mt-0.5">check_circle</span>
                    Multi-Agent System Architecture
                  </li>
                  {/* ... More hidden items to save space or just abbreviated */}
                  <li className="text-[0.75rem] text-white/30 italic pl-8">+ Support Automation & Career Acceleration</li>
               </ul>
               <div className="mt-6 p-4 bg-white/5 rounded-2xl border border-white/5 text-[0.75rem] leading-relaxed text-white/60">
                 <strong className="text-white block mb-1">Support:</strong> 
                 12 Weekly Group Coaching Calls | 3 Monthly 1:1 Strategy Sessions | 6-Month Support | Certificate of Completion
               </div>
            </div>

            <div className="space-y-4">
              <div className="text-[0.7rem] text-center text-white/30 uppercase tracking-widest">50 Spots Available Per Cohort</div>
              <a href="/contact" className="flex items-center justify-center gap-3 bg-[#4FC3F7] hover:bg-[#81D4FA] text-navy-deep font-bold py-4 rounded-xl transition-all shadow-xl hover:-translate-y-0.5 group/btn no-underline">
                Enroll Now — 50 Spots
                <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
              </a>
              <div className="text-[0.75rem] text-center bg-green/10 text-green py-2 px-3 rounded-lg border border-green/20">
                <strong>Pay-in-Full Bonus:</strong> $900 Cert Bundle FREE
              </div>
            </div>
          </div>

          {/* Tier 2 */}
          <div className="flex flex-col bg-[#1A0A2E] border-2 border-orchid rounded-[3rem] p-8 md:p-10 shadow-2xl transition-all hover:-translate-y-1 group relative">
            <div className="absolute -top-5 right-10 bg-gold text-navy-deep text-[0.7rem] font-bold tracking-widest uppercase px-5 py-2 rounded-full shadow-2xl">
              Most Popular
            </div>
            
            <div className="mb-8">
              <div className="text-[0.65rem] font-bold text-orchid-lt uppercase tracking-[0.2em] mb-3">Tier 2 — Strategy & Leadership</div>
              <h3 className="font-serif text-2xl text-white mb-4 italic">Certified AI Business Strategist</h3>
              <div className="space-y-1">
                <div className="font-serif text-[2.5rem] tracking-tight leading-none">$2,997</div>
                <div className="text-[0.8rem] text-white/30 font-light italic">Regular: $3,500 | Value: $18,500</div>
              </div>
            </div>

            <div className="space-y-4 mb-10 flex-grow">
               <div className="text-[0.75rem] font-bold text-orchid-lt uppercase tracking-widest mb-4">Includes Everything in Tier 1 Plus:</div>
               <ul className="space-y-3 list-none p-0">
                  <li className="flex items-start gap-3 text-[0.85rem] text-white/70">
                    <span className="material-symbols-outlined text-[1.1rem] text-orchid mt-0.5">stars</span>
                    Advanced AI Strategy Development
                  </li>
                  <li className="flex items-start gap-3 text-[0.85rem] text-white/70">
                    <span className="material-symbols-outlined text-[1.1rem] text-orchid mt-0.5">stars</span>
                    Executive Presence & Leadership 
                  </li>
                  <li className="flex items-start gap-3 text-[0.85rem] text-white/70">
                    <span className="material-symbols-outlined text-[1.1rem] text-orchid mt-0.5">stars</span>
                    Advanced Industry Applications
                  </li>
                  <li className="flex items-start gap-3 text-[0.85rem] text-white/70">
                    <span className="material-symbols-outlined text-[1.1rem] text-orchid mt-0.5">stars</span>
                    C-Level Executive Network Access
                  </li>
                  <li className="flex items-start gap-3 text-[0.85rem] text-white/70">
                    <span className="material-symbols-outlined text-[1.1rem] text-orchid mt-0.5">stars</span>
                    Speaking Platform & Media/PR Support
                  </li>
                  <li className="flex items-start gap-3 text-[0.85rem] text-white/70">
                    <span className="material-symbols-outlined text-[1.1rem] text-orchid mt-0.5">stars</span>
                    Board Positioning Preparation
                  </li>
               </ul>
               <div className="mt-6 p-4 bg-white/5 rounded-2xl border border-white/5 text-[0.75rem] leading-relaxed text-white/60">
                 <strong className="text-white block mb-1">Support:</strong> 
                 Bi-Weekly Executive Group Calls | Monthly 1:1 Executive Coaching (6 sessions) | 9-Month Premium Support
               </div>
            </div>

            <div className="space-y-4">
              <div className="text-[0.7rem] text-center text-white/30 uppercase tracking-widest">25 Spots Available Per Cohort</div>
              <a href="/contact" className="flex items-center justify-center gap-3 bg-orchid hover:bg-orchid-lt text-white font-bold py-4 rounded-xl transition-all shadow-xl hover:-translate-y-0.5 group/btn no-underline">
                Enroll Now — 25 Spots
                <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
              </a>
              <div className="text-[0.75rem] text-center bg-green/10 text-green py-2 px-3 rounded-lg border border-green/20">
                <strong>Pay-in-Full Bonus:</strong> $900 Cert Bundle FREE
              </div>
            </div>
          </div>

          {/* Tier 3 */}
          <div className="flex flex-col bg-[#1A0A0A] border border-gold/40 rounded-[2.5rem] p-8 md:p-10 shadow-2xl transition-all hover:border-gold hover:-translate-y-1 group">
            <div className="mb-8">
              <div className="text-[0.65rem] font-bold text-gold uppercase tracking-[0.2em] mb-3">Tier 3 — The Empire Builder</div>
              <h3 className="font-serif text-2xl text-white mb-4 italic">Certified AI Business Consultant</h3>
              <div className="space-y-1">
                <div className="font-serif text-[2.5rem] tracking-tight leading-none italic">$4,997</div>
                <div className="text-[0.8rem] text-white/30 font-light italic">VIP Option: $9,997 | Value: $45,000</div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/5 space-y-1">
                <div className="text-[0.7rem] font-bold text-white/60 uppercase tracking-widest">Payment Plans</div>
                <div className="text-[0.75rem] text-gold font-medium">5-month plan: $1,050/month | Corporate Sponsorship</div>
              </div>
            </div>

            <div className="space-y-4 mb-10 flex-grow">
               <div className="text-[0.75rem] font-bold text-gold uppercase tracking-widest mb-4">Includes Tier 1 & 2 PLUS:</div>
               <ul className="space-y-3 list-none p-0">
                  <li className="flex items-start gap-3 text-[0.85rem] text-white/70">
                    <span className="material-symbols-outlined text-[1.1rem] text-gold mt-0.5">business_center</span>
                    Complete Business Setup (Legal & Branding)
                  </li>
                  <li className="flex items-start gap-3 text-[0.85rem] text-white/70">
                    <span className="material-symbols-outlined text-[1.1rem] text-gold mt-0.5">business_center</span>
                    Sales Funnels & Client Acquisition 
                  </li>
                  <li className="flex items-start gap-3 text-[0.85rem] text-white/70">
                    <span className="material-symbols-outlined text-[1.1rem] text-gold mt-0.5">business_center</span>
                    Done-With-You Business Launch
                  </li>
                  <li className="flex items-start gap-3 text-[0.85rem] text-white/70">
                    <span className="material-symbols-outlined text-[1.1rem] text-gold mt-0.5">business_center</span>
                    24 Coaching Calls + Executive Coaching
                  </li>
                  <li className="flex items-start gap-3 text-[0.85rem] text-white/70">
                    <span className="material-symbols-outlined text-[1.1rem] text-gold mt-0.5">business_center</span>
                    Media & PR Support + Board Positioning
                  </li>
                  <li className="flex items-start gap-3 text-[0.85rem] text-white/70">
                    <span className="material-symbols-outlined text-[1.1rem] text-gold mt-0.5">business_center</span>
                    12-Month Premium VIP Support
                  </li>
               </ul>
               <div className="mt-6 p-4 bg-white/5 rounded-2xl border border-white/5 text-[0.75rem] leading-relaxed text-white/60 italic">
                 &ldquo;For professionals building an AI consulting practice to generate six-figure+ revenue within 12 months.&rdquo;
               </div>
            </div>

            <div className="space-y-4">
              <div className="text-[0.7rem] text-center text-white/30 uppercase tracking-widest">Only 10 Spots per cohort</div>
              <a href="/contact" className="w-full flex items-center justify-center gap-3 bg-white text-navy-deep font-bold py-4 rounded-xl transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 group/btn no-underline">
                Apply Now — Only 10 Spots
                <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">assignment_turned_in</span>
              </a>
              <div className="text-[0.75rem] text-center bg-green/10 text-green py-2 px-3 rounded-lg border border-green/20">
                <strong>Pay-in-Full Bonus:</strong> $900 Cert Bundle FREE
              </div>
            </div>
          </div>

          {showVipOffer && (
            <article className="lg:col-span-3 relative overflow-hidden rounded-[2.5rem] border border-gold/40 bg-gradient-to-br from-[#21150A] via-[#11182A] to-[#0A1A35] p-8 shadow-2xl md:p-10">
              <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
              <div className="relative grid gap-10 lg:grid-cols-[0.85fr_1.5fr] lg:items-start">
                <div className="flex h-full flex-col">
                  <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-gold">
                    <span className="material-symbols-outlined text-base">workspace_premium</span>
                    New · VIP Business Consulting
                  </div>
                  <div className="mb-3 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-gold/80">
                    Certified AI Business Consultant · VIP Accelerator
                  </div>
                  <h3 className="mb-4 font-serif text-3xl italic leading-tight text-white md:text-4xl">
                    Build your consulting business with Eno by your side.
                  </h3>
                  <p className="mb-8 max-w-xl text-sm leading-relaxed text-white/60">
                    The complete consulting and AI consulting launch system, plus three months of direct, one-on-one access to Eno so you never have to figure out a step alone.
                  </p>

                  <div className="mb-7 mt-auto">
                    <div className="font-serif text-5xl tracking-tight text-white">$9,997</div>
                    <div className="mt-2 text-xs text-white/45">Grand price · VIP Business Consulting</div>
                  </div>
                  <a
                    href="/contact"
                    className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gold px-6 py-4 font-bold text-navy-deep no-underline shadow-xl shadow-gold/10 transition-all hover:-translate-y-0.5 hover:bg-gold-lt sm:w-auto"
                  >
                    Apply for VIP Consulting
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <section className="rounded-2xl border border-white/10 bg-black/10 p-5">
                    <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-gold">
                      Consulting Accelerator · 7 Core Modules
                    </h4>
                    <ul className="space-y-2.5 text-xs leading-relaxed text-white/70">
                      <li>Consulting Clarity Blueprint <span className="text-white/40">· $497</span></li>
                      <li>Consulting Business Launchpad <span className="text-white/40">· $297</span></li>
                      <li>Visibility and Marketing System <span className="text-white/40">· $497</span></li>
                      <li>Client Acquisition and Sales System <span className="text-white/40">· $597</span></li>
                      <li>Delivery and Client Success System <span className="text-white/40">· $397</span></li>
                      <li>Client Retention and Revenue System <span className="text-white/40">· $297</span></li>
                      <li>Consulting Scale System <span className="text-white/40">· $497</span></li>
                    </ul>
                  </section>

                  <section className="rounded-2xl border border-white/10 bg-black/10 p-5">
                    <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-gold">
                      Complete AI Consulting Track · 5 Modules
                    </h4>
                    <ul className="space-y-2.5 text-xs leading-relaxed text-white/70">
                      <li>AI Opportunity Assessment <span className="text-white/40">· $497</span></li>
                      <li>Business Automation Blueprint <span className="text-white/40">· $497</span></li>
                      <li>AI Agent Deployment System <span className="text-white/40">· $597</span></li>
                      <li>AI Revenue Systems Playbook <span className="text-white/40">· $497</span></li>
                      <li>AI Consulting Offer Builder <span className="text-white/40">· $497</span></li>
                    </ul>
                  </section>

                  <section className="rounded-2xl border border-gold/20 bg-gold/[0.05] p-5">
                    <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-gold">
                      Three Months of Direct Access to Eno
                    </h4>
                    <ul className="space-y-2 text-xs leading-relaxed text-white/70">
                      <li>Private monthly strategy sessions and direct messaging</li>
                      <li>Personal review of your consulting offer and first proposal</li>
                      <li>Personal review of your pricing strategy</li>
                      <li>Priority access at program events</li>
                    </ul>
                  </section>

                  <section className="rounded-2xl border border-white/10 bg-black/10 p-5">
                    <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-gold">
                      VIP Bonus Suite & Toolkit Library
                    </h4>
                    <ul className="space-y-2 text-xs leading-relaxed text-white/70">
                      <li>Done-for-you Consulting Authority Portfolio</li>
                      <li>Done-for-you AI Command Center</li>
                      <li>Sales, proposal, and marketing templates</li>
                      <li>Operations toolkits</li>
                    </ul>
                  </section>
                </div>
              </div>
            </article>
          )}

        </div>
      </div>

      {/* Modal */}
      <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
