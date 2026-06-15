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
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] transition-all duration-700 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20 pointer-events-none"
      }`}
    >
      <a 
        href="#" 
        className="flex items-center gap-5 bg-text-main/90 backdrop-blur-2xl text-white px-8 py-4 rounded-[1.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.4)] hover:bg-primary hover:scale-105 transition-all duration-500 group border border-white/10"
      >
        <div className="flex items-center gap-3">
          <GooglePlayLogo className="h-8 w-8 shrink-0" />
          <div className="text-left">
            <p className="text-[7px] font-bold uppercase tracking-[0.2em] text-white/50 leading-none mb-1">Get it on</p>
            <p className="text-sm font-bold leading-none tracking-tight">Google Play</p>
          </div>
        </div>
        
        <div className="w-[1px] h-8 bg-white/10"></div>
        
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] whitespace-nowrap">Download App</span>
          <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </div>
      </a>
    </div>
  );
}
