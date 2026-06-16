import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Zora Journal | Stories & Dating Blogs | ZoraMeeto",
  description:
    "Read ZoraMeeto success stories, dating guidance, safety tips, and relationship blogs for serious singles.",
};

export default function LoveStories() {
  const featuredStory = {
    names: "Ananya & Vikram",
    location: "Mumbai",
    timeline: "Matched in 21 days",
    img: "/success-story-elite.png",
    quote:
      "ZoraMeeto helped us avoid random chats and meet with clear intention. We found something real because the match felt thoughtful from the start.",
  };

  const stories = [
    {
      names: "Priya & Arjun",
      tag: "Values-first match",
      img: "/zora_moments_lifestyle_1778566312204.png",
      quote: "The app helped us focus on the values that matter. Our first chat already felt easy and serious.",
    },
    {
      names: "Meera & Kabir",
      tag: "Verified connection",
      img: "/success-story-elite.png",
      quote: "Finally, an app that respects my time. We matched for the right reasons and moved at a comfortable pace.",
    },
    {
      names: "Sonal & Rajiv",
      tag: "Second chance story",
      img: "/app-showcase-premium.png",
      quote: "It is never too late to meet someone good. ZoraMeeto gave us a safe way to begin again.",
    },
  ];

  const blogs = [
    {
      category: "Dating Tips",
      title: "How to Start a Good First Chat",
      desc: "A practical guide to opening conversations with interest, respect, and confidence.",
      href: "/journal/first-conversation",
      readTime: "4 min read",
      icon: "forum",
    },
    {
      category: "Safety",
      title: "What a Healthy Online Match Should Feel Like",
      desc: "Signals of trust, comfort, and mutual effort before you move a conversation forward.",
      href: "#",
      readTime: "5 min read",
      icon: "verified_user",
    },
    {
      category: "Relationships",
      title: "Dating With Intention Without Rushing",
      desc: "How to stay open, ask better questions, and build a connection at the right pace.",
      href: "#",
      readTime: "6 min read",
      icon: "favorite",
    },
  ];


  const editorialStandards = [
    {
      icon: "fact_check",
      title: "Reviewed Before Publishing",
      desc: "Stories and guidance are checked for clarity, privacy, and member safety before they appear in the journal.",
    },
    {
      icon: "lock",
      title: "Privacy Comes First",
      desc: "Member names, photos, locations, and details are shared only when consent is clear and appropriate.",
    },
    {
      icon: "psychology",
      title: "Advice With Context",
      desc: "Blogs focus on practical dating behavior, respectful communication, and safer decision-making.",
    },
  ];

  const submissionSteps = [
    "Share your match story",
    "Consent and details are reviewed",
    "Approved stories get featured",
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-mesh px-6 pb-16 pt-32 text-center">
        <div className="absolute left-1/2 top-0 z-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/5 blur-[110px]"></div>

        <div className="relative z-10 mx-auto max-w-5xl space-y-8 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-2">
            <span className="material-symbols-outlined text-sm text-primary">auto_stories</span>
            <span className="text-[9px] font-extrabold uppercase tracking-[0.3em] text-primary">
              The Zora Journal
            </span>
          </div>

          <div className="space-y-5">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tighter text-text-main md:text-6xl">
              Real Stories,
              <span className="block text-primary italic font-light">Better Dating Advice.</span>
            </h1>
            <p className="mx-auto max-w-2xl text-base font-semibold leading-8 text-text-muted md:text-lg">
              Read verified success stories, practical dating blogs, and safety-led guidance for people who want serious relationships.
            </p>
          </div>

          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              ["3K+", "Verified stories reviewed"],
              ["4.9/5", "Member satisfaction"],
              ["Weekly", "Fresh dating blogs"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-3xl border border-border bg-white/80 p-5 shadow-sm backdrop-blur">
                <p className="text-2xl font-extrabold tracking-tight text-text-main">{value}</p>
                <p className="mt-1 text-[10px] font-extrabold uppercase tracking-[0.22em] text-text-muted">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="border-b border-border bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl space-y-12">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl space-y-4">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.32em] text-primary">Featured Story</p>
              <h2 className="text-3xl font-extrabold tracking-tighter text-text-main md:text-5xl">
                A thoughtful match that became a real commitment.
              </h2>
            </div>
            <Link
              href="/journal/first-conversation"
              className="inline-flex w-fit items-center gap-2 rounded-2xl border border-border bg-surface-soft px-5 py-3 text-xs font-extrabold uppercase tracking-[0.22em] text-text-main transition-all hover:border-primary hover:text-primary"
            >
              Read Blogs
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>

          <div className="overflow-hidden rounded-[3rem] border border-border bg-surface-soft shadow-xl shadow-black/[0.03]">
            <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="min-h-[320px] overflow-hidden bg-surface-soft lg:min-h-[560px]">
                <Image
                  src={featuredStory.img}
                  alt={featuredStory.names}
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col justify-center space-y-8 p-8 md:p-12 lg:p-16">
                <div className="flex flex-wrap gap-3">
                  {[featuredStory.location, featuredStory.timeline, "Verified match"].map((item) => (
                    <span key={item} className="rounded-full bg-white px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.22em] text-text-muted">
                      {item}
                    </span>
                  ))}
                </div>
                <blockquote className="text-2xl font-extrabold italic leading-tight tracking-tight text-text-main md:text-4xl">
                  &quot;{featuredStory.quote}&quot;
                </blockquote>
                <div>
                  <p className="text-2xl font-extrabold text-text-main">{featuredStory.names}</p>
                  <p className="mt-1 text-[10px] font-extrabold uppercase tracking-[0.32em] text-primary">
                    Smart matching success
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Cards */}
      <section className="border-b border-border bg-surface-soft/30 px-6 py-20">
        <div className="mx-auto max-w-7xl space-y-12">
          <div className="max-w-2xl space-y-4">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.32em] text-primary">Success Stories</p>
            <h2 className="text-3xl font-extrabold tracking-tighter text-text-main md:text-5xl">
              Real members. Real progress. Real conversations.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {stories.map((story) => (
              <article key={story.names} className="group overflow-hidden rounded-[2rem] border border-border bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/[0.04]">
                <div className="aspect-[4/3] overflow-hidden bg-surface-soft">
                  <Image
                    src={story.img}
                    alt={story.names}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-5 p-7">
                  <span className="inline-flex rounded-full bg-primary/10 px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.22em] text-primary">
                    {story.tag}
                  </span>
                  <p className="text-lg font-bold leading-7 text-text-main">&quot;{story.quote}&quot;</p>
                  <p className="text-base font-extrabold text-text-main">{story.names}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="border-b border-border bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl space-y-12">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl space-y-4">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.32em] text-primary">Dating Blogs</p>
              <h2 className="text-3xl font-extrabold tracking-tighter text-text-main md:text-5xl">
                Practical advice for safer, smarter dating.
              </h2>
              <p className="text-base font-semibold leading-8 text-text-muted">
                Helpful reads for better first chats,  profiles, safer decisions, and relationship-ready dating.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {blogs.map((blog) => (
              <Link
                key={blog.title}
                href={blog.href}
                className="group flex min-h-[320px] flex-col justify-between rounded-[2rem] border border-border bg-surface-soft p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary hover:bg-white hover:shadow-xl hover:shadow-black/[0.04]"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/10 bg-primary/10 text-primary">
                      <span className="material-symbols-outlined text-2xl">{blog.icon}</span>
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-text-muted">
                      {blog.readTime}
                    </span>
                  </div>
                  <div className="space-y-3">
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-primary">{blog.category}</p>
                    <h3 className="text-2xl font-extrabold leading-tight tracking-tight text-text-main">{blog.title}</h3>
                    <p className="text-sm font-semibold leading-7 text-text-muted">{blog.desc}</p>
                  </div>
                </div>
                <div className="mt-8 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.22em] text-text-main transition-colors group-hover:text-primary">
                  Read Article
                  <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">arrow_forward</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Standards */}
      <section className="border-b border-border bg-surface-soft/30 px-6 py-20">
        <div className="mx-auto max-w-7xl space-y-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="space-y-5">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.32em] text-primary">Editorial Standard</p>
              <h2 className="text-3xl font-extrabold tracking-tighter text-text-main md:text-5xl">
                Built for trust, not gossip.
              </h2>
              <p className="text-base font-semibold leading-8 text-text-muted">
                The journal is designed to help serious singles learn from real experiences while protecting member dignity and safety.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {editorialStandards.map((item) => (
                <div key={item.title} className="rounded-[2rem] border border-border bg-white p-6 shadow-sm">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="mb-3 text-lg font-extrabold leading-tight text-text-main">{item.title}</h3>
                  <p className="text-sm font-semibold leading-7 text-text-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-border bg-white p-6 shadow-sm md:p-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="space-y-3">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-primary">Share Your Story</p>
                <h3 className="text-2xl font-extrabold tracking-tight text-text-main">
                  Have a ZoraMeeto success story worth featuring?
                </h3>
                <p className="max-w-2xl text-sm font-semibold leading-7 text-text-muted">
                  Submit your story for review. We only publish member experiences after consent and basic verification.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                {submissionSteps.map((step, index) => (
                  <div key={step} className="flex items-center gap-3 rounded-2xl bg-surface-soft px-5 py-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-extrabold text-white">
                      {index + 1}
                    </span>
                    <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-text-main">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[3.5rem] bg-text-main p-8 text-center shadow-2xl shadow-black/10 md:p-14 lg:p-16">
          <div className="mx-auto max-w-3xl space-y-8">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.32em] text-primary">Your Story Starts Here</p>
            <h2 className="text-4xl font-extrabold leading-tight tracking-tighter text-white lg:text-6xl">
              Meet with intention.
              <span className="block text-primary italic font-light">Grow with guidance.</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg font-semibold leading-8 text-white/70">
              Join serious singles who want safer matches, better conversations, and practical support at every stage.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/"
                className="rounded-2xl bg-white px-10 py-5 text-xs font-extrabold uppercase tracking-[0.24em] text-text-main shadow-xl transition-all hover:scale-105"
              >
                Get Started
              </Link>
              <Link
                href="/journal/first-conversation"
                className="rounded-2xl border border-white/15 px-10 py-5 text-xs font-extrabold uppercase tracking-[0.24em] text-white transition-all hover:border-primary hover:text-primary"
              >
                Read Blog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
