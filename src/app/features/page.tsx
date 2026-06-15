import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features | ZoraMeeto Dating App",
  description:
    "Explore ZoraMeeto features for verified dating, private profiles, better matches, member safety, and a simple mobile app.",
};

const coreFeatures = [
  {
    icon: "psychology",
    title: "Smart Matching",
    desc: "Matches are based on lifestyle, dating goals, interests, and future plans.",
  },
  {
    icon: "verified_user",
    title: "Verified Members",
    desc: "Profile review helps keep fake profiles and low-quality activity away.",
  },
  {
    icon: "visibility_off",
    title: "Private Browsing",
    desc: "Control who can see your profile and explore matches with more privacy.",
  },
  {
    icon: "forum",
    title: "Easy Conversation",
    desc: "Profile prompts and clear details help people start better chats.",
  },
  {
    icon: "event_available",
    title: "Plan a Date",
    desc: "Move from match to chat to date planning with clear next steps.",
  },
  {
    icon: "workspace_premium",
    title: "Clean App Design",
    desc: "The app feels simple, calm, and easy to use on mobile and desktop.",
  },
];

const platformLayers = [
  {
    label: "Profiles",
    title: "Profiles With Useful Details",
    desc: "Profiles show values, lifestyle, goals, and expectations clearly before you start talking.",
    icon: "badge",
  },
  {
    label: "Match Quality",
    title: "Fewer Matches, Better Fit",
    desc: "The app shows fewer random profiles and focuses on matches that make more sense.",
    icon: "filter_alt",
  },
  {
    label: "Member Safety",
    title: "Trust At Every Step",
    desc: "Verification, privacy controls, and reporting tools help keep the app respectful.",
    icon: "shield_lock",
  },
];

const privacyFeatures = [
  "Control who sees your profile",
  "Verified member access",
  "Private mobile experience",
  "Simple reporting tools",
  "No public social feed",
  "Made for serious dating",
];

const journey = [
  {
    step: "01",
    title: "Apply",
    desc: "Start with a simple profile and access request.",
  },
  {
    step: "02",
    title: "Verify",
    desc: "Identity, goals, and profile quality are checked before full access.",
  },
  {
    step: "03",
    title: "Discover",
    desc: "Better suggestions help you spend less time searching.",
  },
  {
    step: "04",
    title: "Connect",
    desc: "Chat clearly and take the next step when both people are ready.",
  },
];

function PhoneFrame({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`relative aspect-[716/1600] overflow-hidden rounded-[2rem] border-[7px] border-text-main bg-text-main shadow-[0_30px_80px_rgba(28,28,30,0.16)] ${className}`}
    >
      <div className="absolute left-1/2 top-0 z-10 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-text-main" />
      <Image
        src={src}
        alt={alt}
        width={716}
        height={1600}
        priority={priority}
        sizes="(min-width: 1024px) 280px, (min-width: 640px) 240px, 70vw"
        className="h-full w-full object-cover"
      />
    </div>
  );
}

