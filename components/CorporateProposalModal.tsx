"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { submitToWebhook } from "@/lib/webhook";
import { useDialogAccessibility } from "@/lib/useDialogAccessibility";

interface CorporateProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CorporateProposalModal({ isOpen, onClose }: CorporateProposalModalProps) {
  const dialogRef = useDialogAccessibility(isOpen, onClose);
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
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
    setError("");

    try {
      await submitToWebhook({
        source: "BAS",
        tag: "BAS Corporate Training Inquiry",
        type: "contact",
        event_type: "corporate_rfp",
        contact_name: formData.name,
        work_email: formData.email,
        company_name: formData.company,
        team_size: formData.teamSize,
        job_title: formData.jobTitle,
        training_objectives: formData.objectives,
        tags: "Corporate Training, Enterprise RFP"
      });

      router.push("/success?type=contact");
      onClose();
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "We couldn't send your proposal request. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
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
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="corporate-proposal-title"
          tabIndex={-1}
          className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
        >
          <div className="p-8 md:p-12">
            <button 
              onClick={onClose}
              type="button"
              aria-label="Close proposal request"
              className="absolute top-8 right-8 text-gray-400 hover:text-navy transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            <div className="mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-orchid/10 border border-orchid/20 rounded-md text-[0.65rem] font-bold uppercase tracking-widest text-orchid mb-4">
                Enterprise Inquiry
              </div>
              <h2 id="corporate-proposal-title" className="font-serif text-[2rem] text-navy mb-4 italic">Request a Training Proposal</h2>
              <p className="text-gray-500 font-light leading-relaxed">
                Provide your team's details to send a request for a customized training proposal.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {error && <p role="alert" className="text-sm text-red-700">{error}</p>}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="corporate-name" className="text-[0.7rem] font-bold uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
                  <input 
                    id="corporate-name"
                    required
                    type="text" 
                    placeholder="Eno E."
                    className="w-full bg-gray-50 border border-gray-100 px-6 py-4 rounded-xl text-[0.95rem] focus:outline-none focus:ring-2 focus:ring-orchid/20 focus:border-orchid transition-all"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="corporate-email" className="text-[0.7rem] font-bold uppercase tracking-widest text-gray-400 ml-1">Work Email</label>
                  <input 
                    id="corporate-email"
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
                  <label htmlFor="corporate-company" className="text-[0.7rem] font-bold uppercase tracking-widest text-gray-400 ml-1">Company Name</label>
                  <input 
                    id="corporate-company"
                    required
                    type="text" 
                    placeholder="Enter company name"
                    className="w-full bg-gray-50 border border-gray-100 px-6 py-4 rounded-xl text-[0.95rem] focus:outline-none focus:ring-2 focus:ring-orchid/20 focus:border-orchid transition-all"
                    value={formData.company}
                    onChange={e => setFormData({...formData, company: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="corporate-team-size" className="text-[0.7rem] font-bold uppercase tracking-widest text-gray-400 ml-1">Team Size</label>
                  <select 
                    id="corporate-team-size"
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
                <label htmlFor="corporate-job-title" className="text-[0.7rem] font-bold uppercase tracking-widest text-gray-400 ml-1">Your Job Title</label>
                <input 
                  id="corporate-job-title"
                  required
                  type="text" 
                  placeholder="e.g. L&D Manager, Director of BA"
                  className="w-full bg-gray-50 border border-gray-100 px-6 py-4 rounded-xl text-[0.95rem] focus:outline-none focus:ring-2 focus:ring-orchid/20 focus:border-orchid transition-all"
                  value={formData.jobTitle}
                  onChange={e => setFormData({...formData, jobTitle: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="corporate-objectives" className="text-[0.7rem] font-bold uppercase tracking-widest text-gray-400 ml-1">Training Objectives</label>
                <textarea 
                  id="corporate-objectives"
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
