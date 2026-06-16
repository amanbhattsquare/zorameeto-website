import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us | ZoraMeeto",
  description:
    "Contact ZoraMeeto for support, safety reports, partnerships, billing questions, and app assistance.",
};

const contactMethods = [
  {
    icon: "support_agent",
    label: "Member Support",
    title: "support@zorameeto.com",
    desc: "For account help, app issues, billing questions, and general support.",
    href: "mailto:support@zorameeto.com",
  },
  {
    icon: "shield_person",
    label: "Safety Team",
    title: "safety@zorameeto.com",
    desc: "For urgent safety concerns, suspicious profiles, reports, or moderation requests.",
    href: "mailto:safety@zorameeto.com",
  },
  {
    icon: "lock",
    label: "Privacy Desk",
    title: "privacy@zorameeto.com",
    desc: "For privacy questions, data requests, account deletion, and legal notices.",
    href: "mailto:privacy@zorameeto.com",
  },
];

const inquiryTypes = [
  "Account Support",
  "Safety Report",
  "Billing Question",
  "Partnership",
  "Media Request",
  "Feedback",
];

const supportTopics = [
  {
    icon: "verified_user",
    title: "Profile & Verification",
    desc: "Get help with profile review, verification, login access, and account status.",
  },
  {
    icon: "payments",
    title: "Plans & Payments",
    desc: "Ask about subscriptions, billing, refunds, upgrades, and premium access.",
  },
  {
    icon: "report",
    title: "Safety & Reports",
    desc: "Report fake profiles, harassment, unsafe behavior, spam, or policy concerns.",
  },
  {
    icon: "handshake",
    title: "Business & Partnerships",
    desc: "Connect with us for brand, campus, creator, event, or media collaborations.",
  },
];

const responseSteps = [
  "Choose the right topic",
  "Share clear details",
  "Our team reviews it",
  "You receive a reply",
];

