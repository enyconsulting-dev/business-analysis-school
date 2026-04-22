"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { submitToWebhook } from "@/lib/webhook";
import ResourceOptinModal from "@/components/ResourceOptinModal";

export default function FreeTraining() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await submitToWebhook({
      event_type: "lead_optin",
      resource_title: "How to Become an AI Business Analyst in 2026 Without a Tech Degree",
      resource_type: "masterclass",
      full_name: formData.name,
      email: formData.email,
      phone: formData.phone
    });

    setIsSubmitting(false);
    router.push("/free-training/video");
  };

  const discoveryPoints = [
    {
      title: "The #1 Non-Technical Career Path Into Tech",
      body: "Why business analysis is the fastest-growing career path for professionals without a tech degree — and why companies are paying $85K–$140K+ for people with exactly your kind of experience.",
      icon: "trending_up"
    },
    {
      title: "The 90-Day Roadmap",
      body: "The exact step-by-step process our students follow to go from zero BA experience to hired in 90 days or less. No guessing. No random applications. A system.",
      icon: "route"
    },
    {
      title: "How AI Is Creating a Massive Opportunity",
      body: "Why AI is creating unprecedented demand for business analysts who can bridge the gap between business and technology — and how to position yourself at the intersection of this demand.",
      icon: "smart_toy"
    },
    {
      title: "The Certification Path That Opens Doors",
      body: "Which certifications actually matter to employers, which ones are a waste of money, and the exact order to get them for maximum career impact.",
      icon: "verified"
    },
    {
      title: "Real Student Transformations",
      body: "You’ll hear from real graduates who made this transition — from accountants, teachers, operations managers, and admin professionals to six-figure business analysts, product managers, and AI consultants.",
      icon: "group"
    }
  ];

  return (
    <div className="min-h-screen bg-navy-deep text-white selection:bg-orchid/30 relative">
      <div className="absolute inset-0 hero-grid opacity-10 pointer-events-none"></div>
      
      {/* 2.1 Opt-In Hero */}
      <section className="relative z-10 max-w-[1140px] mx-auto px-6 md:px-10 py-16 md:py-24 border-b border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orchid/10 border border-orchid/25 rounded-full text-[0.65rem] font-bold uppercase tracking-widest text-orchid-lt mb-8">
              Free Masterclass • Instant Access
            </div>
            
            <h1 className="font-serif text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.05] mb-8">
              How to Become an <span className="italic text-gold font-normal italic">AI Business Analyst</span> in 2026 Without a Tech Degree
            </h1>
            
            <p className="text-[1.1rem] leading-[1.7] text-white/70 mb-10 max-w-[580px] font-light">
              Join 50,000+ professionals who have taken this training. Learn the exact system our graduates use to land six-figure roles in business analysis, product management, and AI consulting — without a tech background, without learning to code, and without starting over.
            </p>

            <div className="flex flex-col gap-6 w-full max-w-[450px]">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 text-gold group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-2xl">check_circle</span>
                </div>
                <p className="text-[0.9rem] text-white/50">85%+ of graduates land roles in under 90 days</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_40px_100px_rgba(0,0,0,0.4)] text-navy relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-[6px] bg-gradient-to-r from-orchid via-gold to-orchid animate-glow"></div>
            
            <div className="mb-10 text-center">
              <h3 className="font-serif text-3xl mb-3 tracking-tight italic">Register for Free Instant Access</h3>
              <p className="text-[0.9rem] text-gray-500 font-light italic">Watch immediately. No waiting. No fluff. Just strategy that works.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1.5">
                <label className="block text-[0.65rem] font-bold uppercase tracking-[0.1em] text-gray-400 ml-1">Full Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="Your full name"
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl px-5 py-4 text-[0.95rem] focus:outline-none focus:ring-2 focus:ring-orchid/20 focus:border-orchid transition-all"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-[0.65rem] font-bold uppercase tracking-[0.1em] text-gray-400 ml-1">Email Address</label>
                <input 
                  required
                  type="email" 
                  placeholder="Your best email"
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl px-5 py-4 text-[0.95rem] focus:outline-none focus:ring-2 focus:ring-orchid/20 focus:border-orchid transition-all"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-[0.65rem] font-bold uppercase tracking-[0.1em] text-gray-400 ml-1">Phone Number</label>
                <input 
                  required
                  type="tel" 
                  placeholder="WhatsApp number preferred"
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl px-5 py-4 text-[0.95rem] focus:outline-none focus:ring-2 focus:ring-orchid/20 focus:border-orchid transition-all"
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <button 
                disabled={isSubmitting}
                className="w-full bg-navy hover:bg-navy-alt text-white font-bold py-5 rounded-xl shadow-xl shadow-navy/20 transition-all active:scale-[0.98] mt-6 flex items-center justify-center gap-3 text-[1rem]"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                ) : (
                  <>
                    Get Free Access Now
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </>
                )}
              </button>
              
              <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[0.65rem] text-gray-400 font-bold uppercase tracking-wider italic">
                <span>✓ Free</span>
                <span>✓ No credit card required</span>
                <span>✓ Instant access</span>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* 2.2 What You’ll Discover */}
      <section className="py-24 md:py-32 relative overflow-hidden text-white/90">
        <div className="max-w-[1140px] mx-auto px-6 md:px-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-serif text-[ clamp(2rem,4vw,3rem)] mb-6 italic">In This Free Training, You’ll Discover:</h2>
            <div className="w-20 h-1 bg-gold/50 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {discoveryPoints.map((point, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/[0.03] border border-white/5 p-8 rounded-[2rem] hover:bg-white/[0.05] transition-colors group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-gold mb-8 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">{point.icon}</span>
                </div>
                <h4 className="text-[1.1rem] font-bold mb-4 leading-snug">{point.title}</h4>
                <p className="text-[0.9rem] text-white/50 leading-relaxed font-light">{point.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.3 Instructor Section */}
      <section className="py-24 md:py-32 bg-white/2  relative overflow-hidden">
        <div className="max-w-[1140px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 items-center">
            {/* Image Placeholder */}
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 group"
            >
              <img 
                src="/eno-glossy.png" 
                alt="Eno Eka" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent z-10 opacity-40"></div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/10 border border-gold/25 rounded-md text-[0.65rem] font-bold uppercase tracking-widest text-gold mb-6">
                Your Instructor
              </div>
              <h3 className="font-serif text-[3rem] mb-6 italic leading-none">Eno Eka</h3>
              <div className="space-y-6 text-[1.1rem] text-white/70 font-light leading-relaxed">
                <p>
                  Award-winning global business consultant. The first Black woman to lead a $6B+ core banking digital transformation in Canada. Named one of Canada’s Top 100 Most Powerful Women.
                </p>
                <p>
                  Featured in Forbes. Trained over 100,000 professionals across 90+ countries. 
                </p>
                <p className="text-white">
                  She went from accountant in Nigeria to six-figure consultant in Canada within 6 months — and she’s taught over 100,000 others how to make similar transitions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2.4 Bottom CTA */}
      <section className="py-24 md:py-40 text-center relative overflow-hidden bg-white/3">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="max-w-[800px] mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif text-[2.5rem] md:text-[3.5rem] leading-tight mb-8 italic">This Training Could Change Everything for You</h3>
            <p className="text-[1.15rem] text-white/60 mb-12 leading-relaxed max-w-[650px] mx-auto font-light">
              50,000+ professionals have already watched it. Some of them are now earning six figures in roles they never thought they could get. The only difference between them and you is that they pressed play. Your turn.
            </p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-orchid hover:bg-orchid-lt text-white font-bold py-5 px-12 rounded-2xl shadow-[0_20px_60px_rgba(150,8,142,0.3)] transition-all active:scale-[0.98] text-[1.1rem]"
            >
              Watch the Free Training Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* Modal Integration */}
      <ResourceOptinModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type="masterclass"
        resourceTitle="How to Become an AI Business Analyst in 2026 Without a Tech Degree"
      />
    </div>
  );
}
