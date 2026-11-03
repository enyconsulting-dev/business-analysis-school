"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { submitToWebhook } from "@/lib/webhook";
import { useDialogAccessibility } from "@/lib/useDialogAccessibility";

interface ResourceOptinModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "masterclass" | "ebook";
  resourceTitle: string;
  file?: string;
}

export default function ResourceOptinModal({ isOpen, onClose, type, resourceTitle, file }: ResourceOptinModalProps) {
  const router = useRouter();
  const dialogRef = useDialogAccessibility(isOpen, onClose);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (type === "ebook" && !file) {
      setError("This download is not available yet. Please contact us for help.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      await submitToWebhook({
        source: "BAS",
        tag: `BAS ${type === 'masterclass' ? 'Masterclass' : 'Ebook'} Opt-in`,
        type: type === 'masterclass' ? "free master class" : "resource",
        event_type: "lead_optin",
        resource_title: resourceTitle,
        resource_type: type,
        full_name: formData.name,
        email: formData.email,
        phone: formData.phone,
        tags: `${type === 'masterclass' ? 'Masterclass' : 'Ebook'}, ${resourceTitle}`
      });

      if (file) {
        const link = document.createElement('a');
        link.href = file;
        link.download = file.split('/').pop() || 'download';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }

      onClose();
      router.push(type === "masterclass" ? "/free-training/video" : "/success?type=resource");
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "We couldn't send your request. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-navy/80 backdrop-blur-sm"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="resource-optin-title"
            tabIndex={-1}
            className="relative w-full max-w-[500px] bg-white rounded-3xl overflow-hidden shadow-2xl text-navy"
          >
            <div className={`h-2 bg-gradient-to-r ${type === 'masterclass' ? 'from-orchid to-gold' : 'from-gold to-gold-lt'}`}></div>
            
            <button 
              onClick={onClose}
              type="button"
              aria-label="Close resource request"
              className="absolute top-6 right-6 text-gray-400 hover:text-navy transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            <div className="p-8 md:p-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-50 border border-gray-200 rounded-md text-[0.65rem] font-bold uppercase tracking-widest text-gray-400 mb-6 font-sans">
                {type === 'masterclass' ? 'Masterclass Access Request' : 'Digital Guide Download'}
              </div>
              
              <h2 id="resource-optin-title" className="font-serif text-2xl mb-4 leading-tight italic">
                {type === 'masterclass' ? 'Request the Masterclass' : 'Get the Starter Kit'}
              </h2>
              <p className="text-[0.9rem] text-gray-500 font-light mb-8">
                {resourceTitle}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {error && <p role="alert" className="text-sm text-red-700">{error}</p>}
                <div>
                  <label htmlFor="resource-optin-name" className="block text-[0.65rem] font-bold uppercase tracking-wider text-gray-400 mb-1.5 ml-1">Full Name</label>
                  <input 
                    id="resource-optin-name"
                    required
                    type="text" 
                    placeholder="Your full name"
                    className="w-full bg-gray-50 border border-gray-100 rounded-lg px-4 py-3.5 text-[0.9rem] focus:outline-none focus:ring-2 focus:ring-orchid/20 focus:border-orchid transition-all"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                
                <div>
                  <label htmlFor="resource-optin-email" className="block text-[0.65rem] font-bold uppercase tracking-wider text-gray-400 mb-1.5 ml-1">Email Address</label>
                  <input 
                    id="resource-optin-email"
                    required
                    type="email" 
                    placeholder="Your best email"
                    className="w-full bg-gray-50 border border-gray-100 rounded-lg px-4 py-3.5 text-[0.9rem] focus:outline-none focus:ring-2 focus:ring-orchid/20 focus:border-orchid transition-all"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div>
                  <label htmlFor="resource-optin-phone" className="block text-[0.65rem] font-bold uppercase tracking-wider text-gray-400 mb-1.5 ml-1">Phone Number</label>
                  <input 
                    id="resource-optin-phone"
                    required
                    type="tel" 
                    placeholder="WhatsApp number preferred"
                    className="w-full bg-gray-50 border border-gray-100 rounded-lg px-4 py-3.5 text-[0.9rem] focus:outline-none focus:ring-2 focus:ring-orchid/20 focus:border-orchid transition-all"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                <button 
                  disabled={isSubmitting}
                  className="w-full bg-navy hover:bg-navy-alt text-white font-bold py-4 rounded-xl shadow-lg shadow-navy/20 transition-all active:scale-[0.98] mt-4 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  ) : (
                    <>
                      {type === 'masterclass' ? 'Submit Request' : 'Send My eBook'}
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </>
                  )}
                </button>
                
                <p role="note" className="text-[0.6rem] text-gray-400 text-center mt-6">
                  Submitting sends your details to our team with this resource request.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
