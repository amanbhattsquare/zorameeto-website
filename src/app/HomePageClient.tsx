"use client";

import Link from "next/link";
import Image from "next/image";
import { AppStoreBadge, GooglePlayBadge } from "@/components/StoreLogos";
// import image1 from "@/public/hero-img-1.png";

export default function HomePageClient() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/10">
      
      {/* 
        ULTRA-COMPACT APP HERO - FINAL IMAGE STABILIZATION 
        - Hard-linked robust image assets
        - 3D Hardware Mockups with perfect hardware definition
        - Optimized for standard laptop folds
      */}
      <section className="relative flex min-h-screen min-h-[100svh] items-center overflow-hidden border-b border-border bg-mesh-ultra px-4 pb-12 pt-28 sm:px-6 lg:min-h-[680px] lg:py-28">
        
        {/* Background Depth Orbs */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -left-24 w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full animate-float-slow"></div>
          <div className="absolute bottom-1/4 -right-24 w-[500px] h-[500px] bg-secondary/5 blur-[140px] rounded-full animate-float-slow" style={{ animationDelay: '-5s' }}></div>
        </div>
        
        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          
          {/* Left Column: Authoritative Messaging */}
          <div className="space-y-6 text-center lg:space-y-8 lg:text-left animate-fade-up">
            <div className="space-y-5">
              <div className="mx-auto inline-flex max-w-full items-center gap-2 rounded-full border border-white bg-white/80 px-3 py-2 text-center shadow-lg shadow-black/5 backdrop-blur-xl sm:gap-3 sm:px-4 lg:mx-0">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-text-main sm:text-[9px] sm:tracking-[0.3em]">Smart Dating for Serious Singles</span>
              </div>
              
              <div className="space-y-3">
                <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tighter text-text-main leading-[1.08]">
                  Meet Someone Who <br />
                  <span className="text-primary italic font-light">Matches Your Life.</span>
                </h1>
                <p className="glass-card-premium mx-auto max-w-lg rounded-2xl border border-white/50 p-4 text-left text-sm font-semibold leading-relaxed text-text-muted shadow-sm sm:p-5 sm:text-base lg:mx-0">
                  Zorameeto is a smart relationship platform that helps verified singles connect through meaningful matches and genuine conversations.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <p className="text-xl font-semibold text-text-main">Get the app!</p>
              <div className="flex flex-col items-center gap-5 sm:flex-row">
                <AppStoreBadge />
                <GooglePlayBadge />
              </div>
            </div>
             <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row sm:gap-6 lg:justify-start lg:pt-6">
              <div className="flex -space-x-2">
                {[false, false, false, false, true].map((isHalfStar, index) => (
                  <div key={index} className="w-10 h-10 rounded-full border-2 border-white bg-surface-soft flex items-center justify-center">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-5 w-5 text-primary"
                    >
                      {isHalfStar && (
                        <defs>
                          <clipPath id={`hero-half-star-${index}`}>
                            <rect width="12" height="24" />
                          </clipPath>
                        </defs>
                      )}
                      <path
                        d="m12 2.5 2.95 5.98 6.6.96-4.78 4.66 1.13 6.58L12 17.58l-5.9 3.1 1.13-6.58-4.78-4.66 6.6-.96L12 2.5Z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinejoin="round"
                      />
                      <path
                        d="m12 2.5 2.95 5.98 6.6.96-4.78 4.66 1.13 6.58L12 17.58l-5.9 3.1 1.13-6.58-4.78-4.66 6.6-.96L12 2.5Z"
                        fill="currentColor"
                        clipPath={isHalfStar ? `url(#hero-half-star-${index})` : undefined}
                      />
                    </svg>
                  </div>
                ))}
              </div>
              <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider sm:text-xs sm:tracking-widest">4.5/5 Rating on App Stores</p>
            </div>
          </div>

          {/* Right Column: 3D Mockups - BOTH IMAGES STABILIZED */}
          <div className="relative flex h-[390px] items-center justify-center sm:h-[460px] md:h-[600px] lg:justify-end animate-fade-up" style={{ animationDelay: '0.4s' }}>
            
            {/* Screen 1: The Profile View */}
            <div className="absolute left-1 top-4 z-10 aspect-[9/19.5] w-[44vw] min-w-[138px] max-w-[190px] rotate-[-6deg] rounded-[1.75rem] border-[6px] border-text-main bg-text-main shadow-[0_40px_80px_rgba(0,0,0,0.15)] transition-all duration-1000 group will-change-transform hover:rotate-0 hover:scale-105 sm:left-4 sm:w-[200px] sm:max-w-none sm:rounded-[2.5rem] sm:border-[8px] md:w-[260px] lg:left-0">
              <div className="absolute inset-0 isolate overflow-hidden rounded-[1.35rem] bg-surface [clip-path:inset(0_round_1.35rem)] sm:rounded-[2rem] sm:[clip-path:inset(0_round_2rem)]">
                <Image
                  src="/hero-img-1.png"
                  alt="ZoraMeeto Mobile App"
                  width={800}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-[2000ms] group-hover:scale-100"
                />
                <div className="absolute bottom-0 left-0 right-0 z-30 space-y-1 bg-gradient-to-t from-black/95 to-transparent p-3 text-white sm:p-6">
                  <p className="text-sm font-bold sm:text-lg">Shreya, 25</p>
                  <p className="text-[7px] font-bold uppercase tracking-widest text-white/60">Creative Director | Mumbai</p>
                </div>
              </div>
            </div>

            {/* Screen 2: The Matching View - IMAGE STABILIZED WITH ROBUST LINK */}
            <div className="absolute bottom-4 right-1 z-10 aspect-[9/19.5] w-[44vw] min-w-[138px] max-w-[190px] rotate-[6deg] rounded-[1.75rem] border-[6px] border-text-main bg-text-main shadow-[0_40px_80px_rgba(0,0,0,0.15)] transition-all duration-1000 group will-change-transform hover:rotate-0 hover:scale-105 sm:right-4 sm:w-[200px] sm:max-w-none sm:rounded-[2.5rem] sm:border-[8px] md:w-[260px] lg:right-4">
              <div className="absolute inset-0 isolate overflow-hidden rounded-[1.35rem] bg-surface [clip-path:inset(0_round_1.35rem)] sm:rounded-[2rem] sm:[clip-path:inset(0_round_2rem)]">
                <Image
                  src="https://images.pexels.com/photos/1417255/pexels-photo-1417255.jpeg?auto=compress&cs=tinysrgb&w=800"
                  width={800}
                  height={1200}
                  sizes="(min-width: 768px) 260px, 44vw"
                  className="h-full w-full object-cover transition-transform duration-[2000ms] group-hover:scale-100"
                  alt="Match Experience"
                />

                <div className="absolute inset-0 z-30 flex flex-col justify-end space-y-2 bg-gradient-to-t from-black/95 to-transparent p-3 text-white sm:space-y-3 sm:p-6">
                  <div className="flex w-fit items-center gap-2 rounded-full border border-primary/50 bg-primary/30 px-3 py-1 backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></span>
                    <span className="text-[7px] font-bold uppercase tracking-widest text-white">98.4% Match</span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-base font-bold leading-tight sm:text-xl">Strong Match</p>
                    <p className="text-[8px] font-medium text-white/60">Shared values, lifestyle, and future plans.</p>
                  </div>
                  <button className="w-full rounded-xl bg-white py-2.5 text-[8px] font-bold uppercase tracking-wider text-text-main shadow-xl transition-colors hover:bg-primary hover:text-white sm:rounded-2xl sm:py-4 sm:text-[9px] sm:tracking-widest">
                    Start Conversation
                  </button>
                </div>
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
              {['AI Matchmaking', 'Verified Profiles', 'Secure Chat', 'Privacy Controls', 'Match Score', 'Smart Introductions', 'Earn Money'].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <span className="w-1 h-1 rounded-full bg-primary/30"></span>
                  <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-text-muted">{item}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Dynamic Counter Section - Compact */}
      <section className="relative z-10 border-b border-border bg-white px-5 py-14 sm:px-6 sm:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 sm:gap-10 lg:grid-cols-4">
          {[
            { label: "Matches", value: "85%", icon: "favorite" },
            { label: "SECURE DATES", value: "100%", icon: "verified" },
            { label: "Active", value: "TOP 1%", icon: "payments" },
            { label: "Hubs", value: "40+", icon: "public" }
          ].map((stat, i) => (
            <div key={i} className="group mx-auto flex w-full max-w-[180px] items-center gap-3 hover-lift sm:gap-4 lg:max-w-none">
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
      <section className="relative z-10 bg-surface-soft/20 px-5 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="mb-10 space-y-4 text-center sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
              <span className="text-[9px] font-bold uppercase tracking-[0.3em]">Key Features</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tighter text-text-main leading-tight">Built for <span className="text-primary italic font-light">Better Matches.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 1. The Algorithm */}
            <div className="glass-card-premium group relative flex flex-col justify-center space-y-6 overflow-hidden rounded-3xl border border-border bg-white p-6 shadow-2xl shadow-black/[0.02] transition-all duration-700 sm:p-8 lg:rounded-[3rem] lg:p-10 lg:space-y-8">
              <div className="w-14 h-14 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center relative z-10 group-hover:bg-primary group-hover:text-white transition-all duration-700">
                <span className="material-symbols-outlined text-2xl text-primary transition-colors duration-700 group-hover:text-white">psychology_alt</span>
              </div>
              <div className="space-y-3 relative z-10">
                <h3 className="text-3xl font-bold tracking-tight text-text-main leading-tight">Smart <br />Matching</h3>
                <p className="text-text-muted font-medium leading-relaxed text-base">
                  Stop wasting time on endless swiping. Our AI looks at your profile, choices, and goals to suggest better matches.
                </p>
              </div>
            </div>

            {/* 2. The Art of Introduction */}
            <div className="glass-card-premium group relative flex flex-col justify-center space-y-6 overflow-hidden rounded-3xl border border-border bg-white p-6 shadow-2xl shadow-black/[0.02] transition-all duration-700 sm:p-8 lg:rounded-[3rem] lg:p-10 lg:space-y-8">
              <div className="w-14 h-14 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center relative z-10 group-hover:bg-primary group-hover:text-white transition-all duration-700">
                <span className="material-symbols-outlined text-2xl text-primary transition-colors duration-700 group-hover:text-white">handshake</span>
              </div>
              <div className="space-y-3 relative z-10">
                <h3 className="text-3xl font-bold tracking-tight text-text-main leading-tight">Better <br />Introductions</h3>
                <p className="text-text-muted font-medium leading-relaxed text-base">
                  You do not need hundreds of random profiles. Get a smaller list of checked members who match what you are looking for.
                </p>
              </div>
            </div>

            {/* 3. Stealth Mode */}
            <div className="glass-card-premium group relative flex flex-col justify-center space-y-6 overflow-hidden rounded-3xl border border-border bg-white p-6 shadow-2xl shadow-black/[0.02] transition-all duration-700 sm:p-8 lg:rounded-[3rem] lg:p-10 lg:space-y-8">
              <div className="w-14 h-14 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center relative z-10 group-hover:bg-primary group-hover:text-white transition-all duration-700">
                <span className="material-symbols-outlined text-2xl text-primary transition-colors duration-700 group-hover:text-white">visibility_off</span>
              </div>
              <div className="space-y-3 relative z-10">
                <h3 className="text-3xl font-bold tracking-tight text-text-main leading-tight">Privacy <br />Controls</h3>
                <p className="text-text-muted font-medium leading-relaxed text-base">
                  Control who can see you. Blur your profile, hide from contacts, and share details only when you are ready.
                </p>
              </div>
            </div>

            {/* 4. The Inner Circle */}
            <div className="glass-card-premium group relative flex flex-col justify-center space-y-6 overflow-hidden rounded-3xl border border-border bg-white p-6 shadow-2xl shadow-black/[0.02] transition-all duration-700 sm:p-8 lg:rounded-[3rem] lg:p-10 lg:space-y-8">
              <div className="w-14 h-14 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center relative z-10 group-hover:bg-primary group-hover:text-white transition-all duration-700">
                <span className="material-symbols-outlined text-2xl text-primary transition-colors duration-700 group-hover:text-white">celebration</span>
              </div>
              <div className="space-y-3 relative z-10">
                <h3 className="text-3xl font-bold tracking-tight text-text-main leading-tight">Events & <br />Community</h3>
                <p className="text-text-muted font-medium leading-relaxed text-base">
                  Meet people online and at selected events. Build real connections in safe and comfortable spaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Earn Money Feature Section */}
      <section className="relative z-10 overflow-hidden border-y border-border bg-white px-5 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_30%,rgba(255,45,85,0.08),transparent_32%),radial-gradient(circle_at_86%_20%,rgba(0,122,255,0.07),transparent_30%)]"></div>
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-primary/20 bg-white/85 px-3 py-2 text-primary shadow-lg shadow-primary/5 backdrop-blur-xl sm:gap-3 sm:px-4">
              <span className="material-symbols-outlined text-base">paid</span>
              <span className="text-[9px] font-bold uppercase tracking-[0.3em]">Earn Money</span>
            </div>

            <div className="space-y-5">
              <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tighter text-text-main leading-tight">
                Turn real <br />
                <span className="text-primary italic font-light">conversations</span> <br className="hidden sm:block" />
                into rewards.
              </h2>
              <p className="text-base md:text-lg text-text-muted leading-relaxed font-medium max-w-xl">
                Once your profile is verified, ZoraMeeto lets eligible creators earn through meaningful audio calls, video calls, and gifts from members who value their time.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl">
              {[
                { value: "01", label: "Verify identity" },
                { value: "02", label: "Accept calls" },
                { value: "03", label: "Receive wallet credits" }
              ].map((step) => (
                <div key={step.value} className="rounded-2xl border border-border bg-white/80 p-4 shadow-sm backdrop-blur">
                  <p className="text-xs font-extrabold text-primary">{step.value}</p>
                  <p className="mt-2 text-sm font-bold leading-snug text-text-main">{step.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/how-it-works" className="luxury-button bg-text-main text-white px-8 py-4 rounded-xl font-bold text-[10px] uppercase tracking-[0.2em] shadow-xl shadow-black/10 text-center">
                How It Works
              </Link>
              <Link href="/app-showcase" className="bg-white/90 border border-border text-text-main px-8 py-4 rounded-xl font-bold text-[10px] uppercase tracking-[0.2em] hover:border-primary hover:text-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 text-center">
                See App Features
              </Link>
            </div>
          </div>

          <div className="relative space-y-6">
            <div className="absolute -inset-2 rounded-[2rem] bg-white/40 backdrop-blur-sm sm:-inset-4 sm:rounded-[2.5rem]"></div>
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-primary/20 bg-white/85 px-3 py-2 text-primary shadow-lg shadow-primary/5 backdrop-blur-xl sm:gap-3 sm:px-4">
              <span className="material-symbols-outlined text-base">checklist</span>
              <span className="text-[8px] font-bold uppercase tracking-[0.16em] sm:text-[9px] sm:tracking-[0.3em]">Complete steps to start earning</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  icon: "face_retouching_natural",
                  title: "Face Verification",
                  desc: "A quick identity check keeps earning access trusted, safer, and member-friendly.",
                  tone: "bg-primary/10 border-primary/20 text-primary"
                },
                {
                  icon: "call",
                  title: "Audio Calls",
                  desc: "Earn from eligible in-app calls while keeping your personal number private.",
                  tone: "bg-secondary/10 border-secondary/20 text-secondary"
                },
                {
                  icon: "video_call",
                  title: "Video Calls",
                  desc: "Approved video calls help members connect with confidence before meeting.",
                  tone: "bg-text-main/5 border-text-main/10 text-text-main"
                },
                {
                  icon: "redeem",
                  title: "Virtual Gifts",
                  desc: "Gift value is credited to your wallet according to ZoraMeeto earning rules.",
                  tone: "bg-primary/10 border-primary/20 text-primary"
                }
              ].map((feature, index) => (
                <div
                  key={feature.title}
                  className="group relative min-h-[200px] overflow-hidden rounded-[1.5rem] border border-border bg-white/90 p-5 shadow-[0_24px_60px_rgba(28,28,30,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_30px_80px_rgba(255,45,85,0.12)] sm:min-h-[220px] sm:rounded-[1.75rem] sm:p-7"
                >
                  <div className="absolute right-5 top-5 text-5xl font-extrabold tracking-tighter text-text-main/[0.03]">
                    0{index + 1}
                  </div>
                  <div className={`relative z-10 w-14 h-14 rounded-2xl border flex items-center justify-center ${feature.tone} transition-transform duration-500 group-hover:scale-110`}>
                    <span className="material-symbols-outlined text-2xl">{feature.icon}</span>
                  </div>
                  <div className="relative z-10 mt-8 space-y-3">
                    <h3 className="text-xl font-extrabold tracking-tight text-text-main">{feature.title}</h3>
                    <p className="text-sm text-text-muted font-medium leading-relaxed">{feature.desc}</p>
                  </div>
                  <div className="absolute bottom-0 left-7 right-7 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                </div>
              ))}
            </div>

           
          </div>
        </div>
      </section>

      {/* Creator Wallet Section */}
      <section className="relative z-10 overflow-hidden bg-white px-5 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
          
          <div className="animate-fade-up h-full">
            <div className="relative flex h-full flex-col py-2 sm:py-6 lg:min-h-[520px] lg:pr-8">
              <div className="max-w-xl space-y-9">
                <div className="inline-flex w-fit items-center gap-3 rounded-full border border-primary/20 bg-white px-4 py-2 text-primary shadow-[0_10px_30px_rgba(255,45,85,0.12)]">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white">
                    <span className="material-symbols-outlined text-[16px]">account_balance_wallet</span>
                  </span>
                  <span className="text-[9px] font-extrabold uppercase tracking-[0.3em]">Creator Wallet</span>
                </div>

                <div className="space-y-6 pt-4">
                  <h2 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tighter text-text-main leading-[1.02]">
                    ZoraMeeto, <br />
                    <span className="text-primary italic font-light">in Your Pocket.</span>
                  </h2>
                  <p className="text-xl sm:text-2xl font-extrabold tracking-tight text-text-main leading-snug max-w-lg">
                    Calls, gifts, and rewards in one place.
                  </p>
                  <p className="text-base font-medium leading-relaxed text-text-muted max-w-lg">
                    A focused wallet experience for verified creators to track credits, manage paid interactions, and keep earning activity clear.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-lg">
                  {[
                    { icon: "call", label: "Calls" },
                    { icon: "redeem", label: "Gifts" },
                    { icon: "payments", label: "Rewards" }
                  ].map((item, index) => (
                    <div key={item.label} className="relative">
                      {index < 2 && (
                        <div className="absolute left-1/2 top-1/2 hidden h-px w-full translate-x-1/2 bg-gradient-to-r from-primary/35 to-transparent sm:block"></div>
                      )}
                      <div className="relative z-10 inline-flex h-[54px] w-full items-center justify-center gap-2.5 rounded-xl border border-text-main/10 bg-text-main px-3 text-sm font-bold text-white shadow-[0_10px_24px_rgba(28,28,30,0.12)]">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-white/10 text-[10px] font-extrabold text-white/80">
                          0{index + 1}
                        </span>
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <span className="material-symbols-outlined text-[19px]">{item.icon}</span>
                        </span>
                        <p className="leading-tight">{item.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative group animate-fade-up h-full" style={{ animationDelay: '0.2s' }}>
            <div className="relative flex h-full min-h-[320px] flex-col px-0 py-4 sm:min-h-[400px] sm:px-4 sm:py-6 lg:min-h-[520px] lg:px-8">
              <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-primary/20 bg-white/85 px-3 py-2 text-primary shadow-lg shadow-primary/5 backdrop-blur-xl sm:w-fit sm:gap-3 sm:px-4">
                <span className="material-symbols-outlined text-base">payments</span>
                <span className="text-[8px] font-bold uppercase tracking-[0.18em] sm:text-[9px] sm:tracking-[0.3em]">Wallet credits ready</span>
              </div>
              <div className="relative flex flex-1 items-center justify-center pt-4">
                <div className="absolute bottom-0 right-0 hidden rounded-full border border-primary/20 bg-white/95 px-4 py-2 text-primary shadow-[0_16px_40px_rgba(255,45,85,0.14)] backdrop-blur md:flex items-center gap-2">
                  <span className="material-symbols-outlined text-base">verified</span>
                  <span className="text-[9px] font-extrabold uppercase tracking-[0.22em]">Verified</span>
                </div>
                <Image 
                  src="/app-showcase-premium.png" 
                  alt="ZoraMeeto Mobile App" 
                  width={900}
                  height={900}
                  className="relative z-10 w-full max-w-[680px] rounded-[1.75rem] object-contain shadow-[0_36px_90px_rgba(28,28,30,0.18)] ring-1 ring-border/70 transition-transform duration-[3000ms] group-hover:scale-[1.025]"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Blog Section */}
      <section className="relative z-10 overflow-hidden bg-surface-soft/30 px-5 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
            <span className="text-[9px] font-bold uppercase tracking-[0.3em]">Dating Tips</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tighter text-text-main leading-tight mt-4">
            Dating Tips from <span className="text-primary italic font-light">ZoraMeeto</span>
          </h2>
          <p className="mt-6 text-lg text-text-muted leading-relaxed max-w-2xl mx-auto">
            A good first chat can make a real difference. Learn simple ways to start better conversations and build trust.
          </p>
          <div className="mt-10">
            <Link
              href="/journal/first-conversation"
              className="luxury-button inline-flex min-h-14 items-center justify-center rounded-[1.25rem] bg-text-main px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white shadow-xl shadow-black/10 transition-all duration-700 hover:scale-105 sm:rounded-[1.5rem] sm:px-10 sm:py-5 sm:text-xs sm:tracking-[0.3em]"
            >
              Read Full Post
            </Link>
          </div>
        </div>
      </section>



   

    </main>
  );
}
