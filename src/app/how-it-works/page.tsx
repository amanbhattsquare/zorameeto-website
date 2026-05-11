import Link from "next/link";

export default function HowItWorks() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="pt-24 pb-16 px-6 bg-gradient-mesh">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="font-romantic text-primary text-5xl">The Journey to Intimacy</span>
          <h1 className="text-6xl md:text-8xl font-headline tracking-tighter text-text-main leading-tight">
            Crafting Your <br />
            <span className="text-gradient italic">Connection.</span>
          </h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed font-light">
            A refined editorial approach to finding love. We move at the speed of intention, not the speed of a swipe.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-24">
          
          {/* Step 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-surface-soft text-text-main text-2xl font-bold shadow-sm">01</div>
              <h3 className="text-5xl font-headline tracking-tight text-text-main">Vetting & Curation</h3>
              <p className="text-xl text-text-muted leading-relaxed font-light">
                Every member of ZoraMeeto is hand-selected. Our application process ensures a community of individuals committed to authenticity and depth.
              </p>
              <ul className="space-y-4">
                {['Identity Verification', 'Values Assessment', 'Social Background Review'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-text-main font-medium">
                    <span className="material-symbols-outlined text-primary text-xl">verified</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden premium-shadow group">
                <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Vetting" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-10 left-10 text-white">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2 opacity-70">Application Status</p>
                  <p className="text-2xl font-headline italic">Under Editorial Review</p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden premium-shadow group">
                <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Discovery" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800" />
                <div className="absolute bottom-10 right-10 left-10 p-8 glass-card rounded-[2rem] shadow-2xl">
                  <h4 className="font-headline text-2xl text-text-main">Marcus, 32</h4>
                  <p className="text-sm text-text-muted mt-2">"Architect by day, poet by twilight. Seeking a connection that resonates with my soul."</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-surface-soft text-text-main text-2xl font-bold shadow-sm">02</div>
              <h3 className="text-5xl font-headline tracking-tight text-text-main">Discovery & Storytelling</h3>
              <p className="text-xl text-text-muted leading-relaxed font-light">
                Explore profiles that read like personal essays. Our layout prioritizes storytelling and high-fidelity imagery over mindless swiping.
              </p>
              <div className="flex gap-4">
                {['Lifestyle Stories', 'High-Res Media'].map((tag) => (
                  <span key={tag} className="px-6 py-2 rounded-full bg-surface-soft text-[10px] font-bold uppercase tracking-widest text-text-muted">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-surface-soft text-text-main text-2xl font-bold shadow-sm">03</div>
              <h3 className="text-5xl font-headline tracking-tight text-text-main">Resonance Found</h3>
              <p className="text-xl text-text-muted leading-relaxed font-light">
                When two souls find common ground, Resonance occurs. It’s more than a match—it’s an invitation to a curated conversation space.
              </p>
              <div className="p-8 bg-surface rounded-[2rem] border border-border space-y-4">
                <div className="flex -space-x-4">
                  <div className="w-16 h-16 rounded-full border-4 border-white bg-surface-soft overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" alt="Match" />
                  </div>
                  <div className="w-16 h-16 rounded-full border-4 border-white bg-surface-soft overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150" alt="Match" />
                  </div>
                </div>
                <p className="text-primary font-bold text-sm tracking-widest uppercase">94% Compatibility Found</p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden premium-shadow group">
                <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Resonance" src="https://images.unsplash.com/photo-1516589174184-c685ca10298d?auto=format&fit=crop&q=80&w=800" />
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden premium-shadow group">
                <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="The Encounter" src="https://images.unsplash.com/photo-1511733880459-845ad96996b9?auto=format&fit=crop&q=80&w=800" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <span className="material-symbols-outlined text-white text-6xl">wine_bar</span>
                    <p className="text-white text-2xl font-headline">The First Encounter</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-surface-soft text-text-main text-2xl font-bold shadow-sm">04</div>
              <h3 className="text-5xl font-headline tracking-tight text-text-main">The First Encounter</h3>
              <p className="text-xl text-text-muted leading-relaxed font-light">
                Transition from digital to physical with ease. Our concierge service can help you select the perfect venue for your first meeting.
              </p>
              <div className="p-10 bg-surface rounded-[2.5rem] border-l-4 border-primary">
                <p className="text-2xl font-headline italic text-text-main leading-tight">
                  "The app didn't just find me a date; it found me a story worth living."
                </p>
                <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Elena R.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-text-main">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h2 className="text-5xl lg:text-7xl font-headline text-white tracking-tight">
            Begin Your <br />
            <span className="text-primary italic">Editorial Chapter.</span>
          </h2>
          <p className="text-xl text-white/60 leading-relaxed font-light max-w-xl mx-auto">
            Applications are reviewed within 48 hours by our selective editorial board.
          </p>
          <div className="pt-6 flex flex-wrap justify-center gap-6">
            <button className="bg-gradient-primary text-white px-12 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300">
              Apply for Membership
            </button>
            <button className="bg-white/10 text-white border border-white/20 px-12 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all">
              Safety Standards
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}