export default function Features() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/10">
      <section className="relative overflow-hidden bg-gradient-mesh px-6 pb-12 pt-32 text-center">
        <div className="absolute left-1/2 top-0 z-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-primary/5 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-4xl space-y-6 animate-fade-up">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-3 py-1.5">
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-primary">
              App Features
            </span>
          </div>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tighter text-text-main md:text-6xl">
            Simple Features for <br />
            <span className="font-light italic text-primary">Better Dating.</span>
          </h1>
          <p className="mx-auto max-w-xl text-base font-medium leading-relaxed text-text-muted md:text-lg">
            ZoraMeeto gives you verified profiles, better matches, private browsing,
            and simple tools to build real connections.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-white px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl space-y-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">
              Main Features
            </span>
            <h2 className="text-3xl font-extrabold leading-tight text-text-main md:text-5xl">
              More than matching. Built for trust.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {coreFeatures.map((feature) => (
              <article
                key={feature.title}
                className="rounded-lg border border-border bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/[0.04]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-2xl">
                    {feature.icon}
                  </span>
                </div>
                <h3 className="text-xl font-extrabold leading-7 text-text-main">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-7 text-text-muted">
                  {feature.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-soft/50 px-6 py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3">
          {platformLayers.map((layer) => (
            <article
              key={layer.title}
              className="rounded-lg border border-border bg-white p-8 shadow-sm"
            >
              <div className="flex items-center justify-between gap-4 border-b border-border pb-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                  {layer.label}
                </span>
                <span className="material-symbols-outlined text-2xl text-text-main">
                  {layer.icon}
                </span>
              </div>
              <div className="pt-8">
                <h3 className="text-2xl font-extrabold leading-tight text-text-main">
                  {layer.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-7 text-text-muted">
                  {layer.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="overflow-hidden bg-white px-6 py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">
              Privacy Tools
            </span>
            <div className="space-y-5">
              <h2 className="text-3xl font-extrabold leading-tight text-text-main md:text-5xl">
                Privacy is built into the app.
              </h2>
              <p className="max-w-2xl text-base font-medium leading-8 text-text-muted">
                ZoraMeeto avoids public feeds and gives members a private place
                to explore real matches.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {privacyFeatures.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-lg border border-border bg-surface-soft/60 p-5"
                >
                  <span className="material-symbols-outlined mt-0.5 text-xl text-primary">
                    check_circle
                  </span>
                  <p className="text-sm font-bold leading-6 text-text-main">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[360px]">
            <PhoneFrame
              src="/zorameeto-ss-5.jpeg"
              alt="ZoraMeeto premium private mobile tools screen"
              className="mx-auto w-[280px] sm:w-[320px]"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface-soft/50 px-6 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl space-y-16">
          <div className="text-center space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">
              How It Works
            </span>
            <h2 className="text-3xl font-extrabold leading-tight text-text-main md:text-5xl">
              Simple steps to find your <span className="text-primary italic font-light">match.</span>
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">ZoraMeeto helps you create a profile, verify your identity, find better matches, and chat safely.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                no: "01",
                title: "Create Profile",
                desc: "Add your basic details, photos, interests, and dating goals.",
                icon: "app_registration"
              },
              {
                no: "02",
                title: "Profile Check",
                desc: "We check identity and profile quality to keep the community safe.",
                icon: "verified_user"
              },
              {
                no: "03",
                title: "Match Questions",
                desc: "Answer simple questions so we can suggest better matches.",
                icon: "analytics"
              },
              {
                no: "04",
                title: "Start Matching",
                desc: "See verified people who match your interests and goals.",
                icon: "diversity_3"
              }
            ].map((step, i) => (
              <div key={i} className="spotlight-card rounded-[2.5rem] p-8 space-y-6 relative overflow-hidden group bg-white border border-border hover-lift shadow-sm">
                <span className="text-6xl font-bold text-text-main/[0.03] absolute -top-2 -right-2">{step.no}</span>
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <span className="material-symbols-outlined text-xl">{step.icon}</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold tracking-tight text-text-main leading-tight">{step.title}</h3>
                  <p className="text-text-muted font-medium leading-relaxed text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Earn Section - Merged from How It Works */}
      <section className="py-24 px-6 bg-white border-y border-border overflow-hidden relative">
        <div className="absolute -left-24 top-1/3 w-[320px] h-[320px] bg-primary/5 blur-[110px] rounded-full"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-center">
            <div className="space-y-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
                <span className="text-[9px] font-bold uppercase tracking-[0.3em]">How to Earn</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tighter text-text-main leading-tight">
                Earn by <br />
                <span className="text-primary italic font-light">Real Talks.</span>
              </h2>
              <p className="text-base md:text-lg text-text-muted leading-relaxed font-medium max-w-xl">
                ZoraMeeto lets verified users earn money through calls, video calls, and gifts. First complete face verification, then start earning.
              </p>

              <div className="grid grid-cols-2 gap-4 max-w-xl">
                {[
                  { value: "01", label: "Verify Face" },
                  { value: "02", label: "Enable Calls" },
                  { value: "03", label: "Receive Gifts" },
                  { value: "04", label: "Withdraw" }
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-border bg-surface-soft/50 p-5">
                    <p className="text-3xl font-extrabold tracking-tighter text-primary">{item.value}</p>
                    <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-text-muted">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  title: "Face Verification",
                  desc: "Complete a quick face verification check so the platform can confirm you are a real, trusted member before earning is enabled.",
                  icon: "face_retouching_natural"
                },
                {
                  title: "Receive Calls",
                  desc: "Once approved, you can earn when eligible members connect with you through audio calls or video calls inside the app.",
                  icon: "video_call"
                },
                {
                  title: "Get Gifts",
                  desc: "Members can send virtual gifts during conversations. Gift value is added to your earning balance according to app rules.",
                  icon: "redeem"
                },
                {
                  title: "Track Payouts",
                  desc: "View your earnings, pending balance, completed rewards, and payout status from your creator wallet dashboard.",
                  icon: "account_balance_wallet"
                }
              ].map((step) => (
                <div key={step.title} className="spotlight-card rounded-[2rem] p-7 bg-background border border-border shadow-sm hover-lift space-y-5">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-xl">{step.icon}</span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold tracking-tight text-text-main">{step.title}</h3>
                    <p className="text-sm text-text-muted font-medium leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-[2rem] border border-primary/20 bg-primary/5 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm text-text-muted font-medium leading-relaxed max-w-3xl">
              Earnings depend on verification, real activity, app rules, fraud checks, and payout availability. Fake activity, spam, or unsafe behavior can stop earning access.
            </p>
            <button className="shrink-0 bg-text-main text-white px-8 py-4 rounded-xl font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-primary transition-all duration-500">
              Start Earning
            </button>
          </div>
        </div>
      </section>

      {/* Trust Section - Merged from How It Works */}
      <section className="py-24 px-6 bg-white border-b border-border">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
            <span className="text-[9px] font-bold uppercase tracking-[0.3em]">Built on Trust</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter text-text-main leading-tight">
            Your safety is our <span className="text-primary italic font-light">priority.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="spotlight-card rounded-[2rem] p-8 space-y-4 bg-white border border-border shadow-sm hover-lift">
              <h4 className="text-xl font-bold text-text-main">Human Review</h4>
              <p className="text-text-muted font-medium text-sm">Profiles are reviewed by our team to keep the app safe and useful.</p>
            </div>
            <div className="spotlight-card rounded-[2rem] p-8 space-y-4 bg-white border border-border shadow-sm hover-lift">
              <h4 className="text-xl font-bold text-text-main">Data Control</h4>
              <p className="text-text-muted font-medium text-sm">Your data belongs to you. We protect chats and identity details with strong security.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="space-y-5">
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">
              App Screens
            </span>
            <h2 className="text-3xl font-extrabold leading-tight text-text-main md:text-5xl">
              Real screens. Real app flow.
            </h2>
            <p className="text-base font-medium leading-8 text-text-muted">
              See how profiles, matches, and app features look on real screens.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 sm:gap-5">
            {[
              "/zorameeto-ss-1.jpeg",
              "/zorameeto-ss-2.jpeg",
              "/zorameeto-ss-4.jpeg",
            ].map((src, index) => (
              <PhoneFrame
                key={src}
                src={src}
                alt={`ZoraMeeto product proof screen ${index + 1}`}
                className="w-full border-[5px] shadow-[0_18px_45px_rgba(28,28,30,0.12)]"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-text-main px-6 py-20 text-white lg:py-24">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-primary">
            Built For Serious Singles
          </span>
          <h2 className="text-4xl font-extrabold leading-tight md:text-6xl">
            Dating features that respect your time and privacy.
          </h2>
          <p className="max-w-2xl text-base font-medium leading-8 text-white/70">
            ZoraMeeto is made for people who want fewer distractions and better
            chances to meet someone real.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/pricing"
              className="inline-flex min-h-14 items-center justify-center rounded-2xl bg-white px-8 text-sm font-bold uppercase tracking-[0.16em] text-text-main transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white"
            >
              Get Started
            </Link>
            <Link
              href="/app-showcase"
              className="inline-flex min-h-14 items-center justify-center rounded-2xl border border-white/20 px-8 text-sm font-bold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
            >
              See Screens
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}