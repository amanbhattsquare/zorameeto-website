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
    const baseClass =
      "relative inline-flex h-10 items-center rounded-full px-3.5 text-[11px] font-extrabold uppercase tracking-[0.16em] transition-all duration-300";

    if (isActive) {
      return `${baseClass} bg-text-main text-white shadow-sm`;
    }

    return `${baseClass} text-text-muted hover:bg-surface-soft hover:text-text-main`;
  };

  const getMobileLinkClass = (path: string, isOpen: boolean) => {
    const activeClass = isActivePath(path) ? "text-primary" : "text-text-main hover:text-primary";
    const motionClass = isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0";
    return `group flex min-h-14 items-center justify-between rounded-2xl border border-border bg-white px-5 text-left text-xl font-extrabold tracking-tight shadow-sm transition-all duration-300 hover:border-primary/30 hover:bg-surface-soft ${activeClass} ${motionClass}`;
  };

  const navLinks = [
    { href: "/", label: "Home", icon: "home" },
    { href: "/features", label: "Features", icon: "auto_awesome" },
    { href: "/about-us", label: "About Us", icon: "groups" },
    { href: "/app-showcase", label: "Showcase", icon: "phone_iphone" },
    { href: "/love-stories", label: "The Zora Journal", icon: "article" },
    { href: "/earn-and-grow", label: "Earn & Grow", icon: "trending_up" },
    { href: "/contact-us", label: "Contact", icon: "mail" },
    // { href: "/how-it-works", label: "Process" },
    // { href: "/pricing", label: "Membership" },
  ];  

  return (
    <>
      <div id="nav-progress" aria-hidden="true" className="fixed top-0 left-0 h-0.5 bg-primary z-[60] transition-all duration-300" style={{ width: '0%' }}></div>
      <nav 
        aria-label="Primary navigation"
        style={{ paddingTop: scrolled ? "max(0.5rem, env(safe-area-inset-top))" : "max(0.9rem, env(safe-area-inset-top))" }}
        className={`fixed top-0 z-50 w-full px-3 transition-all duration-500 sm:px-5 lg:px-8 ${
          scrolled 
            ? "py-2"
            : "py-3"
        }`}
      >
        <div
          className={`mx-auto flex min-h-[4.25rem] w-full max-w-7xl items-center justify-between rounded-2xl border px-3.5 transition-all duration-500 sm:px-5 ${
            scrolled
              ? "border-border bg-white/[0.92] shadow-[0_18px_50px_rgba(17,24,39,0.08)] backdrop-blur-2xl"
              : "border-white/80 bg-white/[0.82] shadow-[0_16px_45px_rgba(17,24,39,0.06)] backdrop-blur-xl"
          }`}
        >
          <Link href="/" className="group flex min-w-0 items-center" aria-label="ZoraMeeto home">
            <Image
              src="/zorameeto-Logo.png" 
              alt="ZoraMeeto" 
              width={1936}
              height={470}
              priority
              sizes="(min-width: 640px) 180px, 150px"
              className="h-9 w-auto object-contain transition-transform duration-500 group-hover:scale-[1.03] sm:h-10 lg:h-11"
            />
          </Link>
          
          <div className="hidden items-center gap-1 rounded-full border border-border bg-white/75 p-1 shadow-inner xl:flex">
            {navLinks.map(link => (
              <Link key={link.href} className={getLinkClass(link.href)} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/app-showcase"
              className="hidden min-h-11 items-center gap-2 rounded-full bg-gradient-primary px-5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/25 sm:inline-flex"
            >
              Get the App
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                arrow_forward
              </span>
            </Link>
            <button
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-text-main shadow-sm transition-colors hover:bg-surface-soft xl:hidden"
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
        className={`fixed inset-0 z-[100] flex h-screen h-[100dvh] flex-col overflow-y-auto overscroll-contain bg-gradient-mesh transition-all duration-500 ease-in-out xl:hidden ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex min-h-20 shrink-0 items-center justify-between px-4 pb-3 pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-6">
          <Link href="/" className="inline-block" aria-label="ZoraMeeto home" onClick={() => setIsMenuOpen(false)}>
            <Image src="/zorameeto-Logo.png" alt="ZoraMeeto" width={1936} height={470} className="h-9 sm:h-10 w-auto object-contain" />
          </Link>
          <button
            ref={closeButtonRef}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-text-main shadow-sm transition-colors hover:bg-surface-soft"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>
        </div>
        <div className="mx-auto w-full max-w-2xl px-6 pt-4 sm:px-10">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-text-muted">
            Navigation
          </p>
        </div>
        <div className="mobile-menu-links mx-auto grid w-full max-w-2xl flex-1 grid-cols-1 content-center items-center gap-3 px-6 py-4 sm:px-10">
          {navLinks.map((link, i) => (
            <Link 
              key={link.href} 
              className={getMobileLinkClass(link.href, isMenuOpen)}
              style={{ transitionDelay: `${i * 50}ms` }}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="flex min-w-0 items-center gap-3">
                <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
                  {link.icon}
                </span>
                <span>{link.label}</span>
              </span>
              <span className="material-symbols-outlined text-[20px] text-text-muted transition-transform group-hover:translate-x-1" aria-hidden="true">
                arrow_forward
              </span>
            </Link>
          ))}
          <Link
            href="/app-showcase"
            onClick={() => setIsMenuOpen(false)}
            className={`mt-2 inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-3 text-sm font-extrabold uppercase tracking-[0.16em] text-white shadow-xl shadow-primary/20 transition-all duration-500 sm:mt-4 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: `${navLinks.length * 50}ms` }}
          >
            Get the App
            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
              arrow_forward
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
