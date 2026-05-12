import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Membership Tiers | Invest in Your Connections",
  description: "Choose the tier of resonance that aligns with your ambition. ZoraMeeto membership plans for the modern high-achiever.",
};

export default function Pricing() {
  const tiers = [
    {
      name: "Foundation",
      price: "₹0",
      period: "/ lifetime",
      features: ['Basic Profile Sync', '3 Curated Matches / Day', 'Limited Requests'],
      button: "Join Network",
      popular: false
    },
    {
      name: "The Collective",
      price: "₹499",
      period: "/ cycle",
      features: ['Unlimited Resonance', 'Identify Admirers', 'Weekly Profile Boost', 'Premium Analytics', 'Priority Support'],
      button: "Request Access",
      popular: true
    },
    {
      name: "Inner Circle",
      price: "₹999",
      period: "/ cycle",
      features: ['Personal Concierge', 'Dedicated Advisor', 'Global VIP Events', 'Incognito Presence', 'Legacy Planning'],
      button: "Request Invitation",
      popular: false
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Sophisticated Center-Aligned Compact Hero */}
      <section className="relative pt-32 pb-12 px-6 overflow-hidden bg-gradient-mesh text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full z-0"></div>
        
        <div className="max-w-4xl mx-auto space-y-6 relative z-10 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 mx-auto">
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-primary">Membership</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-text-main leading-tight">
            The <br />
            <span className="text-primary italic font-light">Investment.</span>
          </h1>
          <p className="text-base md:text-lg text-text-muted leading-relaxed font-medium max-w-xl mx-auto">
            Choose the tier of resonance that aligns with your ambition. Every membership is a commitment to intentionality and elite connection.
          </p>
        </div>
      </section>

      {/* Pricing Grid - Compact Mode */}
      <section className="py-16 px-6 bg-surface-soft/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {tiers.map((tier, i) => (
              <div key={i} className={`spotlight-card rounded-[3rem] p-10 flex flex-col justify-between relative group bg-white border border-border hover-lift shadow-sm ${tier.popular ? 'border-primary/50 ring-1 ring-primary/20 shadow-xl shadow-primary/10' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-primary text-white text-[9px] font-bold uppercase tracking-widest rounded-full shadow-lg shadow-primary/40">
                    Most Resonant
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
                  <button className={`w-full py-5 rounded-xl font-bold uppercase tracking-widest text-[10px] transition-all ${tier.popular ? 'luxury-button' : 'bg-surface border border-border text-text-main hover:bg-border'}`}>
                    {tier.button}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compare Section - Compact Mode */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter text-center mb-16 text-text-main leading-tight">Feature Breakdown</h2>
          <div className="spotlight-card rounded-[3rem] overflow-hidden border border-border bg-white shadow-xl shadow-black/[0.01]">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-border bg-surface-soft">
                  <th className="p-8 text-[9px] font-bold uppercase tracking-[0.3em] text-text-muted">Capabilities</th>
                  <th className="p-8 text-[9px] font-bold uppercase tracking-[0.3em] text-text-muted text-center">Foundation</th>
                  <th className="p-8 text-[9px] font-bold uppercase tracking-[0.3em] text-primary text-center">Collective</th>
                  <th className="p-8 text-[9px] font-bold uppercase tracking-[0.3em] text-text-muted text-center">Inner Circle</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { name: 'Manual Vetting', f: '✓', c: '✓', ic: '✓' },
                  { name: 'Psychological Sync', f: 'Basic', c: 'Advanced', ic: 'Bespoke' },
                  { name: 'Global Network', f: 'Local', c: 'Regional', ic: 'Unlimited' },
                  { name: 'Private Concierge', f: '—', c: 'Digital', ic: 'Personal' }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-surface-soft/50 transition-colors">
                    <td className="p-8 text-sm font-bold text-text-main uppercase tracking-widest">{row.name}</td>
                    <td className="p-8 text-center text-text-muted font-medium text-sm">{row.f}</td>
                    <td className="p-8 text-center text-primary font-bold text-sm">{row.c}</td>
                    <td className="p-8 text-center text-text-main font-bold text-sm">{row.ic}</td>
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