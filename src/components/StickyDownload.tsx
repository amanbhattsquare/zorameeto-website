"use client";

import { useEffect, useState } from "react";

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
          <svg viewBox="0 0 24 24" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
            <path d="M3,20.5V3.5C3,2.9,3.3,2.5,3.7,2.2l12.4,12.4l-3,3l-9.4,9.4C3.3,21.5,3,21.1,3,20.5z" fill="#00df9a"/>
            <path d="M23.3,12.5l-3.3-1.9l-3.3,3.3 l3.3,3.3l3.3-1.9C23.8,15.1,24,14.6,24,14S23.8,12.9,23.3,12.5z" fill="#ffcf00"/>
            <path d="M4.7,2.2l12.4,12.4l3.3-3.3L5.4,1.4C5.1,1.1,4.7,1.3,4.7,2.2z" fill="#00b0ff"/>
            <path d="M17.1,14.6L4.7,27l0.7,0.8l15.1-8.7L17.1,14.6z" fill="#ff3d00"/>
          </svg>
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
