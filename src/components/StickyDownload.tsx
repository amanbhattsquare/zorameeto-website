"use client";

import { useEffect, useState } from "react";
import { GooglePlayLogo } from "@/components/StoreLogos";

export default function StickyDownload() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 200px
      setIsVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-[max(1rem,env(safe-area-inset-bottom))] left-1/2 z-[80] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 transition-all duration-700 ease-in-out sm:bottom-8 sm:w-auto ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20 pointer-events-none"
      }`}
    >
      <a 
        href="#" 
        className="flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-text-main/90 px-4 py-3 text-white shadow-[0_30px_60px_rgba(0,0,0,0.4)] backdrop-blur-2xl transition-all duration-500 group hover:bg-primary sm:w-auto sm:gap-5 sm:rounded-[1.5rem] sm:px-8 sm:py-4 sm:hover:scale-105"
      >
        <div className="flex items-center gap-3">
          <GooglePlayLogo className="h-8 w-8 shrink-0" />
          <div className="text-left">
            <p className="text-[7px] font-bold uppercase tracking-[0.2em] text-white/50 leading-none mb-1">Get it on</p>
            <p className="text-sm font-bold leading-none tracking-tight">PlayStore</p>
          </div>
        </div>
        
        <div className="h-8 w-px bg-white/10"></div>
        
        <div className="flex items-center gap-3">
          <span className="whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.18em] sm:text-[10px] sm:tracking-[0.3em]">Download App</span>
          <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </div>
      </a>
    </div>
  );
}
