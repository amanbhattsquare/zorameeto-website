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
      className={`fixed bottom-8 right-8 z-[100] w-14 h-14 rounded-2xl bg-primary text-white shadow-2xl shadow-primary/30 border border-white/20 flex items-center justify-center transition-all duration-500 ease-out backdrop-blur-md ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
          : "opacity-0 translate-y-8 scale-75 pointer-events-none"
      } hover:bg-primary-hover hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(255,45,85,0.35)] active:scale-90`}
    >
      <span className="material-symbols-outlined text-2xl">arrow_upward</span>
    </button>
  );
}
