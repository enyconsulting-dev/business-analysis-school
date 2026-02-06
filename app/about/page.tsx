export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative flex w-full flex-col">
        <div className="layout-container flex h-full grow flex-col">
          <div className="md:px-10 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-7xl flex-1 w-full">
              <div className="p-4">
                <div
                  className="flex min-h-[500px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-start justify-end px-6 pb-12 md:px-16 md:pb-16"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(30, 59, 138, 0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAx_A205HQCbqNrE1iu_rx5sokhLzjybbszpUYmd_AYXBioAMpuJIuGzJNeISLqC-asVCD9tapD-sm-X72c91wRqpZxpna4XK6cCz0tep2YGkKqKmFBvhRM0eTxrTWja_-JmYSIEQ0O6l0fEXxphoi_EDbPHPEq9rlTZZ2ckO2IfxPW8dQTrtR9bCuGq4d6QRp-eEQHUs4HVMHqJRtRSTOdzyAfveIkSTXr5CfnGwUy--qhKEvWpk0bMnlLO437UhmjcGr8_nU2VEU")',
                  }}
                >
                  <div className="flex flex-col gap-3 text-left max-w-2xl">
                    <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-[-0.033em]">
                      Empowering Non-Tech Professionals to Break Into Tech
                    </h1>
                    <h2 className="text-white/90 text-base md:text-xl font-medium leading-relaxed">
                      Your bridge to a lucrative career in Business Analysis.
                      Join a community of changemakers.
                    </h2>
                  </div>
                  <div className="flex gap-4 pt-2">
                    <button className="flex h-12 px-6 items-center justify-center rounded-lg bg-primary text-white text-base font-bold shadow-lg hover:bg-primary/90 transition-colors">
                      Start Learning
                    </button>
                    <button className="flex h-12 px-6 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm text-white text-base font-bold hover:bg-white/30 transition-colors">
                      Meet the Team
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="w-full bg-white py-8 border-y border-[#e9ebf2]">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">
            As Seen In
          </h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-2xl font-black text-gray-400 font-display">
              Forbes
            </span>
            <span className="text-2xl font-black text-gray-400 font-display">
              TEDx
            </span>
            <span className="text-2xl font-black text-gray-400 font-display">
              TechCrunch
            </span>
            <span className="text-2xl font-black text-gray-400 font-display">
              Yahoo! Finance
            </span>
            <span className="text-2xl font-black text-gray-400 font-display">
              Business Insider
            </span>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2 flex flex-col gap-6">
              <div className="flex items-center gap-2 text-primary font-bold tracking-wider text-sm uppercase">
                <span className="h-px w-8 bg-primary"></span>
                Our Story
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0f121a] leading-tight">
                From a Blog Post to a Global Movement
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                It started in 2019 with a simple mission: to demystify the tech
                industry for those on the outside looking in. What began as a
                blog sharing tips on Business Analysis quickly evolved into a
                community of eager learners.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, Business Analysis School is the premier destination for
                professionals pivoting into tech. We don&apos;t just teach
                theory; we provide the blueprint for career transformation,
                focusing on practical skills that employers actually hire for.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-4">
                <div className="border-l-4 border-primary pl-4">
                  <span className="block text-3xl font-bold text-[#0f121a]">
                    2019
                  </span>
                  <span className="text-sm text-gray-500">Founded</span>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <span className="block text-3xl font-bold text-[#0f121a]">
                    100k+
                  </span>
                  <span className="text-sm text-gray-500">
                    Community Members
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 mt-8">
                  <div
                    className="h-64 w-full rounded-xl bg-gray-200 bg-cover bg-center"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDCnfFbqyLcMvfZA3nHXS44B4uz4K9prryTh21hkxCdyG473denbjEQZ2d4b0gzAeWsiFeaq_M4jVzXUwZVTdJ_Uj0pnbEME0JBZzOxPfAcpQ-uK4QGi931gAeADvWLqw7VTkTFErUV-wD1m3fpEzspJ8HtBbKtSaUPVgpSM8LFg98pRnFac1gSF1Ha3CRW0AgtYoQ9qpQ8-tCJhj4HZtWow6NQPuJlKPaO7R1LCc08WNrm2RkkC4BN5XylVgVRv6qMPvO-m_Dooks")',
                    }}
                  ></div>
                  <div
                    className="h-40 w-full rounded-xl bg-gray-200 bg-cover bg-center"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBZIEpg0RVd5-LV24OAw1TryzVEo0Zp8tFnEbAJrDm_87IzxIg1b1IhfZXKNX284Dfiig3-5LRDgH4TzPoI8d5OXsvJ3Wp4sl0pTQrPt0oLm6JeRz8iaZ1Oy9Udlh1OdSWs1ZSAbVF3D1d-RahFXCy64ZBV4NOZHcDGkyU_QBKGilhuwhgbQ-H2KItrlecf_Ajn7E__zRPcWwtprMS_aeVExxTnkCicfvgyKBVmWqQ8Ou_xQQ6m_JANxbm08lJjxCTFR_lget3E9n4")',
                    }}
                  ></div>
                </div>
                <div className="space-y-4">
                  <div
                    className="h-40 w-full rounded-xl bg-gray-200 bg-cover bg-center"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCEmeAyUm3mCprLBdH3jfR6IQFBS468uQgaR3dNGNztW7LiRRjss07YEhNK3UY0p9ICh3DctTLbQDkneUUhayv5zWscb5uHEjb1mZGSITTkf-WMi10JW1C6rHWRar4wAcqX7h_oWx-v5kfVuegPhqjsH5kCk-VcdOkmGqCG7B-Bp2Ci1h0SVnPm5d6hUTrblkDrvvJ0PVUEnsmAGvJdI_xog7FDewtdoQmA4LNCriCeUsVyb6IMtd2jONjiGgqQknMEa-iAVrU1KD0")',
                    }}
                  ></div>
                  <div
                    className="h-64 w-full rounded-xl bg-gray-200 bg-cover bg-center"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB8zwzYsT2MNejbgn9mJp66LwkWUEs4FhXGxrmjldggJ6lnbs0QCLdd6RYAO0jlxbfhPM_Jz2MOjEtN3jI_yPbHJ376JHLcjgUHTs5ZrJAraTUeXLXDcekKIMMW4r8Hf6bT59H5mKFCmjZ1ix3vNeKeTvn9aC7g5Nljzrv2dF3RU60_MYeo5maweFXO6ALcbIAu7zID3U2rk_H6UBV7uBZH3O0osneygohjCExZrJwNuFqRF96R-sxUhqM2UYhfiNRNxcXehvtymMc")',
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="bg-[#f0f4ff] py-16 md:py-24 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            {/* Founder Image */}
            <div className="w-full md:w-5/12 relative">
              <div className="absolute -inset-4 bg-primary/20 rounded-full blur-2xl transform rotate-6"></div>
              <div
                className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] md:aspect-auto md:h-[500px] w-full bg-cover bg-top"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBe6y5Jpn09NzRMrfyCLH1sAM8KKvfy85kCGyr7JGRWQXJkiMPrG8CWLBs2GTDaOflKccWPsC5UPAEWVBmAxAJnlKzyHnb952hK5Y61Et0853yofMblQNvYqu84m1K8rm4told3EeFn36k7MCXEXbtV3Wfabt0UC9j98fxYre1AeG2g6YGM9YFfCHIe_5leXAKLvefKvrsjyVyRMeSZQKhUwKHS8xn1lG25giWOhYd1jPtEga_Vk3RwFyOVwk9U3PTNPCn5F4PA1B4")',
                }}
              ></div>
            </div>
            {/* Founder Text */}
            <div className="w-full md:w-7/12 flex flex-col gap-6">
              <span className="inline-flex items-center rounded-full bg-white border border-primary/20 px-3 py-1 text-sm font-medium text-primary w-fit">
                <span className="material-symbols-outlined text-[18px] mr-1">
                  person
                </span>
                Meet the Founder
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#0f121a] leading-tight">
                Eno Eka
              </h2>
              <h3 className="text-xl font-medium text-primary">
                Founder &amp; CEO
              </h3>
              <div className="relative pl-6 md:pl-0">
                <span className="hidden md:block absolute -left-10 -top-6 text-8xl text-primary/10 font-serif">
                  &quot;
                </span>
                <p className="text-xl md:text-2xl text-[#0f121a] font-medium italic leading-relaxed">
                  &quot;My vision is to help 100,000 people gain financial
                  freedom through tech. I believe that your background
                  shouldn&apos;t define your future. With the right guidance,
                  anyone can master Business Analysis and transform their
                  life.&quot;
                </p>
              </div>
              <p className="text-gray-600">
                An award-winning Business Analyst and career coach, Eno has been
                recognized by Forbes and TEDx for her contributions to education
                and technology. She brings over a decade of industry experience
                directly to the classroom.
              </p>
              <div className="pt-4">
                <a
                  className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
                  href="#"
                >
                  Read Eno&apos;s Full Bio
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 px-4 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="text-center max-w-2xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f121a] mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600">
              The principles that guide our curriculum, our community, and our
              mission.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {/* Value 1 */}
            <div className="bg-background-light p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="size-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-3xl">
                  verified
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#0f121a] mb-3">
                Integrity
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We teach what works, not just what sells. Our curriculum is
                built on honest, real-world practices that stand up to scrutiny
                in job interviews and on the job.
              </p>
            </div>
            {/* Value 2 */}
            <div className="bg-background-light p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="size-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-3xl">
                  rocket_launch
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#0f121a] mb-3">
                Transformation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We are in the business of changing lives. We measure our success
                not by course sales, but by the number of students who land
                their dream jobs.
              </p>
            </div>
            {/* Value 3 */}
            <div className="bg-background-light p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="size-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-3xl">
                  workspace_premium
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#0f121a] mb-3">
                Excellence
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We hold ourselves and our students to the highest standard. From
                the quality of our video lessons to the depth of our capstone
                projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="relative py-24 px-4 md:px-10 bg-primary overflow-hidden">
        {/* Abstract Background Map Overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuANgQa9E3FnwQm7omNCxdJJChi9KJDIQuKnUFxGHIP4qvbWSNftj9572jRzgEfVR2haimd2_koS8NJ9jr1vRDlao_MZabkad498Q7Af4yHvwJuOnVRHnwaxYPo4V3GRYa8JzvVqtBZqadIs2MpqLyA2Rr6qK6c2LFo6lJM5A0N8YUom5h1wmXkkIyhWJbVoxU1UCK0XhfA7uWbzcp-IpVYmmh3q8NEzEUhdfNxvXiG3b4lsm55NjT5FuDpYzB3NjEycne2Y1nF1_CQ")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            Global Impact
          </h2>
          <p className="text-white/80 text-xl max-w-2xl mx-auto mb-16">
            Our community spans across borders, cultures, and time zones. We are
            building a worldwide network of Business Analysts.
          </p>
          <div className="flex flex-wrap justify-center gap-10 md:gap-24">
            <div className="flex flex-col items-center">
              <span className="text-5xl md:text-6xl font-black text-white mb-2">
                50+
              </span>
              <span className="text-white/70 font-medium uppercase tracking-wider text-sm">
                Countries
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl md:text-6xl font-black text-white mb-2">
                10k+
              </span>
              <span className="text-white/70 font-medium uppercase tracking-wider text-sm">
                Students Trained
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl md:text-6xl font-black text-white mb-2">
                95%
              </span>
              <span className="text-white/70 font-medium uppercase tracking-wider text-sm">
                Completion Rate
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Tutors Grid */}
      <section className="py-16 md:py-24 px-4 md:px-10 bg-background-light">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0f121a] mb-4">
                Learn from Industry Experts
              </h2>
              <p className="text-gray-600">
                Our tutors aren&apos;t just teachers; they are active Senior
                Business Analysts working at top Fortune 500 companies.
              </p>
            </div>
            <a
              className="text-primary font-bold hover:underline flex items-center gap-1"
              href="#"
            >
              See All Tutors{" "}
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Tutor 1 */}
            <div className="group flex flex-col gap-3">
              <div className="overflow-hidden rounded-xl bg-gray-200">
                <div
                  className="w-full aspect-[4/5] bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCE4IQbm7CfuiQfRjzrb9dmldPkyRt2dgj8yF6x3ee0wXnqbNJwk5gPsuf3YwpVwzOLl0mCDBNnennRpOFcy7-aU9dnwclFcANi6XSJaVE0xD8vGdsk7CSMN0gv86SU9Rn6EUQQXDQ9YNiqASBubIMwMT8HvzmwiEja4HZXBJOYDlLd_ZIcP9ncG0_OYrUopPjRBji4JNHQlBIECzvDyFPQAM-WDU68JnFzyA0u3GhvGtI7okhYors4IKnd1FzmRmAZ8M60dpE_8fo")',
                  }}
                ></div>
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#0f121a]">David Chen</h3>
                <p className="text-sm text-primary font-medium mb-1">
                  Senior BA at Amazon
                </p>
                <div className="flex gap-2">
                  <span className="p-1 rounded bg-gray-100 text-gray-600 hover:text-[#0077b5] cursor-pointer transition-colors">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            {/* Tutor 2 */}
            <div className="group flex flex-col gap-3">
              <div className="overflow-hidden rounded-xl bg-gray-200">
                <div
                  className="w-full aspect-[4/5] bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAWPo4LkxK2LS6-glneaYB6C1QxAoooewAZfw1tV3nGiUDKw5-Bbd1wI45P1tfvzuxMeBafS8CxQZYth6K7DhXE_JbN7s0f5zj1a4VsrnjES8bIQp3OsmNKDVlvHw6ZUKKAJes1mpNNH3H6ApNd5cacmBahtJ3hI2Vs5Au3HxfTJ59Knn44FAAjtqOpLna84n6yN0c1BbTWBN5qTvk2IdkKR2FT4JQ34rpsmeMniS1-KXVghF4fMve5iKVBw-ZX3FBT85-xeeoyJ_k")',
                  }}
                ></div>
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#0f121a]">
                  Sarah Johnson
                </h3>
                <p className="text-sm text-primary font-medium mb-1">
                  Product Owner at Microsoft
                </p>
                <div className="flex gap-2">
                  <span className="p-1 rounded bg-gray-100 text-gray-600 hover:text-[#0077b5] cursor-pointer transition-colors">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            {/* Tutor 3 */}
            <div className="group flex flex-col gap-3">
              <div className="overflow-hidden rounded-xl bg-gray-200">
                <div
                  className="w-full aspect-[4/5] bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAl7ehviBpCksWeQxZa8fxVtNl_l5vArRg1zf6oVzf1oTMc3TvrP8VrTgL1VnVJwHhAlldI-A6_IMJ9xd3PHlzZH5rbJaeQgUtHcBHN34Y1eDf-gFhBIy-U9unl4BgdEIe-9WTNpIq8VduXblMnLXujOvSBlGJUsqMvRAV8sk__aykn3mSYUBR0zJTpgp4g7X5A6Zc0aqVgfrdn2IAa7DewInkbpGyLvqq9rQmuhiSjgWXcbK-vtrRceunW4T_lTHuUHT7KZ7HHgrc")',
                  }}
                ></div>
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#0f121a]">
                  Michael Okon
                </h3>
                <p className="text-sm text-primary font-medium mb-1">
                  Lead Analyst at Fintech Co
                </p>
                <div className="flex gap-2">
                  <span className="p-1 rounded bg-gray-100 text-gray-600 hover:text-[#0077b5] cursor-pointer transition-colors">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            {/* Tutor 4 */}
            <div className="group flex flex-col gap-3">
              <div className="overflow-hidden rounded-xl bg-gray-200">
                <div
                  className="w-full aspect-[4/5] bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBllJnu3OtHg2S7RqGgvmiAYZh-deaP-6s2NoPQlNFQldUQk1JLcI6dw0bfyq2JeMBTwTub462T70chX9EE1PMUYj-PgRqI2f2S31ZnJ4pln224vhVo4xHd_V_t247xikNURA2jUDL8wOTAlqKltWDOtbJozQIdewAZnz5MNknhd1D1ypNM7770AfwHBG0qzHlwen-UfQYjYIQsk4OyhmalJi250wlCat14k3xP_8VKoP4sM67tntG0aC7_M3vs0v6902l-yNhyGKw")',
                  }}
                ></div>
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#0f121a]">
                  Anita Singh
                </h3>
                <p className="text-sm text-primary font-medium mb-1">
                  Consultant at Deloitte
                </p>
                <div className="flex gap-2">
                  <span className="p-1 rounded bg-gray-100 text-gray-600 hover:text-[#0077b5] cursor-pointer transition-colors">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-gray-50 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div className="bg-primary rounded-2xl p-8 md:p-16 text-center text-white mb-16 shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Ready to start your journey?
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Join thousands of students who have successfully transitioned into
              high-paying tech careers.
            </p>
            <button className="bg-white text-primary hover:bg-gray-100 text-lg font-bold py-4 px-10 rounded-lg shadow-lg transition-transform hover:-translate-y-1">
              Join Our Community
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
