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
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-text-main">Smart Dating for Serious Singles</span>
              </div>
              
              <div className="space-y-3">
                <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tighter text-text-main leading-[1.1]">
                  Meet Someone Who <br />
                  <span className="text-primary italic font-light">Matches Your Life.</span>
                </h1>
                <p className="text-base text-text-muted max-w-lg mx-auto lg:mx-0 leading-relaxed text-justify font-bold glass-card-premium p-5 rounded-2xl border border-white/50 shadow-sm">
                  Zorameeto is a smart relationship platform that connects genuine singles through verified profiles, intelligent matching, and meaningful conversations—helping people find someone who truly matches their life.
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
          </div>

          {/* Right Column: 3D Mockups - BOTH IMAGES STABILIZED */}
          <div className="relative h-[450px] md:h-[600px] flex items-center justify-center lg:justify-end animate-fade-up" style={{ animationDelay: '0.4s' }}>
            
            {/* Screen 1: The Profile View */}
            <div className="absolute -left-2 lg:left-0 top-4 w-[200px] md:w-[260px] aspect-[9/19.5] bg-surface rounded-[2.5rem] shadow-[0_40px_80px_rgba(0,0,0,0.15)] border-[8px] border-text-main overflow-hidden rotate-[-8deg] hover:rotate-0 hover:scale-105 transition-all duration-1000 group z-10">
            <Image 
                src="/hero-img-1.png" 
                alt="ZoraMeeto Mobile App" 
                width={800}
                height={800}
                className="w-full h-full object-cover group-hover:scale-100 transition-transform duration-[2000ms]"
              />
              {/* <img 
                src={image1.src}
                className="w-full h-full object-cover group-hover:scale-100 transition-transform duration-[2000ms]"
                alt="Profile Experience"
              /> */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/95 to-transparent z-30 text-white space-y-1">
                <p className="text-lg font-bold">Shreya , 25</p>
                <p className="text-[7px] font-bold uppercase tracking-widest text-white/60">Creative Director | Mumbai</p>
              </div>
            </div>

            {/* Screen 2: The Matching View - IMAGE STABILIZED WITH ROBUST LINK */}
            <div className="absolute right-0 lg:right-4 bottom-4 w-[200px] md:w-[260px] aspect-[9/19.5] bg-surface rounded-[2.5rem] shadow-[0_40px_80px_rgba(0,0,0,0.15)] border-[8px] border-text-main overflow-hidden rotate-[8deg] hover:rotate-0 hover:scale-105 transition-all duration-1000 group z-10">
             <img
  src="https://images.pexels.com/photos/1417255/pexels-photo-1417255.jpeg?auto=compress&cs=tinysrgb&w=800"
  className="w-full h-full object-cover rounded-[calc(2.5rem-8px)] group-hover:scale-100 transition-transform duration-[2000ms]"
  alt="Match Experience"
/>

<div className="absolute inset-0 rounded-[calc(2.5rem-8px)] p-6 flex flex-col justify-end bg-gradient-to-t from-black/95 to-transparent z-30 text-white space-y-3">
                <div className="flex items-center gap-2 px-3 py-1 bg-primary/30 backdrop-blur-md rounded-full w-fit border border-primary/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                  <span className="text-[7px] font-bold uppercase tracking-widest text-white">98.4% Match</span>
                </div>
                <div className="space-y-1">
                  <p className="text-xl font-bold leading-tight">Strong Match</p>
                  <p className="text-[8px] font-medium text-white/60">Shared values, lifestyle, and future plans.</p>
                </div>
                <button className="w-full py-4 bg-white text-text-main rounded-2xl font-bold text-[9px] uppercase tracking-widest shadow-xl hover:bg-primary hover:text-white transition-colors">
                  Start Conversation
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
      <section className="py-16 px-6 border-b border-border bg-white relative z-10">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-10 text-center md:text-left">
          {[
            { label: "Matches", value: "85%", icon: "favorite" },
            { label: "SECURE DATES", value: "95%", icon: "verified" },
            { label: "Active", value: "TOP 1%", icon: "payments" },
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
              <span className="text-[9px] font-bold uppercase tracking-[0.3em]">Key Features</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tighter text-text-main leading-tight">Built for <span className="text-primary italic font-light">Better Matches.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 1. The Algorithm */}
            <div className="glass-card-premium rounded-[3rem] p-10 bg-white space-y-8 flex flex-col justify-center relative overflow-hidden group border border-border shadow-2xl shadow-black/[0.02] transition-all duration-700">
              <div className="w-14 h-14 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center relative z-10 group-hover:bg-primary group-hover:text-white transition-all duration-700">
                <span className="material-symbols-outlined text-2xl text-primary">psychology_alt</span>
              </div>
              <div className="space-y-3 relative z-10">
                <h3 className="text-3xl font-bold tracking-tight text-text-main leading-tight">Smart <br />Matching</h3>
                <p className="text-text-muted font-medium leading-relaxed text-base">
                  Stop wasting time on endless swiping. Our AI looks at your profile, choices, and goals to suggest better matches.
                </p>
              </div>
            </div>

            {/* 2. The Art of Introduction */}
            <div className="glass-card-premium rounded-[3rem] p-10 bg-white space-y-8 flex flex-col justify-center relative overflow-hidden group border border-border shadow-2xl shadow-black/[0.02] transition-all duration-700">
              <div className="w-14 h-14 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center relative z-10 group-hover:bg-primary group-hover:text-white transition-all duration-700">
                <span className="material-symbols-outlined text-2xl text-primary">handshake</span>
              </div>
              <div className="space-y-3 relative z-10">
                <h3 className="text-3xl font-bold tracking-tight text-text-main leading-tight">Better <br />Introductions</h3>
                <p className="text-text-muted font-medium leading-relaxed text-base">
                  You do not need hundreds of random profiles. Get a smaller list of checked members who match what you are looking for.
                </p>
              </div>
            </div>

            {/* 3. Stealth Mode */}
            <div className="glass-card-premium rounded-[3rem] p-10 bg-white space-y-8 flex flex-col justify-center relative overflow-hidden group border border-border shadow-2xl shadow-black/[0.02] transition-all duration-700">
              <div className="w-14 h-14 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center relative z-10 group-hover:bg-primary group-hover:text-white transition-all duration-700">
                <span className="material-symbols-outlined text-2xl text-primary">visibility_off</span>
              </div>
              <div className="space-y-3 relative z-10">
                <h3 className="text-3xl font-bold tracking-tight text-text-main leading-tight">Privacy <br />Controls</h3>
                <p className="text-text-muted font-medium leading-relaxed text-base">
                  Control who can see you. Blur your profile, hide from contacts, and share details only when you are ready.
                </p>
              </div>
            </div>

            {/* 4. The Inner Circle */}
            <div className="glass-card-premium rounded-[3rem] p-10 bg-white space-y-8 flex flex-col justify-center relative overflow-hidden group border border-border shadow-2xl shadow-black/[0.02] transition-all duration-700">
              <div className="w-14 h-14 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center relative z-10 group-hover:bg-primary group-hover:text-white transition-all duration-700">
                <span className="material-symbols-outlined text-2xl text-primary">celebration</span>
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
      <section className="py-24 px-6 bg-white border-y border-border relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_30%,rgba(255,45,85,0.08),transparent_32%),radial-gradient(circle_at_86%_20%,rgba(0,122,255,0.07),transparent_30%)]"></div>
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/85 text-primary border border-primary/20 shadow-lg shadow-primary/5 backdrop-blur-xl">
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

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] border border-primary/10 bg-white/40 backdrop-blur-sm"></div>
            <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                  className="group relative min-h-[220px] overflow-hidden rounded-[1.75rem] border border-border bg-white/90 p-7 shadow-[0_24px_60px_rgba(28,28,30,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_30px_80px_rgba(255,45,85,0.12)]"
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

            <div className="relative mt-5 rounded-[1.75rem] border border-border bg-text-main p-5 text-white shadow-2xl shadow-black/10">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/45">Creator Wallet</p>
                  <p className="mt-2 text-2xl font-extrabold tracking-tight">Calls, gifts, and rewards in one place.</p>
                </div>
                <div className="flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-3 text-sm font-bold">
                  <span className="material-symbols-outlined text-primary">account_balance_wallet</span>
                  In-app credits
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
                <span className="text-[9px] font-bold uppercase tracking-[0.3em]">Mobile App</span>
              </div>
              <h2 className="text-4xl lg:text-7xl font-extrabold tracking-tighter text-text-main leading-[1.1]">
                ZoraMeeto, <br />
                <span className="text-primary italic font-light">in Your Pocket.</span>
              </h2>
              <p className="text-xl text-text-muted max-w-lg font-medium leading-relaxed">
                Use ZoraMeeto anywhere. The app is simple, safe, and made for serious dating.
              </p>
            </div>

            <div className="flex flex-col gap-5 sm:flex-row">
              <AppStoreBadge />
              <GooglePlayBadge />
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
              <Image 
                src="/app-showcase-premium.png" 
                alt="ZoraMeeto Mobile App" 
                width={800}
                height={800}
                className="w-full h-auto hover:scale-105 transition-transform duration-[3000ms]"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 px-6 bg-surface-soft/30 relative z-10 overflow-hidden">
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
              className="luxury-button inline-flex bg-text-main text-white px-10 py-5 rounded-[1.5rem] font-bold text-xs uppercase tracking-[0.3em] shadow-xl shadow-black/10 hover:scale-105 transition-all duration-700"
            >
              Read Full Post
            </Link>
          </div>
        </div>
      </section>



   

    </main>
  );
}
