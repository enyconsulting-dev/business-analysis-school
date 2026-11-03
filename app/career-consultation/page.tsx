import Link from "next/link";

const consultationBookingUrls = {
  30: process.env.NEXT_PUBLIC_CAREER_CONSULTATION_30_URL,
  60: process.env.NEXT_PUBLIC_CAREER_CONSULTATION_60_URL,
};

export default function CareerConsultation() {
  return (
    <div className="bg-navy-deep text-white min-h-screen">
      {/* ========== HERO ========== */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-15"></div>
        <div className="max-w-[700px] mx-auto px-10 relative z-10 text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-orchid/10 border border-orchid/25 rounded-md text-[0.6rem] font-bold uppercase tracking-widest text-orchid-lt mb-6 font-bold">
            1-on-1 Strategy Session
          </div>
          <h1 className="font-serif text-[clamp(2.4rem,5vw,3.5rem)] leading-tight mb-6">
            Get Targeted Guidance <br />
            <span className="italic text-gold font-normal italic">For Your Career Pivot.</span>
          </h1>
          <p className="text-[1.1rem] text-white/50 font-light max-w-[500px] mx-auto leading-relaxed">
            Stop guessing and start executing with a personalized roadmap designed for your specific goals in 2026. Limited weekly availability.
          </p>
        </div>
      </section>

      {/* ========== PRICING TIERS ========== */}
      <section className="py-20 bg-navy">
        <div className="max-w-[1140px] mx-auto px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[800px] mx-auto">
            {/* 30 Mins */}
            <div className="bg-navy-alt border border-white/5 p-10 rounded-3xl transition-all hover:border-orchid/20 hover:bg-white/[0.02] group">
              <div className="text-[0.65rem] font-bold tracking-widest uppercase text-white/30 mb-2">Focused Strategy</div>
              <h3 className="font-serif text-2xl mb-4 group-hover:text-gold transition-colors">30-Minute Consultation</h3>
              <div className="font-serif text-4xl mb-8 text-white">$250</div>
              <ul className="space-y-4 mb-10 list-none p-0 text-[0.88rem] text-white/50 font-light">
                <li className="flex gap-3"><span className="text-gold">✓</span> Review of your current profile</li>
                <li className="flex gap-3"><span className="text-gold">✓</span> Immediate career gaps identified</li>
                <li className="flex gap-3"><span className="text-gold">✓</span> 3 actionable next steps</li>
              </ul>
              <a
                href={consultationBookingUrls[30] || "/contact?interest=Career%20Consultation&consultation=30"}
                target={consultationBookingUrls[30] ? "_blank" : undefined}
                rel={consultationBookingUrls[30] ? "noopener noreferrer" : undefined}
                className="block w-full bg-white/5 hover:bg-white/10 text-white font-bold py-4 rounded-xl border border-white/10 transition-all active:scale-[0.98] text-center no-underline"
              >
                {consultationBookingUrls[30] ? "Book 30-Min Session" : "Request 30-Min Session Details"}
              </a>
            </div>

            {/* 60 Mins */}
            <div className="bg-navy-alt border-2 border-orchid p-10 rounded-3xl transition-all shadow-2xl shadow-orchid/5 -translate-y-4 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-gold text-navy-deep text-[0.6rem] font-extrabold px-3 py-1.5 rounded-md uppercase tracking-wider">Most Impact</div>
              <div className="text-[0.65rem] font-bold tracking-widest uppercase text-orchid-lt mb-2">Deep Dive Roadmap</div>
              <h3 className="font-serif text-2xl mb-4">60-Minute Consultation</h3>
              <div className="font-serif text-4xl mb-8 text-white">$500</div>
              <ul className="space-y-4 mb-10 list-none p-0 text-[0.88rem] text-white/70 font-light">
                <li className="flex gap-3 font-bold"><span className="text-orchid-lt">✓</span> Full experience auditing & mapping</li>
                <li className="flex gap-3 font-bold"><span className="text-orchid-lt">✓</span> Detailed 90-day pivot roadmap</li>
                <li className="flex gap-3 font-bold"><span className="text-orchid-lt">✓</span> Interview strategy & salary negotiation</li>
                <li className="flex gap-3 font-bold"><span className="text-orchid-lt">✓</span> 1 Week follow-up email support</li>
              </ul>
              <a
                href={consultationBookingUrls[60] || "/contact?interest=Career%20Consultation&consultation=60"}
                target={consultationBookingUrls[60] ? "_blank" : undefined}
                rel={consultationBookingUrls[60] ? "noopener noreferrer" : undefined}
                className="block w-full bg-orchid hover:bg-orchid-lt text-white font-bold py-4 rounded-xl shadow-lg shadow-orchid/20 transition-all active:scale-[0.98] text-center no-underline"
              >
                {consultationBookingUrls[60] ? "Book 60-Min Deep Dive" : "Request 60-Min Session Details"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="py-24 bg-navy-alt text-center relative overflow-hidden">
        <div className="max-w-[700px] mx-auto px-10 relative z-10">
          <h2 className="font-serif text-[2.2rem] mb-6 text-white italic">Wait! Unsure if a consultation is for you?</h2>
          <p className="text-[1rem] text-white/50 font-light mb-10 max-w-[500px] mx-auto leading-relaxed">
            If you're looking for our high-end coaching programs, we recommend starting with our free training first to see if we're a good fit.
          </p>
          <Link href="/free-training" className="bg-white hover:bg-gray-100 text-navy-deep font-bold py-4 px-12 rounded-lg no-underline transition-all shadow-xl hover:-translate-y-1 inline-block">
            Watch Free Training Instead
          </Link>
        </div>
      </section>
    </div>
  );
}
