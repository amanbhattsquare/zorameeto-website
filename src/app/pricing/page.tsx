import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Membership Plans | ZoraMeeto",
  description: "Choose a ZoraMeeto plan that fits your dating needs.",
};

export default function Pricing() {
  const tiers = [
    {
      name: "Free",
      price: "INR 0",
      period: "/ lifetime",
      features: ["Basic Profile", "3 Suggested Matches / Day", "Limited Requests"],
      button: "Join Free",
      popular: false
    },
    {
      name: "Plus",
      price: "INR 499",
      period: "/ month",
      features: ["Unlimited Matches", "See Who Likes You", "Weekly Profile Boost", "Profile Insights", "Priority Support"],
      button: "Choose Plus",
      popular: true
    },
    {
      name: "Premium",
      price: "INR 999",
      period: "/ month",
      features: ["Personal Support", "Dating Advisor", "VIP Events", "Incognito Mode", "Advanced Privacy"],
      button: "Choose Premium",
      popular: false
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      <section className="relative pt-32 pb-12 px-6 overflow-hidden bg-gradient-mesh text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full z-0"></div>

        <div className="max-w-4xl mx-auto space-y-6 relative z-10 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 mx-auto">
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-primary">Membership</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-text-main leading-tight">
            Simple <br />
            <span className="text-primary italic font-light">Plans.</span>
          </h1>
          <p className="text-base md:text-lg text-text-muted leading-relaxed font-medium max-w-xl mx-auto">
            Pick the plan that fits how you want to date. Start free, then upgrade when you need more features.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-surface-soft/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {tiers.map((tier, i) => (
              <div key={i} className={`spotlight-card relative flex flex-col justify-between rounded-3xl border border-border bg-white p-6 shadow-sm group hover-lift sm:p-8 lg:rounded-[3rem] lg:p-10 ${tier.popular ? "border-primary/50 ring-1 ring-primary/20 shadow-xl shadow-primary/10" : ""}`}>
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-primary text-white text-[9px] font-bold uppercase tracking-widest rounded-full shadow-lg shadow-primary/40">
                    Most Popular
                  </div>
                )}
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold tracking-tighter text-text-main">{tier.name}</h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-extrabold text-text-main tracking-tight">{tier.price}</span>
                      <span className="text-text-muted text-[10px] font-bold uppercase tracking-widest">{tier.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4">
                    {tier.features.map(feature => (
                      <li key={feature} className="flex items-center gap-3 text-text-muted font-medium text-sm">
                        <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-10">
                  <button className={`w-full py-5 rounded-xl font-bold uppercase tracking-widest text-[10px] transition-all ${tier.popular ? "luxury-button" : "bg-surface border border-border text-text-main hover:bg-border"}`}>
                    {tier.button}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter text-center mb-16 text-text-main leading-tight">Plan Comparison</h2>
          <div className="spotlight-card overflow-x-auto rounded-3xl border border-border bg-white shadow-xl shadow-black/[0.01] lg:rounded-[3rem]">
            <table className="w-full min-w-[640px] text-left">
              <thead>
                <tr className="border-b border-border bg-surface-soft">
                  <th className="p-5 sm:p-8 text-[9px] font-bold uppercase tracking-[0.3em] text-text-muted">Features</th>
                  <th className="p-5 sm:p-8 text-[9px] font-bold uppercase tracking-[0.3em] text-text-muted text-center">Free</th>
                  <th className="p-5 sm:p-8 text-[9px] font-bold uppercase tracking-[0.3em] text-primary text-center">Plus</th>
                  <th className="p-5 sm:p-8 text-[9px] font-bold uppercase tracking-[0.3em] text-text-muted text-center">Premium</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { name: "Profile Review", f: "Yes", c: "Yes", ic: "Yes" },
                  { name: "Match Quality", f: "Basic", c: "Better", ic: "Best" },
                  { name: "Reach", f: "Local", c: "City", ic: "Wide" },
                  { name: "Support", f: "Basic", c: "Priority", ic: "Personal" }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-surface-soft/50 transition-colors">
                    <td className="p-5 sm:p-8 text-sm font-bold text-text-main uppercase tracking-widest">{row.name}</td>
                    <td className="p-5 sm:p-8 text-center text-text-muted font-medium text-sm">{row.f}</td>
                    <td className="p-5 sm:p-8 text-center text-primary font-bold text-sm">{row.c}</td>
                    <td className="p-5 sm:p-8 text-center text-text-main font-bold text-sm">{row.ic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
