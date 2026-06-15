import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Earn & Grow | ZoraMeeto",
  description: "Discover how you can earn rewards and grow your connections on ZoraMeeto's trusted dating platform.",
};

export default function EarnAndGrow() {
  const earningOpportunities = [
    {
      icon: "group_add",
      title: "Refer & Earn",
      desc: "Invite friends to join ZoraMeeto and earn rewards for every verified user that signs up through your unique referral link.",
      steps: ["Share your link", "Friends sign up & verify", "Earn instant rewards"]
    },
    {
      icon: "forum",
      title: "Engage & Earn",
      desc: "Stay active on the platform by initiating meaningful conversations, attending virtual events, and building genuine connections to unlock bonuses.",
      steps: ["Stay active daily", "Start quality conversations", "Collect activity points"]
    },
    {
      icon: "event",
      title: "Host Events",
      desc: "Organize and host community events, speed dating sessions, or social mixers for members and earn from event participation.",
      steps: ["Propose your event", "Get approved", "Earn from registrations"]
    }
  ];

  const benefits = [
    {
      title: "Instant Payouts",
      desc: "Withdraw your earnings directly to your bank account with our fast and secure payment system.",
      icon: "payments"
    },
    {
      title: "Transparent Tracking",
      desc: "Real-time dashboard to track all your earnings, referrals, and activity points in one place.",
      icon: "monitoring"
    },
    {
      title: "Tiered Rewards",
      desc: "Unlock higher earning percentages as you grow your network and maintain positive community standing.",
      icon: "trending_up"
    },
    {
      title: "Community Recognition",
      desc: "Get featured as a top contributor and build your reputation within the ZoraMeeto community.",
      icon: "emoji_events"
    }
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Create Your Account",
      desc: "Sign up and complete your profile verification to access all earning opportunities."
    },
    {
      step: "02",
      title: "Choose Your Path",
      desc: "Select how you want to earn - refer friends, host events, or stay active on the platform."
    },
    {
      step: "03",
      title: "Track Your Progress",
      desc: "Use your personalized dashboard to monitor earnings, referrals, and upcoming milestones."
    },
    {
      step: "04",
      title: "Withdraw & Enjoy",
      desc: "Transfer your earnings securely to your bank account whenever you want."
    }
  ];

  const testimonials = [
    {
      name: "Rahul M.",
      role: "Active Member since 2024",
      quote: "I've earned over ₹15,000 just by referring my friends. It's great to be rewarded for building meaningful connections.",
      earnings: "₹15,000+ earned"
    },
    {
      name: "Priya S.",
      role: "Event Host",
      quote: "Hosting speed dating events has been amazing. I get to meet new people while earning extra income.",
      earnings: "12 events hosted"
    },
    {
      name: "Amit K.",
      role: "Top Contributor",
      quote: "The tiered rewards system keeps me motivated. I've unlocked 20% higher earnings this quarter!",
      earnings: "Top 5% earner"
    }
  ];

  const ctaHighlights = [
    {
      icon: "verified_user",
      title: "Verified Members Only",
      desc: "Earning access opens after profile checks, activity quality review, and account approval."
    },
    {
      icon: "analytics",
      title: "Clear Progress Dashboard",
      desc: "Track referrals, activity points, eligibility status, and reward milestones in one place."
    },
    {
      icon: "account_balance_wallet",
      title: "Simple Payout Flow",
      desc: "Approved rewards can be requested through the app after payout details are confirmed."
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 px-6 overflow-hidden bg-gradient-mesh text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full z-0"></div>
        
        <div className="max-w-4xl mx-auto space-y-6 relative z-10 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 mx-auto">
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-primary">Monetize Your Network</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-text-main leading-tight">
            Earn While You <br />
            <span className="text-primary italic font-light">Connect & Grow.</span>
          </h1>
          <p className="text-base md:text-lg text-text-muted leading-relaxed font-medium max-w-xl mx-auto">
            Turn your social influence and active participation into real earnings. Build meaningful connections while growing your income on India&apos;s most trusted dating platform.
          </p>
        </div>
      </section>

      {/* Earning Opportunities Section */}
      <section className="py-16 px-6 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-text-main">
              Multiple Ways to <span className="text-primary italic font-light">Earn.</span>
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">Choose the earning path that works best for you and start monetizing your presence on our platform.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {earningOpportunities.map((opportunity, index) => (
              <div key={index} className="spotlight-card rounded-[2.5rem] p-8 bg-surface-soft/50 border border-border hover-lift transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 mb-6">
                  <span className="material-symbols-outlined text-3xl">{opportunity.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-text-main mb-3">{opportunity.title}</h3>
                <p className="text-text-muted mb-6 leading-relaxed">{opportunity.desc}</p>
                <ul className="space-y-3">
                  {opportunity.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">{stepIndex + 1}</span>
                      <span className="text-sm text-text-main">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 bg-surface-soft/30 border-b border-border">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-text-main">
              Why Choose <span className="text-primary italic font-light">ZoraMeeto?</span>
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">Industry-leading benefits that put you in control of your earnings and growth.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-[2rem] p-6 border border-border shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary mb-4">
                  <span className="material-symbols-outlined text-2xl">{benefit.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-text-main mb-2">{benefit.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Timeline */}
      <section className="py-16 px-6 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-text-main">
              Get Started in <span className="text-primary italic font-light">4 Simple Steps.</span>
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">Start your earning journey today with our straightforward onboarding process.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <div key={index} className="relative text-center">
                <div className="text-6xl font-extrabold text-primary/10 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-text-main mb-2">{item.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-6 bg-surface-soft/30 border-b border-border">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-text-main">
              Success from Our <span className="text-primary italic font-light">Community.</span>
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">Hear from members who are already earning and growing with ZoraMeeto.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="spotlight-card rounded-[2.5rem] p-8 bg-white border border-border shadow-sm hover-lift">
                <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                  {testimonial.earnings}
                </div>
                <blockquote className="text-lg font-medium text-text-main mb-6 leading-relaxed italic">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-text-main">{testimonial.name}</p>
                    <p className="text-xs text-text-muted">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto spotlight-card rounded-[3.5rem] p-8 md:p-14 lg:p-16 text-center space-y-10 relative overflow-hidden bg-text-main shadow-2xl shadow-black/10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-primary/20 to-transparent"></div>
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter text-white relative z-10 leading-tight">
            Start Earning <br />
            <span className="text-primary italic font-light">Today.</span>
          </h2>
          <p className="text-lg text-white/70 max-w-xl mx-auto font-medium relative z-10 leading-relaxed">
            Complete your profile, stay authentic, and unlock earning tools designed for verified ZoraMeeto members.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10 text-left">
            {ctaHighlights.map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center text-primary mb-5">
                  <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-white text-lg font-extrabold mb-3">{item.title}</h3>
                <p className="text-sm text-white/65 leading-6 font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="relative z-10 flex flex-wrap items-center justify-center gap-4 text-white/70">
            {["No fake activity", "Quality-first rewards", "Transparent review"].map((item) => (
              <span key={item} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.18em]">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                {item}
              </span>
            ))}
          </div>
          <div className="pt-4 relative z-10">
            <button className="bg-white text-text-main px-12 py-6 rounded-2xl font-bold text-sm uppercase tracking-widest shadow-xl hover:scale-105 transition-all">
              Get Started Now
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
