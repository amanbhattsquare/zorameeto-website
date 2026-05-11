import Link from "next/link";

export default function Pricing() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="pt-24 pb-16 px-6 bg-gradient-mesh">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="font-romantic text-primary text-5xl">Membership</span>
          <h1 className="text-6xl md:text-8xl font-headline tracking-tighter text-text-main leading-tight">
            Curating <br />
            <span className="text-gradient italic">Unrivaled Connections.</span>
          </h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed font-light">
            Choose the level of intentionality that suits your journey. Every membership is a commitment to quality and depth.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
            
            {/* Plan 1: Beginning */}
            <div className="bg-white rounded-[3rem] p-12 border border-border flex flex-col hover-lift premium-shadow transition-all duration-500">
              <div className="space-y-6 mb-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-text-muted">Tier 01</span>
                <h3 className="text-4xl font-headline text-text-main">The Beginning</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-headline text-text-main">₹0</span>
                  <span className="text-text-muted text-sm font-light">/ lifetime</span>
                </div>
              </div>
              <ul className="space-y-6 flex-grow mb-8">
                {['Basic Editorial Profile', '3 Curated Matches / Day', 'Limited Message Requests'].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-text-muted text-sm font-light">
                    <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-5 rounded-2xl border border-border text-text-main font-bold uppercase tracking-widest text-[10px] hover:bg-surface-soft transition-all">
                Start Exploring
              </button>
            </div>

            {/* Plan 2: Gold (Popular) */}
            <div className="bg-text-main rounded-[3rem] p-12 border border-text-main flex flex-col hover-lift premium-shadow relative z-10 scale-[1.05] shadow-2xl">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] shadow-xl">
                Most Popular
              </div>
              <div className="space-y-6 mb-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">Tier 02</span>
                <h3 className="text-4xl font-headline text-white">Gold Elite</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-headline text-white">₹499</span>
                  <span className="text-white/50 text-sm font-light">/ month</span>
                </div>
                <p className="text-primary text-[10px] font-bold uppercase tracking-widest italic">7-Day complimentary trial</p>
              </div>
              <ul className="space-y-6 flex-grow mb-8">
                {[
                  'Everything in Free',
                  'Unlimited Direct Resonance',
                  'Identify Your Admirers',
                  'Weekly Profile Elevation',
                  'Premium Safety Protocols'
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-white/80 text-sm font-light">
                    <span className="material-symbols-outlined text-primary text-lg">verified</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-5 rounded-2xl bg-gradient-primary text-white font-bold uppercase tracking-widest text-[10px] shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all">
                Begin Journey
              </button>
            </div>

            {/* Plan 3: Platinum */}
            <div className="bg-white rounded-[3rem] p-12 border border-border flex flex-col hover-lift premium-shadow transition-all duration-500">
              <div className="space-y-6 mb-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-text-muted">Tier 03</span>
                <h3 className="text-4xl font-headline text-text-main">Platinum</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-headline text-text-main">₹999</span>
                  <span className="text-text-muted text-sm font-light">/ month</span>
                </div>
              </div>
              <ul className="space-y-6 flex-grow mb-8">
                {[
                  'Bespoke Concierge Service',
                  'Dedicated Advisor',
                  'Incognito Presence',
                  'VIP Gala Access'
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-text-muted text-sm font-light">
                    <span className="material-symbols-outlined text-text-main text-lg">diamond</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-5 rounded-2xl border-2 border-text-main text-text-main font-bold uppercase tracking-widest text-[10px] hover:bg-text-main hover:text-white transition-all">
                Request Invitation
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-headline text-center mb-16 text-text-main">Feature Comparison</h2>
          <div className="rounded-[3rem] overflow-hidden border border-border bg-white premium-shadow">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-surface-soft">
                  <th className="p-8 text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted">Feature</th>
                  <th className="p-8 text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted text-center">Beginning</th>
                  <th className="p-8 text-[10px] font-bold uppercase tracking-[0.2em] text-primary text-center">Gold</th>
                  <th className="p-8 text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted text-center">Platinum</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { name: 'Editorial Design', free: true, gold: true, platinum: true },
                  { name: 'Read Receipts', free: false, gold: true, platinum: true },
                  { name: 'Priority Support', free: false, gold: false, platinum: '24/7 VIP' },
                  { name: 'Event Invitations', free: 'Digital', gold: 'Standard', platinum: 'VIP Backstage' }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-surface-soft/50 transition-colors">
                    <td className="p-8 text-sm font-medium text-text-main">{row.name}</td>
                    <td className="p-8 text-center text-sm">
                      {typeof row.free === 'boolean' ? (row.free ? '✓' : '—') : row.free}
                    </td>
                    <td className="p-8 text-center text-sm font-bold text-primary">
                      {typeof row.gold === 'boolean' ? (row.gold ? '✓' : '—') : row.gold}
                    </td>
                    <td className="p-8 text-center text-sm">
                      {typeof row.platinum === 'boolean' ? (row.platinum ? '✓' : '—') : row.platinum}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Final Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-surface-soft -z-10"></div>
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h2 className="text-5xl font-headline text-text-main italic">Still Deciding?</h2>
          <p className="text-xl text-text-muted font-light max-w-xl mx-auto">
            "Finding the one should be a journey of refinement, not a chore." — Zora Editorial
          </p>
          <div className="flex justify-center gap-6 pt-6">
            <button className="bg-text-main text-white px-12 py-5 rounded-2xl font-bold uppercase tracking-widest text-[10px] hover:bg-primary transition-all">
              Join for Free
            </button>
            <button className="bg-white border border-border text-text-main px-12 py-5 rounded-2xl font-bold uppercase tracking-widest text-[10px] hover:bg-surface-soft transition-all">
              Talk to Advisor
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}