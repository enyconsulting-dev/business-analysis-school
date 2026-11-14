"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { submitToWebhook } from "@/lib/webhook";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    interest: "AI Business Analyst Accelerator",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await submitToWebhook({
      source: "BAS",
      tag: "BAS Contact Inquiry",
      type: "contact",
      event_type: "contact_inquiry",
      full_name: formData.firstName,
      email: formData.email,
      phone: formData.phone,
      interest: formData.interest,
      message: formData.message,
      tags: `Contact Inquiry, ${formData.interest}`
    });

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const contactMethods = [
    { 
      label: "Support Email", 
      val: "support@businessanalysisschool.com", 
      link: "mailto:support@businessanalysisschool.com", 
      icon: "mail" 
    },
    { 
      label: "Canada", 
      val: "+1-587-328-8469", 
      link: "tel:+1-587-328-8469", 
      icon: "call" 
    },
    { 
      label: "Nigeria", 
      val: "+234-908-551-5969", 
      link: "tel:+234-908-551-5969", 
      icon: "call" 
    },
    { 
      label: "WhatsApp", 
      val: "wa.me/message/3AIHXB6TNAJ7L1", 
      link: "https://wa.me/message/3AIHXB6TNAJ7L1", 
      icon: "chat" 
    },
    { 
      label: "Web Support", 
      val: "aibusinessanalysis.ca/support", 
      link: "https://aibusinessanalysis.ca/support", 
      icon: "public" 
    }
  ];

  const interests = [
    "AI Business Analyst Accelerator",
    "AI Business Strategist",
    "AI Business Consultant",
    "Certification Prep",
    "Corporate Training",
    "Free Training",
    "Other"
  ];

  return (
    <div className="bg-white text-navy min-h-screen selection:bg-orchid/30 overflow-x-hidden">
      
      {/* ========== HERO SECTION ========== */}
      <section className="relative py-24 md:py-32 bg-navy-deep text-white overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-orchid/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-[1140px] mx-auto px-10 relative z-10 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[800px]"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-orchid/20 border border-orchid/30 rounded-md text-[0.65rem] font-bold uppercase tracking-widest text-orchid-lt mb-8 font-sans">
              Get in Touch
            </div>
            <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] mb-8 italic">
              Book a Call or <br />
              <span className="text-gold italic font-normal">Send Us a Message</span>
            </h1>
            <p className="text-[1.1rem] md:text-[1.25rem] text-white/50 font-light leading-relaxed">
              Whether you want to discuss enrollment, need program guidance, or have questions about corporate training — our team is here to help. We respond to all inquiries within 24 business hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ========== HIGH-CONVERSION BOOKING CARD ========== */}
      <section className="py-20 -mt-16 md:-mt-24 relative z-20 px-10">
        <div className="max-w-[1140px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-navy rounded-[3rem] p-10 md:p-16 shadow-[0_40px_100px_rgba(0,0,0,0.3)] border border-white/5 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24"
          >
            <div className="max-w-[600px] text-center lg:text-left">
              <div className="text-[0.65rem] font-bold text-gold uppercase tracking-[0.2em] mb-4">Highest Converting Action</div>
              <h2 className="font-serif text-[2.2rem] md:text-[2.8rem] text-white leading-tight mb-6 italic">Not Sure Which Program is Right?</h2>
              <p className="text-[1.1rem] text-white/50 font-light leading-relaxed mb-0">
                Book a free 15-minute call with our enrollment team. We’ll assess your background, goals, and budget and recommend the best fit for your career growth.
              </p>
            </div>
            
            <div className="shrink-0">
              <a 
                href="https://link.enyconsulting.ca/widget/bookings/enrollment-specialist-call" 
                target="_blank"
                className="inline-flex items-center justify-center gap-4 bg-gold hover:bg-gold-lt text-navy font-bold py-6 px-12 rounded-2xl shadow-xl shadow-gold/20 transition-all hover:-translate-y-1 active:scale-[0.98] no-underline text-[1.1rem]"
              >
                Book Your Free Call
                <span className="material-symbols-outlined text-sm">calendar_month</span>
              </a>
              <p className="text-[0.65rem] text-white/30 text-center mt-6 uppercase tracking-widest font-bold">Auto-sends prep questionnaire</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== SUPPORT & FORM GRID ========== */}
      <section className="py-24 bg-white">
        <div className="max-w-[1140px] mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-20 lg:gap-32 items-start">
            
            {/* Left: Contact Info */}
            <div className="space-y-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="font-serif text-3xl text-navy mb-10 italic">Global Channels</h3>
                <div className="space-y-6">
                  {contactMethods.map((method, i) => (
                    <motion.a
                      key={method.label}
                      href={method.link}
                      target={method.link.startsWith('http') ? '_blank' : undefined}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-5 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:border-orchid/20 hover:shadow-xl transition-all group no-underline"
                    >
                      <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-navy group-hover:scale-110 group-hover:bg-navy group-hover:text-white transition-all duration-500">
                        <span className="material-symbols-outlined">{method.icon}</span>
                      </div>
                      <div>
                        <div className="text-[0.65rem] font-bold text-gray-400 uppercase tracking-widest">{method.label}</div>
                        <div className="text-[1.05rem] text-navy font-medium">{method.val}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right: Detailed Form */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="bg-gray-50 border border-gray-100 rounded-[3rem] p-10 md:p-14 relative"
            >
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h3 className="font-serif text-3xl text-navy mb-4 italic">Send a Message</h3>
                    <p className="text-[0.95rem] text-gray-400 font-light mb-12">
                      Have a specific question? Fill out the form below and our team will route it to the right specialist.
                    </p>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-[0.65rem] font-bold uppercase tracking-wider text-gray-400 mb-2 ml-1">First Name</label>
                          <input 
                            required 
                            type="text" 
                            placeholder="Your name" 
                            className="w-full bg-white border border-gray-100 rounded-xl px-5 py-4 text-[0.95rem] focus:outline-none focus:ring-2 focus:ring-orchid focus:border-orchid transition-all" 
                            value={formData.firstName}
                            onChange={e => setFormData({...formData, firstName: e.target.value})}
                          />
                        </div>
                        <div>
                          <label className="block text-[0.65rem] font-bold uppercase tracking-wider text-gray-400 mb-2 ml-1">Email Address</label>
                          <input 
                            required 
                            type="email" 
                            placeholder="email@address.com" 
                            className="w-full bg-white border border-gray-100 rounded-xl px-5 py-4 text-[0.95rem] focus:outline-none focus:ring-2 focus:ring-orchid focus:border-orchid transition-all" 
                            value={formData.email}
                            onChange={e => setFormData({...formData, email: e.target.value})}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-[0.65rem] font-bold uppercase tracking-wider text-gray-400 mb-2 ml-1">Phone (Optional)</label>
                          <input 
                            type="tel" 
                            placeholder="+1..." 
                            className="w-full bg-white border border-gray-100 rounded-xl px-5 py-4 text-[0.95rem] focus:outline-none focus:ring-2 focus:ring-orchid focus:border-orchid transition-all" 
                            value={formData.phone}
                            onChange={e => setFormData({...formData, phone: e.target.value})}
                          />
                        </div>
                        <div>
                          <label className="block text-[0.65rem] font-bold uppercase tracking-wider text-gray-400 mb-2 ml-1">I&apos;m Interested In</label>
                          <select 
                            className="w-full bg-white border border-gray-100 rounded-xl px-5 py-4 text-[0.95rem] focus:outline-none focus:ring-2 focus:ring-orchid focus:border-orchid transition-all appearance-none cursor-pointer"
                            value={formData.interest}
                            onChange={e => setFormData({...formData, interest: e.target.value})}
                          >
                            {interests.map(item => <option key={item} value={item}>{item}</option>)}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[0.65rem] font-bold uppercase tracking-wider text-gray-400 mb-2 ml-1">Message</label>
                        <textarea 
                          required 
                          placeholder="How can we help?" 
                          className="w-full bg-white border border-gray-100 rounded-xl px-5 py-4 text-[0.95rem] h-32 focus:outline-none focus:ring-2 focus:ring-orchid focus:border-orchid transition-all resize-none"
                          value={formData.message}
                          onChange={e => setFormData({...formData, message: e.target.value})}
                        ></textarea>
                      </div>

                      <button 
                        disabled={isSubmitting}
                        className="w-full bg-navy hover:bg-navy-alt text-white font-bold py-5 rounded-2xl shadow-xl shadow-navy/20 transition-all active:scale-[0.98] flex items-center justify-center gap-3"
                      >
                        {isSubmitting ? (
                          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        ) : (
                          <>
                            Send Message
                            <span className="material-symbols-outlined text-sm">send</span>
                          </>
                        )}
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-20 text-center"
                  >
                    <div className="w-20 h-20 bg-green/10 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                       <span className="material-symbols-outlined text-[3rem]">check_circle</span>
                    </div>
                    <h3 className="font-serif text-3xl text-navy mb-4 italic">Message Received!</h3>
                    <p className="text-gray-400 font-light mb-10 max-w-[320px] mx-auto leading-relaxed">
                      Thank you for reaching out. A specialist will review your inquiry and get back to you within 24 business hours.
                    </p>
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="text-orchid font-bold hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="py-24 bg-gray-50 border-t border-gray-100 text-center">
        <div className="max-w-[700px] mx-auto px-10">
          <h2 className="font-serif text-3xl text-navy mb-6 italic italic italic">Ready to accelerate your career?</h2>
          <p className="text-gray-400 font-light mb-12 italic italic italic italic">
            Don&apos;t wait for a response. Get instant access to our free masterclass and see how our framework works in 2026.
          </p>
          <Link href="/free-training" className="inline-flex items-center gap-3 bg-white border border-navy text-navy font-bold py-4 px-12 rounded-xl hover:bg-navy hover:text-white transition-all no-underline">
            Watch Free Training
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
