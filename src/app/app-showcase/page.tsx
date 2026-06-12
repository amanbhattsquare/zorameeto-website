import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "App Showcase | ZoraMeeto Mobile Experience",
  description:
    "Explore the real ZoraMeeto mobile experience with curated discovery, private profiles, matching flows, and a premium member journey.",
};

const screenshots = [
  {
    src: "/zorameeto-ss-1.jpeg",
    alt: "ZoraMeeto mobile app screen showing the member experience",
  },
  {
    src: "/zorameeto-ss-2.jpeg",
    alt: "ZoraMeeto mobile app screen showing profile discovery",
  },
  {
    src: "/zorameeto-ss-3.jpeg",
    alt: "ZoraMeeto mobile app screen showing a dating profile",
  },
  {
    src: "/zorameeto-ss-4.jpeg",
    alt: "ZoraMeeto mobile app screen showing app interaction details",
  },
  {
    src: "/zorameeto-ss-5.jpeg",
    alt: "ZoraMeeto mobile app screen showing the premium app interface",
  },
];

const features = [
  {
    title: "Designed Around Intent",
    desc: "Screens are structured for qualified discovery, profile depth, and deliberate action so members can move with clarity.",
    icon: "target",
  },
  {
    title: "Private By Default",
    desc: "The interface favors discretion, member control, and focused interactions without noisy social-feed behavior.",
    icon: "lock",
  },
  {
    title: "Premium Mobile Polish",
    desc: "Large visuals, readable spacing, and clear calls to action create a high-trust experience from first open.",
    icon: "verified",
  },
];

function PhoneFrame({
  screenshot,
  className = "",
  priority = false,
}: {
  screenshot: (typeof screenshots)[number];
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`relative aspect-[716/1600] overflow-hidden rounded-[2rem] border-[7px] border-text-main bg-text-main shadow-[0_28px_70px_rgba(28,28,30,0.16)] ${className}`}
    >
      <div className="absolute left-1/2 top-0 z-10 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-text-main" />
      <Image
        src={screenshot.src}
        alt={screenshot.alt}
        width={716}
        height={1600}
        priority={priority}
        sizes="(min-width: 1024px) 280px, (min-width: 640px) 240px, 68vw"
        className="h-full w-full object-cover"
      />
    </div>
  );
}

export default function AppShowcase() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/10">
      <section className="relative overflow-hidden bg-gradient-mesh px-6 pb-12 pt-32 text-center">
        <div className="absolute left-1/2 top-0 z-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-primary/5 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-4xl space-y-6 animate-fade-up">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-3 py-1.5">
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-primary">
              The Application
            </span>
          </div>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tighter text-text-main md:text-6xl">
            The <br />
            <span className="font-light italic text-primary">Atelier.</span>
          </h1>
          <p className="mx-auto max-w-xl text-base font-medium leading-relaxed text-text-muted md:text-lg">
            The ZoraMeeto mobile platform is a high-performance digital
            environment crafted for the modern individual who values depth over
            distraction.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-white px-6 py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-lg border border-border bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/[0.04]"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <span className="material-symbols-outlined text-2xl">
                  {feature.icon}
                </span>
              </div>
              <h2 className="text-xl font-extrabold leading-7 text-text-main">
                {feature.title}
              </h2>
              <p className="mt-3 text-sm font-medium leading-7 text-text-muted">
                {feature.desc}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-surface-soft/50 px-6 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {screenshots.map((screenshot, index) => (
              <article
                key={screenshot.src}
                className="group rounded-lg border border-border bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/[0.06]"
              >
                <PhoneFrame
                  screenshot={screenshot}
                  priority={index < 2}
                  className="mx-auto w-full max-w-[245px] border-[6px] shadow-[0_18px_45px_rgba(28,28,30,0.14)]"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="space-y-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">
              Launch Ready
            </span>
            <h2 className="text-3xl font-extrabold leading-tight text-text-main md:text-5xl">
              A sharper showcase for a premium dating product.
            </h2>
            <p className="text-base font-medium leading-8 text-text-muted">
              The page is now built around real visual proof, clear positioning,
              responsive phone frames, and conversion-ready calls to action.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              "Real screenshots replace stock imagery",
              "Responsive layouts for mobile and desktop",
              "Cleaner product copy for a premium audience",
              "Clear pathways to pricing and feature pages",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-lg border border-border bg-surface-soft/60 p-5"
              >
                <span className="material-symbols-outlined mt-0.5 text-xl text-primary">
                  check_circle
                </span>
                <p className="text-sm font-bold leading-6 text-text-main">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-text-main px-6 py-20 text-white lg:py-24">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-primary">
            Invitation Only
          </span>
          <h2 className="text-4xl font-extrabold leading-tight md:text-6xl">
            Bring the right members into the right experience.
          </h2>
          <p className="max-w-2xl text-base font-medium leading-8 text-white/70">
            ZoraMeeto now has an app showcase that presents the product with
            real screens, stronger trust signals, and a premium mobile story.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/pricing"
              className="inline-flex min-h-14 items-center justify-center rounded-2xl bg-white px-8 text-sm font-bold uppercase tracking-[0.16em] text-text-main transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white"
            >
              Apply for Access
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex min-h-14 items-center justify-center rounded-2xl border border-white/20 px-8 text-sm font-bold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
            >
              View Process
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
