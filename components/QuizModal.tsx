"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const steps = [
  {
    question: "What is your current career background?",
    options: [
      { label: "Non-Technical Business (Operations, Sales, HR)", value: "business" },
      { label: "Technical (IT Support, QA, Junior Dev)", value: "tech" },
      { label: "Service Industry / Education / Healthcare", value: "service" },
      { label: "Other / Recent Graduate", value: "other" }
    ]
  },
  {
    question: "What is your primary career goal for 2026?",
    options: [
      { label: "Earning $100K+ in a remote role", value: "salary" },
      { label: "Better work-life balance & flexibility", value: "lifestyle" },
      { label: "Future-proofing against AI automation", value: "ai" },
      { label: "Transitioning out of a shrinking industry", value: "pivot" }
    ]
  },
  {
    question: "How much time can you realistically invest per week?",
    options: [
      { label: "High Intensity (20+ hours / week)", value: "high" },
      { label: "Steady Progress (10-15 hours / week)", value: "medium" },
      { label: "Slow & Steady (5 hours / week)", value: "low" }
    ]
  }
];

import { submitToWebhook } from "@/lib/webhook";
import { useDialogAccessibility } from "@/lib/useDialogAccessibility";

export default function QuizModal({ isOpen, onClose }: QuizModalProps) {
  const router = useRouter();
  const dialogRef = useDialogAccessibility(isOpen, onClose);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isFinalStep, setIsFinalStep] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });

  const handleOptionSelect = (value: string) => {
    setAnswers({ ...answers, [currentStep]: value });
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinalStep(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    // Map answer indices to readable keys
    const mappedAnswers = {
      background: answers[0],
      goal: answers[1],
      commitment: answers[2]
    };

    try {
      await submitToWebhook({
        source: "BAS",
        tag: "BAS Quiz Diagnostic",
        type: "quiz",
        event_type: "quiz_diagnostic",
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        answers: mappedAnswers,
        tags: `Quiz Diagnostic, ${mappedAnswers.background}, ${mappedAnswers.goal}`
      });

      onClose();
      router.push("/success?type=quiz");
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "We couldn't send your assessment. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const progress = ((currentStep + (isFinalStep ? 1 : 0)) / (steps.length + 1)) * 100;

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
            aria-labelledby="career-quiz-title"
            tabIndex={-1}
            className="relative w-full max-w-[600px] bg-white rounded-[2.5rem] overflow-hidden shadow-2xl text-navy"
          >
            {/* Progress Bar */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gray-100">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="h-full bg-orchid"
              />
            </div>
            
            <button 
              onClick={onClose}
              type="button"
              aria-label="Close career assessment"
              className="absolute top-8 right-8 text-gray-400 hover:text-navy transition-colors"
            >
              <span className="material-symbols-outlined font-bold">close</span>
            </button>

            <div className="p-10 md:p-14">
              {!isFinalStep ? (
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-orchid/5 border border-orchid/10 rounded-md text-[0.65rem] font-bold uppercase tracking-widest text-orchid mb-8">
                    Question {currentStep + 1} of {steps.length}
                  </div>
                  
                  <h2 id="career-quiz-title" className="font-serif text-2xl md:text-3xl mb-10 leading-tight italic">
                    {steps[currentStep].question}
                  </h2>

                  <div className="space-y-3">
                    {steps[currentStep].options.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        aria-pressed={answers[currentStep] === option.value}
                        onClick={() => handleOptionSelect(option.value)}
                        className="w-full text-left p-5 rounded-2xl border border-gray-100 hover:border-orchid hover:bg-orchid/5 transition-all group flex items-center justify-between"
                      >
                        <span className="text-[0.95rem] font-light text-navy group-hover:text-orchid transition-colors">{option.label}</span>
                        <span className="material-symbols-outlined text-[1.2rem] opacity-0 group-hover:opacity-100 transition-opacity text-orchid">arrow_forward</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/5 border border-gold/10 rounded-md text-[0.65rem] font-bold uppercase tracking-widest text-gold mb-8">
                    Final Step
                  </div>
                  
                  <h2 id="career-quiz-title" className="font-serif text-2xl md:text-3xl mb-4 leading-tight italic">
                    Request Career Guidance
                  </h2>
                  <p className="text-[0.95rem] text-gray-500 font-light mb-10">
                    Submit your details with your answers to complete the assessment request.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {error && <p role="alert" className="text-sm text-red-700">{error}</p>}
                    <div className="grid grid-cols-2 gap-4">
                       <div>
                        <label htmlFor="quiz-first-name" className="block text-[0.65rem] font-bold uppercase tracking-wider text-gray-400 mb-1.5 ml-1">First Name</label>
                        <input 
                          id="quiz-first-name"
                          required
                          type="text" 
                          placeholder="Jane"
                          className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3.5 text-[0.9rem] focus:outline-none focus:ring-2 focus:ring-orchid/20 transition-all font-light"
                          value={formData.firstName}
                          onChange={e => setFormData({...formData, firstName: e.target.value})}
                        />
                      </div>
                      <div>
                        <label htmlFor="quiz-last-name" className="block text-[0.65rem] font-bold uppercase tracking-wider text-gray-400 mb-1.5 ml-1">Last Name</label>
                        <input 
                          id="quiz-last-name"
                          required
                          type="text" 
                          placeholder="Doe"
                          className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3.5 text-[0.9rem] focus:outline-none focus:ring-2 focus:ring-orchid/20 transition-all font-light"
                          value={formData.lastName}
                          onChange={e => setFormData({...formData, lastName: e.target.value})}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="quiz-email" className="block text-[0.65rem] font-bold uppercase tracking-wider text-gray-400 mb-1.5 ml-1">Best Email</label>
                      <input 
                        id="quiz-email"
                        required
                        type="email" 
                        placeholder="name@example.com"
                        className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3.5 text-[0.9rem] focus:outline-none focus:ring-2 focus:ring-orchid/20 transition-all font-light"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                      />
                    </div>

                    <button 
                      disabled={isSubmitting}
                      className="w-full bg-navy hover:bg-navy-alt text-white font-bold py-5 rounded-2xl shadow-xl shadow-navy/20 transition-all active:scale-[0.98] mt-6 flex items-center justify-center gap-2 text-[1rem]"
                    >
                      {isSubmitting ? (
                        <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      ) : (
                        <>
                          See My Results
                          <span className="material-symbols-outlined text-sm">rocket_launch</span>
                        </>
                      )}
                    </button>
                    
                    <p className="text-[0.6rem] text-gray-400 text-center mt-8">
                      Submitting sends your answers and contact details to our team with your assessment request.
                    </p>
                  </form>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}


// 