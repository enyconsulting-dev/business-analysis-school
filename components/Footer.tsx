"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-navy-deep text-white/50 py-20 border-t border-white/5"
    >
      <div className="max-w-[1140px] mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1.2fr_1.2fr_1.2fr] gap-12 mb-16">
          {/* Brand & Description */}
          <div className="flex flex-col gap-6">
            <div>
              <div className="font-sans font-extrabold text-[1rem] text-white mb-4 tracking-tight">
                BUSINESS ANALYSIS <span className="text-gold">SCHOOL</span>
              </div>
              <p className="text-[0.82rem] leading-relaxed max-w-[320px] text-gray-400 font-medium">
                The global leader in business analysis education. IIBA Endorsed Education Provider. ScrumStudy Authorized Training Partner. 100,000+ professionals trained across 90+ countries.
              </p>
            </div>
            {/* Trust Badges placeholder */}
            <div className="flex gap-4 opacity-30">
               <div className="w-10 h-10 rounded bg-white/10"></div>
               <div className="w-10 h-10 rounded bg-white/10"></div>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-[0.68rem] font-bold tracking-widest uppercase text-white/90 mb-6">Programs</h4>
            <div className="flex flex-col gap-3">
              <Link href="/programs" className="text-[0.82rem] text-white/50 hover:text-gold no-underline transition-all duration-300 hover:translate-x-1">Programs Overview</Link>
              <Link href="/ai-accelerator" className="text-[0.82rem] text-white/50 hover:text-gold no-underline transition-all duration-300 hover:translate-x-1">AI Business Accelerator</Link>
              <Link href="/certifications" className="text-[0.82rem] text-white/50 hover:text-gold no-underline transition-all duration-300 hover:translate-x-1">Certification Prep</Link>
              <Link href="/corporate-training" className="text-[0.82rem] text-white/50 hover:text-gold no-underline transition-all duration-300 hover:translate-x-1">Corporate Training</Link>
              <Link href="/free-training" className="text-[0.82rem] text-white/50 hover:text-gold no-underline transition-all duration-300 hover:translate-x-1">Free Training</Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-[0.68rem] font-bold tracking-widest uppercase text-white/90 mb-6">Resources</h4>
            <div className="flex flex-col gap-3">
              <Link href="/resources" className="text-[0.82rem] text-white/50 hover:text-gold no-underline transition-all duration-300 hover:translate-x-1">Resource Hub</Link>
              <Link href="/book" className="text-[0.82rem] text-white/50 hover:text-gold no-underline transition-all duration-300 hover:translate-x-1">The Bestselling Book</Link>
              <Link href="/blog" className="text-[0.82rem] text-white/50 hover:text-gold no-underline transition-all duration-300 hover:translate-x-1">Industry Blog</Link>
              <Link href="/success-stories" className="text-[0.82rem] text-white/50 hover:text-gold no-underline transition-all duration-300 hover:translate-x-1">Success Stories</Link>
              <Link href="#" className="text-[0.82rem] text-white/50 hover:text-gold no-underline transition-all duration-300 hover:translate-x-1">Podcast</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[0.68rem] font-bold tracking-widest uppercase text-white/90 mb-6">Contact</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:support@businessanalysisschool.com" className="text-[0.82rem] text-white/50 hover:text-gold no-underline transition-all duration-300 hover:translate-x-1">Email Support</a>
              <Link href="/contact" className="text-[0.82rem] text-white/50 hover:text-gold no-underline transition-all duration-300 hover:translate-x-1">Book a Call</Link>
              <div className="mt-4 pt-4 border-t border-white/5 flex flex-col gap-3">
                <a href="tel:+1-587-328-8469" className="text-[0.7rem] text-white/30 hover:text-gold no-underline transition-all">+1-587-328-8469 (Americas)</a>
                <a href="tel:+234-908-551-5969" className="text-[0.7rem] text-white/30 hover:text-gold no-underline transition-all">+234-908-551-5969 (EMEA)</a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Footer Bottom */}
        <div className="border-t border-white/5 pt-10 flex flex-col gap-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-[0.75rem] gap-6">
            <span className="text-gray-500">© 2026 Business Analysis School. All rights reserved.</span>
            
            <div className="flex flex-wrap items-center gap-4 md:gap-8">
              <Link href="#" className="hover:text-gold transition-colors duration-300 no-underline">Privacy Policy</Link>
              <Link href="#" className="hover:text-gold transition-colors duration-300 no-underline">Terms of Service</Link>
              <Link href="#" className="hover:text-gold transition-colors duration-300 no-underline">Refund Policy</Link>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-white/[0.01] rounded-2xl p-8 border border-white/5">
            <p className="text-[0.7rem] leading-relaxed text-gray-500 text-center max-w-[950px] mx-auto italic">
              Business Analysis School cannot and does not guarantee specific employment outcomes or income levels. Results depend on individual effort, market conditions, and other factors. All testimonials reflect individual experiences. Information provided is for educational purposes.
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
