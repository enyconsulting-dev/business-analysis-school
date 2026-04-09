"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

interface CorporateProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CorporateProposalModal({ isOpen, onClose }: CorporateProposalModalProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    teamSize: "",
    jobTitle: "",
    objectives: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call to GHL Corporate Pipeline
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    router.push("/success?type=contact");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-navy/80 backdrop-blur-md"
        />

        {/* Modal Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
        >
          <div className="p-8 md:p-12">
            <button 
              onClick={onClose}
              className="absolute top-8 right-8 text-gray-400 hover:text-navy transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            <div className="mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-orchid/10 border border-orchid/20 rounded-md text-[0.65rem] font-bold uppercase tracking-widest text-orchid mb-4">
                Enterprise RFP
              </div>
              <h2 className="font-serif text-[2rem] text-navy mb-4 italic">Request a Training Proposal</h2>
              <p className="text-gray-500 font-light leading-relaxed">
                Provide your team's details and our enterprise advisor will contact you within 24 hours to discuss a customized training solution.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-[0.7rem] font-bold uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Eno E."
                    className="w-full bg-gray-50 border border-gray-100 px-6 py-4 rounded-xl text-[0.95rem] focus:outline-none focus:ring-2 focus:ring-orchid/20 focus:border-orchid transition-all"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[0.7rem] font-bold uppercase tracking-widest text-gray-400 ml-1">Work Email</label>
                  <input 
                    required
                    type="email" 
                    placeholder="eno@company.com"
                    className="w-full bg-gray-50 border border-gray-100 px-6 py-4 rounded-xl text-[0.95rem] focus:outline-none focus:ring-2 focus:ring-orchid/20 focus:border-orchid transition-all"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-[0.7rem] font-bold uppercase tracking-widest text-gray-400 ml-1">Company Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Enter company name"
                    className="w-full bg-gray-50 border border-gray-100 px-6 py-4 rounded-xl text-[0.95rem] focus:outline-none focus:ring-2 focus:ring-orchid/20 focus:border-orchid transition-all"
                    value={formData.company}
                    onChange={e => setFormData({...formData, company: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[0.7rem] font-bold uppercase tracking-widest text-gray-400 ml-1">Team Size</label>
                  <select 
                    required
                    className="w-full bg-gray-50 border border-gray-100 px-6 py-4 rounded-xl text-[0.95rem] focus:outline-none focus:ring-2 focus:ring-orchid/20 focus:border-orchid transition-all appearance-none"
                    value={formData.teamSize}
                    onChange={e => setFormData({...formData, teamSize: e.target.value})}
                  >
                    <option value="">Select size</option>
                    <option value="10-50">10–50</option>
                    <option value="51-250">51–250</option>
                    <option value="251-1000">251–1,000</option>
                    <option value="1000+">1,000+</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[0.7rem] font-bold uppercase tracking-widest text-gray-400 ml-1">Your Job Title</label>
                <input 
                  required
                  type="text" 
                  placeholder="e.g. L&D Manager, Director of BA"
                  className="w-full bg-gray-50 border border-gray-100 px-6 py-4 rounded-xl text-[0.95rem] focus:outline-none focus:ring-2 focus:ring-orchid/20 focus:border-orchid transition-all"
                  value={formData.jobTitle}
                  onChange={e => setFormData({...formData, jobTitle: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[0.7rem] font-bold uppercase tracking-widest text-gray-400 ml-1">Training Objectives</label>
                <textarea 
                  required
                  placeholder="Tell us about your team's goals and existing challenges..."
                  className="w-full bg-gray-50 border border-gray-100 px-6 py-4 rounded-xl text-[0.95rem] h-32 focus:outline-none focus:ring-2 focus:ring-orchid/20 focus:border-orchid transition-all resize-none"
                  value={formData.objectives}
                  onChange={e => setFormData({...formData, objectives: e.target.value})}
                ></textarea>
              </div>

              <button 
                disabled={isSubmitting}
                className="w-full bg-navy text-white font-bold py-5 rounded-2xl shadow-xl shadow-navy/20 transition-all hover:-translate-y-0.5 active:scale-[0.98] disabled:opacity-50"
              >
                {isSubmitting ? "Submitting Request..." : "Request Training Proposal"}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
