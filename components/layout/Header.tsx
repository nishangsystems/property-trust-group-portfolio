"use client";

import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Leadership", to: "leadership" },
    { name: "Property Trust Group", to: "ptg" },
    { name: "Global Presence", to: "global" },
    { name: "Foundations", to: "philanthropy" },
    { name: "Gallery", to: "gallery" },
    { name: "Contact", to: "contact" },
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="p-4 border-b">
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 shadow-[0_4px_40px_rgba(212,175,55,0.12)] backdrop-blur-xl" style={{
        backgroundColor: "var(--background)",
      }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
          <a
            href="#home"
            className="flex flex-col leading-none group text-center"
            onClick={handleLinkClick}
          >
            <span className="tracking-[0.25em] text-xs uppercase font-raleway text-primary-400">
              Hon.
            </span>

            <span className="tracking-[0.08em] text-lg font-semibold font-cinzel text-neutral-950 uppercase">
              Boris Nkemateh
            </span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={`#${link.to}`}
                  className="text-center text-xs cursor-pointer tracking-[0.15em] uppercase transition-colors duration-200 hover:text-primary-400 text-primary-100 font-semibold font-raleway"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">

            <button
              onClick={() => setDarkMode((prev) => !prev)}
              className="cursor-pointer w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 border-[rgba(212,175,55,0.3)] text-[#D4AF37] hover:bg-[rgba(212,175,55,0.1)]"
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden cursor-pointer w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 border-[rgba(212,175,55,0.3)] text-[#D4AF37] hover:bg-[rgba(212,175,55,0.1)]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          backgroundColor: "var(--background)",
          top: "80px", // Height of the header
        }}
      >
        {/* Mobile Menu Content */}
        <div
          className={`h-full overflow-y-auto transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col items-center justify-start pt-8 px-6 space-y-6">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={`#${link.to}`}
                onClick={handleLinkClick}
                className="text-sm cursor-pointer tracking-[0.15em] uppercase transition-colors duration-200 hover:text-primary-400 text-primary-100 font-semibold font-raleway py-2 border-b border-[rgba(212,175,55,0.1)] w-full"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}