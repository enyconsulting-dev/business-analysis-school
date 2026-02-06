export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-primary via-[#1e40af] to-[#1e3a8a] py-16 lg:py-24 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 size-64 bg-accent/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="layout-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="flex flex-col gap-6 text-white text-center lg:text-left">
              <div className="inline-flex items-center justify-center lg:justify-start gap-2 text-blue-100 text-sm font-medium">
                <span className="bg-white/20 px-2 py-1 rounded text-xs uppercase tracking-wider">
                  New Cohort
                </span>
                <span>Enrollment Open for 2025</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                Fast-track your income to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-100">
                  Six Figures
                </span>
              </h1>

              <p className="text-lg text-blue-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                The #1 Platform for Non-Tech Professionals to pivot into
                Business Analysis. Official IIBA Endorsed Education Provider
                (EEP) & ScrumStudy Partner.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <button className="h-12 px-8 rounded-lg bg-accent hover:bg-accent-hover text-white font-bold text-base transition-transform hover:scale-105 shadow-lg">
                  Get Started Free
                </button>
                <button className="h-12 px-8 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium text-base border border-white/20 backdrop-blur-sm flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">play_circle</span>
                  Watch Success Stories
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-8 flex flex-col items-center lg:items-start gap-3 opacity-90">
                <p className="text-xs uppercase tracking-widest text-blue-200">
                  Accredited By
                </p>
                <div className="flex items-center gap-6 grayscale contrast-200 brightness-200">
                  {/* IIBA Text Logo Representation */}
                  <div className="h-8 flex items-center gap-1 font-bold text-xl italic font-serif">
                    <span>IIBA</span>
                    <span className="text-[10px] not-italic font-sans border border-white px-1 rounded ml-1">
                      EEP
                    </span>
                  </div>
                  {/* ScrumStudy Text Logo Representation */}
                  <div className="h-8 flex items-center gap-1 font-bold text-lg">
                    <span className="material-symbols-outlined">
                      workspace_premium
                    </span>
                    <span>ScrumStudy</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative lg:h-auto w-full max-w-lg mx-auto lg:max-w-none">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent z-10"></div>
                <img
                  alt="Diverse group of professional students collaborating in a modern office environment"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSg-jHCAhk5IKxRq8lep7IPTpLVmFRm9EaF_axLohLnY3wGA7I_l52JWNS-SavIW810t9pJp1LZJqJTK8nZoaTncPwJsbLj5lHWvd-mTyx_Vyd4yR7uLiynF-AV7Dpor5ANql7J7U3EZ5yG5WOHCxve_kgciVMBKdsK7hdvx9cOHqnWK0zqL8icg8rf2Qy9gvOv9hRvfAsaynQFTqVu0t_Jd7i-xY6MN6ELX5pame3OJmDFsveurFeC4lXXtALQPkgQWJICAH8Pyo"
                />
                {/* Floating Card */}
                <div className="absolute bottom-6 left-6 right-6 z-20 bg-white/95 backdrop-blur shadow-xl rounded-xl p-4 flex items-center gap-4">
                  <div className="bg-green-100 p-2 rounded-full text-green-600">
                    <span className="material-symbols-outlined">
                      trending_up
                    </span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase">
                      Average Salary Hike
                    </p>
                    <p className="text-lg font-bold text-gray-900">
                      +45% after certification
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Companies Marquee */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center mb-6">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
            Trusted by professionals at top companies
          </h3>
        </div>
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee whitespace-nowrap flex gap-16 px-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Logos repeated for marquee effect */}
            <div className="flex items-center gap-2 text-2xl font-bold text-gray-400">
              <span className="material-symbols-outlined">language</span>{" "}
              GlobalTech
            </div>
            <div className="flex items-center gap-2 text-2xl font-bold text-gray-400">
              <span className="material-symbols-outlined">cloud</span>{" "}
              CloudSystems
            </div>
            <div className="flex items-center gap-2 text-2xl font-bold text-gray-400">
              <span className="material-symbols-outlined">payments</span>{" "}
              FinCorp
            </div>
            <div className="flex items-center gap-2 text-2xl font-bold text-gray-400">
              <span className="material-symbols-outlined">shopping_cart</span>{" "}
              MarketPlace
            </div>
            <div className="flex items-center gap-2 text-2xl font-bold text-gray-400">
              <span className="material-symbols-outlined">
                health_and_safety
              </span>{" "}
              HealthPlus
            </div>
            <div className="flex items-center gap-2 text-2xl font-bold text-gray-400">
              <span className="material-symbols-outlined">language</span>{" "}
              GlobalTech
            </div>
            <div className="flex items-center gap-2 text-2xl font-bold text-gray-400">
              <span className="material-symbols-outlined">cloud</span>{" "}
              CloudSystems
            </div>
            <div className="flex items-center gap-2 text-2xl font-bold text-gray-400">
              <span className="material-symbols-outlined">payments</span>{" "}
              FinCorp
            </div>
            <div className="flex items-center gap-2 text-2xl font-bold text-gray-400">
              <span className="material-symbols-outlined">shopping_cart</span>{" "}
              MarketPlace
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-dots-pattern opacity-20"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] lg:aspect-square max-w-md mx-auto">
                <img
                  alt="Eno Eka, founder of Business Analysis School, smiling professionally in business attire"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQViEycEBjI20-h6VWNjZhlwv8hgXKvebq_jyHi3jluPcyR2CTEt9XnHchv0ez72LTd82pzL_nkLNH5sCLhCBBfvc502c4ku5kZoJ1dEF2oTQq9YQMbCObSxdJwWJBn4p7lilTlr9N5FyXMsRuWDzmSydgDRnBe8uMnwRqF_cbOfWrkdZ3NX_zhgFDEdhk65v_2pHlS5-54QQSwIui7ZuTijmRmvGksdDuxbRngkJaFPaXb_cZxyEYbDwKCHApQNR3-aq1RFzZU7w"
                />
              </div>
              {/* Stats Card Overlay */}
              <div className="absolute -bottom-6 -right-6 lg:right-0 bg-white p-6 rounded-xl shadow-xl max-w-[200px] hidden sm:block">
                <p className="text-4xl font-bold text-primary mb-1">
                  100k+
                </p>
                <p className="text-sm text-gray-600 font-medium">
                  Students Mentored Globally
                </p>
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 text-accent font-bold uppercase tracking-wider text-sm">
                <span className="w-8 h-[2px] bg-accent"></span>
                Meet Your Instructor
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Helping you pivot with confidence.
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                Led by Eno Eka, an award-winning Business Analyst and Career
                Coach. We don&apos;t just teach theory; we provide the blueprint
                that has helped thousands of non-tech professionals land
                six-figure roles at Fortune 500 companies.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-4">
                <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-3xl font-black text-primary">
                    95%
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Certification Pass Rate
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-3xl font-black text-primary">
                    $100k+
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Average Graduate Salary
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <a
                  className="text-primary font-bold hover:underline inline-flex items-center gap-1"
                  href="#"
                >
                  Read Eno&apos;s Story{" "}
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IIBA Certification Section */}
      <section className="py-20 bg-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center size-16 bg-orange-100 text-orange-600 rounded-full mb-4">
              <span className="material-symbols-outlined text-3xl">
                verified
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Official IIBA Endorsed Education Provider
            </h2>
            <p className="text-lg text-gray-600">
              Get certified and increase your earning potential by up to 40%. We
              guide you through every level of the IIBA certification roadmap.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 - ECBA */}
            <div className="bg-background-light rounded-xl p-8 border border-gray-200 hover:border-primary/50 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-8xl text-primary">
                  school
                </span>
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-primary mb-2">
                  ECBA™
                </h3>
                <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-4">
                  Entry Certificate in Business Analysis
                </p>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  Perfect for individuals entering the field of business
                  analysis. No experience required.
                </p>
                <ul className="space-y-2 mb-8 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-green-500 text-base">
                      check_circle
                    </span>{" "}
                    21 PD Hours Included
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-green-500 text-base">
                      check_circle
                    </span>{" "}
                    Exam Prep Simulator
                  </li>
                </ul>
                <a
                  className="inline-block w-full text-center py-2.5 rounded border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-colors"
                  href="#"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Card 2 - CCBA (Popular) */}
            <div className="bg-primary text-white rounded-xl p-8 shadow-xl transform md:-translate-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <span className="material-symbols-outlined text-8xl">
                  military_tech
                </span>
              </div>
              <div className="relative z-10">
                <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  POPULAR
                </div>
                <h3 className="text-2xl font-bold mb-2">CCBA®</h3>
                <p className="text-sm font-semibold text-blue-200 uppercase tracking-wide mb-4">
                  Certification of Capability in Business Analysis
                </p>
                <p className="text-blue-100 mb-6 text-sm leading-relaxed">
                  For professionals with 2-3 years of business analysis
                  experience. Validate your skills.
                </p>
                <ul className="space-y-2 mb-8 text-sm text-blue-100">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-accent text-base">
                      check_circle
                    </span>{" "}
                    21 PD Hours Included
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-accent text-base">
                      check_circle
                    </span>{" "}
                    Application Support
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-accent text-base">
                      check_circle
                    </span>{" "}
                    1-on-1 Coaching
                  </li>
                </ul>
                <a
                  className="inline-block w-full text-center py-2.5 rounded bg-white text-primary font-bold hover:bg-blue-50 transition-colors"
                  href="#"
                >
                  Get Certified
                </a>
              </div>
            </div>

            {/* Card 3 - CBAP */}
            <div className="bg-background-light rounded-xl p-8 border border-gray-200 hover:border-primary/50 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-8xl text-primary">
                  workspace_premium
                </span>
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-primary mb-2">
                  CBAP®
                </h3>
                <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-4">
                  Certified Business Analysis Professional
                </p>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  The gold standard for senior business analysts with over 5
                  years of experience.
                </p>
                <ul className="space-y-2 mb-8 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-green-500 text-base">
                      check_circle
                    </span>{" "}
                    35 PD Hours Included
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-green-500 text-base">
                      check_circle
                    </span>{" "}
                    Advanced Case Studies
                  </li>
                </ul>
                <a
                  className="inline-block w-full text-center py-2.5 rounded border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-colors"
                  href="#"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="flex flex-col items-start p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="size-12 rounded-lg bg-blue-100 text-primary flex items-center justify-center mb-4">
                <span className="material-symbols-outlined">
                  supervisor_account
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Expert Instructors
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Learn from industry leaders who have worked at global giants
                like Accenture and IBM.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-start p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="size-12 rounded-lg bg-blue-100 text-primary flex items-center justify-center mb-4">
                <span className="material-symbols-outlined">public</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Global Community
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Join a network of 100k+ professionals sharing jobs, tips, and
                study resources.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-start p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="size-12 rounded-lg bg-blue-100 text-primary flex items-center justify-center mb-4">
                <span className="material-symbols-outlined">hotel_class</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Top Notch Courses
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Curriculum designed to meet current market demands and
                certification standards.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-start p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="size-12 rounded-lg bg-blue-100 text-primary flex items-center justify-center mb-4">
                <span className="material-symbols-outlined">handshake</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Mentorship
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Get personalized guidance on resume building, interview prep,
                and salary negotiation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Explore Our Programs
              </h2>
              <p className="text-gray-600">
                Choose the learning path that fits your schedule and goals.
              </p>
            </div>
            <a
              className="hidden md:flex items-center text-primary font-semibold hover:underline"
              href="#"
            >
              View all programs{" "}
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Program 1 */}
            <a
              className="group block p-1 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50  hover:from-primary hover:to-primary-dark transition-all duration-300"
              href="#"
            >
              <div className="bg-white h-full rounded-xl p-6 flex flex-col">
                <div className="size-10 rounded-full bg-orange-100 text-accent flex items-center justify-center mb-6 group-hover:bg-orange-50 transition-colors">
                  <span className="material-symbols-outlined">
                    rocket_launch
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  Coaching Program
                </h3>
                <p className="text-sm text-gray-500 mb-4 flex-grow">
                  Intensive 12-week live mentorship to launch your career.
                </p>
                <span className="text-sm font-semibold text-primary flex items-center gap-1">
                  Learn More{" "}
                  <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </span>
              </div>
            </a>

            {/* Program 2 */}
            <a
              className="group block p-1 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50  hover:from-primary hover:to-primary-dark transition-all duration-300"
              href="#"
            >
              <div className="bg-white h-full rounded-xl p-6 flex flex-col">
                <div className="size-10 rounded-full bg-blue-100 text-primary flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors">
                  <span className="material-symbols-outlined">schedule</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  On-Demand
                </h3>
                <p className="text-sm text-gray-500 mb-4 flex-grow">
                  Self-paced courses you can take anytime, anywhere.
                </p>
                <span className="text-sm font-semibold text-primary flex items-center gap-1">
                  Learn More{" "}
                  <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </span>
              </div>
            </a>

            {/* Program 3 */}
            <a
              className="group block p-1 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50  hover:from-primary hover:to-primary-dark transition-all duration-300"
              href="#"
            >
              <div className="bg-white h-full rounded-xl p-6 flex flex-col">
                <div className="size-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-6 group-hover:bg-purple-50 transition-colors">
                  <span className="material-symbols-outlined">history_edu</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  Career Services
                </h3>
                <p className="text-sm text-gray-500 mb-4 flex-grow">
                  Resume reviews, LinkedIn optimization, and mock interviews.
                </p>
                <span className="text-sm font-semibold text-primary flex items-center gap-1">
                  Learn More{" "}
                  <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </span>
              </div>
            </a>

            {/* Program 4 */}
            <a
              className="group block p-1 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50  hover:from-primary hover:to-primary-dark transition-all duration-300"
              href="#"
            >
              <div className="bg-white h-full rounded-xl p-6 flex flex-col">
                <div className="size-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-6 group-hover:bg-green-50 transition-colors">
                  <span className="material-symbols-outlined">
                    corporate_fare
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  Corporate Training
                </h3>
                <p className="text-sm text-gray-500 mb-4 flex-grow">
                  Upskill your team with custom business analysis workshops.
                </p>
                <span className="text-sm font-semibold text-primary flex items-center gap-1">
                  Learn More{" "}
                  <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-900"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-6">
            Ready to change your life?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join thousands of students who have transitioned from low-paying
            jobs to six-figure careers in Business Analysis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="h-14 px-8 rounded-lg bg-accent hover:bg-accent-hover text-white font-bold text-lg transition-transform hover:-translate-y-1 shadow-xl">
              Start Free Training
            </button>
            <button className="h-14 px-8 rounded-lg bg-transparent border-2 border-white/30 hover:bg-white/10 text-white font-bold text-lg transition-colors">
              Talk to an Advisor
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
