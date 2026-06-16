import type { SVGProps } from "react";

function AppleMark({ className = "h-7 w-7", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 384 512"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-89-61.7-91.9zM262.1 104.5c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
      />
    </svg>
  );
}

export function AppStoreLogo({ className = "h-8 w-8", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 256 256"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id="app-store-logo-gradient" x1="128" y1="0" x2="128" y2="256">
          <stop offset="0" stopColor="#16d5f7" />
          <stop offset="0.5" stopColor="#19aee2" />
          <stop offset="1" stopColor="#3241a1" />
        </linearGradient>
      </defs>
      <rect width="256" height="256" rx="45" fill="url(#app-store-logo-gradient)" />
      <circle cx="128" cy="128" r="93" fill="none" stroke="#fff" strokeWidth="17" />
      <path
        d="M73 137h110"
        stroke="#fff"
        strokeWidth="17"
        strokeLinecap="square"
      />
      <path
        d="M80 184l52-90"
        stroke="#fff"
        strokeWidth="18"
        strokeLinecap="round"
      />
      <path
        d="M124 73l59 103"
        stroke="#fff"
        strokeWidth="18"
        strokeLinecap="round"
      />
      <path d="M72 183l-8 31 22-23z" fill="#fff" />
      <path d="M185 176c14 8 21 23 16 39-18-8-24-20-22-35z" fill="#fff" />
    </svg>
  );
}

type StoreBadgeProps = {
  href?: string;
  className?: string;
};

const storeBadgeBase =
  "inline-flex h-[47px] w-[144px] shrink-0 items-center rounded-[7px] border border-[#a6a6a6] bg-black text-white shadow-sm transition-transform duration-300 hover:scale-[1.03] hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black";

export function AppStoreBadge({ href = "#", className = "" }: StoreBadgeProps) {
  return (
    <a href={href} aria-label="Download on the App Store" className={`${storeBadgeBase} gap-2 px-3 ${className}`}>
      <AppleMark className="h-7 w-7 text-white" />
      <span className="flex flex-col text-left leading-none">
        <span className="mb-0.5 text-[8px] font-medium tracking-normal text-white">Download on the</span>
        <span className="text-[18px] font-semibold tracking-normal text-white">App Store</span>
      </span>
    </a>
  );
}

export function GooglePlayBadge({ href = "#", className = "" }: StoreBadgeProps) {
  return (
    <a href={href} aria-label="Get it on Google Play" className={`${storeBadgeBase} gap-2.5 px-3 ${className}`}>
      <GooglePlayLogo className="h-7 w-7 shrink-0" />
      <span className="flex flex-col text-left leading-none">
        <span className="mb-0.5 text-[8px] font-medium uppercase tracking-normal text-white">Get it on</span>
        <span className="text-[17px] font-semibold tracking-normal text-white">Play Store</span>
      </span>
    </a>
  );
}

export function GooglePlayLogo({ className = "h-8 w-8", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 256 256"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M35 24c-6 4-10 11-10 20v168c0 9 4 16 10 20l106-104z"
        fill="#15c8f2"
      />
      <path
        d="M35 24c4-3 10-3 16 1l124 70-34 33z"
        fill="#05e06f"
      />
      <path
        d="M141 128l34 33-124 70c-6 4-12 4-16 1z"
        fill="#ff3157"
      />
      <path
        d="M175 95l42 24c16 9 16 27 0 36l-42 24-34-51z"
        fill="#ffd21f"
      />
    </svg>
  );
}
