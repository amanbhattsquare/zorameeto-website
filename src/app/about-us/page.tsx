import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | ZoraMeeto",
  description:
    "Learn how ZoraMeeto helps singles build safer, smarter, and more meaningful connections.",
};

export default function AboutUs() {
  const values = [
    {
      icon: "favorite",
      title: "Meaningful Connections",
      desc: "We believe Social Networking should lead to honest conversations, real chemistry, and relationships built with intention.",
    },
    {
      icon: "security",
      title: "Safety First",
      desc: "Profile checks, privacy controls, and reporting tools help members explore Social Networking with more confidence.",
    },
    {
      icon: "diversity_3",
      title: "Inclusive Community",
      desc: "We welcome people from different cities, cultures, languages, and backgrounds who want respectful connections.",
    },
    {
      icon: "lightbulb",
      title: "Continuous Innovation",
      desc: "We keep improving matching, safety, and conversation tools based on what real members need.",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 px-6 overflow-hidden bg-gradient-mesh text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full z-0"></div>

        <div className="max-w-4xl mx-auto space-y-6 relative z-10 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 mx-auto">
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-primary">
              Our Story
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-text-main leading-tight">
            About <br />
            <span className="text-primary italic font-light">ZoraMeeto.</span>
          </h1>
          <p className="mx-auto max-w-3xl text-base font-medium leading-8 text-text-muted md:text-lg">
            ZoraMeeto is a modern Social Networking platform for adults who seek sincere,
            respectful, and meaningful connections. Built and operated by Bhatt
            Square Private Limited, the platform combines thoughtful product design,
            rigorous safety controls, and industry-standard governance to support
            authentic relationships.
          </p>
        </div>
      </section>

      {/* Real Social Networking Section */}
      <section className="py-16 px-6 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="spotlight-card rounded-[3rem] overflow-hidden bg-surface-soft/50 border border-border">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
              <div className="aspect-video lg:aspect-auto h-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1200"
                  alt="Our Team"
                  width={1200}
                  height={800}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-6 p-6 sm:p-8 lg:space-y-8 lg:p-16">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-text-main">
                  Real Social Networking, <span className="text-primary italic font-light">Real People.</span>
                </h2>
                <p className="text-text-muted leading-relaxed text-lg">
                  ZoraMeeto is designed for professionals who expect more than a
                  swipe-based experience. We deliver a premium Social Networking platform that
                  supports intelligent matching, privacy-conscious interactions, and
                  elevated communication.
                </p>
                <p className="text-text-muted leading-relaxed">
                  Our platform combines manual profile verification, curated discovery,
                  and purpose-built safety controls so members can pursue connections
                  with clarity and confidence.
                </p>
                <p className="text-text-muted leading-relaxed">
                  Every feature is crafted to help users move from first contact to
                  meaningful conversation in a secure, transparent, and respectful way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Better Way To Meet Section */}
      <section className="py-16 px-6 bg-surface-soft/30 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-text-main">
                A Better Way <span className="text-primary italic font-light">To Meet.</span>
              </h2>
              <p className="text-text-muted leading-relaxed text-lg">
                ZoraMeeto is built for discerning users who want a polished, secure,
                and thoughtfully designed Social Networking experience. Our platform combines
                modern technology with responsible safety practices.
              </p>
              <p className="text-text-muted leading-relaxed">
                We are creating a community where respect is expected, authenticity is
                rewarded, and every interaction is guided by clarity and consent.
              </p>
              <div className="grid grid-cols-1 gap-4 pt-4 min-[380px]:grid-cols-2 sm:gap-6">
                <div className="bg-white rounded-2xl p-5 sm:p-6 border border-border shadow-sm">
                  <p className="text-3xl font-extrabold text-primary sm:text-4xl">100K+</p>
                  <p className="text-sm text-text-muted mt-2 font-medium">
                    Verified members and growing
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-5 sm:p-6 border border-border shadow-sm">
                  <p className="text-3xl font-extrabold text-primary sm:text-4xl">95%</p>
                  <p className="text-sm text-text-muted mt-2 font-medium">
                    Verified profiles on the platform
                  </p>
                </div>
              </div>
            </div>
            <div className="spotlight-card rounded-3xl overflow-hidden bg-white border border-border p-4 sm:p-8 lg:rounded-[3rem]">
              <Image
                src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800"
                alt="Our Vision"
                width={800}
                height={533}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ZoraMeeto Section */}
      <section className="py-16 px-6 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-text-main">
              Why Singles Choose <span className="text-primary italic font-light">ZoraMeeto.</span>
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              A premium platform built for discerning users who want a secure,
              trusted and professionally managed Social Networking experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "verified_user",
                title: "95% REAL PROFILES",
                desc: "Every single profile on our platform has been manually verified. No catfishing, no fake accounts, no exceptions.",
              },
              {
                icon: "psychology",
                title: "AI Compatibility Matching",
                desc: "Our algorithm analyzes 100+ data points to match you with people who share your values, interests, and life goals.",
              },
              {
                icon: "language",
                title: "Indian Languages Support",
                desc: "Available in 8 major Indian languages including Hindi, Bengali, Tamil, Telugu, Marathi, Gujarati, Kannada, and Malayalam.",
              },
              {
                icon: "lock_person",
                title: "Bank-Level Security",
                desc: "Your data is protected with 256-bit encryption. We never share your personal information with third parties.",
              },
              {
                icon: "monetization_on",
                title: "Earn & Grow Program",
                desc: "Verified active members can earn by engaging in meaningful conversations, turning their time on the platform into rewards.",
              },
              {
                icon: "support_agent",
                title: "24/7 Customer Support",
                desc: "Our dedicated support team is available around the clock to address any concerns or issues you may encounter.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-surface-soft/50 rounded-[2.5rem] p-8 border border-border hover-lift transition-all duration-500 space-y-6"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-3xl">
                    {feature.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-text-main">
                  {feature.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Security Section */}
      <section className="py-16 px-6 bg-surface-soft/30 border-b border-border">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-text-main">
              Date With <span className="text-primary italic font-light">Confidence.</span>
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Your safety is not just our priority - it is our responsibility.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            <div className="spotlight-card h-full min-h-[260px] overflow-hidden rounded-3xl border border-border bg-white sm:min-h-[360px] lg:min-h-[400px] lg:rounded-[3rem]">
              <Image
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000"
                alt="Security"
                width={1000}
                height={667}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="min-h-[260px] w-full h-full object-cover sm:min-h-[360px] lg:min-h-[400px]"
              />
            </div>
            <div className="space-y-8">
              <p className="text-text-muted leading-relaxed text-lg">
                Today, safety cannot be an afterthought. At ZoraMeeto, we build
                security into every layer of the platform so members can focus on
                meeting people, not worrying about who is on the other side.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: "Manual Profile Verification",
                    desc: "Every new profile is reviewed by our team before activation - no exceptions.",
                  },
                  {
                    title: "Photo Privacy Controls",
                    desc: "Control who can see your photos, blur them for general users, and reveal them only to matches you trust.",
                  },
                  {
                    title: "Block & Report Features",
                    desc: "Instantly block any suspicious user and report inappropriate behavior with a single tap.",
                  },
                  {
                    title: "24/7 Moderation Team",
                    desc: "Our moderation team works around the clock to investigate reports and remove violating accounts immediately.",
                  },
                  {
                    title: "Secure In-App Messaging",
                    desc: "All communications are encrypted end-to-end. Your private conversations stay private.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                      <span className="material-symbols-outlined text-primary text-sm">
                        check
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-text-main">{item.title}</h4>
                      <p className="text-sm text-text-muted mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-6 bg-surface-soft/30 border-b border-border">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-text-main">
              What We <span className="text-primary italic font-light">Stand For.</span>
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Core principles that keep our product professional, safe, and user-focused.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-[2rem] p-8 border border-border shadow-sm hover-lift transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <span className="material-symbols-outlined text-3xl">
                    {value.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-text-main mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-12 px-6 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl border border-border bg-surface-soft p-6 text-sm text-text-muted shadow-sm sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="font-bold text-text-main">CEO</p>
                <p>Akshat Bhatt</p>
              </div>
              <div className="border-t border-border pt-4 sm:border-t-0 sm:border-l sm:pl-6 sm:pt-0">
                <p>5/881, Viram Khand</p>
                <p>Gomti Nagar, Lucknow. 226010</p>
              </div>
            </div>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-text-muted">
              Akshat Bhatt leads ZoraMeeto with a focus on scalable product design,
              regulatory compliance, and user-centric safety. Under his direction,
              the company is building a trusted, industry-grade Social Networking platform for
              modern adults who value authenticity, transparency, and meaningful
              connections.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
