"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolledVal = (winScroll / height) * 100;
      document.getElementById("nav-progress")?.style.setProperty("width", scrolledVal + "%");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const normalizePath = (path: string) => {
    if (path === "/") return path;
    return path.replace(/\/$/, "");
  };

  const isActivePath = (path: string) => {
    const currentPath = normalizePath(pathname);
    const targetPath = normalizePath(path);

    if (targetPath === "/") {
      return currentPath === "/";
    }

    return currentPath === targetPath || currentPath.startsWith(`${targetPath}/`);
  };

  const getLinkClass = (path: string) => {
    const isActive = isActivePath(path);
    if (isActive) {
      return "text-primary font-bold text-[10px] uppercase tracking-[0.2em] border-b-2 border-primary pb-1";
    }
    return "text-text-main/60 hover:text-text-main transition-all duration-300 font-bold text-[10px] uppercase tracking-[0.2em]";
  };

  const getMobileLinkClass = (path: string, isOpen: boolean) => {
    const activeClass = isActivePath(path) ? "text-primary" : "text-text-main hover:text-primary";
    const motionClass = isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0";
    return `text-2xl font-bold tracking-tight transition-all duration-300 ${activeClass} ${motionClass}`;
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
      <div id="nav-progress" className="fixed top-0 left-0 h-0.5 bg-primary z-[60] transition-all duration-300" style={{ width: '0%' }}></div>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? "bg-white/80 backdrop-blur-xl py-2 shadow-[0_8px_30px_rgb(0,0,0,0.04)]" 
            : "bg-transparent py-4"
        }`}
      >
        <div className="flex justify-between items-center w-full px-6 md:px-12 max-w-screen-2xl mx-auto">
          <Link href="/" className="flex items-center group">
            <img 
              src="/Logo.png" 
              alt="ZoraMeeto" 
              className="h-12 md:h-14 w-auto object-contain transition-transform duration-500 hover:scale-105" 
            />
          </Link>
          
          <div className="hidden lg:flex gap-7 xl:gap-10 items-center">
            {navLinks.map(link => (
              <Link key={link.href} className={getLinkClass(link.href)} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-6">
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
          <Link href="/" className="inline-block">
            <img src="/Logo.png" alt="Logo" className="h-10 w-auto object-contain" />
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
              className={getMobileLinkClass(link.href, isMenuOpen)}
              style={{ transitionDelay: `${i * 50}ms` }}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <button className={`mt-8 bg-gradient-primary text-white px-12 py-4 rounded-full font-bold text-lg shadow-xl shadow-primary/20 transition-all duration-500 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: `${navLinks.length * 50}ms` }}>
            Join ZoraMeeto
          </button>
        </div>
      </div>
    </>
  );
}
