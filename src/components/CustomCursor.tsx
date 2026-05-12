"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("button, a")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 w-6 h-6 bg-[#FF2D55] rounded-full pointer-events-none z-[10001] mix-blend-difference transition-transform duration-200 ease-out shadow-[0_0_20px_rgba(255,45,85,0.5)]"
      style={{
        transform: `translate(${position.x - 12}px, ${position.y - 12}px) scale(${isHovering ? 2 : 1})`,
        opacity: position.x === 0 ? 0 : 1
      }}
    />
  );
}
