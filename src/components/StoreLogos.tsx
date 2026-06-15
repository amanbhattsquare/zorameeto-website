import type { SVGProps } from "react";

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
