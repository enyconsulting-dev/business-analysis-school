"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Free Training", href: "/free-training" },
    { name: "Programs", href: "/programs" },
    { name: "Resources", href: "/resources" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[1001] h-[72px] flex items-center justify-between px-6 md:px-10 bg-navy/95 backdrop-blur-[16px] border-b border-white/5 transition-all">
        {/* Logo */}
        <Link href="/" className="font-sans font-extrabold text-[0.95rem] text-white no-underline tracking-wide z-[1002]">
          BUSINESS ANALYSIS <span className="text-gold">SCHOOL</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              className="text-[0.78rem] font-medium text-white/60 hover:text-gold no-underline tracking-wide transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/contact" 
            className="bg-gold hover:bg-gold-lt text-navy text-[0.8rem] font-bold py-2.5 px-6 rounded-lg no-underline transition-all hover:-translate-y-px active:translate-y-0 shadow-lg shadow-gold/10"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden relative z-[1005] w-10 h-10 flex items-center justify-center text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          <div className="flex flex-col gap-1.5 w-6">
            <motion.span 
              animate={isMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="w-full h-0.5 bg-white rounded-full transition-all"
            />
            <motion.span 
              animate={isMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
              className="w-full h-0.5 bg-white rounded-full transition-all"
            />
            <motion.span 
              animate={isMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="w-full h-0.5 bg-white rounded-full transition-all"
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-navy-deep md:hidden pt-[72px]"
          >
            {/* Background Texture */}
            <div className="absolute inset-0 hero-grid opacity-5 pointer-events-none"></div>
            
            <motion.div 
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="relative h-full flex flex-col items-center justify-center px-10 gap-8"
            >
              <div className="flex flex-col items-center gap-6">
                {navLinks.map((link) => (
                  <motion.div key={link.name} variants={linkVariants}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-2xl font-serif text-white hover:text-gold no-underline transition-colors block text-center"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={linkVariants} className="mt-8">
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-gold hover:bg-gold-lt text-navy font-bold py-4 px-12 rounded-xl no-underline transition-all shadow-xl shadow-gold/10 inline-block text-[1rem]"
                >
                  Apply Now
                </Link>
              </motion.div>

              <motion.div variants={linkVariants} className="mt-12 text-center">
                <p className="text-[0.7rem] text-white/30 uppercase tracking-[0.2em] font-bold mb-4">Official EEP Provider</p>
                <div className="flex gap-4 justify-center opacity-20">
                  <div className="w-8 h-8 rounded bg-white"></div>
                  <div className="w-8 h-8 rounded bg-white"></div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
