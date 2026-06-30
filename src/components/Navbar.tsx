"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolledVal = height > 0 ? (winScroll / height) * 100 : 0;
      document.getElementById("nav-progress")?.style.setProperty("width", scrolledVal + "%");
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    const closeAtDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setIsMenuOpen(false);
    };
    const desktopQuery = window.matchMedia("(min-width: 1280px)");

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    window.addEventListener("keydown", closeOnEscape);
    if (typeof desktopQuery.addEventListener === "function") {
      desktopQuery.addEventListener("change", closeAtDesktop);
    } else {
      desktopQuery.addListener(closeAtDesktop);
    }

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
      if (typeof desktopQuery.removeEventListener === "function") {
        desktopQuery.removeEventListener("change", closeAtDesktop);
      } else {
        desktopQuery.removeListener(closeAtDesktop);
      }
    };
  }, [isMenuOpen]);

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
    { href: "/about-us", label: "About Us" },
    { href: "/app-showcase", label: "Showcase" },
    { href: "/love-stories", label: "The Zora Journal" },
    { href: "/earn-and-grow", label: "Earn & Grow" },
    { href: "/contact-us", label: "Contact" },
    // { href: "/how-it-works", label: "Process" },
    // { href: "/pricing", label: "Membership" },
  ];  

  return (
    <>
      <div id="nav-progress" aria-hidden="true" className="fixed top-0 left-0 h-0.5 bg-primary z-[60] transition-all duration-300" style={{ width: '0%' }}></div>
      <nav 
        aria-label="Primary navigation"
        style={{ paddingTop: scrolled ? "max(0.5rem, env(safe-area-inset-top))" : "max(0.75rem, env(safe-area-inset-top))" }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? "bg-white/90 backdrop-blur-xl py-2 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
            : "bg-white/70 backdrop-blur-md py-3 sm:bg-transparent sm:backdrop-blur-none sm:py-4"
        }`}
      >
        <div className="flex min-h-12 justify-between items-center w-full px-4 sm:px-6 lg:px-10 max-w-screen-2xl mx-auto">
          <Link href="/" className="flex items-center group" aria-label="ZoraMeeto home">
            <Image
              src="/Logo.png" 
              alt="ZoraMeeto" 
              width={1936}
              height={470}
              priority
              sizes="(min-width: 640px) 180px, 150px"
              className="h-9 sm:h-11 lg:h-12 w-auto object-contain transition-transform duration-500 hover:scale-105"
            />
          </Link>
          
          <div className="hidden xl:flex gap-6 2xl:gap-9 items-center">
            {navLinks.map(link => (
              <Link key={link.href} className={getLinkClass(link.href)} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <button
              className="flex h-11 w-11 items-center justify-center rounded-xl text-text-main transition-colors hover:bg-surface-soft xl:hidden"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
              aria-controls="mobile-navigation"
              aria-expanded={isMenuOpen}
            >
              <span className="material-symbols-outlined text-3xl">menu</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-navigation"
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen}
        className={`fixed inset-0 z-[100] flex h-screen h-[100dvh] flex-col overflow-y-auto overscroll-contain bg-white transition-all duration-500 ease-in-out xl:hidden ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex min-h-20 shrink-0 justify-between items-center px-4 pb-3 pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-6">
          <Link href="/" className="inline-block" aria-label="ZoraMeeto home">
            <Image src="/Logo.png" alt="ZoraMeeto" width={1936} height={470} className="h-9 sm:h-10 w-auto object-contain" />
          </Link>
          <button
            ref={closeButtonRef}
            className="flex h-11 w-11 items-center justify-center rounded-xl text-text-main transition-colors hover:bg-surface-soft"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>
        </div>
        <div className="mobile-menu-links mx-auto grid w-full max-w-2xl flex-1 grid-cols-1 content-center items-center gap-1 px-6 py-4 text-center sm:gap-3 sm:px-10">
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
          <Link
            href="/app-showcase"
            onClick={() => setIsMenuOpen(false)}
            className={`mx-auto mt-3 inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-primary px-8 py-3 text-base font-bold text-white shadow-xl shadow-primary/20 transition-all duration-500 sm:mt-5 sm:px-12 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: `${navLinks.length * 50}ms` }}
          >
            Join ZoraMeeto
          </Link>
        </div>
      </div>
    </>
  );
}
