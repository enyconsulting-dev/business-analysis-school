import Link from "next/link";

export default function Header() {
  return (
    <>
      {/* Announcement Banner */}
      <div className="w-full bg-blue-50 border-b border-primary/10">
        <p className="text-primary text-sm font-medium leading-normal py-2 px-4 text-center">
          Announcement:{" "}
          <span className="font-bold">Land your 6 Figure Job in 2025</span>
        </p>
      </div>

      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full bg-white border-b border-[#e9ebf2] shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 text-primary hover:opacity-90 transition-opacity"
            >
              <div className="flex items-center justify-center size-8 rounded bg-primary text-white">
                <span className="material-symbols-outlined text-xl">
                  school
                </span>
              </div>
              <h2 className="text-lg font-bold tracking-tight text-primary">
                BA School
              </h2>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <div className="relative group">
                <Link
                  href="/program"
                  className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-primary"
                >
                  Programs
                  <span className="material-symbols-outlined text-[18px]">
                    expand_more
                  </span>
                </Link>
              </div>
              <Link
                className="text-sm font-medium text-gray-700 hover:text-primary"
                href="#"
              >
                Success Stories
              </Link>
              <Link
                className="text-sm font-medium text-gray-700 hover:text-primary"
                href="/blog"
              >
                Blog
              </Link>
              <Link
                className="text-sm font-medium text-gray-700 hover:text-primary"
                href="/about"
              >
                About
              </Link>
              <Link className="text-sm font-bold text-primary" href="/program">
                IIBA Certification
              </Link>
            </nav>

            {/* Auth & CTA */}
            <div className="flex items-center gap-4">
              <Link
                className="hidden sm:block text-sm font-medium text-gray-700 hover:text-primary"
                href="#"
              >
                Login
              </Link>
              <Link
                href="/contact"
                className="flex cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-accent hover:bg-accent-hover transition-colors text-white text-sm font-bold leading-normal tracking-wide shadow-md"
              >
                Get Started Free
              </Link>
              {/* Mobile Menu Button */}
              <button className="md:hidden p-2 text-gray-600 dark:text-gray-300">
                <span className="material-symbols-outlined">menu</span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
