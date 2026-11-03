"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Suspense } from "react";

type SuccessType = 'training' | 'contact' | 'booking' | 'enrollment' | 'resource' | 'quiz';

const contentMap: Record<SuccessType, { title: string; body: string; cta: string; href: string }> = {
  training: {
    title: "Request received",
    body: "Your request was submitted. View the training page for current masterclass availability.",
    cta: "View Training Page",
    href: "/free-training/video"
  },
  contact: {
    title: "Inquiry received",
    body: "Thank you for reaching out. Your inquiry has been submitted to our team.",
    cta: "Return to Contact",
    href: "/contact"
  },
  booking: {
    title: "Booking status",
    body: "This page cannot confirm a booking. Check the booking provider for its confirmation and appointment details.",
    cta: "Back to Home",
    href: "/"
  },
  enrollment: {
    title: "Enrollment status",
    body: "This page cannot confirm enrollment or course access. Please contact our team or check the provider that processed your enrollment.",
    cta: "Contact the Team",
    href: "/contact"
  },
  resource: {
    title: "Resource request complete",
    body: "The download was requested. If it did not begin, return to the resource library and try again.",
    cta: "Back to Resources",
    href: "/resources"
  },
  quiz: {
    title: "Assessment received",
    body: "Your assessment answers were submitted. You can explore the available program options.",
    cta: "Explore Programs",
    href: "/programs"
  }
};

function SuccessContent() {
  const searchParams = useSearchParams();
  const requestedType = searchParams.get("type");
  const type: SuccessType =
    requestedType && Object.keys(contentMap).includes(requestedType)
      ? (requestedType as SuccessType)
      : "training";
  const content = contentMap[type];

  return (
    <div className="min-h-screen bg-navy-deep flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 hero-grid opacity-10 pointer-events-none"></div>
      <div className="absolute top-[20%] right-[10%] w-[40vw] h-[40vw] bg-orchid/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <motion.div 
        role="status"
        aria-live="polite"
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
