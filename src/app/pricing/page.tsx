import Link from "next/link";

export default function Pricing() {
  return (
    <>

      <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <header className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-headline font-bold text-on-surface mb-6 tracking-tight">
            Curating <span className="italic text-primary">Unrivaled</span> Connections
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto font-body leading-relaxed opacity-80">
            Choose the level of intentionality that suits your journey. Every membership is a commitment to quality.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch relative">
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary-container opacity-20 blur-3xl rounded-full -z-10"></div>
          <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-secondary-container opacity-20 blur-3xl rounded-full -z-10"></div>
          
          <div className="bg-surface-container-low p-10 rounded-2xl flex flex-col transition-all duration-500 hover:translate-y-[-8px]">
            <div className="mb-8">
              <span className="text-secondary font-label text-xs uppercase tracking-widest font-bold">Entry</span>
              <h3 className="text-3xl font-headline font-bold mt-2">The Beginning</h3>
            </div>
            <div className="mb-8 flex items-baseline">
              <span className="text-4xl font-headline font-bold text-on-surface">₹0</span>
              <span className="text-on-surface-variant opacity-60 ml-2 font-body">/lifetime</span>
            </div>
            <ul className="space-y-4 mb-12 flex-grow">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="text-on-surface-variant text-sm font-body">Basic Editorial Profile</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="text-on-surface-variant text-sm font-body">3 Curated Matches / Day</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="text-on-surface-variant text-sm font-body">Limited Message Requests</span>
              </li>
            </ul>
            <button className="w-full py-4 rounded-full border border-outline-variant text-on-surface font-semibold hover:bg-surface-container-highest transition-colors font-label uppercase text-xs tracking-widest">
              Start Exploring
            </button>
          </div>

          <div className="bg-surface-container-lowest p-10 rounded-2xl flex flex-col shadow-[0_24px_48px_rgba(27,28,23,0.08)] ring-1 ring-primary/10 relative z-10 transition-all duration-500 hover:translate-y-[-8px] scale-105">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-on-secondary px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg">
              Most Popular
            </div>
            <div className="mb-8">
              <span className="text-primary font-label text-xs uppercase tracking-widest font-bold">Premium</span>
              <h3 className="text-3xl font-headline font-bold mt-2">Gold Membership</h3>
            </div>
            <div className="mb-8">
              <div className="flex items-baseline">
                <span className="text-5xl font-headline font-bold text-on-surface">₹499</span>
                <span className="text-on-surface-variant opacity-60 ml-2 font-body">/month</span>
              </div>
              <p className="text-secondary text-xs font-bold mt-2 tracking-wide uppercase italic">7-day trial included</p>
            </div>
            <ul className="space-y-4 mb-12 flex-grow">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                <span className="text-on-surface text-sm font-semibold font-body">Everything in Free</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="text-on-surface-variant text-sm font-body">Unlimited Direct Messages</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>visibility</span>
                <span className="text-on-surface-variant text-sm font-body">See Who Liked You</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                <span className="text-on-surface-variant text-sm font-body">Weekly Profile Boost</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
                <span className="text-on-surface-variant text-sm font-body">Advanced Safety Features</span>
              </li>
            </ul>
            <button className="w-full py-4 rounded-full bg-gradient-to-r from-primary to-primary-container text-on-primary font-semibold shadow-md hover:shadow-xl transition-all font-label uppercase text-xs tracking-widest">
              Begin Trial
            </button>
          </div>

          <div className="bg-surface-container-low p-10 rounded-2xl flex flex-col transition-all duration-500 hover:translate-y-[-8px]">
            <div className="mb-8">
              <span className="text-on-surface-variant font-label text-xs uppercase tracking-widest font-bold">Bespoke</span>
              <h3 className="text-3xl font-headline font-bold mt-2">Platinum Unrivaled</h3>
            </div>
            <div className="mb-8 flex items-baseline">
              <span className="text-4xl font-headline font-bold text-on-surface">₹999</span>
              <span className="text-on-surface-variant opacity-60 ml-2 font-body">/month</span>
            </div>
            <ul className="space-y-4 mb-12 flex-grow">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-on-surface text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>diamond</span>
                <span className="text-on-surface text-sm font-semibold font-body">The Ultimate Concierge</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-on-surface text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>support_agent</span>
                <span className="text-on-surface-variant text-sm font-body">Dedicated Relationship Advisor</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-on-surface text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>lock_person</span>
                <span className="text-on-surface-variant text-sm font-body">Incognito Browsing Mode</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-on-surface text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>event</span>
                <span className="text-on-surface-variant text-sm font-body">VIP Access to Local Galas</span>
              </li>
            </ul>
            <button className="w-full py-4 rounded-full border-2 border-on-surface text-on-surface font-bold hover:bg-on-surface hover:text-white transition-all font-label uppercase text-xs tracking-widest">
              Request Invite
            </button>
          </div>
        </div>

        <section className="mt-32">
          <h2 className="text-3xl font-headline font-bold text-center mb-12">Detailed Comparison</h2>
          <div className="glass-panel rounded-2xl overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-high/50">
                  <th className="p-6 font-headline text-lg">Feature</th>
                  <th className="p-6 font-label text-xs uppercase tracking-widest text-center">Beginning</th>
                  <th className="p-6 font-label text-xs uppercase tracking-widest text-center text-primary">Gold</th>
                  <th className="p-6 font-label text-xs uppercase tracking-widest text-center">Platinum</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                <tr>
                  <td className="p-6 font-body text-sm font-semibold">Editorial Profile Design</td>
                  <td className="p-6 text-center text-primary"><span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span></td>
                  <td className="p-6 text-center text-primary"><span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span></td>
                  <td className="p-6 text-center text-primary"><span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span></td>
                </tr>
                <tr>
                  <td className="p-6 font-body text-sm font-semibold">Read Receipts</td>
                  <td className="p-6 text-center text-outline-variant opacity-30">—</td>
                  <td className="p-6 text-center text-primary"><span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span></td>
                  <td className="p-6 text-center text-primary"><span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span></td>
                </tr>
                <tr>
                  <td className="p-6 font-body text-sm font-semibold">Priority Support</td>
                  <td className="p-6 text-center text-outline-variant opacity-30">—</td>
                  <td className="p-6 text-center text-outline-variant opacity-30">—</td>
                  <td className="p-6 text-center text-primary font-bold">24/7 Dedicated</td>
                </tr>
                <tr>
                  <td className="p-6 font-body text-sm font-semibold">Event Invitations</td>
                  <td className="p-6 text-center text-outline-variant opacity-30">Digital only</td>
                  <td className="p-6 text-center font-body text-xs">Standard Access</td>
                  <td className="p-6 text-center font-body text-xs font-bold text-secondary">VIP Backstage</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-32 text-center relative py-20 rounded-[3rem] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="absolute inset-0 w-full h-full object-cover -z-20 opacity-10" alt="luxurious dining room" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsAol2fVLUJzSKJvSlidG-R_B2YCTEaG5ILu-u82nAKSFCvppvhXXVwKXCyvk9IMzA5Yy_jufHi4-0e__VLxC5IcvdHxHh4f_1P6naf8KT07D-IGn0wc-ux2Fq9XdvauvQ502d1Quo460IKPsEFQbXEo7Bh_fpQj3lN_noNOv_iucZul5J_rkMO8IOYjYKboj6NOqbR77h3L48LY-VYy17BjoglAI8s9VJtqw0M7xbfJS-X_4wkvfkcUseQgm8n0exJR7m89D57Q" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background -z-10"></div>
          <h2 className="text-4xl font-headline font-bold mb-6">Still Deciding?</h2>
          <p className="text-on-surface-variant font-body mb-8 max-w-lg mx-auto italic">
            &quot;Finding the one should be a journey of refinement, not a chore.&quot; — Zora Editorial
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-primary text-on-primary rounded-full font-bold uppercase text-xs tracking-widest hover:bg-primary/90 transition-all">Get Started for Free</button>
            <button className="px-8 py-4 glass-panel rounded-full font-bold uppercase text-xs tracking-widest hover:bg-white/50 transition-all">Talk to an Advisor</button>
          </div>
        </section>
      </main>
    </>
  );
}