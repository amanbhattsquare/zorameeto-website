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
            href="/journal"
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
              interest, and one honest question. Mastering the first chat is key to finding a serious partner on ZoraMeeto.
            </p>
          </div>
        </div>
      </section>

      <article className="px-6 py-20">
        <div className="mx-auto max-w-3xl space-y-8 text-lg font-medium leading-8 text-text-muted">
          <p>
            The first message on a dating app sets the tone for your potential connection. It's not about being clever or having a perfect pickup line; it's about showing genuine interest and opening the door for a meaningful exchange. At ZoraMeeto, we believe good conversations are the foundation of lasting relationships.
          </p>

          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold tracking-tight text-text-main">
              1. Ask Thoughtful, Open-Ended Questions
            </h2>
            <p>
              Move beyond generic "How are you?" or "What do you do?" questions. Instead, dive into their profile and pick out something specific that genuinely interests you. For example:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>
                If they mention a hobby like hiking: "I saw you enjoy hiking! What's been your favorite trail or most memorable outdoor adventure?"
              </li>
              <li>
                If they're passionate about a cause: "Your work with [cause] sounds really inspiring. What motivated you to get involved?"
              </li>
              <li>
                Ask about their aspirations or passions: "What's something you're currently building or excited about learning?"
              </li>
            </ul>
            <p>Thoughtful questions show you've read their profile and value their unique experiences.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold tracking-tight text-text-main">
              2. Share a Little About Yourself
            </h2>
            <p>
              Conversation is a two-way street. After asking a question, briefly share a relevant, honest detail about yourself. This makes the interaction feel more balanced and gives the other person something to respond to.
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>
                "I also love trying new coffee shops. Just discovered a great one downtown that serves amazing cold brew."
              </li>
              <li>
                "I've always wanted to visit [place they mentioned]. What was the highlight of your trip there?"
              </li>
            </ul>
            <p>Keep it concise; the goal is to spark further dialogue, not to write a novel.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold tracking-tight text-text-main">
              3. Listen Actively and Read Carefully
            </h2>
            <p>
              Avoid rushing your replies or crafting responses that feel rehearsed. Take your time to read their message fully, understand their tone, and then formulate a thoughtful response. This demonstrates respect and genuine engagement.
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>
                Pay attention to subtle cues or interests they mention, even if they're not directly answering your question.
              </li>
              <li>
                Acknowledge what they've said before moving on to your next point or question.
              </li>
            </ul>
            <p>In a world of fast-paced communication, a careful, considered response stands out.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold tracking-tight text-text-main">
              4. Keep it Positive and Respectful
            </h2>
            <p>
              Maintain a positive and respectful tone throughout your conversation. Avoid negativity, complaining, or overly personal topics in the initial stages. Focus on shared interests, positive experiences, and discovering common ground.
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>
                Steer clear of controversial subjects until you've established a comfortable rapport.
              </li>
              <li>
                Always respect their boundaries and communication style.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold tracking-tight text-text-main">
              5. Know When to Suggest a Next Step
            </h2>
            <p>
              If the conversation flows well and you feel a connection, don't be afraid to suggest moving to the next stage. This could be a voice call, video call, or even meeting in person if both parties are comfortable and verified.
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>
                "I'm really enjoying this chat. Would you be open to a quick voice call sometime this week?"
              </li>
              <li>
                "Your stories about [topic] are fascinating. Maybe we could grab coffee and continue this conversation?"
              </li>
            </ul>
            <p>Timing is key; suggest a next step when the conversation has natural momentum, but don't pressure them.</p>
          </section>

          <div className="rounded-[2rem] border border-border bg-surface-soft p-8">
            <p className="text-xl font-bold leading-relaxed text-text-main">
              At ZoraMeeto, we provide a platform for serious connections. Your genuine interest and honest communication are the most powerful tools you have to build something real. Go beyond the swipe; make every chat count.
            </p>
          </div>

          <div className="pt-4 flex justify-center">
            <Link
              href="/"
              className="luxury-button inline-flex rounded-[1.5rem] bg-text-main px-10 py-5 text-xs font-bold uppercase tracking-[0.3em] text-white shadow-xl shadow-black/10 transition-all duration-700 hover:scale-105"
            >
              Back to Journal
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
