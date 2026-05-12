import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Precision Innovation | ZoraMeeto Elite Features",
  description: "Explore the proprietary behavioral engine and military-grade privacy protocols that define the ZoraMeeto experience.",
};

export default function Features() {
  return (
    <main className="min-h-screen bg-background">
      {/* Sophisticated Center-Aligned Compact Hero */}
      <section className="relative pt-32 pb-12 px-6 overflow-hidden bg-gradient-mesh text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full z-0"></div>
        
        <div className="max-w-4xl mx-auto space-y-6 relative z-10 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 mx-auto">
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-primary">The Capabilities</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-text-main leading-tight">
            Precision <br />
            <span className="text-primary italic font-light">Innovation.</span>
          </h1>
          <p className="text-base md:text-lg text-text-muted leading-relaxed font-medium max-w-xl mx-auto">
            A high-performance suite of features designed for the discerning individual. We've optimized every touchpoint for depth, security, and resonant connection.
          </p>
        </div>
      </section>

      {/* Bento Feature Grid - Compact Mode */}
      <section className="py-16 px-6 bg-surface-soft/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Feature 1 */}
            <div className="spotlight-card rounded-[2.5rem] p-10 space-y-6 group bg-white border border-border hover-lift shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <span className="material-symbols-outlined text-2xl">psychology</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-text-main leading-tight">Psychological <br />Resonance</h3>
              <p className="text-text-muted font-medium leading-relaxed text-sm">
                Our AI-driven behavioral engine analyzes cognitive compatibility to ensure long-term synergy.
              </p>
            </div>

            {/* Feature 2: High Visibility */}
            <div className="spotlight-card rounded-[2.5rem] p-10 space-y-6 bg-white border-2 border-primary/20 shadow-xl shadow-primary/5 hover-lift">
              <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/40">
                <span className="material-symbols-outlined text-white text-2xl">verified</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-text-main leading-tight">Vetted <br />Network</h3>
              <p className="text-text-muted font-medium leading-relaxed text-sm">
                100% manual verification. We curate a collective of like-minded high-achievers.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="spotlight-card rounded-[2.5rem] p-10 space-y-6 group bg-white border border-border hover-lift shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-surface flex items-center justify-center border border-border group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                <span className="material-symbols-outlined text-2xl">security</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-text-main leading-tight">Absolute <br />Privacy</h3>
              <p className="text-text-muted font-medium leading-relaxed text-sm">
                Incognito mode and military-grade encryption for your digital presence.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Wide Feature Section - Compact Mode */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="spotlight-card rounded-[3rem] overflow-hidden bg-white border border-border shadow-xl shadow-black/[0.01]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-12 lg:p-20">
              <div className="space-y-6 text-center lg:text-left">
                <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter leading-tight text-text-main">
                  Cinematic <br />
                  <span className="text-primary italic font-light">Narratives.</span>
                </h2>
                <p className="text-lg text-text-muted font-medium leading-relaxed">
                  Go beyond the static profile. Share your journey through high-fidelity social narratives that capture the essence of your lifestyle.
                </p>
                <div className="pt-2">
                  <button className="luxury-button px-10 py-4 rounded-xl font-bold uppercase tracking-widest text-[10px]">
                    View Experience
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video rounded-[2.5rem] overflow-hidden border-4 border-white shadow-xl">
                  <img src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?auto=format&fit=crop&q=80&w=1200" alt="Narratives" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}