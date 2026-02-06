export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full bg-primary py-20 lg:py-28">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 size-64 bg-accent/20 rounded-full blur-3xl pointer-events-none"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4">
            Contact Our Team
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Have questions about our programs or certifications? We&apos;re here
            to help you navigate your journey to a six-figure Business Analysis
            career.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-2">
                Send us a message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and an advisor will get back to you
                within 24 hours.
              </p>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      className="block text-sm font-semibold text-gray-700"
                      htmlFor="first-name"
                    >
                      First Name
                    </label>
                    <input
                      className="px-2 w-full rounded-lg border-gray-300 bg-gray-50 text-gray-900 shadow-sm focus:border-accent focus:ring-accent py-3"
                      id="first-name"
                      placeholder="Jane"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      className="block text-sm font-semibold text-gray-700"
                      htmlFor="last-name"
                    >
                      Last Name
                    </label>
                    <input
                      className="px-2 w-full rounded-lg border-gray-300 bg-gray-50 text-gray-900 shadow-sm focus:border-accent focus:ring-accent py-3"
                      id="last-name"
                      placeholder="Doe"
                      type="text"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    className="block text-sm font-semibold text-gray-700"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-300 bg-gray-50 text-gray-900 shadow-sm focus:border-accent focus:ring-accent py-3"
                    id="email"
                    placeholder="jane@example.com"
                    type="email"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    className="block text-sm font-semibold text-gray-700"
                    htmlFor="career-interest"
                  >
                    Career Interest
                  </label>
                  <select
                    className="px-2 w-full rounded-lg border-gray-300 bg-gray-50 text-gray-900 shadow-sm focus:border-accent focus:ring-accent py-3"
                    id="career-interest"
                  >
                    <option disabled value="">
                      Select a program
                    </option>
                    <option value="coaching">
                      Comprehensive Coaching Program
                    </option>
                    <option value="self-paced">Self-Paced Courses</option>
                    <option value="certification">
                      IIBA Certification Support
                    </option>
                    <option value="corporate">Corporate Training</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    className="block text-sm font-semibold text-gray-700"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="px-2 w-full rounded-lg border-gray-300 bg-gray-50 text-gray-900 shadow-sm focus:border-accent focus:ring-accent py-3 resize-none"
                    id="message"
                    placeholder="How can we help you achieve your goals?"
                    rows={5}
                  ></textarea>
                </div>

                <button
                  className="w-full h-12 rounded-lg bg-accent hover:bg-accent-hover text-white font-bold text-base transition-all shadow-lg hover:shadow-xl"
                  type="submit"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-bold text-primary mb-2">
                Contact Information
              </h2>
              <p className="text-gray-600 mb-4">
                Reach out to us directly through any of these channels.
              </p>

              {/* Email Card */}
              <div className="bg-background-light p-6 rounded-xl border border-gray-100 flex items-start gap-4">
                <div className="flex-shrink-0 size-12 rounded-full bg-blue-100 text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Email Support
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">
                    Our team typically responds within 24 hours.
                  </p>
                  <a
                    className="text-accent font-semibold hover:underline"
                    href="mailto:support@baschool.com"
                  >
                    support@baschool.com
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-background-light p-6 rounded-xl border border-gray-100 flex items-start gap-4">
                <div className="flex-shrink-0 size-12 rounded-full bg-green-100 text-green-700 flex items-center justify-center">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Phone &amp; WhatsApp
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">
                    Available Mon-Fri from 9am to 5pm EST.
                  </p>
                  <a
                    className="text-accent font-semibold hover:underline block"
                    href="tel:+15551234567"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>

              {/* Social Media Card */}
              <div className="bg-background-light p-6 rounded-xl border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Connect with us
                </h3>
                <div className="flex gap-4">
                  <a
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-200 hover:border-primary hover:text-primary transition-colors"
                    href="#"
                  >
                    <span className="font-bold text-sm">LinkedIn</span>
                  </a>
                  <a
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-200 hover:border-accent hover:text-accent transition-colors"
                    href="#"
                  >
                    <span className="font-bold text-sm">Instagram</span>
                  </a>
                  <a
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-200 hover:border-red-500 hover:text-red-500 transition-colors"
                    href="#"
                  >
                    <span className="font-bold text-sm">YouTube</span>
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="mt-4">
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <span className="material-symbols-outlined text-lg">
                    location_on
                  </span>
                  <span>Toronto, Ontario, Canada</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discovery Call CTA */}
      <section className="py-20 bg-blue-50 border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center size-16 rounded-full bg-white text-accent mb-6 shadow-md">
            <span className="material-symbols-outlined text-3xl">
              calendar_month
            </span>
          </div>
          <h2 className="text-3xl font-bold text-primary mb-4">
            Not sure which program is right for you?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule a complimentary 15-minute discovery call with one of our
            career advisors to discuss your goals and find the perfect path.
          </p>
          <button className="inline-flex items-center justify-center h-14 px-8 rounded-lg bg-primary hover:bg-primary-dark text-white font-bold text-lg transition-transform hover:-translate-y-1 shadow-xl gap-2">
            <span>Schedule a Discovery Call</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </section>

      {/* FAQ Link Section */}
      <section className="py-10 bg-gray-100 border-t border-gray-200 ">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600 font-medium">
            Have a common question?{" "}
            <a className="text-accent hover:underline font-bold" href="#">
              Check our FAQ page
            </a>{" "}
            before submitting a request for faster answers.
          </p>
        </div>
      </section>
    </>
  );
}
