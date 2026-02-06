"use client";

import { useState } from "react";

export default function ProgramPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* Hero Section */}
      <div className="layout-container flex grow flex-col">
        <div className="mx-auto flex w-full max-w-[1280px] justify-center py-5">
          <div className="flex flex-col w-full px-6 lg:px-10">
            <div className="@container">
              <div className="flex flex-col gap-10 py-10 lg:flex-row lg:items-center lg:gap-16">
                <div className="flex flex-col gap-6 lg:w-1/2 lg:py-10">
                  <div className="flex flex-col gap-4 text-left">
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary w-fit">
                      <span className="material-symbols-outlined text-sm">
                        verified
                      </span>
                      IIBA Endorsed Education Provider
                    </div>
                    <h1 className="text-text-light text-4xl font-black leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                      Achieve Global Recognition with IIBA Certification
                    </h1>
                    <h2 className="text-[#556591] text-lg font-normal leading-relaxed">
                      The gold standard for Business Analysts. Master the BABOK
                      guide v3 and accelerate your career from ECBA entry-level
                      to CBAP leadership.
                    </h2>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-primary hover:bg-primary/90 text-white text-base font-bold shadow-lg shadow-primary/20 transition-all transform hover:translate-y-[-1px]">
                      <span className="truncate">Enroll Now</span>
                    </button>
                    <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-transparent border border-[#d2d7e5] text-text-light hover:bg-background-light text-base font-bold transition-colors">
                      <span className="truncate">Download Syllabus</span>
                    </button>
                  </div>
                  <div className="flex items-center gap-2 pt-2 text-sm text-[#556591]">
                    <div className="flex -space-x-2">
                      <div
                        className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 bg-center bg-cover"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAXejyfyROn1Cdf6HuuDuvvRgvlU30_20osGYj-14z4pT3jIIMAKu4BBBkl_yH8sphYdy5FqXI9VxL_siJIqI1Y4zi5IosIykFXgqqv4NxgkB_S_GSFh_BhGuMb08erBh0zCJRU6bdrjAxHD7Wr-KqagttYjmfQibuboKFGjzYgKnKeSkbG4cBOvLQfbvk2ytkqt8_fni7Lkqcx1ssXKZDMVgxAR8sew4A2DcnVO7fli_slBZ_6WShLwBEW-EkTfu3hQn5kdsVL1JU")',
                        }}
                      ></div>
                      <div
                        className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 bg-center bg-cover"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAgBBRBD9PHDMehkkquL1O--JKno31XqQVy4w5-Jl5_fapSWLduSmG0N2APfjPnit8RzBI7nbJk2KGNbaoyNA5bFzpTc7a2KA02oa1VX38ZciOrFeGH21eSAjN-ky9v5kd45rAMrYXHFWLea3o-vM6h0MH0NG8t-Ca1DdKSolZFLrgEomJyGPwcDuYu--fJPxORt5qraB0c0jSeykWnp8oakMINqSaTg1nL0Eu8YUE7toa8qxVTWWC4TL7dO6hCT9_q8F9p2DSc_5s")',
                        }}
                      ></div>
                      <div
                        className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 bg-center bg-cover"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCYcB6asHrRLRSZJD12feFYCD93hy2NLSjWo4qXUa_gGpP8NsuBz0Z_2SBWYcaRf9xHo0cQiByA9wWtwm9vLOha5PZcrlKWWGZ4FbTUuURHo-PLVo1P67m3V3nigH1QaUf3-hBqEhs7EHK8ot9QhcG8yL2ZzUK_guM_NhMYXxq0tVeuHfQmHaSf3DQyfc6oopDM1UQNjUrOs378aEy5wvsD0zc6sLYF6IKL4tMwC_lWozxwY0Ra3nTQMgp4vo_A9N6YjIdQ2mIjuHw")',
                        }}
                      ></div>
                    </div>
                    <span>Trusted by 5,000+ analysts worldwide</span>
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div
                    className="relative w-full aspect-[4/3] rounded-2xl bg-gray-100 overflow-hidden shadow-2xl"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCKO9q4CtuLl_p9HuJrl_dmKCTsrQ7xszoyCKALhMEUNrzZJtietbuX9NY9Qm3abHDHwCfr1xIskhr-KWovnYjJK7JvHnz-JjL0aNIlq3Ko5rdAg6EGRStZu_QVYKatWfnlPUt3I55bi_MywT0n5VPMpMvu1y4YCIUvP-owoeUkSz3cJQp9BTN1QEF7QRDQLgeBBvjCKXrrNj_Dp8DIJ5sXXv94oZui8QzTHR15OsUSs-IRf8nMPERfmd-khtgB92a8vgZSwMwcECY")',
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                      <div className="text-white">
                        <p className="font-bold text-lg">
                          Invest in your future
                        </p>
                        <p className="text-sm opacity-90">
                          Join the elite group of certified professionals
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Roadmap Header */}
      <div className="layout-container flex flex-col">
        <div className="mx-auto flex w-full max-w-[1280px] justify-center">
          <div className="flex flex-col w-full px-6 lg:px-10 pb-4 pt-10">
            <h2 className="text-text-light text-2xl md:text-3xl font-bold leading-tight px-4 pb-2">
              Your Certification Roadmap
            </h2>
            <p className="text-[#556591] px-4 max-w-2xl">
              Visualizing your journey from entry-level understanding to senior
              professional leadership within the IIBA framework.
            </p>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="layout-container flex flex-col">
        <div className="mx-auto flex w-full max-w-[1280px] justify-center py-5">
          <div className="flex flex-col w-full px-6 lg:px-10">
            <div className="grid grid-cols-[40px_1fr] gap-x-6 px-4">
              {/* Step 1 - ECBA */}
              <div className="flex flex-col items-center gap-1 pt-3">
                <div className="flex items-center justify-center size-10 rounded-full bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-[24px]">
                    school
                  </span>
                </div>
                <div className="w-[2px] bg-[#d2d7e5] h-full min-h-[80px] grow"></div>
              </div>
              <div className="flex flex-1 flex-col py-3 pb-10">
                <div className="rounded-xl border border-[#d2d7e5] bg-white p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-text-light text-lg font-bold">
                      ECBA (Entry Certificate in Business Analysis)
                    </h3>
                    <span className="hidden sm:inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                      Entry Level
                    </span>
                  </div>
                  <p className="text-[#556591] text-sm mb-4">
                    Perfect for those new to the field. Focuses on foundational
                    knowledge of business analysis according to the BABOK®
                    Guide.
                  </p>
                  <ul className="text-sm space-y-2 text-[#556591]">
                    <li className="flex gap-2 items-center">
                      <span className="material-symbols-outlined text-base text-primary">
                        check_circle
                      </span>{" "}
                      No experience required
                    </li>
                    <li className="flex gap-2 items-center">
                      <span className="material-symbols-outlined text-base text-primary">
                        check_circle
                      </span>{" "}
                      21 Professional Development (PD) hours needed
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 2 - CCBA */}
              <div className="flex flex-col items-center gap-1">
                <div className="w-[2px] bg-[#d2d7e5] h-2"></div>
                <div className="flex items-center justify-center size-10 rounded-full bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-[24px]">
                    workspace_premium
                  </span>
                </div>
                <div className="w-[2px] bg-[#d2d7e5] h-full min-h-[80px] grow"></div>
              </div>
              <div className="flex flex-1 flex-col py-3 pb-10">
                <div className="rounded-xl border border-[#d2d7e5] bg-white p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-text-light text-lg font-bold">
                      CCBA (Certification of Capability in Business Analysis)
                    </h3>
                    <span className="hidden sm:inline-block px-3 py-1 bg-blue-100  text-blue-700 text-xs font-bold rounded-full">
                      Mid-Level
                    </span>
                  </div>
                  <p className="text-[#556591] text-sm mb-4">
                    For professionals with extensive BA experience. Demonstrates
                    your ability to take on larger and more complex project
                    responsibilities.
                  </p>
                  <ul className="text-sm space-y-2 text-[#556591]">
                    <li className="flex gap-2 items-center">
                      <span className="material-symbols-outlined text-base text-primary">
                        check_circle
                      </span>{" "}
                      Minimum 3,750 hours of BA work experience
                    </li>
                    <li className="flex gap-2 items-center">
                      <span className="material-symbols-outlined text-base text-primary">
                        check_circle
                      </span>{" "}
                      21 Professional Development (PD) hours needed
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 3 - CBAP */}
              <div className="flex flex-col items-center gap-1 pb-3">
                <div className="w-[2px] bg-[#d2d7e5] h-2"></div>
                <div className="flex items-center justify-center size-10 rounded-full bg-primary text-white shadow-lg shadow-primary/30">
                  <span className="material-symbols-outlined text-[24px]">
                    stars
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col py-3">
                <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-primary text-lg font-bold">
                      CBAP (Certified Business Analysis Professional)
                    </h3>
                    <span className="hidden sm:inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded-full">
                      Senior Level
                    </span>
                  </div>
                  <p className="text-text-light text-sm mb-4 font-medium">
                    The most prestigious certification for senior business
                    analysts. Validates your extensive experience and leadership
                    skills.
                  </p>
                  <ul className="text-sm space-y-2 text-[#556591]">
                    <li className="flex gap-2 items-center">
                      <span className="material-symbols-outlined text-base text-primary">
                        check_circle
                      </span>{" "}
                      Minimum 7,500 hours of BA work experience
                    </li>
                    <li className="flex gap-2 items-center">
                      <span className="material-symbols-outlined text-base text-primary">
                        check_circle
                      </span>{" "}
                      35 Professional Development (PD) hours needed
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="layout-container flex flex-col bg-white mt-10 border-y border-[#e9ebf2]">
        <div className="mx-auto flex w-full max-w-[1280px] justify-center py-5">
          <div className="flex flex-col w-full px-6 lg:px-10">
            <div className="flex flex-col gap-10 py-16 @container">
              <div className="flex flex-col gap-4 text-center items-center">
                <h2 className="text-text-light text-3xl font-bold leading-tight max-w-[720px]">
                  Comprehensive Course Details
                </h2>
                <p className="text-[#556591] text-base font-normal leading-normal max-w-[720px]">
                  Everything you need to pass your exam on the first attempt,
                  fully aligned with industry standards.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-1 gap-4 rounded-xl border border-[#d2d7e5] bg-background-light p-6 flex-col hover:border-primary/50 transition-colors group">
                  <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[28px]">
                      menu_book
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-text-light text-lg font-bold leading-tight">
                      100% BABOK v3 Alignment
                    </h3>
                    <p className="text-[#556591] text-sm font-normal leading-relaxed">
                      Our curriculum strictly follows the BABOK Guide v3
                      chapters and knowledge areas for maximum relevance and
                      exam success.
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 gap-4 rounded-xl border border-[#d2d7e5] bg-background-light p-6 flex-col hover:border-primary/50 transition-colors group">
                  <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[28px]">
                      laptop_mac
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-text-light text-lg font-bold leading-tight">
                      1000+ Exam Simulations
                    </h3>
                    <p className="text-[#556591] text-sm font-normal leading-relaxed">
                      Access to a vast bank of practice questions and realistic
                      exam simulators that mimic the actual test environment.
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 gap-4 rounded-xl border border-[#d2d7e5] bg-background-light p-6 flex-col hover:border-primary/50 transition-colors group">
                  <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[28px]">
                      groups
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-text-light text-lg font-bold leading-tight">
                      Live Weekend Workshops
                    </h3>
                    <p className="text-[#556591] text-sm font-normal leading-relaxed">
                      Join weekly live sessions with expert instructors to
                      clarify complex topics, discuss case studies, and network.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="layout-container flex flex-col">
        <div className="mx-auto flex w-full max-w-[1280px] justify-center py-5">
          <div className="flex flex-col w-full px-6 lg:px-10 py-16">
            <h2 className="text-text-light text-2xl font-bold leading-tight mb-8">
              Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Testimonial 1 */}
              <div className="bg-white p-6 rounded-xl border border-[#e9ebf2] shadow-sm flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className="size-12 rounded-full bg-cover bg-center"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB2_I-LSvNhoXVN00nf3lMdnVolE3AbbvwUQpD5djEsmRiDtoDOzDiPU_B3B0kqy8HHH4LxChni-qD8YCahVbDR_uAUaKtO6h-IATtOKlr7UcAicvn1EWbExqeaBV1uLD8vdZCJESEsfJV2ZE3vgg3qI3TVtWHEy86pzmgp8DKRpbMRSeY-rmPdMIfI98jlrBnRFUrDHHlc7QwZH1ObnG0nw-i7Fa-oxPrqzbyNTZfjoTUPDbOXSOQxrnih2_mFfO5VBCqmEyxDstg")',
                    }}
                  ></div>
                  <div>
                    <p className="text-text-light font-bold text-sm">
                      Sarah Jenkins
                    </p>
                    <p className="text-primary text-xs font-medium">
                      CBAP Certified
                    </p>
                  </div>
                </div>
                <p className="text-[#556591] text-sm italic">
                  &quot;I passed my CBAP on the first try thanks to the
                  simulation exams. The questions were incredibly similar to the
                  real thing.&quot;
                </p>
                <div className="flex text-yellow-400 text-sm">
                  <span className="material-symbols-outlined text-lg">
                    star
                  </span>
                  <span className="material-symbols-outlined text-lg">
                    star
                  </span>
                  <span className="material-symbols-outlined text-lg">
                    star
                  </span>
                  <span className="material-symbols-outlined text-lg">
                    star
                  </span>
                  <span className="material-symbols-outlined text-lg">
                    star
                  </span>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white p-6 rounded-xl border border-[#e9ebf2] shadow-sm flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className="size-12 rounded-full bg-cover bg-center"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCsdXMRnt4qWbGJvg_0K1CnAWGWMpTZHeK4s_RIyTeQeWQE7NDmwO1glvXMSbeHK-2FaGWbIcROG_2FYcNpZjWDub6s88gYainacIutfxPhHD5OCtoSpTvpmRwiZrAfICR3bSeUFt3xo1QqFHdWNxWKx_yo4Ssnfc_b0UHJ4EkwnzxHktpEmko80G2gMOaCHUbgz4LEnrWH8cPyZqX2ZfIJxDcKfix1lwUL6vhNVYGHgyFZulm-xjYpIgduQnwYAFbfDOR5RC9QBhs")',
                    }}
                  ></div>
                  <div>
                    <p className="text-text-light font-bold text-sm">
                      Michael Ross
                    </p>
                    <p className="text-primary text-xs font-medium">
                      CCBA Certified
                    </p>
                  </div>
                </div>
                <p className="text-[#556591] text-sm italic">
                  &quot;The live workshops made the difference. Understanding
                  the &apos;why&apos; behind the BABOK concepts helped me ace
                  the interview for my new Senior BA role.&quot;
                </p>
                <div className="flex text-yellow-400 text-sm">
                  <span className="material-symbols-outlined text-lg">
                    star
                  </span>
                  <span className="material-symbols-outlined text-lg">
                    star
                  </span>
                  <span className="material-symbols-outlined text-lg">
                    star
                  </span>
                  <span className="material-symbols-outlined text-lg">
                    star
                  </span>
                  <span className="material-symbols-outlined text-lg">
                    star
                  </span>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white p-6 rounded-xl border border-[#e9ebf2] shadow-sm flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className="size-12 rounded-full bg-cover bg-center"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAA6iR3d0i8yDO0gm_dFjbiETH6vSf4nBmHU6beOyx8M27wGrCr06Ya48BX0XtjbI8f-3Nij-9OSOG3xVyuauuePIDq4ZGfUNscRG0G4cXhBou9cgt1KDEXFMxIOjqtcKc26r1NqasZtSE1LFNBo2TolUGiWbXnlB2dkZ789_v_ECKMuTagwYy8K0E2ANcHpU8L_LUuKC77bi8XC2fUW_KY0SiCDJ1mF8Sp_wwCmvk8ZxL3nGhz4uyhfLofQEOkE4Eu9yxb5TnxMQQ")',
                    }}
                  ></div>
                  <div>
                    <p className="text-text-light font-bold text-sm">
                      Emily Chen
                    </p>
                    <p className="text-primary text-xs font-medium">
                      ECBA Certified
                    </p>
                  </div>
                </div>
                <p className="text-[#556591] text-sm italic">
                  &quot;As a fresh graduate, the ECBA roadmap gave me direction.
                  This course broke down complex business analysis terms into
                  simple language.&quot;
                </p>
                <div className="flex text-yellow-400 text-sm">
                  <span className="material-symbols-outlined text-lg">
                    star
                  </span>
                  <span className="material-symbols-outlined text-lg">
                    star
                  </span>
                  <span className="material-symbols-outlined text-lg">
                    star
                  </span>
                  <span className="material-symbols-outlined text-lg">
                    star
                  </span>
                  <span className="material-symbols-outlined text-lg">
                    star_half
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="layout-container flex flex-col mb-10">
        <div className="mx-auto flex w-full max-w-[1280px] justify-center py-5">
          <div className="flex flex-col w-full px-6 lg:px-10">
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="lg:w-1/3">
                <h2 className="text-text-light text-3xl font-bold leading-tight mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-[#556591]">
                  Can&apos;t find the answer you&apos;re looking for? Contact
                  our support team.
                </p>
                <button className="mt-6 text-primary font-bold hover:underline">
                  Contact Support
                </button>
              </div>
              <div className="lg:w-2/3 flex flex-col gap-4">
                {/* FAQ 1 */}
                <details
                  className="group rounded-lg bg-white border border-[#e9ebf2] p-4"
                  open={openFaq === 0}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenFaq(openFaq === 0 ? null : 0);
                  }}
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-text-light list-none">
                    <h3 className="font-bold">
                      What are the eligibility requirements for CBAP?
                    </h3>
                    <span
                      className={`material-symbols-outlined transition duration-300 ${
                        openFaq === 0 ? "rotate-180" : ""
                      }`}
                    >
                      expand_more
                    </span>
                  </summary>
                  <p className="mt-4 leading-relaxed text-[#556591] text-sm">
                    To sit for the CBAP exam, you need a minimum of 7,500 hours
                    of Business Analysis Work Experience in the last 10 years.
                    Within this experience, a minimum of 900 hours completed in
                    each of 4 of the 6 BABOK® Guide Knowledge Areas. You also
                    need 35 hours of Professional Development in the last 4
                    years.
                  </p>
                </details>

                {/* FAQ 2 */}
                <details
                  className="group rounded-lg bg-white border border-[#e9ebf2] p-4"
                  open={openFaq === 1}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenFaq(openFaq === 1 ? null : 1);
                  }}
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-text-light list-none">
                    <h3 className="font-bold">
                      Is the exam fee included in the course price?
                    </h3>
                    <span
                      className={`material-symbols-outlined transition duration-300 ${
                        openFaq === 1 ? "rotate-180" : ""
                      }`}
                    >
                      expand_more
                    </span>
                  </summary>
                  <p className="mt-4 leading-relaxed text-[#556591] text-sm">
                    No, the exam fee is paid directly to IIBA. Our course fees
                    cover the training, study materials, simulation exams, and
                    certificate of completion for Professional Development (PD)
                    hours required to apply for the exam.
                  </p>
                </details>

                {/* FAQ 3 */}
                <details
                  className="group rounded-lg bg-white border border-[#e9ebf2] p-4"
                  open={openFaq === 2}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenFaq(openFaq === 2 ? null : 2);
                  }}
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-text-light list-none">
                    <h3 className="font-bold">
                      How long do I have access to the course materials?
                    </h3>
                    <span
                      className={`material-symbols-outlined transition duration-300 ${
                        openFaq === 2 ? "rotate-180" : ""
                      }`}
                    >
                      expand_more
                    </span>
                  </summary>
                  <p className="mt-4 leading-relaxed text-[#556591] text-sm">
                    You will have 12 months of unlimited access to the learning
                    management system, including all video recordings, practice
                    exams, and downloadable resources.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="layout-container flex flex-col mb-20">
        <div className="mx-auto flex w-full max-w-[1280px] justify-center px-6 lg:px-10">
          <div className="w-full bg-primary rounded-2xl p-10 md:p-16 text-center text-white relative overflow-hidden">
            {/* Abstract Background Pattern */}
            <div
              className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(#ffffff 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            ></div>
            <div className="relative z-10 flex flex-col items-center gap-6">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight">
                Ready to Advance Your Career?
              </h2>
              <p className="text-white/80 max-w-xl text-lg">
                Join thousands of business analysts who have successfully
                certified with our program.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                <button className="flex w-full sm:w-auto min-w-[200px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-white text-primary text-base font-bold shadow-lg hover:bg-gray-100 transition-colors">
                  Enroll in Certification Prep
                </button>
              </div>
              <p className="text-xs text-white/60 mt-2">
                100% Money-back guarantee within 14 days.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Bar for Mobile/Tablet */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-[#e9ebf2] p-4 md:hidden z-40 shadow-xl">
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-xs text-[#556591]">
              Starting at
            </span>
            <span className="text-lg font-bold text-text-light">
              $499
            </span>
          </div>
          <button className="flex flex-1 cursor-pointer items-center justify-center rounded-lg h-12 bg-primary text-white font-bold shadow-md">
            Enroll Now
          </button>
        </div>
      </div>
    </>
  );
}
