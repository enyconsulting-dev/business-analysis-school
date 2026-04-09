export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  location: string; 
  result: string;   
  photo?: string;   
  flag: string;    
  isVideo: boolean;
  programType: 'accelerator' | 'certification' | 'corporate' | 'course';
  careerStage: 'beginner' | 'career-changer' | 'experienced';
  programCompleted: string;
  country: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "In 6 months, I went from accountant to business analyst earning $95,000. Coach Eno’s program changed the entire trajectory of my career and my family’s future.",
    author: "Tunde A.",
    location: "Nigeria → Canada",
    result: "$95K Starting Salary",
    flag: "🇨🇦",
    isVideo: true,
    programType: 'accelerator',
    careerStage: 'career-changer',
    programCompleted: "AI Accelerator - Tier 2",
    country: "Canada"
  },
  {
    id: 2,
    quote: "I had zero tech experience. I was a teacher for 12 years. After the Accelerator program, I landed a BA role at a Fortune 500 company within 60 days.",
    author: "Sarah J.",
    location: "United States",
    result: "Fortune 500 Placement",
    flag: "🇺🇸",
    isVideo: true,
    programType: 'accelerator',
    careerStage: 'career-changer',
    programCompleted: "AI Accelerator - Tier 1",
    country: "USA"
  },
  {
    id: 3,
    quote: "The certification prep was incredible. I passed my CBAP on the first attempt. The coaching and the mocks — everything was designed for success.",
    author: "David L.",
    location: "United Kingdom",
    result: "CBAP Certified — First Attempt",
    flag: "🇬🇧",
    isVideo: false,
    programType: 'certification',
    careerStage: 'experienced',
    programCompleted: "CBAP Certification Prep",
    country: "UK"
  },
  {
    id: 4,
    quote: "Eno Eka is a dedicated coach. The continuous support and guidance she gives propelled me to achieve great success in my BA career.",
    author: "Chioma O.",
    location: "Lagos, Nigeria",
    result: "Career Acceleration",
    flag: "🇳🇬",
    isVideo: false,
    programType: 'accelerator',
    careerStage: 'beginner',
    programCompleted: "AI Accelerator - Tier 1",
    country: "Nigeria"
  },
  {
    id: 5,
    quote: "The AI Consultant tier changed everything. I now run my own consulting practice billing $150 per hour. The setup support was worth 10x.",
    author: "Michael R.",
    location: "Atlanta, USA",
    result: "$150/hr Consulting Rate",
    flag: "🇺🇸",
    isVideo: true,
    programType: 'accelerator',
    careerStage: 'experienced',
    programCompleted: "AI Accelerator - Tier 3",
    country: "USA"
  },
  {
    id: 6,
    quote: "As an immigrant with no local experience, I thought it would take years. Within 60 days of completing the program, I had a six-figure offer.",
    author: "Olumide B.",
    location: "Nigeria → Toronto",
    result: "Six-Figure Offer",
    flag: "🇨🇦",
    isVideo: true,
    programType: 'accelerator',
    careerStage: 'career-changer',
    programCompleted: "AI Accelerator - Tier 2",
    country: "Canada"
  },
  {
    id: 7,
    quote: "I was stuck in accounting for 8 years. The Accelerator showed me how to repackage my experience. Landed a BA role within 45 days.",
    author: "Fatima S.",
    location: "Lagos → UK (Remote)",
    result: "300% Income Increase",
    flag: "🇬🇧",
    isVideo: false,
    programType: 'accelerator',
    careerStage: 'career-changer',
    programCompleted: "AI Accelerator - Tier 2",
    country: "UK"
  },
  {
    id: 8,
    quote: "I enrolled my entire team. The ROI has been incredible. Our BA team's output has improved by 40% since completing the program.",
    author: "Corporate Client",
    location: "Fortune 500, USA",
    result: "40% Productivity Gain",
    flag: "🇺🇸",
    isVideo: false,
    programType: 'corporate',
    careerStage: 'experienced',
    programCompleted: "Corporate Training Program",
    country: "USA"
  },
  {
    id: 9,
    quote: "The community is incredible. I've made connections that led to referrals and collaborations across the globe.",
    author: "Hannah W.",
    location: "London, UK",
    result: "Global Network Access",
    flag: "🇬🇧",
    isVideo: false,
    programType: 'accelerator',
    careerStage: 'beginner',
    programCompleted: "AI Accelerator - Tier 1",
    country: "UK"
  },
  {
    id: 10,
    quote: "Transitioned from customer service. My income increased by 5x within just 4 months of joining the school.",
    author: "Blessing I.",
    location: "Lagos, Nigeria",
    result: "500% Income Hike",
    flag: "🇳🇬",
    isVideo: false,
    programType: 'accelerator',
    careerStage: 'career-changer',
    programCompleted: "AI Accelerator - Tier 1",
    country: "Nigeria"
  },
  {
    id: 11,
    quote: "Confidently handled multiple offers. The salary negotiation training payed for the program in the first week.",
    author: "Ahmed M.",
    location: "Dubai, UAE",
    result: "Multiple Tech Offers",
    flag: "🇦🇪",
    isVideo: false,
    programType: 'accelerator',
    careerStage: 'career-changer',
    programCompleted: "AI Accelerator - Tier 2",
    country: "UAE"
  },
  {
    id: 12,
    quote: "Passed CBAP on the first try and got promoted within 3 months. Everything was designed for success.",
    author: "Karen P.",
    location: "Calgary, Canada",
    result: "CBAP + Promotion",
    flag: "🇨🇦",
    isVideo: false,
    programType: 'certification',
    careerStage: 'experienced',
    programCompleted: "CBAP Certification Prep",
    country: "Canada"
  },
  // New Testimonials to reach 20
  {
    id: 13,
    quote: "From nursing to Business Analysis. The school gave me a roadmap when I felt completely lost in my career transition.",
    author: "Grace F.",
    location: "USA",
    result: "$110K Junior BA Role",
    flag: "🇺🇸",
    isVideo: true,
    programType: 'accelerator',
    careerStage: 'career-changer',
    programCompleted: "AI Accelerator - Tier 1",
    country: "USA"
  },
  {
    id: 14,
    quote: "The SCUM Master prep was so detailed. Passed the SPOC and SMC exams back-to-back with 95% scores.",
    author: "James K.",
    location: "Nairobi, Kenya",
    result: "Dual Scrum Certified",
    flag: "🇰🇪",
    isVideo: false,
    programType: 'certification',
    careerStage: 'beginner',
    programCompleted: "Scrum Master Certification",
    country: "Kenya"
  },
  {
    id: 15,
    quote: "Eno's mentorship is the gold standard. I went from struggling to get interviews to having 3 firms bidding for me.",
    author: "Yemi R.",
    location: "Toronto, Canada",
    result: "3 Offers in 30 Days",
    flag: "🇨🇦",
    isVideo: true,
    programType: 'accelerator',
    careerStage: 'career-changer',
    programCompleted: "AI Accelerator - Tier 2",
    country: "Canada"
  },
  {
    id: 16,
    quote: "Our government agency needed a modernization of BA practices. BA School's corporate training was exactly what we needed.",
    author: "Gov Agency Lead",
    location: "Ontario, Canada",
    result: "Certified Gov BA Team",
    flag: "🇨🇦",
    isVideo: false,
    programType: 'corporate',
    careerStage: 'experienced',
    programCompleted: "Custom Corporate Training",
    country: "Canada"
  },
  {
    id: 17,
    quote: "The On-Demand courses are perfect for busy parents. I studied at my own pace and landed my first role in 5 months.",
    author: "Aisha T.",
    location: "Lagos, Nigeria",
    result: "Successful Pivot",
    flag: "🇳🇬",
    isVideo: false,
    programType: 'course',
    careerStage: 'career-changer',
    programCompleted: "BA Foundations On-Demand",
    country: "Nigeria"
  },
  {
    id: 18,
    quote: "Passed ECBA with zero prior experience. The mocks were almost identical to the real exam logic.",
    author: "Tom D.",
    location: "Sydney, Australia",
    result: "ECBA Certified",
    flag: "🇦🇺",
    isVideo: false,
    programType: 'certification',
    careerStage: 'beginner',
    programCompleted: "ECBA Certification Prep",
    country: "Australia"
  },
  {
    id: 19,
    quote: "The AI integration modules are the most current in the industry. I taught my senior lead how to automate workflows.",
    author: "Sam B.",
    location: "United States",
    result: "Promoted to AI Lead",
    flag: "🇺🇸",
    isVideo: true,
    programType: 'accelerator',
    careerStage: 'experienced',
    programCompleted: "AI Accelerator - Tier 2",
    country: "USA"
  },
  {
    id: 20,
    quote: "Within 2 weeks of the resume rewrite, my LinkedIn impressions jumped 500% and Recuiters started DMing me.",
    author: "Vivian C.",
    location: "United Kingdom",
    result: "High-Visibility Resume",
    flag: "🇬🇧",
    isVideo: false,
    programType: 'course',
    careerStage: 'career-changer',
    programCompleted: "Career Starter Kit",
    country: "UK"
  }
];
