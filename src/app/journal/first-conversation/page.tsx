import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Start a Good First Chat | ZoraMeeto",
  description:
    "Simple first-chat tips for serious dating on ZoraMeeto.",
};

export default function FirstConversationPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="relative overflow-hidden border-b border-border bg-mesh-ultra px-6 pb-20 pt-32">
        <div className="absolute left-1/2 top-16 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
        <div className="relative z-10 mx-auto max-w-4xl space-y-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-4 py-2 text-[9px] font-extrabold uppercase tracking-[0.3em] text-text-muted shadow-sm transition-all hover:border-primary hover:text-primary"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Journal
          </Link>

          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-primary">
              <span className="text-[9px] font-bold uppercase tracking-[0.3em]">Dating Tips</span>
            </div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tighter text-text-main md:text-6xl">
              How to Start a Good First Chat:
              <span className="block text-primary italic font-light">Go Beyond Small Talk.</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg font-medium leading-relaxed text-text-muted">
              A good connection does not need a perfect line. It starts with attention,
              interest, and one honest question.
            </p>
          </div>
        </div>
      </section>

      <article className="px-6 py-20">
        <div className="mx-auto max-w-3xl space-y-8 text-lg font-medium leading-8 text-text-muted">
          <p>
            In dating apps, the first chat matters. It helps the other person understand not only
            what you do, but also what kind of person you are. At ZoraMeeto, we believe good
            conversations build trust.
          </p>

          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold tracking-tight text-text-main">
              Ask Better Questions
            </h2>
            <p>
              Instead of only asking what someone does, ask what they enjoy, what they are building,
              or what kind of life they want. Simple questions can lead to better answers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold tracking-tight text-text-main">
              Do Not Rush the Chat
            </h2>
            <p>
              You do not need to reply like an interview. Listen, read properly, and respond with care.
              That kind of attention feels rare and respectful.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold tracking-tight text-text-main">
              Share Something Honest
            </h2>
            <p>
              You do not need to share too much. Just share one honest detail about yourself. It helps
              the other person feel they are talking to a real person.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold tracking-tight text-text-main">
              Notice the Full Person
            </h2>
            <p>
              People are more than their job title. Someone may be a founder and a music lover, a
              doctor and a runner, or a manager and a home chef. Ask about the full person.
            </p>
          </section>

          <div className="rounded-[2rem] border border-border bg-surface-soft p-8">
            <p className="text-xl font-bold leading-relaxed text-text-main">
              At ZoraMeeto, every match is a chance to start a real conversation. We provide the
              app; you bring the interest and honesty.
            </p>
          </div>

          <div className="pt-4">
            <Link
              href="/"
              className="luxury-button inline-flex rounded-[1.5rem] bg-text-main px-10 py-5 text-xs font-bold uppercase tracking-[0.3em] text-white shadow-xl shadow-black/10 transition-all duration-700 hover:scale-105"
            >
              See Plans
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
