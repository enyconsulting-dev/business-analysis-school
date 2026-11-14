"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Suspense } from "react";

type SuccessType = 'training' | 'contact' | 'booking' | 'enrollment';

const contentMap: Record<SuccessType, { title: string; body: string; cta: string; href: string }> = {
  training: {
    title: "You’re in!",
    body: "Check your email for instant access to the masterclass. While you wait, here’s a quick preview of what you’ll learn...",
    cta: "Watch Masterclass",
    href: "/free-training"
  },
  contact: {
    title: "Thank you!",
    body: "Thank you for reaching out. Our team will respond within 24 hours. In the meantime, start with our free masterclass.",
    cta: "Start Masterclass",
    href: "/free-training"
  },
  booking: {
    title: "Your call is booked!",
    body: "Check your email for confirmation and a brief questionnaire to help us prepare. We want to make every minute count.",
    cta: "Back to Home",
    href: "/"
  },
  enrollment: {
    title: "Welcome to Business Analysis School!",
    body: "You’ve just made one of the best investments of your career. Check your email for onboarding instructions and your login credentials.",
    cta: "Get Started",
    href: "/"
  }
};

function SuccessContent() {
  const searchParams = useSearchParams();
  const type = (searchParams.get("type") as SuccessType) || "training";
  const content = contentMap[type] || contentMap.training;

  return (
    <div className="min-h-screen bg-navy-deep flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 hero-grid opacity-10 pointer-events-none"></div>
      <div className="absolute top-[20%] right-[10%] w-[40vw] h-[40vw] bg-orchid/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="max-w-[500px] w-full bg-white rounded-3xl p-10 md:p-12 text-center shadow-2xl relative z-10"
      >
        <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-8">
          <motion.span 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.2 }}
            className="material-symbols-outlined text-[3rem] text-gold"
          >
            check_circle
          </motion.span>
        </div>

        <h1 className="font-serif text-3xl text-navy mb-4 leading-tight">{content.title}</h1>
        <p className="text-[1.05rem] text-gray-500 font-light leading-relaxed mb-10">
          {content.body}
        </p>

        <Link 
          href={content.href}
          className="block w-full bg-orchid hover:bg-orchid-lt text-white font-bold py-4 rounded-xl shadow-lg shadow-orchid/20 transition-all active:scale-[0.98]"
        >
          {content.cta}
        </Link>

        {type === 'training' && (
          <p className="mt-8 text-[0.8rem] text-gray-400">
            Check your spam folder if you don&apos;t see the email within 2 minutes.
          </p>
        )}
      </motion.div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-navy-deep" />}>
      <SuccessContent />
    </Suspense>
  );
}
