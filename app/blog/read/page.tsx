export default function BlogReadPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-100 py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm">
            <a
              className="text-gray-500 hover:text-primary transition-colors"
              href="#"
            >
              Home
            </a>
            <span className="text-gray-300">/</span>
            <a
              className="text-gray-500 hover:text-primary transition-colors"
              href="#"
            >
              Blog
            </a>
            <span className="text-gray-300">/</span>
            <span className="text-gray-900 font-medium">
              The Future of Business Analysis
            </span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <article className="bg-white py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Category & Date */}
          <div className="flex items-center gap-4 mb-6">
            <span className="px-4 py-1.5 rounded-full text-sm font-bold bg-purple-100 text-accent">
              Industry Trends
            </span>
            <span className="text-sm text-gray-500">
              Published on Oct 24, 2024
            </span>
            <span className="text-sm text-gray-500">• 8 min read</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            The Future of Business Analysis: AI, Data, and Strategic Thinking in
            2025
          </h1>

          {/* Author Info */}
          <div className="flex items-center gap-4 pb-8 border-b border-gray-200">
            <div className="size-14 rounded-full bg-gray-200 overflow-hidden">
              <img
                alt="Eno Eka"
                className="w-full h-full object-cover"
                src="/eno-eka-white.png"
              />
            </div>
            <div className="flex-1">
              <p className="font-bold text-gray-900">Eno Eka</p>
              <p className="text-sm text-gray-600">
                Founder & CEO, Business Analysis School
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="size-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                <span className="material-symbols-outlined text-[18px] text-gray-600">
                  share
                </span>
              </button>
              <button className="size-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                <span className="material-symbols-outlined text-[18px] text-gray-600">
                  bookmark
                </span>
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* Featured Image */}
      <div className="bg-white pb-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              alt="Team analyzing business data on a large screen"
              className="w-full h-auto"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMHnjELQMbxN4RaCJ74GfXaOHWAfJ7AB4sPfCpbsHVWmRzqGNMvMzUgKVCSQVqnxImiUY2QTmiUYWvISVl6VkNmso89f9b1WJKqvi7PtKBum6DWBXOOM_h5KKl1YEFRuCAOEQIJs0bsj8_Gvx8WJtQ5FJPXZxT3dDT9j587bFH4tzBDgZtmqOcEOQmNOcBDei1rLrkCeSbF9ATZq5W0FWCsKXT7UH1Kr40GAZc4wX1cSt8qogwI0QNav1fty5mQ_dbmKeIvgDl70Q"
            />
          </div>
        </div>
      </div>

      {/* Article Content with Sidebar */}
      <div className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
                {/* Article Body */}
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
                    As artificial intelligence reshapes industries, the role of
                    the Business Analyst is evolving from requirements gathering
                    to strategic consulting. Here&apos;s what you need to know
                    to stay ahead of the curve.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                    The Changing Landscape
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The traditional role of a Business Analyst has been centered
                    around gathering requirements, documenting processes, and
                    serving as a bridge between business stakeholders and
                    technical teams. However, the rapid advancement of AI and
                    automation is fundamentally changing what organizations need
                    from their BAs.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Today&apos;s Business Analysts are expected to be strategic
                    thinkers who can not only understand current business
                    processes but also envision how emerging technologies can
                    transform them. This shift requires a new skill set that
                    combines traditional BA competencies with data literacy,
                    strategic thinking, and change management expertise.
                  </p>

                  <div className="bg-blue-50 border-l-4 border-primary p-6 my-8 rounded-r-lg">
                    <p className="text-gray-800 italic">
                      &quot;The most successful Business Analysts in 2025
                      won&apos;t be those who can document requirements the
                      fastest, but those who can identify opportunities for
                      innovation and drive strategic transformation.&quot;
                    </p>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                    Key Skills for the Modern BA
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    To thrive in this evolving landscape, Business Analysts need
                    to develop several critical competencies:
                  </p>

                  <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                    1. Data Analytics and Visualization
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Understanding data is no longer optional. Modern BAs must be
                    comfortable working with tools like Power BI, Tableau, and
                    SQL to extract insights from data. The ability to tell a
                    compelling story with data visualization has become a
                    crucial differentiator.
                  </p>

                  <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                    2. AI and Automation Awareness
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    While you don&apos;t need to be a data scientist,
                    understanding the capabilities and limitations of AI is
                    essential. This includes knowing when to recommend
                    automation, how to identify use cases for machine learning,
                    and understanding the ethical implications of AI
                    implementation.
                  </p>

                  <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                    3. Strategic Thinking
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The ability to think beyond immediate requirements and
                    understand how initiatives align with broader business
                    strategy is increasingly important. This means developing
                    business acumen, understanding market trends, and being able
                    to articulate the ROI of proposed solutions.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                    Practical Steps to Future-Proof Your Career
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Here are actionable steps you can take today to prepare for
                    the future of Business Analysis:
                  </p>

                  <ul className="space-y-3 mb-6 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary mt-0.5">
                        check_circle
                      </span>
                      <span>
                        Invest in data analytics training - start with Excel and
                        SQL, then progress to visualization tools
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary mt-0.5">
                        check_circle
                      </span>
                      <span>
                        Take online courses on AI fundamentals to understand the
                        technology landscape
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary mt-0.5">
                        check_circle
                      </span>
                      <span>
                        Develop your business acumen by reading industry reports
                        and understanding your organization&apos;s strategy
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary mt-0.5">
                        check_circle
                      </span>
                      <span>
                        Practice strategic thinking by proposing innovative
                        solutions, not just documenting requirements
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary mt-0.5">
                        check_circle
                      </span>
                      <span>
                        Build your network and learn from other BAs who are
                        successfully navigating this transition
                      </span>
                    </li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                    The Bottom Line
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The future of Business Analysis is bright for those willing
                    to evolve. While AI will automate many routine tasks, it
                    will also create new opportunities for BAs who can think
                    strategically, work with data, and drive innovation.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The key is to start building these skills now. Don&apos;t
                    wait for your organization to mandate change - take
                    ownership of your professional development and position
                    yourself as a strategic partner who can help your
                    organization navigate the digital transformation journey.
                  </p>
                </div>

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200 transition-colors cursor-pointer">
                      Business Analysis
                    </span>
                    <span className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200 transition-colors cursor-pointer">
                      AI
                    </span>
                    <span className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200 transition-colors cursor-pointer">
                      Career Development
                    </span>
                    <span className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200 transition-colors cursor-pointer">
                      Future of Work
                    </span>
                    <span className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200 transition-colors cursor-pointer">
                      Data Analytics
                    </span>
                  </div>
                </div>

                {/* Share Section */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
                    Share This Article
                  </h3>
                  <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0077b5] text-white hover:bg-[#006399] transition-colors">
                      <span className="font-bold text-sm">LinkedIn</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1DA1F2] text-white hover:bg-[#1a8cd8] transition-colors">
                      <span className="font-bold text-sm">Twitter</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
                      <span className="material-symbols-outlined text-[18px]">
                        link
                      </span>
                      <span className="font-bold text-sm">Copy Link</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Author Bio */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mt-8">
                <h3 className="text-lg font-bold text-gray-900 mb-6">
                  About the Author
                </h3>
                <div className="flex gap-6">
                  <div className="size-20 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                    <img
                      alt="Eno Eka"
                      className="w-full h-full object-cover"
                      src="/eno-eka-white.png"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-2">Eno Eka</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Eno is the Founder & CEO of Business Analysis School and
                      an award-winning Business Analyst with over 10 years of
                      experience. She has been recognized by Forbes and TEDx for
                      her contributions to education and technology. Her mission
                      is to help 100,000 people gain financial freedom through
                      tech careers.
                    </p>
                    <a
                      className="text-sm font-bold text-primary hover:underline flex items-center gap-1"
                      href="#"
                    >
                      View all posts by Eno{" "}
                      <span className="material-symbols-outlined text-sm">
                        arrow_forward
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              {/* Table of Contents */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-24 mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Table of Contents
                </h3>
                <nav className="space-y-3">
                  <a
                    className="block text-sm text-gray-600 hover:text-primary transition-colors"
                    href="#changing-landscape"
                  >
                    The Changing Landscape
                  </a>
                  <a
                    className="block text-sm text-gray-600 hover:text-primary transition-colors"
                    href="#key-skills"
                  >
                    Key Skills for the Modern BA
                  </a>
                  <a
                    className="block text-sm text-gray-600 hover:text-primary transition-colors pl-4"
                    href="#data-analytics"
                  >
                    • Data Analytics and Visualization
                  </a>
                  <a
                    className="block text-sm text-gray-600 hover:text-primary transition-colors pl-4"
                    href="#ai-awareness"
                  >
                    • AI and Automation Awareness
                  </a>
                  <a
                    className="block text-sm text-gray-600 hover:text-primary transition-colors pl-4"
                    href="#strategic-thinking"
                  >
                    • Strategic Thinking
                  </a>
                  <a
                    className="block text-sm text-gray-600 hover:text-primary transition-colors"
                    href="#practical-steps"
                  >
                    Practical Steps to Future-Proof Your Career
                  </a>
                  <a
                    className="block text-sm text-gray-600 hover:text-primary transition-colors"
                    href="#bottom-line"
                  >
                    The Bottom Line
                  </a>
                </nav>
              </div>

              {/* CTA Box */}
              <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-6 text-white shadow-lg mb-8">
                <h3 className="text-xl font-bold mb-3">
                  Ready to Level Up Your BA Career?
                </h3>
                <p className="text-sm text-blue-100 mb-6">
                  Join our comprehensive IIBA certification program and master
                  the skills employers are looking for.
                </p>
                <button className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-3 rounded-lg transition-colors shadow-md">
                  Explore Programs
                </button>
              </div>

              {/* Newsletter */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Get Weekly Insights
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Join 15,000+ professionals getting career tips delivered to
                  their inbox.
                </p>
                <input
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm mb-3 focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="Enter your email"
                  type="email"
                />
                <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-2.5 rounded-lg transition-colors text-sm">
                  Subscribe
                </button>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Related Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Related Article 1 */}
            <article className="flex flex-col bg-background-off rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <img
                  alt="Students studying together"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqoSgSkJTBagDIfts2PlUcyV4qFjcUYDAcRB58UlZaxsFbXFu9ngGSlNAjNITmeoSV15sHcgEqE8U11RZj2PQ6WGaX9LowZwLr97GP-SLXSdPXCGwzUZ8h5x9tF2mZx-DRgSsmq8zeo2yvpRlKQFEgS9obmdp2IfUqNEtq_v_07O4mg2i8VFyKegx1ZjDUI9_s7A9NvhIOb62oFbh0TAdBd8nyyF_wyjZf-c2qLpBSg45LtbDqqpALvKQFnmJZuzQhWaIuTSlFgj4"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs font-bold text-accent mb-2">
                  IIBA Prep
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  How to Pass the ECBA Exam on Your First Try
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  A step-by-step study guide breaking down the BABOK guide and
                  key knowledge areas.
                </p>
                <div className="mt-auto flex items-center justify-between text-xs text-gray-500">
                  <span>5 min read</span>
                  <a
                    className="text-primary font-bold hover:underline"
                    href="#"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </article>

            {/* Related Article 2 */}
            <article className="flex flex-col bg-background-off rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <img
                  alt="Person working on laptop"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-UdekfpKt0vMdAYsc9LjafpryJPabb7g9KtUdVi1Wl6RFnyrYN3dHUNvMEVUlayulBLowjzu01MBwjc53bgYaE-2C3W7fqzY9xSsblrtZsfPENMVHlSPu_vDppn5Ge4dXGDNbVAEhfOz3k6daB1vx4rBENCEl1ef3uBo1VeHbK54WbOzNFfOU5XBWWLmz2nBxSnlMLtbHq9fZsHSQY9GttpaXUCRg5zYsFfPZPRfzWrRl4UXks7UB3JFegM5UfrLR9a6MBY09UyE"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs font-bold text-accent mb-2">
                  Career Tips
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  5 Non-Tech Roles That Transition Easily to BA
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  Discover how your transferable skills give you a unique
                  advantage in Business Analysis.
                </p>
                <div className="mt-auto flex items-center justify-between text-xs text-gray-500">
                  <span>6 min read</span>
                  <a
                    className="text-primary font-bold hover:underline"
                    href="#"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </article>

            {/* Related Article 3 */}
            <article className="flex flex-col bg-background-off rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <img
                  alt="Graph on tablet"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMbLuMUduU0r1bm09bC1BRaBBo_MezdDU2yorKoi-FE4L12BTpvfwGrbZgdY7jYQNsGGDRwWW3KnUm6DS1FLTr6S77zdA8VPBpQWhdwkXS4KMiL-5gzjQ3LFQhCm-pM7Hv_65a3nwsWdPVXAiuaiqfd30vyroYqpmGonxxUizPfd5V_oKCpgUOSXi3yvBe3UMAcrLsWBLNSjoUxUIwO0oIbhxYPjVaD0bi4Zrk7fd0rkurbQjB0Wz5nxXiIwWFB7XCScgB3hY6_s8"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs font-bold text-accent mb-2">
                  Industry Trends
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  Agile vs. Waterfall: What Modern BAs Need to Know
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  Understanding the methodologies that drive software
                  development today.
                </p>
                <div className="mt-auto flex items-center justify-between text-xs text-gray-500">
                  <span>7 min read</span>
                  <a
                    className="text-primary font-bold hover:underline"
                    href="#"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
