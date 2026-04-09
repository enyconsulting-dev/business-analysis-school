"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-[999] h-[56px] bg-white border-t border-gray-100 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] flex items-center justify-between px-5 transition-transform duration-300 md:hidden ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex flex-col">
        <span className="text-[0.65rem] font-bold text-navy/40 uppercase tracking-wider leading-tight">Next Step</span>
        <span className="text-[0.85rem] font-bold text-navy leading-tight">Start Free Training</span>
      </div>
      <Link 
        href="/free-training" 
        className="bg-orchid hover:bg-orchid-lt text-white text-[0.8rem] font-bold py-2 px-6 rounded-md no-underline transition-all active:scale-95"
      >
        Get Access
      </Link>
    </div>
  );
}
