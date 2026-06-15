import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Success Stories | ZoraMeeto",
  description: "Read simple stories of real people who met through ZoraMeeto.",
};

export default function LoveStories() {
  return (
    <main className="min-h-screen bg-background">
      {/* Simple Center-Aligned Compact Hero */}
      <section className="relative pt-32 pb-12 px-6 overflow-hidden bg-gradient-mesh text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full z-0"></div>
        
        <div className="max-w-4xl mx-auto space-y-6 relative z-10 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 mx-auto">
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-primary">Real Stories</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-text-main leading-tight">
            Real <br />
            <span className="text-primary italic font-light">Connections.</span>
          </h1>
          <p className="text-base md:text-lg text-text-muted leading-relaxed font-medium max-w-xl mx-auto">
            See how real people used ZoraMeeto to meet someone serious, start better chats, and build meaningful relationships.
          </p>
        </div>
      </section>

      {/* Stories Grid - Compact Mode */}
      <section className="py-16 px-6 bg-surface-soft/30">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Featured Success */}
          <div className="spotlight-card rounded-[3rem] overflow-hidden bg-white border border-border shadow-xl shadow-black/[0.01] hover-lift">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
              <div className="aspect-video lg:aspect-auto h-full overflow-hidden bg-surface-soft">
                <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=1200" alt="Success Story" className="w-full h-full object-cover" />
              </div>
              <div className="p-12 lg:p-20 space-y-8">
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary border border-primary/10">
                  <span className="material-symbols-outlined text-3xl">format_quote</span>
                </div>
                <blockquote className="text-3xl font-bold text-text-main leading-tight tracking-tight italic">
                  &quot;ZoraMeeto helped us avoid random chats and meet with clear intention. We found something real.&quot;
                </blockquote>
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-text-main">Ananya & Vikram</p>
                  <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-primary">Found through smart matching</p>
                </div>
              </div>
            </div>
          </div>

          {/* Grid Stories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                names: 'Priya & Arjun', 
                img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=800',
                quote: "The app helped us find the values that matter. We are getting married this June."
              },
              { 
                names: 'Meera & Kabir', 
                img: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?auto=format&fit=crop&q=80&w=800',
                quote: "Finally, an app that respects my time. Kabir and I matched for the right reasons."
              },
              { 
                names: 'Sonal & Rajiv', 
                img: 'https://images.unsplash.com/photo-1529634597503-139d3726fed5?auto=format&fit=crop&q=80&w=800',
                quote: "It is never too late to meet someone good. We found our match after fifty."
              }
            ].map((story, i) => (
              <div key={i} className="spotlight-card rounded-[2.5rem] p-3 group hover-lift bg-white border border-border shadow-sm">
                <div className="aspect-square rounded-[2rem] overflow-hidden mb-4 bg-surface-soft">
                  <img src={story.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={story.names} />
                </div>
                <div className="p-4 space-y-4">
                  <p className="text-lg font-bold text-text-main tracking-tight leading-snug">&quot;{story.quote}&quot;</p>
                  <div className="pt-1">
                    <p className="text-base font-bold text-text-main">{story.names}</p>
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary">Verified Match</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Section - Compact Mode */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto spotlight-card rounded-[3.5rem] p-16 text-center space-y-10 relative overflow-hidden bg-text-main shadow-2xl shadow-black/10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-primary/20 to-transparent"></div>
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter text-white relative z-10 leading-tight">
            Start Your <br />
            <span className="text-primary italic font-light">Story.</span>
          </h2>
          <p className="text-lg text-white/70 max-w-xl mx-auto font-medium relative z-10 leading-relaxed">
            Join serious singles who want safer matches, better conversations, and real relationships.
          </p>
          <div className="pt-4 relative z-10">
            <button className="bg-white text-text-main px-12 py-6 rounded-2xl font-bold text-sm uppercase tracking-widest shadow-xl hover:scale-105 transition-all">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
