import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZoraMeeto | The Exclusive Dating Collective for High-Achievers",
  description: "Meet the elite and date with intention. ZoraMeeto is a precision-engineered dating network for the modern high-achiever.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/10">
      
      {/* 
        ULTRA-COMPACT APP HERO - FINAL IMAGE STABILIZATION 
        - Hard-linked robust image assets
        - 3D Hardware Mockups with perfect hardware definition
        - Optimized for standard laptop folds
      */}
      <section className="relative min-h-[65vh] lg:h-[680px] flex items-center px-6 pt-16 pb-8 overflow-hidden bg-mesh-ultra border-b border-border">
        
        {/* Background Depth Orbs */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -left-24 w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full animate-float-slow"></div>
          <div className="absolute bottom-1/4 -right-24 w-[500px] h-[500px] bg-secondary/5 blur-[140px] rounded-full animate-float-slow" style={{ animationDelay: '-5s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center relative z-10">
          
          {/* Left Column: Authoritative Messaging */}
          <div className="space-y-8 text-center lg:text-left animate-fade-up">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-xl border border-white shadow-lg shadow-black/5 mx-auto lg:mx-0">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-text-main">Admission by Invitation Only</span>
              </div>
              
              <div className="space-y-3">
                <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tighter text-text-main leading-[1.1]">
                  Meet the Elite. <br />
                  <span className="text-primary italic font-light">Date with Intention.</span>
                </h1>
                <p className="text-base text-text-muted max-w-lg mx-auto lg:mx-0 leading-relaxed font-bold glass-card-premium p-5 rounded-2xl border border-white/50 shadow-sm">
                  The world's most sophisticated dating network for high-achievers. Precision matching meets deep human resonance.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 lg:justify-start">
              <button className="luxury-button bg-text-main text-white px-10 py-5 rounded-[1.5rem] font-bold text-xs uppercase tracking-[0.3em] shadow-xl shadow-black/10 hover:scale-105 transition-all duration-700">
                Request Access
              </button>
              
              <div className="flex flex-col items-center lg:items-start gap-1.5">
                <div className="flex -space-x-2.5">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden shadow-md">
                      <img src={`https://i.pravatar.cc/100?u=zora-elite-final-${i}`} alt="Member" />
                    </div>
                  ))}
                </div>
                <p className="text-[7px] font-bold uppercase tracking-[0.2em] text-text-muted">2.4k+ Vetted members</p>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Mockups - BOTH IMAGES STABILIZED */}
          <div className="relative h-[450px] md:h-[600px] flex items-center justify-center lg:justify-end animate-fade-up" style={{ animationDelay: '0.4s' }}>
            
            {/* Screen 1: The Profile View */}
            <div className="absolute -left-2 lg:left-0 top-4 w-[200px] md:w-[260px] aspect-[9/19.5] bg-surface rounded-[2.5rem] shadow-[0_40px_80px_rgba(0,0,0,0.15)] border-[8px] border-text-main overflow-hidden rotate-[-8deg] hover:rotate-0 hover:scale-105 transition-all duration-1000 group z-10">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
                alt="Profile Experience"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/95 to-transparent z-30 text-white space-y-1">
                <p className="text-lg font-bold">Sophia, 26</p>
                <p className="text-[7px] font-bold uppercase tracking-widest text-white/60">Creative Director • Mumbai</p>
              </div>
            </div>

            {/* Screen 2: The Matching View - IMAGE STABILIZED WITH ROBUST LINK */}
            <div className="absolute right-0 lg:right-4 bottom-4 w-[200px] md:w-[260px] aspect-[9/19.5] bg-surface rounded-[2.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.2)] border-[8px] border-text-main overflow-hidden rotate-[8deg] hover:rotate-0 hover:scale-105 transition-all duration-1000 group z-20">
              <img 
                src="https://images.pexels.com/photos/1417255/pexels-photo-1417255.jpeg?auto=compress&cs=tinysrgb&w=800" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
                alt="Match Experience"
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/95 to-transparent z-30 text-white space-y-3">
                <div className="flex items-center gap-2 px-3 py-1 bg-primary/30 backdrop-blur-md rounded-full w-fit border border-primary/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                  <span className="text-[7px] font-bold uppercase tracking-widest text-white">98.4% Resonance</span>
                </div>
                <div className="space-y-1">
                  <p className="text-xl font-bold leading-tight">Match Found</p>
                  <p className="text-[8px] font-medium text-white/60">Shared values & aesthetic alignment.</p>
                </div>
                <button className="w-full py-4 bg-white text-text-main rounded-2xl font-bold text-[9px] uppercase tracking-widest shadow-xl hover:bg-primary hover:text-white transition-colors">
                  Initiate Connection
                </button>
              </div>
            </div>

            {/* Decorative Glows */}
            <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-80 h-80 bg-primary/10 blur-[120px] rounded-full z-0"></div>
          </div>
        </div>
      </section>

      {/* Dynamic Network Marquee */}
      <section className="py-8 border-b border-border overflow-hidden bg-white relative z-10">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16 items-center px-8">
              {['New York', 'Mumbai', 'London', 'Dubai', 'Singapore', 'Paris', 'Tokyo', 'Berlin'].map((city) => (
                <div key={city} className="flex items-center gap-4">
                  <span className="w-1 h-1 rounded-full bg-primary/30"></span>
                  <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-text-muted">{city} Collective</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Dynamic Counter Section - Compact */}
      <section className="py-16 px-6 border-b border-border bg-white relative z-10">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-10 text-center md:text-left">
          {[
            { label: "Matches", value: "85%", icon: "favorite" },
            { label: "Vetted", value: "100%", icon: "verified" },
            { label: "Elite", value: "TOP 1%", icon: "payments" },
            { label: "Hubs", value: "40+", icon: "public" }
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-4 group hover-lift mx-auto md:mx-0">
              <div className="w-12 h-12 rounded-xl bg-white border border-border flex items-center justify-center shadow-lg group-hover:bg-primary group-hover:text-white transition-all duration-700">
                <span className="material-symbols-outlined text-xl">{stat.icon}</span>
              </div>
              <div className="space-y-0 text-left">
                <p className="text-2xl font-bold text-text-main tracking-tighter">{stat.value}</p>
                <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-text-muted">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Improved Bento Grid Experience - Compact */}
      <section className="py-24 px-6 bg-surface-soft/20 relative z-10">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
              <span className="text-[9px] font-bold uppercase tracking-[0.3em]">The Architecture</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tighter text-text-main leading-tight">Engineered for <span className="text-primary italic font-light">Resonance.</span></h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:h-[650px]">
            {/* Core Feature: Resonance Engine */}
            <div className="lg:col-span-8 glass-card-premium rounded-[3rem] p-12 flex flex-col justify-between group overflow-hidden bg-white shadow-2xl shadow-black/[0.03] border border-border transition-all duration-700">
              <div className="space-y-8 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl text-primary">analytics</span>
                </div>
                <div className="space-y-4">
                  <h3 className="text-4xl lg:text-6xl font-bold tracking-tighter text-text-main leading-tight">The Precision <br />Matching Engine.</h3>
                  <p className="text-xl text-text-muted max-w-lg font-medium leading-relaxed">
                    Our proprietary behavioral analysis system identifies psychological synergy and lifestyle alignment with 98.4% vetted accuracy.
                  </p>
                </div>
                <div className="pt-4">
                  <Link href="/features" className="luxury-button inline-flex items-center gap-6 px-12 py-5 rounded-2xl bg-text-main text-white font-bold uppercase tracking-widest text-[10px] shadow-2xl group/btn">
                    Explore Technology
                    <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-2 transition-transform">arrow_forward</span>
                  </Link>
                </div>
              </div>
              <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full group-hover:scale-125 transition-transform duration-1000"></div>
            </div>

            {/* Side Features Grid */}
            <div className="lg:col-span-4 grid grid-rows-2 gap-6">
              {/* Incognito Presence */}
              <div className="glass-card-premium rounded-[3rem] p-10 bg-white space-y-8 flex flex-col justify-center relative overflow-hidden group border border-border shadow-2xl shadow-black/[0.02] transition-all duration-700">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center relative z-10 group-hover:bg-primary group-hover:text-white transition-all duration-700">
                  <span className="material-symbols-outlined text-2xl">lock</span>
                </div>
                <div className="space-y-3 relative z-10">
                  <h3 className="text-3xl font-bold tracking-tight text-text-main leading-tight">Private <br />Profiles</h3>
                  <p className="text-text-muted font-medium leading-relaxed text-base">
                    Absolute discretion for high-profile members with military-grade privacy.
                  </p>
                </div>
              </div>

              {/* Elite Concierge */}
              <div className="glass-card-premium rounded-[3rem] p-10 bg-white border border-border space-y-8 flex flex-col justify-center group shadow-2xl shadow-black/[0.02] transition-all duration-700">
                <div className="w-14 h-14 rounded-2xl bg-surface border border-border flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all duration-700">
                  <span className="material-symbols-outlined text-2xl">support_agent</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-3xl font-bold tracking-tight text-text-main leading-tight">Dating <br />Concierge</h3>
                  <p className="text-text-muted font-medium leading-relaxed text-base">
                    Dedicated human support to manage your dating logistics and reservations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Showcase Section - Professional & Industry Ready */}
      <section className="py-24 px-6 bg-white relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-10 animate-fade-up">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
                <span className="text-[9px] font-bold uppercase tracking-[0.3em]">Mobile Experience</span>
              </div>
              <h2 className="text-4xl lg:text-7xl font-extrabold tracking-tighter text-text-main leading-[1.1]">
                The Collective, <br />
                <span className="text-primary italic font-light">in Your Pocket.</span>
              </h2>
              <p className="text-xl text-text-muted max-w-lg font-medium leading-relaxed">
                Experience the precision of ZoraMeeto anywhere. Our mobile ecosystem is designed for the modern high-achiever—seamless, secure, and sophisticated.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* Premium App Store Button */}
              <a href="#" className="flex items-center gap-5 bg-[#111111] text-white px-6 py-3.5 rounded-[1.25rem] hover:bg-black hover:scale-105 transition-all duration-500 shadow-xl group border border-white/5">
                <div className="flex flex-col items-center gap-2">
                   <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
                     <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .76-3.27.82-1.31.05-2.31-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.24-1.99 1.1-3.15-1.03.04-2.28.67-3.02 1.52-.66.76-1.24 1.94-1.1 3.08 1.14.09 2.29-.62 3.02-1.45z"/>
                   </svg>
                   <div className="text-[7px] font-extralight tracking-[0.3em] leading-none text-white/50">APPLE</div>
                </div>
                <div className="w-[1px] h-8 bg-white/10"></div>
                <div className="text-left">
                  <p className="text-[7px] font-bold uppercase tracking-[0.2em] text-white/40 leading-none mb-1">Download on the</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-base font-bold tracking-tight">App Store</span>
                  </div>
                </div>
              </a>
              
              {/* Premium Play Store Button */}
              <a href="#" className="flex items-center gap-5 bg-white border border-border text-text-main px-6 py-3.5 rounded-[1.25rem] hover:border-text-main hover:scale-105 transition-all duration-500 shadow-xl group">
                <div className="flex flex-col items-center gap-2">
                   <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                     <path d="M3,20.5V3.5C3,2.9,3.3,2.5,3.7,2.2l12.4,12.4l-3,3l-9.4,9.4C3.3,21.5,3,21.1,3,20.5z" fill="#00df9a"/>
                     <path d="M23.3,12.5l-3.3-1.9l-3.3,3.3 l3.3,3.3l3.3-1.9C23.8,15.1,24,14.6,24,14S23.8,12.9,23.3,12.5z" fill="#ffcf00"/>
                     <path d="M4.7,2.2l12.4,12.4l3.3-3.3L5.4,1.4C5.1,1.1,4.7,1.3,4.7,2.2z" fill="#00b0ff"/>
                     <path d="M17.1,14.6L4.7,27l0.7,0.8l15.1-8.7L17.1,14.6z" fill="#ff3d00"/>
                   </svg>
                   <div className="text-[7px] font-extralight tracking-[0.3em] leading-none text-text-muted">PLAY_</div>
                </div>
                <div className="w-[1px] h-8 bg-border"></div>
                <div className="text-left">
                  <p className="text-[7px] font-bold uppercase tracking-[0.2em] text-text-muted leading-none mb-1">Get it on</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-base font-bold tracking-tight text-text-main">Google Play</span>
                  </div>
                </div>
              </a>
            </div>

            <div className="pt-6 flex items-center gap-6">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-surface-soft flex items-center justify-center text-[10px] font-bold">
                    <span className="material-symbols-outlined text-xs text-primary">star</span>
                  </div>
                ))}
              </div>
              <p className="text-xs font-bold text-text-muted uppercase tracking-widest">4.9/5 Rating on App Stores</p>
            </div>
          </div>

          <div className="relative group animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full scale-75 group-hover:scale-100 transition-transform duration-1000"></div>
            <div className="relative rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] border border-white/50">
              <img 
                src="/app-showcase-premium.png" 
                alt="ZoraMeeto Mobile App" 
                className="w-full h-auto hover:scale-105 transition-transform duration-[3000ms]"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Testimonials Section - Editorial Style */}
      <section className="py-24 px-6 bg-surface-soft/30 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/20">
              <span className="text-[9px] font-bold uppercase tracking-[0.3em]">The Evidence</span>
            </div>
            <h2 className="text-4xl lg:text-7xl font-extrabold tracking-tighter text-text-main leading-tight">Resonance in <span className="text-secondary italic font-light">Reality.</span></h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative group rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="/success-story-elite.png" 
                alt="Elite Success Story" 
                className="w-full h-auto group-hover:scale-105 transition-transform duration-[3000ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-10 left-10 text-white space-y-2">
                <p className="text-2xl font-bold tracking-tight">Vikram & Ananya</p>
                <p className="text-xs font-bold uppercase tracking-widest text-white/70">Matched in Mumbai • Dec 2025</p>
              </div>
            </div>

            <div className="space-y-12">
              <div className="space-y-6">
                <span className="material-symbols-outlined text-5xl text-secondary/30">format_quote</span>
                <p className="text-2xl md:text-3xl font-medium text-text-main leading-relaxed tracking-tight italic">
                  "As a founder, my time is my most valuable asset. ZoraMeeto didn't just give me matches; it gave me resonance. The vetting process is unparalleled—I met someone who finally speaks my language."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center font-bold text-secondary">V</div>
                  <div>
                    <p className="text-base font-bold text-text-main">Vikram S.</p>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted">Tech Entrepreneur</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { name: "Sarah L.", role: "Surgeon", quote: "Privacy was my #1 concern. ZoraMeeto handles it with clinical precision." },
                  { name: "Marcus T.", role: "Fund Manager", quote: "The concierge service is a game-changer. My dates are perfectly curated." }
                ].map((testimonial, i) => (
                  <div key={i} className="p-8 bg-white rounded-[2rem] border border-border shadow-sm space-y-4">
                    <p className="text-sm font-medium text-text-muted leading-relaxed">"{testimonial.quote}"</p>
                    <div>
                      <p className="text-xs font-bold text-text-main">{testimonial.name}</p>
                      <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-text-muted">{testimonial.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Invitation Section - Compact */}
      <section className="py-32 px-6 relative overflow-hidden bg-text-main">
        <div className="absolute inset-0 opacity-[0.08] grayscale invert pointer-events-none scale-150 animate-float-slow">
          <img src="https://www.transparenttextures.com/patterns/world-map.png" alt="World Map" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
          <div className="space-y-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary">Admission is Selective</span>
            <h2 className="text-6xl lg:text-8xl font-bold tracking-tighter text-white leading-tight">
              The Journey <br />
              <span className="text-primary italic font-light">Awaits.</span>
            </h2>
          </div>
          <p className="text-xl text-white/70 max-w-2xl mx-auto font-medium leading-relaxed">
            Join the world's most modern network of high-achievers. Where human resonance meets high-performance engineering.
          </p>
          <div className="pt-8 flex flex-wrap justify-center gap-8">
            <button className="bg-white text-text-main px-16 py-6 rounded-[2rem] font-bold text-lg uppercase tracking-widest shadow-2xl hover:scale-105 transition-all">
              Apply for Admission
            </button>
            <Link href="/how-it-works" className="px-16 py-6 rounded-[2rem] border-2 border-white/20 text-white font-bold text-lg uppercase tracking-widest hover:bg-white/5 transition-all">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}