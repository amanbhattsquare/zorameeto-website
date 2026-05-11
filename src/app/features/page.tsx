import Link from "next/link";

export default function Features() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="pt-24 pb-16 px-6 bg-gradient-mesh">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="font-romantic text-primary text-5xl">The Art of Connection</span>
          <h1 className="text-6xl md:text-8xl font-headline tracking-tighter text-text-main leading-tight">
            Curated for the <br />
            <span className="text-gradient italic">Modern Romantic.</span>
          </h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed font-light">
            Beyond the swipe. We've designed a suite of editorial-grade features to ensure your journey toward love is as intentional and elegant as a gala invitation.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            
            {/* Feature 1: AI Matching (Double Width) */}
            <div className="lg:col-span-2 group bg-surface rounded-[3rem] p-12 hover-lift premium-shadow border border-border overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-lg shadow-primary/20">
                    <span className="material-symbols-outlined text-white text-3xl">neurology</span>
                  </div>
                  <h3 className="text-4xl font-headline tracking-tight text-text-main">Intelligent Resonance</h3>
                  <p className="text-text-muted leading-relaxed text-lg font-light">
                    Our sophisticated neural engine analyzes thousands of behavioral nuances—from conversational rhythm to shared aesthetic values—connecting you with those who truly resonate with your soul.
                  </p>
                  <button className="text-primary font-bold uppercase tracking-widest text-xs flex items-center gap-2 group-hover:gap-4 transition-all">
                    Explore Logic <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
                <div className="relative">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                    <img className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" alt="Logic" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" />
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2: Vetted */}
            <div className="bg-white rounded-[3rem] p-12 hover-lift premium-shadow border border-border space-y-8">
              <div className="w-16 h-16 rounded-2xl bg-surface-soft flex items-center justify-center">
                <span className="material-symbols-outlined text-text-main text-3xl">verified_user</span>
              </div>
              <h3 className="text-3xl font-headline tracking-tight text-text-main">Prestige Community</h3>
              <p className="text-text-muted leading-relaxed font-light">
                No bots, no illusions. Every member is personally reviewed by our editorial team to ensure the community remains authentic and high-intent.
              </p>
            </div>

            {/* Feature 3: Psychological */}
            <div className="bg-white rounded-[3rem] p-12 hover-lift premium-shadow border border-border space-y-8">
              <div className="w-16 h-16 rounded-2xl bg-surface-soft flex items-center justify-center">
                <span className="material-symbols-outlined text-text-main text-3xl">psychology</span>
              </div>
              <h3 className="text-3xl font-headline tracking-tight text-text-main">Behavioral Synergy</h3>
              <p className="text-text-muted leading-relaxed font-light">
                Deep-dive personality assessments based on modern behavioral science to identify long-term relational compatibility and synergy.
              </p>
            </div>

            {/* Feature 4: Moments (Double Width) */}
            <div className="lg:col-span-2 group bg-surface rounded-[3rem] p-12 hover-lift premium-shadow border border-border overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative order-2 md:order-1">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl rotate-3 group-hover:rotate-0 transition-all duration-700">
                    <img className="w-full h-full object-cover" alt="Moments" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" />
                  </div>
                </div>
                <div className="space-y-6 order-1 md:order-2">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-lg shadow-primary/20">
                    <span className="material-symbols-outlined text-white text-3xl">auto_stories</span>
                  </div>
                  <h3 className="text-4xl font-headline tracking-tight text-text-main">ZoraMoments</h3>
                  <p className="text-text-muted leading-relaxed text-lg font-light">
                    Tell your story through cinematic social narratives. Share the books you’re reading, the galleries you’ve visited, and the moments that define your lifestyle.
                  </p>
                  <div className="flex gap-3">
                    <span className="px-4 py-1 rounded-full bg-white border border-border text-[10px] font-bold uppercase tracking-widest text-text-muted">Lifestyle</span>
                    <span className="px-4 py-1 rounded-full bg-white border border-border text-[10px] font-bold uppercase tracking-widest text-text-muted">Culture</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 5: Privacy */}
            <div className="bg-white rounded-[3rem] p-12 hover-lift premium-shadow border border-border space-y-8">
              <div className="w-16 h-16 rounded-2xl bg-surface-soft flex items-center justify-center">
                <span className="material-symbols-outlined text-text-main text-3xl">encrypted</span>
              </div>
              <h3 className="text-3xl font-headline tracking-tight text-text-main">Absolute Privacy</h3>
              <p className="text-text-muted leading-relaxed font-light">
                Military-grade encryption for all communications. Your digital footprint remains invisible to the public eye, guaranteed.
              </p>
            </div>

            {/* Concierge Section (Full Width) */}
            <div className="lg:col-span-3 bg-text-main rounded-[4rem] p-12 lg:p-16 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-primary opacity-10 blur-[120px] -translate-y-1/2"></div>
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-10">
                  <div className="inline-block px-5 py-2 rounded-full border border-white/20 text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">
                    The Ultimate Tier
                  </div>
                  <h3 className="text-5xl lg:text-7xl font-headline text-white leading-tight">
                    Premium <br />
                    <span className="text-primary italic">Concierge.</span>
                  </h3>
                  <p className="text-white/60 text-xl leading-relaxed font-light max-w-xl">
                    Unlock a personal romance consultant. From bespoke date curation to elite restaurant reservations, our concierge handles every detail.
                  </p>
                  <button className="bg-white text-text-main px-12 py-5 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-primary hover:text-white transition-all duration-500">
                    Apply for Invitation
                  </button>
                </div>
                <div className="flex justify-center lg:justify-end">
                  <span className="material-symbols-outlined text-white/5 text-[300px] lg:text-[400px] select-none">concierge</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}