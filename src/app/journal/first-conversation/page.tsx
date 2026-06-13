import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Art of the First Conversation | ZoraMeeto Journal",
  description:
    "Move beyond small talk with thoughtful first-conversation principles for intentional dating.",
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
              <span className="text-[9px] font-bold uppercase tracking-[0.3em]">The Journal</span>
            </div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tighter text-text-main md:text-6xl">
              The Art of the First Conversation:
              <span className="block text-primary italic font-light">Beyond Small Talk.</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg font-medium leading-relaxed text-text-muted">
              A meaningful connection rarely begins with a perfect line. It begins with presence,
              curiosity, and the courage to ask something real.
            </p>
          </div>
        </div>
      </section>

      <article className="px-6 py-20">
        <div className="mx-auto max-w-3xl space-y-8 text-lg font-medium leading-8 text-text-muted">
          <p>
            In a world of fleeting connections, the first conversation is your opening statement. It is
            a chance to reveal not just what you do, but who you are. At ZoraMeeto, we believe in
            conversations that build, not just begin.
          </p>

          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold tracking-tight text-text-main">
              Ask Questions That Open Doors
            </h2>
            <p>
              Instead of asking what someone does, ask what problem they are most passionate about
              solving right now. This shifts the focus from a title to a purpose, and it invites a more
              revealing answer.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold tracking-tight text-text-main">
              Let the Pause Do Its Work
            </h2>
            <p>
              A moment of silence is not a void to be filled. It can be a sign that you are actually
              listening. In modern dating, that kind of attention is rare, and it is memorable.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold tracking-tight text-text-main">
              Share Something Real
            </h2>
            <p>
              Vulnerability does not mean oversharing. It means offering a small, honest signal that
              there is a real person behind the profile. When done with care, it creates trust.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold tracking-tight text-text-main">
              Look for the And
            </h2>
            <p>
              Successful people often carry more than one story. They may be a founder and a pianist,
              a surgeon and a marathon runner, a strategist and a devoted home chef. The most
              interesting part often lives after the and.
            </p>
          </section>

          <div className="rounded-[2rem] border border-border bg-surface-soft p-8">
            <p className="text-xl font-bold leading-relaxed text-text-main">
              At ZoraMeeto, every match is an invitation to a meaningful dialogue. We provide the
              platform; you bring the curiosity.
            </p>
          </div>

          <div className="pt-4">
            <Link
              href="/pricing"
              className="luxury-button inline-flex rounded-[1.5rem] bg-text-main px-10 py-5 text-xs font-bold uppercase tracking-[0.3em] text-white shadow-xl shadow-black/10 transition-all duration-700 hover:scale-105"
            >
              Explore Membership
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
