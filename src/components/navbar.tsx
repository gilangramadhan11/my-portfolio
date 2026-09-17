"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Beranda", href: "#home" },
  { name: "Tentang", href: "#about" },
  { name: "Portofolio", href: "#portfolio" },
  { name: "Pendidikan", href: "#education" },
  { name: "Pengalaman", href: "#experience" },
  { name: "Kontak", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-4 py-3 transition-all duration-300 ${
        isScrolled ? "shadow-sm bg-white/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <span className="text-xl font-extrabold text-neutral-800 tracking-tight">
              Gilang<span className="text-indigo-400">Ramadhan</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-neutral-800 hover:text-indigo-400 group transition-all duration-300"
              >
                {link.name}
                <span className="absolute left-4 right-4 -bottom-0.5 h-0.5 bg-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </a>
            ))}
          </div>

          {/* Desktop Call to Action */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="#contact"
              className="relative inline-flex items-center justify-center overflow-hidden text-sm font-medium rounded-3xl text-neutral-50 group hover:bg-neutral-700 transition-all duration-300"
            >
              <span className="px-4 py-2 transition-all ease-in duration-75 bg-neutral-950/80 group-hover:bg-transparent">
                Let's talk 👋
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="md:hidden p-2 rounded-lg text-neutral-100 bg-neutral-700 hover:text-white hover:bg-neutral-800 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 p-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-neutral-100 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2.5 text-sm font-medium text-neutral-800 hover:text-indigo-500 hover:bg-neutral-50 rounded-xl transition-all"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block text-center mt-4 px-4 py-2.5 text-sm font-medium rounded-2xl text-white bg-neutral-900 hover:bg-neutral-800 transition-all"
            >
              Let's talk 👋
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}