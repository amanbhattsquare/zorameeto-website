import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How ZoraMeeto Works",
  description: "Learn how ZoraMeeto verifies users, suggests matches, protects privacy, and lets verified users earn money.",
};

export default function HowItWorks() {
  const steps = [
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
  ];

  const earnSteps = [
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
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Simple Center-Aligned Compact Hero */}
      <section className="relative pt-32 pb-12 px-6 overflow-hidden bg-gradient-mesh text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full z-0"></div>
        
        <div className="max-w-4xl mx-auto space-y-6 relative z-10 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 mx-auto">
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-primary">How It Works</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-text-main leading-tight">
            How <br />
            <span className="text-primary italic font-light">ZoraMeeto Works.</span>
          </h1>
          <p className="text-base md:text-lg text-text-muted leading-relaxed font-medium max-w-xl mx-auto">
            ZoraMeeto helps you create a profile, verify your identity, find better matches, and chat safely.
          </p>
        </div>
      </section>

      {/* Steps Grid - Compact Mode */}
      <section className="py-16 px-6 bg-surface-soft/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="spotlight-card rounded-[2.5rem] p-8 space-y-6 relative overflow-hidden group bg-white border border-border hover-lift shadow-sm">
                <span className="text-6xl font-bold text-text-main/[0.03] absolute -top-2 -right-2">{step.no}</span>
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <span className="material-symbols-outlined text-xl">{step.icon}</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold tracking-tight text-text-main leading-tight">{step.title}</h3>
                  <p className="text-text-muted font-medium leading-relaxed text-xs">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Earn Section */}
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
              {earnSteps.map((step) => (
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

      {/* Trust Section - Compact Mode */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter text-text-main leading-tight">
            Built on <span className="text-primary italic font-light">Trust.</span>
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
          <div className="pt-4">
            <button className="luxury-button px-12 py-5 rounded-xl font-bold text-xs uppercase tracking-widest shadow-xl shadow-primary/20">
              Start Now
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