export default function ContactUs() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/10">
      <section className="relative overflow-hidden border-b border-border bg-gradient-mesh px-6 pb-16 pt-32 text-center">
        <div className="absolute left-1/2 top-0 z-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/5 blur-[110px]" />

        <div className="relative z-10 mx-auto max-w-4xl space-y-7 animate-fade-up">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-2">
            <span className="material-symbols-outlined text-sm text-primary">
              alternate_email
            </span>
            <span className="text-[9px] font-extrabold uppercase tracking-[0.3em] text-primary">
              Contact ZoraMeeto
            </span>
          </div>

          <div className="space-y-5">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tighter text-text-main md:text-6xl">
              We are here to
              <span className="block text-primary italic font-light">help you connect safely.</span>
            </h1>
            <p className="mx-auto max-w-2xl text-base font-semibold leading-8 text-text-muted md:text-lg">
              Have a question about your account, safety, payments, partnerships,
              or the app experience? Send us a message and the right ZoraMeeto
              team will help.
            </p>
          </div>

          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              ["24/7", "Safety monitoring"],
              ["48 hrs", "Typical response"],
              ["100%", "Private support"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-3xl border border-border bg-white/80 p-5 shadow-sm backdrop-blur"
              >
                <p className="text-2xl font-extrabold tracking-tight text-text-main">
                  {value}
                </p>
                <p className="mt-1 text-[10px] font-extrabold uppercase tracking-[0.22em] text-text-muted">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-white px-6 py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-3">
          {contactMethods.map((method) => (
            <Link
              key={method.label}
              href={method.href}
              className="group rounded-[2rem] border border-border bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary hover:shadow-xl hover:shadow-black/[0.04]"
            >
              <div className="mb-7 flex items-center justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-white">
                  <span className="material-symbols-outlined text-2xl">
                    {method.icon}
                  </span>
                </div>
                <span className="material-symbols-outlined text-xl text-text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary">
                  arrow_forward
                </span>
              </div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-primary">
                {method.label}
              </p>
              <h2 className="mt-3 text-xl font-extrabold tracking-tight text-text-main">
                {method.title}
              </h2>
              <p className="mt-4 text-sm font-semibold leading-7 text-text-muted">
                {method.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-b border-border bg-surface-soft/30 px-6 py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-8">
            <div className="space-y-5">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.32em] text-primary">
                Send a Message
              </p>
              <h2 className="text-3xl font-extrabold leading-tight tracking-tighter text-text-main md:text-5xl">
                Tell us what you need. We will route it to the right team.
              </h2>
              <p className="max-w-xl text-base font-semibold leading-8 text-text-muted">
                Include your registered email or phone number when account access
                is involved. For safety concerns, add screenshots or profile
                details when available.
              </p>
            </div>

            <div className="rounded-[2rem] border border-primary/20 bg-primary/5 p-6">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary text-white">
                  <span className="material-symbols-outlined text-xl">
                    priority_high
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-text-main">
                    Need urgent safety help?
                  </h3>
                  <p className="mt-2 text-sm font-semibold leading-7 text-text-muted">
                    Use the in-app report and block tools first, then email
                    safety@zorameeto.com with the profile details. Our safety team
                    gives urgent reports priority.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {responseSteps.map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-white p-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-text-main text-xs font-extrabold text-white">
                    {index + 1}
                  </span>
                  <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-text-main">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <form className="rounded-[2.5rem] border border-border bg-white p-6 shadow-xl shadow-black/[0.04] md:p-8">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <label className="space-y-2">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-text-muted">
                  Full Name
                </span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="min-h-14 w-full rounded-2xl border border-border bg-surface-soft px-5 text-sm font-semibold text-text-main outline-none transition-all placeholder:text-text-muted/50 focus:border-primary focus:bg-white"
                />
              </label>

              <label className="space-y-2">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-text-muted">
                  Email Address
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="min-h-14 w-full rounded-2xl border border-border bg-surface-soft px-5 text-sm font-semibold text-text-main outline-none transition-all placeholder:text-text-muted/50 focus:border-primary focus:bg-white"
                />
              </label>

              <label className="space-y-2">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-text-muted">
                  Phone Number
                </span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 98765 43210"
                  className="min-h-14 w-full rounded-2xl border border-border bg-surface-soft px-5 text-sm font-semibold text-text-main outline-none transition-all placeholder:text-text-muted/50 focus:border-primary focus:bg-white"
                />
              </label>

              <label className="space-y-2">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-text-muted">
                  Inquiry Type
                </span>
                <select
                  name="type"
                  defaultValue=""
                  className="min-h-14 w-full rounded-2xl border border-border bg-surface-soft px-5 text-sm font-semibold text-text-main outline-none transition-all focus:border-primary focus:bg-white"
                >
                  <option value="" disabled>
                    Select a topic
                  </option>
                  {inquiryTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </label>

              <label className="space-y-2 sm:col-span-2">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-text-muted">
                  Subject
                </span>
                <input
                  type="text"
                  name="subject"
                  placeholder="How can we help?"
                  className="min-h-14 w-full rounded-2xl border border-border bg-surface-soft px-5 text-sm font-semibold text-text-main outline-none transition-all placeholder:text-text-muted/50 focus:border-primary focus:bg-white"
                />
              </label>

              <label className="space-y-2 sm:col-span-2">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-text-muted">
                  Message
                </span>
                <textarea
                  name="message"
                  rows={7}
                  placeholder="Share the details here..."
                  className="w-full resize-none rounded-2xl border border-border bg-surface-soft px-5 py-4 text-sm font-semibold leading-7 text-text-main outline-none transition-all placeholder:text-text-muted/50 focus:border-primary focus:bg-white"
                />
              </label>
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs font-semibold leading-6 text-text-muted">
                This form is ready for your backend integration. You can also
                email us directly for immediate support.
              </p>
              <button
                type="button"
                className="inline-flex min-h-14 shrink-0 items-center justify-center gap-2 rounded-2xl bg-text-main px-7 text-xs font-extrabold uppercase tracking-[0.2em] text-white shadow-xl shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:bg-primary"
              >
                Send Message
                <span className="material-symbols-outlined text-base">send</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="border-b border-border bg-white px-6 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl space-y-12">
          <div className="max-w-3xl space-y-4">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.32em] text-primary">
              Support Categories
            </p>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tighter text-text-main md:text-5xl">
              Fast answers start with the right team.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {supportTopics.map((topic) => (
              <article
                key={topic.title}
                className="rounded-[2rem] border border-border bg-surface-soft/60 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-primary hover:bg-white hover:shadow-xl hover:shadow-black/[0.04]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-2xl">
                    {topic.icon}
                  </span>
                </div>
                <h3 className="text-xl font-extrabold leading-tight text-text-main">
                  {topic.title}
                </h3>
                <p className="mt-4 text-sm font-semibold leading-7 text-text-muted">
                  {topic.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-text-main px-6 py-20 text-white lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl space-y-5">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.32em] text-primary">
              Before You Write
            </p>
            <h2 className="text-4xl font-extrabold leading-tight tracking-tighter md:text-6xl">
              Need policy details first?
            </h2>
            <p className="text-base font-semibold leading-8 text-white/70">
              Review our privacy policy and terms for data requests, account
              rules, billing information, and safety standards.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
            <Link
              href="/privacy-policy"
              className="inline-flex min-h-14 items-center justify-center rounded-2xl bg-white px-8 text-xs font-extrabold uppercase tracking-[0.2em] text-text-main transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="inline-flex min-h-14 items-center justify-center rounded-2xl border border-white/15 px-8 text-xs font-extrabold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
