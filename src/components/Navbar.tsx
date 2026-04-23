"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Close menu on route change
    setIsMenuOpen(false);
  }, [pathname]);

  const getLinkClass = (path: string) => {
    const isActive = pathname === path;
    if (isActive) {
      return "text-primary border-b border-secondary pb-1 font-label text-sm uppercase tracking-wide font-bold";
    }
    return "text-on-surface opacity-70 hover:opacity-100 hover:text-primary transition-all duration-300 font-label text-sm uppercase tracking-wide";
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/how-it-works", label: "How it Works" },
    { href: "/app-showcase", label: "App Screens" },
    { href: "/love-stories", label: "Love Stories" },
    { href: "/pricing", label: "Pricing" },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl shadow-[0_12px_40px_rgba(27,28,23,0.06)]">
        <div className="flex justify-between items-center w-full px-4 md:px-8 py-3 max-w-screen-2xl mx-auto">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="ZoraMeeto Logo" width={40} height={40} className="w-10 h-10" />
            <span className="text-2xl font-bold tracking-tighter text-primary font-headline italic">
              ZoraMeeto
            </span>
          </Link>
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map(link => (
              <Link key={link.href} className={getLinkClass(link.href)} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden md:block bg-gradient-to-r from-primary to-primary-container text-on-primary px-6 py-2.5 rounded-full font-medium active:scale-95 transition-transform">
              Join Now
            </button>
            <button
              className="md:hidden p-2 rounded-full hover:bg-surface-container transition-colors"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <span className="material-symbols-outlined text-on-surface">menu</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-background/80 backdrop-blur-xl transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-outline-variant/20">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="ZoraMeeto Logo" width={50} height={40} className="w-15 h-15" />
            <span className="text-2xl font-bold tracking-tighter text-primary font-headline italic">
              ZoraMeeto
            </span>
          </Link>
          <button
            className="p-2 rounded-full hover:bg-surface-container transition-colors"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <span className="material-symbols-outlined text-on-surface">close</span>
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-[calc(100%-80px)] gap-8 p-8">
          {navLinks.map(link => (
            <Link key={link.href} className={getLinkClass(link.href) + " text-xl"} href={link.href}>
              {link.label}
            </Link>
          ))}
          <button className="mt-8 bg-gradient-to-r from-primary to-primary-container text-on-primary px-10 py-4 rounded-full font-bold text-lg active:scale-95 transition-transform">
            Join Now
          </button>
        </div>
      </div>
    </>
  );
}