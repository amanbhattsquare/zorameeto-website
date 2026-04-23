import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f5f4ec] w-full py-20 px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto items-start">
        <div className="space-y-6">
          <span className="text-lg font-headline text-[#af2b3e] italic font-bold">
            ZoraMeeto 
          </span>
          <p className="text-[#1b1c17] opacity-60 text-sm leading-relaxed">
            Defining the next era of high-end digital connections through
            intentionality and artful design.
          </p>
        </div>
        <div className="space-y-4">
          <h5 className="font-body text-sm tracking-wide uppercase font-bold text-[#af2b3e]">
            Legacy
          </h5>
          <ul className="space-y-3">
            <li>
              <Link className="font-body text-sm tracking-wide uppercase text-[#1b1c17] opacity-60 hover:text-[#af2b3e] underline transition-colors" href="#">Privacy Policy</Link>
            </li>
            <li>
              <Link className="font-body text-sm tracking-wide uppercase text-[#1b1c17] opacity-60 hover:text-[#af2b3e] underline transition-colors" href="#">Terms of Service</Link>
            </li>
            <li>
              <Link className="font-body text-sm tracking-wide uppercase text-[#1b1c17] opacity-60 hover:text-[#af2b3e] underline transition-colors" href="#">Cookie Policy</Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h5 className="font-body text-sm tracking-wide uppercase font-bold text-[#af2b3e]">
            Journal
          </h5>
          <ul className="space-y-3">
            <li>
              <Link className="font-body text-sm tracking-wide uppercase text-[#1b1c17] opacity-60 hover:text-[#af2b3e] underline transition-colors" href="#">Safety Tips</Link>
            </li>
            <li>
              <Link className="font-body text-sm tracking-wide uppercase text-[#1b1c17] opacity-60 hover:text-[#af2b3e] underline transition-colors" href="#">Contact Support</Link>
            </li>
          </ul>
        </div>
        <div className="space-y-6">
          <h5 className="font-body text-sm tracking-wide uppercase font-bold text-[#af2b3e]">
            Newsletter
          </h5>
          <div className="flex flex-col gap-4">
            <input
              className="bg-surface-container-lowest border-none rounded-md px-4 py-3 text-sm focus:ring-1 focus:ring-secondary"
              placeholder="Email Address"
              type="email"
            />
            <button className="bg-[#af2b3e] text-white py-3 rounded-full text-xs font-bold uppercase tracking-widest">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-outline-variant/10">
        <p className="font-body text-sm tracking-wide uppercase text-[#1b1c17] opacity-60 text-center md:text-left">
          © 2024 ZoraMeeto Editorial. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
