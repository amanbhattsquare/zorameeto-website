"use client";

import { useEffect, useState } from "react";

export default function GoToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-[90] flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-primary text-white shadow-2xl shadow-primary/30 transition-all duration-500 ease-out backdrop-blur-md sm:bottom-6 sm:right-6 sm:h-14 sm:w-14 sm:rounded-2xl lg:bottom-8 lg:right-8 ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
          : "opacity-0 translate-y-8 scale-75 pointer-events-none"
      } hover:bg-primary-hover hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(255,45,85,0.35)] active:scale-90`}
    >
      <span className="material-symbols-outlined text-2xl">arrow_upward</span>
    </button>
  );
}
