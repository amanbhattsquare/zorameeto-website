"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const getLinkClass = (path: string) => {
    const isActive = pathname === path;
    if (isActive) {
      return "relative text-primary font-bold text-sm uppercase tracking-wider after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full";
    }
    return "text-text-main/70 hover:text-primary transition-all duration-300 font-medium text-sm uppercase tracking-wider";
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/how-it-works", label: "Process" },
    { href: "/app-showcase", label: "Showcase" },
    { href: "/love-stories", label: "Stories" },
    { href: "/pricing", label: "Membership" },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? "bg-white/80 backdrop-blur-xl py-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)]" 
            : "bg-transparent py-5"
        }`}
      >
        <div className="flex justify-between items-center w-full px-6 md:px-12 max-w-screen-2xl mx-auto">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-xl bg-gradient-primary p-0.5 group-hover:rotate-6 transition-transform duration-300">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                <span className="material-symbols-outlined text-primary font-bold">favorite</span>
              </div>
            </div>
            <span className="text-2xl font-bold tracking-tighter text-text-main font-headline italic">
              Zora<span className="text-primary">Meeto</span>
            </span>
          </Link>
          
          <div className="hidden lg:flex gap-10 items-center">
            {navLinks.map(link => (
              <Link key={link.href} className={getLinkClass(link.href)} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <Link 
              href="/login" 
              className="hidden sm:block text-sm font-bold uppercase tracking-wider text-text-main hover:text-primary transition-colors"
            >
              Log In
            </Link>
            <button className="bg-gradient-primary text-white px-8 py-3 rounded-full font-bold text-sm uppercase tracking-widest shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 active:scale-95 transition-all duration-300">
              Join Now
            </button>
            <button
              className="lg:hidden p-2 text-text-main"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <span className="material-symbols-outlined text-3xl">menu</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-white transition-all duration-500 ease-in-out ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex justify-between items-center p-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tighter text-text-main font-headline italic">
              Zora<span className="text-primary">Meeto</span>
            </span>
          </Link>
          <button
            className="p-2 text-text-main"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-[70vh] gap-8 p-8">
          {navLinks.map((link, i) => (
            <Link 
              key={link.href} 
              className={`text-2xl font-bold tracking-tight text-text-main hover:text-primary transition-all duration-300 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${i * 50}ms` }}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
          <button className={`mt-8 bg-gradient-primary text-white px-12 py-4 rounded-full font-bold text-lg shadow-xl shadow-primary/20 transition-all duration-500 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '350ms' }}>
            Join ZoraMeeto
          </button>
        </div>
      </div>
    </>
  );
}