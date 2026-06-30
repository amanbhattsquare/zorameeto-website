import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms-and-conditions' },
    { label: 'Cookies', href: '/privacy-policy#5-cookies-and-similar-technologies' },
  ];

  const experienceLinks = [
    { label: 'About Zora', href: '/about-us' },
    { label: 'App Features', href: '/features' },
    { label: 'Success Stories', href: '/love-stories' },
    { label: 'How It Works', href: '/how-it-works' },
  ];

  const supportLinks = [
    { label: 'Safety Center', href: '/contact-us' },
    { label: 'Help Desk', href: '/contact-us' },
    { label: 'Community', href: '/love-stories' },
    { label: 'Contact Us', href: '/contact-us' },
  ];

  const socialIcons = [
    { 
      name: 'Facebook', 
      href: '#', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
        </svg>
      ) 
    },
    { 
      name: 'Instagram', 
      href: '#', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ) 
    },
    { 
      name: 'X', 
      href: '#', 
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.134l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ) 
    }
  ];

  return (
    <footer className="relative overflow-hidden border-t border-border bg-background px-5 pb-[max(2rem,env(safe-area-inset-bottom))] pt-16 sm:px-6 md:px-10 lg:pt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-10 min-[380px]:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12 xl:gap-16 mb-14 lg:mb-16">
          
          {/* Brand Section */}
          <div className="space-y-8 min-[380px]:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block group">
              <Image
                src="/Logo.png" 
                alt="ZoraMeeto" 
                width={1936}
                height={470}
                sizes="180px"
                className="h-10 md:h-11 w-auto object-contain transition-transform duration-500 hover:scale-105"
              />
            </Link>
            <p className="text-text-muted text-base leading-relaxed max-w-xs font-medium">
              A safe dating app for serious singles. Meet verified people and build real connections.
            </p>
            <div className="flex gap-4 pt-2">
              {socialIcons.map((social) => (
                <Link 
                  key={social.name}
                  href={social.href} 
                  aria-label={social.name}
                  className="w-11 h-11 rounded-xl bg-surface-soft border border-border flex items-center justify-center text-text-muted hover:bg-primary hover:text-white hover:border-primary transition-all duration-500"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6 sm:space-y-10">
            <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] text-text-main">
              Experience
            </h5>
            <ul className="space-y-5">
              {experienceLinks.map((item) => (
                <li key={item.label}>
                  <Link className="text-[10px] uppercase tracking-[0.2em] font-bold text-text-muted hover:text-primary transition-colors" href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6 sm:space-y-10">
            <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] text-text-main">
              Support
            </h5>
            <ul className="space-y-5">
              {supportLinks.map((item) => (
                <li key={item.label}>
                  <Link className="text-[10px] uppercase tracking-[0.2em] font-bold text-text-muted hover:text-primary transition-colors" href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-8 min-[380px]:col-span-2 lg:col-span-1">
            <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] text-text-main">
              Newsletter
            </h5>
            <p className="text-sm text-text-muted font-medium leading-relaxed">
              Join for dating tips, app updates, and member events.
            </p>
            <div className="flex flex-col gap-3">
              <input
                className="w-full bg-surface-soft border border-border rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-primary transition-all placeholder:text-text-muted/40"
                placeholder="Enter your email"
                type="email"
                inputMode="email"
                autoComplete="email"
                aria-label="Email address"
              />
              <button type="button" className="min-h-12 bg-primary text-white py-3 rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-primary-hover transition-all duration-500">
                Join Now
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col lg:flex-row justify-between items-center gap-6 text-center lg:text-left">
          {/* Copyright - Left Side */}
          <div className="order-2 lg:order-1">
            <p className="text-[10px] text-text-muted tracking-wide">
              © {new Date().getFullYear()} ZoraMeeto. All rights reserved.
            </p>
          </div>
          
          {/* Legal Links - Center */}
          <div className="order-1 lg:order-2 flex flex-wrap justify-center gap-x-6 sm:gap-x-10 gap-y-4">
            {legalLinks.map((item) => (
              <Link key={item.label} className="text-[10px] text-text-muted hover:text-primary transition-colors uppercase tracking-[0.2em] font-bold" href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
          
          {/* Team/Company Credits - Right Side */}
          <div className="order-3">
            <p className="text-[10px] text-text-muted tracking-wide">
              Crafted with ❤️ by the <span className="font-semibold">ZoraMeeto Team</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
