import Link from "next/link";

export default function AppShowcase() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* Header Section */}
      <section className="pt-24 pb-16 px-6 bg-gradient-mesh">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="font-romantic text-primary text-5xl">The Digital Atelier</span>
          <h1 className="text-6xl md:text-8xl font-headline tracking-tighter text-text-main leading-tight">
            The Interface of <br />
            <span className="text-gradient italic">Intentional Intimacy.</span>
          </h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed font-light">
            Experience a dating environment curated like a private gallery. Where every interaction is a brushstroke on the canvas of a meaningful connection.
          </p>
        </div>
      </section>

      {/* App Screens Showcase */}
      <section className="py-20 px-6">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-start">
            
            {/* Screen 1: Discover */}
            <div className="space-y-10 group">
              <div className="relative rounded-[3.5rem] border-[12px] border-text-main aspect-[9/19] bg-surface-soft overflow-hidden premium-shadow group-hover:scale-[1.02] transition-all duration-700">
                <div className="absolute top-0 w-full flex justify-between px-10 py-6 z-20">
                  <span className="text-text-main font-bold text-[10px]">9:41</span>
                  <div className="flex gap-2">
                    <span className="w-4 h-4 rounded-full border border-text-main/20 flex items-center justify-center text-[8px] font-bold">5G</span>
                  </div>
                </div>
                <div className="h-full pt-20 px-6 pb-6 overflow-y-auto custom-scrollbar">
                  <div className="flex justify-between items-center mb-8">
                    <h2 className="font-headline text-3xl italic text-primary">Discover</h2>
                    <span className="material-symbols-outlined text-text-main text-2xl">tune</span>
                  </div>
                  <div className="relative rounded-[2rem] overflow-hidden aspect-[3/4] mb-6 premium-shadow">
                    <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Elena" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=800" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-8">
                      <span className="bg-primary/20 backdrop-blur-md border border-white/20 text-white text-[8px] font-bold uppercase tracking-widest px-3 py-1 rounded-full w-fit mb-3">New Member</span>
                      <h3 className="text-white font-headline text-3xl">Elena, 28</h3>
                      <p className="text-white/70 text-xs italic mt-1 font-light">Art Historian • Paris</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="aspect-square rounded-2xl bg-surface overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150" className="w-full h-full object-cover" alt="User" />
                    </div>
                    <div className="aspect-square rounded-2xl bg-surface overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150" className="w-full h-full object-cover" alt="User" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center px-4 space-y-2">
                <h4 className="font-headline font-bold text-2xl text-text-main">Discover Feed</h4>
                <p className="text-text-muted text-sm font-light">Visual-first exploration with editorial depth.</p>
              </div>
            </div>

            {/* Screen 2: Resonance */}
            <div className="space-y-10 group lg:mt-24">
              <div className="relative rounded-[3.5rem] border-[12px] border-text-main aspect-[9/19] bg-text-main overflow-hidden premium-shadow group-hover:scale-[1.02] transition-all duration-700">
                <div className="h-full flex flex-col items-center justify-center p-10 text-center relative">
                  <div className="absolute inset-0 opacity-20">
                    <img src="https://images.unsplash.com/photo-1511733880459-845ad96996b9?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Abstract" />
                  </div>
                  <span className="font-romantic text-primary text-4xl mb-10 z-10">It's a Serendipity.</span>
                  <div className="flex -space-x-6 mb-12 z-10">
                    <div className="w-24 h-24 rounded-full border-4 border-primary bg-surface-soft overflow-hidden premium-shadow">
                      <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=150" className="w-full h-full object-cover" alt="User" />
                    </div>
                    <div className="w-24 h-24 rounded-full border-4 border-primary bg-surface-soft overflow-hidden premium-shadow">
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150" className="w-full h-full object-cover" alt="User" />
                    </div>
                  </div>
                  <h3 className="text-white text-3xl font-headline mb-4 z-10">Elena & Marcus</h3>
                  <p className="text-white/60 text-sm font-light mb-12 z-10 leading-relaxed">
                    Both of you mentioned a love for <span className="text-primary italic">Vivaldi's Winter</span> in your notes.
                  </p>
                  <div className="w-full space-y-4 z-10">
                    <button className="w-full bg-primary text-white rounded-2xl py-4 font-bold uppercase tracking-widest text-[10px]">Send Invitation</button>
                    <button className="w-full bg-white/10 border border-white/20 text-white rounded-2xl py-4 font-bold uppercase tracking-widest text-[10px]">View Dossier</button>
                  </div>
                </div>
              </div>
              <div className="text-center px-4 space-y-2">
                <h4 className="font-headline font-bold text-2xl text-text-main">The Invitation</h4>
                <p className="text-text-muted text-sm font-light">Matching reimagined as an elegant social ritual.</p>
              </div>
            </div>

            {/* Screen 3: Dialogue */}
            <div className="space-y-10 group">
              <div className="relative rounded-[3.5rem] border-[12px] border-text-main aspect-[9/19] bg-surface-soft overflow-hidden premium-shadow group-hover:scale-[1.02] transition-all duration-700">
                <div className="h-full flex flex-col">
                  <div className="pt-20 px-8 pb-6 bg-white border-b border-border flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-soft">
                      <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=150" className="w-full h-full object-cover" alt="Elena" />
                    </div>
                    <div>
                      <h4 className="font-headline text-xl text-text-main">Elena</h4>
                      <p className="text-[8px] font-bold text-primary uppercase tracking-widest">Resonating...</p>
                    </div>
                  </div>
                  <div className="flex-1 p-8 space-y-10 overflow-y-auto">
                    <div className="max-w-[85%] space-y-2">
                      <div className="p-5 rounded-[1.5rem] rounded-tl-none bg-white border border-border text-sm text-text-muted leading-relaxed">
                        I've always found that the second movement of Winter feels more like a cozy fire than a cold frost.
                      </div>
                    </div>
                    <div className="max-w-[85%] space-y-2 ml-auto">
                      <div className="p-5 rounded-[1.5rem] rounded-tr-none bg-text-main text-white text-sm leading-relaxed shadow-lg">
                        Spot on. It's the rain against the window while you're safe inside. Precisely why it's my favorite.
                      </div>
                    </div>
                  </div>
                  <div className="p-8 pb-12">
                    <div className="relative">
                      <input className="w-full bg-white border border-border rounded-full py-4 pl-6 pr-14 text-sm focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary" placeholder="Share a thought..." type="text" />
                      <button className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                        <span className="material-symbols-outlined text-xl">send</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center px-4 space-y-2">
                <h4 className="font-headline font-bold text-2xl text-text-main">Curated Dialogue</h4>
                <p className="text-text-muted text-sm font-light">Conversation spaces designed for meaningful connection.</p>
              </div>
            </div>

            {/* Screen 4: Dossier */}
            <div className="space-y-10 group lg:mt-24">
              <div className="relative rounded-[3.5rem] border-[12px] border-text-main aspect-[9/19] bg-white overflow-hidden premium-shadow group-hover:scale-[1.02] transition-all duration-700">
                <div className="h-full overflow-y-auto custom-scrollbar">
                  <div className="relative aspect-[4/5]">
                    <img className="w-full h-full object-cover" alt="Elena" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=800" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-8">
                      <h2 className="font-headline text-4xl text-text-main">Elena, <span className="italic">28</span></h2>
                    </div>
                  </div>
                  <div className="p-8 space-y-10">
                    <div className="space-y-4">
                      <h5 className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">The Dossier</h5>
                      <p className="text-text-muted text-base leading-relaxed italic font-light">
                        "I believe beauty is found in the quiet details—the grain of old paper, the smell of rain on stone."
                      </p>
                    </div>
                    <div className="space-y-4">
                      <h5 className="text-[10px] font-bold text-text-main uppercase tracking-[0.2em]">Sanctuary</h5>
                      <div className="aspect-video rounded-[1.5rem] overflow-hidden premium-shadow">
                        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Library" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center px-4 space-y-2">
                <h4 className="font-headline font-bold text-2xl text-text-main">Dossier View</h4>
                <p className="text-text-muted text-sm font-light">Detailed member narratives beyond the superficial.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-text-main rounded-[4rem] p-12 lg:p-16 text-center relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-primary opacity-5 scale-150 group-hover:scale-100 transition-transform duration-1000"></div>
            <div className="relative z-10 space-y-10">
              <h2 className="text-5xl lg:text-7xl font-headline text-white tracking-tight">
                Ready for a <br />
                <span className="text-primary italic">Richer Experience?</span>
              </h2>
              <p className="text-xl text-white/60 leading-relaxed font-light max-w-xl mx-auto">
                Download the invitation-only application and start your journey toward a meaningful connection.
              </p>
              <div className="flex flex-wrap justify-center gap-6 pt-6">
                <button className="bg-white text-text-main px-12 py-5 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-primary hover:text-white transition-all duration-500">
                  Request Access
                </button>
                <button className="bg-transparent border border-white/20 text-white px-12 py-5 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all">
                  Join Inner Circle
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}