import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Atelier | ZoraMeeto Mobile Experience",
  description: "Explore the high-performance digital environment crafted for the modern individual who values depth over distraction.",
};

export default function AppShowcase() {
  const features = [
    {
      title: "Precision Interface",
      desc: "An award-winning mobile environment designed for deep intentionality, not distraction.",
      icon: "smartphone"
    },
    {
      title: "Real-time Resonance",
      desc: "Our algorithm calculates synergy in real-time as you explore the collective.",
      icon: "bolt"
    },
    {
      title: "Secure Narrative",
      desc: "Share your life through high-fidelity visual stories within a private network.",
      icon: "camera_front"
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Sophisticated Center-Aligned Compact Hero */}
      <section className="relative pt-32 pb-12 px-6 overflow-hidden bg-gradient-mesh text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full z-0"></div>
        
        <div className="max-w-4xl mx-auto space-y-6 relative z-10 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 mx-auto">
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-primary">The Application</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-text-main leading-tight">
            The <br />
            <span className="text-primary italic font-light">Atelier.</span>
          </h1>
          <p className="text-base md:text-lg text-text-muted leading-relaxed font-medium max-w-xl mx-auto">
            The ZoraMeeto mobile platform is a high-performance digital environment crafted for the modern individual who values depth over distraction.
          </p>
        </div>
      </section>

      {/* Mobile Preview Grid - Compact Mode */}
      <section className="py-16 px-6 bg-surface-soft/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative flex justify-center">
            <div className="absolute inset-0 bg-primary/5 blur-[80px] rounded-full"></div>
            <div className="relative w-full max-w-[280px] aspect-[9/19] rounded-[3rem] border-[8px] border-text-main/5 bg-white shadow-xl overflow-hidden shadow-black/5">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-5 bg-surface rounded-b-2xl"></div>
              <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800" alt="App Interface" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            {features.map((f, i) => (
              <div key={i} className="spotlight-card rounded-[2.5rem] p-8 space-y-6 group hover-lift bg-white border border-border shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <span className="material-symbols-outlined text-2xl">{f.icon}</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-text-main tracking-tight leading-tight">{f.title}</h3>
                  <p className="text-text-muted font-medium leading-relaxed text-sm">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section - Compact Mode */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto spotlight-card rounded-[3rem] p-16 text-center space-y-12 border border-border bg-white shadow-xl shadow-black/[0.01]">
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter text-text-main leading-tight">
            Available for <br />
            <span className="text-primary italic font-light">Invitation Only.</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-text-main text-white px-10 py-5 rounded-2xl font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all flex items-center gap-3 shadow-lg">
              <span className="material-symbols-outlined text-xl">apple</span>
              App Store
            </button>
            <button className="bg-surface border border-border text-text-main px-10 py-5 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-border transition-all flex items-center gap-3">
              <span className="material-symbols-outlined text-xl">play_arrow</span>
              Play Store
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}