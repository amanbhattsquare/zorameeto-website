"use client";

import { useEffect, useState } from "react";

export default function LuxuryReveal() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[10000] bg-background flex items-center justify-center animate-fade-out">
      <div className="flex flex-col items-center gap-6 animate-fade-up">
        <div className="relative w-20 h-20 overflow-hidden rounded-full border border-border bg-white flex items-center justify-center animate-pulse">
          <span className="material-symbols-outlined text-primary font-bold text-4xl">all_inclusive</span>
        </div>
        <span className="text-2xl font-headline tracking-tighter text-text-main animate-pulse">
          Zora<span className="text-primary italic font-light">Meeto.</span>
        </span>
      </div>
    </div>
  );
}
