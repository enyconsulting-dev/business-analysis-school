"use client";

import { useEffect, useState } from "react";
import { submitToWebhook } from "@/lib/webhook";
import { useDialogAccessibility } from "@/lib/useDialogAccessibility";

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ApplicationModal({ isOpen, onClose }: ApplicationModalProps) {
  const dialogRef = useDialogAccessibility(isOpen, onClose);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "",
    income: "",
    goal: ""
  });

  useEffect(() => {
    if (!isOpen) {
      setIsSubmitted(false);
      setIsSubmitting(false);
      setError("");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        role: "",
        income: "",
        goal: ""
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      await submitToWebhook({
        source: "BAS",
        tag: "BAS Empire Builder Application",
        type: "application",
        event_type: "application_submission",
        program: "Empire Builder (Tier 3)",
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        current_role: formData.role,
        income_level: formData.income,
        primary_goal: formData.goal,
        tags: "Tier 3 Application, Empire Builder"
      });

      setIsSubmitted(true);
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "We couldn't send your application. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-6 bg-navy/80 backdrop-blur-md animate-fade-in">
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="application-modal-title"
        tabIndex={-1}
        className="relative w-full max-w-[540px] bg-white rounded-3xl overflow-hidden shadow-2xl animate-scale-in"
      >
        {/* Header Decor */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-orchid via-gold to-orchid"></div>
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          type="button"
          aria-label="Close application"
          className="absolute top-6 right-6 w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-navy hover:text-white transition-all z-10"
        >
          <span className="material-symbols-outlined text-[1.2rem]">close</span>
        </button>

        <div className="p-10 pt-12">
          {!isSubmitted ? (
            <>
              <div className="mb-8">
                <div className="text-[0.65rem] font-bold text-orchid uppercase tracking-[0.2em] mb-2">Qualified Application Only</div>
                <h2 id="application-modal-title" className="font-serif text-3xl text-navy mb-3">Apply for the <span className="italic text-gold">Empire Builder</span></h2>
                <p className="text-gray-500 text-[0.9rem] font-light leading-relaxed">
                  Tier 3 is reserved for 10 high-achieving professionals ready to build their own AI consulting practice. Please provide your details to qualify for the enrollment call.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {error && <p role="alert" className="text-sm text-red-700">{error}</p>}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="application-full-name" className="block text-[0.7rem] font-bold text-navy uppercase tracking-widest mb-1.5 ml-1">Full Name</label>
                    <input 
                      id="application-full-name"
                      required 
                      type="text" 
                      placeholder="e.g. Adewale Johnson" 
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 text-sm focus:border-orchid outline-none transition-all placeholder:text-gray-300" 
                      value={formData.fullName}
                      onChange={e => setFormData({...formData, fullName: e.target.value})}
                    />
                  </div>
                  <div>
                    <label htmlFor="application-email" className="block text-[0.7rem] font-bold text-navy uppercase tracking-widest mb-1.5 ml-1">Email Address</label>
                    <input 
                      id="application-email"
                      required 
                      type="email" 
                      placeholder="e.g. adewale@gmail.com" 
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 text-sm focus:border-orchid outline-none transition-all placeholder:text-gray-300" 
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="application-phone" className="block text-[0.7rem] font-bold text-navy uppercase tracking-widest mb-1.5 ml-1">Phone Number (WhatsApp Preferred)</label>
                  <input 
                    id="application-phone"
                    required 
                    type="tel" 
                    placeholder="e.g. +234 908..." 
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 text-sm focus:border-orchid outline-none transition-all placeholder:text-gray-300" 
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                <div>
                  <label htmlFor="application-role" className="block text-[0.7rem] font-bold text-navy uppercase tracking-widest mb-1.5 ml-1">Current Professional Role</label>
                  <input 
                    id="application-role"
                    required 
                    type="text" 
                    placeholder="e.g. Accountant at KPMG" 
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 text-sm focus:border-orchid outline-none transition-all placeholder:text-gray-300" 
                    value={formData.role}
                    onChange={e => setFormData({...formData, role: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="application-income" className="block text-[0.7rem] font-bold text-navy uppercase tracking-widest mb-1.5 ml-1">Income Level</label>
                    <select 
                      id="application-income"
                      required 
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 text-sm focus:border-orchid outline-none transition-all appearance-none cursor-pointer"
                      value={formData.income}
                      onChange={e => setFormData({...formData, income: e.target.value})}
                    >
                      <option value="">Select Level</option>
                      <option value="60-240">$60,000 – $240,000</option>
                      <option value="240-720">$240,000 – $720,000</option>
                      <option value="720+">$720,000+</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="application-goal" className="block text-[0.7rem] font-bold text-navy uppercase tracking-widest mb-1.5 ml-1">Primary Career Goal</label>
                    <select 
                      id="application-goal"
                      required 
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 text-sm focus:border-orchid outline-none transition-all appearance-none cursor-pointer"
                      value={formData.goal}
                      onChange={e => setFormData({...formData, goal: e.target.value})}
                    >
                      <option value="">Select Goal</option>
                      <option value="transition">Transition into Tech</option>
                      <option value="upskill">Upskill with AI</option>
                      <option value="consultant">Build Consulting Practice</option>
                    </select>
                  </div>
                </div>

                <button type="submit" disabled={isSubmitting} className="w-full bg-navy hover:bg-navy-alt text-white font-bold py-4 rounded-xl mt-6 transition-all shadow-xl hover:-translate-y-0.5 disabled:opacity-50">
                  {isSubmitting ? "Submitting Application..." : "                  Submit Application"}
                </button>
                <p className="text-center text-[0.7rem] text-gray-400 mt-4 leading-relaxed px-4">
                  Submitting sends your details to our enrollment team for application review.
                </p>
              </form>
            </>
          ) : (
            <div className="text-center py-10 animate-fade-up">
              <div className="w-20 h-20 rounded-full bg-green/10 flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-[3rem] text-green">check_circle</span>
              </div>
              <h2 id="application-modal-title" className="font-serif text-3xl text-navy mb-4">Application Received!</h2>
              <p role="status" aria-live="polite" className="text-gray-500 text-[0.95rem] font-light leading-relaxed mb-8">
                Your application was submitted. You can book an enrollment call using the link below.
              </p>
              <a 
                href="https://link.enyconsulting.ca/widget/bookings/enrollment-specialist-call"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-orchid hover:bg-orchid-lt text-white font-bold py-4 px-10 rounded-xl transition-all shadow-xl hover:-translate-y-0.5 no-underline"
              >
                Book Your Enrollment Call
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
