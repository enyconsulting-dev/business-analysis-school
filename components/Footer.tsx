export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 text-white mb-6">
              <div className="flex items-center justify-center size-8 rounded bg-primary text-white">
                <span className="material-symbols-outlined text-xl">
                  school
                </span>
              </div>
              <h2 className="text-xl font-bold">Business Analysis School</h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              The leading EdTech platform for non-tech professionals pivoting
              into Business Analysis and Scrum.
            </p>
            <div className="flex gap-4">
              <a
                className="size-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-white"
                href="#"
              >
                <span className="font-bold text-xs">LI</span>
              </a>
              <a
                className="size-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-white"
                href="#"
              >
                <span className="font-bold text-xs">IG</span>
              </a>
              <a
                className="size-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-white"
                href="#"
              >
                <span className="font-bold text-xs">YT</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Programs</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Coaching Program
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Self-Paced Courses
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  IIBA Certification
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Scrum Certification
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Success Stories
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Blog
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-xs text-gray-500 mb-4">
              Get the latest career tips and industry news.
            </p>
            <div className="flex flex-col gap-3">
              <input
                className="bg-gray-800 border-none rounded px-4 py-2 text-sm text-white focus:ring-2 focus:ring-primary w-full"
                placeholder="Enter your email"
                type="email"
              />
              <button className="bg-primary text-white text-sm font-bold py-2 rounded hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2025 Business Analysis School. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="hover:text-white" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-white" href="#">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
