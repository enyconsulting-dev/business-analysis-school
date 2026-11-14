"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    if (hasShown) return;

    // Trigger 1: Mouse leaves viewport top
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    };

    // Trigger 2: 10s Idle
    const idleTimer = setTimeout(() => {
      if (!hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    }, 10000);

    document.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(idleTimer);
    };
  }, [hasShown]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-navy-deep/90 backdrop-blur-sm p-4 sm:p-6 animate-fade-in">
      <div className="relative w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden p-8 text-center animate-fade-up">
        {/* Close Button */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="mb-6">
          <span className="inline-block bg-gold/10 text-gold text-[0.7rem] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Wait! Before You Go
          </span>
          <h3 className="font-serif text-2xl text-navy leading-tight mb-2">
            Get Instant Access to Our Free Masterclass
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            Discover the exact system 100,000+ professionals used to land six-figure BA roles without a tech degree.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <Link 
            href="/free-training"
            onClick={() => setIsOpen(false)}
            className="bg-orchid hover:bg-orchid-lt text-white text-[0.9rem] font-bold py-3.5 px-6 rounded-lg no-underline transition-all shadow-lg hover:shadow-orchid/20"
          >
            Watch Free Training Now
          </Link>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-[0.75rem] text-gray-400 hover:text-gray-600 underline font-medium"
          >
            No thanks, I&apos;ll figure it out myself
          </button>
        </div>
      </div>
    </div>
  );
}
