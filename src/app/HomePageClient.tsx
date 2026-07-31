"use client";

import Link from "next/link";
import Image from "next/image";
import { AppStoreBadge, GooglePlayBadge } from "@/components/StoreLogos";
import ScanToDownloadCard from "@/components/ScanToDownloadCard";

export default function HomePageClient() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/10">

      <section className="hero-section relative flex min-h-screen min-h-[100svh] items-center overflow-hidden border-b border-border bg-mesh-ultra px-4 pb-12 pt-28 sm:px-6">

        {/* Background Depth Orbs */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -left-24 w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full animate-float-slow"></div>
          <div className="absolute bottom-1/4 -right-24 w-[500px] h-[500px] bg-secondary/5 blur-[140px] rounded-full animate-float-slow" style={{ animationDelay: '-5s' }}></div>
        </div>

        <div className="hero-layout relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center">

          {/* Left Column: Authoritative Messaging */}
          <div className="hero-copy space-y-6 text-center lg:text-left animate-fade-up">
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

            <div className="hero-download mx-auto flex max-w-lg flex-col items-center justify-center gap-5 pt-1 sm:flex-row sm:items-center sm:justify-between lg:mx-0">
              <div className="space-y-2.5 text-center sm:text-left">
                <p className="text-xl font-bold tracking-tight text-text-main">Get the app!</p>
                <div className="flex flex-row items-center gap-3">
                <AppStoreBadge />
                <GooglePlayBadge />
              </div>
              </div>

              <ScanToDownloadCard />
            </div>
            <div className="hero-rating flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row sm:gap-6 lg:justify-start">
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

          {/* Right Column: both devices share one proportional stage. */}
          <div className="hero-phones flex w-full items-center justify-center animate-fade-up lg:justify-end" style={{ animationDelay: '0.4s' }}>
            <div className="hero-device-stage">

              {/* Screen 1: The Profile View */}
              <div className="hero-phone hero-phone-profile group">
                <div className="hero-phone-screen absolute inset-0 isolate overflow-hidden bg-surface">
                  <Image
                    src="/hero-img-1.png"
                    alt="Profile screen in the ZoraMeeto mobile app"
                    width={1023}
                    height={1537}
                    sizes="(min-width: 1024px) 235px, (min-width: 640px) 205px, 43vw"
                    priority
                    className="h-full w-full object-cover transition-transform duration-[2000ms] group-hover:scale-100"
                  />
                  <div className="absolute bottom-0 left-0 right-0 z-30 space-y-1 bg-gradient-to-t from-black/95 to-transparent p-3 text-white sm:p-6">
                    <p className="text-sm font-bold sm:text-lg">Shreya, 25</p>
                    <p className="text-[7px] font-bold uppercase tracking-widest text-white/60">Creative Director | Mumbai</p>
                  </div>
                </div>
              </div>

              {/* Screen 2: The Matching View */}
              <div className="hero-phone hero-phone-match group">
                <div className="hero-phone-screen absolute inset-0 isolate overflow-hidden bg-surface">
                  <Image
                    src="/hero-match-couple.jpg"
                    width={1200}
                    height={800}
                    sizes="(min-width: 1024px) 235px, (min-width: 640px) 205px, 43vw"
                    className="h-full w-full object-cover transition-transform duration-[2000ms] group-hover:scale-100"
                    alt="A couple representing a strong ZoraMeeto match"
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
                    <button type="button" className="w-full rounded-xl bg-white py-2.5 text-[8px] font-bold uppercase tracking-wider text-text-main shadow-xl transition-colors hover:bg-primary hover:text-white sm:rounded-2xl sm:py-4 sm:text-[9px] sm:tracking-widest">
                      Start Conversation
                    </button>
                  </div>
                </div>
              </div>

              {/* Decorative Glow */}
              <div className="absolute -right-10 top-1/2 z-0 h-80 w-80 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]"></div>
            </div>
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
                  tone: "bg-green-500/10 border-green-500/20 text-green-500"
                },
                {
                  icon: "videocam",
                  title: "Video Calls",
                  desc: "Connect face-to-face with members who are serious about getting to know you.",
                  tone: "bg-blue-500/10 border-blue-500/20 text-blue-500"
                },
                {
                  icon: "card_giftcard",
                  title: "Gifts & Tips",
                  desc: "Receive virtual gifts and tips from members who appreciate your time and conversation.",
                  tone: "bg-yellow-500/10 border-yellow-500/20 text-yellow-500"
                }
              ].map((item) => (
                <div key={item.title} className={`relative overflow-hidden rounded-2xl border bg-white/80 p-5 shadow-sm backdrop-blur-sm ${item.tone}`}>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/50">
                      <span className="material-symbols-outlined text-lg">{item.icon}</span>
                    </div>
                    <h4 className="font-bold text-text-main text-sm">{item.title}</h4>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-text-muted font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 bg-surface-soft/20 px-5 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="mb-10 space-y-4 text-center sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
              <span className="text-[9px] font-bold uppercase tracking-[0.3em]">Love Stories</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tighter text-text-main leading-tight">Success Stories from <br /> <span className="text-primary italic font-light">Our Members</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Priya & Rohan",
                story: "We were tired of the usual dating apps. ZoraMeeto felt different from the start. The people were real, and the conversations were meaningful. We found each other in just a few weeks!",
                image: "/testimonial-1.jpg"
              },
              {
                name: "Aisha",
                story: "As a creator, I love that I can earn while connecting with people who genuinely want to get to know me. It's a safe and respectful community.",
                image: "/testimonial-2.jpg"
              },
              {
                name: "Vikram",
                story: "I travel a lot for work, so it's hard to meet people. ZoraMeeto's video call feature has been a game-changer. I met my partner while on a business trip, and we've been inseparable ever since.",
                image: "/testimonial-3.jpg"
              }
            ].map((testimonial) => (
              <div key={testimonial.name} className="glass-card-premium group relative flex flex-col justify-between space-y-6 overflow-hidden rounded-3xl border border-border bg-white p-6 shadow-2xl shadow-black/[0.02] transition-all duration-700 sm:p-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Image src={testimonial.image} alt={testimonial.name} width={50} height={50} className="rounded-full" />
                    <p className="font-bold text-text-main">{testimonial.name}</p>
                  </div>
                  <p className="text-text-muted font-medium leading-relaxed text-base">{testimonial.story}</p>
                </div>
                <div className="flex items-center gap-1 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-lg">star</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 bg-white px-5 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tighter text-text-main leading-tight">
            Ready to Find <br />
            <span className="text-primary italic font-light">Your Person?</span>
          </h2>
          <p className="text-base md:text-lg text-text-muted leading-relaxed font-medium max-w-2xl mx-auto">
            Join ZoraMeeto today and start your journey towards a meaningful relationship. Download the app and discover a smarter way to date.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <AppStoreBadge large />
            <GooglePlayBadge large />
          </div>
        </div>
      </section>
    </main>
  );
}