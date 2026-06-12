import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features | ZoraMeeto Elite Dating Platform",
  description:
    "Explore ZoraMeeto features for verified dating, private discovery, high-intent matching, member safety, and a premium mobile experience.",
};

const coreFeatures = [
  {
    icon: "psychology",
    title: "Resonance Matching",
    desc: "Compatibility signals are shaped around lifestyle, intent, emotional rhythm, and long-term relationship goals.",
  },
  {
    icon: "verified_user",
    title: "Verified Members",
    desc: "Manual review helps preserve quality, reduce noise, and keep the network aligned with selective dating standards.",
  },
  {
    icon: "visibility_off",
    title: "Private Discovery",
    desc: "Members can explore with discretion, controlled visibility, and a more thoughtful path to connection.",
  },
  {
    icon: "forum",
    title: "Guided Conversation",
    desc: "Prompted introductions and cleaner profile context help people start with substance instead of small talk.",
  },
  {
    icon: "event_available",
    title: "Date Readiness",
    desc: "The experience supports clear next steps from match review to planning, so momentum is never left vague.",
  },
  {
    icon: "workspace_premium",
    title: "Premium Experience",
    desc: "Every interaction is built to feel calm, polished, and high-trust across mobile and desktop touchpoints.",
  },
];

const platformLayers = [
  {
    label: "Profile Intelligence",
    title: "Profiles Built For Depth",
    desc: "ZoraMeeto profiles make values, lifestyle, ambition, and expectations easier to scan before a member commits attention.",
    icon: "badge",
  },
  {
    label: "Match Quality",
    title: "Fewer Matches, Better Fit",
    desc: "The platform favors intentional recommendations over endless browsing, helping members focus on higher-signal connections.",
    icon: "filter_alt",
  },
  {
    label: "Member Safety",
    title: "Trust At Every Step",
    desc: "Verification, controlled visibility, and privacy-first flows keep the experience professional and respectful.",
    icon: "shield_lock",
  },
];

const privacyFeatures = [
  "Controlled profile visibility",
  "Verified network access",
  "Discreet mobile experience",
  "Quality-focused reporting paths",
  "No noisy public social feed",
  "Intent-first member journey",
];

const journey = [
  {
    step: "01",
    title: "Apply",
    desc: "Members begin with a selective access flow designed to preserve the quality of the community.",
  },
  {
    step: "02",
    title: "Verify",
    desc: "Identity, intent, and profile quality are reviewed before the dating experience opens fully.",
  },
  {
    step: "03",
    title: "Discover",
    desc: "Curated recommendations help members spend less time searching and more time evaluating real potential.",
  },
  {
    step: "04",
    title: "Connect",
    desc: "The product supports focused conversations and clear next steps toward meaningful meetings.",
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
              The Capabilities
            </span>
          </div>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tighter text-text-main md:text-6xl">
            Precision <br />
            <span className="font-light italic text-primary">Innovation.</span>
          </h1>
          <p className="mx-auto max-w-xl text-base font-medium leading-relaxed text-text-muted md:text-lg">
            A high-performance suite of features designed for the discerning
            individual. Every touchpoint is optimized for depth, security, and
            resonant connection.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-white px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl space-y-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">
              Core Capabilities
            </span>
            <h2 className="text-3xl font-extrabold leading-tight text-text-main md:text-5xl">
              More than matching. A complete trust layer.
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
              Privacy System
            </span>
            <div className="space-y-5">
              <h2 className="text-3xl font-extrabold leading-tight text-text-main md:text-5xl">
                Discretion is designed into the product.
              </h2>
              <p className="max-w-2xl text-base font-medium leading-8 text-text-muted">
                ZoraMeeto avoids public-feed behavior and gives members a calmer,
                more controlled environment for exploring potential connections.
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
        <div className="mx-auto max-w-7xl space-y-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">
                Member Journey
              </span>
              <h2 className="text-3xl font-extrabold leading-tight text-text-main md:text-5xl">
                A guided path from access to connection.
              </h2>
            </div>
            <Link
              href="/how-it-works"
              className="inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-2xl border border-border bg-white px-6 text-xs font-bold uppercase tracking-[0.16em] text-text-main shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-text-main"
            >
              Full Process
              <span className="material-symbols-outlined text-base">
                arrow_forward
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {journey.map((item) => (
              <article
                key={item.step}
                className="rounded-lg border border-border bg-white p-7 shadow-sm"
              >
                <p className="text-sm font-extrabold text-primary">
                  {item.step}
                </p>
                <h3 className="mt-8 text-2xl font-extrabold text-text-main">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-7 text-text-muted">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="space-y-5">
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">
              Product Proof
            </span>
            <h2 className="text-3xl font-extrabold leading-tight text-text-main md:text-5xl">
              Real screens. Real interaction patterns.
            </h2>
            <p className="text-base font-medium leading-8 text-text-muted">
              The feature set is backed by a live mobile experience with clear
              profile surfaces, focused discovery, and a refined visual system.
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
            Built For High-Intent Members
          </span>
          <h2 className="text-4xl font-extrabold leading-tight md:text-6xl">
            Dating features that respect time, privacy, and standards.
          </h2>
          <p className="max-w-2xl text-base font-medium leading-8 text-white/70">
            ZoraMeeto is shaped for people who want fewer distractions, better
            context, and a more deliberate path to meaningful connection.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/pricing"
              className="inline-flex min-h-14 items-center justify-center rounded-2xl bg-white px-8 text-sm font-bold uppercase tracking-[0.16em] text-text-main transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white"
            >
              Request Access
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
