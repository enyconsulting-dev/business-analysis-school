import Link from "next/link";

const CONSULTATION_BOOKING_URL =
  "https://link.enyconsulting.ca/widget/booking/UZ0zVWxzyQDG0CwxEILb";

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
          <div className="mx-auto max-w-[620px]">
            <div className="bg-navy-alt border-2 border-orchid p-10 rounded-3xl transition-all shadow-2xl shadow-orchid/5 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-gold text-navy-deep text-[0.6rem] font-extrabold px-3 py-1.5 rounded-md uppercase tracking-wider">One-hour session</div>
              <div className="text-[0.65rem] font-bold tracking-widest uppercase text-orchid-lt mb-2">Deep Dive Roadmap</div>
              <h3 className="font-serif text-2xl mb-4">1-Hour Paid Consultation</h3>
              <div className="font-serif text-4xl mb-8 text-white">$500</div>
              <ul className="space-y-4 mb-10 list-none p-0 text-[0.88rem] text-white/70 font-light">
                <li className="flex gap-3 font-bold"><span className="text-orchid-lt">✓</span> Full experience auditing & mapping</li>
                <li className="flex gap-3 font-bold"><span className="text-orchid-lt">✓</span> Detailed 90-day pivot roadmap</li>
                <li className="flex gap-3 font-bold"><span className="text-orchid-lt">✓</span> Interview strategy & salary negotiation</li>
                <li className="flex gap-3 font-bold"><span className="text-orchid-lt">✓</span> 1 Week follow-up email support</li>
              </ul>
              <a
                href={CONSULTATION_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-orchid hover:bg-orchid-lt text-white text-center font-bold py-4 rounded-xl shadow-lg shadow-orchid/20 transition-all active:scale-[0.98] no-underline"
              >
                Choose a Time & Book
              </a>
              <p className="mt-4 text-center text-xs text-white/40">
                Booking and payment are completed on our secure scheduling page.
              </p>
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
