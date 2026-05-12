"use client";

import { useEffect, useState } from "react";

export default function EditorialSeal() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setRotation(window.scrollY * 0.2);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className="fixed bottom-12 left-12 z-40 hidden xl:block pointer-events-none"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div className="relative w-32 h-32 flex items-center justify-center">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <path id="circlePath" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
          </defs>
          <text className="text-[7px] font-bold uppercase tracking-[0.2em] fill-primary/30">
            <textPath href="#circlePath">
              • CURATED FOR RESONANCE • SELECTIVE ADMISSION • VETTED COLLECTIVE • 
            </textPath>
          </text>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="material-symbols-outlined text-primary/20 text-2xl font-bold">verified</span>
        </div>
      </div>
    </div>
  );
}
